import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gym Services – Strength, Cardio & Personal Training in Ratnagiri",
  description:
    "Explore Lio Fit Gym services in Ratnagiri: strength training, cardio, weight loss programs, bodybuilding, and expert personal training for all levels.",
  alternates: { canonical: "https:///services" },
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
    provider: { "@type": "HealthClub", name: "Lio Fit Fitness Centre", url: "https://.com" },
    areaServed: { "@type": "Place", name: "Ratnagiri, Maharashtra" },
    description:
      "Strength training, cardio, weight loss, bodybuilding, and personal training services at Lio Fit Gym Ratnagiri."
  };

  return (
    <div className="mt-25">
      <h1>Our Gym Services in Ratnagiri</h1>
      <p>At Lio Fit Gym, we provide complete fitness solutions:</p>
      <ul>
        <li>💪 Strength & Muscle Building</li>
        <li>🏃 Cardio & Functional Training</li>
        <li>⚡ Weight Loss & Fat Burn Programs</li>
        <li>👨‍🏫 Personal Training & Diet Guidance</li>
      </ul>

      <p>Whatever your fitness goals, our trainers will guide you step by step.</p>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    </div>
  );
}
