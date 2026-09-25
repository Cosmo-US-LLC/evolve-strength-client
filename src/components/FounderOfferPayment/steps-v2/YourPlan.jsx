import React from "react";
import DueTodayAmount from "../DueTodayAmount";

function YourPlan({
  locationName = "South Edmonton Common",
  dueToday = "$0.00",
  className = "",
}) {
  return (
    <div
      className={`rounded-[12px] bg-[#2E2E2E] px-5 py-5 text-white md:px-6 ${className}`}
    >
      <div className="flex items-center justify-between gap-4 pb-4 md:pb-5">
        <span className="font-['Kanit'] text-[16px] font-semibold uppercase leading-none tracking-[0.12em] md:text-[18px]">
          Due Today
        </span>
        <DueTodayAmount
          value={dueToday}
          className="text-[40px] text-[#4AB04A] md:text-[48px]"
        />
      </div>

      <div className="border-t border-white/10 pt-4 md:pt-5">
        <p className="font-['Vazirmatn'] text-[13px] font-light leading-none text-white/90 md:text-[14px]">
          Your Membership at
        </p>
        <h2 className="mt-2 font-['Kanit'] text-[24px] font-bold uppercase leading-[1.1] md:text-[28px]">
          {locationName}
        </h2>
      </div>
    </div>
  );
}

export default YourPlan;
