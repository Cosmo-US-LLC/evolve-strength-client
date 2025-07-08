import React from "react";
import Marquee from "react-fast-marquee";

function FitnessCategory() {
  const tags = [
    "Strength",
    "Powerlifting",
    "Fat Loss",
    "Weightlifting",
    "HIIT",
    "Rehab",
    "Meal Plans",
    "Inclusive",
    "Beginners",
    "Sport-Specific",
  ];

  return (
    <section className="bg-[#000] py-8 ">
      <Marquee pauseOnHover={true} speed={40} gradient={false}>
        {tags.map((tag, idx) => (
          <span
            key={idx}
            className="text-[#ffffff] text-[20px] font-Kanit font-[400] leading-[24px] tracking-[-0.6px] mx-6 whitespace-nowrap cursor-default"
          >
            {tag}
          </span>
        ))}
      </Marquee>
    </section>
  );
}

export default FitnessCategory;
