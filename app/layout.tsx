import "./globals.css";
import Script from "next/script";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Inter } from "next/font/google";
import Scroll from "@/components/Scroll";
import AdModal from "@/components/AdModal";

const inter = Inter({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lio Fit Fitness Centre – Best Gym in Ratnagiri",
  description:
    "Lio Fit Fitness Centre, Ratnagiri’s top-rated unisex gym. Modern equipment, certified trainers, personalized training, weight loss, and strength programs.",
  keywords: [
    "Best Gym in Ratnagiri",
    "Lio Fit Gym Ratnagiri",
    "Unisex Gym Ratnagiri",
    "Fitness Centre Ratnagiri",
    "Personal Training Ratnagiri",
  ],
  alternates: {
    canonical: "https://.com/",
  },
  openGraph: {
    title: "Lio Fit Fitness Centre - Best Gym in Ratnagiri",
    description:
      "Join Ratnagiri’s #1 gym for personal training, weight loss, strength, and cardio programs. Modern equipment and certified trainers available.",
    url: "https://.com",
    siteName: "Lio Fit Fitness Centre",
    locale: "en_IN",
    type: "website",
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "HealthClub",
    name: "Lio Fit Fitness Centre",
    url: "https://.com/",
    telephone: "+918390801842",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Near Garmin police station, Karwanchiwadi road, Ratnagiri",
      addressLocality: "Ratnagiri",
      addressRegion: "Maharashtra",
      postalCode: "415612",
      addressCountry: "IN",
    },
    geo: { "@type": "GeoCoordinates", latitude: "16.9902", longitude: "73.3120" },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "06:00",
        closes: "22:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "99",
    },
    sameAs: [
      "https://www.instagram.com/lio_fit_ratnagiri/#"
    ],
  };

  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Scroll />

        <nav>
          <Navbar />
        </nav>

        <main style={{
          backgroundImage: "url('/muscles-wallpaper-5120x2880.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
          className="text-white flex-1 flex flex-col items-stretch">
          {children}
        </main>

        <footer>
          <Footer />
        </footer>

        <AdModal />

        <Script
          id="healthclub-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </body>
    </html>
  );
}
