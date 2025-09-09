import React from "react";
import { Link } from "react-router-dom";

function EvolveEmployeePlan() {
  return (
    <div className="relative employeePlanBG">
      {/* <div className="absolute top-0 left-0 z-1 w-full h-full bg-black/20" /> */}
      <div className="max-w-[1280px] px-4 md:px-8 pb-[110px] mx-auto w-full h-full">
        <div className="relative z-2 flex  flex-col items-start pt-45 md:pt-0 justify-end md:h-full">
          <h2 className="text-[#FFFFFF] uppercase max-w-[560px] !font-[700] leading-[39px] mb-5">
            Add Evolve to Your Employee Benefits Plan
          </h2>
          <h4 className="text-[#FFFFFF] md:!font-[300] !font-[400] max-w-[542px] leading-[24px] mb-6">
            Give your people access to a complete fitness and wellness
            ecosystem. We’ll help you set it up, manage it, and make sure it
            works for your <br /> team.
          </h4>
          <div className="flex gap-6">
            <Link to="/corporate-membership-wizard">
              <button className="btnPrimary">Get Started</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EvolveEmployeePlan;
