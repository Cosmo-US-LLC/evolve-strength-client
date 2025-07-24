import React from "react";
import { Link } from "react-router-dom";
import GrowYourBusinessSectionImage from "@/assets/images/spaces/GrowYourBusinessSection/GrowYourBusinessSectionImage.webp";

function FranchiseHero() {
  return (
    <div className="w-full pb-12 px-4 pt-[120px]">
      <div className="w-full max-w-[1280px] px-4 md:px-8 mx-auto flex flex-col gap-12">
        <div className="flex md:flex-row flex-col gap-10">
          <div className="md:w-[50%] w-full flex ">
            <h1 className="max-w-[655px] text-left leading-[56px] uppercase">
              Franchise with Evolve
            </h1>
          </div>
          <div className="flex flex-col md:w-[50%] w-full text-left justify-center items-start gap-5">
            <h3 className="text-[#000] leading-[26px] font-[400] md:w-[585px]">
              Canada’s fastest-growing fitness facility is now franchising.
              Leverage our proven multi-revenue model combining fitness,
              healthcare, and real estate.
            </h3>
            <Link to="/your-fitness-future">
              <button className="btnPrimary">Apply Now</button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center ">
          <img src={GrowYourBusinessSectionImage} alt="Description" />
        </div>
      </div>
    </div>
  );
}

export default FranchiseHero;
