import {
  Megaphone,
  Flag,
  ShieldCheck,
  Palette,
  Video,
  MessageCircle,
} from "lucide-react";

const services = [
  {
    icon: Megaphone,
    title: "Political Social Media",
    items: [
      "Facebook & Instagram",
      "YouTube & Twitter/X",
      "Content Creation",
      "Engagement Strategy",
    ],
  },
  {
    icon: Flag,
    title: "Election Campaign",
    items: [
      "Digital Campaigns",
      "Candidate Branding",
      "Voter Outreach",
      "Booth-Level Awareness",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Political PR",
    items: [
      "Public Image Building",
      "Media Communication",
      "Crisis Management",
      "Positive Narrative",
    ],
  },
  {
    icon: Palette,
    title: "Graphic Design",
    items: [
      "Posters & Creatives",
      "Festival Greetings",
      "Manifesto Design",
      "Campaign Branding",
    ],
  },
  {
    icon: Video,
    title: "Video Production",
    items: [
      "Campaign Videos",
      "Reels & Shorts",
      "Promo Videos",
      "Professional Editing",
    ],
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Outreach",
    items: [
      "WhatsApp Campaigns",
      "Bulk Messaging",
      "Public Awareness",
      "Digital Communication",
    ],
  },
];

export default function CoreServices() {
  return (
    <section className="bg-[#F7F9FC] py-24">

      <div className="mx-auto max-w-[1450px] px-6">

        {/* HEADING */}
        <div className="mb-16 text-center">

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
            Our Expertise
          </p>

          <h2 className="text-4xl font-bold text-[#001B5E] md:text-5xl">
            Our Core Services
          </h2>

          <div className="mx-auto mt-5 h-1 w-28 rounded-full bg-[#0057FF]" />

        </div>

        {/* SERVICES GRID */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="group rounded-[30px] border border-zinc-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >

                {/* ICON */}
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0057FF]/10 text-[#0057FF] transition group-hover:bg-[#0057FF] group-hover:text-white">

                  <Icon size={32} />

                </div>

                {/* TITLE */}
                <h3 className="text-2xl font-bold text-[#001B5E]">
                  {service.title}
                </h3>

                {/* ITEMS */}
                <ul className="mt-6 space-y-4">

                  {service.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-zinc-600"
                    >

                      <div className="h-2 w-2 rounded-full bg-[#D4AF37]" />

                      {item}

                    </li>
                  ))}

                </ul>

                {/* BUTTON */}
                <button className="mt-8 font-semibold text-[#0057FF] transition hover:text-[#001B5E]">
                  Learn More →
                </button>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}