import React from "react";
import downicon from "@/assets/images/Locations/icon_down.svg";

const TrainerCard = ({ trainer, index, onTrainerClick }) => {
  return (
    <div className="md:flex-[0_0_20.5%] flex-[0_0_100%] relative">
      <img
        src={trainer.image}
        alt={trainer.name}
        className="md:w-[400px] w-full md:h-[273px] h-[300px] rounded-2xl object-cover"
      />
      <div className="md:w-[253px] w-full h-[95px] bg-[#F6F6F6] border-[10px] mt-2 justify-center rounded-2xl border-transparent">
        <div className="w-full h-[95px] bg-[#F6F6F6] rounded-[10px] flex justify-between">
          {/* Left: Name + Description */}
          <div className="flex flex-col w-[full]">
            <h3 className="text-[#000] leading-tight">{trainer.name}</h3>
            <p className="text-[#767676]">{trainer.specialty || trainer.role}</p>
          </div>

          {/* Right: Down Button */}
          <button
            className="w-6 h-6 flex justify-center mt-6 mr-1 rounded-full border border-black"
            onClick={() => onTrainerClick(index)}
          >
            <img src={downicon} alt="More" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrainerCard;
