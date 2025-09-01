import React from "react";
import { Link } from "react-router-dom";

function WellnessPricingRoom() {
  return (
    <div className="relative WellnessPricingRoomBG">
      {/* <div className="absolute top-0 left-0 z-1 w-full h-full bg-black/40" /> */}
      <div className="max-w-[1280px] px-4 md:px-8 pb-[80px] mx-auto w-full h-full">
        <div className="relative z-2 flex  flex-col items-start justify-end h-full">
          <h2 className="text-[#FFFFFF] uppercase max-w-[560px] !font-[700] leading-[39px] mb-5">
            Premium Wellness, Affordable Pricing
          </h2>
          <p className="text-[#FFFFFF] description !font-[400] max-w-[542px] leading-[24px] mb-6">
            Our wellness services are open to everyone. You do not need to join
            the gym to book a session. Independent specialists set fair and
            transparent rates, so you get expert care at a price that makes
            sense.
          </p>
          <div className="flex gap-6">
            <Link to="/explore?category=wellness">
              <button className="btnPrimary">Find a wellness expert</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WellnessPricingRoom;
