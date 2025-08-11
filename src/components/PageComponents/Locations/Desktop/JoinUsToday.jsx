import React from "react";
import { Link } from "react-router-dom";
import setonHero from "@/assets/images/Locations/join-evolve/seton.webp";
import royalOakHero from "@/assets/images/Locations/join-evolve/royal-oak.webp";
import sunridgeHero from "@/assets/images/Locations/join-evolve/sunridge.webp";
import southHero from "@/assets/images/Locations/join-evolve/south.webp";
import northHero from "@/assets/images/Locations/join-evolve/north.webp";
import downtownHero from "@/assets/images/Locations/join-evolve/downtown.webp";
import brentwoodHero from "@/assets/images/Locations/join-evolve/brentwood.webp";
import postHero from "@/assets/images/Locations/join-evolve/post.webp";

const LOCATION_BACKGROUNDS = {
  "calgary-seton": {
    backgroundImage: setonHero,
    locationName: "Calgary Seton",
  },
  "calgary-royal-oak": {
    backgroundImage: royalOakHero,
    locationName: "Calgary Royal Oak",
  },
  "calgary-sunridge": {
    backgroundImage: sunridgeHero,
    locationName: "Calgary Sunridge",
  },
  "edmonton-south": {
    backgroundImage: southHero,
    locationName: "Edmonton South",
  },
  "edmonton-north": {
    backgroundImage: northHero,
    locationName: "Edmonton North",
  },
  "edmonton-downtown": {
    backgroundImage: downtownHero,
    locationName: "Edmonton Downtown",
  },
  "burnaby-brentwood": {
    backgroundImage: brentwoodHero,
    locationName: "Burnaby Brentwood",
  },
  "vancouver-post": {
    backgroundImage: postHero,
    locationName: "Vancouver The Post",
  },
};

function JoinUsToday() {
  const currentPath = window.location.pathname;
  let locationKey = "calgary-seton"; // default

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

  const locationData =
    LOCATION_BACKGROUNDS[locationKey] || LOCATION_BACKGROUNDS["calgary-seton"];

  return (
    <div className="relative h-[700px] ">
      <img
        src={locationData.backgroundImage}
        alt={`Join Evolve Strength ${locationData.locationName}`}
        className="absolute inset-0 w-full h-full object-cover bg-center bg-no-repeat"
      />
      <div className="relative z-10 max-w-[1280px] mx-auto w-full h-full px-4 md:px-8 md:pb-[130px] pb-[30px] space-y-[18px] flex flex-col items-start justify-end">
        <h2 className="!text-[#FFF] uppercase !leading-[50px] !text-[50px] font-[600] ">
          Join Evolve <br /> Strength Today
        </h2>
        <h4 className="h4 !font-vazirmatn !font-[400] text-[#fff] !leading-[25px]">
          Book a free tour and explore what Evolve has to offer. <br />
          Experience the space. Meet our team. See the difference.
        </h4>
        <div className="flex justify-start items-start ">
           <Link to="https://join.evolvestrength.ca/tour-form/">
                      <button className="btnPrimary">BOOK A FREE TOUR</button>
                      </Link>
        </div>
      </div>
    </div>
  );
}

export default JoinUsToday;
