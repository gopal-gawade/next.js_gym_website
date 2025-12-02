import { FaYoutube, FaInstagramSquare } from "react-icons/fa";
import { Oswald } from "next/font/google";
import Link from "next/link";
import React from "react";
import { SignInButton, SignOutButton } from '@clerk/nextjs';

const oswald = Oswald({
  weight: "500",
  subsets: ["latin"],
});

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#1c1c1c] text-white p-6 border-t border-white/10">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="flex flex-col gap-2 items-center md:items-start">
          <h3 className={`${oswald.className} text-2xl font-bold tracking-wide`}>
            Lio-Fit Unisex Fitness Gym
          </h3>

          <p className="text-sm text-gray-300">
            Unleash your strength. Train harder. Live fitter.
          </p>

          <div className="flex flex-row gap-4 text-2xl mt-3">
            <a
              href="https://www.instagram.com/lio_fit_ratnagiri"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/10 hover:bg-[#e63946] transition-colors duration-300"
            >
              <FaInstagramSquare />
            </a>

            <a
              href="https://www.youtube.com/@fiteness_buddy6570"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/10 hover:bg-[#e63946] transition-colors duration-300"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2 items-center md:items-start">
          <h3 className={`${oswald.className} text-xl`}>
            Quick Links
          </h3>

          <Link href="/aboutus" className="hover:text-[#e63946] transition-all">
            About Us
          </Link>

          <Link href="/services" className="hover:text-[#e63946] transition-all">
            Services
          </Link>

          <Link href="/pricing" className="hover:text-[#e63946] transition-all">
            Pricing
          </Link>

          <Link href="/sign-in" target="_blank" rel="noopener noreferrer" className="hover:text-[#e63946] transition-all">
            Admin
          </Link>
        </div>

        <div className="flex flex-col gap-2 items-center md:items-start">
          <h3 className={`${oswald.className} text-xl`}>
            Programs
          </h3>

          <p className="hover:text-[#e63946] cursor-pointer transition-all">
            Strength Training
          </p>

          <p className="hover:text-[#e63946] cursor-pointer transition-all">
            Cardio
          </p>

          <p className="hover:text-[#e63946] cursor-pointer transition-all">
            Personal Coaching
          </p>
        </div>

        <div className="flex flex-col gap-2 items-center md:items-start">
          <h3 className={`${oswald.className} text-xl`}>
            Contact
          </h3>

          <a
            href="mailto:panditsuraj259@gmail.com"
            className="hover:text-[#e63946] transition-all"
          >
            📧 panditsuraj259@gmail.com
          </a>

          <p>📞 +91-8390801842</p>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-sm text-center text-gray-400">
        <p>©2025 Lio-Fit Unisex Fitness Gym, Ratnagiri. All rights reserved.</p>
        <p>
          Designed & Created by Gopal Gawade
          <br />
          <span className="text-xs">
            Background Photo by <a target="_blank" rel="noopener noreferrer" href="https://unsplash.com/@visualsbyroyalz?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Anastase Maragos</a> on <a href="https://unsplash.com/photos/topless-man-in-black-shorts-sitting-on-black-and-silver-barbell-9dzWZQWZMdE?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
          </span>
        </p>
      </div>
    </footer>
  );
}
