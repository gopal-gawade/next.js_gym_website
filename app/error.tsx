"use client";

import { useRouter } from "next/navigation";
import { Oswald } from "next/font/google";
import { Button } from "@/components/ui/button";

const oswald = Oswald({
    weight: "400",
    subsets: ["latin"],
});

export default function Error() {
    const router = useRouter();

    return (
        <div className="p-6 mx-auto text-md leading-loose w-full flex flex-col items-center justify-center min-h-[100vh]">
            <h1 className={`${oswald.className} text-4xl md:text-5xl font-extrabold uppercase mb-6 text-[#e63946] tracking-wide text-center`}>
                Something went wrong!
            </h1>

            <Button
                className="w-full lg:w-fit p-6 rounded-none cursor-pointer bg-[#e63946] text-white font-medium hover:bg-[#c92f3b] translate-y-0 transition-all duration-250 hover:translate-y-[-2px]"
                onClick={() => router.push("/")}
            >
                BACK TO HOME
            </Button>
        </div>
    );
}
