import React from "react";
import MetaTags from "@/components/Metatags/Meta";
import CareersHero from "@/components/PageComponents/Careers/CareersHero";
import WhyEvolve from "@/components/PageComponents/Careers/WhyEvolve";
import FitnessCategoryMarquee from "@/components/PageComponents/PersonalTraining/Desktop/FitnessCategoryMarquee";
import WorkAtEvolve from "@/components/PageComponents/Careers/WorkAtEvolve";
import WellnessServices from "@/components/PageComponents/Home/Desktop/WellnessServices";
import JoinEvolveWithDreamTeam from "@/components/PageComponents/Careers/JoinEvolveWithDreamTeam";

function Careers() {
  return (
    <>
      <MetaTags
        title="Evolve Strength Wellness Services | Affordable, Expert Care"
        description="Discover expert-led wellness services at Evolve Strength, including massage, chiropractic care, acupuncture, and more, all under one roof, at prices that fit your budget."
      />
      <CareersHero />
      <WhyEvolve />
      <FitnessCategoryMarquee />
      <WorkAtEvolve />
      <WellnessServices />
      <JoinEvolveWithDreamTeam />
    </>
  );
}

export default Careers;
