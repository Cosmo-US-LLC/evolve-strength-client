import React from "react";
import { Link } from "react-router-dom";

function TourOurFitness() {
  return (
    <div className="relative TourOurFitness">
      <div className="absolute inset-0 bg-black/40 md:bg-black/20 z-0"></div>
      <div className="max-w-[1280px] px-4 pb-[40px] md:px-8 md:pb-[80px] mx-auto w-full h-full">
        <div className="relative z-2 flex  flex-col items-end justify-center h-full">
          <div>
            <h2 className="text-[#FFFFFF] uppercase max-w-[560px] !font-[700] leading-[39px] mb-5">
              KEEP WHAT YOUR EARN
            </h2>
            <h4 className="text-[#FFFFFF] !font-[400] md:!font-[300] max-w-[542px] leading-[24px] mb-6">
              Stop splitting your income and chasing quotas. 100% of what you
              make is yours. You set your rates, choose your clients, and decide
              how much you want to grow. Freedom isn’t just about time it’s
              about financial control.
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TourOurFitness;
