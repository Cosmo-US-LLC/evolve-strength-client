import React, { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useCallback } from "react";
import fitness from "../../../../assets/images/corporateMembership/OneMembershipFullAccess/slide6.webp";
import wellness from "../../../../assets/images/corporateMembership/OneMembershipFullAccess/slide7.webp";
import atmosphere from "../../../../assets/images/corporateMembership/OneMembershipFullAccess/slide8.webp";
import turfWorkouts from "../../../../assets/images/corporateMembership/OneMembershipFullAccess/slide9.webp";
import olympicLifting from "../../../../assets/images/corporateMembership/OneMembershipFullAccess/slide10.webp";

const gymCards = [
  {
    count: "",
    title: (
      <p>
        Strength <br /> training
      </p>
    ),
    description: "",
    bgImage: fitness,
  },
  {
    count: "",
    title: (
      <p>
        Cardio <br /> Equipment
      </p>
    ),
    description: "",
    bgImage: wellness,
  },
  {
    count: "",
    title: (
      <p>
        Lifting <br /> Platforms
      </p>
    ),
    description: "",
    bgImage: atmosphere,
  },
  {
    count: "",
    title: (
      <p>
        Premium <br /> Amenities
      </p>
    ),
    description: "",
    bgImage: turfWorkouts,
  },
  {
    count: "",
    title: (
      <p>
        Support from <br /> Trainers
      </p>
    ),
    description: "",
    bgImage: olympicLifting,
  },
];

const OneMembershipFullAccess = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [carouselIndex, setCarouselIndex] = useState(0);

  // Desktop: use hover state, Mobile: use carousel state
  const activeIndex = hoveredIndex !== null ? hoveredIndex : carouselIndex;

  // Mobile Carousel with Scale Effect
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      containScroll: "keepSnaps",
      loop: true,
      align: "center",
    },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  // Scale effect for mobile carousel
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => emblaApi.off("select", onSelect);
  }, [emblaApi, onSelect]);

  // Sync carousel index with background image
  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setCarouselIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect(); // Set initial index

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  useEffect(() => {
    gymCards.forEach((card) => {
      const img = new Image();
      img.src = card.bgImage;
    });
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      <div
        key={activeIndex}
        className="absolute inset-0 bg-cover bg-center transition-all animate-fade will-change-transform will-change-opacity"
        style={{
          backgroundImage: `url(${gymCards[activeIndex].bgImage})`,
        }}
      />
      {/* <div className="absolute inset-0 bg-black/20 pointer-events-none" /> */}

      <div className="relative z-10 max-w-[1280px] mx-auto flex flex-col gap-4 px-4 md:px-8 ">
        <h2 className="text-[#FFFFFF] uppercase leading-[42px] absolute top-[40px] md:top-[120px]">
          One membership. Full access.
        </h2>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex relative z-10 max-w-[1280px] mx-auto flex-row justify-end items-end min-h-[700px] px-8 ">
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
                className={`absolute inset-0 z-0 bg-[#ffffff] h-[100%] flex flex-col items-center justify-center transition-transform duration-200 ease-in-out ${
                  isActive ? "translate-y-0" : "translate-y-full"
                }`}
              />

              <div
                className={`relative z-10 transition-colors duration-500 w-[246px] h-[50px]   ${
                  isActive ? "text-[#1C1C1C]" : "text-[#ffffff]"
                }`}
              >
                <p
                  className={` description leading-[25px] !font-[600] transition-all duration-200 group-hover:translate-y-[-2px] group-hover:opacity-90 ${
                    isActive ? "text-[#000]" : "text-[#ffffff]"
                  }`}
                >
                  {card.count}
                </p>
                <h3
                  className={`uppercase !text-[24px] font-Vazirmatn leading-[30px] !font-[600] mb-4 transition-all duration-200 group-hover:translate-y-[-4px] group-hover:opacity-90 ${
                    isActive ? "text-[#1C1C1C]" : "text-[#ffffff]"
                  }`}
                >
                  {card.title}
                </h3>
              </div>
            </div>
          );
        })}
      </div>

      {/* Mobile Carousel */}
      <div className="md:hidden relative z-10 max-w-[1280px] mx-auto flex flex-col justify-end items-end min-h-[500px] px-4">
        <div className="w-full" ref={emblaRef}>
          <div className="flex">
            {gymCards.map((card, index) => {
              const isSelected = selectedIndex === index;
              return (
                <div key={index} className="flex-[0_0_60%] min-w-0 px-2 py-4">
                  <div
                    className={`w-full p-4 rounded-[5px] flex flex-col gap-4 cursor-pointer relative group overflow-hidden transition-all duration-300 transform ${
                      isSelected ? "scale-110" : "scale-85  "
                    }`}
                  >
                    <div className="absolute inset-0 z-0 bg-[#ffffff] h-[100%] flex flex-col items-center justify-center" />

                    <div className="relative z-10 transition-colors duration-500 w-full text-center text-[#1C1C1C]">
                      <p className="description leading-[20px] !font-[600] transition-all duration-200 text-[#000]">
                        {card.count}
                      </p>
                      <h3 className="uppercase !text-[20px] font-Vazirmatn leading-[26px] !font-[600] transition-all duration-200 text-[#1C1C1C]">
                        {card.title}
                      </h3>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneMembershipFullAccess;
