import React from "react";
import FranchiseHero from "@/components/PageComponents/Franchise/Desktop/FranchiseHero";
import FranchiseJourneySteps from "@/components/PageComponents/Franchise/Desktop/FranchiseJourneySteps";
import EvolveLookLike from "@/components/PageComponents/Franchise/Desktop/EvolveLookLike";

import CanadianFitnessMarket from "@/components/PageComponents/Franchise/Desktop/CanadianFitnessMarket";
import EvolveSmarterInvestment from "@/components/PageComponents/Franchise/Desktop/EvolveSmarterInvestment";
import HowtoJoinEvolveJourney from "@/components/PageComponents/Franchise/Desktop/HowtoJoinEvolveJourney";
import GotYourBack from "@/components/PageComponents/Franchise/Desktop/GotYourBack";
import WeHelpYouRightSpace from "@/components/PageComponents/Franchise/Desktop/WeHelpYouRightSpace";
import LetsBuildBigger from "@/components/PageComponents/Franchise/Desktop/LetsBuildBigger";
import TakesToLaunchEvolve from "@/components/PageComponents/Franchise/Desktop/TakesToLaunchEvolve";
import EvolveFloorPlan from "@/components/PageComponents/Franchise/Desktop/EvolveFloorPlan";
import OurFranchiseesSay from "@/components/PageComponents/Franchise/Desktop/OurFranchiseesSay";
import EvolveExpansionPlans from "@/components/PageComponents/Franchise/Desktop/EvolveExpansionPlans";

function Franchise() {
  return (
    <div>
      <div className="">
        <FranchiseHero />
        <FranchiseJourneySteps />
        {/* <CanadianFitnessMarket /> */}
        <EvolveLookLike />
        <EvolveSmarterInvestment />
        <WeHelpYouRightSpace />
        <TakesToLaunchEvolve />
        <EvolveFloorPlan />
        <GotYourBack />
        <EvolveExpansionPlans />
        <OurFranchiseesSay />
        <HowtoJoinEvolveJourney />
        <LetsBuildBigger />
      </div>
    </div>
  );
}

export default Franchise;
