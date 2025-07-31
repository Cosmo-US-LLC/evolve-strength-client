import React from "react";
import trainerBg from "/src/assets/images/PersonalTraning/SwitchToEvolve/switchToEvolve.webp";

const SwitchToEvolve = () => {
  return (
    <div className="w-full py-12">
      <div className="w-full max-w-[1280px] px-4 md:px-8 mx-auto  ">
        <div
          className=" relative bg-cover bg-center min-h-[600px] flex flex-col justify-between px-2 md:px-[76px] py-16 items-start text-left rounded-xl overflow-hidden shadow-lg"
          style={{ backgroundImage: `url(${trainerBg})` }}
        >
          <div className="absolute inset-y-0 left-0 w-[50%] z-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent " />

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
            <div className="relative z-10 w-full max-w-[750px] bg-[#0000006E] backdrop-blur-[25px] rounded-[10px] flex flex-col md:flex-row justify-center gap-4 md:gap-6 items-center px-2 md:px-6 py-4 text-[#fff]">
              <span className="description text-[#fff]">
                Train with the Best. Or Become the Best.
              </span>
              <div className="flex flex-row w-full gap-2 md:gap-4">
                <button className="btnPrimary ml-3 ">Find a Trainer</button>
                <button className="btnSecondary">Become a Trainer</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwitchToEvolve;
