import Image from 'next/image'
import React from 'react'
import { Card, CardContent, CardHeader } from './ui/card'
import { Oswald } from 'next/font/google';

const oswald = Oswald({
    weight: "400",
    subsets: ["latin"],
});

const trainers = [
    { name: 'Suraj Pandit', image: '/suraj.jpg', position: 'Head', description: "My passion is helping you reach your fitness peak through customized programs that focus on your health, performance, and long-term success." },
    { name: 'Suyog Topare', image: '/suyog.jpg', position: 'Gym Trainer', description: "My mission as a trainer is simple: to help you train smarter, get stronger, and transform your fitness with programs built around your unique goals." },
    { name: 'Vedant Pawaskar', image: '/vedant.jpg', position: 'Gym Trainer', description: "I'm passionate about helping you unlock your unique fitness potential through tailored training that prioritizes your health and empowers your goals." }
]

export default function Trainer() {
    return (
        <div className='min-h-[100vh] px-4 py-12 md:py-16 text-center flex flex-col items-center justify-center'>
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 max-w-5xl mx-auto py-6">
                {trainers.map((trainer, i) => (
                    <Card
                        key={i}
                        className="group p-0 bg-black text-white border-0 transition-all duration-300 hover:-translate-y-2"
                    >
                        <Image
                            src={trainer.image}
                            alt={trainer.name}
                            height={300}
                            width={300}
                            className="w-full h-80 object-cover object-top rounded-t-lg mb-[-21px]"
                        />

                        <div className="p-6 mt-0 group-hover:bg-[#e63946] transition-colors duration-250 rounded-b-lg">
                            <h3 className={`${oswald.className} my-2 text-xl lg:text-2xl text-[#e63946] group-hover:text-white`}>
                                {trainer.name}
                            </h3>

                            <p className="text-sm uppercase tracking-wide text-gray-200 leading-tight mb-2">
                                {trainer.position}
                            </p>

                            <p className="text-gray-300 text-sm leading-relaxed">
                                {trainer.description}
                            </p>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    )
}
