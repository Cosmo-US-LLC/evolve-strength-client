import React from "react";

import JoinAsTrainerHero from "@/components/PageComponents/JoinAsTrainer/Desktop/JoinAsTrainerHero";
import BuildYourCareer from "@/components/PageComponents/JoinAsTrainer/Desktop/BuildYourCareer";
import WhyChooseEvolve from "@/components/PageComponents/JoinAsTrainer/Desktop/WhyChooseEvolve";
import WhatTrainersAre from "@/components/PageComponents/JoinAsTrainer/Desktop/WhatTrainersAre";
import TourOurFitness from "@/components/PageComponents/JoinAsTrainer/Desktop/TourOurFitness";
import TrainerForm from "@/components/PageComponents/JoinAsTrainer/Desktop/TrainerForm";
import MetaTags from "@/components/Metatags/Meta";
import { Helmet, HelmetProvider } from "react-helmet-async";

function JoinAsTrainer() {
  return (
    <>
    <MetaTags
        title="Become a Personal Trainer at Evolve Strength"
        description="Keep 100% of your earnings. Start your personal training business at Evolve Strength. Pay flat rent, keep all your income, and train in one of Canada’s top fitness facilities. Try our income loss calculator now."
      />
        <JoinAsTrainerHero />
        <BuildYourCareer />
        <WhyChooseEvolve />
        {/* <WhatTrainersAre /> */}
        <TourOurFitness />
       
    </>
  );
}

export default JoinAsTrainer;
