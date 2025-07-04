import React from "react";
import abouthero from "@/assets/images/AboutUs/about_us_hero.webp"

function AboutUsHero() {
  return (
    <>
       <div className="relative AboutUsHero">
      {/* <div className="absolute top-0 left-0 z-1 w-full h-full bg-black/40" /> */}
      <div className="max-w-[1280px] px-8 pb-[140px] mx-auto w-full h-full">
        <div className="relative z-2 flex  flex-col items-start justify-end h-full">
          <h1 className="text-[#FFFFFF] uppercase max-w-[707px] leading-[56px] mb-5">
            ABOUT 
            EVOLVE STRENGTH
          </h1>
      
        </div>
      </div>
    </div>
    </>
  );
}

export default AboutUsHero;
