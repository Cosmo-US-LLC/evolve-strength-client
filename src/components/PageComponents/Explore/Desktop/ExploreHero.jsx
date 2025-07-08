import React from "react";

function ExploreHero() {
  return (
    <div className="relative ExploreHeroBG">
      {/* <div className="absolute top-0 left-0 z-1 w-full h-full bg-black/40" /> */}
      <div className="max-w-[1280px] px-8 pb-[80px] mx-auto w-full h-full">
        <div className="relative z-2 flex  flex-col items-start justify-end h-full">
          <h1 className="text-[#FFFFFF] uppercase max-w-[807px] leading-[70px] mb-5">
            Discover Trainers, Wellness Services and Amenities at Evolve
          </h1>
          <h3 className="text-[#FFFFFF] !font-[300] max-w-[707px] leading-[29px] mb-6">
            Choose an option below to get started.
          </h3>
          <div className="flex gap-6">
            <button className="btnPrimary">Book a Free Tour</button>
            <button className="btnSecondary">Join Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExploreHero;
