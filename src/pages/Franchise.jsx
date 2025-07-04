import React from "react";
import FranchiseHero from "@/components/PageComponents/Franchise/Desktop/FranchiseHero";
import FranchiseJourneySteps from "@/components/PageComponents/Franchise/Desktop/FranchiseJourneySteps";
import EvolveLookLike from "@/components/PageComponents/Franchise/Desktop/EvolveLookLike";

import postImg1 from "/src/assets/images/home/facility/image_1.webp";
import postImg2 from "/src/assets/images/home/facility/image_2.webp";
import brentwoodImg1 from "/src/assets/images/home/facility/image_3.webp";
import brentwoodImg2 from "/src/assets/images/home/facility/image_4.webp";
import setonImg1 from "/src/assets/images/home/facility/image_5.webp";
import setonImg2 from "/src/assets/images/home/facility/image_6.webp";
import royalOakImg1 from "/src/assets/images/home/facility/image_7.webp";
import royalOakImg2 from "/src/assets/images/home/facility/image_8.webp";
import sunridgeImg from "/src/assets/images/home/facility/image_5.webp";
import downtownImg from "/src/assets/images/home/facility/image_6.webp";
import CanadianFitnessMarket from "@/components/PageComponents/Franchise/Desktop/CanadianFitnessMarket";
import EvolveSmarterInvestment from "@/components/PageComponents/Franchise/Desktop/EvolveSmarterInvestment";
import EvolveLocationsAndExpansionPlans from "@/components/PageComponents/Franchise/Desktop/EvolveLocationsAndExpansionPlans";
import HowtoJoinEvolveJourney from "@/components/PageComponents/Franchise/Desktop/HowtoJoinEvolveJourney";
import GotYourBack from "@/components/PageComponents/Franchise/Desktop/GotYourBack";
import WeHelpYouRightSpace from "@/components/PageComponents/Franchise/Desktop/WeHelpYouRightSpace";
import LetsBuildBigger from "@/components/PageComponents/Franchise/Desktop/LetsBuildBigger";
import TakesToLaunchEvolve from "@/components/PageComponents/Franchise/Desktop/TakesToLaunchEvolve";

const slides = [
  postImg1,
  postImg2,
  brentwoodImg1,
  brentwoodImg2,
  setonImg1,
  setonImg2,
  royalOakImg1,
  royalOakImg2,
  sunridgeImg,
  downtownImg,
];

function Franchise() {
  return (
    <div>
      <div className="max-md:hidden">
        <FranchiseHero />
        <FranchiseJourneySteps />
        <CanadianFitnessMarket />
        <EvolveLookLike />
        <EvolveSmarterInvestment />
        <EvolveLocationsAndExpansionPlans />
        <WeHelpYouRightSpace />
        <TakesToLaunchEvolve />
        <GotYourBack />
        <HowtoJoinEvolveJourney />
        <LetsBuildBigger />
      </div>
      <div className="md:hidden">Home Mobile</div>
    </div>
  );
}

export default Franchise;
