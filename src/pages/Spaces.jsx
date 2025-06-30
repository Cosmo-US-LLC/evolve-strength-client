import EvolveEcosystem from "@/components/PageComponents/Spaces/Desktop/EvolveEcosystem";
import GrowYourBusinessSection from "@/components/PageComponents/Spaces/Desktop/GrowYourBusinessSection";
import WhoOurSpacesFor from "@/components/PageComponents/Spaces/Desktop/WhoOurSpacesFor";
import WhyProfessionalsChooseUs from "@/components/PageComponents/Spaces/Desktop/WhyProfessionalsChooseUs";
import React from "react";

function Spaces() {
  return (
    <div>
      <div className="max-md:hidden">
        <GrowYourBusinessSection />
        <WhoOurSpacesFor />
        <WhyProfessionalsChooseUs />
        <EvolveEcosystem />
      </div>
      <div className="md:hidden">Home Mobile</div>
    </div>
  );
}

export default Spaces;
