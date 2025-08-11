import React from "react";
import { corporateMembershipFAQs } from "@/constants/faqContent";
import CorporateMembershipHero from "@/components/PageComponents/CorporateMembership/Desktop/CorporateMembershipHero";
import OneMembershipFullAccess from "@/components/PageComponents/CorporateMembership/Desktop/OneMembershipFullAccess";
import FrequentlyAskedQuestions from "@/components/PageComponents/FrequentlyAskedQuestions/FrequentlyAskedQuestions";
import EvolveEmployeePlan from "@/components/PageComponents/CorporateMembership/Desktop/EvolveEmployeePlan";
import SeeItForYourSelf from "@/components/PageComponents/CorporateMembership/Desktop/SeeItForYourSelf";
import MembershipPremiumAmenities from "@/components/PageComponents/CorporateMembership/Desktop/MembershipPremiumAmenities";
import MembershipRecovery from "@/components/PageComponents/CorporateMembership/Desktop/MembershipRecovery";
import WhyCompaniesChoose from "@/components/PageComponents/CorporateMembership/Desktop/WhyCompaniesChoose";
import WhoItsFor from "@/components/PageComponents/CorporateMembership/Desktop/WhoItsFor";
import BuildToTeamSupport from "@/components/PageComponents/CorporateMembership/Desktop/BuildToTeamSupport";
import PricingFitsYourBudget from "@/components/PageComponents/CorporateMembership/Desktop/PricingFitsYourBudget";
import MetaTags from "@/components/Metatags/Meta";
import { Helmet, HelmetProvider } from "react-helmet-async";

function CorporateMembership() {
  return (
    <div>
       <MetaTags
        title="Corporate Wellness Plans | Evolve Strength for Employee Fitness & Health"
        description="Support your team with gym and wellness access at Evolve Strength. Scalable corporate plans, 8 locations across Canada, 400+ experts, and full amenities, all in one place."
      />
      
      <CorporateMembershipHero />
      <OneMembershipFullAccess />
      <BuildToTeamSupport />
      <WhoItsFor />
      <WhyCompaniesChoose />
      <MembershipRecovery />
      <MembershipPremiumAmenities />
      <SeeItForYourSelf />
      <PricingFitsYourBudget />
      <EvolveEmployeePlan />
      <FrequentlyAskedQuestions {...corporateMembershipFAQs} />
    </div>
  );
}

export default CorporateMembership;
