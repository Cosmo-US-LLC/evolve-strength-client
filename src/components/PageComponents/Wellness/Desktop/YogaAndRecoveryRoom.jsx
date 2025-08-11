import React from "react";
import { Link } from "react-router-dom";

function YogaAndRecoveryRoom() {
  return (
    <div className="relative YogaAndRecoveryRoomBG">
      {/* <div className="absolute top-0 left-0 z-1 w-full h-full bg-black/40" /> */}
      <div className="max-w-[1280px] px-4 md:px-8 pb-[80px] mx-auto w-full h-full">
        <div className="relative z-2 flex  flex-col items-start justify-end h-full">
          <h2 className="text-[#FFFFFF] uppercase max-w-[560px] !font-[700] leading-[39px] mb-5">
            Yoga for Recovery and Balance
          </h2>
          <p className="text-[#FFFFFF] description !font-[400] max-w-[542px] leading-[24px] mb-6">
            Improve flexibility, posture, and stress relief with guided yoga
            support. Offered in quiet, dedicated spaces.
          </p>
          <div className="flex gap-6">
            
            <Link to="/explore">
            <button className="btnPrimary">FIND A wellness expert</button>
            </Link> 


          </div>
        </div>
      </div>
    </div>
  );
}

export default YogaAndRecoveryRoom;
