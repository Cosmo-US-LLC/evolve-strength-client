import React from "react";
import GrowYourBusinessSectionImage from "@/assets/images/spaces/GrowYourBusinessSection/GrowYourBusinessSectionImage.webp";

function FranchiseHero() {
  return (
    <div className="w-full pb-12 pt-[120px]">
      <div className="w-full max-w-[1280px] px-8 mx-auto flex flex-col gap-12">
        <div className="flex flex-row gap-10">
          <div className="w-[50%] flex">
            <h1 className="max-w-[655px] text-left leading-[56px] uppercase">
              Franchise with <br /> Evolve
            </h1>
          </div>
          <div className="flex flex-col w-[50%] text-left justify-center items-start gap-5">
            <h3 className="text-[#000] leading-[26px] font-[400] w-[585px]">
              Canada’s fastest-growing fitness facility is now franchising.
              Leverage our proven multi-revenue model combining fitness,
              healthcare, and real estate.
            </h3>
            <button className="btnPrimary">Book a Tour</button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src={GrowYourBusinessSectionImage} alt="Description" />
        </div>
      </div>
    </div>
  );
}

export default FranchiseHero;
