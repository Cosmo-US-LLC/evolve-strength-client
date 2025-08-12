import React from "react";
import { Link } from "react-router-dom";

function PersonalTrainingHero() {
  return (
    <div className="relative personalTrainingHeroSection">
      {/* <div className="absolute top-0 left-0 z-1 w-full h-full bg-black/40" /> */}
      <div className="max-w-[1280px] px-4 md:px-8 pb-[60px] md:pb-[80px] mx-auto w-full h-full">
        <div className="relative z-2 flex flex-col items-start justify-end h-full pt-16 md:pt-0">
          <h1 className="text-[#FFFFFF] uppercase max-w-[707px] leading-[50px] md:leading-[56px] mb-5 font-bold">
            Personal training at Evolve Strength
          </h1>
          <h3 className="text-[#FFFFFF] !font-[400] leading-[24px] md:leading-[24px] mb-6 max-w-[350px] md:max-w-[606px]">
            One-on-one coaching for unparalleled focus and results.
          </h3>
          <div className="flex gap-3 mb-5">

           <Link to="https://subscription.evolvestrength.ca/">
            <button className="btnPrimary">Join Now</button>
            </Link>
            <Link to="/explore">
          <button className="btnSecondary"> Explore Trainer</button>
          </Link>
          </div>
                    <Link to = "https://subscription.evolvestrength.ca/">
          <button className="description underline !font-[Kanit] text-[#FFFFFF]  font-bold hover:cursor-pointer ">Join now for a free assessment with a certified trainer. Personal training is available for an additional fee.</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PersonalTrainingHero;
