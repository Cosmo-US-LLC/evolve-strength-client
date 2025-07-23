import React, { useState, useEffect } from "react";
import fitness from "../../../../assets/images/corporateMembership/OneMembershipFullAccess/slide6.webp";
import wellness from "../../../../assets/images/corporateMembership/OneMembershipFullAccess/slide7.webp";
import atmosphere from "../../../../assets/images/corporateMembership/OneMembershipFullAccess/slide8.webp";
import turfWorkouts from "../../../../assets/images/corporateMembership/OneMembershipFullAccess/slide9.webp";
import olympicLifting from "../../../../assets/images/corporateMembership/OneMembershipFullAccess/slide10.webp";

const gymCards = [
  {
    count: "",
    title: <p>Strength <br /> training</p>,
    description: "",
    bgImage: fitness,
  },
  {
    count: "",
    title: <p>Cardio <br /> Equipment</p>,
    description: "",
    bgImage: wellness,
  },
  {
    count: "",
    title: <p>Lifting <br /> Platforms</p>,
    description: "",
    bgImage: atmosphere,
  },
  {
    count: "",
    title: <p>Premium <br /> Amenities</p>,
    description: "",
    bgImage: turfWorkouts,
  },
  {
    count: "",
    title: <p>Support from <br /> Trainers</p>,
    description: "",
    bgImage: olympicLifting,
  },
];

const PersonalizedAssesment = () => {
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
    <div className="relative w-full overflow-hidden">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          key={activeIndex}
          className="absolute inset-0 bg-cover bg-center transition-all animate-fade will-change-transform will-change-opacity"
          style={{
            backgroundImage: `url(${gymCards[activeIndex].bgImage})`,
          }}
        />
        {/* <div className="absolute inset-0 bg-black/20 pointer-events-none" /> */}
      </div>
      <div className="relative z-10 max-w-[1280px] mx-auto flex flex-col gap-4 px-8 ">
        <h2 className="text-[#FFFFFF] uppercase leading-[42px] absolute top-[120px]">
          One membership. Full access.
        </h2>
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
              className="flex-1 p-8 rounded-t-[5px] flex flex-col gap-8 cursor-pointer relative group overflow-hidden transition-all duration-200 transform hover:scale-[1.03] hover:shadow-2xl"
            >
              <div
                className={`absolute inset-0 z-0 bg-[#ffffff] h-[100%] flex flex-col items-center justify-center transition-transform duration-200 ease-in-out ${
                  isActive ? "translate-y-0" : "translate-y-full"
                }`}
              />

              <div
                className={`relative z-10 transition-colors duration-500 w-[246px] h-[50px]   ${
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
  );
};

export default PersonalizedAssesment;
