import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Pause, Play } from "lucide-react";
import carouselImage1 from "../../../assets/images/presale/e2e7198edb7d881efbd8aa3e383efc0cc4274c85.png";
import carouselImage2 from "../../../assets/images/presale/183bdc2f6025bf18a2de9d583073c29d25291a11.png";
import carouselImage3 from "../../../assets/images/presale/03c7b307a30385f7d13f6375f222b7a6db5020cd.png";
import carouselImage4 from "../../../assets/images/presale/3b74ee45f63702b535ac1910da3c5854c353a316.png";
import carouselImage5 from "../../../assets/images/presale/aab8951982bd80573fbb781587b0065af327c379.png";

const gymSlides = [
  {
    image: carouselImage1,
    alt: "Cardio area with windows and machines",
  },
  {
    image: carouselImage2,
    alt: "Strength area with benches and free weights",
  },
  {
    image: carouselImage3,
    alt: "Indoor turf lane at Evolve Strength",
  },
  {
    image: carouselImage4,
    alt: "Open training floor with racks and equipment",
  },
  {
    image: carouselImage5,
    alt: "Wide gym floor with strength equipment",
  },
];

const AUTOPLAY_DELAY = 4000;
const loopSlides = [...gymSlides, gymSlides[0]];
const SWIPE_THRESHOLD = 50;

const GymZones = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isTransitionEnabled, setIsTransitionEnabled] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [dragStartX, setDragStartX] = useState(null);
  const [dragCurrentX, setDragCurrentX] = useState(null);

  useEffect(() => {
    if (isPaused) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setActiveSlide((current) => current + 1);
    }, AUTOPLAY_DELAY);

    return () => window.clearInterval(intervalId);
  }, [isPaused]);

  const visibleSlideIndex =
    activeSlide === gymSlides.length ? 0 : activeSlide;

  const goToNextSlide = () => {
    setActiveSlide((current) => current + 1);
  };

  const goToPrevSlide = () => {
    setIsTransitionEnabled(false);
    setActiveSlide((current) => {
      if (current === 0) {
        return gymSlides.length - 1;
      }
      return current - 1;
    });

    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        setIsTransitionEnabled(true);
      });
    });
  };

  const handleTransitionEnd = () => {
    if (activeSlide !== gymSlides.length) {
      return;
    }

    setIsTransitionEnabled(false);
    setActiveSlide(0);

    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        setIsTransitionEnabled(true);
      });
    });
  };

  const handlePointerDown = (event) => {
    setDragStartX(event.clientX);
    setDragCurrentX(null);
  };

  const handlePointerMove = (event) => {
    if (dragStartX === null) {
      return;
    }

    setDragCurrentX(event.clientX);
  };

  const handlePointerUp = () => {
    if (dragStartX === null || dragCurrentX === null) {
      setDragStartX(null);
      setDragCurrentX(null);
      return;
    }

    const swipeDistance = dragStartX - dragCurrentX;

    if (swipeDistance > SWIPE_THRESHOLD) {
      goToNextSlide();
    } else if (swipeDistance < -SWIPE_THRESHOLD) {
      goToPrevSlide();
    }

    setDragStartX(null);
    setDragCurrentX(null);
  };

  return (
    <section className="bg-white px-4 py-12 md:px-6 md:py-20">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center">
        <div className="mx-auto flex max-w-[760px] flex-col items-center text-center">
          <h2 className="font-[kanit] text-[32px] font-[700] uppercase leading-[1] text-[#1f1f1f] md:text-[56px]">
            Your New Home Gym
          </h2>
          <p className="mt-4 max-w-[700px] font-[kanit] text-[16px] font-[300] leading-[24px] text-[#3d3d3d] md:text-[18px] md:leading-[28px]">
            30,000+ sq ft of premium strength, cardio, and recovery. Our biggest
            location yet. Explore what&apos;s inside, then lock in your founding
            member rate before we open.
          </p>
          <Link to="/founder-offer-payment" className="mt-6">
            <button className="btnPrimary flex items-center justify-center gap-2 !px-[20px] !py-[14px] font-[kanit] text-[14px] font-[600] uppercase leading-[1]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
                className="shrink-0"
              >
                <path
                  d="M6.83398 9.83309C6.83409 9.62432 6.8902 9.41942 6.99648 9.23973C7.10275 9.06005 7.2553 8.91217 7.43819 8.81153C7.62109 8.71088 7.82764 8.66116 8.03631 8.66754C8.24497 8.67392 8.4481 8.73617 8.6245 8.8478C8.80091 8.95943 8.94413 9.11635 9.03923 9.30219C9.13433 9.48803 9.17782 9.69598 9.16517 9.90436C9.15252 10.1127 9.08419 10.3139 8.96731 10.4869C8.85042 10.6598 8.68927 10.7983 8.50065 10.8878V11.3331C8.50065 11.4657 8.44797 11.5929 8.3542 11.6866C8.26044 11.7804 8.13326 11.8331 8.00065 11.8331C7.86804 11.8331 7.74087 11.7804 7.6471 11.6866C7.55333 11.5929 7.50065 11.4657 7.50065 11.3331V10.8878C7.30109 10.7931 7.1325 10.6437 7.01448 10.457C6.89647 10.2703 6.83388 10.054 6.83398 9.83309Z"
                  fill="white"
                />
                <path
                  d="M4.83398 4.66667C4.83398 3.82681 5.16761 3.02136 5.76148 2.4275C6.35535 1.83363 7.1608 1.5 8.00065 1.5C8.8405 1.5 9.64596 1.83363 10.2398 2.4275C10.8337 3.02136 11.1673 3.82681 11.1673 4.66667V6.23733C11.394 6.276 11.6033 6.33733 11.8027 6.43933C12.2728 6.67897 12.655 7.06121 12.8947 7.53133C13.046 7.828 13.1087 8.148 13.1387 8.512C13.1673 8.866 13.1673 9.30333 13.1673 9.84533V10.8213C13.1673 11.3633 13.1673 11.8007 13.1387 12.1547C13.1087 12.5187 13.0453 12.8387 12.8947 13.1347C12.6551 13.6054 12.2726 13.9881 11.802 14.228C11.506 14.3787 11.186 14.4413 10.822 14.4713C10.468 14.5 10.0307 14.5 9.48865 14.5H6.51265C5.97065 14.5 5.53332 14.5 5.17932 14.4713C4.81532 14.4413 4.49532 14.378 4.19932 14.2273C3.7286 13.9878 3.34585 13.6052 3.10598 13.1347C2.95532 12.8387 2.89265 12.5187 2.86265 12.1547C2.83398 11.8007 2.83398 11.3633 2.83398 10.8213V9.84533C2.83398 9.30333 2.83398 8.866 2.86265 8.512C2.89265 8.148 2.95598 7.828 3.10665 7.532C3.34623 7.06128 3.72874 6.67854 4.19932 6.43867C4.39943 6.33975 4.61344 6.27186 4.83398 6.23733V4.66667ZM10.1673 4.66667C10.1673 4.09203 9.93904 3.54093 9.53272 3.1346C9.12639 2.72827 8.57529 2.5 8.00065 2.5C7.42602 2.5 6.87492 2.72827 6.46859 3.1346C6.06226 3.54093 5.83398 4.09203 5.83398 4.66667V6.16933C6.03976 6.16711 6.26598 6.16622 6.51265 6.16667H9.48865C9.73576 6.16622 9.96199 6.16711 10.1673 6.16933V4.66667ZM5.26065 7.192C4.95865 7.21667 4.78465 7.26333 4.65332 7.33C4.37083 7.47385 4.14117 7.70351 3.99732 7.986C3.93065 8.11733 3.88398 8.29133 3.85932 8.594C3.83465 8.902 3.83398 9.298 3.83398 9.86667V10.8C3.83398 11.368 3.83398 11.7647 3.85932 12.0733C3.88398 12.3753 3.93065 12.5493 3.99732 12.6813C4.14132 12.9633 4.37065 13.1927 4.65332 13.3367C4.78465 13.4033 4.95865 13.45 5.26132 13.4747C5.56932 13.4993 5.96598 13.5 6.53398 13.5H9.46732C10.036 13.5 10.432 13.5 10.7407 13.4747C11.0427 13.4493 11.2167 13.4033 11.3487 13.3367C11.6307 13.1927 11.86 12.9633 12.004 12.6813C12.0707 12.5493 12.1173 12.3753 12.142 12.0727C12.1667 11.7647 12.1673 11.368 12.1673 10.8V9.86667C12.1673 9.298 12.1673 8.902 12.142 8.59333C12.1167 8.29133 12.0707 8.11733 12.004 7.98533C11.8602 7.70319 11.6308 7.47379 11.3487 7.33C11.2167 7.26333 11.0427 7.21667 10.74 7.192C10.432 7.16733 10.0353 7.16667 9.46732 7.16667H6.53398C5.96598 7.16667 5.56932 7.16667 5.26065 7.192Z"
                  fill="white"
                />
              </svg>
              <span className="whitespace-nowrap">Lock My Rate Now</span>
            </button>
          </Link>
        </div>

        <div className="relative mt-10 w-full md:mt-12">
          <div
            className="overflow-hidden rounded-[20px] md:rounded-[24px] touch-pan-y"
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
            onPointerLeave={handlePointerUp}
          >
            <div
              className={`flex ${isTransitionEnabled ? "transition-transform duration-700 ease-out" : ""}`}
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
              onTransitionEnd={handleTransitionEnd}
            >
              {loopSlides.map((slide, index) => (
                <div key={index} className="w-full shrink-0">
                  <img
                    src={slide.image}
                    alt={slide.alt}
                    className="h-[340px] w-full object-cover md:h-[620px]"
                    draggable="false"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center rounded-full bg-black/65 p-2 md:bottom-6">
            <button
              type="button"
              onClick={() => setIsPaused((current) => !current)}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white/8 transition-colors duration-200 hover:bg-white/15"
              aria-label={isPaused ? "Play carousel" : "Pause carousel"}
            >
              {isPaused ? (
                <Play className="h-4 w-4 fill-current text-white" strokeWidth={2.4} />
              ) : (
                <Pause className="h-4 w-4 text-white" strokeWidth={2.4} />
              )}
            </button>

            <div className="ml-2 flex items-center gap-2 rounded-full px-3 py-2">
              {gymSlides.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActiveSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    visibleSlideIndex === index
                      ? "w-5 bg-white"
                      : "w-2 bg-white/35 hover:bg-white/60"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/*
        Previous GymZones version kept below exactly as a commented section per request.

        import React, { useState, useEffect } from "react";
        import {
          Accordion,
          AccordionContent,
          AccordionItem,
          AccordionTrigger,
        } from "@/components/ui/accordion";
        import { Plus, Minus } from "lucide-react";
        import strengthZoneBg1 from "../../../assets/images/presale/presale_common_desktop_1.webp";
        import strengthZoneBg2 from "../../../assets/images/presale/presale_common_desktop_2.webp";
        import strengthZoneBg3 from "../../../assets/images/presale/presale_common_desktop_3.webp";
        import strengthZoneBg4 from "../../../assets/images/presale/presale_common_desktop_4.webp";
        import strengthZoneBg1Mobile from "../../../assets/images/presale/presale_common_mobile_1.webp";
        import strengthZoneBg2Mobile from "../../../assets/images/presale/presale_common_mobile_2.webp";
        import strengthZoneBg3Mobile from "../../../assets/images/presale/presale_common_mobile_3.webp";
        import strengthZoneBg4Mobile from "../../../assets/images/presale/presale_common_mobile_4.webp";
        import icon1 from "../../../assets/images/presale/gym_presale_icon_3.svg";
        import icon2 from "../../../assets/images/presale/gym_presale_icon_2.svg";
        import icon3 from "../../../assets/images/presale/gym_presale_icon_1.svg";

        const gymZones = [
          {
            title: "Strength Zone",
            description:
              "Equip yourself with free weights, machines, and all the tools to build muscle and power.",
            bgImage: "https://evolve-strength.tor1.digitaloceanspaces.com/media/1770305496673-9d5e6fef-a478-41eb-9abb-8a34058b41b7.webp",
            icon: icon1,
            number: 1,
          },
          {
            title: "Cardio Zone",
            description: "Stay active and boost endurance with treadmills, bikes, rowers, and more.",
            bgImage: "https://evolve-strength.tor1.digitaloceanspaces.com/media/1770304391753-57bca423-49c1-40a6-9a25-9f3e25df5af8.webp",
            icon: icon2,
            number: 2,
          },
          {
            title: "Turf Area",
            description: "Train functionally with open space for agility, HIIT, and dynamic workouts.",
            bgImage: "https://evolve-strength.tor1.digitaloceanspaces.com/media/1770304404780-80b9f5db-508e-4f5a-9012-26fac72a4681.webp",
            icon: icon3,
            number: 3,
          },
        ];

        const gymZonesMobile = [
          {
            title: "Strength Zone",
            description:
              "Equip yourself with free weights, machines, and all the tools to build muscle and power.",
            bgImage: "https://evolve-strength.tor1.digitaloceanspaces.com/media/1770305496673-9d5e6fef-a478-41eb-9abb-8a34058b41b7.webp",
            icon: icon1,
            number: 1,
          },
          {
            title: "Cardio Zone",
            description: "Stay active and boost endurance with treadmills, bikes, rowers, and more.",
            bgImage: "https://evolve-strength.tor1.digitaloceanspaces.com/media/1770304391753-57bca423-49c1-40a6-9a25-9f3e25df5af8.webp",
            icon: icon2,
            number: 2,
          },
          {
            title: "Turf Area",
            description: "Train functionally with open space for agility, HIIT, and dynamic workouts.",
            bgImage: "https://evolve-strength.tor1.digitaloceanspaces.com/media/1770304404780-80b9f5db-508e-4f5a-9012-26fac72a4681.webp",
            icon: icon3,
            number: 3,
          },
        ];

        const defaultBg = "https://evolve-strength.tor1.digitaloceanspaces.com/media/1770304376936-6e908d28-3c87-41a7-97d8-c68d247a4e8f.webp";

        const GymZones = () => {
          const [hoveredIndex, setHoveredIndex] = useState(null);
          const [currentBg, setCurrentBg] = useState(defaultBg);
          const [imagesLoaded, setImagesLoaded] = useState(false);

          useEffect(() => {
            const imagesToPreload = [defaultBg, ...gymZones.map((zone) => zone.bgImage)];

            const loadImage = (src) => {
              return new Promise((resolve) => {
                const img = new Image();
                img.onload = () => resolve();
                img.onerror = () => resolve();
                img.src = src;
              });
            };

            Promise.all(imagesToPreload.map(loadImage)).then(() => {
              setImagesLoaded(true);
            });
          }, []);

          useEffect(() => {
            if (hoveredIndex !== null) {
              setCurrentBg(gymZones[hoveredIndex].bgImage);
            } else {
              setCurrentBg(defaultBg);
            }
          }, [hoveredIndex]);

          return (
            <div className="relative w-full overflow-hidden min-h-[400px] md:min-h-[800px]">
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                  src={currentBg}
                  alt="Gym zone background"
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out hidden md:block"
                  style={{ opacity: imagesLoaded ? 1 : 0 }}
                />
                <div
                  key={currentBg}
                  className="absolute inset-0 bg-cover bg-center transition-all duration-500 ease-in-out hidden md:block"
                  style={{
                    backgroundImage: `url("${currentBg}")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    opacity: imagesLoaded ? 1 : 0,
                  }}
                />
              </div>

              <div className="bg-black/60 hidden md:flex relative z-10 w-full flex-row justify-end items-end min-h-[800px]">
                {gymZones.map((zone, index) => {
                  const isActive = hoveredIndex === index;

                  return (
                    <div
                      key={index}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      className={`flex-1 p-6 md:p-8 flex flex-col justify-end cursor-pointer relative group overflow-hidden transition-all duration-200 min-h-[800px] ${zone?.number == 2 ? "border-x border-white/20" : ""}`}
                    >
                      <div className="relative z-10 flex max-h-[400px] flex-col justify-between h-full w-full">
                        <div className="flex flex-col justify-between gap-4 md:gap-6">
                          <div className="min-h-[220px]">
                            <div
                              className="flex justify-center p-[12px] mx-auto md:justify-center mb-2"
                              style={{
                                width: "55px",
                                height: "55px",
                                borderRadius: "27.5px",
                                background: "rgba(0, 0, 0, 0.45)",
                                backdropFilter: "blur(6.300000190734863px)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <img
                                src={zone.icon}
                                alt={`${zone.title} icon`}
                                className="w-10 h-10 transition-all duration-200 opacity-80"
                              />
                            </div>
                            <h3 className="text-center md:text-center !text-[20px] md:!text-[24px] font-[kanit] leading-[26px] md:leading-[24px] !font-[600] text-[#fff]">
                              {zone.title}
                            </h3>

                            {isActive && zone.description && (
                              <p className="leading-[24px] font-[kanit] font-[300] md:leading-[26px] text-[14px] md:text-[18px] text-center transition-all duration-200 group-hover:translate-y-[-2px] text-[#fff] mt-2">
                                {zone.description}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="md:hidden relative z-10 w-full">
                <Accordion type="single" collapsible defaultValue="zone-0" className="w-full ">
                  {gymZonesMobile.map((zone, index) => (
                    <AccordionItem
                      key={index}
                      value={`zone-${index}`}
                      className="group/zone border-b-0 border-0 overflow-hidden relative mt-4"
                    >
                      <div
                        className="absolute inset-0 z-0 pointer-events-none transition-[filter] duration-300 group-data-[state=open]/zone:blur-[4px]"
                        style={{
                          backgroundImage: `url("${zone.bgImage}")`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          transform: "scale(1.08)",
                        }}
                      />
                      <AccordionTrigger className="bg-black/50 relative z-10 min-h-[300px] w-full flex flex-col justify-center items-center gap-3 px-4 py-4 no-underline hover:no-underline focus:outline-none focus:ring-0 rounded-none! [&>svg]:hidden group">
                        <div className="flex items-center gap-3 w-full text-left">
                          <div
                            className="shrink-0 flex items-center justify-center w-[55px] h-[55px] rounded-full p-[12px]"
                            style={{
                              background: "rgba(0, 0, 0, 0.45)",
                              backdropFilter: "blur(6.3px)",
                            }}
                          >
                            <img src={zone.icon} alt="" className="w-10 h-10 object-contain opacity-80" />
                          </div>
                          <h3 className="flex-1 text-[#fff] !text-[20px] font-[kanit] leading-[22px] font-[500]">
                            {zone.title}
                          </h3>
                          <div
                            className="shrink-0 w-8 h-8 rounded-full bg-black/60 flex items-center justify-center border border-white/20 relative"
                            aria-hidden
                          >
                            <Plus className="w-4 h-4 text-white absolute inset-0 m-auto group-data-[state=open]:hidden" />
                            <Minus className="w-4 h-4 text-white absolute inset-0 m-auto group-data-[state=closed]:hidden" />
                          </div>
                        </div>
                        <AccordionContent className="relative z-10 px-2 pb-4 pt-0">
                          <p className="text-[#fff] text-[16px] leading-[24px] font-[kanit] font-[300]">
                            {zone.description}
                          </p>
                        </AccordionContent>
                      </AccordionTrigger>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          );
        };
      */}
    </section>
  );
};

export default GymZones;
