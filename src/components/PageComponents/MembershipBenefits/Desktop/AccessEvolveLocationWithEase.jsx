import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import LeftArrowIcon from "@/assets/images/MembershipBenefits/AccessEvolveLocationWithEase/left-arrow.svg";
import RightArrowIcon from "@/assets/images/MembershipBenefits/AccessEvolveLocationWithEase/right-arrow.svg";

import Slide1 from "@/assets/images/MembershipBenefits/AccessEvolveLocationWithEase/slide1.webp";
import Slide2 from "/src/assets/images/home/facility/seton5.webp";
import Slide3 from "/src/assets/images/home/facility/seton6.webp";
import Slide4 from "/src/assets/images/home/facility/seton7.webp";
import Slide5 from "/src/assets/images/home/facility/north4.webp";
import Slide6 from "/src/assets/images/home/facility/north5.webp";
import Slide7 from "/src/assets/images/home/facility/downtown_3.webp";
import Slide8 from "/src/assets/images/home/facility/downtown_4.webp";
import Slide9 from "/src/assets/images/home/facility/downtown_5.webp";
import Slide10 from "/src/assets/images/home/facility/royal_oak_5.webp";
import Slide11 from "/src/assets/images/home/facility/royal_oak_6.webp";
import Slide12 from "/src/assets/images/home/facility/royal_oak_8.webp";
import Slide13 from "/src/assets/images/home/facility/south_3.webp";
import Slide14 from "/src/assets/images/home/facility/south_8.webp";
import Slide15 from "/src/assets/images/home/facility/sunridge3.webp";
import Slide16 from "/src/assets/images/home/facility/sunridge5.webp";
import Slide17 from "/src/assets/images/home/facility/sunridge7.webp";
import Slide18 from "/src/assets/images/home/facility/brentwood3.webp";
import Slide19 from "/src/assets/images/home/facility/brentwood6.webp";
import Slide20 from "/src/assets/images/home/facility/brentwood8.webp";

const AccessEvolveLocationWithEase = () => {
  const slides = [
    { imageUrl: Slide1, alt: "Evolve gym location 1" },
    { imageUrl: Slide2, alt: "Evolve gym location 2" },
    { imageUrl: Slide3, alt: "Evolve gym location 3" },
    { imageUrl: Slide4, alt: "Evolve gym location 4" },
    { imageUrl: Slide5, alt: "Evolve gym location 5" },
    { imageUrl: Slide6, alt: "Evolve gym location 6" },
    { imageUrl: Slide7, alt: "Evolve gym location 7" },
    { imageUrl: Slide8, alt: "Evolve gym location 8" },
    { imageUrl: Slide9, alt: "Evolve gym location 9" },
    { imageUrl: Slide10, alt: "Evolve gym location 10" },
    { imageUrl: Slide11, alt: "Evolve gym location 11" },
    { imageUrl: Slide12, alt: "Evolve gym location 12" },
    { imageUrl: Slide13, alt: "Evolve gym location 13" },
    { imageUrl: Slide14, alt: "Evolve gym location 14" },
    { imageUrl: Slide15, alt: "Evolve gym location 15" },
    { imageUrl: Slide16, alt: "Evolve gym location 16" },
    { imageUrl: Slide17, alt: "Evolve gym location 17" },
    { imageUrl: Slide18, alt: "Evolve gym location 18" },
    { imageUrl: Slide19, alt: "Evolve gym location 19" },
    { imageUrl: Slide20, alt: "Evolve gym location 20" },
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      containScroll: "trimSnaps",
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
    <div className="py-16 flex flex-col items-center gap-8">
      <div className="flex flex-col items-center justify-center text-center gap-4">
        <h2 className="text-[#000] uppercase leading-[39px] max-w-[703px]">
          ACCESS EVERY EVOLVE LOCATION WITH EASE
        </h2>
        <h4 className="text-[#000] w-full max-w-[358px] md:max-w-[890px] font-[400] leading-[22px]">
          Train where you want, when you want. Your Evolve membership gives you
          seamless access to all our locations across Canada. Step into
          spacious, modern facilities designed for your comfort.
        </h4>
      </div>

      <div className="relative w-full">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {slides.map((slide, index) => (
              <div key={index} className="flex-[0_0_100%] min-w-0">
                <img
                  src={slide.imageUrl}
                  alt={slide.alt}
                  className="w-full aspect-[4/3] md:aspect-[16/9] xl:aspect-[21/9] 2xl:aspect-[24/9] object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-row absolute md:-top-25 right-32 md:right-20 p-4 rounded-md z-10 gap-3 md:gap-5">
          <button
            onClick={scrollPrev}
            className="h-[46px] w-[46px] bg-white rounded-full border border-[#00000060] flex items-center justify-center shadow hover:bg-gray-100 cursor-pointer"
          >
            <img
              src={LeftArrowIcon}
              alt="Previous"
              className="h-5 w-5 text-[#00000060]"
            />
          </button>
          <button
            onClick={scrollNext}
            className="h-[46px] w-[46px] bg-white rounded-full border border-[#00000060] flex items-center justify-center shadow hover:bg-gray-100 cursor-pointer"
          >
            <img
              src={RightArrowIcon}
              alt="Next"
              className="h-5 w-5 text-[#00000060]"
            />
          </button>
        </div>
      </div>

      <Link to="https://tour.evolvestrength.ca/tour-form ">
        <button className="btnPrimary mt-10 md:mt-0">BOOK A FREE TOUR</button>
      </Link>
    </div>
  );
};

export default AccessEvolveLocationWithEase;
