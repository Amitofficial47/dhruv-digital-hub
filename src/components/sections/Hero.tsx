// import Image from "next/image";

// import {
//   Megaphone,
//   ShieldCheck,
//   Users,
//   BarChart3,
//   ArrowRight,
// } from "lucide-react";

// export default function Hero() {
//   return (
//     <section className="relative overflow-hidden bg-gradient-to-br from-[#F5F9FF] to-white">
      
//       {/* Background Glow */}
//       <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-200/40 blur-3xl" />

//       <div className="mx-auto grid min-h-[90vh] max-w-[1500px] items-center gap-16 px-6 py-16 lg:grid-cols-2">
        
//         {/* LEFT CONTENT */}
//         <div className="relative z-10">

//           {/* SMALL TAG */}
//           {/* <div className="mb-6 inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-[#0057FF]">
//             Political PR • Digital Campaigns • Reputation Management
//           </div> */}

//           {/* MAIN HEADING */}
//           <h1 className="max-w-3xl text-5xl font-extrabold leading-tight text-[#001B5E] md:text-6xl lg:text-7xl">
//             Transforming
//             <span className="text-[#0057FF]"> Political & Digital </span>
//             Communication Into
//             <span className="text-[#D4AF37]">
//               {" "}
//               Powerful Public Influence
//             </span>
//           </h1>

//           {/* DESCRIPTION */}
//           <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-600">
//             Dhruv Digital Hub is a modern Political PR & Digital Campaign
//             agency focused on building impactful public presence, strong
//             political branding, and result-driven digital outreach.
//           </p>

//           {/* BUTTONS */}
//           <div className="mt-10 flex flex-col gap-4 sm:flex-row">

//             <button className="flex items-center justify-center gap-2 rounded-xl bg-[#0057FF] px-8 py-4 font-semibold text-white transition hover:bg-[#0047D9]">
//               Start Your Campaign
//               <ArrowRight size={18} />
//             </button>

//             <button className="rounded-xl border border-[#0057FF]/20 bg-white px-8 py-4 font-semibold text-[#001B5E] transition hover:border-[#0057FF] hover:text-[#0057FF]">
//               Explore Services
//             </button>

//           </div>

//           {/* STATS */}
//           <div className="mt-14 grid grid-cols-2 gap-6 md:grid-cols-4">

//             <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
//               <h3 className="text-3xl font-bold text-[#0057FF]">100+</h3>
//               <p className="mt-2 text-sm text-zinc-600">
//                 Campaigns Executed
//               </p>
//             </div>

//             <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
//               <h3 className="text-3xl font-bold text-[#0057FF]">50+</h3>
//               <p className="mt-2 text-sm text-zinc-600">
//                 Happy Clients
//               </p>
//             </div>

//             <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
//               <h3 className="text-3xl font-bold text-[#0057FF]">10+</h3>
//               <p className="mt-2 text-sm text-zinc-600">
//                 Industries Served
//               </p>
//             </div>

//             <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
//               <h3 className="text-3xl font-bold text-[#0057FF]">24/7</h3>
//               <p className="mt-2 text-sm text-zinc-600">
//                 Campaign Support
//               </p>
//             </div>

//           </div>
//         </div>

//         {/* RIGHT CONTENT */}
//         <div className="relative">

//           {/* MAIN IMAGE CARD */}
//           <div className="relative overflow-hidden rounded-[32px] border border-white/20 bg-white shadow-2xl">

//             <Image
//               src="https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?q=80&w=1200&auto=format&fit=crop"
//               alt="Political Campaign"
//               width={1200}
//               height={800}
//               className="h-full w-full object-cover"
//             />

//             {/* Overlay Gradient */}
//             <div className="absolute inset-0 bg-gradient-to-t from-[#001B5E]/70 via-transparent to-transparent" />

//           </div>

//           {/* FLOATING CARDS */}
//           <div className="absolute -left-10 top-10 hidden w-64 rounded-2xl border border-white/20 bg-white p-5 shadow-xl lg:block">
            
//             <div className="flex items-center gap-4">
              
//               <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-[#0057FF]">
//                 <Megaphone />
//               </div>

//               <div>
//                 <h3 className="font-bold text-[#001B5E]">
//                   Political PR
//                 </h3>

//                 <p className="text-sm text-zinc-500">
//                   Powerful public branding
//                 </p>
//               </div>

//             </div>
//           </div>

//           <div className="absolute -right-10 top-40 hidden w-64 rounded-2xl border border-white/20 bg-white p-5 shadow-xl lg:block">

//             <div className="flex items-center gap-4">

//               <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-100 text-[#D4AF37]">
//                 <ShieldCheck />
//               </div>

//               <div>
//                 <h3 className="font-bold text-[#001B5E]">
//                   Reputation Management
//                 </h3>

//                 <p className="text-sm text-zinc-500">
//                   Strong digital influence
//                 </p>
//               </div>

//             </div>
//           </div>

//           <div className="absolute bottom-10 left-10 hidden w-64 rounded-2xl border border-white/20 bg-white p-5 shadow-xl lg:block">

//             <div className="flex items-center gap-4">

//               <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-600">
//                 <Users />
//               </div>

//               <div>
//                 <h3 className="font-bold text-[#001B5E]">
//                   Public Engagement
//                 </h3>

//                 <p className="text-sm text-zinc-500">
//                   Connecting leaders with people
//                 </p>
//               </div>

//             </div>
//           </div>

//           <div className="absolute bottom-0 right-0 hidden w-64 rounded-2xl border border-white/20 bg-white p-5 shadow-xl lg:block">

//             <div className="flex items-center gap-4">

//               <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-purple-600">
//                 <BarChart3 />
//               </div>

//               <div>
//                 <h3 className="font-bold text-[#001B5E]">
//                   Digital Campaigns
//                 </h3>

//                 <p className="text-sm text-zinc-500">
//                   Data-driven growth strategy
//                 </p>
//               </div>

//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }




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
      <div className="relative z-10 mx-auto grid min-h-[82vh] max-w-[1450px] items-center gap-16 px-4 py-16 lg:grid-cols-2 lg:px-6">

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
          <div className="mt-16 grid grid-cols-2 gap-6 lg:grid-cols-4">

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

          </div>
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