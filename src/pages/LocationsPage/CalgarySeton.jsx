import React from "react";
import { LocationFaq } from "@/constants/faqContent";

import LocationHero from "@/components/PageComponents/Locations/Desktop/LocationHero";
import LocationPartners from "@/components/PageComponents/Locations/Desktop/LocationsPartners";
import RightTrainer from "@/components/PageComponents/Locations/Desktop/RightTrainer";
import FitnessCategory from "@/components/PageComponents/Locations/Desktop/FitnessCategory";
import Services from "@/components/PageComponents/Locations/Desktop/LocationWellnessServices.jsx";
import Spacious from "@/components/PageComponents/Locations/Desktop/LocationsSpacious";
import LocationsSeeItForYourSelf from "@/components/PageComponents/Locations/Desktop/LocationSeeITYourself";
import JoinUsToday from "@/components/PageComponents/Locations/Desktop/JoinUsToday";
import LoWhyChooseEvolve from "@/components/PageComponents/Locations/Desktop/LoWhyChooseEvlove";
import LocationPricing from "@/components/PageComponents/Locations/Desktop/LocationPricing";
import MeetTheTrainers from "@/components/PageComponents/Locations/Desktop/MeetTheTrainers";
import SetonLocation from "@/components/PageComponents/Locations/Desktop/SetonLocation";
import FrequentlyAskedQuestions from "@/components/PageComponents/FrequentlyAskedQuestions/FrequentlyAskedQuestions";
import LocationsPersonalizedAssessment from "@/components/PageComponents/Locations/Desktop/LocationsPersonalizedAssessment";
import MetaTags from "@/components/Metatags/Meta";
import { Helmet, HelmetProvider } from "react-helmet-async";
import YourEvolveLocations from "@/components/PageComponents/Locations/Desktop/YourEvolveLocations";

function CalgarySeton() {
  return (
    <>
      <MetaTags
        title="Evolve Strength Seton | Best Fitness Gym in Calgary"
        description="Best gym in Seton with personal fitness instructors, cardio workouts, and strength training for all fitness levels."
      />
      <LocationHero />
      <LocationPartners />
      <Spacious />
      <MeetTheTrainers location="CALGARY SETON" />
      <SetonLocation />
      {/* <LoWhyChooseEvolve /> */}
      <LocationPricing />
      <FitnessCategory />
      <LocationsPersonalizedAssessment />
      {/* <RightTrainer /> */}
      <Services />
      <YourEvolveLocations />
      {/* <LocationsSeeItForYourSelf /> */}

      <JoinUsToday />
      <FrequentlyAskedQuestions {...LocationFaq} />
    </>
  );
}

export default CalgarySeton;
