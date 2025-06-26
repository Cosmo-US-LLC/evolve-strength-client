import React from "react";
import { faqContent } from "@/constants/faqContent";
import WellnessHero from "@/components/PageComponents/Wellness/Desktop/WellnessHero";
import YogaAndRecoveryRoom from "@/components/PageComponents/Wellness/Desktop/YogaAndRecoveryRoom";
import SteamAndSaunaRoom from "@/components/PageComponents/Wellness/Desktop/SteamAndSaunaRoom";
import WellnessPricingRoom from "@/components/PageComponents/Wellness/Desktop/WellnessPricingRoom";
import FrequentlyAskedQuestions from "@/components/PageComponents/Wellness/Desktop/FrequentlyAskedQuestions";

function Home() {
  return (
    <div>
      <div className="max-md:hidden">
        <WellnessHero />
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
