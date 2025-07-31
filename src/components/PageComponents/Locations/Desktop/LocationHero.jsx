import React from "react";
import Cancel from "@/assets/images/Locations/Cancel_Icon.svg";

// Location-specific hero images
import setonHero from "@/assets/images/Locations/location-hero/seton.webp";
import royalOakHero from "@/assets/images/Locations/location-hero/royal-oak.webp";
import sunridgeHero from "@/assets/images/Locations/location-hero/sunridge.webp";
import southHero from "@/assets/images/Locations/location-hero/south.webp";
import northHero from "@/assets/images/Locations/location-hero/north.webp";
import downtownHero from "@/assets/images/Locations/location-hero/downtown.webp";
import brentwoodHero from "@/assets/images/Locations/location-hero/brentwood.webp";
import postHero from "@/assets/images/Locations/location-hero/post.webp";

// Location data with hero images and titles
const LOCATION_HERO_DATA = {
  "calgary-seton": {
    heroImage: setonHero,
    locationTitle: "SETON",
    city: "CALGARY",
    fullTitle: "SETON's Premier Fitness and Wellness Club",
  },
  "calgary-royal-oak": {
    heroImage: royalOakHero,
    locationTitle: "ROYAL OAK",
    city: "CALGARY",
    fullTitle: "ROYAL OAK's Premier Fitness and Wellness Club",
  },
  "calgary-sunridge": {
    heroImage: sunridgeHero,
    locationTitle: "SUNRIDGE",
    city: "CALGARY",
    fullTitle: "SUNRIDGE's Premier Fitness and Wellness Club",
  },
  "edmonton-south": {
    heroImage: southHero,
    locationTitle: "SOUTH",
    city: "EDMONTON",
    fullTitle: "Edmonton South's Premier Fitness and Wellness Club",
  },
  "edmonton-north": {
    heroImage: northHero,
    locationTitle: "NORTH",
    city: "EDMONTON",
    fullTitle: "Edmonton North's Premier Fitness and Wellness Club",
  },
  "edmonton-downtown": {
    heroImage: downtownHero,
    locationTitle: "DOWNTOWN",
    city: "EDMONTON",
    fullTitle: "DOWNTOWN's Premier Fitness and Wellness Club",
  },
  "burnaby-brentwood": {
    heroImage: brentwoodHero,
    locationTitle: "BRENTWOOD",
    city: "BURNABY",
    fullTitle: "BRENTWOOD's Premier Fitness and Wellness Club",
  },
  "vancouver-post": {
    heroImage: postHero,
    locationTitle: "THE POST",
    city: "VANCOUVER",
    fullTitle: "Vancouver's Premier Fitness and Wellness Club",
  },
};

function LocationHero() {
  // Get location from URL path
  const currentPath = window.location.pathname;
  let locationKey = "calgary-seton"; // default

  // Extract location from URL path
  if (currentPath.includes("calgary-seton")) {
    locationKey = "calgary-seton";
  } else if (currentPath.includes("calgary-royal-oak")) {
    locationKey = "calgary-royal-oak";
  } else if (currentPath.includes("calgary-sunridge")) {
    locationKey = "calgary-sunridge";
  } else if (currentPath.includes("edmonton-south")) {
    locationKey = "edmonton-south";
  } else if (currentPath.includes("edmonton-north")) {
    locationKey = "edmonton-north";
  } else if (currentPath.includes("edmonton-downtown")) {
    locationKey = "edmonton-downtown";
  } else if (currentPath.includes("burnaby-brentwood")) {
    locationKey = "burnaby-brentwood";
  } else if (currentPath.includes("vancouver-post")) {
    locationKey = "vancouver-post";
  }

  // Get dynamic data for the detected location
  const dynamicData =
    LOCATION_HERO_DATA[locationKey] || LOCATION_HERO_DATA["calgary-seton"];
  const heroImage = dynamicData.heroImage;
  const fullTitle = dynamicData.fullTitle;

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
      <div className="absolute top-0 left-0 z-1 w-full h-full bg-black/30" />
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 pb-[80px] relative z-2 flex flex-col items-start justify-end w-full h-full">
        <h1 className="text-[#FFFFFF] uppercase max-w-[960px] leading-[56px] mb-1.5 md:mb-5">
          {fullTitle}
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
