import React from "react";
import { Check, ChevronDown } from "lucide-react";

function TrainerCard({ trainer, selected, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`
        relative cursor-pointer transition-all duration-200 rounded-[10px] overflow-hidden max-w-[260px] h-[360px]
        ${selected ? "bg-[#4AB04A]" : ""}
      `}
    >
      {/* Trainer Image - Takes up most of the card */}
      <div className="relative">
        <img
          src={trainer.image}
          alt={trainer.name}
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Trainer Info Section */}
      <div className="p-4 flex items-center justify-between">
        <div className="flex-1">
          {/* Trainer Name */}
          <div
            className={`
              font-bold text-lg mb-1
              ${selected ? "text-white" : "text-gray-900"}
            `}
          >
            {trainer.name}
          </div>

          {/* Trainer Title */}
          <div
            className={`
              text-sm leading-tight
              ${selected ? "text-white" : "text-gray-600"}
            `}
          >
            {trainer.title}
          </div>
        </div>

        {/* Dropdown Chevron Icon */}
        <div className="ml-3">
          <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center border border-gray-300">
            <ChevronDown className="w-3 h-3 text-gray-600" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrainerCard;
