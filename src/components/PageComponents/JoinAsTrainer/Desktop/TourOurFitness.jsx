import React from "react";
import { Link } from "react-router-dom";

function TourOurFitness() {
  return (
    <div className="relative TourOurFitness">
      <div className="absolute inset-0 bg-black/40 md:bg-black/20 z-0"></div>
      <div className="max-w-[1280px] px-4 pb-[40px] md:px-8 md:pb-[80px] mx-auto w-full h-full">
        <div className="relative z-2 flex  flex-col items-start justify-end h-full">
          <h2 className="text-[#FFFFFF] uppercase max-w-[560px] !font-[700] leading-[39px] mb-5">
            Tour Our Fitness Facility
          </h2>
          <h4 className="text-[#FFFFFF] !font-[400] md:!font-[300] max-w-[542px] leading-[24px] mb-6">
            Come see the space for yourself. Our training floors are one of the
            largest in Canada, built to support serious trainers like you.
          </h4>
          <div className="flex gap-6">
            <Link to="/trainer-form">
              <button
                className="btnPrimary "
                onClick={() => onSelectOption("apply")}
              >
                Start Saving
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TourOurFitness;
