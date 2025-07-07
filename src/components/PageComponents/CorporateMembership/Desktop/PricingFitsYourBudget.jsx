import React from "react";
import pricingFits from "@/assets/images/corporateMembership/PricingFitsYourBudget/pricingFits.webp";

function PricingFitsYourBudget() {
  return (
    <div className="flex gap-6 w-full max-w-[1280px] mx-auto px-10 pt-8 pb-16">
      <div className="w-[50%] flex flex-col gap-6 items-start justify-center">
        <h2 className="uppercase leading-[39px] font-[700] max-w-[542px]">
          Pricing That Fits Your Budget
        </h2>
        <h4 className="leading-[24px] max-w-[542px]">
          We offer flexible pricing based on your team size and what you want{" "}
          <br /> to include. You can cover just gym access, or add wellness
          services <br /> like physio, massage, and more. No long-term contracts
          unless you <br /> want one. You choose what works best.
        </h4>
        <button className="btnPrimary">Book a Free Consultation</button>
      </div>
      <div className="w-[50%] rounded-[10px]">
        <img
          src= {pricingFits}
          alt="Join the Movement"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default PricingFitsYourBudget;
