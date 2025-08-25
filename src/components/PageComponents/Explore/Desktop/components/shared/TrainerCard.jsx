import React, { useRef, useState } from "react";
import {
  Check,
  ChevronDown,
  CircleChevronDown,
  ChevronLeft,
  ChevronRight,
  MapPin,
} from "lucide-react";

function TrainerCard({
  trainer,
  selected,
  onClick,
  isCarousel = false,
  trainers = [],
  selectedTrainer,
  onTrainerSelect,
}) {
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollToNext = () => {
    if (carouselRef.current) {
      const scrollAmount = 280; // card width + gap
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      setCurrentIndex((prev) => Math.min(prev + 1, trainers.length - 1));
    }
  };

  const scrollToPrev = () => {
    if (carouselRef.current) {
      const scrollAmount = -280; // card width + gap
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      setCurrentIndex((prev) => Math.max(prev - 1, 0));
    }
  };

  // If it's a carousel, render the carousel version
  if (isCarousel) {
    return (
      <div className="relative w-full">
        {/* Navigation Buttons */}
        <button
          onClick={scrollToPrev}
          disabled={currentIndex === 0}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg border border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="w-4 h-4 text-gray-600" />
        </button>

        <button
          onClick={scrollToNext}
          disabled={currentIndex === trainers.length - 1}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg border border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronRight className="w-4 h-4 text-gray-600" />
        </button>

        {/* Carousel Container */}
        <div
          ref={carouselRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {trainers.map((trainer, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full"
              style={{ scrollSnapAlign: "start" }}
            >
              <div
                onClick={() => onTrainerSelect(index)}
                className={`
                  relative cursor-pointer transition-all duration-200 rounded-[10px] overflow-hidden  
                  ${selectedTrainer === index ? "bg-[#4AB04A]" : ""}
                `}
              >
                <div className="relative">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-auto object-cover"
                  />
                </div>

                <div className="overflow-hidden w-full  flex flex-row items-center py-5 px-3">
                  <div className="flex flex-col gap-1 w-[90%] h-full">
                    <div
                      className={`
                        font-kanit font-[500] text-[20px] leading-[18px]
                        ${
                          selectedTrainer === index
                            ? "text-[#fff]"
                            : "text-[#000]"
                        }
                      `}
                    >
                      {trainer.name}
                    </div>

                    <div
                      className={`
                        font-kanit font-[400] text-[16px] leading-[18px]
                        ${
                          selectedTrainer === index
                            ? "text-[#fff]"
                            : "text-[#767676]"
                        }
                      `}
                    >
                      {trainer.title}
                    </div>

                    <div
                      className={`
                        flex items-center gap-1 pt-[6px] font-[kanit] font-[500] text-[16px] leading-[16px]
                        ${
                          selectedTrainer === index
                            ? "text-[#fff]"
                            : "text-[#4AB04A]"
                        }
                      `}
                    >
                      <MapPin className="" size={18} />
                      {trainer.location}
                    </div>
                  </div>

                  <div className="ml-3 flex-row items-start w-[10%] h-full">
                    <CircleChevronDown
                      className={`transition-transform duration-200 ${
                        selectedTrainer === index
                          ? "rotate-0 text-[#fff]"
                          : "rotate-180 text-[#000]"
                      }`}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots Indicator */}
        {/* <div className="flex justify-center gap-2 mt-4">
          {trainers.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (carouselRef.current) {
                  const scrollAmount = index * 280;
                  carouselRef.current.scrollTo({
                    left: scrollAmount,
                    behavior: "smooth",
                  });
                  setCurrentIndex(index);
                }
              }}
              className={`w-2 h-2 rounded-full transition-colors ${
                currentIndex === index ? "bg-green-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div> */}
      </div>
    );
  }

  // Regular single card render
  return (
    <div
      onClick={onClick}
      className={`
        relative cursor-pointer transition-all duration-200 rounded-[8px] overflow-hidden max-w-[260px]
        ${selected ? "bg-[#4AB04A]" : ""}
      `}
    >
      <div className="relative">
        <img
          src={trainer.image}
          alt={trainer.name}
          className="w-full h-auto object-cover"
        />
      </div>

      <div className="overflow-hidden w-full h-auto flex flex-row  py-5 px-2">
        <div className="flex flex-col gap-1 w-[90%] h-full  ">
          <div
            className={`
              font-kanit font-[500] text-[20px] leading-[18px] h-auto
              ${selected ? "text-[#fff]" : "text-[#000]"}
            `}
          >
            {trainer.name}
          </div>

          <div
            className={`
              font-kanit font-[400] text-[16px] leading-[18px] h-auto py-1
              ${selected ? "text-[#fff]" : "text-[#767676]"}
            `}
          >
            {trainer.title}
          </div>

          <div
            className={`
              flex items-center gap-1 font-[kanit] h-auto pt-[6px] font-[400] text-[16px] leading-[16px]
              ${selected ? "text-[#fff]" : "text-[#4AB04A]"}
            `}
          >
            <MapPin className="" size={18} />
            {trainer.location}
          </div>
        </div>

        <div className="ml-3 flex-row items-start w-[10%] h-full">
          <CircleChevronDown
            className={`transition-transform duration-200 ${
              selected ? "rotate-0  text-[#fff]" : "rotate-180 text-[#000]"
            }`}
          />
        </div>
      </div>
    </div>
  );
}

export default TrainerCard;
