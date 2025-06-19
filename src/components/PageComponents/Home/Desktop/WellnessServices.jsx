import React, { useState } from "react";
import { 
  Leaf, Dumbbell, HandHeart, Activity, HeartPulse, 
  Salad, Sparkles, Brain, Hand 
} from "lucide-react";

import estheticianBg from "/src/assets/images/home/wellness-services/esthetician.webp";
import chiropracticBg from "/src/assets/images/home/wellness-services/chiropractic_care.webp";
import massageBg from "/src/assets/images/home/wellness-services/chiropractic_head.webp";
import pilatesBg from "/src/assets/images/home/wellness-services/acupuncture.webp";
import acupunctureBg from "/src/assets/images/home/wellness-services/acupuncture_food.webp";
import dietitianBg from "/src/assets/images/home/wellness-services/osteopathy.webp";
import osteopathyBg from "/src/assets/images/home/wellness-services/osteopathy_glass.webp";
import laserBg from "/src/assets/images/home/wellness-services/osteopathy_glass.webp";
import mentalHealthBg from "/src/assets/images/home/wellness-services/osteopathy_glass.webp";

const services = [
  { label: "Esthetician", icon: <Leaf />, bgImage: estheticianBg },
  { label: "Chiropractic Care", icon: <Hand />, bgImage: chiropracticBg },
  { label: "Massage Therapy", icon: <HandHeart />, bgImage: massageBg },
  { label: "Pilates", icon: <Dumbbell />, bgImage: pilatesBg },
  { label: "Acupuncture", icon: <Activity />, bgImage: acupunctureBg },
  { label: "Dietitian Services", icon: <Salad />, bgImage: dietitianBg },
  { label: "Osteopathy", icon: <HeartPulse />, bgImage: osteopathyBg },
  { label: "Laser Therapy", icon: <Sparkles />, bgImage: laserBg },
  { label: "Mental Health", icon: <Brain />, bgImage: mentalHealthBg },
];

const WellnessServices = () => {
  const [activeIndex, setActiveIndex] = useState(0); // default: Esthetician

  return (
    <div
      className="relative w-full min-h-[700px] bg-cover bg-center px-6 md:px-12 lg:px-24 py-20 transition-all duration-700 ease-in-out"
      style={{ backgroundImage: `url(${services[activeIndex].bgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      <div className="relative z-10 max-w-[1280px] mx-auto flex flex-col md:flex-row items-start justify-between gap-10">
        {/* Left Content */}
        <div className="text-white max-w-xl space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold leading-snug">
            WELLNESS SERVICES <br /> FOR EVERYONE.
          </h2>
          <p className="text-base text-white/90">
            Take full advantage of a wide range of wellness services at every
            Evolve location, available at an additional cost.
          </p>
          <button className="bg-green-600 hover:bg-green-700 transition text-white font-semibold px-6 py-3 rounded-md">
            FIND A WELLNESS EXPERT
          </button>
        </div>

        {/* Right Services List */}
        <div className="flex flex-wrap gap-4 max-w-[500px]">
          {services.map((service, index) => {
            const isActive = index === activeIndex;

            return (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`group relative w-[150px] h-[120px] flex flex-col items-center justify-center text-sm font-semibold text-white rounded-md cursor-pointer transition-all duration-300
                  ${isActive ? "bg-white/20 ring-2 ring-white" : "bg-white/10 hover:bg-white/20 hover:ring-1 hover:ring-white/50"}
                `}
              >
                <div className="mb-2 text-2xl">{service.icon}</div>
                {service.label}

                {/* Glow overlay for active */}
                {isActive && (
                  <div className="absolute inset-0 bg-white/10 rounded-md blur-xl opacity-50 pointer-events-none" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WellnessServices;
