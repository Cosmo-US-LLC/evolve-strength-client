import React from "react";

function MembershipBenefitsHero() {
  return (
    <div className="relative MembershipBenefitsHeroBG">
      {/* <div className="absolute top-0 left-0 z-1 w-full h-full bg-black/40" /> */}
      <div className="max-w-[1280px] px-8 pb-[80px] mx-auto w-full h-full">
        <div className="relative z-2 flex  flex-col items-start justify-end h-full">
          <h1 className="text-[#FFFFFF] uppercase max-w-[740px] leading-[56px] mb-5">
            One Membership Endless Possibilities
          </h1>
          <div className="flex gap-6">
            <button className="btnPrimary">Join Now</button>
            <button className="btnSecondary">Book a tour</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MembershipBenefitsHero;
