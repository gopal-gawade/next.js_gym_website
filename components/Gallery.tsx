import React from "react";
import { Oswald } from "next/font/google";
import Image from "next/image";

const oswald = Oswald({
    weight: "400",
    subsets: ["latin"],
});

export default function Gallery() {
    const items = [
    { id: 1, media: "/photo(1).jpg" },
    { id: 2, media: "/photo(2).jpg" },
    { id: 3, media: "/photo(3).jpg" },
    { id: 4, media: "/photo(4).jpg" },
    { id: 5, media: "/photo(5).jpg" },
    { id: 6, media: "/photo(6).jpg" },
    { id: 7, media: "/photo(7).jpg" },
    { id: 9, media: "/photo(9).jpg" }
];
    

    return (
        <div className="bg-black p-6 mx-auto text-center text-md leading-loose flex flex-col items-center justify-center">
             <h1 className={`${oswald.className} text-4xl md:text-5xl font-extrabold uppercase mb-6 text-[#e63946] tracking-wide text-center`}>
                Inside the Gym
            </h1>

            <div className="gallery">
                {items.map((items) => {
                    return (
                        <div
                            key={items.id}
                            className="galleryItem"
                        >
                            <Image
                                src={items.media}
                                alt=""
                                width={500}
                                height={500}
                                loading="lazy"
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
