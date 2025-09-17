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
import YourEvolveLocations from "@/components/PageComponents/Locations/Desktop/YourEvolveLocations";
import EvolveFloorPlan from "@/components/PageComponents/Franchise/Desktop/EvolveFloorPlan";
import { getFloorPlanData } from "@/constants/floorPlanSlides";

function BurnabyBrentwood() {
  return (
    <>
      <MetaTags
        title="Evolve Strength Brentwood | The Best Fitness Gym in Burnaby"
        description="Join the best fitness gym in Burnaby with affordable memberships, expert personal trainers, and top-of-the-line equipment."
      />
      <LocationHero />
      <LocationPartners />
      <Spacious />
      <MeetTheTrainers location="BURNABY BRENTWOOD" />
      <SetonLocation />
      <EvolveFloorPlan
        slides={getFloorPlanData("brentwood").slides}
        heading={getFloorPlanData("brentwood").heading}
        description={getFloorPlanData("brentwood").description}
      />
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

export default BurnabyBrentwood;
