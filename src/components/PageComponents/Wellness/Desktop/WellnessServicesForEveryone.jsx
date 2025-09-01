import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { professionalServices } from "../../../../constants/professionalServicesImages.js";

const CARDS_VISIBLE = 5;

function WellnessServicesForEveryone() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    slidesToScroll: 1,
    containScroll: "keepSnaps",
    align: "start",
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isUserInteracting, setIsUserInteracting] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  // Improved auto-scroll with user interaction handling
  useEffect(() => {
    if (!emblaApi || isUserInteracting) return;

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 4000); // Increased to 4 seconds for better UX

    return () => clearInterval(interval);
  }, [emblaApi, isUserInteracting]);

  // Handle user interactions to pause auto-scroll
  const handleUserInteraction = () => {
    setIsUserInteracting(true);
    setTimeout(() => setIsUserInteracting(false), 5000); // Resume after 5 seconds
  };

  const handlePrev = () => {
    if (emblaApi) {
      emblaApi.scrollPrev();
      handleUserInteraction();
    }
  };

  const handleNext = () => {
    if (emblaApi) {
      emblaApi.scrollNext();
      handleUserInteraction();
    }
  };

  return (
    <div className="relative w-full h-[636px] md:h-[600px] flex items-center justify-center bg-black/80 overflow-hidden">
      {/* Desktop Background Image */}
      <img
        src={professionalServices[selectedIndex]?.images.desktopImage || ""}
        alt="Wellness Hero Desktop"
        className="absolute inset-0 w-full h-full object-cover z-0 transition-all duration-500 max-md:hidden"
      />
      {/* Mobile Background Image */}
      <img
        src={professionalServices[selectedIndex]?.images.mobileImage || ""}
        alt="Wellness Hero Mobile"
        className="absolute inset-0 w-full h-full object-cover z-0 transition-all duration-500 md:hidden"
      />
      <div className="absolute inset-0 bg-black/30 z-10 transition-all duration-200" />

      <div className="relative z-20 w-full h-full max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-8">
        <div className="flex flex-col items-start gap-4 md:gap-6 w-full md:max-w-[423px] text-left py-12 md:py-0 mb-6 md:mb-0">
          <h2 className="text-[#fff] font-[700] leading-[39px] uppercase">
            Comprehensive Care Under One Roof
          </h2>
          <p className="description text-[#fff] font-[400]">
            Skip the hassle of driving to different clinics. At every Evolve
            location, you will find trusted specialists for massage to
            osteopathy and everything in between.
          </p>

          <Link to="/explore?category=wellness">
            <button className="btnPrimary">FIND A wellness expert</button>
          </Link>
        </div>

        <div className="flex flex-col items-center md:items-end justify-between h-[300px] sm:h-[350px] md:h-[440px] gap-4 md:gap-8 flex-1 w-full md:min-w-[600px]">
          <div className="flex gap-3 mb-6 justify-end w-full pr-2 max-md:hidden">
            {professionalServices.map((_, i) => (
              <div
                key={i}
                className={`h-1 rounded transition-all duration-300 ${
                  i === selectedIndex
                    ? "bg-white w-8 md:w-12"
                    : "bg-gray-400/60 w-6 md:w-8"
                }`}
              />
            ))}
          </div>

          <div className="flex flex-col md:flex-row items-center md:w-[600px] gap-8 md:gap-4 relative w-full pt-[120px] md:pt-0">
            <div className="overflow-hidden w-full relative" ref={emblaRef}>
              <div className="flex">
                {professionalServices.map((service, idx) => (
                  <div
                    key={idx}
                    className=" pl-0.5 md:pl-2.5 w-fit basis-1/3 md:basis-1/5"
                  >
                    <div
                      className={`w-[112px] h-[115px] sm:w-[90px] sm:h-[90px] md:w-[110px] md:h-[110px] rounded-[6px] overflow-hidden relative flex-shrink-0 transition-all duration-300 ${
                        idx === selectedIndex
                          ? "border-2 border-[#4AB04A] z-10"
                          : ""
                      }`}
                      onClick={() => {
                        if (emblaApi) {
                          emblaApi.scrollTo(idx);
                          handleUserInteraction();
                        }
                      }}
                    >
                      {/* Desktop Thumbnail Image */}
                      <img
                        src={service.images.desktopImage}
                        alt={`${service.title} Desktop`}
                        className="w-full h-full object-cover max-md:hidden"
                      />
                      {/* Mobile Thumbnail Image */}
                      <img
                        src={service.images.mobileImage}
                        alt={`${service.title} Mobile`}
                        className="w-full h-full object-cover md:hidden"
                      />
                      <div className="absolute bottom-0 left-0 w-full h-2/5 bg-gradient-to-t from-black/30 to-transparent flex items-end justify-center p-1 md:p-2">
                        <span className="text-white text-xs sm:text-sm font-bold text-center leading-tight">
                          {service.title}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex gap-3 mb-6 justify-start w-full pr-2 md:hidden">
              {professionalServices.map((_, i) => (
                <div
                  key={i}
                  className={`h-1  rounded transition-all duration-300 ${
                    i === selectedIndex
                      ? "bg-white w-8 md:w-12"
                      : "bg-gray-400/60 w-6 md:w-8"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={handlePrev}
              className="z-10 absolute right-[13%] md:right-[8%] bottom-[180px] md:-bottom-[70px] -translate-y-1/2 h-[32px] w-[32px] md:h-[36px] md:w-[36px] bg-transparent rounded-full border border-[#fff] flex items-center justify-center shadow cursor-pointer hover:bg-[#000000] hover:text-[#fff]"
            >
              <ArrowLeft className="w-3 h-3 md:w-5 md:h-5 text-white" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-[2%] md:right-[0%] bottom-[180px] md:-bottom-[70px] -translate-y-1/2 h-[32px] w-[32px] md:h-[36px] md:w-[36px] bg-transparent rounded-full border border-[#fff] flex items-center justify-center shadow cursor-pointer hover:bg-[#000000] hover:text-[#fff]"
            >
              <ArrowRight className="w-3 h-3 md:w-5 md:h-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WellnessServicesForEveryone;
