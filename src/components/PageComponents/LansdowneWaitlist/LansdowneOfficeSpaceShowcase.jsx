import React from "react";
import { Link } from "react-router-dom";
import useCounter from "@/hooks/useCounter";
import { LANSDOWNE, LANSDOWNE_IMAGES } from "@/constants/lansdowneWaitlist";

const scrollAnimation = `
@keyframes scroll-up {
  0% { transform: translateY(0); }
  100% { transform: translateY(-50%); }
}
@keyframes scroll-down {
  0% { transform: translateY(-50%); }
  100% { transform: translateY(0); }
}
`;

function LansdowneOfficeSpaceShowcase() {
  const { count: officeCount, elementRef } = useCounter(
    LANSDOWNE.privateOffices,
    2000,
  );
  const { count: anchorCount } = useCounter(LANSDOWNE.anchorSpaces, 2000);

  return (
    <div
      className="bg-[#F9F9F9] relative overflow-hidden pt-10 md:pt-0"
      ref={elementRef}
    >
      <style>{scrollAnimation}</style>
      <div className="w-full max-w-[1280px] px-4 md:px-8 mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="w-full md:w-[50%]">
          <p className="!text-[16px] !font-[500] text-[#4AB04A] uppercase !font-[Kanit] leading-[24px] m-0 mb-2">
            For Practitioners
          </p>
          <h2 className="text-[#1C1C1C] uppercase mb-4 md:mb-6">
            Office space, built for practitioners
          </h2>
          <h4 className="des text-[#000] mb-8 max-w-xl leading-[26px]">
            Twenty private offices and two larger anchor tenant spaces inside
            the facility, sized for solo practitioners, growing teams, and
            established clinics. Build your practice alongside an active member
            base.
          </h4>

          <div className="flex gap-2 md:gap-4 mb-8 md:mb-8">
            <Link to={LANSDOWNE.leasingUrl}>
              <button className="btnPrimary">Inquire About Leasing</button>
            </Link>
          </div>

          <div className="flex flex-col md:flex-row gap-6 md:gap-10">
            {[
              { label: "Private Offices", value: officeCount },
              { label: "Anchor Tenant Spaces", value: anchorCount },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-[16px] md:text-[18px] leading-[25px] font-[400] font-[Vazirmatn] text-[#000] mb-1 border-b border-[#00000042] pb-2">
                  {stat.label}
                </p>
                <p className="text-[40px] md:text-[56px] text-kanit font-[500] leading-[50px] text-[#000] my-4">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full md:w-[50%] flex justify-end gap-8 h-[500px] md:h-[600px] overflow-hidden">
          <div className="overflow-hidden group relative">
            <div className="flex flex-col gap-6 animate-[scroll-up_30s_linear_infinite] group-hover:[animation-play-state:paused]">
              {[
                ...LANSDOWNE_IMAGES.officesColumnA,
                ...LANSDOWNE_IMAGES.officesColumnA,
              ].map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`lansdowne-office-${i}`}
                  className="rounded-xl object-cover w-[236px] h-[354px]"
                />
              ))}
            </div>
          </div>

          <div className="overflow-hidden group relative">
            <div className="flex flex-col gap-6 animate-[scroll-down_30s_linear_infinite] group-hover:[animation-play-state:paused]">
              {[
                ...LANSDOWNE_IMAGES.officesColumnB,
                ...LANSDOWNE_IMAGES.officesColumnB,
              ].map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`lansdowne-office-${i + 4}`}
                  className="rounded-xl object-cover w-[236px] h-[354px]"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LansdowneOfficeSpaceShowcase;
