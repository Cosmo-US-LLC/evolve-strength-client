import React from "react";

function TakesToLaunchEvolve() {
  return (
    <section className="w-full bg-black py-16 flex items-center justify-center">
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center px-4">
        <h2 className="text-white text-3xl md:text-4xl font-extrabold text-center mb-4">
          WHAT IT TAKES TO LAUNCH EVOLVE
        </h2>
        <div className="text-white text-lg text-center mb-10">
          Startup Investment:
        </div>
        <div className="flex flex-col md:flex-row gap-10 md:gap-20 justify-center items-end w-full">
          <div className="flex flex-col items-center">
            <div className="text-white text-5xl md:text-6xl font-light mb-2">
              $250,000
            </div>
            <div className="text-white text-base md:text-lg font-normal opacity-80">
              Minimum Liquid Capital
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-white text-5xl md:text-6xl font-light mb-2">
              $750,000
            </div>
            <div className="text-white text-base md:text-lg font-normal opacity-80">
              Estimated Total Investment
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TakesToLaunchEvolve;
