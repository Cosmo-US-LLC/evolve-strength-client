import React from "react";
import Cancel from "@/assets/images/Locations/Cancel_Icon.svg";
import { Link } from "react-router-dom";

const LOCATION_HERO_DATA = {
  "calgary-seton": {
    desktop:
      "/assets/images/Locations/location-hero/hero_seten.webp",
    mobile:
      "/assets/images/Locations/location-hero/hero_seten_mob.webp",
    locationTitle: "SETON",
    city: "CALGARY",
    fullTitle: "SETON's Premier Fitness and Wellness Club",
    tourUrl: "/book-a-tour/?location=40097",
    membershipUrl:
      "/join-now/membership-type?location=Calgary%20Seton",
  },
  "calgary-royal-oak": {
    desktop:
      "/assets/images/Locations/location-hero/hero_royal_oak.webp",
    mobile:
      "/assets/images/Locations/location-hero/hero_royal_oak_mob.webp",
    locationTitle: "ROYAL OAK",
    city: "CALGARY",
    fullTitle: "ROYAL OAK's Premier Fitness and Wellness Club",
    tourUrl: "/book-a-tour/?location=40142",
    membershipUrl:
      "/join-now/membership-type?location=Calgary%20Royal%20Oak",
  },
  "calgary-sunridge": {
    desktop:
      "/assets/images/Locations/location-hero/sunridge.webp",
    mobile:
      "/assets/images/Locations/location-hero/sunridgeMob.webp",
    locationTitle: "SUNRIDGE",
    city: "CALGARY",
    fullTitle: "SUNRIDGE's Premier Fitness and Wellness Club",
    tourUrl: "/book-a-tour/?location=06973",
    membershipUrl:
      "/join-now/membership-type?location=Calgary%20Sunridge",
  },
  "edmonton-south": {
    desktop:
      "/assets/images/Locations/location-hero/south.webp",
    mobile:
      "/assets/images/Locations/location-hero/southMob.webp",
    locationTitle: "SOUTH",
    city: "EDMONTON",
    fullTitle: "Edmonton South's Premier Fitness and Wellness Club",
    tourUrl: "/book-a-tour/?location=06962",
    membershipUrl:
      "/join-now/membership-type?location=Edmonton%20South",
  },
  "edmonton-north": {
    desktop:
      "/assets/images/Locations/location-hero/north.webp",
    mobile:
      "/assets/images/Locations/location-hero/northMob.webp",
    locationTitle: "NORTH",
    city: "EDMONTON",
    fullTitle: "Edmonton North's Premier Fitness and Wellness Club",
    tourUrl: "/book-a-tour/?location=06964",
    membershipUrl:
      "/join-now/membership-type?location=Edmonton%20North",
  },
  "edmonton-downtown": {
    desktop:
      "/assets/images/Locations/location-hero/hero_downtown.webp",
    mobile:
      "/assets/images/Locations/location-hero/hero_downtown_mob.webp",
    locationTitle: "DOWNTOWN",
    city: "EDMONTON",
    fullTitle: "DOWNTOWN's Premier Fitness and Wellness Club",
    tourUrl: "/book-a-tour/?location=06967",
    membershipUrl:
      "/join-now/membership-type?location=Edmonton%20Downtown",
  },
  "burnaby-brentwood": {
    desktop:
      "/assets/images/Locations/location-hero/hero_brentwood.webp",
    mobile:
      "/assets/images/Locations/location-hero/hero_brentwood_mob.webp",
    locationTitle: "BRENTWOOD",
    city: "BURNABY",
    fullTitle: "BRENTWOOD's Premier Fitness and Wellness Club",
    tourUrl: "/book-a-tour/?location=40248",
    membershipUrl:
      "/join-now/membership-type?location=Burnaby%20Brentwood",
  },
  "vancouver-post": {
    desktop:
      "/assets/images/Locations/location-hero/hero_post.webp",
    mobile:
      "/assets/images/Locations/location-hero/hero_post_mob.webp",
    locationTitle: "THE POST",
    city: "VANCOUVER",
    fullTitle: "Vancouver's Premier Fitness and Wellness Club",
    tourUrl: "/book-a-tour/?location=40327",
    membershipUrl:
      "/join-now/membership-type?location=Vancouver,%20The%20Post",
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
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 pb-[20px] md:pb-[64px] relative z-2 flex flex-col items-start justify-end w-full h-full">
        <h1 className="text-[#FFFFFF] uppercase max-w-[960px] leading-[39px] md:leading-[56px] mb-1.5 md:mb-5">
          {fullTitle}
        </h1>
        <h3 className="text-[#FFFFFF] !font-[300] max-w-[844px] leading-[29px] mb-4 md:mb-6">
          Kickstart your fitness journey at our premier gym. Ready to dive in?
          Sign up for a membership or schedule a free tour to explore our space!
        </h3>
        <div className="flex flex-col gap-6">
          <div className="flex flex-row gap-4">
            <a href={dynamicData.tourUrl}>
              <button className="btnPrimary">BOOK A FREE TOUR</button>
            </a>
            <a href={dynamicData.membershipUrl}>
              <button className="btnSecondary">JOIN NOW</button>
            </a>
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
