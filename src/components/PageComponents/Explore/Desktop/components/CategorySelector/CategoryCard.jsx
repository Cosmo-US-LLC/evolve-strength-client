import React from "react";
import { ArrowDownCircle, ArrowUpCircle } from "lucide-react";

function CategoryCard({ card, selected, onClick }) {
  return (
    <div
      onClick={onClick}
      className="relative w-[400px] h-[254px] rounded-[8px] overflow-hidden cursor-pointer transition-all duration-200"
      style={{
        backgroundImage: `url(${card.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        filter: selected ? "none" : "brightness(0.9)",
      }}
    >
      <div
        className={`
          absolute bottom-0 left-0 right-0 z-10 h-[75px]
          ${selected ? "bg-[#4AB04A]" : ""}
        `}
      />

      <div className="max-w-[333px] absolute top-6 left-5 right-5 text-[#fff] z-20 text-[15px] font-[500] leading-[16px]">
        {card.description}
      </div>

      <div className="absolute left-5 bottom-[22px] text-[#fff] z-20 font-[600] font-[kanit] text-[24px] leading-[25px] flex items-center justify-between w-[calc(100%-2.5rem)]">
        <span>{card.title}</span>
        <div
          className={`
            flex items-center justify-center w-8 h-8 rounded-full transition-transform duration-200 
            ${selected ? "rotate-180" : "rotate-0"}
          `}
        >
          <ArrowUpCircle className="w-6 h-6 text-white transition-all duration-300" />
        </div>
      </div>
    </div>
  );
}

export default CategoryCard;
