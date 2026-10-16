import React from "react";
import MetaTags from "@/components/Metatags/Meta";
import LansdowneHero from "@/components/PageComponents/LansdowneWaitlist/LansdowneHero";
import LansdowneEquipmentPartners from "@/components/PageComponents/LansdowneWaitlist/LansdowneEquipmentPartners";
import LansdowneFacilityShowcase from "@/components/PageComponents/LansdowneWaitlist/LansdowneFacilityShowcase";
import LansdowneSpaceShowcase from "@/components/PageComponents/LansdowneWaitlist/LansdowneSpaceShowcase";
import LansdowneLocationShowcase from "@/components/PageComponents/LansdowneWaitlist/LansdowneLocationShowcase";
import LansdowneServicesShowcase from "@/components/PageComponents/LansdowneWaitlist/LansdowneServicesShowcase";
import LansdowneOfficeSpaceShowcase from "@/components/PageComponents/LansdowneWaitlist/LansdowneOfficeSpaceShowcase";
import LansdowneJoinWaitlist from "@/components/PageComponents/LansdowneWaitlist/LansdowneJoinWaitlist";
import { LANSDOWNE } from "@/constants/lansdowneWaitlist";

function LansdowneWaitlist() {
  return (
    <>
      <MetaTags
        title="Evolve Strength Lansdowne | Join the Waitlist"
        description={`A new ${LANSDOWNE.sqFtShort}K sq. ft. Evolve Strength facility is coming to Lansdowne Centre, Richmond BC. Join the waitlist for founding rates when presale opens.`}
      />
      <div className="overflow-hidden">
        <LansdowneHero />
        <LansdowneEquipmentPartners />
        <LansdowneFacilityShowcase />
        <LansdowneSpaceShowcase />
        <LansdowneLocationShowcase />
        <LansdowneServicesShowcase />
        <LansdowneOfficeSpaceShowcase />
        <LansdowneJoinWaitlist />
      </div>
    </>
  );
}

export default LansdowneWaitlist;
