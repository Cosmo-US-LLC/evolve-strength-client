import React from "react";
import MetaTags from "@/components/Metatags/Meta";
import ParkRoyalHero from "@/components/PageComponents/ParkRoyalWaitlist/ParkRoyalHero";
import ParkRoyalFacilityShowcase from "@/components/PageComponents/ParkRoyalWaitlist/ParkRoyalFacilityShowcase";
import ParkRoyalSpaceShowcase from "@/components/PageComponents/ParkRoyalWaitlist/ParkRoyalSpaceShowcase";
import ParkRoyalLocationShowcase from "@/components/PageComponents/ParkRoyalWaitlist/ParkRoyalLocationShowcase";
import ParkRoyalOfficeSpaceShowcase from "@/components/PageComponents/ParkRoyalWaitlist/ParkRoyalOfficeSpaceShowcase";
import ParkRoyalEquipmentPartners from "@/components/PageComponents/ParkRoyalWaitlist/ParkRoyalEquipmentPartners";
import ParkRoyalJoinWaitlist from "@/components/PageComponents/ParkRoyalWaitlist/ParkRoyalJoinWaitlist";

function ParkRoyalWaitlist() {
  return (
    <>
      <MetaTags
        title="Evolve Strength Park Royal | Join the Waitlist"
        description="A new Evolve Strength facility is coming to Park Royal, West Vancouver. Join the waitlist for early access when presale opens in 2026."
      />
      <div className="overflow-hidden">
        <ParkRoyalHero />
        <ParkRoyalEquipmentPartners />
        <ParkRoyalFacilityShowcase />
        <ParkRoyalSpaceShowcase />
        <ParkRoyalLocationShowcase />
        <ParkRoyalOfficeSpaceShowcase />
        <ParkRoyalJoinWaitlist />
      </div>
    </>
  );
}

export default ParkRoyalWaitlist;
