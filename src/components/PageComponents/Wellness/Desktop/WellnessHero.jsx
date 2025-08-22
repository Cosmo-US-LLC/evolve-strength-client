import React from "react";
import { Link } from "react-router-dom";

function WellnessHero() {
  return (
    <div className="relative wellnessHeroSection">
      {/* <div className="absolute top-0 left-0 z-1 w-full h-full bg-black/40" /> */}
      <div className="max-w-[1280px] px-4 md:px-8 pb-[60px] md:pb-[80px] mx-auto w-full h-full">
        <div className="relative z-2 flex  flex-col items-start justify-end h-full">
          <h1 className="text-[#FFFFFF] uppercase max-w-[707px] leading-[52px] md:leading-[56px] mb-5">
            Evolve Strength Wellness Services
          </h1>
          <h3 className="text-[#FFFFFF] !font-[300] max-w-[707px] leading-[24px] md:leading-[29px] mb-6">
            Your fitness doesn't stop at the gym. Our in-house wellness experts
            help you recover, reduce pain, and improve how you move without
            leaving the building.
          </h3>
          <div className="flex flex-col md:flex-row gap-3">
            <Link to="/explore?category=wellness">
              <button className="btnPrimary">FIND A wellness expert</button>
            </Link>
            <Link to="/join-the-wait-list">
              <button className="btnSecondary">Become a Wellness Expert</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WellnessHero;
