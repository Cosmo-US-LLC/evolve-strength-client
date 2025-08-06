import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import LeftArrowIcon from "@/assets/images/MembershipBenefits/AccessEvolveLocationWithEase/left-arrow.svg";
import RightArrowIcon from "@/assets/images/MembershipBenefits/AccessEvolveLocationWithEase/right-arrow.svg";

import Slide1 from "@/assets/images/MembershipBenefits/AccessEvolveLocationWithEase/slide1.webp";

const AccessEvolveLocationWithEase = () => {
  const slides = [
    { imageUrl: Slide1, alt: "Evolve gym location 1" },
    { imageUrl: Slide1, alt: "Evolve gym location 2" },
    { imageUrl: Slide1, alt: "Evolve gym location 3" },
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
    <div className="py-16 flex flex-col items-center gap-8">
      <div className="flex flex-col items-center justify-center text-center gap-4">
        <h2 className="text-[#000] uppercase leading-[39px] max-w-[703px]">
          ACCESS EVERY EVOLVE LOCATION WITH EASE
        </h2>
        <h4 className="text-[#000] w-full max-w-[358px] md:max-w-[890px] font-[400] leading-[22px]">
          Train where you want, when you want. Your Evolve membership gives you
          seamless access to all our locations across Canada. Step into
          spacious, modern facilities designed for your comfort.
        </h4>
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
                <img
                  src={slide.imageUrl}
                  alt={slide.alt}
                  className="w-full aspect-[4/3] md:aspect-[16/9] xl:aspect-[21/9] 2xl:aspect-[24/9] object-cover"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
          <div className=" flex flex-row absolute md:-top-25 right-32 md:right-20 p-4 rounded-md z-10 gap-3 md:gap-5">

        <button
          onClick={handlePrevious}
          className=" h-[46px] w-[46px] bg-white rounded-full border border-[#00000060] flex items-center justify-center shadow hover:bg-gray-100 cursor-pointer"
        >
          <img
            src={LeftArrowIcon}
            alt="Previous"
            className="h-5 w-5 text-[#00000060]"
          />
        </button>
        <button
          onClick={handleNext}
          className=" h-[46px] w-[46px] bg-white rounded-full border border-[#00000060] flex items-center justify-center shadow hover:bg-gray-100 cursor-pointer"
        >
          <img
            src={RightArrowIcon}
            alt="Next"
            className="h-5 w-5 text-[#00000060]"
          />
        </button>
      </div>
      </div>

      <button className="btnPrimary mt-12">BOOK A FREE TOUR</button>
    </div>
  );
};

export default AccessEvolveLocationWithEase;
