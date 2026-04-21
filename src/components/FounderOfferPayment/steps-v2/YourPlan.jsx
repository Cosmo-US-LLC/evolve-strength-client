import React from "react";

function YourPlan({
  locationName = "South Edmonton Common",
  dueToday = "$0.00",
  className = "",
}) {
  return (
    <div
      className={`rounded-[8px] bg-[#2E2E2E] px-4 py-4 text-white space-y-2 ${className}`}
    >
      <p className="text-sm font-light">Your Membership at</p>
      <h2 className="text-2xl font-bold uppercase leading-[1.15]">
        {locationName}
      </h2>
      <div className="flex items-baseline font-kanit">
        <span className="text-lg text-[#4AB04A]">Due today:</span>&nbsp;
        <span className="text-2xl text-[#4AB04A] font-semibold">
          {dueToday}
        </span>
      </div>
    </div>
  );
}

export default YourPlan;
