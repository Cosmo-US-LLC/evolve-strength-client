import React from "react";
import { Link } from "react-router-dom";

function GymHero() {
  return (
    <div className="relative gymHero">
      {/* <div className="absolute top-0 left-0 z-1 w-full h-full bg-black/40" /> */}
      <div className="max-w-[1280px] px-4 md:px-8 pb-[60px] md:pb-[80px] mx-auto w-full h-full">
        <div className="relative z-2 flex  flex-col items-start justify-end h-full">
          <h1 className="text-[#FFFFFF] uppercase max-w-[707px] leading-[52px] md:leading-[56px] mb-5">
            Evolve <br /> Gym Experience
          </h1>

          <div className="flex flex-col md:flex-row gap-3">
            <Link to="/book-a-tour/">
              <button className="btnPrimary">Book a Tour</button>
            </Link>
            <Link to="/join-now/">
              <button className="btnSecondary">join now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GymHero;
