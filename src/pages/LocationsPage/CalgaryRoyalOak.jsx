import React from "react";
import { LocationFaq } from "@/constants/faqContent";

import LocationHero from "@/components/PageComponents/Locations/Desktop/LocationHero";
import LocationPartners from "@/components/PageComponents/Locations/Desktop/LocationsPartners";
import RightTrainer from "@/components/PageComponents/Locations/Desktop/RightTrainer";
import FitnessCategory from "@/components/PageComponents/Locations/Desktop/FitnessCategory";
// import LocationWellnessServices from "@/components/PageComponents/Locations/Desktop/LocationWellnessServices";
import LocationWellnessServices from "@/components/PageComponents/Locations/Desktop/LocationWellnessServices.jsx";
import Spacious from "@/components/PageComponents/Locations/Desktop/LocationsSpacious";
import LocationsSeeItForYourSelf from "@/components/PageComponents/Locations/Desktop/LocationSeeITYourself";
import JoinUsToday from "@/components/PageComponents/Locations/Desktop/JoinUsToday";
import LoWhyChooseEvolve from "@/components/PageComponents/Locations/Desktop/LoWhyChooseEvlove";
import LocationPricing from "@/components/PageComponents/Locations/Desktop/LocationPricing";
import MeetTheTrainers from "@/components/PageComponents/Locations/Desktop/MeetTheTrainers";
import SetonLocation from "@/components/PageComponents/Locations/Desktop/SetonLocation";
import FrequentlyAskedQuestions from "@/components/PageComponents/FrequentlyAskedQuestions/FrequentlyAskedQuestions";
import LocationsPersonalizedAssessment from "@/components/PageComponents/Locations/Desktop/LocationsPersonalizedAssessment";
import WellnessServices from "@/components/PageComponents/Home/Desktop/WellnessServices";

function CalgaryRoyalOak() {
  return (
    <>
      <LocationHero />
      <LocationPartners />
      <LoWhyChooseEvolve />
      <LocationPricing />
      <FitnessCategory />
      <LocationsPersonalizedAssessment />
      <RightTrainer />
      {/* <WellnessServices/> */}
      <LocationWellnessServices/>
      <Spacious />
      <LocationsSeeItForYourSelf />
      <SetonLocation />
      <MeetTheTrainers location="CALGARY ROYAL OAK" />
      <JoinUsToday />
      <FrequentlyAskedQuestions {...LocationFaq} />
    </>
  );
}

export default CalgaryRoyalOak;
