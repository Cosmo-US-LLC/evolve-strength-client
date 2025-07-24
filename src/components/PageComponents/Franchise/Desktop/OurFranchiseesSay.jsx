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
      <div className="w-full max-w-[1280px] px-4 sm:px-8 mx-auto flex flex-col gap-12">
        <div className="text-left">
          <h2 className="!text-[#1C1C1C] uppercase text-3xl md:text-4xl leading-tight md:leading-[39px] font-[700]">
            What Trainers Are Saying
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
                <CarouselItem key={index} className="flex-shrink-0 w-full">
                  <div className="px-4 md:px-[50px] relative flex flex-col md:flex-row justify-between py-0 pt-4  md:py-[35px] bg-[#EEE] rounded-[10px]">
                    <div className="w-full md:max-w-[642px]">
                      <div className="pb-4 md:pb-[22px]">
                        <h3 className="font-[700] text-[#000] text-xl md:text-2xl leading-[20px]">
                          Jason M.
                        </h3>
                        <h5 className="!text-[#4AB04A] !text-lg !font-vazirmatn leading-[20px]">
                          Personal Trainer
                        </h5>
                      </div>
                      <p className="h4 !font-[300] text-base md:text-lg leading-[26px] text-[#000]">
                        I used to work at a gym that took a cut from every
                        session. Sometimes it was almost half. At Evolve, I just
                        pay a flat fee each month. That’s it. No surprises, no
                        percentages. And I actually get to keep what I earn.
                        It’s made a big difference. I can plan better and take
                        on more clients without worrying about losing a chunk of
                        my income. And the best part is I run things my way. I
                        set my own hours, my own prices, and no one’s telling me
                        how to train.
                      </p>
                    </div>
                    <div className="mt-0 flex justify-center">
                      <img
                        src={slide.imageUrl}
                        alt={slide.alt}
                        className="w-full h-auto max-w-[300px] md:max-w-[470px] md:h-[277px] object-cover rounded-lg md:absolute md:right-[-1%] md:bottom-0"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <div className="flex justify-center md:justify-start gap-4 mt-6 md:absolute md:left-[85%] md:-top-[28%] md:-translate-y-1/2">
            <button
              onClick={handlePrevious}
              className="h-12 w-12 bg-white rounded-full border border-[#00000060] flex items-center justify-center shadow"
            >
              <img
                src={LeftArrowIcon}
                alt="Previous"
                className="h-5 w-5 text-[#00000060] cursor-pointer"
              />
            </button>
            <button
              onClick={handleNext}
              className="h-12 w-12 bg-white rounded-full border border-[#00000060] flex items-center justify-center shadow"
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
    </div>
  );
}

export default OurFranchiseesSay;