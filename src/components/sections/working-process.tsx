import {
  Search,
  Lightbulb,
  FilePenLine,
  Megaphone,
  BarChart3,
} from "lucide-react";

const processSteps = [
  {
    number: "01",
    icon: Search,
    title: "Research & Analysis",
    description:
      "Understanding constituency, audience behavior, campaign goals, and digital presence.",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Strategy Planning",
    description:
      "Creating communication strategies and digital outreach plans for maximum impact.",
  },
  {
    number: "03",
    icon: FilePenLine,
    title: "Content Creation",
    description:
      "Designing creatives, videos, reels, and branding content for public engagement.",
  },
  {
    number: "04",
    icon: Megaphone,
    title: "Promotion & Outreach",
    description:
      "Running campaigns across social media, WhatsApp, and digital advertising platforms.",
  },
  {
    number: "05",
    icon: BarChart3,
    title: "Monitoring & Reporting",
    description:
      "Tracking campaign performance, audience engagement, and digital growth results.",
  },
];

export default function WorkingProcess() {
  return (
    <section className="bg-[#F7F9FC] py-24">

      <div className="mx-auto max-w-[1450px] px-6">

        {/* TOP HEADING */}
        <div className="mb-20 text-center">

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
            Our Process
          </p>

          <h2 className="text-4xl font-bold text-[#001B5E] md:text-5xl">
            How We Build Powerful Campaigns
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-600">
            Our structured workflow helps leaders and organizations achieve
            stronger communication, better public engagement, and impactful
            digital presence.
          </p>

        </div>

        {/* PROCESS GRID */}
        <div className="grid gap-8 lg:grid-cols-5">

          {processSteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-[30px] bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >

                {/* NUMBER */}
                <div className="absolute right-6 top-6 text-6xl font-black text-zinc-100 transition group-hover:text-[#0057FF]/10">

                  {step.number}

                </div>

                {/* ICON */}
                <div className="relative z-10 mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0057FF]/10 text-[#0057FF] transition group-hover:bg-[#0057FF] group-hover:text-white">

                  <Icon size={30} />

                </div>

                {/* TITLE */}
                <h3 className="relative z-10 text-2xl font-bold text-[#001B5E]">

                  {step.title}

                </h3>

                {/* DESCRIPTION */}
                <p className="relative z-10 mt-5 leading-8 text-zinc-600">

                  {step.description}

                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}