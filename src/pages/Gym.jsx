// import MetaTags from "@/components/Metatags/Meta";
// import Evolvegallery from "@/components/PageComponents/Gym/Evolvegallery";
// import GrassIsIndeed from "@/components/PageComponents/Gym/GrassIsIndeed";
// import GymHero from "@/components/PageComponents/Gym/GymHero";
// import GymTrainingCategories from "@/components/PageComponents/Gym/GymTrainingCategories";
// import PumpIt from "@/components/PageComponents/Gym/PumpIt";
// import TimeToEvolve from "@/components/PageComponents/Gym/TimeToEvolve";
// import TrustedEquipmentBrands from "@/components/PageComponents/Gym/TrustedEquipmentBrands";
// import WhatsMakeEvolveDiff from "@/components/PageComponents/Gym/WhatsMakeEvolveDiff";
// import React from "react";

// function Gym() {
//   return (
//     <>

//       <GymHero />
//       <PumpIt />
//       <WhatsMakeEvolveDiff />
//       <GymTrainingCategories />
//       <GrassIsIndeed />
//       <TrustedEquipmentBrands />
//       <Evolvegallery imageRadious="10px"  slidesGap="0.75" />
//       <TimeToEvolve />
//     </>
//   );
// }

// export default Gym;


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

function Gym() {

  return (
    <>
      <MetaTags
        title="Evolve Strength | Canada’s Leading Gym"
        description="Evolve Strength sets the standard for fitness in Canada. Train with Olympic-grade gear, dynamic turf zones, and a community built to elevate your results."
      />
      <div className="overflow-hidden ">
        <Hero title={"Evolve <br /> Gym Experience"} />
        {/* <GymZones />
        <WhatMakesEvolve /> */}
        <PumpIt sliderDotsColor='bg-[#4AB04A]' />
        <WhatMakesEvolve />
        <MarqueeSection />
        {/* <GymTrainingCategories /> */}
        <GrassIsIndeed />
        <HomeTrustedEquipmentBrands />
        <HomeEvolvegallery />
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

export default Gym;
