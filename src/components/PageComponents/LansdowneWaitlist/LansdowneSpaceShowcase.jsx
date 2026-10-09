import React from "react";
import { LANSDOWNE } from "@/constants/lansdowneWaitlist";
import spaceBanner from "@/assets/images/Lansdowne/lansdowne-space-banner.webp";
import spaceMobile from "@/assets/images/Lansdowne/lansdowne-space-mobile.webp";

function LansdowneSpaceShowcase() {
  return (
    <section className="w-full bg-white">
      <div className="relative overflow-hidden w-full min-h-[700px] min-[1440px]:min-h-[48.61vw]">
        <img
          src={spaceBanner}
          alt="Evolve Strength Lansdowne training floor"
          className="hidden md:block absolute inset-0 w-full h-full object-cover object-[50%_60%]"
        />
        <img
          src={spaceMobile}
          alt="Evolve Strength Lansdowne training floor"
          className="block md:hidden absolute inset-0 w-full h-full object-cover"
        />

        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none md:hidden bg-[linear-gradient(238.65deg,rgba(0,0,0,0)_21.09%,rgba(0,0,0,0.8)_66.192%),linear-gradient(-82.52deg,rgba(0,0,0,0.43)_22.626%,rgba(0,0,0,0)_56.891%)]"
        />
        <div
          aria-hidden
          className="hidden md:block absolute inset-0 pointer-events-none bg-[linear-gradient(233.34deg,rgba(0,0,0,0)_38.119%,rgba(0,0,0,0.8)_65.617%)]"
        />

        <div className="relative z-10 flex md:items-center items-end min-h-[700px] min-[1440px]:min-h-[48.61vw] max-w-[1440px] mx-auto px-4 py-[50px] md:px-[100px]">
          <div className="w-full max-w-[500px] flex flex-col items-start gap-2">
            <p className="!text-[16px] !font-[500] text-[#4AB04A] uppercase !font-[Kanit] leading-[24px] m-0">
              The Space
            </p>
            <div className="flex flex-col items-start gap-4">
              <h2 className="text-white uppercase m-0 !text-[40px] !leading-[39px]">
                Room for every
                <br />
                training style
              </h2>
              <p className="!text-[18px] !font-[300] text-white !font-[Kanit] leading-[27px] m-0">
                33,000 sq. ft. of premium space, designed for every style of training.
              </p>
            </div>
            <ul className="flex flex-wrap gap-2 list-none p-0 m-0 pt-4 md:pt-5">
              {LANSDOWNE.disciplines.map((d) => (
                <li
                  key={d}
                  className="backdrop-blur-[6px] bg-white/[0.08] border border-white/[0.28] text-white uppercase text-[12px] md:text-[13px] font-[500] font-[Kanit] tracking-[0.72px] md:tracking-[0.78px] px-[14px] py-2 md:px-4 md:py-[9px] rounded-full"
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
