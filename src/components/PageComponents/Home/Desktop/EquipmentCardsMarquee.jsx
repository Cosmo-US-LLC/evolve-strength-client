import React from "react";
import Marquee from "react-fast-marquee";

function EquipmentCardsMarquee({ items = [], direction = "left", speed = 40 }) {
  return (
    <div className="w-full">
      <Marquee
        pauseOnHover
        speed={speed}
        gradient={false}
        direction={direction}
        className="overflow-hidden"
      >
        {items.map((card, idx) => (
          <div
            key={idx}
            className="
              bg-white flex flex-col gap-[10px] items-start overflow-hidden p-2 my-1
              rounded-[8px] shrink-0 mx-2

              w-[286.667px] max-md:w-[150px] 
              shadow-[0px_0px_0px_0.894px_rgba(74,176,74,0.12),0px_2.682px_2.682px_-1.341px_rgba(74,176,74,0.04),0px_5.364px_5.364px_-2.682px_rgba(74,176,74,0.04),0px_0.894px_0.894px_-0.447px_rgba(74,176,74,0.04),0px_10.728px_10.728px_-5.364px_rgba(74,176,74,0.04)]
            "
          >
            <div
              className="
                w-full relative overflow-hidden rounded-[6px]
                h-[300px] max-md:h-[150px]
              "
            >
              <img
                alt={card.label}
                src={card.image}
                className="absolute inset-0 w-full h-full object-cover object-center rounded-[6px]"
                style={{ imageRendering: "auto", WebkitImageRendering: "auto" }}
              />
            </div>

            <div className="flex flex-col justify-center w-full text-center">
              <p className="
                text-[#1c1c1c] font-Kanit font-[300]
                text-[14px] leading-[22px]
                max-md:text-[12px] max-md:leading-[20px]
              ">
                {card.label}
              </p>
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
}

export default EquipmentCardsMarquee;
