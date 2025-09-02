import AvailableOffices from "@/components/PageComponents/Spaces/Desktop/AvailableOffices";
import EvolveEcosystem from "@/components/PageComponents/Spaces/Desktop/EvolveEcosystem";
import GrowYourBusinessSection from "@/components/PageComponents/Spaces/Desktop/GrowYourBusinessSection";
import PremiumAmenities from "@/components/PageComponents/Spaces/Desktop/PremiumAmenities";
import WhoOurSpacesFor from "@/components/PageComponents/Spaces/Desktop/WhoOurSpacesFor";
import WhyEvolveIsDifferent from "@/components/PageComponents/Spaces/Desktop/WhyEvolveIsDifferent";
import WhyProfessionalsChooseUs from "@/components/PageComponents/Spaces/Desktop/WhyProfessionalsChooseUs";
import React from "react";
import MetaTags from "@/components/Metatags/Meta";
import { Helmet, HelmetProvider } from "react-helmet-async";

function Spaces() {
  return (
    <>
      <MetaTags
        title="Lease Wellness Office Space at Evolve Strength"
        description="Lease flexible wellness office space inside one of Canada’s fastest-growing gyms. Join Evolve for built-in clients, premium amenities, and 40% lower overhead."
      />
      <div className="">
        <GrowYourBusinessSection />
        <AvailableOffices />
        <WhoOurSpacesFor />
        <WhyEvolveIsDifferent />
        <PremiumAmenities />
        <WhyProfessionalsChooseUs />
        <EvolveEcosystem />
      </div>
      {/* <div className="md:hidden">Home Mobile</div> */}
    </>
  );
}

export default Spaces;
