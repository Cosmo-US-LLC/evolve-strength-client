import React from "react";

import { southEdmontonCommonBookTourHref } from "@/constants/southEdmontonCommonTour";

/** South Edmonton Common Instagram (display @ may differ slightly from URL slug). */
const SOUTH_EDMONTON_COMMON_INSTAGRAM_URL =
  "https://www.instagram.com/evolve_strength_southcommon?igsh=MWJxd3prbG4zMDB6bQ==";

const STEPS = [
  {
    title: "Book Your Tour",
    description: "Book a free tour within the first 3 weeks of opening",
  },
  {
    title: "Experience Evolve",
    description: "Attend your tour within the first 3 weeks",
  },
  {
    title: "Join the Movement",
    description: (
      <>
        Follow us on Instagram{" "}
        <a
          href={SOUTH_EDMONTON_COMMON_INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-[400] text-[#4AB04A] underline decoration-[#4AB04A]/0 underline-offset-2 hover:decoration-[#4AB04A]"
        >
          @evolve_strength_south_common
        </a>
      </>
    ),
  },
];

function SouthEdmontonCommonTourContest() {
  return (
    <section className="bg-white w-full py-12 md:py-20">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 flex flex-col items-center gap-8 md:gap-12">
        <div className="max-w-[820px] text-center flex flex-col gap-3">
          <h2 className="text-[#000] uppercase">
            One Tour. One Winner.
            <br />A Lifetime of Evolve.
          </h2>
          <h4 className="text-[#000] max-w-[640px]">
            We're giving away a lifetime membership to Evolve Strength South
            Edmonton Common. Three steps to enter, that's it.
          </h4>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {STEPS.map((step, idx) => (
            <div
              key={step.title}
              className="bg-[#F5F5F5] rounded-[12px] p-6 md:p-7 flex flex-col gap-3"
            >
              <div className="text-[#4AB04A] !font-[600] uppercase !font-[Kanit]">
                Step {idx + 1}
              </div>
              <h3 className="text-[#000] !font-[600] uppercase">
                {step.title}
              </h3>
              <p className="text-[#000] !font-[300] !font-[Kanit] leading-[22px] md:leading-[24px]">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <a href={southEdmontonCommonBookTourHref()}>
          <button type="button" className="btnPrimary uppercase">
            Book a Free Tour
          </button>
        </a>
        <p className="text-[#000] -mt-6 text-center text-[16px] !font-[300] !font-[Kanit] leading-[22px] md:leading-[22px] max-w-[500px]">
          One winner selected from all eligible entries. No purchase necessary.
          Must complete all three steps to qualify
        </p>
      </div>
    </section>
  );
}

export default SouthEdmontonCommonTourContest;
