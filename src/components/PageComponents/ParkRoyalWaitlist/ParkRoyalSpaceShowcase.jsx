import React from "react";

function ParkRoyalSpaceShowcase() {
  return (
    <section className="w-full py-12 md:py-16 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center gap-8 md:gap-[80px]">
        <div className="flex-1 flex flex-col items-start gap-4 md:gap-[16px]">
          <p className="!text-[16px] !font-[500] text-[#4AB04A] uppercase !font-[Kanit] leading-[24px] m-0">
            The Space
          </p>
          <h2 className="text-black uppercase m-0">
            Room to train, without
            <br />
            the wait.
          </h2>
          <p className="!text-[18px] !font-[300] text-black !font-[Kanit] leading-[27px] m-0">
            Open, purpose built zones across 30,000 square feet, so you can
            lift, coach, and move without lining up for a rack.
          </p>
        </div>

        <div className="flex-1 w-full">
          <img
            src="https://evolve-strength.tor1.digitaloceanspaces.com/media/1784033823075-8a5a8f66-2921-4a56-b095-c5d0b1c76e07.webp"
            alt="Evolve Strength Park Royal Gym Floor"
            className="w-full h-[260px] md:h-[400px] object-cover rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}

export default ParkRoyalSpaceShowcase;
