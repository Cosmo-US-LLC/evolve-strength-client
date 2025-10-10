import React from "react";
import { Link } from "react-router-dom";

function GrassIsIndeed() {
  return (
    <div className="w-full grassIsIndeed pb-[70px] md:pb-[76px]  relative overflow-hidden">
      <div className="absolute inset-0 bg-black/40 md:bg-black/20 z-0"></div>

      <div className="w-full max-w-[1280px] mx-auto flex h-full items-end px-4 md:px-8">
        <div className="space-y-[20px] relative z-[9] ">
          <h2 className="!text-[#fff] leading-[45px] uppercase drop-shadow-lg">
            Turf That Lasts <br /> Through Thick and Thin{" "}
          </h2>
          <h4 className="!text-[#fff] leading-[25px] max-w-[593px] !font-[400] md:!font-[300] drop-shadow-lg">
            Built for lunges, pushes, pulls, and everything in between.
          </h4>
          <div className="flex gap-6">
            <ul className="list-disc pl-4 font-Kanit !text-[#fff]">
              <li>
                <h4>
                  <span>Longer, Thicker, and Durable</span>
                </h4>
              </li>
              <li>
                <h4>
                  <span>Premium, Non-Carpet Turf</span>
                </h4>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GrassIsIndeed;
