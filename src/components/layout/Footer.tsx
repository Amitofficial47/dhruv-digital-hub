"use client";

import Link from "next/link";
import Image from "next/image";

import {
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#001B5E] text-white">

      {/* TOP GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#001B5E] via-[#002C8F] to-[#001B5E]" />

      {/* GLOW */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1450px] px-6 pb-8 pt-20">

        {/* TOP CTA SECTION */}
        <div className="mb-16 overflow-hidden rounded-[32px] border border-white/10 bg-white/10 p-10 backdrop-blur-xl">

          <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">

            <div>

              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
                CONNECT • CREATE • GROW
              </p>

              <h2 className="max-w-3xl text-4xl font-bold leading-tight md:text-5xl">
                Ready To Launch Your Powerful Digital Campaign?
              </h2>

              <p className="mt-5 max-w-2xl text-lg text-blue-100">
                Build influence, strengthen public trust, and grow your
                digital presence with strategic campaigns and modern
                communication solutions.
              </p>

            </div>

            <button className="flex items-center gap-2 rounded-2xl bg-[#0057FF] px-8 py-5 text-lg font-semibold text-white transition hover:bg-[#0047D9]">

              Talk To Our Experts

              <ArrowUpRight size={22} />

            </button>

          </div>
        </div>

        {/* MAIN FOOTER GRID */}
        <div className="grid gap-14 lg:grid-cols-4">

          {/* COLUMN 1 */}
          <div>

            {/* LOGO */}
            <div className="mb-6 flex items-center justify-center">

              {/* LOGO IMAGE */}
              <Image
                src="/logo1.png"
                alt="Dhruv Digital Hub Logo"
                width={70}
                height={70}
                className="h-auto w-auto object-contain"
              />

              {/* LOGO TEXT */}
              {/* <div>

                <h2 className="text-3xl font-extrabold leading-none">
                  DHRUV
                </h2>

                <h2 className="text-3xl font-extrabold leading-none text-[#4DA3FF]">
                  DIGITAL HUB
                </h2>

              </div> */}

            </div>

            <p className="max-w-sm leading-8 text-blue-100">
              Dhruv Digital Hub is a modern Political PR & Digital
              Campaign agency helping leaders, NGOs, and organizations
              build influence through strategic communication.
            </p>

            {/* SOCIALS */}
            <div className="mt-8 flex items-center gap-4">

              <Link
                href="#"
                className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 transition hover:bg-[#0057FF]"
              >
                <FaFacebookF size={18} />
              </Link>

              <Link
                href="#"
                className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 transition hover:bg-[#0057FF]"
              >
                <FaInstagram size={18} />
              </Link>

              <Link
                href="#"
                className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 transition hover:bg-[#0057FF]"
              >
                <FaYoutube size={18} />
              </Link>

              <Link
                href="#"
                className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 transition hover:bg-[#0057FF]"
              >
                <FaLinkedinIn size={18} />
              </Link>

              <Link
                href="#"
                className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 transition hover:bg-[#0057FF]"
              >
                <FaTwitter size={18} />
              </Link>

            </div>
          </div>

          {/* COLUMN 2 */}
          <div>

            <h3 className="mb-8 text-2xl font-bold">
              Quick Links
            </h3>

            <div className="flex flex-col gap-5 text-blue-100">

              <Link href="/" className="transition hover:text-white">
                Home
              </Link>

              <Link href="/" className="transition hover:text-white">
                About Us
              </Link>

              <Link href="/" className="transition hover:text-white">
                Services
              </Link>

              <Link href="/" className="transition hover:text-white">
                Campaign Packages
              </Link>

              <Link href="/" className="transition hover:text-white">
                Portfolio
              </Link>

              <Link href="/" className="transition hover:text-white">
                Contact Us
              </Link>

            </div>
          </div>

          {/* COLUMN 3 */}
          <div>

            <h3 className="mb-8 text-2xl font-bold">
              Our Services
            </h3>

            <div className="flex flex-col gap-5 text-blue-100">

              <p>Political PR</p>

              <p>Election Campaigns</p>

              <p>Social Media Management</p>

              <p>Trust Building</p>

              <p>Graphic Design & Branding</p>

              <p>WhatsApp Outreach</p>

            </div>
          </div>

          {/* COLUMN 4 */}
          <div>

            <h3 className="mb-8 text-2xl font-bold">
              Contact Info
            </h3>

            <div className="space-y-6">

              {/* PHONE */}
              <div className="flex items-start gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-[#4DA3FF]">
                  <Phone size={20} />
                </div>

                <div>

                  <p className="text-sm text-blue-200">
                    Phone Number
                  </p>

                  <p className="mt-1 font-medium">
                    +91 12345 67890
                  </p>

                </div>
              </div>

              {/* EMAIL */}
              <div className="flex items-start gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-[#D4AF37]">
                  <Mail size={20} />
                </div>

                <div>

                  <p className="text-sm text-blue-200">
                    Email Address
                  </p>

                  <p className="mt-1 font-medium">
                    info@dhruvdigitalhub.com
                  </p>

                </div>
              </div>

              {/* LOCATION */}
              <div className="flex items-start gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-green-400">
                  <MapPin size={20} />
                </div>

                <div>

                  <p className="text-sm text-blue-200">
                    Location
                  </p>

                  <p className="mt-1 font-medium">
                    Rohtak,Haryana,Delhi India
                  </p>

                </div>
              </div>

            </div>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="mt-16 border-t border-white/10 pt-8">

          <div className="flex flex-col items-center justify-between gap-4 text-center lg:flex-row">

            <p className="text-blue-100">
              © 2026 Dhruv Digital Hub. All Rights Reserved.
            </p>

            <p className="font-medium text-[#D4AF37]">
              Your Brand, Our Strategy, Digital Success.
            </p>

          </div>
        </div>

      </div>
    </footer>
  );
}