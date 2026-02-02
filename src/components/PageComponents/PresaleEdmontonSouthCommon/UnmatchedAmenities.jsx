import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ArrowLeft, ArrowRight } from "lucide-react";
import UnmatchedAmenitiesImage1 from "../../../assets/images/PresaleEdmontonSouthCommon/unmatched_amentities/unmatched_amentities_image1.webp";
import UnmatchedAmenitiesImage2 from "../../../assets/images/PresaleEdmontonSouthCommon/unmatched_amentities/unmatched_amentities_image2.webp";
import UnmatchedAmenitiesImage3 from "../../../assets/images/PresaleEdmontonSouthCommon/unmatched_amentities/unmatched_amentities_image3.webp";
import UnmatchedAmenitiesImage4 from "../../../assets/images/PresaleEdmontonSouthCommon/unmatched_amentities/unmatched_amentities_image4.webp";
import UnmatchedAmenitiesImage5 from "../../../assets/images/PresaleEdmontonSouthCommon/unmatched_amentities/unmatched_amentities_image5.webp";
import UnmatchedAmenitiesImage6 from "../../../assets/images/PresaleEdmontonSouthCommon/unmatched_amentities/unmatched_amentities_image6.webp";

const unmatchedAmenities = [
  {
    title: "Full Commercial Gym Access",
    image: UnmatchedAmenitiesImage1,
  },
  {
    title: "On-Site Parking",
    image: UnmatchedAmenitiesImage2,
  },
  {
    title: "Comfortable Waiting Area",
    image: UnmatchedAmenitiesImage3,
  },
  {
    title: "Executive Locker Rooms",
    image: UnmatchedAmenitiesImage4,
  },
  {
    title: "Executive Locker Rooms",
    image: UnmatchedAmenitiesImage5,
  },
  {
    title: "Saunas",
    image: UnmatchedAmenitiesImage6,
  },
];

const UnmatchedAmenities = () => {
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
    <section className="py-8 md:py-16 bg-[#ffffff]">
      <div className="max-w-[1280px] mx-auto px-4   md:px-8 flex flex-col items-start gap-16 md:gap-8">
        <div className="flex items-start flex-col gap-4">
          <h2 className="text-[#000] uppercase ">Unmatched Amenities</h2>
          <h4 className=" !max-w-[800px]">
          Experience the ultimate in training and recovery at Evolve Strength.
          </h4>
        </div>
        <div className="relative w-full">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4 pl-0 md:pl-4">
              {unmatchedAmenities.map((pro, idx) => (
                <div
                  key={idx}
                  className="flex-[0_0_100%] md:flex-[0_0_32.5%] relative"
                >
                  {/* Desktop Image */}
                  <img
                    src={pro.image}
                    alt={pro.title}
                    className="w-full h-[200px] md:h-[233px] object-cover rounded-lg"
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
export default UnmatchedAmenities;
