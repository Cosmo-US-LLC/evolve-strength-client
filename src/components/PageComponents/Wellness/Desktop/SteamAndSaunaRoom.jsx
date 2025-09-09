import React from "react";
import { Link } from "react-router-dom";

function SteamAndSaunaRoom() {
  return (
    <div className="relative SteamAndSaunaRoomBG">
      {/* <div className="absolute top-0 left-0 z-1 w-full h-full bg-black/40" /> */}
      <div className="max-w-[1280px] px-4 md:px-8 pb-[90px] mx-auto w-full h-full">
        <div className="relative z-2 flex  flex-col items-start justify-end h-full">
          <h2 className="text-[#FFFFFF] uppercase max-w-[560px] !font-[700] leading-[39px] mb-5">
            More Ways to Recover and Restore
          </h2>
          <h4 className="text-[#FFFFFF] !font-[Vazirmatn] md:!font-[300] !font-[400] max-w-[552px] leading-[24px] mb-6">
            With our steam rooms and saunas, relax sore muscles, boost
            circulation, and recover faster with heat therapy. Available at most
            Evolve locations.
          </h4>
          <div className="flex gap-6">
            <Link to="https://tour.evolvestrength.ca/tour-form">
              <button className="btnPrimary">Book a Tour</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SteamAndSaunaRoom;
