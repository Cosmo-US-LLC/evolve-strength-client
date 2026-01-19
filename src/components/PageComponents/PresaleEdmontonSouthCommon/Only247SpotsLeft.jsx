import React from "react";
import { Link } from "react-router-dom";

function Only247SpotsLeft() {
  return (
    <section className="bg-[#fff]">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 py-10 md:py-20 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-[28px]">
        {/* Text Content */}
        <div className="flex flex-col md:text-left text-center gap-2 w-full md:flex-1">
          <h2 className="font-[600] uppercase text-[#000]">
            Only 247 Spots left
          </h2>
          <p className="text-[16px] md:text-[20px] leading-[22px] md:leading-[28px] font-[400] font-[Kanit] text-black">
            Lock the lowest rate ever and secure your membership. It&apos;s time
            to Evolve.
          </p>
        </div>

        {/* CTA Button */}
        <div className="w-full md:w-auto flex justify-center md:justify-end">
          <Link to="/founder-offer-payment">
            <button className="btnPrimary uppercase whitespace-nowrap">
              Lock My Rate Now
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Only247SpotsLeft;
