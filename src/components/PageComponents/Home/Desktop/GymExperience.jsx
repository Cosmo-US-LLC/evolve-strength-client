import React, { useState } from "react";
import fitness from "/src/assets/images/home/gymEep/fitness.webp";
import wellness from "/src/assets/images/home/gymEep/wellness.webp";
import atmosphere from "/src/assets/images/home/gymEep/atmosphere.webp";

const gymCards = [
  {
    title: "Fitness",
    description:
      "Achieve your fitness goals with premium strength and cardio equipment, designed for every workout style.",
    bgImage: fitness,
  },
  {
    title: "Wellness",
    description:
      "Recover and rejuvenate with steam rooms, saunas, physiotherapy, and massage therapy.",
    bgImage: wellness,
  },
  {
    title: "Atmosphere",
    description:
      "Stay motivated in a vibrant, inspiring atmosphere with stunning aesthetics designed to elevate your experience.",
    bgImage: atmosphere,
  },
];

const GymExperience = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const defaultIndex = 0;
  const activeIndex = hoveredIndex !== null ? hoveredIndex : defaultIndex;

  return (
    <div className="relative w-full min-h-[600px] overflow-hidden">
  
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          key={activeIndex}
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out animate-fade"
          style={{
            backgroundImage: `url(${gymCards[activeIndex].bgImage})`,
          }}
        />
        <div className="absolute inset-0 bg-black/20 pointer-events-none" />
      </div>
 
      <div className="relative z-10 max-w-[1280px] mx-auto flex flex-col md:flex-row justify-end items-end min-h-[600px] px-8 gap-6">
        {gymCards.map((card, index) => {
          const isActive =
            hoveredIndex === index || (hoveredIndex === null && index === 0);

          return (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="flex-1 p-8 rounded-t-sm cursor-pointer relative group overflow-hidden transition-all duration-500 transform hover:scale-[1.03] hover:shadow-2xl"
            >
 
              <div
                className={`absolute inset-0 z-0 bg-white transition-transform duration-500 ease-in-out ${
                  isActive ? "translate-y-0" : "translate-y-full"
                }`}
              />

           
              <div
                className={`relative z-10 transition-colors duration-500 ${
                  isActive ? "text-black" : "text-white"
                }`}
              >
                <h3 className="text-2xl font-extrabold uppercase mb-4 transition-all duration-500 group-hover:translate-y-[-4px] group-hover:opacity-90">
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed transition-all duration-500 group-hover:translate-y-[-2px] group-hover:opacity-90">
                  {card.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GymExperience;
