import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { professionalServices } from "../../../../constants/professionalServicesImages.js";

const WhoOurSpacesFor = () => {
  // Carousel
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      containScroll: "trimSnaps",
      loop: true,
      slidesToScroll: 1,
      align: "start",
    },
    [Autoplay({ delay: 3000, stopOnInteraction: true })]
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
    <section className="py-12">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 flex flex-col items-start gap-8">
        <div className="flex flex-col gap-4">
          <h2 className="text-[#000] uppercase">
            Spaces Built for Wellness Professionals
          </h2>
          <h4 className="text-[#000] md:w-[719px] leading-[26px] font-[400]">
            Whether you're launching your first office or expanding to a new
            location, our spaces are <br className="hidden md:block" /> designed
            for wellness professionals who want simplicity, stability, and
            support.
          </h4>
          <h4 className="leading-[26px] font-[500]">
            Professionals we serve include.
          </h4>
        </div>

        <div className="relative w-full">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-0.5 md:-ml-2.5">
              {professionalServices.map((pro, idx) => (
                <div
                  key={idx}
                  className="pl-0.5 md:pl-2.5 w-fit basis-full md:basis-1/4 flex-shrink-0"
                >
                  <div className="flex relative rounded-lg overflow-hidden">
                    {/* Desktop Image */}
                    <img
                      src={pro.images.desktopImage}
                      alt={pro.title}
                      className="w-full h-[380px] object-cover hidden md:block"
                    />
                    {/* Mobile Image */}
                    <img
                      src={pro.images.mobileImage}
                      alt={pro.title}
                      className="w-full h-[380px] object-cover block md:hidden"
                    />
                    <h3 className="absolute bottom-[40px] left-0 right-0 flex items-center justify-center text-[#FFF] leading-[24px] font-[500]">
                      {pro.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute -top-1/7 -translate-y-1/2 left-[92%] z-10 max-md:hidden">
            <button
              onClick={scrollPrev}
              className="bg-[#ffffff] p-2 rounded-full border border-[#000000] text-[#000000] cursor-pointer hover:bg-[#000000] hover:text-[#fff]"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
          </div>
          <div className="absolute -top-1/7 -translate-y-1/2 right-[0.5%] z-10 max-md:hidden">
            <button
              onClick={scrollNext}
              className="bg-[#ffffff] p-2 rounded-full border border-[#000000] text-[#000000] cursor-pointer hover:bg-[#000000] hover:text-[#fff]"
            >
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <Link to="/join-the-wait-list">
          <button className="btnPrimary">Join the Waitlist</button>
        </Link>
      </div>
    </section>
  );
};

export default WhoOurSpacesFor;
