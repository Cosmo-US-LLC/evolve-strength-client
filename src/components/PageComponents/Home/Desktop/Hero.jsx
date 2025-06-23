import React from "react";
import EvolveHero from "../../../../assets/images/home/hero/evolve-hero.webp";

function Hero() {
  return (
    <div className="relative heroSection">
      {/* <div className="absolute top-0 left-0 z-1 w-full h-full bg-black/40" /> */}
      <div className="max-w-[1280px] px-8 pb-16 mx-auto w-full h-full">
        <div className="relative z-2 flex  flex-col items-start justify-end h-full">
          <h1 className="text-[#FFFFFF]">Evolve</h1>
          <h3 className="text-[#FFFFFF] !font-[400] leading-[24px] mb-5">
            More Space. More Possibilities.
          </h3>

          <button className="btnPrimary">Book a Free Tour</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
