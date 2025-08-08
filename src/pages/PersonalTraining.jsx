import React from "react";
import PersonalTrainingHero from "../components/PageComponents/PersonalTraining/Desktop/PersonalTrainingHero";
import PerfectTrainer from "../components/PageComponents/PersonalTraining/Desktop/PerfectTrainer";
import FreeAssessment from "../components/PageComponents/PersonalTraining/Desktop/FreeAssessment";
import FitnessCategoryMarquee from "../components/PageComponents/PersonalTraining/Desktop/FitnessCategoryMarquee";
import PersonalGymExperience from "../components/PageComponents/PersonalTraining/Desktop/PersonalGymExperience";
import SwitchToEvolve from "../components/PageComponents/PersonalTraining/Desktop/SwitchToEvolve";
import ConsultationWithPersonalTrainers from "@/components/PageComponents/PersonalTraining/Desktop/ConsultationWithPersonalTrainers";
import MetaTags from "@/components/Metatags/Meta";
import { Helmet, HelmetProvider } from "react-helmet-async";

function PersonalTraining() {
  return (
    <>
    <MetaTags
        title="Personal Training at Evolve Strength | 1-on-1 Coaching That Delivers Results"
        description="Get expert personal training at Evolve Strength. With 200+ trainers and a low 1:5 ratio, we offer custom plans for strength, fat loss, rehab, and more."
      />
      <div className="">
        <PersonalTrainingHero />
        <PerfectTrainer />
        <FreeAssessment />
        <ConsultationWithPersonalTrainers />
        <FitnessCategoryMarquee />
        <PersonalGymExperience />
        <SwitchToEvolve />
      </div>
      {/* <div className="md:hidden">Home Mobile</div> */}
    </>
  );
}

export default PersonalTraining;
