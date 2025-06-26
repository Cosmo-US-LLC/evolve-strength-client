import React from "react";

function PerfectTrainer() {
  return (
    <div className="w-full py-12">
      <div className="w-full max-w-[1280px] px-8 mx-auto flex flex-row items-center justify-between">
      
        <div className="max-w-[360px]">
          <h2 className="text-[#000] uppercase !font-[700] leading-[26px]">
            A TRAINER THAT
            <br />
            ACTUALLY FITS YOU
          </h2>
        </div>

        <div className="max-w-[683px] text-[#000] description leading-[26px]">
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
