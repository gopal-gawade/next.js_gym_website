import type { Metadata } from "next";
import { Oswald } from "next/font/google";

const oswald = Oswald({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gym Services - Strength, Cardio & Personal Training in Ratnagiri",
  description:
    "Explore Lio-Fit Gym services in Ratnagiri: strength training, cardio, weight loss programs, bodybuilding, and expert personal training for all levels.",
  alternates: { canonical: "https://liofitgymratnagiri.netlify.app/services" },
  keywords: [
    "gym services Ratnagiri",
    "personal training Ratnagiri",
    "weight loss gym Ratnagiri",
    "cardio fitness Ratnagiri"
  ],
};

export default function ServicesPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Gym and Fitness Training",
    provider: { "@type": "HealthClub", name: "Lio-Fit Unisex Fitness Gym", url: "https://liofitgymratnagiri.netlify.app/services" },
    areaServed: { "@type": "Place", name: "Ratnagiri, Maharashtra" },
    description:
      "Strength training, cardio, weight loss, bodybuilding, and personal training services at Lio-Fit Gym Ratnagiri."
  };

  return (
    <div className="container min-h-screen mx-auto px-6 md:px-12 py-30 flex flex-col gap-2 items-center justify-center text-white bg-black/70">
      <h1 className={`${oswald.className} text-4xl md:text-5xl font-extrabold uppercase mb-6 text-[#e63946] tracking-wide text-center`}>
        Our Gym Services in Ratnagiri
      </h1>

      <p className="text-gray-200 text-lg leading-relaxed">
        At <span className="font-semibold text-white">Lio-Fit Gym</span>, we provide complete fitness solutions:
      </p>

      <ul className="space-y-3 text-lg mb-2 text-gray-300">
        <li>💪 <span className="font-medium text-white">Strength & Muscle Building</span></li>
        <li>🏃 <span className="font-medium text-white">Cardio & Functional Training</span></li>
        <li>⚡ <span className="font-medium text-white">Weight Loss & Fat Burn Programs</span></li>
        <li>👨‍🏫 <span className="font-medium text-white">Personal Training & Diet Guidance</span></li>
      </ul>

      <p className="text-gray-300 text-lg">
        Whatever your fitness goals, our expert trainers will guide you every step of the way.
      </p>

      <div className="mt-16 flex justify-center">
        <div className="w-32 h-1 bg-[#e63946] rounded"></div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    </div>
  );
}
