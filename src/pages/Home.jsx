import React from "react";
import Hero from "../components/PageComponents/Home/Desktop/Hero";

import MetaTags from "@/components/Metatags/Meta";
import PumpIt from "@/components/PageComponents/Gym/PumpIt";
import MarqueeSection from "@/components/PageComponents/Home/Desktop/MarqueeSection";
import GrassIsIndeed from "@/components/PageComponents/Gym/GrassIsIndeed";
import TimeToEvolve from "@/components/PageComponents/Gym/TimeToEvolve";
import WhatMakesEvolve from "@/components/PageComponents/Home/Desktop/WhatMakesEvolve";
import HomeEvolvegallery from "@/components/PageComponents/Home/Desktop/HomeEvolvegallery";
import HomeTrustedEquipmentBrands from "@/components/PageComponents/Home/Desktop/HomeTrust";

function Home() {
  return (
    <>
      <MetaTags
        title="Evolve Strength | Canada’s Best Fitness & Wellness Hub"
        description="Train, recover, and grow at Evolve, Canada’s largest gym with locations in Edmonton, Calgary, Burnaby, and Vancouver. One membership includes premium fitness and integrated wellness."
      />
      <div className="overflow-hidden ">
        <Hero />
        {/* <GymZones />
        <WhatMakesEvolve /> */}
        <PumpIt sliderDotsColor='bg-[#4AB04A]' />
        <WhatMakesEvolve />
        <MarqueeSection />
        {/* <GymTrainingCategories /> */}
        <GrassIsIndeed />
        <HomeTrustedEquipmentBrands />
        <HomeEvolvegallery  />
        <TimeToEvolve />
        {/* <WellnessHub />
        <GymExperience />
        <MembershipBenefits />
        <TrainerCallout />
        <EquipmentPartners />
        <WellnessServices />
        <FacilityShowcase />
        <SomeThinkNew />
        <CareerWithEvolve />
        <BusinessOpportunities /> */}
      </div>
    </>
  );
}

export default Home;
