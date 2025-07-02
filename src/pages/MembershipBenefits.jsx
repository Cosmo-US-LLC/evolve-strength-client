import React from "react";
import Hero from "../components/PageComponents/Home/Desktop/Hero";
import MembershipBenefitsHero from "@/components/PageComponents/MembershipBenefits/Desktop/MembershipBenefitsHero";

function MembershipBenefits() {
  return (
    <div>
      <div className="max-md:hidden">
        <MembershipBenefitsHero />
      </div>
      <div className="md:hidden">Home Mobile</div>
    </div>
  );
}

export default MembershipBenefits;
