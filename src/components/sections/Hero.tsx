import {
  ArrowRight,
  Megaphone,
  ShieldCheck,
  Users,
  BarChart3,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/Hero-bg2.png')",
        }}
      />

      {/* VERY LIGHT OVERLAY */}
      <div className="absolute inset-0 bg-black/10" />

      {/* MAIN CONTAINER */}
      <div className="relative z-10 mx-auto grid min-h-[82vh] max-w-362.5 items-center gap-16 px-4 py-16 lg:grid-cols-2 lg:px-6">

        {/* LEFT CONTENT */}
        <div>

          {/* HEADING */}
          <h3 className="max-w-4xl text-4xl font-bold leading-[1.1] text-[#001B5E] md:text-3xl lg:text-4xl">

            <span className="block">
              TRANSFORMING
            </span>

            <span className="block text-[#0057FF]">
              POLITICAL & DIGITAL
            </span>

            <span className="block">
              COMMUNICATION INTO
            </span>

            <span className="block text-[#D4AF37]">
              POWERFUL PUBLIC INFLUENCE
            </span>

          </h3>

          {/* DESCRIPTION */}
          <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-700">
            Dhruv Digital Hub helps Political Leaders, NGOs, organizations,
            and public representatives build trust, influence, and digital
            visibility through strategic communication and powerful campaigns.
          </p>

          {/* BUTTONS */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">

            <button className="flex items-center justify-center gap-2 rounded-xl bg-[#0057FF] px-8 py-4 font-semibold text-white transition hover:bg-[#0047D9]">
              Start Your Campaign
              <ArrowRight size={18} />
            </button>

            <button className="rounded-xl border border-[#0057FF]/20 bg-white/80 px-8 py-4 font-semibold text-[#001B5E] backdrop-blur-md transition hover:border-[#0057FF] hover:bg-white">
              Explore Services
            </button>

          </div>

          {/* STATS SECTION */}
          {/* <div className="mt-16 grid grid-cols-2 gap-6 lg:grid-cols-4">

            <div className="rounded-3xl border border-white/30 bg-white/70 p-7 text-center shadow-lg backdrop-blur-xl">

              <h3 className="text-4xl font-extrabold text-[#0057FF]">
                100+
              </h3>

              <p className="mt-2 text-sm text-zinc-700">
                Campaigns Executed
              </p>

            </div>

            <div className="rounded-3xl border border-white/30 bg-white/70 p-7 text-center shadow-lg backdrop-blur-xl">

              <h3 className="text-4xl font-extrabold text-[#0057FF]">
                50+
              </h3>

              <p className="mt-2 text-sm text-zinc-700">
                Happy Clients
              </p>

            </div>

            <div className="rounded-3xl border border-white/30 bg-white/70 p-7 text-center shadow-lg backdrop-blur-xl">

              <h3 className="text-4xl font-extrabold text-[#0057FF]">
                10+
              </h3>

              <p className="mt-2 text-sm text-zinc-700">
                Industries Served
              </p>

            </div>

            <div className="rounded-3xl border border-white/30 bg-white/70 p-7 text-center shadow-lg backdrop-blur-xl">

              <h3 className="text-4xl font-extrabold text-[#0057FF]">
                24/7
              </h3>

              <p className="mt-2 text-sm text-zinc-700">
                Campaign Support
              </p>

            </div>

          </div> */}
        </div>

        {/* RIGHT SIDE FLOATING CARDS */}
        <div className="relative hidden h-full items-center justify-end pr-8 lg:flex">

          <div className="flex flex-col gap-6">

            {/* CARD 1 */}
            <div className="w-80 rounded-3xl border border-white/30 bg-white/70 p-6 shadow-xl backdrop-blur-xl">

              <div className="flex items-start gap-4">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-[#0057FF]">
                  <Megaphone size={28} />
                </div>

                <div>

                  <h3 className="text-xl font-bold text-[#001B5E]">
                    Political PR
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-zinc-600">
                    Powerful public communication and political branding.
                  </p>

                </div>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="w-80 rounded-3xl border border-white/30 bg-white/70 p-6 shadow-xl backdrop-blur-xl">

              <div className="flex items-start gap-4">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-100 text-[#D4AF37]">
                  <ShieldCheck size={28} />
                </div>

                <div>

                  <h3 className="text-xl font-bold text-[#001B5E]">
                    Trust Building
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-zinc-600">
                    Build trust and maintain strong digital influence.
                  </p>

                </div>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="w-80 rounded-3xl border border-white/30 bg-white/70 p-6 shadow-xl backdrop-blur-xl">

              <div className="flex items-start gap-4">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-green-600">
                  <Users size={28} />
                </div>

                <div>

                  <h3 className="text-xl font-bold text-[#001B5E]">
                    Public Engagement
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-zinc-600">
                    Connecting leaders with communities digitally.
                  </p>

                </div>
              </div>
            </div>

            {/* CARD 4 */}
            <div className="w-80 rounded-3xl border border-white/30 bg-white/70 p-6 shadow-xl backdrop-blur-xl">

              <div className="flex items-start gap-4">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-100 text-purple-600">
                  <BarChart3 size={28} />
                </div>

                <div>

                  <h3 className="text-xl font-bold text-[#001B5E]">
                    Digital Campaigns
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-zinc-600">
                    Result-driven outreach and campaign strategies.
                  </p>

                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}