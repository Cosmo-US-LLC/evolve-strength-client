import React from "react";

function TourOurFitness() {
  return (
    <div className="relative TourOurFitness">
      {/* <div className="absolute top-0 left-0 z-1 w-full h-full bg-black/40" /> */}
      <div className="max-w-[1280px] px-8 pb-[80px] mx-auto w-full h-full">
        <div className="relative z-2 flex  flex-col items-start justify-end h-full">
          <h2 className="text-[#FFFFFF] uppercase max-w-[560px] !font-[700] leading-[39px] mb-5">
            Tour Our Fitness Facility
          </h2>
          <p className="text-[#FFFFFF] description !font-[400] max-w-[542px] leading-[24px] mb-6">
            Come see the space for yourself. Our training floors are one of the
            largest in Canada, built to support serious trainers like you.
          </p>
          <div className="flex gap-6">
            <button className="btnPrimary">START TODAY</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TourOurFitness;
