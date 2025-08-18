import React from "react";
import { Link } from "react-router-dom";

function ReadyToEvolve() {
  return (
    <div className="relative ReadyToEvolveBG">
      {/* <div className="absolute top-0 left-0 z-1 w-full h-full bg-black/40" /> */}
      <div className="max-w-[1280px] px-4 md:px-8 pb-[80px] mx-auto w-full h-full">
        <div className="relative z-2 flex  flex-col items-start justify-end h-full">
          <h2 className="text-[#FFFFFF] uppercase max-w-[560px] !font-[700] leading-[39px] mb-5">
            Ready to Evolve
          </h2>
          <p className="text-[#FFFFFF] description !font-[400] max-w-[542px] leading-[24px] mb-6">
            Experience premium features at affordable prices with no hidden
            fees. Canada’s largest gym offers more space, better amenities and <br /> a
            supportive community so you can focus on your fitness, not the
            queue.
          </p>
          <div className="flex gap-6">
            <Link to="https://subscription.evolvestrength.ca/">
            <button className="btnPrimary">Join Now</button>
            </Link>
            <Link to="https://tour.evolvestrength.ca/tour-form">
            <button className="btnSecondary">take a tour</button>
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
}

export default ReadyToEvolve;
