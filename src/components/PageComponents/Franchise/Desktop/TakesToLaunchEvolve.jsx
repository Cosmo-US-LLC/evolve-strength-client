import React from "react";

function TakesToLaunchEvolve() {
  return (
    <section className="w-full bg-[#000] py-16 flex items-center justify-center">
      <div className="w-full max-w-[1280px] mx-auto flex flex-col items-center px-8">
        <h2 className="text-[#fff] uppercase text-center mb-4">
          WHAT IT TAKES TO LAUNCH EVOLVE
        </h2>
        <h4 className="text-[#fff] leading-[26px] font-[300] text-center mb-6">
          Startup Investment:
        </h4>
        <div className="flex flex-col md:flex-row gap-5 md:gap-20 justify-center md:items-end w-full">
          <div className="flex flex-col items-center">
            <div className="text-[#fff] text-[55px] font-[300] leading-[55px] mb-2">
              $250,000
            </div>
            <h4 className="text-[#fff] leading-[55px] font-[400] opacity-80">
              Minimum Liquid Capital
            </h4>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-[#fff] text-[55px] font-[300] leading-[55px] mb-2">
              $750,000
            </div>
            <div className="text-[#fff] leading-[55px] font-[400] opacity-80">
              Estimated Total Investment
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TakesToLaunchEvolve;
