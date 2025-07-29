import React from "react";
import Cancel from "@/assets/images/Locations/Cancel_Icon.svg";

function LocationHero({ locationData }) {
  // Default fallback if no locationData provided
  const locationTitle = locationData?.locationTitle || "Seton";
  const heroImage =
    locationData?.heroImage || "@/assets/images/Locations/LocationsHero.webp";

  // Dynamic background style
  const heroStyle = {
    backgroundImage: `url('${heroImage}')`,
    backgroundSize: "cover",
    backgroundPosition: "top",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "700px",
  };

  return (
    <div className="relative" style={heroStyle}>
      <div className="absolute top-0 left-0 z-1 w-full h-full bg-black/20" />
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 pb-[80px] relative z-2 flex flex-col items-start justify-end w-full h-full">
        <h1 className="text-[#FFFFFF] uppercase max-w-[844px] leading-[56px] mb-1.5 md:mb-5">
          {locationTitle}'s Premier Fitness and Wellness Club
        </h1>
        <h3 className="text-[#FFFFFF] !font-[300] max-w-[707px] leading-[29px] mb-4 md:mb-6">
          See what makes us different.
        </h3>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-[300px]">
            <button className="btnPrimary">BOOK A FREE TOUR</button>
          </div>
          <div className="flex gap-2 md:gap-8 w-full">
            <div className="flex justify-center items-center gap-1 md:gap-2">
              <img
                className="w-[22px] md:w-[32px] border border-white rounded-[6px]"
                src={Cancel}
                alt=""
              />

              <p className="description !font-[kanit] text-[#FFFFFF] uppercase">
                No additional contracts
              </p>
            </div>
            <div className="flex justify-center items-center gap-1 md:gap-2">
              <img
                className="w-[22px] md:w-[32px] h-auto border border-white rounded-[6px]"
                src={Cancel}
                alt=""
              />

              <p className="description !font-[kanit] text-[#FFFFFF] uppercase">
                No extra fees
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LocationHero;
