import React from "react";
import useCounter from "@/hooks/useCounter";
import { LANSDOWNE, LANSDOWNE_IMAGES } from "@/constants/lansdowneWaitlist";

const facilityStats = [
  { target: LANSDOWNE.sqFtShort, suffix: "K", label: "Sq. Ft. Facility" },
  { target: LANSDOWNE.privateOffices, suffix: "", label: "Private Offices" },
  { target: LANSDOWNE.anchorSpaces, suffix: "", label: "Anchor Tenant Spaces" },
];

function AnimatedStat({ target, suffix, label }) {
  const { count, elementRef } = useCounter(target, 2000);

  return (
    <div
      ref={elementRef}
      className="flex-1 bg-[#F9F9F9] rounded-[12px] p-4 md:p-6 flex flex-col items-center justify-center gap-2 md:gap-3 text-center"
    >
      <p className="!text-[28px] md:!text-[40px] leading-[39px] font-[600] text-black uppercase !font-[Kanit] m-0">
        {count}
        {suffix}
      </p>
      <p className="!text-[14px] md:!text-[18px] !font-[300] text-black !font-[Kanit] leading-[20px] m-0">
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
    <section className="w-full py-12 md:py-16 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 flex flex-col lg:flex-row gap-6 md:gap-8">
        <div className="w-full lg:w-[400px] shrink-0">
          <img
            src={LANSDOWNE_IMAGES.facilityTall}
            alt="Evolve Strength Lansdowne reception"
            className="w-full h-[320px] md:h-[500px] object-cover rounded-lg"
          />
        </div>

        <div className="flex-1 flex flex-col gap-6 md:gap-8 min-w-0">
          <div className="flex flex-col gap-3">
            <h2 className="text-black uppercase m-0 !text-[24px] md:!text-[32px] !leading-[28px] md:!leading-[32px]">
              The new standard for strength in Richmond
            </h2>
            <p className="!text-[16px] md:!text-[18px] !font-[300] !font-[Kanit] text-black leading-[24px] md:leading-[27px] m-0">
              Premium equipment, dedicated turf, saunas, and on-site health and
              wellness, all under one roof.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-stretch flex-1">
            <div className="w-full md:flex-1 min-w-0">
              <img
                src={LANSDOWNE_IMAGES.facilityFloor}
                alt="Evolve Strength Lansdowne gym floor"
                className="w-full h-[280px] md:h-full md:min-h-[400px] object-cover rounded-lg"
              />
            </div>

            <div className="w-full md:w-[354px] shrink-0 flex flex-col gap-2">
              {facilityStats.map((stat) => (
                <AnimatedStat key={stat.label} {...stat} />
              ))}

              <button
                type="button"
                className="btnPrimary uppercase w-full mt-1"
                onClick={scrollToWaitlist}
              >
                Join the Waitlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LansdowneFacilityShowcase;
