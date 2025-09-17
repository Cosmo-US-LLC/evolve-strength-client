import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { FLOOR_PLAN_SLIDES } from "@/constants/floorPlanSlides";

const EvolveFloorPlan = ({
  slides = FLOOR_PLAN_SLIDES.franchise.slides,
  heading = FLOOR_PLAN_SLIDES.franchise.heading,
  description = FLOOR_PLAN_SLIDES.franchise.description,
}) => {
  return (
    <div className="pb-16 md:pt-[130px]">
      <div className="w-full max-w-[1280px] mx-auto md:px-8 px-4 flex md:flex-row flex-col gap-8 items-start">
        <div className="md:w-[40%] w-full flex flex-col  gap-6 justify-center">
          <h2 className="text-[#000] uppercase font-[700] leading-[39px]">
            {heading}
          </h2>
          <p className="text-[#000] leading-[26px] font-[400] max-w-[368px]">
            {description}
          </p>
        </div>

        <div className="relative md:w-[60%] pt-10 md:pt-0">
          <Carousel className="w-full">
            {slides.length > 1 && (
              <div className="absolute -top-[40px] right-[50px] flex z-10">
                <CarouselPrevious className="bg-[#fff] w-[42px] h-[42px] p-1 rounded-full hover:bg-gray-100" />
                <CarouselNext className="bg-[#fff] w-[42px] h-[42px] p-1 rounded-full hover:bg-gray-100" />
              </div>
            )}

            <CarouselContent>
              {slides.map((slide) => (
                <CarouselItem key={slide.id}>
                  <img
                    src={slide.image}
                    alt={slide.alt || `Evolve Floor Plan Slide ${slide.id}`}
                    className="w-full rounded  p-2"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default EvolveFloorPlan;
