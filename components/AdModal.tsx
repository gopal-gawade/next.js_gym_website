"use client";

import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";

export default function AdModal() {
    const [show, setShow] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(false)
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    if (!show) {
        return null;
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#000000]/50">
            <Card className="relative bg-white text-[#1c1c1c] rounded-2xl shadow-2xl max-w-md p-6 text-center animate-fadeIn">
                <button
                    onClick={() => setShow(false)}
                    className="absolute top-3 right-3 cursor-pointer text-[#1c1c1c] hover:text-[#e63946] transition-all"
                >
                    <X />
                </button>

                <CardHeader className="text-2xl md:text-3xl font-bold text-[#e63946] mb-2">
                    Special Offer!
                </CardHeader>

                <CardContent>
                    <p className="text-base mb-4">
                        Join <span>Lio Fit Gym</span> today and get{" "}
                        <span className="text-[#e63946]">20% OFF</span> on your first month!
                    </p>

                    <Button
                        onClick={() => setShow(false)}
                        className="p-3 rounded-xl cursor-pointer bg-[#e63946] text-white font-medium hover:bg-[#c92f3b] translate-y-0 transition-all duration-250 hover:translate-y-[-2px]"
                    >
                        <span className="text-md md:text-lg">
                            Join Now
                        </span>
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}
