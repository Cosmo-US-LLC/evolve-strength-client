import React from "react";
import PersonalTrainingHero from "../components/PageComponents/PersonalTraining/Desktop/PersonalTrainingHero";
import PerfectTrainer from "../components/PageComponents/PersonalTraining/Desktop/PerfectTrainer";
import FreeAssessment from "../components/PageComponents/PersonalTraining/Desktop/FreeAssessment";
import FitnessCategoryMarquee from "../components/PageComponents/PersonalTraining/Desktop/FitnessCategoryMarquee";
import PersonalGymExperience from "../components/PageComponents/PersonalTraining/Desktop/PersonalGymExperience";
import SwitchToEvolve from "../components/PageComponents/PersonalTraining/Desktop/SwitchToEvolve";
import ConsultationWithPersonalTrainers from "@/components/PageComponents/PersonalTraining/Desktop/ConsultationWithPersonalTrainers";

function PersonalTraining() {
  return (
    <div>
      <div className="max-md:hidden">
        <PersonalTrainingHero />
        <PerfectTrainer />
        <FreeAssessment />
        <ConsultationWithPersonalTrainers/>
        <FitnessCategoryMarquee/>
        <PersonalGymExperience/>
        <SwitchToEvolve/>
      </div>
      <div className="md:hidden">Home Mobile</div>
    </div>
  );
}

export default PersonalTraining;
