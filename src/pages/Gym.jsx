import Evolvegallery from "@/components/PageComponents/Gym/Evolvegallery";
import GrassIsIndeed from "@/components/PageComponents/Gym/GrassIsIndeed";
import GymHero from "@/components/PageComponents/Gym/GymHero";
import GymTrainingCategories from "@/components/PageComponents/Gym/GymTrainingCategories";
import PumpIt from "@/components/PageComponents/Gym/PumpIt";
import TimeToEvolve from "@/components/PageComponents/Gym/TimeToEvolve";
import TrustedEquipmentBrands from "@/components/PageComponents/Gym/TrustedEquipmentBrands";
import WhatsMakeEvolveDiff from "@/components/PageComponents/Gym/WhatsMakeEvolveDiff";
import React from "react";

function Gym() {
  return (
    <>
      <GymHero />
      <PumpIt />
      <WhatsMakeEvolveDiff />
      <GymTrainingCategories />
      <GrassIsIndeed />
      <TrustedEquipmentBrands />
      <Evolvegallery />
      <TimeToEvolve />
    </>
  );
}

export default Gym;
