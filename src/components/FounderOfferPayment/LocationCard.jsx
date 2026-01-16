import React from "react";

function LocationCard() {
  return (
    <div className="bg-[#fcfcfc] border border-[#d4d4d4] rounded-[8px] px-6 py-4">
      <div className="flex flex-col gap-1">
        <p className="font-['Vazirmatn'] font-light text-[#393939] text-[14px]">
          Your Membership at
        </p>
        <p className="font-['Kanit'] font-bold text-black text-[24px] uppercase leading-[24px]">
          South Edmonton Common
        </p>
      </div>
    </div>
  );
}

export default LocationCard;

