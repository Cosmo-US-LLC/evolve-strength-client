import React from "react";
import { Link } from "react-router-dom";

function CareersHero() {
  return (
    <div className="relative careersHeroSection">
      {/* <div className="absolute top-0 left-0 z-1 w-full h-full bg-black/40" /> */}
      <div className="max-w-[1280px] px-4 md:px-8 pb-[60px] md:pb-[80px] mx-auto w-full h-full">
        <div className="relative z-2 flex  flex-col items-start justify-end h-full">
          <h1 className="text-[#FFFFFF] uppercase max-w-[707px] leading-[52px] md:leading-[56px] mb-5">
            Careers at Evolve Strength
          </h1>
          <h3 className="text-[#FFFFFF] !font-[300] max-w-[707px] leading-[24px] md:leading-[29px] mb-6">
            At Evolve Strength, we’re more than a gym, we’re a community of
            trainers and health professionals working together to help people
            thrive.
          </h3>

          <div className="flex flex-col md:flex-row gap-3">
            <Link to="/contact-us">
              <button className="btnPrimary">Join Our Team</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CareersHero;
