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

function EdmontonDowntown() {
  return (
    <>
      <MetaTags
        title="Evolve Strength Downtown | Edmonton’s Best Fitness Gym"
        description="Join the best fitness club in Edmonton Downtown with top gym equipment, strength training, personal trainers, and affordable memberships."
      />
      <LocationHero />
      <LocationPartners />
      <LoWhyChooseEvolve />
      <LocationPricing />
      <FitnessCategory />
      <LocationsPersonalizedAssessment />
      <RightTrainer />
      <Services />
      <Spacious />
      <LocationsSeeItForYourSelf />
      <SetonLocation />
      <MeetTheTrainers location="EDMONTON DOWNTOWN" />
      <JoinUsToday />
      <FrequentlyAskedQuestions {...LocationFaq} />
    </>
  );
}

export default EdmontonDowntown;
