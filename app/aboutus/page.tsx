import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Lio Fit Gym – Best Fitness Centre in Ratnagiri",
  description:
    "Learn more about Lio Fit Fitness Centre, Ratnagiri’s most trusted unisex gym. We help people achieve fitness goals with expert coaching and state-of-the-art facilities.",
  alternates: { canonical: "https:///about" },
  keywords: [
    "about Lio Fit Gym Ratnagiri",
    "best gym in Ratnagiri",
    "fitness story Ratnagiri"
  ],
};

export default function AboutPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "About Lio Fit Gym",
    url: "https:/about",
    description:
      "About Lio Fit Fitness Centre, Ratnagiri’s most trusted gym for cardio, strength, and personal training."
  };

  return (
    <div className="mt-25">
      <h1>About Lio Fit Fitness Centre</h1>
      <p>
        Lio Fit Fitness Centre was founded with one goal: to be the
        <strong> best gym in Ratnagiri</strong>. With certified trainers,
        personalized workout plans, and modern equipment, we are committed
        to your fitness journey.
      </p>
      <h2>Our Mission</h2>
      <p>
        To make fitness accessible, enjoyable, and result-driven for
        everyone in Ratnagiri.
      </p>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
    </div>
  );
}
