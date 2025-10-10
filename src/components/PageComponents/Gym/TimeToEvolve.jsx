import React from "react";
import { Link } from "react-router-dom";

function TimeToEvolve() {
  return (
    <div className="w-full timeToEvolve pb-[70px] md:pb-[76px]  relative overflow-hidden">
      <div className="absolute inset-0 bg-black/40 md:bg-black/20 z-0"></div>

      <div className="w-full max-w-[1280px] mx-auto flex h-full items-center px-4 md:px-8">
        <div className="space-y-[20px] relative z-[9] ">
          <h2 className="!text-[#fff] leading-[45px] uppercase drop-shadow-lg">
            It’s Time to Evolve{" "}
          </h2>
          <h4 className="!text-[#fff] leading-[25px] max-w-[593px] !font-[400] md:!font-[300] drop-shadow-lg">
            Feel the energy, ride the momentum, and crush your next workout.
          </h4>
          <div className="flex gap-6">
            <a href="/join-now/">
              <button className="btnPrimary">join now</button>
            </a>
            <a href="/book-a-tour/">
              <button className="btnSecondary">BOOK A FREE TOUR</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TimeToEvolve;
