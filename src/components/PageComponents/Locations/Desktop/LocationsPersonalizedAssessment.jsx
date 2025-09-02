import React from "react";

function LocationsPersonalizedAssessment() {
  // Get location from URL path
  const currentPath = window.location.pathname;
  let locationKey = "calgary-seton"; // default

  if (currentPath.includes("vancouver-post")) {
    locationKey = "vancouver-post";
  } else if (currentPath.includes("burnaby-brentwood")) {
    locationKey = "burnaby-brentwood";
  } else if (currentPath.includes("calgary-seton")) {
    locationKey = "calgary-seton";
  } else if (currentPath.includes("calgary-royal-oak")) {
    locationKey = "calgary-royal-oak";
  } else if (currentPath.includes("calgary-sunridge")) {
    locationKey = "calgary-sunridge";
  } else if (currentPath.includes("edmonton-south")) {
    locationKey = "edmonton-south";
  } else if (currentPath.includes("edmonton-downtown")) {
    locationKey = "edmonton-downtown";
  } else if (currentPath.includes("edmonton-north")) {
    locationKey = "edmonton-north";
  }

  // Location-specific tour URLs
  const getTourUrl = (locationKey) => {
    const tourUrls = {
      "vancouver-post":
        "https://tour.evolvestrength.ca/tour-form/?location=40327",
      "burnaby-brentwood":
        "https://tour.evolvestrength.ca/tour-form/?location=40248",
      "calgary-seton":
        "https://tour.evolvestrength.ca/tour-form/?location=40097",
      "calgary-royal-oak":
        "https://tour.evolvestrength.ca/tour-form/?location=40142",
      "calgary-sunridge":
        "https://tour.evolvestrength.ca/tour-form/?location=06973",
      "edmonton-south":
        "https://tour.evolvestrength.ca/tour-form/?location=06962",
      "edmonton-downtown":
        "https://tour.evolvestrength.ca/tour-form/?location=06967",
      "edmonton-north":
        "https://tour.evolvestrength.ca/tour-form/?location=06964",
    };

    return tourUrls[locationKey] || "https://tour.evolvestrength.ca/tour-form";
  };

  const tourUrl = getTourUrl(locationKey);

  // Location-specific background images (desktop and mobile)
  const getBackgroundImages = (locationKey) => {
    const backgroundImages = {
      "vancouver-post": {
        desktop:
          "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/Locations/assesment/assessment_post.webp",
        mobile:
          "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/Locations/assesment/assessment_post_mob.webp",
      },
      "burnaby-brentwood": {
        desktop:
          "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/Locations/assesment/assessment_brentwood.webp",
        mobile:
          "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/Locations/assesment/assessment_brentwood_mob.webp",
      },
      "calgary-seton": {
        desktop:
          "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/Locations/assesment/assessment_seten.webp",
        mobile:
          "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/Locations/assesment/assessment_seten_mob.webp",
      },
      "calgary-royal-oak": {
        desktop:
          "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/Locations/assesment/assessment_royal_oak.webp",
        mobile:
          "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/Locations/assesment/assessment_royal_oak_mob.webp",
      },
      "calgary-sunridge": {
        desktop:
          "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/Locations/assesment/Assesment.webp",
        mobile:
          "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/Locations/assesment/LoAssesment.webp",
      },
      "edmonton-south": {
        desktop:
          "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/Locations/assesment/Assesment.webp",
        mobile:
          "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/Locations/assesment/LoAssesment.webp",
      },
      "edmonton-downtown": {
        desktop:
          "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/Locations/assesment/assessment_downtown.webp",
        mobile:
          "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/Locations/assesment/assessment_downtown_mob.webp",
      },
      "edmonton-north": {
        desktop:
          "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/Locations/assesment/Assesment.webp",
        mobile:
          "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/Locations/assesment/LoAssesment.webp",
      },
    };

    return backgroundImages[locationKey] || backgroundImages["calgary-seton"];
  };

  const backgroundImages = getBackgroundImages(locationKey);

  return (
    <div className="relative w-full h-[600px] md:h-[678px]">
      <img
        src={backgroundImages.desktop}
        alt="Background Image"
        className="absolute inset-0 bg-accent bg-top bg-no-repeat hidden md:block"
      />
      <img
        src={backgroundImages.mobile}
        alt="Background Image"
        className="absolute w-full h-full inset-0 bg-cover bg-center bg-no-repeat block md:hidden"
      />

      {/* <div className="absolute inset-0 bg-black/40"></div> */}
      <div className="w-full max-w-[1280px] md:px-8 px-4 pb-[40px] md:pb-[120px] mx-auto z-10 h-full items-end flex flex-row relative">
        <div className="bg-[#ffffff] rounded-[10px] shadow-lg p-8 w-full md:max-w-[346px]">
          <h3 className="text-[#000] uppercase leading-[26px] !font-[700]">
            Start Strong with a Free Personalised Assessment
          </h3>
          <p className="text-[#000] description mt-4 mb-6 leading-[26px]">
            All new Evolve members get a one-on-one assessment with a certified
            trainer after signing up.
          </p>
          <a
            href={tourUrl}
            className="text-[#4AB04A] font-bold leading-[26px] underline underline-offset-4 decoration-solid decoration-auto [text-underline-position:from-font]"
          >
            Book a Free Tour
          </a>
        </div>
      </div>
    </div>
  );
}

export default LocationsPersonalizedAssessment;
