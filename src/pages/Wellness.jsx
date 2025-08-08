import React from "react";
import { faqContent } from "@/constants/faqContent";
import WellnessHero from "@/components/PageComponents/Wellness/Desktop/WellnessHero";
import YogaAndRecoveryRoom from "@/components/PageComponents/Wellness/Desktop/YogaAndRecoveryRoom";
import SteamAndSaunaRoom from "@/components/PageComponents/Wellness/Desktop/SteamAndSaunaRoom";
import WellnessPricingRoom from "@/components/PageComponents/Wellness/Desktop/WellnessPricingRoom";
import WellnessJourneySteps from "@/components/PageComponents/Wellness/Desktop/WellnessJourneySteps";
import WellnessServicesForEveryone from "@/components/PageComponents/Wellness/Desktop/WellnessServicesForEveryone";
import FrequentlyAskedQuestions from "@/components/PageComponents/FrequentlyAskedQuestions/FrequentlyAskedQuestions";
import MetaTags from "@/components/Metatags/Meta";
import { Helmet, HelmetProvider } from "react-helmet-async";

function Home() {
  return (
    <>
    <MetaTags
        title="Evolve Strength Wellness Services | Affordable, Expert Care"
        description="Discover expert-led wellness services at Evolve Strength, including massage, chiropractic care, acupuncture, and more, all under one roof, at prices that fit your budget."
      />
      <WellnessHero />
      <WellnessJourneySteps />
      <WellnessPricingRoom />
      <WellnessServicesForEveryone />
      <SteamAndSaunaRoom />
      <YogaAndRecoveryRoom />
      <FrequentlyAskedQuestions {...faqContent} />
    </>
  );
}

export default Home;
