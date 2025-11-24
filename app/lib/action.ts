"use server";

import prisma from "@/app/lib/client";
import { revalidatePath } from "next/cache";
import { auth } from "@clerk/nextjs/server";
import { randomUUID } from "crypto";
import { NextResponse } from "next/server";

export async function addAd(form: {
    photoUrl: string;
    startDate: string | null;
    endDate: string | null;
    isActive: boolean;
}, img: string) {
    const { userId } = await auth();
    if (!userId) throw new Error("Unauthorized");

    try {
        await prisma.advertisement.create({
            data: {
                photoUrl: img,
                startDate: form.startDate ? new Date(form.startDate) : null,
                endDate: form.endDate ? new Date(form.endDate) : null,
                isActive: form.isActive,
                userId: userId,
                id: randomUUID()
            },
        });

        revalidatePath("/admin");
    } catch (err) {
        console.error(err);
        throw err;
    }
}

export const fetchAdvertisements = async () => {
    try {
        const ads = await prisma.advertisement.findMany({
            orderBy: { createdAt: "desc" },
        });

        const serializedAds = ads.map((ad) => ({
            ...ad,
            startDate: ad.startDate ? ad.startDate.toISOString() : null,
            endDate: ad.endDate ? ad.endDate.toISOString() : null,
            createdAt: ad.createdAt.toISOString(),
            updatedAt: ad.updatedAt.toISOString(),
        }));

        return serializedAds;
    }
    catch (err) {
        console.error(err);
        throw err;
    }
}

export const deleteAd = async (adId: string) => {
    const { userId } = await auth();

    if (!userId) {
        throw new Error("Unauthenticated!");
    }

    try {
        await prisma.advertisement.delete({
            where: {
                id: adId,
                userId,
            },
        });
        revalidatePath("/admin");
    } catch (err) {
        console.error(err);
        throw err;
    }
};

export async function updateAd(id: string, isActive: boolean) {
    const { userId } = await auth();
    if (!userId) throw new Error("Unauthorized");

    try {
        await prisma.advertisement.update({
            where: { id },
            data: { isActive },
        });

        revalidatePath("/admin");
    } catch (err) {
        console.error(err);
        throw err;
    }
}
