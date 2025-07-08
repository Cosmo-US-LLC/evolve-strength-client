import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import React, { useState, useEffect } from "react";

import LeftArrowIcon from "@/assets/images/JoinAsTrainer/WhatTrainersAre/left-arrow.svg";
import RightArrowIcon from "@/assets/images/JoinAsTrainer/WhatTrainersAre/right-arrow.svg";
import Client from "@/assets/images/JoinAsTrainer/WhatTrainersAre/client.webp";

function OurFranchiseesSay() {
  const slides = [
    { imageUrl: Client, alt: "Client image" },
    { imageUrl: Client, alt: "Client image" },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  return (
    <div className="w-full pb-[70px] pt-[82px]">
      <div className="w-full max-w-[1280px] px-8 mx-auto flex flex-col gap-12">
        <div className="">
          <h2 className="!text-[#1C1C1C] uppercase leading-[39px] font-[700]">
            What Our Franchisees Say
          </h2>
        </div>
        <div className="relative w-full">
          <Carousel>
            <CarouselContent
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {slides.map((slide, index) => (
                <CarouselItem key={index} className="flex-shrink-0 w-full ">
                  <div className="px-[50px] relative flex justify-between py-[35px] bg-[#EEE] rounded-[10px]">
                    <div className="w-[100%] max-w-[642px]">
                      <div className="pb-[22px]">
                        <h3 className="font-[700] text-[#000] leading-[20px]">
                          Mark Whatley
                        </h3>
                        <h5 className="!text-[#4AB04A] !text-[18px] !font-vazirmatn leading-[20px]">
                          Evolve Seton Franchise Owner
                        </h5>
                      </div>
                      <p className="h4 !font-[300] leading-[26px] text-[#000]">
                        Evolve has successfully launched 8 franchise locations
                        across Canada. With strong brand recognition and rising
                        demand, we’re targeting additional 5 markets over the
                        next 3 years. Evolve has successfully launched 8
                        franchise locations across Canada. With strong brand
                        recognition and rising demand, we’re targeting
                        additional 5 markets over the next 3 years.
                      </p>
                    </div>
                    <img
                      src={slide.imageUrl}
                      alt={slide.alt}
                      className="w-full h-[277px] max-w-[470px] right-[-1%] absolute object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <button
            onClick={handlePrevious}
            className="absolute left-[85%] -top-[28%] -translate-y-1/2 h-[46px] w-[46px] bg-white rounded-full border border-[#00000060] flex items-center justify-center shadow"
          >
            <img
              src={LeftArrowIcon}
              alt="Previous"
              className="h-5 w-5 text-[#00000060] cursor-pointer"
            />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-[80px] -top-[28%] -translate-y-1/2 h-[46px] w-[46px] bg-white rounded-full border border-[#00000060] flex items-center justify-center shadow"
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

export default OurFranchiseesSay;
