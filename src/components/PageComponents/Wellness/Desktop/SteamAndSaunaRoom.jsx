import React from "react";

function SteamAndSaunaRoom() {
  return (
    <div className="relative SteamAndSaunaRoomBG">
      {/* <div className="absolute top-0 left-0 z-1 w-full h-full bg-black/40" /> */}
      <div className="max-w-[1280px] px-4 md:px-8 pb-[90px] mx-auto w-full h-full">
        <div className="relative z-2 flex  flex-col items-start justify-end h-full">
          <h2 className="text-[#FFFFFF] uppercase max-w-[560px] !font-[700] leading-[39px] mb-5">
            Steam Rooms and Sauna
          </h2>
          <p className="text-[#FFFFFF] description !font-[400] max-w-[542px] leading-[24px] mb-6">
            Relax sore muscles, boost circulation, and recover faster with heat
            therapy. Available at most Evolve locations.
          </p>
          <div className="flex gap-6"></div>
        </div>
      </div>
    </div>
  );
}

export default SteamAndSaunaRoom;
