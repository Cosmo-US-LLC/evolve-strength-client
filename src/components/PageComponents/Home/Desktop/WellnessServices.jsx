import React, { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import {
  Leaf,
  Dumbbell,
  HandHeart,
  Activity,
  HeartPulse,
  Salad,
  Sparkles,
  Brain,
  Hand,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

import estheticianBg from "/src/assets/images/home/wellness-services/esthetician.webp";
import chiropracticBg from "/src/assets/images/home/wellness-services/chiropractic_care.webp";
import massageBg from "/src/assets/images/home/wellness-services/chiropractic_head.webp";
import pilatesBg from "/src/assets/images/home/wellness-services/acupuncture_food.webp";
import acupunctureBg from "/src/assets/images/home/wellness-services/acupuncture.webp";
import dietitianBg from "/src/assets/images/home/wellness-services/acupuncture_food.webp";
import osteopathyBg from "/src/assets/images/home/wellness-services/osteopathy.webp";
import laserBg from "/src/assets/images/home/wellness-services/osteopathy_glass.webp";
import mentalHealthBg from "/src/assets/images/home/wellness-services/acupuncture.webp";

const services = [
  { label: "Esthetician", icon: <Leaf />, bgImage: estheticianBg },
  {
    label: (
      <p>
        Chiropractic <br /> Care
      </p>
    ),
    icon: <Hand />,
    bgImage: chiropracticBg,
  },
  {
    label: (
      <p>
        Massage <br /> Therapy
      </p>
    ),
    icon: <HandHeart />,
    bgImage: massageBg,
  },
  { label: "physiotherapy", icon: <Dumbbell />, bgImage: pilatesBg },
  { label: "Acupuncture", icon: <Activity />, bgImage: acupunctureBg },
  {
    label: (
      <p>
        Dietitian <br /> Services
      </p>
    ),
    icon: <Salad />,
    bgImage: dietitianBg,
  },
  { label: "Osteopathy", icon: <HeartPulse />, bgImage: osteopathyBg },
  { label: "Laser Therapy", icon: <Sparkles />, bgImage: laserBg },
  { label: "Mental Health", icon: <Brain />, bgImage: mentalHealthBg },
];

const WellnessServices = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      containScroll: "keepSnaps",
      loop: true,
      slidesToScroll: 1,
      align: "center",
    },
    [Autoplay({ delay: 6000, stopOnInteraction: false })]
  );

  // Handle transitions for both desktop and mobile
  useEffect(() => {
    if (activeIndex !== previousIndex) {
      setIsTransitioning(true);
      const timer = setTimeout(() => {
        setPreviousIndex(activeIndex);
        setIsTransitioning(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [activeIndex, previousIndex]);

  // Sync activeIndex with carousel
  useEffect(() => {
    if (emblaApi) {
      const onSelect = () => {
        setActiveIndex(emblaApi.selectedScrollSnap());
      };
      emblaApi.on("select", onSelect);
      return () => emblaApi.off("select", onSelect);
    }
  }, [emblaApi]);

  // Preload images
  useEffect(() => {
    services.forEach((service) => {
      const img = new Image();
      img.src = service.bgImage;
    });
  }, []);

  return (
    <div className="w-full md:py-12 max-md:pb-[48px] max-md:pt-0">
      {/* Desktop View */}
      <div className="relative flex flex-row items-center justify-center w-full min-h-[700px] max-md:hidden">
        {/* Previous background image - stays visible during transition */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-300 ease-in-out"
          style={{
            backgroundImage: `url(${services[previousIndex].bgImage})`,
            // opacity: isTransitioning ? 1 : 0,
          }}
        />

        {/* Current background image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-300 ease-in-out"
          style={{
            backgroundImage: `url(${services[activeIndex].bgImage})`,
            // opacity: isTransitioning ? 0 : 1,
          }}
        />

        <div className="absolute inset-0 bg-black/40 z-0" />

        <div className="relative z-10 max-w-[1280px] w-full mx-auto flex flex-row items-center justify-between px-8 gap-10">
          <div className="max-w-xl space-y-8">
            <h2 className="uppercase text-[#ffffff]">
              WELLNESS SERVICES <br /> FOR EVERYONE.
            </h2>
            <p className="description leading-[20px] text-[#ffffff]">
              Take full advantage of a wide range of wellness <br /> services at
              every Evolve location, available at an <br /> additional cost.
            </p>
            <button className="btnPrimary">FIND A WELLNESS EXPERT</button>
          </div>

          <div className="flex flex-wrap gap-4 max-w-[500px]">
            {services.map((service, index) => {
              const isActive = index === activeIndex;

              return (
                <div
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`group relative w-[155px] h-[155px] flex flex-col items-center justify-center text-[#fff] backdrop-blur-[12px] rounded-[10px] cursor-pointer transition-all duration-300
                  ${
                    isActive
                      ? "bg-white/20 ring-2 ring-white"
                      : "bg-[#00000066] hover:bg-white/20 hover:ring-1 hover:ring-white/50"
                  }
                `}
                >
                  <div className="mb-2 text-[16px] font-[kanit] font-[500] leading-[16px] uppercase">
                    {service.icon}
                  </div>
                  <div className="text-[16px] font-kanit font-[500] leading-[20px] uppercase text-[#fff] text-center">
                    {" "}
                    {service.label}
                  </div>

                  {isActive && (
                    <div className="absolute inset-0 bg-white/10 rounded-md blur-xl opacity-50 pointer-events-none" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden relative w-full min-h-[552px] flex flex-col px-[16px] py-[32px] justify-between items-center overflow-hidden">
        {/* Previous background image for mobile */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-300 ease-in-out"
          style={{
            backgroundImage: `url(${services[previousIndex].bgImage})`,
            // opacity: isTransitioning ? 1 : 0,
          }}
        />

        {/* Current background image for mobile */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-300 ease-in-out"
          style={{
            backgroundImage: `url(${services[activeIndex].bgImage})`,
            // opacity: isTransitioning ? 0 : 1,
          }}
        />

        <div className="absolute inset-0 bg-black/40 z-0" />

        <div className="relative z-10 flex flex-col items-center w-full  gap-6">
          <h2 className="uppercase text-[#ffffff] font-bold">
            WELLNESS SERVICES FOR EVERYONE.
          </h2>
          <p className="description leading-[20px] text-[#ffffff] ">
            Take full advantage of a wide range of wellness services at every
            Evolve location, available at an additional cost.
          </p>
          <div className="flex justify-start w-full">
            <button className="btnPrimary ">FIND A WELLNESS EXPERT</button>
          </div>
        </div>
        <div className="relative w-full mt-6">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-2 pl-2">
              {services.map((service, index) => {
                const isActive = index === activeIndex;
                return (
                  <div key={index} className="flex-[0_0_70%] min-w-0 px-2 py-4">
                    <div
                      className={`w-full min-h-[102px] px-3 rounded-[10px] flex flex-col items-center justify-center cursor-pointer relative group overflow-hidden transition-all duration-300 transform ${
                        isActive ? "scale-110" : "scale-95"
                      }`}
                      onClick={() => emblaApi && emblaApi.scrollTo(index)}
                    >
                      <div
                        className={`absolute inset-0 z-0 rounded-[10px] transition-all duration-300 ${
                          isActive
                            ? "bg-white/20 border-white ring-2 ring-white border"
                            : "bg-[#00000066]"
                        }`}
                      />

                      <div className="relative z-10 transition-colors duration-500 w-full text-center flex flex-col items-center justify-center gap-2">
                        <div
                          className={`mb-1 text-[20px] transition-all duration-200 ${
                            isActive ? "text-[#fff]" : "text-[#fff]"
                          }`}
                        >
                          {service.icon}
                        </div>
                        <div className="text-[14px] font-kanit font-[400] leading-[20px] uppercase text-[#fff] text-center">
                          {typeof service.label === "string" ? (
                            service.label
                          ) : (
                            <span className="whitespace-pre-line">
                              {service.label}
                            </span>
                          )}
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
    </div>
  );
};

export default WellnessServices;
