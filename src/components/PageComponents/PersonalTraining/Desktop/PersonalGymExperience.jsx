import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

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
      desktop:
        "/assets/images/PersonalTraning/PersonalGymExperience/fitness.webp",
      mobile:
        "/assets/images/PersonalTraning/PersonalGymExperience/fitnessMob.webp",
    },
  },
  {
    count: "02",
    title: "Calisthenics",
    description: "",
    bgImage: {
      desktop:
        "/assets/images/PersonalTraning/PersonalGymExperience/bodyweight_training.webp",
      mobile:
        "/assets/images/PersonalTraning/PersonalGymExperience/bodyweight_trainingMob.webp",
    },
  },
  {
    count: "03",
    title: (
      <p>
        Build <br /> Muscle
      </p>
    ),
    description: "",
    bgImage: {
      desktop:
        "/assets/images/PersonalTraning/PersonalGymExperience/cardio.webp",
      mobile:
        "/assets/images/PersonalTraning/PersonalGymExperience/cardioMob.webp",
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
      desktop:
        "/assets/images/PersonalTraning/PersonalGymExperience/turf_workouts.webp",
      mobile:
        "/assets/images/PersonalTraning/PersonalGymExperience/turf_workoutsMob.webp",
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
      desktop:
        "/assets/images/PersonalTraning/PersonalGymExperience/olympic_lifting.webp",
      mobile:
        "/assets/images/PersonalTraning/PersonalGymExperience/olympic_liftingMob.webp",
    },
  },
  {
    count: "06",
    title: "Mobility",
    description: "",
    bgImage: {
      desktop:
        "/assets/images/PersonalTraning/PersonalGymExperience/yoga.webp",
      mobile:
        "/assets/images/PersonalTraning/PersonalGymExperience/yogaMob.webp",
    },
  },
];

const PersonalGymExperience = () => {
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
    }
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

      <div className="relative z-10 max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="absolute top-[30px] md:top-[100px] flex flex-col gap-4">
          <h2 className="text-[#FFFFFF] w-full md:max-w-[637px] uppercase leading-[32px] md:leading-[42px] text-left">
            From Strength to Mobility, and Everything Between
          </h2>
          <h4 className="text-[#FFFFFF] leading-[24px] md:leading-[26px] max-w-[638px] max-md:hidden">
            With over 150 training specialties available, Evolve makes it easy
            to find the right fit. Many members start with these six popular
            focus areas.
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
