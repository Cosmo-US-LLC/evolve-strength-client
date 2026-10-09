import React from "react";
import useCounter from "@/hooks/useCounter";
import { LANSDOWNE, LANSDOWNE_IMAGES } from "@/constants/lansdowneWaitlist";
import facilityLeftImage from "@/assets/images/Lansdowne/lansdowne-facility-left.webp";

const facilityStats = [
  { target: LANSDOWNE.sqFt, suffix: "", label: "Sq. Ft. Facility", mobileValue: "33K" },
  { target: LANSDOWNE.privateOffices, suffix: "", label: "Private Offices" },
  { target: LANSDOWNE.anchorSpaces, suffix: "", label: "Anchor Tenant Spaces" },
];

function AnimatedStat({ target, suffix, label, mobileValue }) {
  const { count, elementRef } = useCounter(target, 2000);

  return (
    <div
      ref={elementRef}
      className="flex-1 bg-[#F9F9F9] rounded-[12px] px-3 py-[18px] h-[124px] md:h-auto md:py-6 flex flex-col items-center justify-center gap-2 text-center"
    >
      <p className="!text-[28px] md:!text-[40px] leading-[normal] md:leading-[39px] font-[600] text-black uppercase !font-[Kanit] m-0">
        {mobileValue && <span className="md:hidden">{mobileValue}</span>}
        <span className={mobileValue ? "hidden md:inline" : undefined}>
          {count.toLocaleString("en-US")}
          {suffix}
        </span>
      </p>
      <p className="!text-[13px] md:!text-[18px] !font-[300] text-black !font-[Kanit] leading-[normal] md:leading-[20px] m-0">
        {label}
      </p>
    </div>
  );
}

function LansdowneFacilityShowcase() {
  const scrollToWaitlist = () => {
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="w-full pt-4 pb-14 md:py-16 bg-white">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 flex flex-col items-center gap-5 md:gap-[30px]">
        <div className="flex flex-col gap-5 md:gap-3 w-full max-w-[786px] lg:max-w-[1000px] text-left md:text-center">
          <h2 className="text-black uppercase m-0 !text-[26px] md:!text-[32px] !leading-[1.15] md:!leading-[32px] md:!leading-[32px]">
            The new standard for strength in Richmond
          </h2>
          <p className="!text-[16px] md:!text-[18px] !font-[300] !font-[Kanit] text-black leading-[27px] m-0 lg:whitespace-nowrap">
            Top-tier equipment, free onsite parking, strength &amp; cardio zones.
            Health and wellness under one roof.
          </p>
        </div>

        <div className="w-full flex flex-row flex-wrap md:flex-nowrap md:items-center gap-x-[10px] gap-y-5 md:gap-10">
          <div className="w-[calc(50%-5px)] md:w-full md:flex-1 min-w-0 order-1">
            <img
              src={facilityLeftImage}
              alt="Evolve Strength Lansdowne gym floor"
              className="w-full h-[230px] md:h-[489px] object-cover object-[45%_50%] rounded-[8px]"
            />
          </div>

          <div className="w-full md:flex-1 min-w-0 flex flex-col gap-5 md:gap-6 order-3 md:order-2">
            <div className="flex flex-row md:flex-col gap-2 md:h-[413px]">
              {facilityStats.map((stat) => (
                <AnimatedStat key={stat.label} {...stat} />
              ))}
            </div>

            <button
              type="button"
              className="btnPrimary uppercase w-full"
              onClick={scrollToWaitlist}
            >
              Join the Waitlist
            </button>
          </div>

          <div className="w-[calc(50%-5px)] md:w-full md:flex-1 min-w-0 order-2 md:order-3">
            <img
              src={LANSDOWNE_IMAGES.facilityFloor}
              alt="Evolve Strength Lansdowne gym floor"
              className="w-full h-[230px] md:h-[489px] object-cover rounded-[8px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default LansdowneFacilityShowcase;
