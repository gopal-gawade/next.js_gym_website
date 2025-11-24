// ✅ Correct Clerk → Neon Webhook Integration

import { Webhook } from "svix";
import { headers } from "next/headers";
import { WebhookEvent } from "@clerk/nextjs/server";
import prisma from "@/app/lib/client";

export async function POST(req: Request) {
  const SIGNING_SECRET = process.env.CLERK_WEBHOOK_SECRET;

  if (!SIGNING_SECRET) {
    console.error("Missing CLERK_WEBHOOK_SECRET in .env");
    return new Response("Missing CLERK_WEBHOOK_SECRET", { status: 500 });
  }

  const wh = new Webhook(SIGNING_SECRET);
  const headerPayload = await headers();

  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  if (!svix_id || !svix_timestamp || !svix_signature) {
    console.error("Missing Svix headers");
    return new Response("Missing Svix headers", { status: 400 });
  }

  const payload = await req.json();
  const body = JSON.stringify(payload);

  let evt: WebhookEvent;
  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error("Verification failed:", err);
    return new Response("Verification failed", { status: 400 });
  }

  const eventType = evt.type;
  console.log("Clerk Webhook Event:", eventType);

  if (eventType === "user.created") {
    const userId = evt.data.id;
    const email = evt.data.email_addresses?.[0]?.email_address ?? "unknown@none.com";
    const username = evt.data.username ?? userId;
    const name = `${evt.data.first_name || ""} ${evt.data.last_name || ""}`.trim();

    try {
      await prisma.user.create({
        data: {
          id: userId,
          email,
          username,
          name: name || null,
        },
      });
      console.log("User inserted into Neon!");
      return new Response("User created successfully", { status: 200 });
    } catch (err) {
      console.error("Prisma create error:", err);
      return new Response("Failed to create user", { status: 500 });
    }
  }

  if (eventType === "user.updated") {
    const email = evt.data.email_addresses?.[0]?.email_address ?? "unknown@none.com";
    const username = evt.data.username ?? evt.data.id;
    const name = `${evt.data.first_name || ""} ${evt.data.last_name || ""}`.trim();

    try {
      await prisma.user.update({
        where: { id: evt.data.id },
        data: { email, username, name: name || null },
      });
      console.log("User updated in Neon!");
      return new Response("User updated successfully", { status: 200 });
    } catch (err) {
      console.error("Prisma update error:", err);
      return new Response("Failed to update user", { status: 500 });
    }
  }

  return new Response("Webhook received", { status: 200 });
}
