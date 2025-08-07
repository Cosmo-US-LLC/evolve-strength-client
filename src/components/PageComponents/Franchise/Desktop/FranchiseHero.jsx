import React from "react";
import { Link } from "react-router-dom";

function FranchiseHero() {
  return (
    <div className="w-full pb-12 pt-[90px] md:pt-[120px]">
      <div className="w-full max-w-[1280px] px-4 md:px-8 mx-auto flex flex-col gap-8">
        <div className="flex md:flex-row flex-col gap-4 md:gap-10">
          <div className="md:w-[50%] w-full flex ">
            <h1 className="max-w-[655px] text-left leading-[50px] md:leading-[56px] uppercase">
              Franchise with Evolve
            </h1>
          </div>
          <div className="flex flex-col md:w-[50%] w-full text-left justify-center items-start gap-5">
            <h3 className="text-[#000] leading-[26px] font-[400] md:w-[585px]">
              Canada's fastest-growing fitness facility is now franchising.
              Leverage our proven multi-revenue model combining fitness,
              healthcare, and real estate.
            </h3>
            <Link to="/your-fitness-future">
              <button className="btnPrimary">Apply Now</button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="w-full max-w-[1200px]">
            <video
              className="w-full h-auto md:h-[483px] rounded-lg shadow-lg object-cover"
              autoPlay
              muted
              loop
              playsInline
              controls={false}
            >
              <source src="/videos/FranchiseHero.webm" type="video/webm" />
              <source src="/videos/FranchiseHero.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FranchiseHero;
