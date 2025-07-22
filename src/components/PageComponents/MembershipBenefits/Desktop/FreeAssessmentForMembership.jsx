import React from "react";

function FreeAssessmentForMembership() {
  return (
    <div className="relative w-full MembershipBenefitsFreeAssessment">
      <div className="w-full max-w-[1280px] px-4 md:px-8 py-16 mx-auto z-10 h-full items-end md:items-center flex flex-row relative">
        <div className="bg-[#ffffff] rounded-[10px] shadow-lg p-8 max-w-[346px]">
          <h3 className="text-[#000] uppercase leading-[26px] !font-[700]">
            Start Strong with a Free Personalised Assessment
          </h3>
          <p className="text-[#000] description mt-4 mb-6 leading-[26px]">
            Every new member at Evolve gets a complimentary one-on-one
            assessment with a certified trainer.
          </p>
          <a
            href="#"
            className="text-[#4AB04A] font-bold leading-[26px] underline underline-offset-4 decoration-solid decoration-auto [text-underline-position:from-font]"
          >
            Find a Trainer
          </a>
        </div>
      </div>
      {/* <div className="absolute inset-0 bg-black/10 backdrop-blur-sm"></div> */}
    </div>
  );
}

export default FreeAssessmentForMembership;
