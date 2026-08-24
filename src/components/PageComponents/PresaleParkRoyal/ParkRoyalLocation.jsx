import React from "react";
import locationBgImageDesktop from "@/assets/images/PresaleParkRoyal/location_bg.jpg";
import locationBgImageMobile from "@/assets/images/PresaleParkRoyal/location_bg_mobile.jpg";

function ParkRoyalLocation() {
  return (
    <section className="relative w-full h-[420px] md:h-[700px] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center md:hidden"
        style={{ backgroundImage: `url(${locationBgImageMobile})` }}
      />
      <div
        className="absolute inset-0 hidden bg-cover bg-center md:block"
        style={{ backgroundImage: `url(${locationBgImageDesktop})` }}
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 max-w-[1280px] mx-auto px-4 md:px-8 h-full flex flex-col justify-end items-start pb-8 md:justify-center md:items-end md:pb-0">
        <div className="flex flex-col items-start text-left">
          <p className="uppercase font-[500] font-[Kanit] text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-[#4ab04a] mb-2">
            The Location
          </p>
          <h2 className="font-[Kanit] !font-[700] uppercase text-white !text-[28px] md:!text-[40px] !leading-[34px] md:!leading-[39px]">
            West Vancouver, BC
          </h2>
          <p className="mt-2 !text-[16px] md:!text-[18px] font-[300] font-[Kanit] !leading-[22px] md:!leading-[27px] text-white">
            815 Park Royal North V7T 1H9
          </p>
        </div>
      </div>
    </section>
  );
}

export default ParkRoyalLocation;
