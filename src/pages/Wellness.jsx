import React from "react";
import { faqContent } from "@/constants/faqContent";
import WellnessHero from "@/components/PageComponents/Wellness/Desktop/WellnessHero";
import YogaAndRecoveryRoom from "@/components/PageComponents/Wellness/Desktop/YogaAndRecoveryRoom";
import SteamAndSaunaRoom from "@/components/PageComponents/Wellness/Desktop/SteamAndSaunaRoom";
import WellnessPricingRoom from "@/components/PageComponents/Wellness/Desktop/WellnessPricingRoom";
import FrequentlyAskedQuestions from "@/components/PageComponents/Wellness/Desktop/FrequentlyAskedQuestions";
import WellnessJourneySteps from "@/components/PageComponents/Wellness/Desktop/WellnessJourneySteps";

function Home() {
  return (
    <div>
      <div className="max-md:hidden">
        <WellnessHero />
        <WellnessJourneySteps/>
        <WellnessPricingRoom/>
        <SteamAndSaunaRoom/>
        <YogaAndRecoveryRoom/>
        <FrequentlyAskedQuestions {...faqContent}/>
      </div>
      <div className="md:hidden">Home Mobile</div>
    </div>
  );
}

export default Home;
