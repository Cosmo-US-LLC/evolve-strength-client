import React from "react";
import MetaTags from "@/components/Metatags/Meta";

import SouthEdmontonCommonHero from "@/components/PageComponents/SouthEdmontonCommon/SouthEdmontonCommonHero";
import SouthEdmontonCommonTourContest from "@/components/PageComponents/SouthEdmontonCommon/SouthEdmontonCommonTourContest";
import SouthEdmontonCommonTrustedEquipmentBrands from "@/components/PageComponents/SouthEdmontonCommon/SouthEdmontonCommonTrustedEquipmentBrands";
import PresaleFrequentlyAskedQuestions from "@/components/PageComponents/PresaleEdmontonSouthCommon/PresaleFrequentlyAskedQuestions";
import { presaleEdmontonSouthCommonFAQs } from "@/constants/faqContent";
import SouthEdmontonCommonInPersonTourCta from "@/components/PageComponents/SouthEdmontonCommon/SouthEdmontonCommonInPersonTourCta";
import MoreWayToRecover from "@/components/PageComponents/SouthEdmontonCommon/MoreWayToRecover";
import SouthEdmontonCommonGymZone from "@/components/PageComponents/SouthEdmontonCommon/SouthEdmontonCommonGymZone";
import SouthEdmontonCommonBiggerEverythingIntro from "@/components/PageComponents/SouthEdmontonCommon/SouthEdmontonCommonBiggerEverythingIntro";
import FitnessCategoryMarquee from "@/components/PageComponents/PersonalTraining/Desktop/FitnessCategoryMarquee";
import BuildWithPurpose from "@/components/PageComponents/SouthEdmontonCommon/BuildWithPurpose";
import SouthEdmontonLocation from "@/components/PageComponents/SouthEdmontonCommon/SouthEdmontonLocation";

function SouthEdmontonCommon() {
  return (
    <>
      <MetaTags
        title="Evolve Strength South Edmonton Common | Book a Free Tour"
        description="Tour Evolve Strength South Edmonton Common and get entered to win a lifetime membership. Discover Edmonton’s biggest gym, premium equipment, and recovery spaces."
      />
      <SouthEdmontonCommonHero />
      <SouthEdmontonCommonTourContest />
      <SouthEdmontonCommonBiggerEverythingIntro />
      <SouthEdmontonCommonGymZone />
      <SouthEdmontonCommonTrustedEquipmentBrands />
      <FitnessCategoryMarquee />
      <BuildWithPurpose />
      <MoreWayToRecover />
      <SouthEdmontonLocation />
      <PresaleFrequentlyAskedQuestions {...presaleEdmontonSouthCommonFAQs} />
      <SouthEdmontonCommonInPersonTourCta />
    </>
  );
}

export default SouthEdmontonCommon;
