import React, { useState, useEffect } from "react";
import fitness from "../../../../assets/images/corporateMembership/whyChoose/everyThinkOnePlace.webp";
import wellness from "../../../../assets/images/PersonalTraning/PersonalGymExperience/bodyweight_training.webp";
import atmosphere from "../../../../assets/images/PersonalTraning/PersonalGymExperience/cardio.webp";
import turfWorkouts from "../../../../assets/images/PersonalTraning/PersonalGymExperience/turf_workouts.webp";
import olympicLifting from "../../../../assets/images/PersonalTraning/PersonalGymExperience/olympic_lifting.webp";
import yoga from "../../../../assets/images/PersonalTraning/PersonalGymExperience/yoga.webp";

const gymCards = [
  {
    count: "01",
    title: <p>Everything in One Place</p>,
    description:
      "Employees can train, recover, and get healthcare support without leaving the facility. No need to travel between appointments.",
    bgImage: fitness,
  },
  {
    count: "02",
    title: <p>Top-tier Gym Equipment</p>,
    description:
      "Each location offers physiotherapy, massage, chiropractic, acupuncture, and more. Plus steam rooms, saunas and showers.",
    bgImage: wellness,
  },
  {
    count: "03",
    title: "Full Wellness Support",
    description:
      "Our spaces feature Precor, Rogue, Eleiko, and Atlantis gear. That includes strength platforms, cardio machines, and turf zones.",
    bgImage: atmosphere,
  },
  {
    count: "04",
    title: <p>Better Outcomes</p>,
    description:
      "When employees use their benefits, they feel better, get injured less, and take fewer sick days. That improves productivity and morale.",
    bgImage: turfWorkouts,
  },
];

const WhyCompaniesChoose = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const defaultIndex = 0;
  const activeIndex = hoveredIndex !== null ? hoveredIndex : defaultIndex;

  useEffect(() => {
    gymCards.forEach((card) => {
      const img = new Image();
      img.src = card.bgImage;
    });
  }, []);

  return (
    <div className="relative w-full overflow-hidden mb-12">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          key={activeIndex}
          className="absolute inset-0 bg-cover bg-center transition-all animate-fade will-change-transform will-change-opacity"
          style={{
            backgroundImage: `url(${gymCards[activeIndex].bgImage})`,
          }}
        />
        <div className="absolute inset-0 bg-black/20 pointer-events-none" />
      </div>
      <div className="relative z-10 w-full max-w-[1280px] mx-auto flex flex-col items-start justify-start gap-4 px-8">
        <h2 className="text-[#FFFFFF] uppercase leading-[39px] absolute top-[180px]">
          Why Companies <br /> Choose Evolve
        </h2>
        <button className="btnPrimary absolute top-[280px]">
          Book a Free Consultation
        </button>
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto flex flex-row justify-end items-end min-h-[700px] px-8 ">
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
                className={`relative z-10 transition-colors duration-500 w-[246px] h-[150px]   ${
                  isActive ? "text-[#1C1C1C]" : "text-[#ffffff]"
                }`}
              >
                <h4
                  className={`uppercase !text-[24px] font-[kanit]  leading-[24px] tracking-[-0.72px] !font-[600] mb-2 transition-all duration-200 group-hover:translate-y-[-4px] group-hover:opacity-90 ${
                    isActive ? "text-[#1C1C1C]" : "text-[#ffffff]"
                  }`}
                >
                  {card.title}
                </h4>
                {isActive && (
                  <h4
                    className={`leading-[24px] description !font-[400]  transition-all duration-200 group-hover:translate-y-[-2px] group-hover:opacity-90 text-[#000]`}
                  >
                    {card.description}
                  </h4>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WhyCompaniesChoose;
