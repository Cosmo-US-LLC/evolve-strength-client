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
    <div className="">
      <div
        className="relative flex flex-row items-center justify-center w-full min-h-[700px] bg-cover bg-center transition-all will-change-transform will-change-opacity"
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
    </div>
  );
};

export default Services;
