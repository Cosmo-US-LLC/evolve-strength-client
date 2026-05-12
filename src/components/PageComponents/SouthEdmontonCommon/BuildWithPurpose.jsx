import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Link } from "react-router-dom";

import { southEdmontonCommonBookTourHref } from "@/constants/southEdmontonCommonTour";

const gymCards = [
  {
    count: "01",
    title: "Intentional Layout",
    description:
      "Every zone is crafted with a specific purpose in mind, ensuring functionality and efficiency.",
    bgImage: {
      desktop:
        "/assets/images/PersonalTraning/PersonalGymExperience/intentional_layout_desktop.webp",
      mobile:
        "/assets/images/PersonalTraning/PersonalGymExperience/intentional_layout_mobile.webp",
    },
  },
  {
    count: "02",
    title: "Premium Equipment",
    description:
      "Built to perform, these spaces are designed to do more than just occupy square footage. ",
    bgImage: {
      desktop:
        "/assets/images/PersonalTraning/PersonalGymExperience/premium_equipment_desktop.webp",
      mobile:
        "/assets/images/PersonalTraning/PersonalGymExperience/premium_equipment_mobile.webp",
    },
  },
  {
    count: "03",
    title: "Atmosphere",
    description:
      "Stay motivated in a vibrant, inspiring atmosphere with stunning aesthetics designed to elevate your experience.",
    bgImage: {
      desktop:
        "/assets/images/PersonalTraning/PersonalGymExperience/atmosphere_desktop.webp",
      mobile:
        "/assets/images/PersonalTraning/PersonalGymExperience/atmosphere_mobile.webp",
    },
  },
];

const BuildWithPurpose = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState(0);

  const activeIndex = hoveredIndex !== null ? hoveredIndex : carouselIndex;

  useEffect(() => {
    if (activeIndex !== previousIndex) {
      setPreviousIndex(activeIndex);
    }
  }, [activeIndex, previousIndex]);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      containScroll: "keepSnaps",
      loop: true,
      align: "center",
    },
    // [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

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

  useEffect(() => {
    if (!emblaApi) return;

    const onCarouselSelect = () => {
      setCarouselIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onCarouselSelect);
    onCarouselSelect();

    return () => {
      emblaApi.off("select", onCarouselSelect);
    };
  }, [emblaApi]);

  useEffect(() => {
    gymCards.forEach((card) => {
      const desktopImg = new Image();
      desktopImg.src = card.bgImage.desktop;

      const mobileImg = new Image();
      mobileImg.src = card.bgImage.mobile;
    });
  }, []);

  return (
    <div className="relative w-full overflow-hidden md:mb-12">
      <div className="hidden md:block">
        <div
          className="absolute inset-0 bg-cover bg-center    "
          style={{
            backgroundImage: `url(${gymCards[previousIndex].bgImage.desktop})`,
          }}
        />

        <div
          className="absolute inset-0 bg-cover bg-center     "
          style={{
            backgroundImage: `url(${gymCards[activeIndex].bgImage.desktop})`,
          }}
        />
        <div className="absolute inset-0 bg-black/20 pointer-events-none" />
      </div>

      <div className="md:hidden">
        <div
          className="absolute inset-0 bg-cover bg-center  "
          style={{
            backgroundImage: `url(${gymCards[previousIndex].bgImage.mobile})`,
          }}
        />

        <div
          className="absolute inset-0 bg-cover bg-center  "
          style={{
            backgroundImage: `url(${gymCards[carouselIndex].bgImage.mobile})`,
          }}
        />
        <div className="absolute inset-0 bg-black/20 pointer-events-none  " />
      </div>

      <div className="relative z-20 max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="absolute top-[30px] md:top-[100px] flex flex-col gap-4">
          <h2 className="text-[#FFFFFF] w-full md:max-w-[637px] uppercase leading-[32px] md:leading-[42px] text-left">
            Built with purpose. Designed for performance.
          </h2>
          <h4 className="text-[#FFFFFF] leading-[24px] md:leading-[26px] max-w-[638px] ">
            Everything about this location was built with intention. The layout,
            the atmosphere, the equipment. There's no filler here.
          </h4>

          <Link
            to={southEdmontonCommonBookTourHref()}
            className="relative w-fit"
          >
            <button className="btnPrimary uppercase" type="button">
              Book a Free Tour
            </button>
          </Link>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex relative z-10 max-w-[1280px] mx-auto flex-row justify-end items-end min-h-[700px] px-8">
        {gymCards.map((card, index) => {
          const isActive =
            hoveredIndex === index || (hoveredIndex === null && index === 0);

          return (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="flex-1 p-8 rounded-t-[5px] flex flex-col gap-8 cursor-pointer relative group overflow-hidden transition-transform duration-150 ease-out hover:scale-[1.02]"
            >
              {/* White Overlay - Smooth slide up animation */}
              <div
                className={`absolute inset-0 z-0 bg-[#ffffff] transition-transform duration-150 ease-out ${
                  isActive ? "translate-y-0" : "translate-y-full"
                }`}
              />

              {/* Content Container */}
              <div className="relative z-10 w-[346px] h-[120px] flex flex-col justify-center">
                {/* <p
                  className={`description leading-[25px] !font-[600] transition-all duration-150 ease-out ${
                    isActive
                      ? "text-[#000] translate-y-0"
                      : "text-[#ffffff] translate-y-1"
                  }`}
                >
                  {card.count}
                </p> */}
                <h3
                  className={`uppercase !text-[32px] leading-[30px] !font-[600] mb-4 transition-all duration-150 ease-out ${
                    isActive
                      ? "text-[#1C1C1C] translate-y-0"
                      : "text-[#ffffff] translate-y-1"
                  }`}
                >
                  {card.title}
                </h3>
                <div
                  className={`text-[#1C1C1C] text-[16px] h-[80px] font-[kanit] leading-[24px] !font-[300] transition-all duration-150 ease-out ${
                    isActive
                      ? "text-[#000] translate-y-0"
                      : "text-[#ffffff] translate-y-1"
                  }`}
                >
                  {card.description}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Mobile Carousel */}
      <div className="md:hidden relative z-10 max-w-[1280px] mx-auto flex flex-col justify-end items-end px-4 h-[560px]">
        <div className="w-full" ref={emblaRef}>
          <div className="flex">
            {gymCards.map((card, index) => {
              const isSelected = selectedIndex === index;
              // const isActive =
              //   hoveredIndex === index ||
              //   (hoveredIndex === null && index === 0);
              return (
                <div key={index} className="flex-[0_0_70%] min-w-0 px-3 py-4">
                  <div
                    className={`w-full min-h-[180px] px-3 rounded-[5px] flex flex-col justify-center gap-4 cursor-pointer relative group overflow-hidden transition-all duration-150 transform ${
                      isSelected ? "scale-110" : "scale-95"
                    }`}
                  >
                    <div className="absolute inset-0 z-0 bg-[#ffffff] h-[100%] flex flex-col items-center justify-center" />

                    <div className="relative z-10  transition-colors duration-150 w-full text-center text-[#1C1C1C]">
                      {/* <p className="description leading-[20px] !font-[600] transition-all duration-150 text-[#000]">
                        {card.count}
                      </p> */}
                      <h3 className="uppercase !text-[24px] font-Vazirmatn leading-[26px] !font-[600] transition-all duration-150 text-[#1C1C1C]">
                        {card.title}
                      </h3>
                      <div
                        className={`text-[#1C1C1C] text-[16px] mt-2 !font-[kanit] leading-[20px] !font-[300] transition-all duration-150 ease-out 
                        `}
                      >
                        {card.description}
                      </div>
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

export default BuildWithPurpose;
