import React from "react";

import JoinAsTrainerHero from "@/components/PageComponents/JoinAsTrainer/Desktop/JoinAsTrainerHero";
import BuildYourCareer from "@/components/PageComponents/JoinAsTrainer/Desktop/BuildYourCareer";
import WhyChooseEvolve from "@/components/PageComponents/JoinAsTrainer/Desktop/WhyChooseEvolve";
import WhatTrainersAre from "@/components/PageComponents/JoinAsTrainer/Desktop/WhatTrainersAre";
import TourOurFitness from "@/components/PageComponents/JoinAsTrainer/Desktop/TourOurFitness";
import TrainerForm from "@/components/PageComponents/JoinAsTrainer/Desktop/TrainerForm";

function JoinAsTrainer() {
  return (
    <div>
      <div className="max-md:hidden">
        <JoinAsTrainerHero />
        <BuildYourCareer />
        <WhyChooseEvolve />
        <WhatTrainersAre />
        <TourOurFitness />
        <TrainerForm/>

      </div>
      <div className="md:hidden">Home Mobile</div>
    </div>
  );
}

export default JoinAsTrainer;
