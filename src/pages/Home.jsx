import React from "react";
import Hero from "../components/PageComponents/Home/Desktop/Hero";

import WellnessHub from "../components/PageComponents/Home/Desktop/WellnessHub";
import GymExperience from "@/components/PageComponents/Home/Desktop/GymExperience";
import WellnessServices from "@/components/PageComponents/Home/Desktop/WellnessServices";
import EquipmentPartners from "@/components/PageComponents/Home/Desktop/EquipmentPartners";
import TrainerCallout from "@/components/PageComponents/Home/Desktop/TrainerCallout";
import BusinessOpportunities from "@/components/PageComponents/Home/Desktop/BusinessOpportunities";
import CareerWithEvolve from "@/components/PageComponents/Home/Desktop/CareerWithEvolve";
import MembershipBenefits from "@/components/PageComponents/Home/Desktop/MembershipBenefits";
import FacilityShowcase from "@/components/PageComponents/Home/Desktop/FacilityShowcase";

function Home() {
  return (
    <div>
      <div className="max-md:hidden">
        <Hero />
        <WellnessHub />
        <GymExperience />
        <MembershipBenefits />
        <TrainerCallout />
        <EquipmentPartners />
        <WellnessServices />
        <FacilityShowcase />
        <CareerWithEvolve />
        <BusinessOpportunities />
      </div>
      <div className="md:hidden">Home Mobile</div>
    </div>
  );
}

export default Home;
