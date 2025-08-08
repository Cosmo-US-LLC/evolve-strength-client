import AboutUsHero from "@/components/PageComponents/AboutUs/Desktop/AboutUsHero";
import AboutUsMission from "@/components/PageComponents/AboutUs/Desktop/AboutUsMission";
import AboutUsTrainers from "@/components/PageComponents/AboutUs/Desktop/AboutUsTrainers";
import AboutUsOffer from "@/components/PageComponents/AboutUs/Desktop/AboutUsOffer";
import AboutUsPractitioners from "@/components/PageComponents/AboutUs/Desktop/AboutUsPractitioners";
import JoinUs from "@/components/PageComponents/AboutUs/Desktop/AboutUsJoinNow";
import React from "react";
import MetaTags from "@/components/Metatags/Meta";
import { Helmet, HelmetProvider } from "react-helmet-async";

function AboutUs() {
  return (
    <>
      <MetaTags
        title="About - Evolve Strength"
        description="Learn about Evolve Strength, one of Canada’s leading fitness and wellness hubs. We offer expert coaching, modern facilities, and affordable health services to help you grow."
      />

      <div className="">
        <AboutUsHero />
        <AboutUsMission />
        <AboutUsOffer />
        <AboutUsTrainers />
        <AboutUsPractitioners />
        <JoinUs />
      </div>
    </>
  );
}

export default AboutUs;
