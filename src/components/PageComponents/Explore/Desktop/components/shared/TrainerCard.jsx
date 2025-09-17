import React, { useRef, useEffect } from "react";
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
  currentIndex = 0,
  onCarouselNavigate,
  onSwipeDetected,
}) {
  const carouselRef = useRef(null);
  const lastScrollLeft = useRef(0);

  // Sync carousel position with external currentIndex
  useEffect(() => {
    if (carouselRef.current && isCarousel) {
      const scrollAmount = currentIndex * 280; // card width + gap
      // Use instant scroll for better mobile compatibility
      carouselRef.current.scrollTo({ left: scrollAmount, behavior: "auto" });
    }
  }, [currentIndex, isCarousel]);

  // Handle manual swipe detection
  useEffect(() => {
    if (!isCarousel || !carouselRef.current) return;

    const handleScroll = () => {
      if (!carouselRef.current) return;

      const currentScrollLeft = carouselRef.current.scrollLeft;
      const scrollDifference = Math.abs(
        currentScrollLeft - lastScrollLeft.current
      );

      // If user manually scrolled (swiped) and there's a significant difference
      if (scrollDifference > 50) {
        // Calculate which card is currently visible
        const cardWidth = 280; // card width + gap
        const newIndex = Math.round(currentScrollLeft / cardWidth);

        // Update the current index if it changed
        if (newIndex !== currentIndex && onCarouselNavigate) {
          onCarouselNavigate(newIndex);
        }

        // Close trainer details if they're open
        if (onSwipeDetected) {
          onSwipeDetected();
        }

        lastScrollLeft.current = currentScrollLeft;
      }
    };

    const carousel = carouselRef.current;
    carousel.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      carousel.removeEventListener("scroll", handleScroll);
    };
  }, [isCarousel, currentIndex, onCarouselNavigate, onSwipeDetected]);

  const scrollToNext = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (onCarouselNavigate) {
      const newIndex = Math.min(currentIndex + 1, trainers.length - 1);
      onCarouselNavigate(newIndex);
    }
  };

  const scrollToPrev = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (onCarouselNavigate) {
      const newIndex = Math.max(currentIndex - 1, 0);
      onCarouselNavigate(newIndex);
    }
  };

  // If it's a carousel, render the carousel version
  if (isCarousel) {
    return (
      <div className="relative w-full">
        {/* Navigation Buttons */}
        <button
          onClick={scrollToPrev}
          onTouchEnd={scrollToPrev}
          disabled={currentIndex === 0}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 z-20 bg-white rounded-full p-3 shadow-lg border border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed touch-manipulation"
          style={{ minWidth: "44px", minHeight: "44px" }}
        >
          <ChevronLeft className="w-5 h-5 text-gray-600" />
        </button>

        <button
          onClick={scrollToNext}
          onTouchEnd={scrollToNext}
          disabled={currentIndex === trainers.length - 1}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 z-20 bg-white rounded-full p-3 shadow-lg border border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed touch-manipulation"
          style={{ minWidth: "44px", minHeight: "44px" }}
        >
          <ChevronRight className="w-5 h-5 text-gray-600" />
        </button>

        {/* Carousel Container */}
        <div
          ref={carouselRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide"
          style={{
            scrollSnapType: "x mandatory",
            touchAction: "pan-x",
          }}
        >
          {trainers.map((trainer, index) => (
            <div
              key={trainer.id || trainer.name || index}
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
              selected ? "rotate-180  text-[#fff]" : "rotate-0 text-[#000]"
            }`}
          />
        </div>
      </div>
    </div>
  );
}

export default TrainerCard;
