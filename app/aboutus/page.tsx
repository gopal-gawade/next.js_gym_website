import type { Metadata } from "next";
import { Oswald } from "next/font/google";

export const metadata: Metadata = {
  title: "About Lio Fit Gym – Best Fitness Centre in Ratnagiri",
  description:
    "Learn more about Lio Fit Fitness Centre, Ratnagiri’s most trusted unisex gym. We help people achieve fitness goals with expert coaching and state-of-the-art facilities.",
  alternates: { canonical: "https:///about" },
  keywords: [
    "about Lio Fit Gym Ratnagiri",
    "best gym in Ratnagiri",
    "fitness story Ratnagiri",
  ],
};

const oswald = Oswald({
  weight: "400",
  subsets: ["latin"],
});

export default function AboutPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "About Lio Fit Gym",
    url: "https:/about",
    description:
      "About Lio Fit Fitness Centre, Ratnagiri’s most trusted gym for cardio, strength, and personal training.",
  };

  return (
    <div className="container min-h-screen mx-auto px-6 md:px-12 py-30 flex flex-col items-center justify-center text-white bg-black/70">
      <h1 className={`${oswald.className} text-4xl md:text-5xl font-extrabold uppercase mb-6 text-[#e63946] tracking-wide text-center`}>
        About Lio Fit Fitness Centre
      </h1>

      <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto text-center mb-10">
        Lio Fit Fitness Centre was founded with one goal — to be the{" "}
        <strong className="text-white">best gym in Ratnagiri</strong>. <br />
        With certified trainers, personalized workout plans, and modern
        equipment, we are dedicated to helping you achieve your fitness goals
        and live a healthier, stronger life.
      </p>

      <div className="max-w-3xl mx-auto text-center mt-12">
        <h2 className={`${oswald.className} text-3xl font-semibold uppercase text-[#e63946] mb-4`}>
          Our Mission
        </h2>
        <p className="text-gray-300 text-base md:text-lg leading-relaxed">
          Our mission is to make fitness accessible, enjoyable, and
          result-driven for everyone in Ratnagiri. Whether you’re new to
          workouts or a seasoned athlete, we help you push your limits forward.
        </p>
      </div>

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
