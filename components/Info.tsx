import React from 'react'
import { Card, CardContent, CardHeader } from './ui/card'
import { Oswald } from 'next/font/google';
import Image from 'next/image';

const oswald = Oswald({
    weight: "400",
    subsets: ["latin"],
});

const features = [
    { src: "/gym-workout-spinning-icon.png", title: "Modern equipment", description: " Train with state-of-the-art machines and tools designed for strength, cardio, and endurance." },
    { src: "/dumbbell-icon.png", title: "Professional training", description: "Get expert guidance from certified trainers who focus on your form, safety, and progress." },
    { src: "/heart-icon.png", title: "Personalized plans", description: "Achieve faster results with workout and diet plans tailored to your fitness goals." },
]

export default function Info() {
    return (
        <div className="bg-black px-4 py-12 md:py-16 text-center">
            <p className="text-sm md:text-base text-gray-400 tracking-wide uppercase">
                Why LioFit?
            </p>

            <h2 className={`${oswald.className} text-2xl md:text-3xl lg:text-4xl font-bold text-white py-4`}>
                Stronger every day, with the right guidance.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 max-w-7xl mx-auto py-6">
                {features.map((item, i) => (
                    <Card
                        key={i}
                        className="group bg-black text-white border-0 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-[#e63946]/40"
                    >
                        <CardHeader className="flex items-center justify-center">
                            <div className="flex items-center justify-center w-24 h-24 rounded-full bg-[#1c1c1c] group-hover:bg-[#e63946] transition-all duration-300">
                                <Image
                                    src={item.src}
                                    height={50}
                                    width={50}
                                    alt={item.title}
                                />
                            </div>
                        </CardHeader>

                        <CardContent>
                            <h3 className={`${oswald.className} text-lg md:text-xl font-semibold pb-2`}>
                                {item.title}
                            </h3>

                            <p className="text-gray-400 font-light">
                                {item.description}
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}
