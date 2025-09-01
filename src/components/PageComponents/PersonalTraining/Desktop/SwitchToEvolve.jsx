import React from "react";
import { Link } from "react-router-dom";

const SwitchToEvolve = () => {
  return (
    <div className="w-full md:py-12">
      <div className="w-full max-w-[1280px]  md:px-8 mx-auto  ">
        <div
          className=" relative bg-cover switchToEvolve bg-center min-h-[600px] flex flex-col justify-between px-4  md:px-[76px] py-16 items-start text-left md:rounded-xl overflow-hidden shadow-lg"
          // style={{ backgroundImage: `url(${trainerBg})` }}
        >
          <div className="absolute inset-y-0 left-0 w-[40%] z-0 bg-gradient-to-t md:bg-gradient-to-r from-black/20 via-black/20 to-transparent " />

          <div className="relative  z-10 max-w-3xl space-y-4">
            <h2 className="uppercase text-[#FFF]">
              Switch to Evolve and <br /> Feel the Difference!
            </h2>
            <h4 className="leading-[26px] font-[400] text-[#fff] max-w-[400px] relative z-20">
              At Evolve, personal training works differently. Our coaches run
              their own businesses inside our space, so they’re invested in your
              progress. You get more focus, more care, and better results.
              Whatever your goal, the right trainer is here.
            </h4>
          </div>

          <div className="w-full flex justify-center items-center">
            <div className="relative z-10 w-full max-w-[750px] bg-[#0000006E] backdrop-blur-[25px] rounded-[10px] flex flex-col md:flex-row justify-center gap-4 md:gap-2 items-center px-2 md:px-6 py-4 text-[#fff]">
              <span className="description text-[#fff] w-[72%]">
                Train with the Best.
              </span>
              <div className="flex flex-row w-full gap-2 md:gap-4">
                <Link to="/explore?category=trainers">
                  <button className="btnPrimary ml-3 ">Find a Trainer</button>
                </Link>
                <Link to="/join-as-trainer">
                  <button className="btnSecondary">Become a Trainer</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwitchToEvolve;
