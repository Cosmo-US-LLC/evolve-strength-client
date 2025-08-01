import JoinTheMovementHero from "@/components/PageComponents/JoinTheMovement/Desktop/JoinTheMovementHero";
import SocialMedia from "@/components/PageComponents/JoinTheMovement/Desktop/SocialMedia";
import TrainHere from "@/components/PageComponents/JoinTheMovement/Desktop/TrainHere";
import WhattoSubmit from "@/components/PageComponents/JoinTheMovement/Desktop/WhattoSubmit";
import WhyYouShould from "@/components/PageComponents/JoinTheMovement/Desktop/WhyYouShould";
import React from "react";



function JoinTheMovement() {
  return (
    <div>
      <div>
        <JoinTheMovementHero />
        <WhyYouShould />
        <WhattoSubmit />
        <SocialMedia/>
        <TrainHere />
      </div>
    </div>
  );
}

export default JoinTheMovement;
