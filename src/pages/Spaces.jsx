import AvailableOffices from "@/components/PageComponents/Spaces/Desktop/AvailableOffices";
import EvolveEcosystem from "@/components/PageComponents/Spaces/Desktop/EvolveEcosystem";
import GrowYourBusinessSection from "@/components/PageComponents/Spaces/Desktop/GrowYourBusinessSection";
import PremiumAmenities from "@/components/PageComponents/Spaces/Desktop/PremiumAmenities";
import WhoOurSpacesFor from "@/components/PageComponents/Spaces/Desktop/WhoOurSpacesFor";
import WhyEvolveIsDifferent from "@/components/PageComponents/Spaces/Desktop/WhyEvolveIsDifferent";
import WhyProfessionalsChooseUs from "@/components/PageComponents/Spaces/Desktop/WhyProfessionalsChooseUs";
import React from "react";

function Spaces() {
  return (
    <div>
      <div className="">
        <GrowYourBusinessSection />
        <WhyEvolveIsDifferent />
        <WhoOurSpacesFor />
        <PremiumAmenities /> 
        <WhyProfessionalsChooseUs />
        <AvailableOffices />
        <EvolveEcosystem />
      </div>
      {/* <div className="md:hidden">Home Mobile</div> */}
    </div>
  );
}

export default Spaces;
