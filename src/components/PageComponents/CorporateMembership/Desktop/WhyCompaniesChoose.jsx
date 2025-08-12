import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import fitness from "../../../../assets/images/corporateMembership/whyChoose/everyThinkOnePlace.webp";
import wellness from "../../../../assets/images/corporateMembership/whyChoose/gym_equipment.webp";
import atmosphere from "../../../../assets/images/corporateMembership/whyChoose/wellness_support.webp";
import turfWorkouts from "../../../../assets/images/corporateMembership/whyChoose/better_outcomes.webp";
import { ReactComponent as OnePlaceIcon } from "@/assets/images/corporateMembership/whyChoose/one_place.svg";
import { ReactComponent as TopTierIcon } from "@/assets/images/corporateMembership/whyChoose/Top_Tier.svg";
import { ReactComponent as WellnessSupportIcon } from "@/assets/images/corporateMembership/whyChoose/WellnessSupport.svg";
import { ReactComponent as BetterOutcomesIcon } from "@/assets/images/corporateMembership/whyChoose/BetterOutcomes.svg";
import { Link } from "react-router-dom";


const gymCards = [
  {
    count: "01",
    title: <p>Everything in One Place</p>,
    description:
      "Employees can train, recover, and get healthcare support without leaving the facility. No need to travel between appointments.",
    bgImage: fitness,
    icon: OnePlaceIcon,
  },
  {
    count: "02",
    title: <p>Top-tier Gym Equipment</p>,
    description:
      "Each location offers physiotherapy, massage, chiropractic, acupuncture, and more. Plus steam rooms, saunas and showers.",
    bgImage: wellness,
    icon: TopTierIcon,
  },
  {
    count: "03",
    title: "Full Wellness Support",
    description:
      "Our spaces feature Precor, Rogue, Eleiko, and Atlantis gear. That includes strength platforms, cardio machines, and turf zones.",
    bgImage: atmosphere,
    icon: WellnessSupportIcon,
  },
  {
    count: "04",
    title: <p>Better Outcomes</p>,
    description:
      "When employees use their benefits, they feel better, get injured less, and take fewer sick days. That improves productivity and morale.",
    bgImage: turfWorkouts,
    icon: BetterOutcomesIcon,
  },
];

const WhyCompaniesChoose = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState(0);

  // Desktop: use hover state, Mobile: use carousel state
  const activeIndex = hoveredIndex !== null ? hoveredIndex : carouselIndex;

  // Update previous index when active index changes
  useEffect(() => {
    setPreviousIndex(activeIndex);
  }, [activeIndex]);

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

  // Preload images
  useEffect(() => {
    gymCards.forEach((card) => {
      const img = new Image();
      img.src = card.bgImage;
    });
  }, []);

  return (
    <div className="relative w-full overflow-hidden mb-12">
      {/* Background Images - Desktop */}
      <div className="hidden md:block">
        {/* Previous background image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-300 ease-in-out"
          style={{
            backgroundImage: `url(${gymCards[previousIndex].bgImage})`,
          }}
        />

        {/* Current background image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-300 ease-in-out"
          style={{
            backgroundImage: `url(${gymCards[activeIndex].bgImage})`,
          }}
        />
        <div className="absolute inset-0 bg-black/20 pointer-events-none" />
      </div>

      {/* Background Images - Mobile */}
      <div className="md:hidden">
        {/* Previous background image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-300 ease-in-out h-[600px]"
          style={{
            backgroundImage: `url(${gymCards[previousIndex].bgImage})`,
          }}
        />

        {/* Current background image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-300 ease-in-out h-[600px]"
          style={{
            backgroundImage: `url(${gymCards[carouselIndex].bgImage})`,
          }}
        />
        <div className="absolute inset-0 bg-black/20 pointer-events-none h-[600px]" />
      </div>

      <div className="relative z-50 w-full max-w-[1280px] mx-auto flex flex-col items-start justify-start gap-4 px-4 md:px-8">
        <h2 className="text-[#FFFFFF] uppercase leading-[32px] md:leading-[39px] absolute top-[30px] md:top-[180px] text-left w-full md:w-auto">
          Why Companies <br /> Choose Evolve
        </h2>
        
         <Link to="/corporate-membership-wizard">
              <button className="btnPrimary relative top-[110px] md:top-[280px] z-50 cursor-pointer">Get Started</button>
            </Link>
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
              className={`flex-1 p-8 rounded-t-[5px] flex flex-col gap-8 cursor-pointer relative group overflow-hidden transition-all duration-300 transform hover:scale-[1.03] hover:shadow-2xl
                ${isActive ? "min-h-[220px]" : "max-h-[110px]"}
              `}
            >
              <div
                className={`absolute inset-0 z-0 bg-[#ffffff] h-[100%] flex flex-col items-center justify-center transition-transform duration-200 ease-in-out ${
                  isActive ? "translate-y-0" : "translate-y-full"
                }`}
              />

              <div
                className={`relative z-10 transition-colors duration-500 w-[246px] h-[150px] ${
                  isActive ? "text-[#1C1C1C]" : "text-[#ffffff]"
                }`}
              >
                <div className="flex flex-row items-center gap-3 mb-2">
                  <div className="">
                    <card.icon
                      className="  transition-colors duration-200"
                      style={{
                        fill: isActive ? "#4AB04A" : "#ffffff",
                      }}
                    />
                  </div>
                  <h4
                    className={`uppercase  !text-[24px] font-[kanit] leading-[24px] tracking-[-0.72px] !font-[600] transition-all duration-200 group-hover:translate-y-[-4px] group-hover:opacity-90 ${
                      isActive ? "text-[#1C1C1C]" : "text-[#ffffff]"
                    }`}
                  >
                    {card.title}
                  </h4>
                </div>
                {isActive && (
                  <h4
                    className={`leading-[24px] description !font-[400] transition-all duration-200 group-hover:translate-y-[-2px] group-hover:opacity-90 text-[#000]`}
                  >
                    {card.description}
                  </h4>
                )}
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
                <div key={index} className="flex-[0_0_85%] min-w-0 px-3 pb-6">
                  <div
                    className={`w-full min-h-[160px] px-3 rounded-[5px] flex flex-col justify-center gap-4 cursor-pointer relative group overflow-hidden transition-all duration-300 transform ${
                      isSelected ? "scale-110" : "scale-95"
                    }`}
                  >
                    <div className="absolute inset-0 z-0 bg-[#ffffff] h-[100%] flex flex-col items-center justify-center" />

                    <div className="relative z-10 transition-colors duration-500 w-full text-left text-[#1C1C1C]">
                      <div className="flex flex-row items-center gap-3 mb-2">
                        <div>
                          <card.icon
                            className=" transition-colors duration-200"
                            style={{
                              fill: isSelected ? "#4AB04A" : "#000",
                            }}
                          />
                        </div>
                        <h4 className="uppercase !text-[18px] font-[kanit] leading-[22px] tracking-[-0.54px] !font-[600] transition-all duration-200 text-[#1C1C1C]">
                          {card.title}
                        </h4>
                      </div>
                      <h4 className="leading-[20px] description !font-[400] transition-all duration-200 text-[#000] text-sm">
                        {card.description}
                      </h4>
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

export default WhyCompaniesChoose;
