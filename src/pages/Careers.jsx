import React from "react";
import MetaTags from "@/components/Metatags/Meta";
import CareersHero from "@/components/PageComponents/Careers/CareersHero";
import WhyEvolve from "@/components/PageComponents/Careers/WhyEvolve";
import FitnessCategoryMarquee from "@/components/PageComponents/PersonalTraining/Desktop/FitnessCategoryMarquee";
import WorkAtEvolve from "@/components/PageComponents/Careers/WorkAtEvolve";
import JoinEvolveWithDreamTeam from "@/components/PageComponents/Careers/JoinEvolveWithDreamTeam";
import PerksAndBenefits from "@/components/PageComponents/Careers/PerksAndBenefits";

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
      <PerksAndBenefits />
      <JoinEvolveWithDreamTeam />
    </>
  );
}

export default Careers;
