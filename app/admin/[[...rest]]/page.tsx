import { fetchAdvertisements } from "@/app/lib/action";
import Advertisement from "@/components/Advertisement";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function AdminPage() {
  const { userId } = await auth();
  const ads = await fetchAdvertisements()

  if (!userId) {
    redirect('/');
  }

  return (
    <div className="min-h-screen pt-24">
      <Advertisement ads={ads}/>
    </div>
  );
}