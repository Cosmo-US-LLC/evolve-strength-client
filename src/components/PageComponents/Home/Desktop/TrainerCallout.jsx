import React from "react";
import trainerBg from "/src/assets/images/home/TrainerCallout/trainer_callout.webp";

const TrainerCallout = () => {
  return (
    <div className="w-full py-12 ">
      <div className="w-full max-w-[1280px] px-8 mx-auto ">
        <div
          className="bg-cover bg-center min-h-[600px] flex flex-col justify-between py-14 items-center text-center rounded-xl overflow-hidden shadow-lg"
          style={{ backgroundImage: `url(${trainerBg})` }}
        >
          {/* <div className="absolute inset-0 bg-black/40 z-0" /> */}

          <div className="relative z-10 max-w-3xl space-y-4">
            <h2 className="uppercase text-[#FFF]">
              NO MATTER YOUR GOAL, WE <br /> HAVE THE RIGHT TRAINER.
            </h2>
            <h4 className="leading-[26px] text-[#fff]">
              Work with expert trainers who specialize in everything from weight
              loss and muscle gain to <br /> athletic performance, rehab, mobility, and
              more. Whatever your goal, we’ve got a coach for it.
            </h4>
          </div>

          <div className="relative z-10 w-full max-w-2xl bg-[#0000006E] backdrop-blur-[25px] rounded-[10px] flex justify-between items-center px-6 py-4 text-[#fff]">
            <span className="description text-[#fff]">
              Find the Right Personal Trainer for Your Goals.
            </span>
            <button className="btnPrimary">
              FIND A TRAINER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainerCallout;
