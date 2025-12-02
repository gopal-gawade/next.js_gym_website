import type { Metadata } from "next";
import { Oswald } from "next/font/google";

const oswald = Oswald({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gym Membership Pricing - Lio Fit Fitness Centre Ratnagiri",
  description:
    "Discover affordable gym membership plans in Ratnagiri with exclusive discounts—buy 3 months and get 1 free, 6 months and get 2 free, or 1 year and get 3 free. Personal training add-ons available at Lio Fit Fitness Centre.",
  alternates: {
    canonical: "https://liofitgymratnagiri.netlify.app/pricing"
  },
  keywords: [
    "gym membership Ratnagiri",
    "cheap gym Ratnagiri",
    "Lio Fit Gym pricing",
    "fitness packages Ratnagiri"
  ],
};

export default function PricingPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: "Lio Fit Gym Membership Plans",
    url: "https://liofitgymratnagiri.netlify.app/pricing",
  };

  return (
    <div className="container min-h-screen mx-auto px-6 md:px-12 py-30 flex flex-col gap-2 items-center justify-center text-white bg-black/70">
      <h1 className={`${oswald.className} text-4xl md:text-5xl font-extrabold uppercase mb-6 text-[#e63946] tracking-wide text-center`}>
        Gym Membership Pricing - Lio Fit Gym Ratnagiri
      </h1>

      <p className="text-gray-200 text-lg leading-relaxed">
        Choose a plan that fits your fitness goals:
      </p>

      <ul className="space-y-3 text-lg mb-2 font-medium text-white">
        <li>Buy <strong>3 months</strong> and get <strong>1 month</strong> free</li>
        <li>Buy <strong>6 months</strong> and get <strong>2 months</strong> free</li>
        <li>Buy <strong>1 year</strong> and get <strong>3 months</strong> free</li>
      </ul>

      <p className="text-gray-300 text-lg">
        Personal training and nutrition guidance available as add-ons.
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
