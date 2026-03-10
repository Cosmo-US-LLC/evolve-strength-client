import React from "react";

function SpacesForSouthEdmontonCommonHero() {
  const handleScrollToForm = () => {
    const el = document.getElementById("join-south-common-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="relative spacesForSouthEdmontonCommonHeroSection">
      {/* <div className="absolute top-0 left-0 z-1 w-full h-full bg-black/40" /> */}
      <div className="max-w-[1280px] px-4 md:px-8 pt-16 md:pt-20 mx-auto w-full h-full">
        <div className="relative z-2 flex  flex-col items-start justify-center h-full">
          <div className="text-[#FFFFFF] text-[12px] md:text-[16px] !font-[600] backdrop-blur-[15px] uppercase leading-[24px] mb-4 md:mb-6 bg-[#20202066] !font-[Kanit] border border-[#ADADAD] px-4 py-2 rounded-full">
            Limited Suites Available - opening May 2026
          </div>
          <h1 className="text-[#FFFFFF] uppercase max-w-[707px] leading-[52px] md:leading-[56px] mb-5">
            PREMIUM WELLNESS OFFICE SUITES
          </h1>
          <h3 className="text-[#FFFFFF] !text-[16px] md:!text-[18px] !font-[400] max-w-[637px] leading-[24px] md:leading-[29px] mb-6">
            Grow your practice inside Edmonton’s newest gym, the city’s most
            anticipated wellness ecosystem.
          </h3>
          <h3 className="text-[#FFFFFF] !font-[400] !text-[16px] md:!text-[18px] max-w-[637px] leading-[24px] md:leading-[29px] mb-6">
            Our Premium Wellness Suites offer private clinic space with
            commercial gym access, luxury amenities and 40 percent lower
            overhead all under one roof.
          </h3>
          <div className="flex flex-col md:flex-row gap-3">
            <button className="btnPrimary" onClick={handleScrollToForm}>
              Inquire About Suites
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpacesForSouthEdmontonCommonHero;
