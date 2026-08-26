import React from "react";

function ParkRoyalSpaceShowcase() {
  return (
    <section className="w-full bg-white">
      <div className="relative overflow-hidden w-full min-h-[420px] md:min-h-[667px]">
        {/* Desktop image */}
        <img
          src="https://assets.evolvestrength.ca/media/1784191958310-801be316-2715-4165-bf74-5c0a222e5833.webp"
          alt="Evolve Strength Park Royal training floor"
          className="hidden md:block absolute inset-0 w-full h-full object-cover"
        />
        {/* Mobile image — paste CDN URL in src */}
        <img
          src="https://assets.evolvestrength.ca/media/1784284481158-42228d3e-55ea-4326-8dd1-de9493b2c409.webp"
          alt="Evolve Strength Park Royal training floor"
          className="block md:hidden absolute inset-0 w-full h-full object-cover"
        />

        <div className="relative z-10 flex md:items-center items-end min-h-[420px] md:min-h-[667px] max-w-[1280px] mx-auto px-4 py-12 md:px-8 md:py-[50px]">
          <div className="w-full max-w-[500px] flex flex-col items-start gap-2 md:gap-4">
            <p className="!text-[16px] !font-[500] text-[#4AB04A] uppercase !font-[Kanit] leading-[24px] m-0">
              The Space
            </p>
            <h2 className="text-white uppercase m-0 !text-[32px] md:!text-[40px] !leading-[34px] md:!leading-[39px]">
              Room to train, without
              <br className="hidden md:block" />
              the wait
            </h2>
            <p className="!text-[16px] md:!text-[18px] !font-[300] text-white !font-[Kanit] leading-[24px] md:leading-[27px] m-0">
              Open, purpose built zones across 30,000 square feet, so you can
              lift, coach, and move without lining up for a rack.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ParkRoyalSpaceShowcase;
