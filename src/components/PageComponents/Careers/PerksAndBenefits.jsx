import React from "react";
import {
  Clock,
  GraduationCap,
  Dumbbell,
  Users,
  HeartPulse,
  Sparkles,
} from "lucide-react";

const perks = [
  {
    id: "flexible-hours",
    line1: "FLEXIBLE",
    line2: "HOURS",
    Icon: Clock,
  },
  {
    id: "professional-growth",
    line1: "PROFESSIONAL",
    line2: "GROWTH",
    Icon: GraduationCap,
  },
  {
    id: "premium-equipment",
    line1: "PREMIUM",
    line2: "EQUIPMENT",
    Icon: Dumbbell,
  },
  {
    id: "supportive-community",
    line1: "SUPPORTIVE",
    line2: "COMMUNITY",
    Icon: Users,
  },
  // {
  //   id: "mental-health-support",
  //   line1: "MENTAL HEALTH",
  //   line2: "SUPPORT",
  //   Icon: HeartPulse,
  // },
  // {
  //   id: "impact-driven-projects",
  //   line1: "IMPACT-DRIVEN",
  //   line2: "PROJECTS",
  //   Icon: Sparkles,
  // },
];

function PerksAndBenefits() {
  return (
    <section className="relative w-full">
      {/* Background Image */}
      <div className="relative">
        <img
          src="https://tor1.digitaloceanspaces.com/evolve-strength/assets/images/careers/careersHero/perks_and_benefits.webp"
          alt="Gym member training with premium equipment"
          className="w-full h-[420px] md:h-[700px] object-cover"
          loading="lazy"
          draggable="false"
        />

        {/* Left Overlay Panel */}
        <div className="absolute inset-0 max-w-[1280px] px-4 md:px-8 mx-auto w-full flex items-center">
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent pointer-events-none" />

          <div className="relative z-10 text-white h-full flex pb-8 md:pb-16 flex-col justify-end gap-6 sm:gap-8">
            <h2 className="text-left">PERKS & BENEFITS</h2>

            <div className="grid grid-cols-2 gap-3">
              {perks.map(({ id, line1, line2, Icon }) => (
                <div
                  key={id}
                  className="bg-black/30 backdrop-blur-[6px] border border-white/20 rounded-[8px] md:w-[160px] md:h-[108px] w-[130px] h-[98px] shadow-[0_2px_10px_rgba(0,0,0,0.25)]"
                >
                  <div className="flex flex-col justify-center items-center gap-3 h-full p-3">
                    <Icon className="w-5 h-5 text-white/90" />
                    <div className="text-[#fff] text-[12px] md:text-[14px] text-center font-semibold leading-[16px]">
                      <span className="block">{line1}</span>
                      <span className="block">{line2}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PerksAndBenefits;
