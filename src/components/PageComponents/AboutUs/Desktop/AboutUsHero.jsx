import React from "react";

function AboutUsHero() {
  return (
    <>
       <div className="relative AboutUsHero">
      {/* <div className="absolute top-0 left-0 z-1 w-full h-full bg-black/40" /> */}
      <div className="max-w-[1280px] pb-[60px] md:pb-[110px] mx-auto w-full h-full px-4 md:px-8">
        <div className="relative z-2 flex  flex-col items-start justify-end h-full">
          <h1 className="text-[#FFFFFF] uppercase max-w-[707px] leading-[56px] ">
            ABOUT <br />
            EVOLVE STRENGTH
          </h1>
      
        </div>
      </div>
    </div>
    </>
  );
}

export default AboutUsHero;
