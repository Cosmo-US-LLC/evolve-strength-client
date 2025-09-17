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
  EdmontonDowntownPremiumAmenities,
  calgarysetonPremiumAmenities,
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
      "calgary-seton": calgarysetonPremiumAmenities,
      "calgary-royal-oak": royalOakPremiumAmenities,
      "calgary-sunridge": setonPremiumAmenities, // Using seton as fallback
      "edmonton-south": downtownPremiumAmenities, // Using downtown as fallback
      "edmonton-downtown": EdmontonDowntownPremiumAmenities,
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
        "/book-a-tour/?location=40327",
      "burnaby-brentwood":
        "/book-a-tour/?location=40248",
      "calgary-seton":
        "/book-a-tour/?location=40097",
      "calgary-royal-oak":
        "/book-a-tour/?location=40142",
      "calgary-sunridge":
        "/book-a-tour/?location=06973",
      "edmonton-south":
        "/book-a-tour/?location=06962",
      "edmonton-downtown":
        "/book-a-tour/?location=06967",
      "edmonton-north":
        "/book-a-tour/?location=06964",
    };

    return tourUrls[locationKey] || "/book-a-tour/";
  };

  const tourUrl = getTourUrl(locationKey);

  const [prevDisabled, setPrevDisabled] = useState(true);
  const [nextDisabled, setNextDisabled] = useState(false);




 const [isMobile, setIsMobile] = useState(
  typeof window !== "undefined" ? window.innerWidth <= 768 : false
);



useEffect(() => {
  const onResize = () => setIsMobile(window.innerWidth <= 768);
  window.addEventListener("resize", onResize);
  return () => window.removeEventListener("resize", onResize);
}, []);

const canScrollMobile = isMobile && currentLocationAmenities.length > 0;
const loopEnabledMobile = isMobile && currentLocationAmenities.length > 0;

const autoplayPluginMobile = loopEnabledMobile
  ? [Autoplay({ delay: 3000, stopOnInteraction: true })]
  : [];

const [emblaRefMobile, emblaApiMobile] = useEmblaCarousel(
  {
    loop: loopEnabledMobile,
    slidesToScroll: canScrollMobile ? 1 : 1,
    align: "start",
    containScroll: false,
    draggable: canScrollMobile, 
  },
  autoplayPluginMobile
);

let slidesMobile = [...currentLocationAmenities];
if (loopEnabledMobile && currentLocationAmenities.length <= 4) {
  slidesMobile = [...currentLocationAmenities, ...currentLocationAmenities];
}

const canScrollDesktop = !isMobile && currentLocationAmenities.length > 2;
const loopEnabledDesktop = !isMobile && currentLocationAmenities.length > 2;

const autoplayPluginDesktop = loopEnabledDesktop
  ? [Autoplay({ delay: 3000, stopOnInteraction: true })]
  : [];

const [emblaRefDesktop, emblaApiDesktop] = useEmblaCarousel(
  {
    loop: loopEnabledDesktop,
    slidesToScroll: canScrollDesktop ? 1 : 0,
    align: "start",
    containScroll: false,
    draggable: canScrollDesktop,
  },
  autoplayPluginDesktop
);

let slidesDesktop = [...currentLocationAmenities];
if (loopEnabledDesktop && currentLocationAmenities.length <= 4) {
  slidesDesktop = [...currentLocationAmenities, ...currentLocationAmenities];
}


 const emblaRef = isMobile ? emblaRefMobile : emblaRefDesktop;
const emblaApi = isMobile ? emblaApiMobile : emblaApiDesktop;
const slides = isMobile ? slidesMobile : slidesDesktop;
const loopEnabled = isMobile ? loopEnabledMobile : loopEnabledDesktop;
 

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev();
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
      const autoplayPlugin = emblaApi.plugins().autoplay;
      if (autoplayPlugin) {
        autoplayPlugin.stop();
        autoplayPlugin.play();
      }
    }
  }, [emblaApi]);

  // const onSelect = useCallback(() => {
  //   if (!emblaApi) return;
  //   setPrevDisabled(!emblaApi.canScrollPrev());
  //   setNextDisabled(!emblaApi.canScrollNext());
  // }, [emblaApi]);

  // useEffect(() => {
  //   if (!emblaApi) return;
  //   onSelect();
  //   emblaApi.on("select", onSelect);
  // }, [emblaApi, onSelect]);

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
          <a href={tourUrl}>
            <button className="btnPrimary">BOOK A FREE TOUR</button>
          </a>
        </div>

        <div className="relative w-full">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex md:gap-3 md:pl-1 ">
              {slides.map((amenity, idx) => (
                <div
                  key={idx}
                  className="pl-2 flex-[0_0_100%] md:flex-[0_0_32.8%] relative overflow-hidden"
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

          {/* <>
          <div className="absolute -top-1/7 -translate-y-1/2 left-[92%] z-10 max-md:hidden">
            <button
              onClick={scrollPrev}
              className="bg-[#ffffff] p-2 rounded-full border border-[#000000] text-[#000000] cursor-pointer hover:bg-[#000000] hover:text-[#fff]"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
          </div>
          <div className="absolute -top-1/7 -translate-y-1/2 right-[0.5%] z-10 max-md:hidden">
            <button
              onClick={scrollNext}
              className="bg-[#ffffff] p-2 rounded-full border border-[#000000] text-[#000000] cursor-pointer hover:bg-[#000000] hover:text-[#fff]"
            >
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </> */}
          {loopEnabled && (
            <>
              <div className="absolute -top-1/7 -translate-y-1/2 left-[92%] z-10 max-md:hidden">
                <button
                  onClick={scrollPrev}
                  className="bg-[#ffffff] p-2 rounded-full border border-[#000000] text-[#000000] cursor-pointer hover:bg-[#000000] hover:text-[#fff]"
                >
                  <ArrowLeft className="w-6 h-6" />
                </button>
              </div>
              <div className="absolute -top-1/7 -translate-y-1/2 right-[0.5%] z-10 max-md:hidden">
                <button
                  onClick={scrollNext}
                  className="bg-[#ffffff] p-2 rounded-full border border-[#000000] text-[#000000] cursor-pointer hover:bg-[#000000] hover:text-[#fff]"
                >
                  <ArrowRight className="w-6 h-6" />
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
