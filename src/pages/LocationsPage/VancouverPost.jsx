import React from "react";
import { LocationFaq } from "@/constants/faqContent";
import { getLocationById } from "@/constants/UnUseExploreDataWithTrainer";
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
import LocationsPersonalizedAssessment from "@/components/PageComponents/Locations/Desktop/LocationsPersonalizedAssessment";

function VancouverPost() {
  const locationData = getLocationById("location-vancouver-post");

  return (
    <>
      <LocationHero locationData={locationData} />
      <LocationPartners />
      <LoWhyChooseEvolve />
      <LocationPricing />
      <FitnessCategory />
      {/* <LocationsPersonalizedAssessment /> */}
      <RightTrainer />
      <Services />
      <Spacious />
      <LocationsSeeItForYourSelf />
      <SetonLocation />
      <MeetTheTrainers />
      <JoinUsToday />
      <FrequentlyAskedQuestions {...LocationFaq} />
    </>
  );
}

export default VancouverPost;
