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
      className="bg-white md:bg-[#F9F9F9] relative overflow-hidden pt-12 md:pt-0 md:h-[677px] md:flex md:items-center"
      ref={elementRef}
    >
      <style>{scrollAnimation}</style>
      <div className="w-full max-w-[1280px] md:max-w-[1440px] px-4 md:pl-[112px] md:pr-[100px] mx-auto flex flex-col md:flex-row items-center justify-between gap-12 md:gap-10">
        <div className="w-full md:w-[650px] md:shrink-0">
          <p className="!text-[16px] !font-[500] text-[#4AB04A] uppercase !font-[Kanit] leading-[24px] m-0 mb-2">
            For Practitioners
          </p>
          <h2 className="text-[#1C1C1C] uppercase text-[40px] leading-[39px] max-md:!text-[40px] max-md:!leading-[39px] mb-3 md:mb-4">
            Office space, built for practitioners
          </h2>
          <h4 className="des text-[#000] mb-5 md:mb-6 max-w-xl md:max-w-none !text-[14px] !leading-[22px] md:!text-[18px] md:!leading-[27px]">
            Twenty private offices and two larger anchor tenant spaces for
            health and wellness services, sized for solo practitioners, growing
            teams, and established clinics. Build your practice alongside an
            active member base.
          </h4>

          <div className="flex gap-2 md:gap-4 mb-8 md:mb-8">
            <Link to={LANSDOWNE.leasingUrl}>
              <button className="btnPrimary max-md:!text-[16px] max-md:!py-[14px] max-md:!px-4 max-md:!rounded-[5px] md:!rounded-[6px] md:!px-6 md:!py-[14px]">Inquire About Leasing</button>
            </Link>
          </div>

          <div className="flex flex-col md:flex-row gap-8 md:gap-14">
            {[
              { label: "Private Offices", value: officeCount },
              { label: "Anchor Tenant Spaces", value: anchorCount },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex items-center gap-4 h-[78px] md:block md:h-auto"
              >
                <p className="order-3 text-[16px] leading-[25px] font-[400] font-[Vazirmatn] text-[#000] m-0 md:mb-2 md:min-w-[161px] md:border-b md:border-[#00000042] md:pb-2">
                  {stat.label}
                </p>
                <span
                  className="order-2 block w-px h-[46px] bg-[#00000042] md:hidden"
                  aria-hidden="true"
                />
                <p className="order-1 text-[56px] text-kanit font-[600] leading-[56px] text-[#000] m-0 md:mt-2 md:mb-0">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full md:w-[491px] md:shrink-0 relative flex justify-end gap-2 md:gap-[21px] h-[480px] md:h-[677px] overflow-hidden">
          <div className="md:hidden pointer-events-none absolute top-0 left-0 right-0 h-[100px] z-10 bg-gradient-to-b from-white to-transparent" />
          <div className="overflow-hidden group relative flex-1 min-w-0 md:flex-none">
            <div className="flex flex-col gap-2 md:gap-[14px] animate-[scroll-up_30s_linear_infinite] group-hover:[animation-play-state:paused]">
              {[
                ...LANSDOWNE_IMAGES.officesColumnA,
                ...LANSDOWNE_IMAGES.officesColumnA,
              ].map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`lansdowne-office-${i}`}
                  className="rounded-[10px] md:rounded-xl object-cover w-full md:w-[235px] h-[258px] md:h-[325px]"
                />
              ))}
            </div>
          </div>

          <div className="overflow-hidden group relative flex-1 min-w-0 md:flex-none">
            <div className="flex flex-col gap-2 md:gap-[14px] animate-[scroll-down_30s_linear_infinite] group-hover:[animation-play-state:paused]">
              {[
                ...LANSDOWNE_IMAGES.officesColumnB,
                ...LANSDOWNE_IMAGES.officesColumnB,
              ].map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`lansdowne-office-${i + 4}`}
                  className="rounded-[10px] md:rounded-xl object-cover w-full md:w-[235px] h-[258px] md:h-[361px]"
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
