import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import fitness from "../../../../assets/images/PersonalTraning/PersonalGymExperience/fitness.webp";
import wellness from "../../../../assets/images/PersonalTraning/PersonalGymExperience/bodyweight_training.webp";
import atmosphere from "../../../../assets/images/PersonalTraning/PersonalGymExperience/cardio.webp";
import turfWorkouts from "../../../../assets/images/PersonalTraning/PersonalGymExperience/turf_workouts.webp";
import olympicLifting from "../../../../assets/images/PersonalTraning/PersonalGymExperience/olympic_lifting.webp";
import yoga from "../../../../assets/images/PersonalTraning/PersonalGymExperience/yoga.webp";
import TopShadow from "../../../../assets/images/Locations/shadow/top-shadow.svg";
import BottomShadow from "../../../../assets/images/Locations/shadow/down-shadow.svg";

const gymCards = [
  {
    count: "01",
    title: (
      <p>
        Strength <br /> Training
      </p>
    ),
    description: "",
    bgImage: fitness,
  },
  {
    count: "02",
    title: "Calisthenics",
    description: "",
    bgImage: wellness,
  },
  {
    count: "03",
    title: "Cardio",
    description: "",
    bgImage: atmosphere,
  },
  {
    count: "04",
    title: (
      <p>
        Weight <br /> Loss
      </p>
    ),
    description: "",
    bgImage: turfWorkouts,
  },
  {
    count: "05",
    title: (
      <p>
        Olympic <br /> Lifting
      </p>
    ),
    description: "",
    bgImage: olympicLifting,
  },
  {
    count: "06",
    title: "Mobility",
    description: "",
    bgImage: yoga,
  },
];

const RightTrainer = () => {
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

    const onCarouselSelect = () => {
      setCarouselIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onCarouselSelect);
    onCarouselSelect(); // Set initial index

    return () => {
      emblaApi.off("select", onCarouselSelect);
    };
  }, [emblaApi]);

  useEffect(() => {
    gymCards.forEach((card) => {
      const img = new Image();
      img.src = card.bgImage;
    });
  }, []);

  return (
    <div className="relative w-full overflow-hidden ">
      <img
        src={TopShadow}
        alt="Shadow"
        className="absolute top-0 left-0 right-0 w-full h-auto z-20"
      />
      <img
        src={BottomShadow}
        alt="Shadow"
        className="absolute bottom-0 left-0 right-0 w-full h-auto z-10"
      />
      {/* Background Image - Desktop */}
      <div className="hidden md:block">
        <div
          key={activeIndex}
          className="absolute inset-0 bg-cover bg-center aspect-[16/9] transition-all animate-fade will-change-transform will-change-opacity"
          style={{
            backgroundImage: `url(${gymCards[activeIndex].bgImage})`,
          }}
        />
        <div className="absolute inset-0 bg-black/20 pointer-events-none" />
      </div>

      {/* Background Image - Mobile */}
      <div className="md:hidden">
        <div
          key={carouselIndex}
          className="absolute inset-0 bg-cover bg-center transition-all animate-fade will-change-transform will-change-opacity h-[600px]"
          style={{
            backgroundImage: `url(${gymCards[carouselIndex].bgImage})`,
          }}
        />
        <div className="absolute inset-0 bg-black/20 pointer-events-none h-[600px]" />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="absolute top-[30px] md:top-[100px] flex flex-col gap-4">
          <h2 className="text-[#FFFFFF] uppercase leading-[32px] md:leading-[42px] text-left">
            The Right Trainer. <br /> For You.
          </h2>
          <h4 className="text-[#fff] leading-[22px] md:leading-[26px] max-w-[600px] text-left text-sm md:text-base">
            We offer expert coaches across every major training discipline.
            Whether you're working toward performance goals, recovering from
            injury, or starting your fitness journey, we'll match you with the
            right trainer and approach, all under one roof at Evolve.
          </h4>
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
              className="flex-1 p-8 rounded-t-[5px] flex flex-col gap-8 cursor-pointer relative group overflow-hidden transition-all duration-200 transform hover:scale-[1.03] hover:shadow-2xl"
            >
              <div
                className={`absolute inset-0 z-0 bg-[#ffffff] h-[100%] flex flex-col items-center justify-center transition-transform duration-200 ease-in-out ${
                  isActive ? "translate-y-0" : "translate-y-full"
                }`}
              />

              <div
                className={`relative z-10 transition-colors duration-500 w-[246px] h-[100px] ${
                  isActive ? "text-[#1C1C1C]" : "text-[#ffffff]"
                }`}
              >
                <p
                  className={`description leading-[25px] !font-[600] transition-all duration-200 group-hover:translate-y-[-2px] group-hover:opacity-90 ${
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
      <div className="md:hidden relative z-10 max-w-[1280px] mx-auto flex flex-col justify-end items-end px-4 pt-[400px]">
        <div className="w-full" ref={emblaRef}>
          <div className="flex">
            {gymCards.map((card, index) => {
              const isSelected = selectedIndex === index;
              return (
                <div key={index} className="flex-[0_0_70%] min-w-0 px-3 py-4">
                  <div
                    className={`w-full min-h-[100px] px-3 rounded-[5px] flex flex-col justify-center gap-4 cursor-pointer relative group overflow-hidden transition-all duration-300 transform ${
                      isSelected ? "scale-110" : "scale-95"
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

export default RightTrainer;
