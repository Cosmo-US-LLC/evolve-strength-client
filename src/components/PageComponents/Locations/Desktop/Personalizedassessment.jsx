import React from "react";
import Assessment from "@/assets/images/Locations/Assesment.webp"
import PersonalizedAssesment from "./PersonalizedAssesment";

function LoPersonalizedAssesment() {
  return (
    <div className="relative w-full aspect-[16/9]">
      <img
        src={Assessment}
        alt="Gym trainers high five"
        className="absolute inset-0 w-full h-full object-fill"
      />

      <div className="w-full max-w-[1280px] px-8 pb-[120px] mx-auto z-10 h-full items-end flex flex-row relative">
        <div className="bg-[#ffffff] rounded-[10px] shadow-lg p-8 max-w-[346px]">
          <h3 className="text-[#000] uppercase leading-[26px] !font-[700]">
            Start Strong with a Free Personalised Assessment
          </h3>
          <p className="text-[#000] description mt-4 mb-6 leading-[26px]">
            All new Evolve members get a one-on-one assessment with a certified trainer after signing up.
          </p>
          <a
            href="#"
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

export default LoPersonalizedAssesment;
