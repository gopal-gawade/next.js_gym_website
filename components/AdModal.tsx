"use client";

import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { usePathname } from "next/navigation";

interface Advertisement {
    id: string;
    photoUrl: string;
    startDate: string | null;
    endDate: string | null;
    isActive: boolean;
}

export default function AdModal({ ads }: { ads: Advertisement[] }) {
    const [show, setShow] = useState(false);
    const [count, setCount] = useState(0);
    const pathname = usePathname();
    const isAdmin = pathname?.startsWith("/admin");

    useEffect(()=>{
        if (!ads.length || isAdmin) return;

        if(ads.length){
            setShow(true)
        }
    },[ads.length, isAdmin])

    useEffect(() => {
        if (!ads.length || isAdmin) return;

        const id = setInterval(() => {
            setCount(prev => (prev + 1) % ads.length);
        }, 5000);

        return () => clearInterval(id);
    }, [ads.length]);

    useEffect(() => {
        if (!ads.length || isAdmin) return;

        const timer = setTimeout(() => {
            setShow(false)
        }, 20000);

        return () => clearTimeout(timer);
    }, []);

    if (!show) return null;

    console.log(ads)

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <Card className="relative w-full max-w-[600px] bg-white rounded-2xl shadow-2xl m-3 text-center">
                <button
                    onClick={() => setShow(false)}
                    className="absolute cursor-pointer top-3 right-3 text-black hover:text-red-500"
                >
                    <X />
                </button>

                <div className="text-3xl font-bold text-red-500 pt-6">
                    Special Offer!
                </div>

                <CardContent className="relative min-h-[320px] overflow-hidden mt-4">
                    {ads.map((ad, i) => (
                        <div
                            key={ad.id}
                            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${count === i ? "opacity-100" : "opacity-0"} `}
                        >
                            <img
                                src={ad.photoUrl || "/muscles-wallpaper-5120x2880.jpg"}
                                alt="Advertisement Image"
                                className="h-full w-auto object-contain"
                            />
                        </div>
                    ))}
                </CardContent>
            </Card>
        </div>
    );
}
