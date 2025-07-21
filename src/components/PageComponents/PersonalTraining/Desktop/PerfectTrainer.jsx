import React from "react";

function PerfectTrainer() {
  return (
    <div className="w-full py-12">
      <div className="w-full max-w-[1280px] px-4 md:px-8 mx-auto flex flex-col md:flex-row gap-4 md:gap-0 items-center justify-between">
        <div className="max-w-[370px] w-full">
          <h2 className="text-[#000] uppercase !font-[700] leading-[26px] ">
            A TRAINER THAT
            <br />
            ACTUALLY FITS YOU
          </h2>
        </div>

        <div className="max-w-[673px] text-[#000] description !font-[kanit] !font-[300] !md:font-[400] leading-[24px] md:leading-[26px]">
          <p>
            Most gyms offer just a handful of trainers. If none of them match
            your goals or style, you’re stuck. At Evolve, it’s different. We
            have a large team of independent trainers with diverse specialties,
            coaching styles, and backgrounds. Because they run their own
            businesses within our space, they’re fully invested in your success.
            That means better focus, better care, and better results. No matter
            what your goal is, there’s someone here who’s the right fit.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PerfectTrainer;
