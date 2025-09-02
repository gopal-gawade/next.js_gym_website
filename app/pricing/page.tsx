import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gym Membership Pricing – Lio Fit Fitness Centre Ratnagiri",
  description:
    "Affordable gym membership plans in Ratnagiri. Choose monthly, quarterly, or annual packages with personal training add-ons at Lio Fit Fitness Centre.",
  alternates: { canonical: "https:///pricing" },
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
    url: "https:///pricing",
    itemListElement: [
      { "@type": "Offer", name: "Monthly Membership", price: "1100", priceCurrency: "INR" },
      { "@type": "Offer", name: "Quarterly Membership", price: "2499", priceCurrency: "INR" },
      { "@type": "Offer", name: "Annual Membership", price: "7999", priceCurrency: "INR" }
    ]
  };

  return (
    <div className="mt-25">
      <h1>Gym Membership Pricing – Lio Fit Gym Ratnagiri</h1>
      <p>Choose a plan that fits your fitness goals:</p>
      <ul>
        <li><strong>Monthly:</strong> ₹999 – Ideal for short-term goals</li>
        <li><strong>Quarterly:</strong> ₹2499 – Best value for beginners</li>
        <li><strong>Annual:</strong> ₹7999 – Transform your lifestyle</li>
      </ul>

      <p>Personal training and nutrition guidance available as add-ons.</p>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    </div>
  );
}
