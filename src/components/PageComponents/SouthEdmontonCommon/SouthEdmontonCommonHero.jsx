import React from "react";
import { Link } from "react-router-dom";

import { southEdmontonCommonBookTourHref } from "@/constants/southEdmontonCommonTour";

function SouthEdmontonCommonHero() {
  return (
    <div>
      <div className="relative overflow-hidden w-full h-[70vh] md:h-[100vh] bg-[#000000]">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectFit: "cover", objectPosition: "bottom" }}
        >
          <source
            src="/assets/videos/Sun_rising_south_edmonton_common.mp4"
            type="video/webm"
          />
          <source
            src="/assets/images/presaleCommonSouth/ES_waitlist_desktop.webm"
            type="video/webm"
          />
        </video>

        <div className="absolute top-0 left-0 z-1 w-full h-full bg-black/40" />

        <div className="max-w-[1280px] md:px-8 px-4 md:pb-[135px] max-md:pb-[24px] mx-auto w-full h-full relative z-2">
          <div className="relative z-2 flex flex-col items-start justify-end h-full">
            <div className="text-[#FFFFFF] text-[12px] md:text-[16px] !font-[600] backdrop-blur-[12px] uppercase leading-[24px] mb-4 md:mb-6 bg-[#20202066] !font-[Kanit] border border-[#FFFFFF] px-4 py-2 rounded-full">
              South Edmonton Common · Tours Open Now
            </div>

            <h1 className="text-[#FFFFFF] uppercase max-w-[760px] !text-[36px] leading-[40px] md:!text-[70px] md:leading-[72px] mb-4 md:mb-5">
              Become a lifetime evolve member.
            </h1>

            <h3 className="text-[#FFFFFF] !text-[16px] md:!text-[18px] !font-[300] max-w-[640px] leading-[22px] md:leading-[24px] mb-6 !font-[Kanit]">
              Attend a tour within the first 3 weeks and you’ll be entered to
              win a lifetime membership at Edmonton’s biggest gym. The giveaway
              ends on July 1st.
            </h3>

            <Link to={southEdmontonCommonBookTourHref()}>
              <button className="btnPrimary uppercase" type="button">
                Book a Free Tour
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SouthEdmontonCommonHero;
