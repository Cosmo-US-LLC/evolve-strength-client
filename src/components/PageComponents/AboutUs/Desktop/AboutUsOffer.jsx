import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { professionalMembershipPremiumAmenities } from "../../../../constants/professionalServicesImages.js";
import { Link } from "react-router-dom";

const AboutUsOffer = () => {
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
    <section className="py-12 bg-[#EEEEEE]">
      <div className="max-w-[1280px] mx-auto md:px-8 px-4 flex flex-col items-start gap-8">
        <h1 className="!text-[40px] text-[#4AB04A] md:text-center md:self-center">
          WHAT WE OFFER
        </h1>
        <div className="flex items-start flex-col gap-4 pb-6 md:pb-0">
          <h2 className="text-[#000] uppercase ">
            Spacious and Modern Facilities
          </h2>
          <h4 className="mb-6 !max-w-[800px]">
            Our gyms are designed to give you room to move, train, and recover
            without feeling crowded. Each location offers more training space
            than a typical gym in Canada. We build with purpose, ensuring every
            area supports your fitness and wellness journey.
          </h4>
          <Link to="https://tour.evolvestrength.ca/tour-form">
            <button className="btnPrimary">BOOK A FREE TOUR</button>
          </Link>
        </div>

        <div className="relative w-full">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex md:gap-4 md:pl-4 ">
              {professionalMembershipPremiumAmenities.map((pro, idx) => (
                <div
                  key={idx}
                  className="flex-[0_0_100%] md:flex-[0_0_32.5%] relative"
                >
                  <img
                    src={pro.image}
                    alt={pro.title}
                    className="w-full md:w-[400px] p-1 md:p-0 h-[230px] md:h-[253px] rounded-[10px] md:rounded-[8px] object-cover"
                  />
                  <h3 className="flex items-center mt-6 text-[#000] leading-[24px] font-[500]">
                    {pro.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute -top-1/9 left-[70%]  md:-top-1/6 md:left-[86%] -translate-y-1/2  z-10 ">
            <button
              onClick={scrollPrev}
              className="p-2 rounded-full border border-[#000000] text-[#000000] hover:bg-gray-300 cursor-pointer"
            >
              <ArrowLeft className="md:w-6 md:h-6 w-4 h-4" />
            </button>
          </div>
          <div className="absolute -top-1/9  md:-top-1/6  -translate-y-1/2 left-[83%] md:left-auto md:right-[6%] z-10">
            <button
              onClick={scrollNext}
              className="p-2 rounded-full border border-[#000000] text-[#000000] hover:bg-gray-300 cursor-pointer"
            >
              <ArrowRight className="md:w-6 md:h-6  w-4 h-4" />
            </button>
          </div>
        </div>

        {/* <button className="btnPrimary">APPLY NOW</button> */}
      </div>
    </section>
  );
};

export default AboutUsOffer;
