import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Link } from "react-router-dom";

// Desktop images
import fitness from "../../../../assets/images/PersonalTraning/PersonalGymExperience/fitness.webp";
import wellness from "../../../../assets/images/PersonalTraning/PersonalGymExperience/bodyweight_training.webp";
import atmosphere from "../../../../assets/images/PersonalTraning/PersonalGymExperience/cardio.webp";
import turfWorkouts from "../../../../assets/images/PersonalTraning/PersonalGymExperience/turf_workouts.webp";
import olympicLifting from "../../../../assets/images/PersonalTraning/PersonalGymExperience/olympic_lifting.webp";
import yoga from "../../../../assets/images/PersonalTraning/PersonalGymExperience/yoga.webp";

// Mobile images (currently using same images, replace with mobile-specific ones when available)
import fitnessMobile from "../../../../assets/images/PersonalTraning/PersonalGymExperience/fitnessMob.webp";
import wellnessMobile from "../../../../assets/images/PersonalTraning/PersonalGymExperience/bodyweight_trainingMob.webp";
import atmosphereMobile from "../../../../assets/images/PersonalTraning/PersonalGymExperience/cardioMob.webp";
import turfWorkoutsMobile from "../../../../assets/images/PersonalTraning/PersonalGymExperience/turf_workoutsMob.webp";
import olympicLiftingMobile from "../../../../assets/images/PersonalTraning/PersonalGymExperience/olympic_liftingMob.webp";
import yogaMobile from "../../../../assets/images/PersonalTraning/PersonalGymExperience/yogaMob.webp";

const gymCards = [
  {
    count: "01",
    title: (
      <p>
        Strength <br /> Training
      </p>
    ),
    description: "",
    bgImage: {
      desktop: fitness,
      mobile: fitnessMobile,
    },
  },
  {
    count: "02",
    title: "Calisthenics",
    description: "",
    bgImage: {
      desktop: wellness,
      mobile: wellnessMobile,
    },
  },
  {
    count: "03",
    title: "Cardio",
    description: "",
    bgImage: {
      desktop: atmosphere,
      mobile: atmosphereMobile,
    },
  },
  {
    count: "04",
    title: (
      <p>
        Weight <br /> Loss
      </p>
    ),
    description: "",
    bgImage: {
      desktop: turfWorkouts,
      mobile: turfWorkoutsMobile,
    },
  },
  {
    count: "05",
    title: (
      <p>
        Olympic <br /> Lifting
      </p>
    ),
    description: "",
    bgImage: {
      desktop: olympicLifting,
      mobile: olympicLiftingMobile,
    },
  },
  {
    count: "06",
    title: "Mobility",
    description: "",
    bgImage: {
      desktop: yoga,
      mobile: yogaMobile,
    },
  },
];

const PersonalGymExperience = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState(0);

  // Desktop: use hover state, Mobile: use carousel state
  const activeIndex = hoveredIndex !== null ? hoveredIndex : carouselIndex;

  // Update previous index when active index changes
  useEffect(() => {
    if (activeIndex !== previousIndex) {
      setPreviousIndex(activeIndex);
    }
  }, [activeIndex, previousIndex]);

  // Mobile Carousel with Scale Effect
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      containScroll: "keepSnaps",
      loop: true,
      align: "center",
    }
    // [Autoplay({ delay: 4000, stopOnInteraction: false })]
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

  // Preload images for both desktop and mobile
  useEffect(() => {
    gymCards.forEach((card) => {
      // Preload desktop image
      const desktopImg = new Image();
      desktopImg.src = card.bgImage.desktop;

      // Preload mobile image
      const mobileImg = new Image();
      mobileImg.src = card.bgImage.mobile;
    });
  }, []);

  return (
    <div className="relative w-full overflow-hidden md:mb-12">
      {/* Background Image - Desktop with Crossfade */}
      <div className="hidden md:block">
        {/* Previous background (fading out) */}
        <div
          className="absolute inset-0 bg-cover bg-center    "
          style={{
            backgroundImage: `url(${gymCards[previousIndex].bgImage.desktop})`,
            // opacity: activeIndex === previousIndex ? 1 : 0,
          }}
        />
        {/* Current background (fading in) */}
        <div
          className="absolute inset-0 bg-cover bg-center     "
          style={{
            backgroundImage: `url(${gymCards[activeIndex].bgImage.desktop})`,
            // opacity: activeIndex === previousIndex ? 0 : 1,
          }}
        />
        <div className="absolute inset-0 bg-black/20 pointer-events-none" />
      </div>

      {/* Background Image - Mobile with Crossfade */}
      <div className="md:hidden">
        {/* Previous background (fading out) */}
        <div
          className="absolute inset-0 bg-cover bg-center  "
          style={{
            backgroundImage: `url(${gymCards[previousIndex].bgImage.mobile})`,
            // opacity: carouselIndex === previousIndex ? 1 : 0,
          }}
        />
        {/* Current background (fading in) */}
        <div
          className="absolute inset-0 bg-cover bg-center  "
          style={{
            backgroundImage: `url(${gymCards[carouselIndex].bgImage.mobile})`,
            // opacity: carouselIndex === previousIndex ? 0 : 1,
          }}
        />
        <div className="absolute inset-0 bg-black/20 pointer-events-none  " />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="absolute top-[30px] md:top-[100px] flex flex-col gap-4">
          <h2 className="text-[#FFFFFF] uppercase leading-[32px] md:leading-[42px] text-left">
            SPECIALISED PERSONAL <br /> TRAINING, CUSTOMISED TO YOU
          </h2>
          <h4 className="text-[#FFFFFF] leading-[24px] md:leading-[26px] max-w-[638px] max-md:hidden">
            We offer expert coaches across every major training discipline.
            Whether you’re working toward performance goals, recovering from
            injury, or starting your fitness journey, we’ll match you with the
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
              className="flex-1 p-8 rounded-t-[5px] flex flex-col gap-8 cursor-pointer relative group overflow-hidden transition-transform duration-150 ease-out hover:scale-[1.02]"
            >
              {/* White Overlay - Smooth slide up animation */}
              <div
                className={`absolute inset-0 z-0 bg-[#ffffff] transition-transform duration-150 ease-out ${
                  isActive ? "translate-y-0" : "translate-y-full"
                }`}
              />

              {/* Content Container */}
              <div className="relative z-10 w-[246px] h-[100px] flex flex-col justify-center">
                <p
                  className={`description leading-[25px] !font-[600] transition-all duration-150 ease-out ${
                    isActive
                      ? "text-[#000] translate-y-0"
                      : "text-[#ffffff] translate-y-1"
                  }`}
                >
                  {card.count}
                </p>
                <h3
                  className={`uppercase !text-[24px] font-Vazirmatn leading-[30px] !font-[600] mb-4 transition-all duration-150 ease-out ${
                    isActive
                      ? "text-[#1C1C1C] translate-y-0"
                      : "text-[#ffffff] translate-y-1"
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
      <div className="md:hidden relative z-10 max-w-[1280px] mx-auto flex flex-col justify-end items-end px-4 h-[560px]">
        <div className="w-full" ref={emblaRef}>
          <div className="flex">
            {gymCards.map((card, index) => {
              const isSelected = selectedIndex === index;
              return (
                <div key={index} className="flex-[0_0_70%] min-w-0 px-3 py-4">
                  <div
                    className={`w-full min-h-[100px] px-3 rounded-[5px] flex flex-col justify-center gap-4 cursor-pointer relative group overflow-hidden transition-all duration-150 transform ${
                      isSelected ? "scale-110" : "scale-95"
                    }`}
                  >
                    <div className="absolute inset-0 z-0 bg-[#ffffff] h-[100%] flex flex-col items-center justify-center" />

                    <div className="relative z-10 transition-colors duration-150 w-full text-center text-[#1C1C1C]">
                      <p className="description leading-[20px] !font-[600] transition-all duration-150 text-[#000]">
                        {card.count}
                      </p>
                      <h3 className="uppercase !text-[20px] font-Vazirmatn leading-[26px] !font-[600] transition-all duration-150 text-[#1C1C1C]">
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

export default PersonalGymExperience;
