import JoinTheMovementHero from "@/components/PageComponents/JoinTheMovement/Desktop/JoinTheMovementHero";
import SocialMedia from "@/components/PageComponents/JoinTheMovement/Desktop/SocialMedia";
import TrainHere from "@/components/PageComponents/JoinTheMovement/Desktop/TrainHere";
import WhattoSubmit from "@/components/PageComponents/JoinTheMovement/Desktop/WhattoSubmit";
import WhyYouShould from "@/components/PageComponents/JoinTheMovement/Desktop/WhyYouShould";
import React from "react";
import MetaTags from "@/components/Metatags/Meta";
import { Helmet, HelmetProvider } from "react-helmet-async";



function JoinTheMovement() {
  return (
    <>
    <MetaTags
        title="Get Featured by Evolve Strength"
        description="Submit your Evolve Strength photos or videos and get featured on our social media. Build your audience, reach 800K+ viewers, and earn 50% off your next membership."
      />
      <div>
        <JoinTheMovementHero />
        <WhyYouShould />
        <WhattoSubmit />
        <SocialMedia/>
        <TrainHere />
      </div>
    </>
  );
}

export default JoinTheMovement;
