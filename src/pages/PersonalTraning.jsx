import React from "react";
import PersonalTraningHero from "../components/PageComponents/PersonalTraning/Desktop/PersonalTraningHero";
import PerfectTrainer from "../components/PageComponents/PersonalTraning/Desktop/PerfectTrainer";
import FreeAssessment from "../components/PageComponents/PersonalTraning/Desktop/FreeAssessment";
import FitnessCategoryMarquee from "../components/PageComponents/PersonalTraning/Desktop/FitnessCategoryMarquee";
import PersonalGymExperience from "../components/PageComponents/PersonalTraning/Desktop/PersonalGymExperience";
import SwitchToEvolve from "../components/PageComponents/PersonalTraning/Desktop/SwitchToEvolve";
import ConsultationWithPersonalTrainers from "@/components/PageComponents/PersonalTraning/Desktop/ConsultationWithPersonalTrainers";

function PersonalTraning() {
  return (
    <div>
      <div className="max-md:hidden">
        <PersonalTraningHero />
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

export default PersonalTraning;
