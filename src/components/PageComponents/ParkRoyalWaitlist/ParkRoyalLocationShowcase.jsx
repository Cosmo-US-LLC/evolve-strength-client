import React from "react";

function ParkRoyalLocationShowcase() {
  return (
    <section className="w-full bg-white">
      <div className="relative overflow-hidden w-full min-h-[420px] md:min-h-[667px]">
        <img
          src="https://evolve-strength.tor1.digitaloceanspaces.com/media/1784194417531-22c0ab72-7d3b-476e-96f4-9d9952580a94.webp"
          alt="Evolve Strength Park Royal location"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(0,0,0,0)_28.2%,rgba(0,0,0,0.8)_72.8%),linear-gradient(41deg,rgba(0,0,0,0.43)_15.4%,rgba(0,0,0,0)_58.5%)]" />

        <div className="relative z-10 flex items-center justify-end min-h-[420px] md:min-h-[667px] max-w-[1280px] mx-auto px-4 py-12 md:px-8 md:py-[50px]">
          <div className="w-full max-w-[500px] flex flex-col items-start gap-2 md:gap-4">
            <p className="!text-[16px] !font-[500] text-[#4AB04A] uppercase !font-[Kanit] leading-[24px] m-0">
              The Location
            </p>
            <h2 className="text-white uppercase m-0 !text-[32px] md:!text-[40px] !leading-[34px] md:!leading-[39px]">
              Right in Park Royal.
            </h2>
            <p className="!text-[16px] md:!text-[18px] !font-[300] text-white !font-[Kanit] leading-[24px] md:leading-[27px] m-0">
              815 Park Royal N, West Vancouver, minutes from the Lions Gate
              Bridge and steps from the North Shore's best shopping and dining.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ParkRoyalLocationShowcase;
