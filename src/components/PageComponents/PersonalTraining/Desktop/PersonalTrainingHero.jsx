import React from "react";

function PersonalTrainingHero() {
  return (
    <div className="relative personalTrainingHeroSection">
      {/* <div className="absolute top-0 left-0 z-1 w-full h-full bg-black/40" /> */}
      <div className="max-w-[1280px] px-8 pb-[80px] mx-auto w-full h-full">
        <div className="relative z-2 flex  flex-col items-start justify-end h-full">
          <h1 className="text-[#FFFFFF] uppercase max-w-[707px] leading-[56px] mb-5">
            Personal training at Evolve Strength
          </h1>
          <h3 className="text-[#FFFFFF] !font-[400] leading-[24px] mb-6">
            One-on-one coaching for unparalleled focus and results.
          </h3>

          <button className="btnPrimary">
            Begin free training consultation
          </button>
        </div>
      </div>
    </div>
  );
}

export default PersonalTrainingHero;
