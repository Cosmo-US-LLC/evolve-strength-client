import React from "react";
import { Link } from "react-router-dom";

const LOCATION_BACKGROUNDS = {
  "calgary-seton": {
    desktop:
      "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/Locations/join-evolve/join_evolve_seten.webp",
    mobile:
      "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/Locations/join-evolve/join_evolve_seten_mob.webp",
    locationName: "Calgary Seton",
    tourUrl: "https://tour.evolvestrength.ca/tour-form/?location=40097",
  },
  "calgary-royal-oak": {
    desktop:
      "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/Locations/join-evolve/join_evolve_royal-oak.webp",
    mobile:
      "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/Locations/join-evolve/join_evolve_royal_oak_mob.webp",
    locationName: "Calgary Royal Oak",
    tourUrl: "https://tour.evolvestrength.ca/tour-form/?location=40142",
  },
  "calgary-sunridge": {
    desktop:
      "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/Locations/join-evolve/sunridge.webp",
    mobile:
      "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/Locations/join-evolve/sunridgeMob.webp",
    locationName: "Calgary Sunridge",
    tourUrl: "https://tour.evolvestrength.ca/tour-form/?location=06973",
  },
  "edmonton-south": {
    desktop:
      "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/Locations/join-evolve/south.webp",
    mobile:
      "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/Locations/join-evolve/southMob.webp",
    locationName: "Edmonton South",
    tourUrl: "https://tour.evolvestrength.ca/tour-form/?location=06962",
  },
  "edmonton-north": {
    desktop:
      "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/Locations/join-evolve/north.webp",
    mobile:
      "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/Locations/join-evolve/northMob.webp",
    locationName: "Edmonton North",
    tourUrl: "https://tour.evolvestrength.ca/tour-form/?location=06964",
  },
  "edmonton-downtown": {
    desktop:
      "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/Locations/join-evolve/join_evolve_downtown.webp",
    mobile:
      "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/Locations/join-evolve/join_evolve_downtown_mob.webp",
    locationName: "Edmonton Downtown",
    tourUrl: "https://tour.evolvestrength.ca/tour-form/?location=06967",
  },
  "burnaby-brentwood": {
    desktop:
      "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/Locations/join-evolve/join_evolve_brentwood.webp",
    mobile:
      "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/Locations/join-evolve/join_evolve_brentwood_mob.webp",
    locationName: "Burnaby Brentwood",
    tourUrl: "https://tour.evolvestrength.ca/tour-form/?location=40248",
  },
  "vancouver-post": {
    desktop:
      "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/Locations/join-evolve/join_evolve_post.webp",
    mobile:
      "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/Locations/join-evolve/join_evolve_post_mob.webp",
    locationName: "Vancouver The Post",
    tourUrl: "https://tour.evolvestrength.ca/tour-form/?location=40327",
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
      <div className="absolute top-0 left-0 z-1 w-full h-full bg-black/20" />
      {/* <div className="absolute inset-y-0 left-0 top-0 border-0 w-[60%] h-full z-1 bg-gradient-to-r  from-black/90 via-black/40 to-transparent " /> */}
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
        <h2 className="!text-[#FFF] w-full md:max-w-[420px] uppercase !leading-[50px] !text-[50px] font-[600] ">
          Join Evolve Strength Today
        </h2>
        <h4 className="!font-vazirmatn w-full md:max-w-[520px] !font-[400] text-[#fff] !leading-[25px]">
          Book a free tour and explore what Evolve has to offer. Experience the
          space. Meet our team. See the difference.
        </h4>
        <div className="flex justify-start items-start ">
          <Link to={locationData.tourUrl}>
            <button className="btnPrimary">BOOK A FREE TOUR</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default JoinUsToday;
