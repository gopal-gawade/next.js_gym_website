'use client';

import React, { useEffect, useState } from 'react';
import { Oswald } from "next/font/google";
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { UserButton, useUser } from '@clerk/nextjs';

const oswald = Oswald({
  weight: "400",
  subsets: ["latin"],
});

export default function Navbar() {
  const [show, setShow] = useState<boolean>(false);
  const [navbar, setNavbar] = useState<boolean>(false);
  const path = usePathname();
  const { isSignedIn, user } = useUser();

  const listenScrollEvent = () => {
    window.scrollY > 10 ? setNavbar(true) : setNavbar(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  const navLinks = [
    { name: "ABOUT US", link: "/aboutus" },
    { name: "SERVICES", link: "/services" },
    { name: "PRICING", link: "/pricing" },
    { name: "CONTACT US", link: "/contactus" }
  ]

  return (
    <div className={`fixed z-20 w-full right-0 left-0 top-0 flex flex-row items-center justify-between transition-all duration-500 text-white ${navbar ? " bg-[#e63946] p-4 shadow-lg" : "bg-transparent backdrop-blur-xs p-6 shadow-sm"}`}>
      <div className="container mx-auto flex items-center justify-between">
        <div className={`flex items-center justify-center gap-2 ${oswald.className} ${show ? "hidden" : "block"} md:block`}>
          <Link href="/" className={`text-lg sm:text-3xl cursor-pointer`}>
            Lio Fit
          </Link>
        </div>

        <ul className="hidden md:flex md:flex-row items-center justify-end md:gap-4 lg:gap-8 text-md sm:text-lg">
          {path === '/admin' ?
            <>
              <li className={`transform translate-y-0 transition-all duration-250 hover:translate-y-[-2px] ${!navbar ? "hover:text-[#e63946]" : "hover:text-[#1c1c1c]"}`}>
                {isSignedIn && (
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-sm sm:text-md hidden sm:block">
                      Welcome,{" "}
                      {user.firstName ?? user.emailAddresses[0].emailAddress}
                    </span>

                    <UserButton />
                  </div>
                )}
              </li>
            </> :
            <>
              {navLinks.map((navLink, i) => (
                <li
                  key={i}
                  className={`transform translate-y-0 transition-all duration-250 hover:translate-y-[-2px] ${!navbar ? "hover:text-[#e63946]" : "hover:text-[#1c1c1c]"}`}
                >
                  <Link href={navLink.link} className="h-12">
                    {navLink.name}
                  </Link>
                </li>
              ))}
            </>
          }
        </ul>

        <div
          className="flex items-center md:hidden ml-auto m-2 cursor-pointer text-xl z-30"
          onClick={() => setShow(!show)}
        >
          {show ?
            <X /> :
            <Menu />
          }
        </div>
      </div>

      <div className={`bg-[#e63946] text-white transition-all duration-500 absolute md:hidden w-48 h-screen top-0 bottom-0 z-20 ${show ? "left-[0]" : "left-[-100%]"}`}>
        <ul className="h-full flex flex-col items-center justify-start gap-8 pt-8 text-md sm:text-lg">
          <li className="transform translate-y-0 transition-all duration-250 hover:translate-y-[-2px]">
            <div className={`flex items-center justify-center gap-2 ${oswald.className}`}>
              <Link href="/" className={`text-xl sm:text-2xl cursor-pointer`}>
                Lio Fit
              </Link>
            </div>
          </li>

          {path === '/admin' ?
            <>
              <li className={`transform translate-y-0 transition-all duration-250 hover:translate-y-[-2px] ${!navbar ? "hover:text-[#e63946]" : "hover:text-[#1c1c1c]"}`}>
                {isSignedIn && (
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-sm sm:text-md hidden sm:block">
                      Welcome,{" "}
                      {user.firstName ?? user.emailAddresses[0].emailAddress}
                    </span>

                    <UserButton />
                  </div>
                )}
              </li>
            </> :
            <>
              {navLinks.map((navLink, i) => (
                <li
                  key={i}
                  className="transform translate-y-0 transition-all duration-250 hover:translate-y-[-2px] hover:text-[#1c1c1c]"
                >
                  <Link href={navLink.link} className="h-12">
                    {navLink.name}
                  </Link>
                </li>
              ))}
            </>
          }
        </ul>
      </div>

      {show && (
        <div
          className={`absolute top-0 bottom-0 w-[150vh] h-screen ${show ? "left-[0]" : "left-[-100%]"} bg-[#000000]/50`}
          onClick={() => setShow(false)}
        />
      )}
    </div>
  )
}
