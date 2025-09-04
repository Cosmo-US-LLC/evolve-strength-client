import React, { useCallback, useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ArrowLeft, ArrowRight } from "lucide-react";

const YourEvolveLocations = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
    },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const locations = [
    {
      name: "BRENTWOOD",
      mobileImage:
        "https://tor1.digitaloceanspaces.com/evolve-strength/assets/images/Locations/yourEvolveLocations/evolve_brentwood_mob.webp",
      desktopImage:
        "https://tor1.digitaloceanspaces.com/evolve-strength/assets/images/Locations/yourEvolveLocations/evolve_brentwood.webp",
      city: "burnaby",
      province: "British Columbia",
    },
    // {
    //   name: "SUNRIDGE",
    //   mobileImage:
    //     "https://tor1.digitaloceanspaces.com/evolve-strength/assets/images/Locations/yourEvolveLocations/sunridge_mob.webp",
    //   desktopImage:
    //     "https://tor1.digitaloceanspaces.com/evolve-strength/assets/images/Locations/yourEvolveLocations/sunridge.webp",
    //   city: "Calgary",
    //   province: "Alberta",
    // },
    {
      name: "ROYAL OAK",
      mobileImage:
        "https://tor1.digitaloceanspaces.com/evolve-strength/assets/images/Locations/yourEvolveLocations/royal_oak_mob.webp",
      desktopImage:
        "https://tor1.digitaloceanspaces.com/evolve-strength/assets/images/Locations/yourEvolveLocations/royal_oak.webp",
      city: "Calgary",
      province: "Alberta",
    },
    {
      name: "NORTH",
      mobileImage:
        "https://tor1.digitaloceanspaces.com/evolve-strength/assets/images/Locations/yourEvolveLocations/north_mob.webp",
      desktopImage:
        "https://tor1.digitaloceanspaces.com/evolve-strength/assets/images/Locations/yourEvolveLocations/north.webp",
      city: "Edmonton",
      province: "",
    },
    {
      name: "SETON",
      mobileImage:
        "https://tor1.digitaloceanspaces.com/evolve-strength/assets/images/Locations/yourEvolveLocations/seton_mob.webp",
      desktopImage:
        "https://tor1.digitaloceanspaces.com/evolve-strength/assets/images/Locations/yourEvolveLocations/seton.webp",
      city: "Calgary",
      province: "Alberta",
    },
    {
      name: "VANCOUVER POST",
      mobileImage:
        "https://tor1.digitaloceanspaces.com/evolve-strength/assets/images/Locations/yourEvolveLocations/post_mob.webp",
      desktopImage:
        "https://tor1.digitaloceanspaces.com/evolve-strength/assets/images/Locations/yourEvolveLocations/post.webp",
      city: "Vancouver",
      province: "British Columbia",
    },

    {
      name: "SOUTH",
      mobileImage:
        "https://tor1.digitaloceanspaces.com/evolve-strength/assets/images/Locations/yourEvolveLocations/south_common_mob.webp",
      desktopImage:
        "https://tor1.digitaloceanspaces.com/evolve-strength/assets/images/Locations/yourEvolveLocations/south_common.webp",
      city: "Edmonton",
      province: "Alberta",
    },
    {
      name: "DOWNTOWN",
      mobileImage:
        "https://tor1.digitaloceanspaces.com/evolve-strength/assets/images/Locations/yourEvolveLocations/downtown_mob.webp",
      desktopImage:
        "https://tor1.digitaloceanspaces.com/evolve-strength/assets/images/Locations/yourEvolveLocations/downtown.webp",
      city: "Edmonton",
      province: "Alberta",
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="max-w-[720px] mx-auto uppercase text-[#000] mb-4">
            ACCESS ALL EVOLVE LOCATIONS WITH YOUR MEMBERSHIP
          </h2>
          <h4 className="text-[#000]">Spacious. Affordable. Unmatched.</h4>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {locations.map((location, idx) => (
                <div
                  key={idx}
                  className="flex-[0_0_100%] md:flex-[0_0_33.33%] px-2"
                >
                  <div className="relative rounded-lg overflow-hidden group">
                    <img
                      src={
                        isMobile ? location.mobileImage : location.desktopImage
                      }
                      alt={location.name}
                      className="w-full h-[200px] object-cover"
                      onError={(e) => {
                        e.target.src =
                          "https://via.placeholder.com/400x256/4AB04A/FFFFFF?text=EVOLVE+GYM";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-4 text-white w-full">
                      <h3 className="text-xl font-bold ">{location.name}</h3>
                      <div className="flex flex-row justify-between w-full">
                        {location.city && <h4 className="">{location.city}</h4>}
                        {location.province && (
                          <h4 className="">{location.province}</h4>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation Arrows - Below and Centered */}
        <div className="flex justify-center items-center gap-4 mt-6">
          <button
            onClick={scrollPrev}
            className="p-3 bg-[#fff] cursor-pointer rounded-full border border-black hover:bg-black hover:text-white transition-colors duration-200 "
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <button
            onClick={scrollNext}
            className="p-3 bg-[#fff] cursor-pointer rounded-full border border-black hover:bg-black hover:text-white transition-colors duration-200 "
          >
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default YourEvolveLocations;
