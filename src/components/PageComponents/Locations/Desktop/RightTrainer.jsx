import React, { useState, useEffect } from "react";
import fitness from "../../../../assets/images/PersonalTraning/PersonalGymExperience/fitness.webp";
import wellness from "../../../../assets/images/PersonalTraning/PersonalGymExperience/bodyweight_training.webp";
import atmosphere from "../../../../assets/images/PersonalTraning/PersonalGymExperience/cardio.webp";
import turfWorkouts from "../../../../assets/images/PersonalTraning/PersonalGymExperience/turf_workouts.webp";
import olympicLifting from "../../../../assets/images/PersonalTraning/PersonalGymExperience/olympic_lifting.webp";
import yoga from "../../../../assets/images/PersonalTraning/PersonalGymExperience/yoga.webp";

const gymCards = [
  {
    count: "01",
    title: (
      <p>
        Strength <br /> Training
      </p>
    ),
    description: "",
    bgImage: fitness,
  },
  {
    count: "02",
    title: "Calisthenics",
    description: "",
    bgImage: wellness,
  },
  {
    count: "03",
    title: "Cardio",
    description: "",
    bgImage: atmosphere,
  },
  {
    count: "04",
    title: (
      <p>
        Weight <br /> Loss
      </p>
    ),
    description: "",
    bgImage: turfWorkouts,
  },
  {
    count: "05",
    title: (
      <p>
        Olympic <br /> Lifting
      </p>
    ),
    description: "",
    bgImage: olympicLifting,
  },
  {
    count: "06",
    title: "Mobility",
    description: "",
    bgImage: yoga,
  },
];

const RightTrainer = () => {
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
    <div className="relative w-full overflow-hidden ">
      <div className="absolute inset-0 bg-[#000] opacity-25 z-10"></div>
      <div className="absolute inset-0 z-0 overflow-hidden">
        
        <div
          key={activeIndex}
          className="aspect-[16/9]  bg-cover bg-center transition-all animate-fade will-change-transform will-change-opacity"
          style={{
            backgroundImage: `url(${gymCards[activeIndex].bgImage})`,
          }}
        />
        <div className="absolute inset-0 bg-black/20 pointer-events-none" />
      </div>
      <div className="relative z-10 max-w-[1280px] mx-auto flex flex-col gap-4 px-8 pt-[100px] ">
          <h2 className="text-[#FFFFFF] uppercase leading-[42px]">
            The Right Trainer. <br />
            For You.
          </h2>
          <h4 className="text-[#fff] leading-[26px] max-w-[600px]">
          We offer expert trainers across every major training discipline. Whether you’re <br /> working toward performance goals, recovering from injury, or starting your <br /> fitness journey, we’ll match you with the right trainer and approach, all under one <br /> roof at Evolve.ve.
          </h4>
        {/* </div> */}
      </div>

      <div className="relative max-w-[1280px] mx-auto px-8 ">
        <div className="flex flex-row justify-end items-end absolute bottom-0 ">
          {gymCards.map((card, index) => {
            const isActive =
              hoveredIndex === index || (hoveredIndex === null && index === 0);

            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="flex-1 p-7 rounded-t-[5px] flex flex-col gap-8 cursor-pointer relative group overflow-hidden transition-all duration-200 transform hover:scale-[1.03] hover:shadow-2xl"
              >
                <div
                  className={`absolute inset-0 z-0 bg-[#ffffff] h-[100%] flex flex-col items-center justify-center transition-transform duration-200 ease-in-out ${
                    isActive ? "translate-y-0" : "translate-y-full"
                  }`}
                />

                <div
                  className={`relative z-10 transition-colors duration-500 w-[146px] h-[100px]   ${
                    isActive ? "text-[#1C1C1C]" : "text-[#ffffff]"
                  }`}
                >
                  <p
                    className={` description leading-[25px] !font-[600] transition-all duration-200 group-hover:translate-y-[-2px] group-hover:opacity-90 ${
                      isActive ? "text-[#000]" : "text-[#ffffff]"
                    }`}
                  >
                    {card.count}
                  </p>
                  <h3
                    className={`uppercase !text-[24px] font-Vazirmatn leading-[30px] !font-[600] mb-4 transition-all duration-200 group-hover:translate-y-[-4px] group-hover:opacity-90 ${
                      isActive ? "text-[#1C1C1C]" : "text-[#ffffff]"
                    }`}
                  >
                    {card.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RightTrainer;
