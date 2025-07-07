import React, { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import LeftArrowIcon from "@/assets/images/JoinAsTrainer/WhatTrainersAre/left-arrow.svg";
import RightArrowIcon from "@/assets/images/JoinAsTrainer/WhatTrainersAre/right-arrow.svg";
import Client from "@/assets/images/JoinAsTrainer/WhatTrainersAre/client.webp";

function WhattoSubmit() {
  const slidesdata = [
    {
      title: "Reels or Workout Clips",
      bgClass: "ReelsorWorkout",
    },
    {
      title: "Progress Photos",
      bgClass: "ProgressPhotos",
    },
    {
      title: "Training Stories",
      bgClass: "TrainingStories",
    },
    {
      title: "Group or Partner Workouts",
      bgClass: "GrouporPartner",
    },
    {
      title: "Behind the scenes or casual moments",
      bgClass: "BehindtheScenes",
    },
  ];
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      containScroll: "keepSnaps",
      loop: true,
    },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <div className="w-full pb-[70px] pt-[82px]">
      <div className="w-full max-w-[1280px] px-8 mx-auto flex flex-col gap-12">
        <div className="space-y-[16px]">
          <h2 className="uppercase leading-[39px] font-[700]">
            What to Submit
          </h2>
          <h5 className="description leading-[20px]">
            Send Us Content You’ve Shot at Evolve
          </h5>
          <button className="btnPrimary">Submit your short</button>
        </div>
        <div className="relative w-full">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4">
              {slidesdata.map((slide, index) => (
                <div
                  className={`max-w-[235px] p-[15px] rounded-[10px] h-[360px] flex items-end text-white bg-cover bg-center ${
                    slide.bgClass
                  } ${index === slidesdata.length - 1 ? "!px-[8px]" : ""}`}
                >
                  <h3 className="leading-[25px] !font-[500]">{slide.title}</h3>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={scrollPrev}
            className="absolute left-[85%] -top-[16%] -translate-y-1/2 h-[46px] w-[46px] bg-white rounded-full border border-[#00000060] flex items-center justify-center shadow"
          >
            <img
              src={LeftArrowIcon}
              alt="Previous"
              className="h-5 w-5 text-[#00000060] cursor-pointer"
            />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-[80px] -top-[16%] -translate-y-1/2 h-[46px] w-[46px] bg-white rounded-full border border-[#00000060] flex items-center justify-center shadow"
          >
            <img
              src={RightArrowIcon}
              alt="Next"
              className="h-5 w-5 text-[#00000060] cursor-pointer"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default WhattoSubmit;
