import { Button } from "@/components/ui/button";
import { Oswald } from "next/font/google";
import { CalendarClock, Check, MapPin, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const oswald = Oswald({
  weight: "400",
  subsets: ["latin"],
});

export default function Hero() {
  return (
    <div className="min-h-[80vh] w-full text-white container mx-auto mt-24 px-6 md:px-12 flex flex-col lg:flex-row items-stretch justify-between gap-2">
      <div className="w-full flex flex-1 flex-col justify-center">
        <p className="text-[#e63946] uppercase tracking-wide font-semibold mb-2">
          Welcome to Lio Fit Fitness Centre
        </p>

        <h1 className={`${oswald.className} text-3xl md:text-5xl font-extrabold leading-tight uppercase`}>
          Best Gym in Ratnagiri
          <br />
          <span className="text-[#e63946]">
            Push Your Limits
          </span>
          Forward
        </h1>

        <p className="mt-4 text-gray-300 text-base md:text-lg max-w-2xl">
          Join the top-rated unisex gym in Ratnagiri. Modern equipment,
          certified trainers, and customized programs for strength, cardio, and
          weight loss.
        </p>

        <ul className="mt-6 space-y-2 text-gray-200">
          <li className="flex gap-1">
            <Check className="text-green-500" />
            4.8⭐ rating from 99+ members
          </li>
          <li className="flex gap-1">
            <Check className="text-green-500" />
            Modern & hygienic equipment
          </li>
          <li className="flex gap-1">
            <Check className="text-green-500" />
            Affordable membership plans
          </li>
          <li className="flex gap-1">
            <Check className="text-green-500" />
            Personal training & weight loss coaching
          </li>
        </ul>

        <div className="mt-6">
          <Button className="w-full lg:w-fit p-6 rounded-none cursor-pointer bg-[#e63946] text-white font-medium hover:bg-[#c92f3b] translate-y-0 transition-all duration-250 hover:translate-y-[-2px]">
            <span className="text-md md:text-lg">
              Become a Member
            </span>
          </Button>
        </div>
      </div>


      <div className="w-full flex flex-1 flex-col justify-end">
        <Card className="bg-[#e63946] text-white rounded-none border-0">
          <CardContent>
            <div className="w-full flex flex-col lg:flex-row items-stretch divide-y lg:divide-y-0 lg:divide-x divide-[#1c1c1c]">
              <div className="w-full flex items-start gap-2 py-4 lg:py-0 lg:px-2">
                <Phone className="w-6 h-6" />
                <div>

                  <h4 className={`${oswald.className} text-lg font-semibold mb-1`}>
                    +91-8390801842
                  </h4>

                  <p className="text-sm text-gray-200">
                    Call us today to kickstart your fitness journey.
                  </p>
                </div>
              </div>

              <div className="w-full flex items-start gap-2 py-4 lg:py-0 lg:px-2">
                <span className="text-lg">
                  <MapPin />
                </span>

                <div>
                  <h4 className={`${oswald.className} text-lg font-semibold mb-1`}>
                    Om Sai Om building
                  </h4>

                  <p className="text-sm text-gray-200">
                    Near Garmin police station,
                    Karwanchiwadi road,
                    Ratnagiri
                  </p>
                </div>
              </div>

              <div className="w-full flex items-start gap-2 py-4 lg:py-0 lg:px-2">
                <span className="text-lg">
                  <CalendarClock />
                </span>

                <div>
                  <h4 className={`${oswald.className} text-lg font-semibold mb-1`}>
                    <span>Open</span>
                    <br />
                    <span>
                      Monday - Friday
                    </span>
                  </h4>

                  <p className="text-sm text-gray-200">
                    8:00am – 9:00pm
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
