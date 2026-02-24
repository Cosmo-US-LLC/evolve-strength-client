import React from "react";
import PresaleEdmontonSouthCommonHero from "@/components/PageComponents/PresaleEdmontonSouthCommon/PresaleEdmontonSouthCommonHero";
import { presaleEdmontonSouthCommonFAQs } from "@/constants/faqContent";
import Only247SpotsLeft from "@/components/PageComponents/PresaleEdmontonSouthCommon/Only247SpotsLeft";
import HowDepositWorks from "@/components/PageComponents/PresaleEdmontonSouthCommon/HowDepositWorks";
import FamilyHouseholdPackage from "@/components/PageComponents/PresaleEdmontonSouthCommon/FamilyHouseholdPackage";
import FoundingMemberSavings from "@/components/PageComponents/PresaleEdmontonSouthCommon/FoundingMemberSavings";
import WellnessRecoveryExperience from "@/components/PageComponents/PresaleEdmontonSouthCommon/WellnessRecoveryExperience";
import BuiltBiggerEquippedBetter from "@/components/PageComponents/PresaleEdmontonSouthCommon/BuiltBiggerEquippedBetter";
import RateLockCertificate from "@/components/PageComponents/PresaleEdmontonSouthCommon/RateLockCertificate";
import GymZones from "@/components/PageComponents/PresaleEdmontonSouthCommon/GymZones";

import CareerWithEvolve from "@/components/PageComponents/Home/Desktop/CareerWithEvolve";

import FrequentlyAskedQuestions from "@/components/PageComponents/FrequentlyAskedQuestions/FrequentlyAskedQuestions";
import PresaleTrustedEquipmentBrands from "@/components/PageComponents/PresaleEdmontonSouthCommon/PresaleTrustedEquipmentBrands";
import PresaleFrequentlyAskedQuestions from "@/components/PageComponents/PresaleEdmontonSouthCommon/PresaleFrequentlyAskedQuestions";
import UnmatchedAmenities from "@/components/PageComponents/PresaleEdmontonSouthCommon/UnmatchedAmenities";
import MetaTags from "@/components/Metatags/Meta";
import PresaleWellnwssServices from "@/components/PageComponents/PresaleEdmontonSouthCommon/PresaleWellnwssServices";

function PresaleEdmontonSouthCommon() {
  return (
    <>
    <MetaTags
        title="Evolve Strength South Edmonton Common Gym | Sign Up Free"
        description="Join the presale risk-free! Sign up with $0 down and pay nothing until we open. Not satisfied? Cancel within 10 days of opening for a full refund."
      />
      <PresaleEdmontonSouthCommonHero />
      <FoundingMemberSavings />
      <RateLockCertificate />
      {/* <HowDepositWorks /> */}
      {/* <FamilyHouseholdPackage /> */}
      <GymZones />
      <BuiltBiggerEquippedBetter />
      <PresaleTrustedEquipmentBrands />
      <UnmatchedAmenities />
      {/* <WellnessRecoveryExperience /> */}
      <PresaleWellnwssServices />
      {/* <CareerWithEvolve /> */}
      <CareerWithEvolve/>
      <PresaleFrequentlyAskedQuestions {...presaleEdmontonSouthCommonFAQs} />
      {/* <Only247SpotsLeft /> */}
    </>
  );
}

export default PresaleEdmontonSouthCommon;
