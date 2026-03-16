import React from "react";
import SpacesForSouthEdmontonCommonHero from "@/components/PageComponents/SpacesForSouthEdmontonCommon/SpacesForSouthEdmontonCommonHero";
import SpacesForSouthEdmontonCommonBeyondSection from "@/components/PageComponents/SpacesForSouthEdmontonCommon/SpacesForSouthEdmontonCommonBeyondSection";
import SpaceBuiltForCommon from "@/components/PageComponents/SpacesForSouthEdmontonCommon/SpaceBuiltForCommon";
import AvailableOfficesForSouthEdmontonCommon from "@/components/PageComponents/SpacesForSouthEdmontonCommon/AvailableOfficesForSouthEdmontonCommon";
import SpacesForSouthEdmontonCommonOpeningDayPath from "@/components/PageComponents/SpacesForSouthEdmontonCommon/SpacesForSouthEdmontonCommonOpeningDayPath";
import SpacesForSouthEdmontonCommonSecureSpot from "@/components/PageComponents/SpacesForSouthEdmontonCommon/SpacesForSouthEdmontonCommonSecureSpot";
import JoinSouthCommonSection from "@/components/PageComponents/SpacesForSouthEdmontonCommon/JoinSouthCommonSection";
import WhyEvolveIsDifferent from "@/components/PageComponents/Spaces/Desktop/WhyEvolveIsDifferent";
import PremiumAmenitiesForSpace from "@/components/PageComponents/SpacesForSouthEdmontonCommon/PremiumAmenitiesForSpace";

function SpacesForSouthEdmontonCommon() {
  return (
    <>
      <MetaTags
        title="Workspaces at Evolve Strength | South Edmonton Common"
        description="Lease premium wellness workspaces at Evolve Strength in South Edmonton Common. Private suites inside a flagship gym with luxury amenities, built-in member demand, and up to 40% lower overhead."
      />
      <>
        <SpacesForSouthEdmontonCommonHero />
        <SpacesForSouthEdmontonCommonBeyondSection />
        <SpaceBuiltForCommon />
        <WhyEvolveIsDifferent />
        <PremiumAmenitiesForSpace />
        <AvailableOfficesForSouthEdmontonCommon />
        <SpacesForSouthEdmontonCommonOpeningDayPath />
        <JoinSouthCommonSection />
        <SpacesForSouthEdmontonCommonSecureSpot />
      </>
    </>
  );
}

export default SpacesForSouthEdmontonCommon;
