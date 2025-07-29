import React from "react";
import { LocationFaq } from "@/constants/faqContent";
import LocationHero from "@/components/PageComponents/Locations/Desktop/LocationHero";
import LocationPartners from "@/components/PageComponents/Locations/Desktop/LocationsPartners";
import RightTrainer from "@/components/PageComponents/Locations/Desktop/RightTrainer";
import FitnessCategory from "@/components/PageComponents/Locations/Desktop/FitnessCategory";
import Services from "@/components/PageComponents/Locations/Desktop/Services";
import Spacious from "@/components/PageComponents/Locations/Desktop/LocationsSpacious";
import LocationsSeeItForYourSelf from "@/components/PageComponents/Locations/Desktop/LocationSeeITYourself";
import JoinUsToday from "@/components/PageComponents/Locations/Desktop/JoinToday";
import LoWhyChooseEvolve from "@/components/PageComponents/Locations/Desktop/LoWhyChooseEvlove";
import LocationPricing from "@/components/PageComponents/Locations/Desktop/LocationPricing";
import MeetTheTrainers from "@/components/PageComponents/Locations/Desktop/MeetTheTrainers";
import SetonLocation from "@/components/PageComponents/Locations/Desktop/SetonLocation";
import FrequentlyAskedQuestions from "@/components/PageComponents/FrequentlyAskedQuestions/FrequentlyAskedQuestions";
import PersonalizedAssessment from "@/components/PageComponents/Locations/Desktop/PersonalizedAssessment";

function EdmontonDowntown() {
  return (
        <>
      <LocationHero />
      <LocationPartners />
      <LoWhyChooseEvolve />
      <LocationPricing />
      <FitnessCategory />
      <PersonalizedAssessment />
      <RightTrainer />
      <Services />
      <Spacious />
      <LocationsSeeItForYourSelf />
      <SetonLocation />
      <MeetTheTrainers />
      <JoinUsToday />
      <FrequentlyAskedQuestions {...LocationFaq} />
    </>
  )
}

export default EdmontonDowntown