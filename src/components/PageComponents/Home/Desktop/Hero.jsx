import React from "react";
import EvolveHero from "../../../../assets/images/home/hero/evolve-hero.webp";

function Hero() {
  return (
    <div className="relative heroSection">
      {/* <div className="absolute top-0 left-0 z-1 w-full h-full bg-black/40" /> */}
      <div className="max-w-[1280px] px-8 pb-12 mx-auto w-full h-full">
        <div className="relative z-2 flex gap-5 flex-col items-start justify-end h-full">
          <h1 className="text-[#FFFFFF]">Evolve</h1>
          <p className="text-[#FFFFFF] -mt-4">More Space. More Possibilities.</p>
          <div className="flex flex-col items-center gap-4">
            <button className="btnPrimary">Book a Free Tour</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
