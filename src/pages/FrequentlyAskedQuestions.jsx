import React from "react";
import { faqMain } from "@/constants/faqContent";
import FrequentlyAskedQuestions from "@/components/PageComponents/FrequentlyAskedQuestions/FrequentlyAskedQuestions";
import MetaTags from "@/components/Metatags/Meta";
import { Helmet, HelmetProvider } from "react-helmet-async";

function FAQs() {
  return (
    <>
      <MetaTags
        title="Evolve Strength FAQs"
        description="Find answers to common questions about Evolve Strength memberships, locations, personal training, recovery services, and more. Get the info you need before joining."
      />

      <div>
        <div className=""></div>
        <div className=" pt-[50px]">
          <FrequentlyAskedQuestions {...faqMain} />
        </div>
      </div>
    </>
  );
}

export default FAQs;
