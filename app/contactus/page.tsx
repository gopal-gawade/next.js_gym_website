import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Lio Fit Gym – Best Gym in Ratnagiri",
    description:
        "Contact Lio Fit Fitness Centre in Ratnagiri. Visit us near Karwanchiwadi Road or call us for memberships. Open Monday–Saturday, 6 AM – 10 PM.",
    alternates: { canonical: "https:///contactus" },
    keywords: [
        "contact Lio Fit Gym Ratnagiri",
        "best gym near me Ratnagiri",
        "gym location Ratnagiri"
    ],
};

export default function ContactPage() {
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        url: "https:///contactus",
        about: { "@type": "HealthClub", name: "Lio Fit Fitness Centre" },
        contactPoint: {
            "@type": "ContactPoint",
            telephone: "+91XXXXXXXXXX",
            contactType: "Customer Service",
            areaServed: "IN",
            availableLanguage: ["English", "Marathi"]
        }
    };

    return (
        <div className="mt-25">
            <h1>Contact Lio Fit Fitness Centre</h1>
            <p>
                📍 Address: Om Sai Om Building, Karwanchiwadi Road, Kasop, Ratnagiri, Maharashtra 415612
            </p>
            <p>📞 Phone: +918390801842</p>
            <p>⏰ Timings: Monday – Saturday, 6 AM – 10 PM</p>

            <p>
                Have questions about membership? Visit us today and join the
                <strong> best gym in Ratnagiri</strong>.
            </p>

            <script 
            type="application/ld+json" 
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} 
            />
        </div>
    );
}
