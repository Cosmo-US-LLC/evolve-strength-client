import AboutUsHero from "@/components/PageComponents/AboutUs/Desktop/AboutUsHero";
import AboutUsMission from "@/components/PageComponents/AboutUs/Desktop/AboutUsMission";
import AboutUsTrainers from "@/components/PageComponents/AboutUs/Desktop/AboutUsTrainers";
import AboutUsOffer from "@/components/PageComponents/AboutUs/Desktop/AboutUsOffer";
import AboutUsPractitioners from "@/components/PageComponents/AboutUs/Desktop/AboutUsPractitioners";
import JoinUs from "@/components/PageComponents/AboutUs/Desktop/AboutUsJoinNow";
import React from "react";

function AboutUs() {
  return (
    <div>
      <div className="max-md:hidden">
        <AboutUsHero />
        <AboutUsMission />
        <AboutUsOffer />
        <AboutUsTrainers />
        <AboutUsPractitioners />
        <JoinUs />
      </div>
      <div className="md:hidden">Home Mobile</div>
    </div>
  );
}

export default AboutUs;
