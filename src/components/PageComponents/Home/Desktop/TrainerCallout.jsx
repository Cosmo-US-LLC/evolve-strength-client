import React from "react";

const TrainerCallout = () => {
  return (
    <div className="w-full md:py-12 max-md:pt-0 max-md:pb-[48px] ">
      <div className="w-full max-w-[1280px] md:px-8 px-4 max-md:px-0 mx-auto ">
        <div
          className="trainerCallout bg-cover bg-center flex flex-col justify-between md:py-14 max-md:py-[24px] items-center text-center md:rounded-xl max-md:rounded-0 overflow-hidden shadow-lg max-md:px-[16px]"
          // style={{ backgroundImage: `url(${trainerBg})` }}
        >
          {/* <div className="absolute inset-0 bg-black/40 z-0" /> */}

          <div className="relative z-10 max-w-3xl  px-[0px] md:px-[16px] space-y-4">
            <h2 className="uppercase max-md:text-start text-[#FFF]">
              <span className="hidden md:inline">
                NO MATTER YOUR GOAL, WE <br /> HAVE THE RIGHT TRAINER.
              </span>
              <span className="inline md:hidden">
                NO MATTER YOUR GOAL, WE HAVE THE RIGHT TRAINER.
              </span>
            </h2>
            <h4 className="leading-[26px] max-md:text-start text-[#fff]">
              <span className="hidden md:inline">
                Work with expert trainers who specialize in everything from
                weight loss and muscle gain to <br /> athletic performance,
                rehab, mobility, and more. Whatever your goal, we’ve got a coach
                for it.
              </span>
              <span className="inline md:hidden">
                Work with expert trainers who specialize in everything from
                weight loss and muscle gain to athletic performance, rehab,
                mobility, and more. Whatever your goal, we’ve got a coach for
                it.
              </span>
            </h4>
          </div>

          <div className="relative z-10 w-full max-w-2xl bg-[#0000006E] backdrop-blur-[25px] rounded-[10px] flex justify-between items-center px-6 py-4 text-[#fff]">
            <span className="description max-md:text-start text-[#fff]">
              Find the Right Personal Trainer for Your Goals.
            </span>
            <button className="btnPrimary">FIND A TRAINER</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainerCallout;
