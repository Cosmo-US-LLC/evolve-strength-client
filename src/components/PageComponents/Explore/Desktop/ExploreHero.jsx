import React from "react";
import { Link } from "react-router-dom";

function ExploreHero() {
  return (
    <div className="relative overflow-hidden h-[600px] md:h-[700px]">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover object-center z-0"
        style={{
          minHeight: "100%",
          minWidth: "100%",
          width: "auto",
          height: "auto",
        }}
      >
        <source src="/videos/ExplorePages.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for better text readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-1" />

      <div className="max-w-[1280px] px-4 md:px-8 pb-[80px] mx-auto w-full h-full relative z-2">
        <div className="relative z-2 flex flex-col items-start justify-end h-full">
          <h1 className="text-[#FFFFFF] uppercase !text-[70px] max-md:!text-[50px] md:max-w-[827px] leading-[52px] md:leading-[70px] mb-5">
            Discover Trainers, Wellness Services and Amenities at Evolve
          </h1>
          <h3 className="text-[#FFFFFF] !font-[300] max-w-[707px] leading-[29px] mb-6">
            Choose an option below to get started.
          </h3>
          <div className="flex gap-6">
            <Link to="https://join.evolvestrength.ca/tour-form/">
            <button className="btnPrimary">BOOK A FREE TOUR</button>
            </Link>
            
 <Link to="https://subscription.evolvestrength.ca/">
            <button className="btnSecondary">Join Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExploreHero;
