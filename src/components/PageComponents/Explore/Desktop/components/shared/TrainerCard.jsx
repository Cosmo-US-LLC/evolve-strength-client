import React from "react";
import { Check, ChevronDown, CircleChevronDown } from "lucide-react";

function TrainerCard({ trainer, selected, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`
        relative cursor-pointer transition-all duration-200 rounded-[10px] overflow-hidden max-w-[260px]
        ${selected ? "bg-[#4AB04A]" : ""}
      `}
    >
      <div className="relative">
        <img
          src={trainer.image}
          alt={trainer.name}
          className="w-full h-auto object-cover"
        />
      </div>

      <div className="overflow-hidden w-full h-[100px] flex flex-row items-center pt-5 px-3">
        <div className="flex flex-col gap-2 w-[90%] h-full  ">
          <div
            className={`
              font-kanit font-[500] text-[20px] leading-[18px]
              ${selected ? "text-[#fff]" : "text-[#000]"}
            `}
          >
            {trainer.name}
          </div>

          <div
            className={`
              font-kanit font-[400] text-[16px] leading-[18px]
              ${selected ? "text-[#fff]" : "text-[#767676]"}
            `}
          >
            {trainer.title}
          </div>
        </div>

        <div className="ml-3 flex-row items-start w-[10%] h-full ">
          <CircleChevronDown
            className={`transition-transform duration-200 ${
              selected ? "rotate-0  text-[#fff]" : "rotate-180 text-[#000]"
            }`}
          />
        </div>
      </div>
    </div>
  );
}

export default TrainerCard;
