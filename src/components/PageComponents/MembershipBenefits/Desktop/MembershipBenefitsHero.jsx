import React from "react";
import { Link } from "react-router-dom";

function MembershipBenefitsHero() {
  return (
    <div className="relative MembershipBenefitsHeroBG">
      {/* <div className="absolute top-0 left-0 z-1 w-full h-full bg-black/40" /> */}
      <div className="max-w-[1280px] px-4 md:px-8 pb-[110px] mx-auto w-full h-full">
        <div className="relative z-2 flex  flex-col items-start justify-end h-full">
          <h1 className="text-[#FFFFFF] uppercase max-w-[750px] leading-[42px] md:leading-[56px] mb-5">
            One Membership Endless Possibilities
          </h1>
          <div className="flex gap-6">
            <a href="/join-now/">
              <button className="btnPrimary">Join Now</button>
            </a>
            <a href="/book-a-tour/">
              <button className="btnSecondary">BOOK A FREE TOUR</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MembershipBenefitsHero;
