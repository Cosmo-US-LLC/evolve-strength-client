import React from "react";
import PresaleParkRoyalHero from "@/components/PageComponents/PresaleParkRoyal/PresaleParkRoyalHero";
import { parkRoyalFAQs } from "@/constants/faqContent";
import FoundingMemberSavings from "@/components/PageComponents/PresaleParkRoyal/FoundingMemberSavings";
import BuiltBiggerEquippedBetter from "@/components/PageComponents/PresaleParkRoyal/BuiltBiggerEquippedBetter";
import RateLockCertificate from "@/components/PageComponents/PresaleParkRoyal/RateLockCertificate";
import GymZones from "@/components/PageComponents/PresaleParkRoyal/GymZones";
import CareerWithEvolve from "@/components/PageComponents/Home/Desktop/CareerWithEvolve";
import PresaleTrustedEquipmentBrands from "@/components/PageComponents/PresaleParkRoyal/PresaleTrustedEquipmentBrands";
import PresaleFrequentlyAskedQuestions from "@/components/PageComponents/PresaleParkRoyal/PresaleFrequentlyAskedQuestions";
import UnmatchedAmenities from "@/components/PageComponents/PresaleParkRoyal/UnmatchedAmenities";
import MetaTags from "@/components/Metatags/Meta";
import PresaleWellnwssServices from "@/components/PageComponents/PresaleParkRoyal/PresaleWellnwssServices";
import ParkRoyalFirstBanner from "@/components/PageComponents/PresaleParkRoyal/ParkRoyalFirstBanner";
import ParkRoyalLocation from "@/components/PageComponents/PresaleParkRoyal/ParkRoyalLocation";

function PresaleParkRoyal() {
  return (
    <>
      <MetaTags
        title="Evolve Strength South Edmonton Common Gym | Sign Up Free"
        description="Join the presale risk-free! Sign up with $0 down and pay nothing until we open. Not satisfied? Cancel within 10 days of opening for a full refund."
      />
      <PresaleParkRoyalHero />
      <FoundingMemberSavings />
      <RateLockCertificate />
      <GymZones />
      <ParkRoyalFirstBanner />
      <BuiltBiggerEquippedBetter />
      <PresaleTrustedEquipmentBrands />
      <ParkRoyalLocation />
      <UnmatchedAmenities />
      <PresaleWellnwssServices />
      {/* <CareerWithEvolve /> */}
      <PresaleFrequentlyAskedQuestions {...parkRoyalFAQs} />
    </>
  );
}

export default PresaleParkRoyal;
