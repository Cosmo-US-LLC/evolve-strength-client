import React from "react";
import { Link } from "react-router-dom";

function GymHero() {
  return (
    // <div className="relative gymHero">
    <div className="relative min-h-[90lvh] flex items-end">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute bg-black inset-0 w-full h-full object-cover"
        style={{ objectFit: "cover", objectPosition: "bottom" }}
      >
        <source
          src="/assets/videos/ExplorePages.webm"
          type="video/webm"
        />
        Your browser does not support the video tag.
      </video>
      {/* <div className="absolute top-0 left-0 z-1 w-full h-full bg-black/40" /> */}
      <div className="max-w-[1280px] px-4 md:px-8 pb-[60px] md:pb-[80px] mx-auto w-full h-full">
        <div className="relative z-2 flex  flex-col items-center text-center justify-end h-full">
          <h1 className="hidden md:block text-[#FFFFFF] uppercase max-w-[707px] !text-[42px] md:!text-[70px] leading-[42px] md:leading-[60px] mb-5">
            Evolve <br /> Gym Experience
          </h1>
          <h1 className="block md:hidden text-[#FFFFFF] uppercase max-w-[707px]   leading-[46px] md:leading-[60px] mb-5">
            Evolve Gym Experience
          </h1>

          <div className="flex flex-row gap-x-[24px]">
            <a href="/book-a-tour/">
              <button className="btnPrimary">Book a Free Tour</button>
            </a>
            <a href="/join-now/">
              <button className="btnSecondary">join now</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GymHero;
