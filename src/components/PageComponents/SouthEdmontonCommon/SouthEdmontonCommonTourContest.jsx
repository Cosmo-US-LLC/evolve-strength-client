import React from "react";
import { Link } from "react-router-dom";

import { southEdmontonCommonBookTourHref } from "@/constants/southEdmontonCommonTour";

const STEPS = [
  {
    title: "Book a tour",
    description:
      "Come see the space and meet the team. Tours are available now.",
  },
  {
    title: "Attend in the first 3 weeks",
    description:
      "Tour in our first 3 weeks after opening to qualify for the draw.",
  },
  {
    title: "You’re entered to win",
    description:
      "One winner takes home a lifetime membership at South Edmonton Common.",
  },
];

function SouthEdmontonCommonTourContest() {
  return (
    <section className="bg-white w-full py-12 md:py-20">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 flex flex-col items-center gap-8 md:gap-12">
        <div className="max-w-[820px] text-center flex flex-col gap-3">
          <h2 className="text-[#000] uppercase !font-[600]">
            One Tour. One Winner.
            <br />A Lifetime of Evolve.
          </h2>
          <h4 className="text-[#000] !font-[400] max-md:!text-[16px] leading-[22px] md:leading-[26px] max-w-[640px]">
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

        <Link to={southEdmontonCommonBookTourHref()}>
          <button className="btnPrimary uppercase">Book a Free Tour</button>
        </Link>
        <p className="text-[#000] -mt-6 text-center text-[16px] !font-[300] !font-[Kanit] leading-[22px] md:leading-[22px] max-w-[500px]">
          One winner selected from all eligible entries. No purchase necessary.
          Must complete all three steps to qualify
        </p>
      </div>
    </section>
  );
}

export default SouthEdmontonCommonTourContest;
