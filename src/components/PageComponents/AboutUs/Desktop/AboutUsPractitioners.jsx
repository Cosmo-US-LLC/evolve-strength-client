import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { professionalServices } from "../../../../constants/professionalServicesImages.js";

const AboutUsPractitioners = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      containScroll: "keepSnaps",
      loop: true,
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
    <section className="py-8 md:py-12 bg-[#EEEEEE]">
      <div className="max-w-[1280px] mx-auto px-4   md:px-8 flex flex-col items-start gap-8">
        <div className="flex items-start flex-col gap-6">
          <h2 className="text-[#000] uppercase ">Practitioners</h2>
          <h4 className=" !max-w-[800px]">
            Evolve brings together a team of licensed professionals so you can
            take care of your body and mind under one roof. We make it easy to
            access health services without having to leave your gym.
          </h4>
          <Link to="/explore?category=wellness">
            <button className="btnPrimary">FIND A wellness expert</button>
          </Link>{" "}
        </div>
        <div className="relative w-full">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4 pl-0 md:pl-4">
              {professionalServices.map((pro, idx) => (
                <div
                  key={idx}
                  className="flex-[0_0_100%] md:flex-[0_0_32.5%] relative"
                >
                  {/* Desktop Image */}
                  <img
                    src={pro.images.desktopImage}
                    alt={pro.title}
                    className="w-full h-[220px] md:h-[273px] object-cover rounded-lg hidden md:block"
                  />
                  {/* Mobile Image */}
                  <img
                    src={pro.images.mobileImage}
                    alt={pro.title}
                    className="w-full h-[290px] object-cover rounded-lg block md:hidden"
                  />
                  <h3 className="flex items-center mt-4 md:mt-6 text-[#000] leading-[20px] md:leading-[24px] font-[500] text-sm md:text-base">
                    {pro.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute -top-1/9 md:-top-1/6 -translate-y-1/2 left-[74%] md:left-[86%] z-10">
            <button
              onClick={scrollPrev}
              className=" p-2 rounded-full border border-[#000000] text-[#000000] hover:bg-gray-300 cursor-pointer "
            >
              <ArrowLeft className="w-4 h-4 md:w-6 md:h-6" />
            </button>
          </div>
          <div className="absolute -top-1/9 md:-top-1/6 -translate-y-1/2 right-[4%] md:right-[6%] z-10">
            <button
              onClick={scrollNext}
              className=" p-2 rounded-full border border-[#000000] text-[#000000] hover:bg-gray-300 cursor-pointer "
            >
              <ArrowRight className="w-4 h-4 md:w-6 md:h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutUsPractitioners;
