import type { Metadata } from "next";
import { Oswald } from "next/font/google";

const oswald = Oswald({
    weight: "400",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Contact Lio-Fit Gym – Best Gym in Ratnagiri",
    description:
        "Contact Lio-Fit Unisex Fitness Gym in Ratnagiri. Visit us near Karwanchiwadi Road or call us for memberships. Open Monday - Saturday, Morning: 6 AM - 12:30 PM, Evening: 4 PM - 10 PM.",
    alternates: { canonical: "https://liofitgymratnagiri.netlify.app/contactus" },
    keywords: [
        "contact Lio-Fit Gym Ratnagiri",
        "best gym near me Ratnagiri",
        "gym location Ratnagiri"
    ],
};

export default function ContactPage() {
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        url: "https://liofitgymratnagiri.netlify.app/contactus",
        about: { "@type": "HealthClub", name: "Lio-Fit Unisex Fitness Gym" },
        contactPoint: {
            "@type": "ContactPoint",
            telephone: "+918390801842",
            contactType: "Customer Service",
            areaServed: "IN",
            availableLanguage: ["English", "Marathi"],
        },
    };

    return (
        <div className="container min-h-screen mx-auto px-6 md:px-12 py-30 flex flex-col gap-2 items-center justify-center text-center text-white bg-black/70">
            <h1 className={`${oswald.className} text-4xl md:text-5xl font-extrabold uppercase mb-6 text-[#e63946] tracking-wide`}>
                Contact Lio-Fit Unisex Fitness Gym
            </h1>

            <p className="text-gray-200 text-lg leading-relaxed">
                📍 <span className="font-semibold text-white">
                    Om Sai Om Building
                </span>
                , Karwanchiwadi Road, near Gramin Police Station, Ratnagiri, Maharashtra 415612
            </p>

            <p className="text-lg text-gray-200 leading-relaxed">
                📞 <span className="text-white font-semibold">+91 83908 01842</span>
            </p>

            <p className="text-lg text-gray-200 leading-relaxed">
                ⏰ <span className="text-white font-semibold">
                    Monday - Saturday
                </span>,
                <br />

                Morning: 6:00 AM - 12:30 PM, Evening: 4:00 PM - 10:00 PM
            </p>

            <p className="text-gray-300 text-lg">
                Have questions about memberships? Visit us today and join the{" "}
                <span className="text-[#e63946] font-semibold">
                    best gym in Ratnagiri
                </span>
                .
            </p>

            <div className="mt-8">
                <a
                    href="https://maps.app.goo.gl/45hsMCTVC4gvpi7s8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#e63946] hover:bg-[#c92f3b] text-white font-semibold px-6 py-3 uppercase tracking-wide transition-all duration-300 hover:-translate-y-1"
                >
                    View on Google Maps
                </a>
            </div>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
        </div>
    );
}
