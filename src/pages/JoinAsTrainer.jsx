import React from "react";

import JoinAsTrainerHero from "@/components/PageComponents/JoinAsTrainer/Desktop/JoinAsTrainerHero";
import MetaTags from "@/components/Metatags/Meta";
import MiddleTextHero from "@/components/PageComponents/JoinAsTrainer/Desktop/MiddleTextHero";
import ContentCard from "@/components/Common/ContentCard";
import TrainerTestimonials from "@/components/PageComponents/JoinAsTrainer/Desktop/TrainerTestimonials";
import WhyChooseEvolveProgress from "@/components/PageComponents/JoinAsTrainer/Desktop/WhyChooseEvolveProgress";
import TourOurFitness from "@/components/PageComponents/JoinAsTrainer/Desktop/TourOurFitness";
import WhatTrainersAre from "@/components/PageComponents/JoinAsTrainer/Desktop/WhatTrainersAre";

function JoinAsTrainer() {
  return (
    <>
      <MetaTags
        title="Become a Personal Trainer at Evolve Strength"
        description="Keep 100% of your earnings. Start your personal training business at Evolve Strength. Pay flat rent, keep all your income, and train in one of Canada’s top fitness facilities. Try our income loss calculator now."
      />
      <MiddleTextHero
        title={"More Clients.<br />  More Income.<br />  More Freedom."}
      />
      <ContentCard
        title={"WRITE YOUR OWN <br /> STORY"}
        description={
          "Stop building someone else’s dream. At Evolve you’re not an employee you’re an entrepreneur. Build your brand, grow your client base, and create a business that’s truly yours."
        }
        buttonTitle={""}
        buttonLink="#"
        imagePosition="right"
        backgroundImage={
          "https://evolve-strength.tor1.digitaloceanspaces.com/media/1763533871016-5adfd366-8cf6-4d52-b82a-14ce6c0db3cb.webp"
        }
        backgroundImageMob={
          "https://evolve-strength.tor1.digitaloceanspaces.com/media/1763533740489-55290d51-538f-4373-b5de-73c5333cd8da.webp"
        }
        height={800}
      />
      <TourOurFitness />
      {/* <ContentCard
        title={"KEEP WHAT YOUR EARN"}
        description={
          "Stop splitting your income and chasing quotas. 100% of what you make is yours. You set your rates, choose your clients, and decide how much you want to grow. Freedom isn’t just about time it’s about financial control."
        }
        buttonTitle={""}
        buttonLink="#"
        imagePosition="left"
        backgroundImage={
          "https://evolve-strength.tor1.digitaloceanspaces.com/media/1763109300250-47d31d1b-6bdd-452f-bb33-6c334d55644d.webp"
        }
        backgroundImageMob={
          "https://evolve-strength.tor1.digitaloceanspaces.com/media/1762851957642-85e47bed-980b-42f2-9111-672badc6579d.webp"
        }
        height={800}
      /> */}
      <JoinAsTrainerHero />
      <WhyChooseEvolveProgress />
      {/* <TrainerTestimonials /> */}
      {/* <BuildYourCareer /> */}
      {/* <WhyChooseEvolve /> */}
      <WhatTrainersAre />
      {/* <TourOurFitness /> */}
      <ContentCard
        title={"TOUR OUR FITNESS<br />FACILITIES"}
        description={
          "Come see the space for yourself. Our training floors are one of the largest in Canada, built to support serious trainers like you."
        }
        buttonTitle={"START TODAY"}
        buttonLink="/trainer-form"
        imagePosition="right"
        backgroundImage={
          "https://evolve-strength.tor1.digitaloceanspaces.com/media/1762851098170-0165b620-0939-4da4-8806-51236f565a5d.webp"
        }
        backgroundImageMob={
          "https://evolve-strength.tor1.digitaloceanspaces.com/media/1762851986658-3d3b9cab-583a-4500-8994-4acedf661cdd.webp"
        }
        height={800}
      />
    </>
  );
}

export default JoinAsTrainer;
