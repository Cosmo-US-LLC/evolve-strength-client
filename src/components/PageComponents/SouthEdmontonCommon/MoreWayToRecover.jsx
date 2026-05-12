import React from "react";
import { Link } from "react-router-dom";

import { southEdmontonCommonBookTourHref } from "@/constants/southEdmontonCommonTour";

function MoreWayToRecover() {
  return (
    <section aria-labelledby="south-common-in-person-heading">
      <div className="w-full bg-white pt-12 md:pt-[60px] pb-10 md:pb-12">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-8 px-4 md:flex-row md:items-start md:justify-between md:gap-16 md:px-8">
          <div className="flex max-w-[760px] flex-col gap-3">
            <h2
              id="south-common-in-person-heading"
              className="text-[#000] uppercase max-w-[640px] !font-[600] !text-[28px] leading-[34px] md:!text-[40px] md:leading-[39px]"
            >
              More Ways to Recover and Restore.
            </h2>
            <p className="text-[#000] max-w-[640px] !font-[Kanit] !font-[300] text-[15px] leading-[24px] md:text-[16px] md:leading-[26px]">
              Skip the hassle of driving to different clinics. At every Evolve
              location, you will find trusted specialists covering everything
              your body needs, all under the same roof where you train.
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

      <div className="relative h-[70vh] md:h-[100vh] w-full overflow-hidden bg-black ">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover object-center"
        >
          <source src="/assets/videos/evolve_loop.webm" type="video/webm" />
        </video>
      </div>
    </section>
  );
}

export default MoreWayToRecover;
