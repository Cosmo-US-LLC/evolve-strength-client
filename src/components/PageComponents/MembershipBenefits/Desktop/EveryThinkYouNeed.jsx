import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ArrowLeft, ArrowRight } from "lucide-react";
import LeftArrowIcon from "@/assets/images/MembershipBenefits/AccessEvolveLocationWithEase/left-arrow.svg";
import RightArrowIcon from "@/assets/images/MembershipBenefits/AccessEvolveLocationWithEase/right-arrow.svg";
import { professionalServices } from "../../../../constants/professionalServicesImages.js";

const EveryThinkYouNeed = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "start",
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
    <section className="py-12 bg-[#F9F9F9]">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 flex flex-col items-start gap-8">
        <div className="flex flex-col   gap-4 pb-10 md:pb-0">
          <h2 className="text-[#000] uppercase ">
            Everything You Need. All in One Place.
          </h2>
          <h4 className="text-[#000] w-full md:w-[719px] leading-[26px] font-[400]">
            At most gyms, your fitness journey ends when you leave. Recovery
            often means driving <br /> across town for physiotherapy, massage,
            or rehab. At Evolve, everything you need is in one <br /> place. You
            can move seamlessly between the gym and the wellness area, all
            within the <br />
            same building.
          </h4>
          <h4 className="leading-[26px] font-[400]">
            Wellness services are offered separately and are not part of the
            standard membership.
          </h4>
        </div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4 pl-0 md:pl-4">
              {professionalServices.map((pro, idx) => (
                <div
                  key={idx}
                  className="flex-[0_0_100%] md:flex-[0_0_32%] relative rounded-lg overflow-hidden"
                >
                  {/* Desktop Image */}
                  <img
                    src={pro.images.desktopImage}
                    alt={pro.title}
                    className="w-full h-[320px] md:h-[380px] object-cover hidden md:block"
                  />
                  {/* Mobile Image */}
                  <img
                    src={pro.images.mobileImage}
                    alt={pro.title}
                    className="w-full h-[400px] object-cover block md:hidden"
                  />
                  <h3 className="absolute bottom-[40px] left-0 right-0  flex items-center justify-center text-[#FFF] leading-[24px] font-[500]">
                    {pro.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute -top-1/11 md:-top-1/7 -translate-y-1/2 left-[74%] md:left-[87%] z-10">
            <button
              onClick={scrollPrev}
              className="bg-[#ffffff] p-2 rounded-full border border-[#000000] text-[#000000] hover:bg-gray-100 cursor-pointer"
            >
              <img
                src={LeftArrowIcon}
                alt="Previous"
                className="h-4 w-4 text-[#00000060] "
              />
            </button>
          </div>
          <div className="absolute -top-1/11 md:-top-1/7 -translate-y-1/2 right-[4%] md:right-[6%] z-10 ">
            <button
              onClick={scrollNext}
              className="bg-[#ffffff] p-2 rounded-full border border-[#000000] text-[#000000] hover:bg-gray-100 cursor-pointer"
            >
              <img
                src={RightArrowIcon}
                alt="Next"
                className="h-4 w-4 text-[#00000060]"
              />
            </button>
          </div>
        </div>

        {/* <button className="btnPrimary">APPLY NOW</button> */}
      </div>
    </section>
  );
};

export default EveryThinkYouNeed;
