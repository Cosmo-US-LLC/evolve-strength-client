import React from "react";
import firstBannerImageDesktop from "@/assets/images/PresaleParkRoyal/first_banner.jpg";
import firstBannerImageMobile from "@/assets/images/PresaleParkRoyal/first_banner_mobile.jpg";

function ParkRoyalFirstBanner() {
  return (
    <section className="relative w-full h-[420px] md:h-[700px] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center md:hidden"
        style={{ backgroundImage: `url(${firstBannerImageMobile})` }}
      />
      <div
        className="absolute inset-0 hidden bg-cover bg-center md:block"
        style={{ backgroundImage: `url(${firstBannerImageDesktop})` }}
      />
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative z-10 max-w-[1280px] mx-auto px-4 md:px-8 h-full flex flex-col items-center justify-end text-center pb-10 md:pb-14">
        <h2 className="font-[Kanit] !font-[700] uppercase text-white !text-[28px] md:!text-[40px] !leading-[34px] md:!leading-[39px] max-w-[800px]">
          Not Everyone Gets<br></br> To Be First. You Do
        </h2>
        <p className="mt-2 !text-[16px] md:!text-[18px] font-[300] font-[Kanit] !leading-[22px] md:!leading-[27px] text-white">
          Evolve Strength, Park Royal
        </p>
      </div>
    </section>
  );
}

export default ParkRoyalFirstBanner;
