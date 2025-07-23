import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import chiropracticCare from "../../../../assets/images/wellness/WellnessServicesForEveryone/chiropractic_care.webp";
import chiropracticHead from "../../../../assets/images/wellness/WellnessServicesForEveryone/chiropractic_head.webp";
import acupuncture from "../../../../assets/images/wellness/WellnessServicesForEveryone/acupuncture.webp";
import acupunctureFood from "../../../../assets/images/wellness/WellnessServicesForEveryone/acupuncture_food.webp";
import esthetician from "../../../../assets/images/wellness/WellnessServicesForEveryone/esthetician.webp";
import osteopathy from "../../../../assets/images/wellness/WellnessServicesForEveryone/osteopathy.webp";
import osteopathyGlass from "../../../../assets/images/wellness/WellnessServicesForEveryone/osteopathy_glass.webp";
import servicesImage from "../../../../assets/images/wellness/WellnessServicesForEveryone/services.webp";

const services = [
  {
    title: "Massage Therapy",
    image: chiropracticCare,
  },
  {
    title: "Dietitian",
    image: chiropracticHead,
  },
  {
    title: "Osteopathy",
    image: acupuncture,
  },
  {
    title: "Esthetician",
    image: acupunctureFood,
  },
  {
    title: "Pilates",
    image: esthetician,
  },
  {
    title: "Chiropractic",
    image: osteopathy,
  },
  {
    title: "Acupuncture",
    image: osteopathyGlass,
  },
  {
    title: "Reflexology",
    image: servicesImage,
  },
];

const CARDS_VISIBLE = 5;

function WellnessServicesForEveryone() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    slidesToScroll: 1,
    containScroll: "keepSnaps",
    align: "start",
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  const handlePrev = () => emblaApi && emblaApi.scrollPrev();
  const handleNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <section className="relative w-full h-[636px] md:h-[600px] flex items-center justify-center bg-black/80 overflow-hidden">
      <img
        src={services[selectedIndex]?.image || ""}
        alt="Wellness Hero"
        className="absolute inset-0 w-full h-full object-cover z-0 transition-all duration-500"
      />
      <div className="absolute inset-0 bg-black/60 z-10 transition-all duration-500" />

      <div className="relative z-20 w-full h-full max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-8">
        <div className="flex flex-col items-start gap-4 md:gap-6 w-full md:max-w-[423px] text-left py-12 md:py-0 mb-6 md:mb-0">
          <h2 className="text-[#fff] font-[700] leading-[39px] uppercase">
            Wellness Services For Everyone.
          </h2>
          <p className="description text-[#fff] font-[400]">
            Take full advantage of a wide range of wellness services at every
            Evolve location, available at an additional cost.
          </p>
          <button className="btnPrimary">FIND A WELLNESS EXPERT</button>
        </div>

        <div className="flex flex-col items-center md:items-end justify-between h-[300px] sm:h-[350px] md:h-[440px] gap-4 md:gap-8 flex-1 w-full md:min-w-[600px]">
          <div className="flex gap-3 mb-6 justify-end w-full pr-2 max-md:hidden">
            {services.map((_, i) => (
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
              <div className="flex gap-2 md:gap-3">
                {services.map((service, idx) => (
                  <div
                    key={idx}
                    className={`w-[80px] h-[80px] sm:w-[90px] sm:h-[90px] md:w-[110px] md:h-[110px] rounded-[10px] overflow-hidden relative flex-shrink-0 transition-all duration-300 ${
                      idx === selectedIndex
                        ? "border-1 border-[#4AB04A] z-10"
                        : ""
                    }`}
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 w-full h-2/5 bg-gradient-to-t from-black/70 to-transparent flex items-end justify-center p-1 md:p-2">
                      <span className="text-white text-xs sm:text-sm font-bold text-center leading-tight">
                        {service.title}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex gap-3 mb-6 justify-start w-full pr-2 md:hidden">
              {services.map((_, i) => (
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
            <button
              onClick={handlePrev}
              className="z-10 absolute right-[13%] md:right-[9%] bottom-[140px] md:-bottom-[70px] -translate-y-1/2 h-[32px] w-[32px] md:h-[36px] md:w-[36px] bg-transparent rounded-full border border-[#fff] flex items-center justify-center shadow"
            >
              <ArrowLeft className="w-3 h-3 md:w-5 md:h-5 text-white" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-[2%] md:right-[1%] bottom-[140px] md:-bottom-[70px] -translate-y-1/2 h-[32px] w-[32px] md:h-[36px] md:w-[36px] bg-transparent rounded-full border border-[#fff] flex items-center justify-center shadow"
            >
              <ArrowRight className="w-3 h-3 md:w-5 md:h-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WellnessServicesForEveryone;
