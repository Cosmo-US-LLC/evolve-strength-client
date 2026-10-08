import React from "react";
import { LANSDOWNE, LANSDOWNE_IMAGES } from "@/constants/lansdowneWaitlist";

function LansdowneSpaceShowcase() {
  return (
    <section className="w-full bg-white">
      <div className="relative overflow-hidden w-full min-h-[420px] md:min-h-[667px]">
        <img
          src={LANSDOWNE_IMAGES.space.desktop}
          alt="Evolve Strength Lansdowne training floor"
          className="hidden md:block absolute inset-0 w-full h-full object-cover"
        />
        <img
          src={LANSDOWNE_IMAGES.space.mobile}
          alt="Evolve Strength Lansdowne training floor"
          className="block md:hidden absolute inset-0 w-full h-full object-cover"
        />

        <div className="relative z-10 flex md:items-center items-end min-h-[420px] md:min-h-[667px] max-w-[1280px] mx-auto px-4 py-12 md:px-8 md:py-[50px]">
          <div className="w-full max-w-[500px] flex flex-col items-start gap-2 md:gap-4">
            <p className="!text-[16px] !font-[500] text-[#4AB04A] uppercase !font-[Kanit] leading-[24px] m-0">
              The Space
            </p>
            <h2 className="text-white uppercase m-0 !text-[32px] md:!text-[40px] !leading-[34px] md:!leading-[39px]">
              Room for every
              <br className="hidden md:block" />
              training style
            </h2>
            <p className="!text-[16px] md:!text-[18px] !font-[300] text-white !font-[Kanit] leading-[24px] md:leading-[27px] m-0">
              Whatever your discipline, there's room for it here.
            </p>
            <ul className="flex flex-wrap gap-2 md:gap-3 list-none p-0 m-0 mt-2">
              {LANSDOWNE.disciplines.map((d) => (
                <li
                  key={d}
                  className="backdrop-blur-[12px] bg-white/10 border border-white/40 text-white uppercase text-[12px] md:text-[14px] font-[600] font-[Kanit] tracking-[1px] px-4 py-2 rounded-full"
                >
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LansdowneSpaceShowcase;
