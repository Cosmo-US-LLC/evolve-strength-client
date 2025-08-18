import React, { useState, useEffect } from "react";
import fitness from "/src/assets/images/home/gymEep/fitness.webp";
import wellness from "/src/assets/images/home/gymEep/wellness.webp";
import atmosphere from "/src/assets/images/home/gymEep/atmosphere.webp";
import useEmblaCarousel from "embla-carousel-react";

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
      <div className="relative w-full overflow-hidden mb-12 max-md:hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center transition-all duration-150 ease-in-out"
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
                className="flex-1 p-8 rounded-t-[5px] flex flex-col gap-8 cursor-pointer relative group overflow-hidden transition-all duration-75 transform hover:scale-[1.03] hover:shadow-2xl"
              >
                <div
                  className={`absolute inset-0 z-0 bg-[#ffffff] flex flex-col items-center justify-center transition-transform duration-75 ease-in-out ${
                    isActive ? "translate-y-0" : "translate-y-full"
                  }`}
                />

                <div
                  className={`relative z-10 transition-colors duration-75 w-[246px] ${
                    isActive ? "text-[#1C1C1C]" : "text-[#ffffff]"
                  }`}
                >
                  <h2
                    className={`uppercase mb-4 transition-all duration-75 group-hover:translate-y-[-4px] group-hover:opacity-90 ${
                      isActive ? "text-[#1C1C1C]" : "text-[#ffffff]"
                    }`}
                  >
                    {card.title}
                  </h2>
                  <p
                    className={`description leading-[26px] text-[16px] transition-all duration-75 group-hover:translate-y-[-2px] group-hover:opacity-90 ${
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

export default GymExperience;
