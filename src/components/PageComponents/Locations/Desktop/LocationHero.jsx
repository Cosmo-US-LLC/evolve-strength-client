import React from "react";
import Cancel from "@/assets/images/Locations/Cancel_Icon.svg";
import { Link } from "react-router-dom";

// Location-specific hero images - Desktop
import setonHero from "@/assets/images/Locations/location-hero/seton.webp";
import setonHeroMobile from "@/assets/images/Locations/location-hero/setonMob.webp";
import royalOakHero from "@/assets/images/Locations/location-hero/royal-oak.webp";
import royalOakHeroMobile from "@/assets/images/Locations/location-hero/royal-oakMob.webp";
import sunridgeHero from "@/assets/images/Locations/location-hero/sunridge.webp";
import sunridgeHeroMobile from "@/assets/images/Locations/location-hero/sunridgeMob.webp";
import southHero from "@/assets/images/Locations/location-hero/south.webp";
import southHeroMobile from "@/assets/images/Locations/location-hero/southMob.webp";
import northHero from "@/assets/images/Locations/location-hero/north.webp";
import northHeroMobile from "@/assets/images/Locations/location-hero/northMob.webp";
import downtownHero from "@/assets/images/Locations/location-hero/downtown.webp";
import downtownHeroMobile from "@/assets/images/Locations/location-hero/downtownMob.webp";
import brentwoodHero from "@/assets/images/Locations/location-hero/brentwood.webp";
import brentwoodHeroMobile from "@/assets/images/Locations/location-hero/brentwoodMob.webp";
import postHero from "@/assets/images/Locations/location-hero/post.webp";
import postHeroMobile from "@/assets/images/Locations/location-hero/postMob.webp";

// Location data with hero images and titles
const LOCATION_HERO_DATA = {
  "calgary-seton": {
    desktop: setonHero,
    mobile: setonHeroMobile,
    locationTitle: "SETON",
    city: "CALGARY",
    fullTitle: "SETON's Premier Fitness and Wellness Club",
  },
  "calgary-royal-oak": {
    desktop: royalOakHero,
    mobile: royalOakHeroMobile,
    locationTitle: "ROYAL OAK",
    city: "CALGARY",
    fullTitle: "ROYAL OAK's Premier Fitness and Wellness Club",
  },
  "calgary-sunridge": {
    desktop: sunridgeHero,
    mobile: sunridgeHeroMobile,
    locationTitle: "SUNRIDGE",
    city: "CALGARY",
    fullTitle: "SUNRIDGE's Premier Fitness and Wellness Club",
  },
  "edmonton-south": {
    desktop: southHero,
    mobile: southHeroMobile,
    locationTitle: "SOUTH",
    city: "EDMONTON",
    fullTitle: "Edmonton South's Premier Fitness and Wellness Club",
  },
  "edmonton-north": {
    desktop: northHero,
    mobile: northHeroMobile,
    locationTitle: "NORTH",
    city: "EDMONTON",
    fullTitle: "Edmonton North's Premier Fitness and Wellness Club",
  },
  "edmonton-downtown": {
    desktop: downtownHero,
    mobile: downtownHeroMobile,
    locationTitle: "DOWNTOWN",
    city: "EDMONTON",
    fullTitle: "DOWNTOWN's Premier Fitness and Wellness Club",
  },
  "burnaby-brentwood": {
    desktop: brentwoodHero,
    mobile: brentwoodHeroMobile,
    locationTitle: "BRENTWOOD",
    city: "BURNABY",
    fullTitle: "BRENTWOOD's Premier Fitness and Wellness Club",
  },
  "vancouver-post": {
    desktop: postHero,
    mobile: postHeroMobile,
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
  const fullTitle = dynamicData.fullTitle;

  return (
    <div className="relative h-[600px] md:h-[700px]">
      {/* Desktop Image */}
      <img
        src={dynamicData.desktop}
        alt={`${dynamicData.locationTitle} location hero`}
        className="absolute inset-0 w-full h-full object-cover object-top hidden md:block"
      />

      {/* Mobile Image */}
      <img
        src={dynamicData.mobile}
        alt={`${dynamicData.locationTitle} location hero`}
        className="absolute inset-0 w-full h-full object-cover object-top block md:hidden"
      />
      <div className="absolute top-0 left-0 z-1 w-full h-full bg-black/30" />
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 pb-[20px] md:pb-[80px] relative z-2 flex flex-col items-start justify-end w-full h-full">
        <h1 className="text-[#FFFFFF] uppercase max-w-[960px] leading-[39px] md:leading-[56px] mb-1.5 md:mb-5">
          {fullTitle}
        </h1>
        <h3 className="text-[#FFFFFF] !font-[300] max-w-[707px] leading-[29px] mb-4 md:mb-6">
          See what makes us different.
        </h3>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-[300px]">
            <Link to="https://tour.evolvestrength.ca/tour-form">
              <button className="btnPrimary">BOOK A FREE TOUR</button>
            </Link>
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
