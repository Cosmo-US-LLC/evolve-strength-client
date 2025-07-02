import React from "react";

function TrainWithOutWait() {
  return (
    <div className="w-full py-12">
      <div className="w-full max-w-[1280px] px-8 mx-auto flex flex-row items-center justify-between">
        <div className="max-w-[360px]">
          <h2 className="text-[#000] uppercase !font-[700] leading-[26px]">
            Train Your Way
            <br />
            Without the Wait
          </h2>
        </div>

        <div className="max-w-[683px] text-[#000] description leading-[26px]">
          <p>
            With Evolve, your membership unlocks affordable fitness options
            tailored to your lifestyle, offering more space and variety than
            crowded chain gyms and allowing you to train your way without the
            wait.
          </p>
        </div>
      </div>
    </div>
  );
}

export default TrainWithOutWait;
