import React from "react";

function AllLocationsHero() {
  return (
    <div className="relative allLocationsHero">
      <div className="absolute top-0 left-0 z-1 w-full h-full bg-black/20" />
      <div className="max-w-[1280px] px-4 md:px-8 pb-[40px] md:pb-[110px] mx-auto w-full h-full">
        <div className="relative z-2 flex  flex-col items-start justify-end h-full">
          <h1 className="text-[#FFFFFF] uppercase max-w-[740px] leading-[56px] md:mb-5">
            Our <br /> Locations
          </h1>
        </div>
      </div>
    </div>
  );
}

export default AllLocationsHero;
