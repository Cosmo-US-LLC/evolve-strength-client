import React, { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";

const gymCards = [
  {
    title: "Premium Equipment",
    description:
      "Train on top-of-the-line machines and free weights, all expertly maintained for smarter lifts and faster results.",
    bgImage:
      "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/gym/premium_eq.webp",
  },
  {
    title: "Room to Move",
    description:
      "Spacious, open training zones give you freedom to focus, move freely, and challenge your limits.",
    bgImage:
      "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/gym/room_to_move.webp",
  },
  {
    title: "Atmosphere",
    description:
      "Stay motivated in a vibrant, inspiring space designed to energize and elevate every workout experience.",
    bgImage:
      "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/gym/atmosphere_pumpit.webp",
  },
];

const WhatsMakeEvolveDiff = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const defaultIndex = 0;
  const activeIndex = hoveredIndex !== null ? hoveredIndex : defaultIndex;

  // Mobile state - simplified like PersonalGymExperience
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    loop: false,
    skipSnaps: false,
    dragFree: false,
  });

  // Preload images
  useEffect(() => {
    gymCards.forEach((card) => {
      const img = new Image();
      img.src = card.bgImage;
    });
  }, []);

  // Handle mobile carousel selection with crossfade
  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      const idx = emblaApi.selectedScrollSnap();
      if (idx !== selectedIndex) {
        setPreviousIndex(selectedIndex);
        setSelectedIndex(idx);
      }
    };

    emblaApi.on("select", onSelect);

    // Set initial index
    const initialIdx = emblaApi.selectedScrollSnap();
    setSelectedIndex(initialIdx);

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, selectedIndex]);

  return (
    <div>
      <div className="space-y-[20px] py-12 text-center relative z-[9] max-w-[1280px] mx-auto flex flex-col justify-center items-center  h-full  px-4 md:px-8">
        <h2 className="!text-[#000] uppercase">What Makes Evolve Different</h2>
        <h4 className="!text-[#000] leading-[25px] max-w-[593px] !font-[400] md:!font-[300]">
          Evolve excels with its user-focused design and advanced technology,
          enhancing productivity and fostering teamwork in dynamic settings.
        </h4>
      </div>
      <div className="relative w-full overflow-hidden max-md:hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center transition-all duration-150 ease-in-out"
            style={{
              backgroundImage: `url(${gymCards[activeIndex].bgImage})`,
            }}
          />
          <div className="absolute inset-0 bg-black/20 pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-[1280px] mx-auto flex flex-row justify-start items-start min-h-[700px] px-8 pt-16">
          <div className="flex flex-col gap-4 w-[380px]">
            {gymCards.map((card, index) => {
              const isActive =
                hoveredIndex === index ||
                (hoveredIndex === null && index === 0);

              return (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="p-6 rounded-r-[8px] flex flex-col gap-4 cursor-pointer relative group overflow-hidden transition-all duration-75 transform hover:scale-[1.02] hover:shadow-lg"
                >
                  <div
                    className={`absolute inset-0 z-0 bg-[#ffffff] flex flex-col items-start justify-center transition-transform duration-75 ease-in-out ${
                      isActive ? "translate-x-0" : "-translate-x-full"
                    }`}
                  />

                  <div
                    className={`relative z-10 transition-colors duration-75 ${
                      isActive ? "text-[#000]" : "text-[#ffffff]"
                    }`}
                  >
                    <h2
                      className={`uppercase mb-3 !text-[30px] font-semibold transition-all duration-75 group-hover:translate-y-[-2px] group-hover:opacity-90 ${
                        isActive ? "text-[#000]" : "text-[#ffffff]"
                      }`}
                    >
                      {card.title}
                    </h2>
                    <h4
                      className={`leading-[24px] text-sm transition-all duration-75 group-hover:translate-y-[-1px] group-hover:opacity-90 ${
                        isActive ? "text-[#000]" : "text-[#ffffff]"
                      }`}
                    >
                      {card.description}
                    </h4>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile Carousel - Simplified like PersonalGymExperience */}
      <div className="md:hidden">
        <div className="relative w-full overflow-hidden min-h-[512px] flex flex-col">
          <div
            className="absolute inset-0 z-0 bg-cover bg-center transition-opacity duration-150 ease-in-out"
            style={{
              backgroundImage: `url(${gymCards[previousIndex].bgImage})`,
            }}
          />

          <div
            className="absolute inset-0 z-0 bg-cover bg-center transition-opacity duration-150 ease-in-out"
            style={{
              backgroundImage: `url(${gymCards[selectedIndex].bgImage})`,
            }}
          />

          <div className="absolute inset-0 bg-black/20 pointer-events-none z-10" />

          <div className="flex-1" />

          <div className="relative z-20 pb-2 pl-4">
            <div className="w-full" ref={emblaRef}>
              <div className="flex">
                {gymCards.map((card, index) => {
                  const isSelected = selectedIndex === index;
                  return (
                    <div
                      key={index}
                      className="flex-[0_0_75vw] min-w-0 px-3 py-4"
                    >
                      <div
                        className={`w-full min-h-[180px] px-4 py-4 rounded-[6px] flex flex-col justify-center gap-4 cursor-pointer relative group overflow-hidden transition-all duration-75 transform 
                          ${isSelected ? "scale-105" : "scale-95"}
                        `}
                      >
                        <div className="absolute inset-0 z-0 bg-[#ffffff] rounded-[10px]" />

                        <div className="relative z-10 transition-colors duration-75 w-full">
                          <h2 className="uppercase mb-3 text-[#1C1C1C] font-semibold">
                            {card.title}
                          </h2>
                          <p className="description leading-[24px] md:leading-[26px] text-[16px] text-[#000]">
                            {card.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsMakeEvolveDiff;
