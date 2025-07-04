import AboutUsHero from "@/components/PageComponents/AboutUs/Desktop/AboutUsHero";
import AboutUsMission from "@/components/PageComponents/AboutUs/Desktop/AboutUsMission";
import { cardsData } from "@/constants/AboutUsMission";
import React from "react";

function AboutUs() {
  return (
    <div>
      <div className="max-md:hidden">
        <AboutUsHero/>
        <AboutUsMission cardsData={cardsData} />
      </div>
      <div className="md:hidden">Home Mobile</div>
    </div>
  );
}

export default AboutUs;
