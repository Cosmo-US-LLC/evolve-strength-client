import JoinTheMovementHero from "@/components/PageComponents/JoinTheMovement/JoinTheMovementHero";
import SocialMedia from "@/components/PageComponents/JoinTheMovement/SocialMedia";
import TrainHere from "@/components/PageComponents/JoinTheMovement/TrainHere";
import WhattoSubmit from "@/components/PageComponents/JoinTheMovement/WhattoSubmit";
import WhyYouShould from "@/components/PageComponents/JoinTheMovement/WhyYouShould";
import React from "react";



function JoinTheMovement() {
  return (
    <div>
      <div className="max-md:hidden">
        <JoinTheMovementHero />
        <WhyYouShould />
        <WhattoSubmit />
        <SocialMedia />
        <TrainHere />
      </div>
      <div className="md:hidden">Home Mobile</div>
    </div>
  );
}

export default JoinTheMovement;
