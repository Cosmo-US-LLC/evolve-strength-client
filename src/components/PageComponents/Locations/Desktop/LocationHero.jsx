import React from "react";
import Cancel from "@/assets/images/Locations/Cancel_Icon.svg"

function LocationHero() {

  return (
     <div className="relative LocationsHero">
      {/* <div className="absolute top-0 left-0 z-1 w-full h-full bg-black/40" /> */}
      <div className="max-w-[1280px] px-8 pb-[80px] mx-auto w-full h-full">
        <div className="relative z-2 flex  flex-col items-start justify-end h-full">
          <h1 className="text-[#FFFFFF] uppercase max-w-[844px] leading-[56px] mb-5">
            Seton’s Premier Fitness and Wellness Club
          </h1>
          <h3 className="text-[#FFFFFF] !font-[300] max-w-[707px] leading-[29px] mb-6">
           See what makes us different.
          </h3>
          <div className="flex gap-6">
            <button className="btnPrimary">
              BOOK A FREE TOUR
            </button>
            <div className="flex gap-2">
                <img className="p-[10px_10px] gap-[10px] border border-white rounded-[10px]" src={Cancel}/>
                
                <p className="!description !font-[kanit] text-[#FFFFFF] pt-2 uppercase">No additional contracts</p>
                
            </div>
            <div className="flex gap-2">
                <img className="p-[10px_10px] gap-[10px] border border-white rounded-[10px]" src={Cancel}/>
                
                <p className="!description !font-[kanit] text-[#FFFFFF] pt-2 uppercase">No extra fees</p>
                
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LocationHero;
