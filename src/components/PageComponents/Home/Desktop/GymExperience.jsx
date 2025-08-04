import React, { useState, useEffect, useRef } from "react";
import fitness from "/src/assets/images/home/gymEep/fitness.webp";
import wellness from "/src/assets/images/home/gymEep/wellness.webp";
import atmosphere from "/src/assets/images/home/gymEep/atmosphere.webp";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const gymCards = [
  {
    title: "Fitness",
    description:
      "Achieve your fitness goals with premium strength and cardio equipment, designed for every workout style.",
    bgImage: fitness,
  },
  {
    title: "Wellness",
    description:
      "Recover and rejuvenate with steam rooms, saunas, physiotherapy, and massage therapy.",
    bgImage: wellness,
  },
  {
    title: "Atmosphere",
    description:
      "Stay motivated in a vibrant, inspiring atmosphere with stunning aesthetics designed to elevate your experience.",
    bgImage: atmosphere,
  },
];

const GymExperience = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const defaultIndex = 0;
  const activeIndex = hoveredIndex !== null ? hoveredIndex : defaultIndex;

  // Simplified mobile state
  const [mobileSelectedIndex, setMobileSelectedIndex] = useState(0);
  const mobileCarouselApi = useRef(null);

  useEffect(() => {
    gymCards.forEach((card) => {
      const img = new Image();
      img.src = card.bgImage;
    });
  }, []);

  // Simplified carousel API handling
  useEffect(() => {
    if (!mobileCarouselApi.current) return;

    const onSelect = () => {
      const idx = mobileCarouselApi.current.selectedScrollSnap();
      setMobileSelectedIndex(idx);
    };

    mobileCarouselApi.current.on("select", onSelect);

    // Set initial index
    const initialIdx = mobileCarouselApi.current.selectedScrollSnap();
    setMobileSelectedIndex(initialIdx);

    return () => {
      mobileCarouselApi.current?.off("select", onSelect);
    };
  }, [mobileCarouselApi.current]);

  return (
    <div>
      <div className="relative w-full overflow-hidden mb-12 max-md:hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div
            key={activeIndex}
            className="absolute inset-0 bg-cover bg-center transition-all  animate-fade will-change-transform will-change-opacity"
            style={{
              backgroundImage: `url(${gymCards[activeIndex].bgImage})`,
            }}
          />
          <div className="absolute inset-0 bg-black/20 pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-[1280px] mx-auto flex flex-row justify-end items-end min-h-[700px] px-8 ">
          {gymCards.map((card, index) => {
            const isActive =
              hoveredIndex === index || (hoveredIndex === null && index === 0);

            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="flex-1 p-8 rounded-t-[5px] flex flex-col gap-8 cursor-pointer relative group overflow-hidden transition-all duration-200 transform hover:scale-[1.03] hover:shadow-2xl"
              >
                <div
                  className={`absolute inset-0 z-0 bg-[#ffffff] flex flex-col items-center justify-center transition-transform duration-200 ease-in-out ${
                    isActive ? "translate-y-0" : "translate-y-full"
                  }`}
                />

                <div
                  className={`relative z-10 transition-colors duration-500 w-[246px] ${
                    isActive ? "text-[#1C1C1C]" : "text-[#ffffff]"
                  }`}
                >
                  <h2
                    className={`uppercase mb-4 transition-all duration-200 group-hover:translate-y-[-4px] group-hover:opacity-90 ${
                      isActive ? "text-[#1C1C1C]" : "text-[#ffffff]"
                    }`}
                  >
                    {card.title}
                  </h2>
                  <p
                    className={`description leading-[26px] text-[16px] transition-all duration-200 group-hover:translate-y-[-2px] group-hover:opacity-90 ${
                      isActive ? "text-[#000]" : "text-[#ffffff]"
                    }`}
                  >
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Simplified Mobile Carousel */}
      <div className="md:hidden">
        <div className="relative w-full overflow-hidden min-h-[512px] flex flex-col">
          {/* Background Image with Smooth Transition */}
          <div
            className="absolute inset-0 z-0 bg-cover bg-center transition-all duration-700 ease-in-out"
            style={{
              backgroundImage: `url(${gymCards[mobileSelectedIndex].bgImage})`,
            }}
          />
          <div className="absolute inset-0 bg-black/20 pointer-events-none z-10" />

          {/* Spacer to push carousel to bottom */}
          <div className="flex-1" />

          {/* Carousel at bottom */}
          <div className="relative z-20 pb-4 pl-4">
            <Carousel
              opts={{
                align: "center",
                loop: false,
                skipSnaps: false,
                dragFree: false,
              }}
              className="w-full"
              setApi={(api) => (mobileCarouselApi.current = api)}
            >
              <CarouselContent className="">
                {gymCards.map((card, index) => {
                  const isActive = mobileSelectedIndex === index;
                  return (
                    <CarouselItem
                      key={index}
                      className="flex-shrink-0 w-[75vw] max-w-[310px] rounded-[6px] p-6 ml-4 last:ml-0 mr-4 last:mr-0 relative cursor-pointer "
                      style={{
                        minWidth: "75vw",
                      }}
                    >
                      {/* Fixed White Overlay - Always visible */}
                      <div className="absolute inset-0 z-0 bg-[#ffffff] rounded-[10px]" />

                      {/* Scrollable Content Container */}
                      <div className="relative z-10 overflow-y-auto max-h-[200px] scrollbar-hide">
                        <div
                          className={`flex flex-col gap-4 ${
                            isActive ? "text-[#1C1C1C]" : "text-[#ffffff]"
                          }`}
                        >
                          <h2
                            className={`uppercase ${
                              isActive ? "text-[#1C1C1C]" : "text-[#ffffff]"
                            }`}
                          >
                            {card.title}
                          </h2>
                          <p
                            className={`description leading-[26px] text-[16px] ${
                              isActive ? "text-[#000]" : "text-[#ffffff]"
                            }`}
                          >
                            {card.description}
                          </p>
                        </div>
                      </div>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>

              {/* Navigation Buttons - Commented out for mobile */}
              {/* <CarouselPrevious className="left-2 top-1/2 -translate-y-1/2 bg-white/90 border border-gray-300 hover:bg-white transition-colors duration-200" />
               <CarouselNext className="right-2 top-1/2 -translate-y-1/2 bg-white/90 border border-gray-300 hover:bg-white transition-colors duration-200" /> */}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GymExperience;
