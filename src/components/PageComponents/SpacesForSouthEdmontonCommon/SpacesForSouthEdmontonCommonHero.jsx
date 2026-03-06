import React from "react";
import { Link } from "react-router-dom";

function SpacesForSouthEdmontonCommonHero() {
  return (
    <div className="relative spacesForSouthEdmontonCommonHeroSection">
      {/* <div className="absolute top-0 left-0 z-1 w-full h-full bg-black/40" /> */}
      <div className="max-w-[1280px] px-4 md:px-8 pb-[60px] md:pb-[80px] mx-auto w-full h-full">
        <div className="relative z-2 flex  flex-col items-start justify-end h-full">
          <div className="text-[#FFFFFF] text-[12px] md:text-[16px] font-[600] backdrop-blur-[15px] uppercase leading-[24px] mb-4 md:mb-6 bg-[#20202066] md:!font-[70px] !font-[Kanit] border border-[#ADADAD] px-4 py-2 rounded-full">
            Limited Suites Available - opening May 2026
          </div>
          <h1 className="text-[#FFFFFF] uppercase max-w-[707px] leading-[52px] md:leading-[56px] mb-5">
            PREMIUM WELLNESS OFFICE SUITES
          </h1>
          <h3 className="text-[#FFFFFF] !font-[300] max-w-[707px] leading-[24px] md:leading-[29px] mb-6">
            Grow your practice inside Edmonton’s newest gym, the city’s most
            anticipated wellness ecosystem.
          </h3>
          <h3 className="text-[#FFFFFF] !font-[300] max-w-[707px] leading-[24px] md:leading-[29px] mb-6">
            Our Premium Wellness Suites offer private clinic space with
            commercial gym access, luxury amenities and 40 percent lower
            overhead all under one roof.
          </h3>
          <div className="flex flex-col md:flex-row gap-3">
            <Link to="/explore?category=wellness">
              <button className="btnPrimary">Inquire About Suites</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpacesForSouthEdmontonCommonHero;
