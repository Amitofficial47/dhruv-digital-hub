"use client";

import {
  Check,
  Crown,
  Rocket,
  ShieldCheck,
} from "lucide-react";

const packages = [
  {
    icon: Rocket,
    title: "Starter Package",
    price: "₹15K",
    subtitle: "Perfect for local leaders & startups",
    features: [
      "Basic Social Media Management",
      "12 Creatives Per Month",
      "Festival Greetings",
      "Basic Video Editing",
      "WhatsApp Promotion Support",
    ],
    button: "Get Started",
    highlighted: false,
  },
  {
    icon: ShieldCheck,
    title: "Growth Package",
    price: "₹40K",
    subtitle: "Best for growing organizations",
    features: [
      "Advanced Social Media Handling",
      "Daily Content Strategy",
      "Reels & Campaign Videos",
      "Public Engagement Strategy",
      "Facebook & Instagram Management",
      "Weekly Performance Reports",
    ],
    button: "Choose Growth",
    highlighted: true,
  },
  {
    icon: Crown,
    title: "Premium Election",
    price: "₹1L+",
    subtitle: "Complete digital election management",
    features: [
      "Full Digital Campaign Management",
      "Election Branding Strategy",
      "Booth-Level Outreach",
      "Reputation Management",
      "Dedicated Campaign Team",
      "24×7 Campaign Support",
    ],
    button: "Launch Campaign",
    highlighted: false,
  },
];

export default function CampaignPackages() {
  return (
    <section className="relative overflow-hidden bg-[#001B5E] py-24">

      {/* BACKGROUND GLOW */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1450px] px-6">

        {/* TOP HEADING */}
        <div className="mb-20 text-center">

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
            Campaign Packages
          </p>

          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Flexible Packages For Every Campaign
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100">
            Choose the perfect campaign package based on your goals,
            audience, and political communication strategy.
          </p>

        </div>

        {/* PACKAGES GRID */}
        <div className="grid gap-8 lg:grid-cols-3">

          {packages.map((pkg, index) => {
            const Icon = pkg.icon;

            return (
              <div
                key={index}
                className={`relative overflow-hidden rounded-[32px] border p-10 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                  pkg.highlighted
                    ? "border-[#4DA3FF] bg-white text-[#001B5E]"
                    : "border-white/10 bg-white/10 text-white"
                }`}
              >

                {/* POPULAR BADGE */}
                {pkg.highlighted && (
                  <div className="absolute right-5 top-5 rounded-full bg-[#0057FF] px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-white">

                    Most Popular

                  </div>
                )}

                {/* ICON */}
                <div
                  className={`mb-8 flex h-16 w-16 items-center justify-center rounded-2xl ${
                    pkg.highlighted
                      ? "bg-[#0057FF] text-white"
                      : "bg-white/10 text-[#4DA3FF]"
                  }`}
                >

                  <Icon size={30} />

                </div>

                {/* TITLE */}
                <h3 className="text-3xl font-bold">
                  {pkg.title}
                </h3>

                {/* PRICE */}
                <div className="mt-6 flex items-end gap-2">

                  <span className="text-5xl font-black">
                    {pkg.price}
                  </span>

                  <span
                    className={`mb-2 text-sm ${
                      pkg.highlighted
                        ? "text-zinc-500"
                        : "text-blue-100"
                    }`}
                  >
                    / Month
                  </span>

                </div>

                {/* SUBTITLE */}
                <p
                  className={`mt-5 leading-7 ${
                    pkg.highlighted
                      ? "text-zinc-600"
                      : "text-blue-100"
                  }`}
                >
                  {pkg.subtitle}
                </p>

                {/* FEATURES */}
                <div className="mt-8 space-y-5">

                  {pkg.features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-4"
                    >

                      <div
                        className={`mt-1 flex h-6 w-6 items-center justify-center rounded-full ${
                          pkg.highlighted
                            ? "bg-[#0057FF]/10 text-[#0057FF]"
                            : "bg-white/10 text-[#4DA3FF]"
                        }`}
                      >

                        <Check size={14} />

                      </div>

                      <p
                        className={`leading-7 ${
                          pkg.highlighted
                            ? "text-zinc-700"
                            : "text-blue-100"
                        }`}
                      >
                        {feature}
                      </p>

                    </div>
                  ))}

                </div>

                {/* BUTTON */}
                <button
                  className={`mt-10 w-full rounded-2xl px-6 py-4 text-lg font-semibold transition ${
                    pkg.highlighted
                      ? "bg-[#0057FF] text-white hover:bg-[#0047D9]"
                      : "bg-white text-[#001B5E] hover:bg-[#DDE8FF]"
                  }`}
                >

                  {pkg.button}

                </button>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}