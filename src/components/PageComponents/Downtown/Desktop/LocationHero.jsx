import React from "react";
import Cancel from "@/assets/images/Locations/Cancel_Icon.svg"

function LocationHero() {

  return (
     <div className="relative LocationsHero">
      {/* <div className="absolute top-0 left-0 z-1 w-full h-full bg-black/40" /> */}
      <div className="max-w-[1280px] md:px-8 px-4 md:pb-[80px]  mx-auto w-full h-full">
        <div className="relative z-2 flex  flex-col items-start justify-end h-full">
          <h1 className="text-[#FFFFFF] uppercase max-w-[844px] leading-[56px] mb-1.5 md:mb-5">
            Downtown’s Premier Fitness and Wellness Club
          </h1>
          <h3 className="text-[#FFFFFF] !font-[300] max-w-[707px] leading-[29px] mb-4 md:mb-6">
           See what makes us different.
          </h3>
          <div className="flex flex-col   md:flex-row  md:gap-6 mb-4">
            <div className="flex flex-start">
            <button className="btnPrimary  mb-4 md:mb-0">
              BOOK A FREE TOUR
            </button>
            </div>
            <div className="flex   gap-2 mb-2">
                <img className="md:p-[10px_10px] md:gap-[10px]  border border-white h-5 md:h-full  rounded-[6px] md:rounded-[10px]" src={Cancel}/>
                
                <p className="description  !font-[kanit] text-[#FFFFFF] md:pt-2 uppercase">No additional contracts</p>
                
            
                <img className="md:p-[10px_10px] gap-[10px] border border-white h-5 md:h-full  rounded-[6px] md:rounded-[10px]" src={Cancel}/>
                
                <p className="description !font-[kanit] text-[#FFFFFF] md:pt-2 uppercase">No extra fees</p>
                
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LocationHero;
