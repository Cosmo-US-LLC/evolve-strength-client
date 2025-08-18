import React from "react";

function LocationsPersonalizedAssessment() {
  return (
    <div className="relative w-full LoAssesment">
      <div className="w-full max-w-[1280px] md:px-8 px-4 pb-[120px] mx-auto z-10 h-full items-end flex flex-row relative">
        <div className="bg-[#ffffff] rounded-[10px] shadow-lg p-8 w-full md:max-w-[346px]">
          <h3 className="text-[#000] uppercase leading-[26px] !font-[700]">
            Start Strong with a Free Personalised Assessment
          </h3>
          <p className="text-[#000] description mt-4 mb-6 leading-[26px]">
            All new Evolve members get a one-on-one assessment with a certified
            trainer after signing up.
          </p>
          <a
            href="https://join.evolvestrength.ca/tour-form/"
            className="text-[#4AB04A] font-bold leading-[26px] underline underline-offset-4 decoration-solid decoration-auto [text-underline-position:from-font]"
          >
            Book a Free Tour
          </a>
        </div>
      </div>
      <div className="absolute inset-0 bg-black/20"></div>
    </div>
  );
}

export default LocationsPersonalizedAssessment;
