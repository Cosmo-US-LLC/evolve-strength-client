import React from "react";
import { Link } from "react-router-dom";

const LOCATION_BACKGROUNDS = {
  "calgary-seton": {
    desktop:
      "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/Locations/join-evolve/seton.webp",
    mobile:
      "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/Locations/join-evolve/setonMob.webp",
    locationName: "Calgary Seton",
  },
  "calgary-royal-oak": {
    desktop:
      "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/Locations/join-evolve/royal-oak.webp",
    mobile:
      "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/Locations/join-evolve/royal-oakMob.webp",
    locationName: "Calgary Royal Oak",
  },
  "calgary-sunridge": {
    desktop:
      "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/Locations/join-evolve/sunridge.webp",
    mobile:
      "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/Locations/join-evolve/sunridgeMob.webp",
    locationName: "Calgary Sunridge",
  },
  "edmonton-south": {
    desktop:
      "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/Locations/join-evolve/south.webp",
    mobile:
      "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/Locations/join-evolve/southMob.webp",
    locationName: "Edmonton South",
  },
  "edmonton-north": {
    desktop:
      "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/Locations/join-evolve/north.webp",
    mobile:
      "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/Locations/join-evolve/northMob.webp",
    locationName: "Edmonton North",
  },
  "edmonton-downtown": {
    desktop:
      "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/Locations/join-evolve/downtown.webp",
    mobile:
      "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/Locations/join-evolve/downtownMob.webp",
    locationName: "Edmonton Downtown",
  },
  "burnaby-brentwood": {
    desktop:
      "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/Locations/join-evolve/brentwood.webp",
    mobile:
      "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/Locations/join-evolve/brentwoodMob.webp",
    locationName: "Burnaby Brentwood",
  },
  "vancouver-post": {
    desktop:
      "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/Locations/join-evolve/post.webp",
    mobile:
      "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/Locations/join-evolve/postMob.webp",
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
    <div className="relative h-[600px] md:h-[700px] ">
      <div className="absolute inset-y-0 left-0 top-0 border-0 w-[60%] h-full z-1 md:bg-gradient-to-r  from-black/90 via-black/40 to-transparent " />
      {/* Desktop Image */}
      <img
        src={locationData.desktop}
        alt={`Join Evolve Strength ${locationData.locationName}`}
        className="absolute inset-0 w-full h-full object-cover bg-top bg-no-repeat hidden md:block"
      />

      {/* Mobile Image */}
      <img
        src={locationData.mobile}
        alt={`Join Evolve Strength ${locationData.locationName}`}
        className="absolute inset-0 w-full h-full object-cover bg-center bg-no-repeat block md:hidden"
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
          <Link to="https://tour.evolvestrength.ca/tour-form ">
            <button className="btnPrimary">BOOK A FREE TOUR</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default JoinUsToday;
