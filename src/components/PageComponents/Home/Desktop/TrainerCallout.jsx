import React from "react";
import trainerBg from "/src/assets/images/home/TrainerCallout/trainer_callout.webp"; // update with actual image path

const TrainerCallout = () => {
  return (
    <div className="relative w-full max-w-[1280px] mx-auto my-16 rounded-xl overflow-hidden shadow-lg">
    
      <div
        className="bg-cover bg-center min-h-[600px] flex flex-col justify-center items-center text-center px-6 py-10 md:px-16"
        style={{ backgroundImage: `url(${trainerBg})` }}
      >
      
        <div className="absolute inset-0 bg-black/40 z-0" />

      
        <div className="relative z-10 text-white max-w-3xl space-y-4">
          <h2 className="text-2xl md:text-3xl font-extrabold">
            NO MATTER YOUR GOAL, WE <br /> HAVE THE RIGHT TRAINER.
          </h2>
          <p className="text-sm md:text-base text-white/90">
            Work with expert trainers who specialize in everything from weight loss and muscle gain to
            athletic performance, rehab, mobility, and more. Whatever your goal, we’ve got a coach for it.
          </p>
        </div>

 
        <div className="relative z-10 mt-8 w-full max-w-2xl bg-black/80 rounded-md flex justify-between items-center px-6 py-4 text-white text-sm md:text-base">
          <span className="text-white/80">
            Find the Right Personal Trainer for Your Goals.
          </span>
          <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-5 py-2 rounded-md transition">
            FIND A TRAINER
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrainerCallout;
