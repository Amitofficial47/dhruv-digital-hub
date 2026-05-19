// "use client";

// import Image from "next/image";

// export default function FounderSection() {
//   return (
//     <section className="relative bg-white py-24">

//       <div className="mx-auto grid max-w-[1200px] items-center gap-14 px-6 md:grid-cols-2">

//         {/* IMAGE SIDE */}
//         <div className="relative flex justify-center">

//           {/* Glow background */}
//           <div className="absolute -z-10 h-72 w-72 rounded-full bg-blue-100 blur-3xl" />

//           {/* IMPORTANT FIX: add relative wrapper for Image fill */}
//           <div className="relative h-[420px] w-[320px] overflow-hidden rounded-[32px] shadow-2xl">

//             <Image
//               src="/ceo.jpg"
//               alt="Parshant Dhruv"
//               fill
//               sizes="(max-width: 768px) 100vw, 320px"
//               className="object-cover"
//               priority
//             />

//           </div>

//         </div>

//         {/* TEXT SIDE */}
//         <div>

//           <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
//             Founder
//           </p>

//           <h2 className="mt-4 text-4xl font-bold text-[#001B5E] md:text-5xl">
//             Parshant Dhruv
//           </h2>

//           <p className="mt-3 text-lg font-medium text-gray-600">
//             Founder & Digital Strategist
//           </p>

//           <div className="mt-8 space-y-5 text-gray-600 leading-7">

//             <p>
//               Building powerful digital influence through strategy, creativity,
//               and communication.
//             </p>

//             <p>
//               I am passionate about Political PR, Digital Campaigns, Branding,
//               and Public Communication. Through Dhruv Digital Hub, my goal is
//               to help leaders, organizations, NGOs, and businesses create
//               meaningful public engagement and strong digital presence.
//             </p>

//             <p>
//               Focused on modern branding, campaign strategy, and impactful
//               storytelling.
//             </p>

//           </div>

//           <button className="mt-8 rounded-2xl bg-[#001B5E] px-6 py-3 text-white transition hover:bg-blue-900">
//             Work With Me
//           </button>

//         </div>

//       </div>
//     </section>
//   );
// }

"use client";

import Image from "next/image";

export default function FounderSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50/40 to-white py-28">

      {/* Background Blobs */}
      <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-blue-200/40 blur-3xl" />
      <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-yellow-200/30 blur-3xl" />

      <div className="relative mx-auto grid max-w-[1200px] items-center gap-16 px-6 md:grid-cols-2">

        {/* IMAGE SIDE */}
        <div className="relative flex justify-center">

          {/* Decorative border frame */}
          <div className="absolute inset-0 mx-auto h-[440px] w-[340px] rounded-[40px] border border-blue-200/40" />

          {/* Floating badge */}
          <div className="absolute -top-4 left-10 z-10 rounded-full bg-white px-4 py-2 text-xs font-semibold text-blue-700 shadow-md">
            Founder & Strategist
          </div>

          {/* Image Card */}
          <div className="relative h-[440px] w-[340px] overflow-hidden rounded-[40px] shadow-2xl">

            <Image
              src="/ceo.jpg"
              alt="Parshant Dhruv"
              fill
              sizes="(max-width: 768px) 100vw, 340px"
              className="object-cover"
              priority
            />

            {/* Gradient overlay for premium look */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

          </div>
        </div>

        {/* TEXT SIDE */}
        <div>

          {/* Label */}
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-600">
            Meet The Founder
          </p>

          {/* Name */}
          <h2 className="mt-4 text-5xl font-bold leading-tight text-[#001B5E]">
            Parshant Dhruv
          </h2>

          {/* Role */}
          <p className="mt-3 text-xl font-medium text-gray-600">
            Founder & Digital Strategist
          </p>

          {/* Divider */}
          <div className="mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-blue-600 to-yellow-400" />

          {/* Description */}
          <div className="mt-8 space-y-5 text-gray-600 leading-7 text-[16px]">

            <p>
              Building powerful digital influence through strategy, creativity,
              and communication for political leaders, organizations, and brands.
            </p>

            <p>
              Specializing in Political PR, Digital Campaigns, Branding, and Public Communication,
              I help transform ideas into impactful digital movements that connect with people.
            </p>

            <p>
              Through Dhruv Digital Hub, the focus is on creating strong narratives,
              modern branding systems, and result-driven communication strategies.
            </p>

          </div>

          {/* Stats Row */}
          <div className="mt-10 grid grid-cols-3 gap-4">

            <div className="rounded-2xl bg-white p-4 text-center shadow-md">
              <p className="text-2xl font-bold text-blue-600">100+</p>
              <p className="text-xs text-gray-500">Campaigns</p>
            </div>

            <div className="rounded-2xl bg-white p-4 text-center shadow-md">
              <p className="text-2xl font-bold text-blue-600">50+</p>
              <p className="text-xs text-gray-500">Clients</p>
            </div>

            <div className="rounded-2xl bg-white p-4 text-center shadow-md">
              <p className="text-2xl font-bold text-blue-600">10+</p>
              <p className="text-xs text-gray-500">Years Impact</p>
            </div>

          </div>

          {/* CTA */}
          <button className="mt-10 rounded-2xl bg-[#001B5E] px-7 py-3 font-semibold text-white shadow-lg transition hover:bg-blue-900">
            Work With Me
          </button>

        </div>

      </div>
    </section>
  );
}