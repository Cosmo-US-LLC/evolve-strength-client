import React from "react";
import Jointoday from "@/assets/images/Locations/JoinToday.webp";

function JoinUsToday({
  locationImage = Jointoday,

}) {
  return (
       <div className="relative h-[700px] ">
      <img
        src={locationImage}
        alt="Join Evolve Today"
        className="absolute inset-0 w-full h-full  object-cover"
      />
      <div className="relative z-10 max-w-[1280px] mx-auto w-full h-full px-4 md:px-8 md:pb-[130px] pb-[30px] space-y-[18px] flex flex-col items-start justify-end">
        <h2 className="!text-[#FFF] uppercase !leading-[50px] !text-[50px] font-[600] ">
          Join Evolve <br /> Strength Today
        </h2>
        <h4 className="h4 !font-vazirmatn !font-[400] text-[#fff] !leading-[25px]">
          Book a free tour and explore what Evolve has to offer. <br />
          Experience the space. Meet our team. See the difference.
        </h4>
        <div className="flex justify-start items-start ">
          <button className="btnPrimary">BOOK A FREE TOUR</button>
        </div>
      </div>
    </div>
  );
}

export default JoinUsToday;
