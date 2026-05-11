import React from "react";
import { Link } from "react-router-dom";

import { southEdmontonCommonBookTourHref } from "@/constants/southEdmontonCommonTour";

function SouthEdmontonCommonBiggerEverythingIntro() {
  return (
    <section
      className="w-full bg-white py-10 md:py-12"
      aria-labelledby="south-common-bigger-everything-heading"
    >
      <div className="mx-auto max-w-[1280px] px-4 md:px-8 lg:px-[100px]">
        <div className="flex flex-col gap-10 py-8 lg:flex-row lg:items-center lg:gap-16 xl:gap-20 lg:rounded-br-[12px] lg:rounded-tr-[12px]">
          <h2
            id="south-common-bigger-everything-heading"
            className="text-[#000] uppercase !font-[600] text-[28px] leading-[34px] md:text-[36px] md:leading-[42px] lg:text-[40px] lg:leading-[46px] max-w-[632px] shrink-0"
          >
            Bigger Space. Bigger Equipment. Bigger Everything.
          </h2>
          <div className="flex min-w-0 flex-1 flex-col items-start gap-4">
            <p className="text-[#000] !font-[Kanit] text-[16px] font-normal leading-[24px] md:text-[18px] md:leading-[26px]">
              This gym makes you want to use the space. Come see it for yourself.
            </p>
            <Link to={southEdmontonCommonBookTourHref()}>
              <button type="button" className="btnPrimary uppercase">
                Book a Free Tour
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SouthEdmontonCommonBiggerEverythingIntro;
