import React from "react";

import JoinAsTrainerHero from "@/components/PageComponents/JoinAsTrainer/Desktop/JoinAsTrainerHero";
import MetaTags from "@/components/Metatags/Meta";
import MiddleTextHero from "@/components/PageComponents/JoinAsTrainer/Desktop/MiddleTextHero";
import ContentCard from "@/components/Common/ContentCard";
import TrainerTestimonials from "@/components/PageComponents/JoinAsTrainer/Desktop/TrainerTestimonials";
import WhyChooseEvolveProgress from "@/components/PageComponents/JoinAsTrainer/Desktop/WhyChooseEvolveProgress";

function JoinAsTrainer() {
  return (
    <>
      <MetaTags
        title="Become a Personal Trainer at Evolve Strength"
        description="Keep 100% of your earnings. Start your personal training business at Evolve Strength. Pay flat rent, keep all your income, and train in one of Canada’s top fitness facilities. Try our income loss calculator now."
      />
      <MiddleTextHero title={"More Clients.<br />  More Income.<br />  More Freedom"} />
      <ContentCard
        title={"WRITE YOUR OWN <br /> STORY"}
        description={"op building someone else’s dream. At Evolve you’re not an employee you’re an entrepreneur. Build your brand, grow your client base, and create a business that’s truly yours"}
        buttonTitle={""}
        buttonLink="#"
        imagePosition = "center"
        backgroundImage={"https://evolve-strength.tor1.digitaloceanspaces.com/media/1762436244608-c3da81dd-6405-4c5c-a434-4f33239dbd6c.webp"}
        height={800}
      />
      <ContentCard
        title={"KEEP WHAT YOUR EARN"}
        description={"Stop splitting your income and chasing quotas. 100% of what you make is yours. You set your rates, choose your clients, and decide how much you want to grow. Freedom isn’t just about time it’s about financial control"}
        buttonTitle={""}
        buttonLink="#"
        imagePosition = "left"
        backgroundImage={"https://evolve-strength.tor1.digitaloceanspaces.com/media/1762436549473-24dd5bcf-16c5-4836-8067-258d09c5bdf0.webp"}
        height={800}
      />
      <JoinAsTrainerHero />
      <TrainerTestimonials />
      <WhyChooseEvolveProgress />
      {/* <BuildYourCareer /> */}
      {/* <WhyChooseEvolve /> */}
      {/* <WhatTrainersAre /> */}
      {/* <TourOurFitness /> */}
      <ContentCard
        title={"TOUR OUR FITNESS<br />FACILITIES"}
        description={"Come see the space for yourself. Our training floors are one of the largest in Canada, built to support serious trainers like you."}
        buttonTitle={"START TODAY"}
        buttonLink="#"
        imagePosition = "right"
        backgroundImage={"https://evolve-strength.tor1.digitaloceanspaces.com/media/1762436142902-232e5488-5211-42a9-bb96-ec39e331f591.webp"}
        height={800}
      />
      
    </>
  );
}

export default JoinAsTrainer;
