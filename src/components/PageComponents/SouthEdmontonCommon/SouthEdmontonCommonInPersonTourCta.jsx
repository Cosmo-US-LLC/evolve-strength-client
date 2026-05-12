import React from "react";
import { Link } from "react-router-dom";

import { southEdmontonCommonBookTourHref } from "@/constants/southEdmontonCommonTour";

function SouthEdmontonCommonInPersonTourCta() {
  return (
    <section aria-labelledby="south-common-in-person-heading">
      <div className="w-full bg-white pt-12 md:pt-[60px] pb-10 md:pb-12">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-8 px-4 md:flex-row md:items-start md:justify-between md:gap-16 md:px-8">
          <div className="flex max-w-[760px] flex-col gap-3">
            <h2
              id="south-common-in-person-heading"
              className="text-[#000] max-w-[640px] uppercase !font-[700] !text-[28px] leading-[34px] md:!text-[40px] md:leading-[39px]"
            >
              Some Things Don&apos;t Translate Online.
            </h2>
            <p className="text-[#000] !font-[Kanit] !font-[300] text-[16px] leading-[24px] md:text-[18px] md:leading-[26px]">
              Walk the floor. Feel what three times the space actually means.
              The tour is free.
            </p>
          </div>
          <Link
            to={southEdmontonCommonBookTourHref()}
            className="shrink-0 md:pt-1"
          >
            <button type="button" className="btnPrimary uppercase">
              Book a Free Tour
            </button>
          </Link>
        </div>
      </div>

      <div className="relative h-[70vh] md:h-[100vh] w-full overflow-hidden bg-black">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover object-center"
        >
          <source
            src="/assets/videos/ES_waitlist_desktop.webm"
            type="video/webm"
          />
        </video>
      </div>
    </section>
  );
}

export default SouthEdmontonCommonInPersonTourCta;
