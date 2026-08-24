import React, { useState } from "react";
import theSpaceImage from "@/assets/images/PresaleParkRoyal/the_space.jpg";
import turfRecoveryImage from "@/assets/images/PresaleParkRoyal/turf_recovery.jpg";
import cardioZoneImage from "@/assets/images/PresaleParkRoyal/cardio_zone.jpg";
import recoverySuiteImage from "@/assets/images/PresaleParkRoyal/recovery_suite.jpg";

const zones = [
  {
    title: "Strength Zone",
    description:
      "Equip yourself with free weights, machines, and all the tools to build muscle and power.",
    image: theSpaceImage,
  },
  {
    title: "Cardio Zone",
    description:
      "Stay active and boost endurance with treadmills, bikes, rowers, and more.",
    image: cardioZoneImage,
  },
  {
    title: "Turf Area",
    description:
      "Train functionally with open space for agility, HIIT, and dynamic workouts.",
    image: turfRecoveryImage,
  },
  {
    title: "Recovery Suite",
    description:
      "Recover faster, stay injury-free, and recharge with our full range of recovery services.",
    image: recoverySuiteImage,
  },
];

const GymZones = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeZone = zones[activeIndex];

  return (
    <section className="bg-white px-4 py-12 md:px-8 md:py-20">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-6 md:gap-8">
        <div className="flex flex-col items-center gap-2 text-center">
          <p className="font-[Kanit] text-[14px] md:text-[16px] font-[500] uppercase leading-[20px] md:leading-[24px] text-[#4ab04a]">
            The Space
          </p>
          <h2 className="font-[Kanit] !text-[28px] md:!text-[40px] !font-[600] uppercase !leading-[34px] md:!leading-[46px] text-[#000]">
            Built To Be Seen. Built To Be Used
          </h2>
        </div>

        <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-12">
          <p className="hidden md:block md:w-1/3 font-[Kanit] text-[18px] font-[300] leading-[26px] text-[#000]">
            {activeZone.description}
          </p>

          <div className="mx-auto w-full max-w-[381px] shrink-0 overflow-hidden rounded-[16px] md:w-1/3 aspect-[381/500]">
            <img
              src={activeZone.image}
              alt={activeZone.title}
              className="h-full w-full object-cover transition-opacity duration-300"
            />
          </div>

          <div className="flex w-full flex-col md:w-1/3 divide-y divide-[#e5e5e5] border-t border-[#e5e5e5]">
            {zones.map((zone, index) => (
              <div key={zone.title} className="flex flex-col">
                <button
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  onMouseEnter={() => setActiveIndex(index)}
                  className={`py-4 text-left font-[Kanit] text-[24px] md:text-[36px] font-[600] uppercase leading-[1] transition-colors duration-200 cursor-pointer ${
                    index === activeIndex ? "text-[#4ab04a]" : "text-[#c4c4c4]"
                  }`}
                >
                  {zone.title}
                </button>
                {index === activeIndex && (
                  <p className="pb-4 font-[Kanit] text-[16px] font-[300] leading-[24px] text-[#000] md:hidden">
                    {zone.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GymZones;
