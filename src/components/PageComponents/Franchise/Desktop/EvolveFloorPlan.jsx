import React, { useState, useEffect } from "react";
import { Play, X } from "lucide-react";

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
  videoSrc,
}) => {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (!videoSrc) return;
    document.body.style.overflow = modalOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [modalOpen, videoSrc]);

  useEffect(() => {
    if (!videoSrc) return;
    const handleKey = (e) => {
      if (e.key === "Escape") setModalOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [videoSrc]);

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
                  {videoSrc ? (
                    <button
                      type="button"
                      onClick={() => setModalOpen(true)}
                      className="relative w-full group cursor-pointer focus:outline-none"
                      aria-label="Play video"
                    >
                      <img
                        src={slide.image}
                        alt={slide.alt || `Evolve Floor Plan Slide ${slide.id}`}
                        className="w-full rounded p-2"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded">
                        <div className="bg-white/90 rounded-full p-4 shadow-lg">
                          <Play className="h-8 w-8 text-black fill-black" />
                        </div>
                      </div>
                    </button>
                  ) : (
                    <img
                      src={slide.image}
                      alt={slide.alt || `Evolve Floor Plan Slide ${slide.id}`}
                      className="w-full rounded p-2"
                    />
                  )}
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
      {videoSrc && modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="relative w-[90vw] max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setModalOpen(false)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
              aria-label="Close video"
            >
              <X className="h-8 w-8" />
            </button>
            <video
              src={videoSrc}
              autoPlay
              controls
              className="w-full max-h-[85vh] rounded-lg shadow-2xl"
              aria-label="Vancouver Post club video"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default EvolveFloorPlan;
