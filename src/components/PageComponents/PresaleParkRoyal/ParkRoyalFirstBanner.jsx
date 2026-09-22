import React from "react";

// Hosted directly (not bundled) at the client's request.
const firstBannerImageDesktop =
  "https://assets.evolvestrength.ca/media/1790077528647-50dccbd4-6fa4-4d49-b8a4-2150a28d6354.webp";
const firstBannerImageMobile =
  "https://assets.evolvestrength.ca/media/1790000817464-8bb63a77-a0a2-403e-b597-10454c6b9f48.webp";

function ParkRoyalFirstBanner() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center md:hidden"
        style={{ backgroundImage: `url(${firstBannerImageMobile})` }}
      />
      <div
        className="absolute inset-0 hidden bg-cover bg-center md:block"
        style={{ backgroundImage: `url(${firstBannerImageDesktop})` }}
      />
      {/* <div className="absolute inset-0 bg-black/30" /> */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-4 md:px-8 h-full flex flex-col items-center justify-end text-center pb-16 md:pb-20">
        <h2 className="font-[Kanit] !font-[700] uppercase text-white !text-[28px] md:!text-[40px] !leading-[34px] md:!leading-[39px] max-w-[800px]">
          {/* Not Everyone Gets<br></br> To Be First. You Do */}
          YOU'RE IN BEFORE WE GO PUBLIC
        </h2>
        <p className="mt-2 !text-[16px] md:!text-[18px] font-[300] font-[Kanit] !leading-[22px] md:!leading-[27px] text-white">
          Evolve Strength, Park Royal
        </p>
      </div>
    </section>
  );
}

export default ParkRoyalFirstBanner;
