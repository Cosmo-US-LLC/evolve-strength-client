import React, { useState, useEffect } from "react";
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
  { label: <p>Chiropractic <br /> Care</p>, icon: <Hand />, bgImage: chiropracticBg },
  {
    label: (
      <p>
        Massage <br /> Therapy
      </p>
    ),
    icon: <HandHeart />,
    bgImage: massageBg,
  },
  { label: "Pilates", icon: <Dumbbell />, bgImage: pilatesBg },
  { label: "Acupuncture", icon: <Activity />, bgImage: acupunctureBg },
  { label: <p>Dietitian <br /> Services</p>, icon: <Salad />, bgImage: dietitianBg },
  { label: "Osteopathy", icon: <HeartPulse />, bgImage: osteopathyBg },
  { label: "Laser Therapy", icon: <Sparkles />, bgImage: laserBg },
  { label: "Mental Health", icon: <Brain />, bgImage: mentalHealthBg },
];

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
    services.forEach(service => {
      const img = new Image();
      img.src = service.bgImage;
    });
  }, []);

  return (
    <div className="w-full md:py-12 max-md:pb-12 max-md:pt-0">
      {/* Desktop View */}
      <div
        className="relative flex flex-row items-center justify-center w-full aspect-[16/9] bg-cover bg-center transition-all will-change-transform will-change-opacity max-md:hidden"
        style={{ backgroundImage: `url(${services[activeIndex].bgImage})` }}
      >

        <div className="absolute inset-0 bg-black/40 z-0" />

        <div className="relative z-10 max-w-[1280px] w-full mx-auto flex flex-row items-center justify-between px-8 gap-10">
 
          <div className="max-w-xl space-y-8">
            <h2 className="uppercase text-[#ffffff]">
              WELLNESS SERVICES <br /> FOR EVERYONE.
            </h2>
            <p className="description leading-[20px] text-[#ffffff]">
             Fitness goes beyond the gym. Our in-house wellness team <br />helps you recover, manage pain, and improve movement. 
            </p>
            <button className="btnPrimary">
              BOOK A FREE TOUR
            </button>
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
      <div
        className="md:hidden relative w-full min-h-[552px] bg-cover bg-center flex flex-col px-4 py-8 justify-between items-center overflow-hidden"
        style={{ backgroundImage: `url(${services[activeIndex].bgImage})` }}
      >
        <div className="absolute inset-0 bg-black/40 z-0" />
        <div className="relative z-10 flex flex-col items-center w-full gap-6">
          <h2 className="uppercase text-[#ffffff] font-bold text-center">
            WELLNESS SERVICES FOR EVERYONE.
          </h2>
          <p className="description leading-[20px] text-[#ffffff] text-center">
            Fitness goes beyond the gym. Our in-house wellness team helps you recover, manage pain, and improve movement.
          </p>
          <div className="flex justify-start">
            <button className="btnPrimary">BOOK A FREE TOUR</button>
          </div>
        </div>
        <div className="relative w-full mt-6">
          <Carousel opts={{ align: 'start' }} className="w-full">
            <CarouselContent className="pl-5 gap-2">
              {services.map((service, index) => {
                const isActive = index === activeIndex;
                return (
                  <CarouselItem
                    key={index}
                    className={`flex-shrink-0 w-full max-w-[173px] h-[102px] flex flex-col items-center justify-center text-[#fff] rounded-[10px] cursor-pointer transition-all duration-300 ${
                      isActive
                        ? 'bg-white/20 border-white ring-2 ring-white border'
                        : 'bg-[#00000066] border-transparent border'
                    }`}
                    onClick={() => setActiveIndex(index)}
                  >
                    <div className={`mb-1 text-[20px] ${isActive ? 'text-[#4AB04A]' : ''}`}>{service.icon}</div>
                    <div className="text-[14px] font-kanit font-[400] leading-[20px] uppercase text-[#fff] text-center">
                      {typeof service.label === 'string' ? service.label : (
                        <span className="whitespace-pre-line">{service.label}</span>
                      )}
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="left-0 top-1/2 -translate-y-1/2 bg-white/80 border border-gray-300" />
            <CarouselNext className="right-0 top-1/2 -translate-y-1/2 bg-white/80 border border-gray-300" />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Services;
