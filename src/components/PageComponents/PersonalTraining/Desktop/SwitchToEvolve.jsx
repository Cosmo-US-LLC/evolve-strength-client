import React from "react";
import trainerBg from "/src/assets/images/PersonalTraning/SwitchToEvolve/switchToEvolve.webp";

const SwitchToEvolve = () => {
  return (
    <div className="w-full py-12 ">
      <div className="w-full max-w-[1280px] px-8 mx-auto ">
        <div
          className="bg-cover bg-center min-h-[600px] flex flex-col justify-between px-[76px] py-16 items-start text-left rounded-xl overflow-hidden shadow-lg"
          style={{ backgroundImage: `url(${trainerBg})` }}
        >
          {/* <div className="absolute inset-0 bg-black/40 z-0" /> */}

          <div className="relative z-10 max-w-3xl space-y-4">
            <h2 className="uppercase text-[#FFF]">
              Switch to Evolve and <br /> Feel the Difference!
            </h2>
            <h4 className="leading-[26px] font-[400] text-[#fff] max-w-[400px] relative z-20">
              At Evolve, members get personalized support, expert guidance, and
              access to Canada’s largest training space. Trainers get the
              freedom to build their business, train their clients their way,
              and be part of a facility designed for serious results.
            </h4>
          </div>

          <div className="w-full flex justify-center items-center">
            <div className="relative z-10 w-full max-w-[750px] bg-[#0000006E] backdrop-blur-[25px] rounded-[10px] flex justify-center gap-6 items-center px-6 py-4 text-[#fff]">
              <span className="description text-[#fff]">
                Train with the Best. Or Become the Best.
              </span>
              <button className="btnPrimary ml-3">Find a Trainer</button>
              <button className="btnSecondary">Become a Trainer</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwitchToEvolve;
