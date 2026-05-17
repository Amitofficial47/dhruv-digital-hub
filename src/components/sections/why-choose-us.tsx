import {
  Rocket,
  Users,
  Zap,
  Target,
  BadgeCheck,
  BarChart3,
} from "lucide-react";

const features = [
  {
    icon: Rocket,
    title: "Creative Political Branding",
    description:
      "Modern campaign branding and impactful political communication strategies.",
  },
  {
    icon: Users,
    title: "Youth-Focused Strategy",
    description:
      "Engaging digital strategies designed for today's young audience and voters.",
  },
  {
    icon: Zap,
    title: "Fast Campaign Execution",
    description:
      "Quick implementation of digital campaigns, creatives, and outreach systems.",
  },
  {
    icon: Target,
    title: "Result-Oriented Campaigns",
    description:
      "Focused strategies built to increase visibility, engagement, and public trust.",
  },
  {
    icon: BadgeCheck,
    title: "Professional Reputation Building",
    description:
      "Strengthening public image with trust-driven communication and branding.",
  },
  {
    icon: BarChart3,
    title: "Digital Growth Expertise",
    description:
      "Data-driven campaign planning and digital performance improvement.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-[#001B5E] py-24">

      {/* BACKGROUND GLOW */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1450px] px-6">

        {/* TOP SECTION */}
        <div className="mb-20 text-center">

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
            Why Choose Us
          </p>

          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Strategic Digital Communication <br />
            For Modern Leadership
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100">
            Dhruv Digital Hub combines creative storytelling, political
            strategy, and digital innovation to help leaders and organizations
            build strong public influence.
          </p>

        </div>

        {/* FEATURES GRID */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="group rounded-[30px] border border-white/10 bg-white/10 p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:bg-white/15 hover:shadow-2xl"
              >

                {/* ICON */}
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-[#4DA3FF] transition group-hover:bg-[#0057FF] group-hover:text-white">

                  <Icon size={30} />

                </div>

                {/* TITLE */}
                <h3 className="text-2xl font-bold text-white">
                  {feature.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-5 leading-8 text-blue-100">
                  {feature.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}