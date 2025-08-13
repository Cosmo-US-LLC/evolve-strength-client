import React from "react";
import PhoneMockUp from "./PhoneMockUp";
import Instagram from "./Instagram";
import Facebook from "./Facebook";
import AllMedia from "./AllMedia";
import FitnessStrip from "./FitnessStrip";
import GymCommunity from "./GymCommunity";
import TrainWithEvolve from "./TrainWithEvolve";
import EvolveStrip from "./EvolveStrip";
import Influencers from "./Influencers";

function index() {
  return (
    <div className="relative w-full max-w-[1440px] mx-auto flex justify-center items-center h-[650px] md:h-[800px] ">
      <div className="z-10">
        <PhoneMockUp />
      </div>
      <div className="absolute md:right-[16.48%] md:top-[8.35%] right-[2.48%] top-[12.35%] z-20">
        <Instagram />
      </div>
      <div className="absolute md:left-[5.62%] md:bottom-[13.12%] left-[2.62%] bottom-[12.12%] z-20">
        <Facebook />
      </div>
      <div className="absolute md:left-[18.4%] md:top-[8.4%] left-[2.4%] top-[9.4%]">
        <AllMedia />
      </div>
      <div className="absolute md:left-[7.5%] md:top-[30.35%] left-[1.5%] top-[35.35%]">
        <FitnessStrip />
      </div>
      <div className="absolute md:left-[24.25%] md:bottom-[35.12%] left-[1.5%] bottom-[40.12%]">
         
        <GymCommunity />
      </div>
      <div className="absolute md:right-[17%]  md:bottom-[36.12%] right-[1.48%] bottom-[40.12%] ">
         
        <TrainWithEvolve />
      </div>
      <div className="absolute md:right-[28.75%] right-[1.48%] top-[35%]">
        
        <EvolveStrip />
      </div>
      <div className="absolute md:right-[21.62%] md:bottom-[25.12%] right-[1.48%] bottom-[18.12%] ">
        <Influencers />
      </div>
    </div>
  );
}

export default index;
