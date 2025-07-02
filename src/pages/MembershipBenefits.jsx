import React from "react";
import MembershipBenefitsHero from "@/components/PageComponents/MembershipBenefits/Desktop/MembershipBenefitsHero";
import TrainWithOutWait from "@/components/PageComponents/MembershipBenefits/Desktop/TrainWithOutWait";
import FreeAssessmentForMembership from "@/components/PageComponents/MembershipBenefits/Desktop/FreeAssessmentForMembership";
import FitnessCategoryMarquee from "@/components/PageComponents/PersonalTraining/Desktop/FitnessCategoryMarquee";
import ReadyToEvolve from "@/components/PageComponents/MembershipBenefits/Desktop/ReadyToEvolve";
import EveryThinkYouNeed from "@/components/PageComponents/MembershipBenefits/Desktop/EveryThinkYouNeed";
import PremiumAmenitiesForYou from "@/components/PageComponents/MembershipBenefits/Desktop/PremiumAmenitiesForYou";
import AccessEvolveLocationWithEase from "@/components/PageComponents/MembershipBenefits/Desktop/AccessEvolveLocationWithEase";

function MembershipBenefits() {
  return (
    <div>
      <div className="max-md:hidden">
        <MembershipBenefitsHero />
        <TrainWithOutWait />
        <FreeAssessmentForMembership />
        <AccessEvolveLocationWithEase />
        <PremiumAmenitiesForYou />
        <EveryThinkYouNeed />
        <FitnessCategoryMarquee/>
        <ReadyToEvolve />
      </div>
      <div className="md:hidden">Home Mobile</div>
    </div>
  );
}

export default MembershipBenefits;
