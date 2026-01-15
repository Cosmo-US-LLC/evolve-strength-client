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

import FrequentlyAskedQuestions from "@/components/PageComponents/FrequentlyAskedQuestions/FrequentlyAskedQuestions";
import PresaleTrustedEquipmentBrands from "@/components/PageComponents/PresaleEdmontonSouthCommon/PresaleTrustedEquipmentBrands";
import PresaleFrequentlyAskedQuestions from "@/components/PageComponents/PresaleEdmontonSouthCommon/PresaleFrequentlyAskedQuestions";

function PresaleEdmontonSouthCommon() {
  return (
    <>
      <PresaleEdmontonSouthCommonHero />
      <FoundingMemberSavings />
      <RateLockCertificate />
      <HowDepositWorks />
      <FamilyHouseholdPackage />
      <WellnessRecoveryExperience />
      <BuiltBiggerEquippedBetter />
      <PresaleTrustedEquipmentBrands />
      <PresaleFrequentlyAskedQuestions {...presaleEdmontonSouthCommonFAQs} />
      <Only247SpotsLeft />
    </>
  );
}

export default PresaleEdmontonSouthCommon;
