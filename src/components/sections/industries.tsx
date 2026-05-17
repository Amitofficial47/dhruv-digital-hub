import {
  Landmark,
  Handshake,
  GraduationCap,
  Stethoscope,
  Hotel,
  Briefcase,
  Newspaper,
  Users,
} from "lucide-react";

const industries = [
  {
    icon: Landmark,
    title: "Political Leaders",
  },
  {
    icon: Handshake,
    title: "NGOs & Social Organizations",
  },
  {
    icon: GraduationCap,
    title: "Educational Institutes",
  },
  {
    icon: Stethoscope,
    title: "Healthcare",
  },
  {
    icon: Hotel,
    title: "Hospitality & Tourism",
  },
  {
    icon: Briefcase,
    title: "Finance & Business",
  },
  {
    icon: Newspaper,
    title: "News & Media",
  },
  {
    icon: Users,
    title: "Youth Organizations",
  },
];

export default function Industries() {
  return (
    <section className="bg-white py-24">

      <div className="mx-auto max-w-[1450px] px-6">

        {/* TOP HEADING */}
        <div className="mb-16 text-center">

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
            Industries We Serve
          </p>

          <h2 className="text-4xl font-bold text-[#001B5E] md:text-5xl">
            Helping Different Sectors Grow Digitally
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-600">
            We work with political leaders, NGOs, businesses, institutions,
            and organizations to build strong digital influence and impactful
            public communication.
          </p>

        </div>

        {/* INDUSTRIES GRID */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {industries.map((industry, index) => {
            const Icon = industry.icon;

            return (
              <div
                key={index}
                className="group rounded-[28px] border border-zinc-200 bg-[#F7F9FC] p-8 transition duration-300 hover:-translate-y-2 hover:border-[#0057FF]/20 hover:bg-white hover:shadow-2xl"
              >

                {/* ICON */}
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0057FF]/10 text-[#0057FF] transition group-hover:bg-[#0057FF] group-hover:text-white">

                  <Icon size={30} />

                </div>

                {/* TITLE */}
                <h3 className="text-xl font-bold leading-8 text-[#001B5E]">
                  {industry.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-4 leading-7 text-zinc-600">
                  Professional digital outreach and branding solutions tailored
                  for this industry sector.
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}