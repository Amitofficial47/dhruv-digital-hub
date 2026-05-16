"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

import {
  Menu,
  X,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Industries", href: "/industries" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Packages", href: "/packages" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full">
      
      {/* TOP INFO BAR */}
      <div className="hidden border-b border-white/10 bg-[#001B5E] text-white lg:block">
        <div className="mx-auto flex h-10 max-w-[1500px] items-center justify-between px-6">

          {/* LEFT SIDE */}
          <div className="flex items-center gap-6 text-sm">

            <div className="flex items-center gap-2">
              <MapPin size={14} />
              <span>Haryana, India</span>
            </div>

            <div className="flex items-center gap-2">
              <Mail size={14} />
              <span>info@dhruvdigitalhub.com</span>
            </div>

            <div className="flex items-center gap-2">
              <Phone size={14} />
              <span>+91 12345 67890</span>
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-4 text-sm">
            <FaFacebookF className="cursor-pointer transition hover:text-[#D4AF37]" />
            <FaInstagram className="cursor-pointer transition hover:text-[#D4AF37]" />
            <FaYoutube className="cursor-pointer transition hover:text-[#D4AF37]" />
            <FaLinkedinIn className="cursor-pointer transition hover:text-[#D4AF37]" />
          </div>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <nav className="border-b border-zinc-200 bg-white shadow-sm">
        <div className="mx-auto flex h-20 max-w-[1500px] items-center justify-between px-6">

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3">

            {/* LOGO ICON (UPDATED) */}
            <Image
              src="/logo1.png"
              alt="Dhruv Digital Hub Logo"
              width={50}
              height={50}
              className="object-contain"
            />

            {/* LOGO TEXT */}
            <div className="leading-tight">

              <h1 className="text-xl font-extrabold tracking-wide text-[#001B5E]">
                DHRUV
              </h1>

              <p className="text-sm font-semibold tracking-[0.3em] text-[#D4AF37]">
                DIGITAL HUB
              </p>

            </div>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <ul className="hidden items-center gap-8 lg:flex">

            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-sm font-semibold text-[#001B5E] transition hover:text-[#0057FF]"
                >
                  {link.name}
                </Link>
              </li>
            ))}

          </ul>

          {/* CTA BUTTON */}
          <div className="hidden lg:block">
            <button className="rounded-lg bg-[#0057FF] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0047D9]">
              Get In Touch
            </button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-[#001B5E] lg:hidden"
          >
            {menuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="border-t border-zinc-200 bg-white lg:hidden">

            <ul className="flex flex-col gap-6 px-6 py-8">

              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-lg font-medium text-[#001B5E]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}

              {/* MOBILE CTA */}
              <button className="mt-4 rounded-lg bg-[#0057FF] px-6 py-4 font-semibold text-white">
                Get In Touch
              </button>

            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}