import React, { useState } from "react";
import BackgroundImage from "/src/assets/images/home/wellness-hub/Trainers.webp"; // Use any default section-wide background image

const gymCards = [
  {
    title: "Fitness",
    description:
      "Achieve your fitness goals with premium strength and cardio equipment, designed for every workout style.",
    isWhite: false,
    hoverBgImage: "/src/assets/images/home/wellness-hub/Businesses.webp",
  },
  {
    title: "Wellness",
    description:
      "Recover and rejuvenate with steam rooms, saunas, physiotherapy, and massage therapy.",
    isWhite: true, // This makes it the middle white card
    hoverBgImage: "", // No hover image
  },
  {
    title: "Atmosphere",
    description:
      "Stay motivated in a vibrant, inspiring atmosphere with stunning aesthetics designed to elevate your experience.",
    isWhite: false,
    hoverBgImage: "/src/assets/images/home/wellness-hub/Practitioners.webp",
  },
];

export default function GymExperience() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section
      className="w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <div className="flex flex-col md:flex-row">
        {gymCards.map((card, index) => {
          const isHovered = hoveredIndex === index;

          const backgroundImage =
            isHovered && card.hoverBgImage
              ? `url(${card.hoverBgImage})`
              : "none";

          const isWhite = card.isWhite;

          return (
            <div
              key={index}
              className={`relative flex-1 min-h-[300px] p-8 flex flex-col justify-center transition-all duration-500 ease-in-out
              ${isWhite ? "bg-white text-black" : "bg-black/50 text-white"}
              ${isHovered && !isWhite ? "text-white" : ""}
              `}
              style={{
                backgroundImage: backgroundImage,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <h3 className="text-xl font-bold uppercase">{card.title}</h3>
              <p className="mt-4 text-sm leading-relaxed">
                {card.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
