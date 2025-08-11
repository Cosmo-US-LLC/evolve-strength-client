import React from "react";
import MembershipBenefitsHero from "@/components/PageComponents/MembershipBenefits/Desktop/MembershipBenefitsHero";
import TrainWithOutWait from "@/components/PageComponents/MembershipBenefits/Desktop/TrainWithOutWait";
import FreeAssessmentForMembership from "@/components/PageComponents/MembershipBenefits/Desktop/FreeAssessmentForMembership";
import FitnessCategoryMarquee from "@/components/PageComponents/PersonalTraining/Desktop/FitnessCategoryMarquee";
import ReadyToEvolve from "@/components/PageComponents/MembershipBenefits/Desktop/ReadyToEvolve";
import EveryThinkYouNeed from "@/components/PageComponents/MembershipBenefits/Desktop/EveryThinkYouNeed";
import PremiumAmenitiesForYou from "@/components/PageComponents/MembershipBenefits/Desktop/PremiumAmenitiesForYou";
import AccessEvolveLocationWithEase from "@/components/PageComponents/MembershipBenefits/Desktop/AccessEvolveLocationWithEase";
import MetaTags from "@/components/Metatags/Meta";
import { Helmet, HelmetProvider } from "react-helmet-async";

function MembershipBenefits() {
  return (
    <>
    <MetaTags
        title="Evolve Strength Membership | One Membership, Endless Possibilities"
        description="Join Evolve for full access to Canada’s fastest-growing gyms. Enjoy no-wait training, wellness services, and premium amenities, all included in one affordable membership."
      />
      <MembershipBenefitsHero />
      <TrainWithOutWait />
      <FreeAssessmentForMembership />
      <AccessEvolveLocationWithEase />
      <PremiumAmenitiesForYou />
      <EveryThinkYouNeed />
      <FitnessCategoryMarquee />
      <ReadyToEvolve />
    </>
  );
}

export default MembershipBenefits;
