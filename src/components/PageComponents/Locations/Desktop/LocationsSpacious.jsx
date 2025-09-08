import React, { useCallback, useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import {
  professionalMembershipPremiumAmenities,
  postPremiumAmenities,
  setonPremiumAmenities,
  brentwoodPremiumAmenities,
  royalOakPremiumAmenities,
  downtownPremiumAmenities,
} from "../../../../constants/professionalServicesImages.js";

const LocationsSpacious = () => {
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

  // Get location-specific amenities data
  const getLocationAmenities = (locationKey) => {
    const amenitiesMap = {
      "vancouver-post": postPremiumAmenities,
      "burnaby-brentwood": brentwoodPremiumAmenities,
      "calgary-seton": setonPremiumAmenities,
      "calgary-royal-oak": royalOakPremiumAmenities,
      "calgary-sunridge": setonPremiumAmenities, // Using seton as fallback
      "edmonton-south": downtownPremiumAmenities, // Using downtown as fallback
      "edmonton-downtown": downtownPremiumAmenities,
      "edmonton-north": downtownPremiumAmenities, // Using downtown as fallback
    };

    return amenitiesMap[locationKey] || professionalMembershipPremiumAmenities;
  };

  // Get the amenities data for the current location
  const currentLocationAmenities = getLocationAmenities(locationKey);

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

  const [prevDisabled, setPrevDisabled] = useState(true);
  const [nextDisabled, setNextDisabled] = useState(false);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      slidesToScroll: 1,
    },
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev();
      // Reset autoplay after manual navigation
      const autoplayPlugin = emblaApi.plugins().autoplay;
      if (autoplayPlugin) {
        autoplayPlugin.stop();
        autoplayPlugin.play();
      }
    }
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext();
      // Reset autoplay after manual navigation
      const autoplayPlugin = emblaApi.plugins().autoplay;
      if (autoplayPlugin) {
        autoplayPlugin.stop();
        autoplayPlugin.play();
      }
    }
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevDisabled(!emblaApi.canScrollPrev());
    setNextDisabled(!emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="py-12 ">
      <div className="max-w-[1280px] mx-auto md:px-8 px-4 flex flex-col items-start gap-8">
        <div className="flex items-start flex-col gap-4">
          <h2 className="text-[#000] uppercase ">
            Spacious and Modern Facilities
          </h2>
          <h4 className="md:mb-4 mb-2 !max-w-[874px]">
            Our gyms give you space to move, train, and recover without the
            crowd. Each location has more training space than a typical gym in
            Canada. Every area is designed with purpose to support your fitness
            and wellness goals.
          </h4>
          <Link to={tourUrl}>
            <button className="btnPrimary">BOOK A FREE TOUR</button>
          </Link>
        </div>

        <div className="relative w-full">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex md:gap-4 md:pl-1 ">
              {currentLocationAmenities.map((amenity, idx) => (
                <div
                  key={idx}
                  className="flex-[0_0_100%] md:flex-[0_0_32.5%] relative overflow-hidden"
                >
                  <img
                    src={amenity.image}
                    alt={amenity.title}
                    className="w-full md:w-[400px]  h-[224px] md:h-[257px] object-cover rounded-[8px] overflow-hidden "
                  />
                  <h3 className="flex items-center mt-6 text-[#000] leading-[24px] font-[500]">
                    {amenity.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          {currentLocationAmenities.length > 3 && (
            <>
              <div className="absolute -top-1/9 left-[70%]  md:-top-1/6 md:left-[92%] -translate-y-1/2  z-10">
                <button
                  onClick={scrollPrev}
                  disabled={prevDisabled}
                  className={`p-2 rounded-full border border-[#000000] text-[#000000] cursor-pointer hover:bg-[#000000] hover:text-[#fff] ${
                    prevDisabled
                      ? "opacity-30 cursor-not-allowed  hover:text-[#000000]"
                      : ""
                  }`}
                >
                  <ArrowLeft className="md:w-6 md:h-6 w-4 h-4" />
                </button>
              </div>
              <div className="absolute -top-1/9  md:-top-1/6  -translate-y-1/2 left-[83%] md:left-auto md:right-[0.5%] z-10">
                <button
                  onClick={scrollNext}
                  disabled={nextDisabled}
                  className={`p-2 rounded-full border border-[#000000] text-[#000000] cursor-pointer hover:bg-[#000000] hover:text-[#fff] ${
                    nextDisabled
                      ? "opacity-30 cursor-not-allowed  hover:text-[#000000]"
                      : ""
                  }`}
                >
                  <ArrowRight className="md:w-6 md:h-6  w-4 h-4" />
                </button>
              </div>
            </>
          )}
        </div>

        {/* <button className="btnPrimary">APPLY NOW</button> */}
      </div>
    </section>
  );
};

export default LocationsSpacious;
