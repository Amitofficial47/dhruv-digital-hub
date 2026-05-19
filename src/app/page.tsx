import FounderSection from "@/components/sections/FounderSection";
import Hero from "@/components/sections/Hero";
// import CampaignPackages from "@/components/sections/campaign-packages";
// import ContactSection from "@/components/sections/contact-section";
import CoreServices from "@/components/sections/core-services";
import Industries from "@/components/sections/industries";
import WhyChooseUs from "@/components/sections/why-choose-us";
import WorkingProcess from "@/components/sections/working-process";

export default function Home() {
  return (
    <main className="overflow-hidden">
      
      {/* HERO SECTION */}
      <Hero />
      <FounderSection />
      <CoreServices />
      <Industries />
      <WhyChooseUs />
      <WorkingProcess />
      {/* <CampaignPackages /> */}
      {/* <ContactSection /> */}
    </main>
  );
}