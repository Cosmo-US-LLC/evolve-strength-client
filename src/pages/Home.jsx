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
import MetaTags from "@/components/Metatags/Meta";
import SomeThinkNew from "@/components/PageComponents/Home/Desktop/SomeThinkNew";

function Home() {
  return (
    <>
      <MetaTags
        title="Evolve Strength | Canada’s Best Fitness & Wellness Hub"
        description="Train, recover, and grow at Evolve, Canada’s largest gym with locations in Edmonton, Calgary, Burnaby, and Vancouver. One membership includes premium fitness and integrated wellness."
      />
      <div className="overflow-hidden">
        <Hero />
        <WellnessHub />
        <GymExperience />
        <MembershipBenefits />
        <TrainerCallout />
        <EquipmentPartners />
        <WellnessServices />
        <FacilityShowcase />
        <SomeThinkNew />
        <CareerWithEvolve />
        <BusinessOpportunities />
      </div>
    </>
  );
}

export default Home;
