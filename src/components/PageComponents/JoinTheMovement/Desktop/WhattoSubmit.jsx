import React, { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

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
    <div className="w-full pb-[50px] md:pb-[70px] pt-[82px]">
      <div className="w-full max-w-[1280px] md:px-8 px-4 mx-auto flex flex-col gap-12">
        <div className="space-y-[16px] max-md:pb-[30px]">
          <h2 className="uppercase leading-[39px] font-[700]">
            What to Submit
          </h2>
          <h5 className="description leading-[20px]">
            Send Us Content You’ve Shot at Evolve
          </h5>
          <button  onClick={() => {
    const formElement = document.getElementById("join-the-movement-form");
    if (formElement) {
      const yOffset = -150; // adjust this value for more/less space
      const yPosition =
        formElement.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: yPosition, behavior: "smooth" });
    }
  }}
           className="btnPrimary">Submit your short</button>
        </div>
        <div className="relative w-full ">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex md:gap-4 max-md:gap-2 max-md:!ml-10">
              {slidesdata.map((slide, index) => (
                <div
                  className={`max-md:max-w-[235px] max-md:max-w-[100%] max-md:flex-[0_0_83.33%] p-[15px] rounded-[10px] h-[360px] flex items-end text-white max-md:ml-2 bg-cover bg-center ${
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
  className="absolute md:left-[85%] max-md:left-[80%] md:-top-[16%] max-md:-top-[10%] -translate-y-1/2 md:h-[46px] md:w-[46px] max-md:w-[30px] max-md:h-[30px] bg-white rounded-full border border-[#00000060] flex items-center justify-center shadow hover:bg-gray-100 cursor-pointer"
>
  <img
    src="https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/JoinAsTrainer/WhatTrainersAre/left-arrow.svg"
    alt="Previous"
    className="h-5 w-5 text-[#00000060] cursor-pointer "
  />
</button>
<button
  onClick={scrollNext}
  className="absolute md:right-[80px] max-md:right-[0px] md:-top-[16%] max-md:-top-[10%] -translate-y-1/2 md:h-[46px] md:w-[46px] max-md:w-[30px] max-md:h-[30px] bg-white rounded-full border border-[#00000060] flex items-center justify-center shadow hover:bg-gray-100 cursor-pointer"
>
  <img
    src="https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/JoinAsTrainer/WhatTrainersAre/right-arrow.svg"
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
