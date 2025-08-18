import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { professionalServices } from "../../../../constants/professionalServicesImages.js";

const MembershipRecovery = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      containScroll: "keepSnaps",
      loop: true,
    },
    [Autoplay({ delay: 4000, stopOnInteraction: true })]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev();
      // Reset autoplay after manual navigation
      const autoplayPlugin = emblaApi.plugins().autoplay;
      if (autoplayPlugin) {
        autoplayPlugin.stop();
        autoplayPlugin.play();
      }
    }
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext();
      // Reset autoplay after manual navigation
      const autoplayPlugin = emblaApi.plugins().autoplay;
      if (autoplayPlugin) {
        autoplayPlugin.stop();
        autoplayPlugin.play();
      }
    }
  }, [emblaApi]);

  return (
    <section className="py-12 bg-[#EEEEEE]">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 flex flex-col items-start gap-16 md:gap-8">
        <div className="flex flex-col gap-4">
          <h2 className="text-[#000] uppercase ">Recovery Services</h2>
        </div>

        <div className="relative w-full">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-0.5 md:-ml-2.5">
              {professionalServices.map((pro, idx) => (
                <div className="pl-0.5 md:pl-2.5 w-fit md:basis-1/3 flex-shrink-0">
                  <div key={idx} className="relative">
                    <img
                      src={pro.image}
                      alt={pro.title}
                      className="w-full max-md:w-[350px] md:w-[400px] h-[230px] md:h-[260px] object-cover rounded-[8px]"
                    />
                    <h3 className="flex items-center mt-6 text-[#000] leading-[24px] font-[500]">
                      {pro.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute -top-1/9 md:-top-1/6 -translate-y-1/2 left-[76%] md:left-[86%] z-10">
            <button
              onClick={scrollPrev}
              className="p-2 rounded-full border border-[#000000] text-[#000000] hover:bg-gray-300 cursor-pointer"
            >
              <ArrowLeft className="w-4 md:w-6 h-4 md:h-6" />
            </button>
          </div>
          <div className="absolute -top-1/9 md:-top-1/6 -translate-y-1/2 right-[2%] md:right-[6%] z-10">
            <button
              onClick={scrollNext}
              className="p-2 rounded-full border border-[#000000] text-[#000000] hover:bg-gray-300 cursor-pointer"
            >
              <ArrowRight className="w-4 md:w-6 h-4 md:h-6" />
            </button>
          </div>
        </div>

        {/* <button className="btnPrimary">APPLY NOW</button> */}
      </div>
    </section>
  );
};

export default MembershipRecovery;
