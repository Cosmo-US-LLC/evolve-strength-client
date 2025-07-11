import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ArrowLeft, ArrowRight } from "lucide-react";
import LeftArrowIcon from "@/assets/images/MembershipBenefits/AccessEvolveLocationWithEase/left-arrow.svg";
import RightArrowIcon from "@/assets/images/MembershipBenefits/AccessEvolveLocationWithEase/right-arrow.svg";
import slide1 from "../../../../assets/images/MembershipBenefits/EveryThinkYouNeed/slide1.webp";
import slide2 from "../../../../assets/images/MembershipBenefits/EveryThinkYouNeed/slide2.webp";
import slide3 from "../../../../assets/images/MembershipBenefits/EveryThinkYouNeed/slide3.webp";
import slide4 from "../../../../assets/images/MembershipBenefits/EveryThinkYouNeed/slide4.webp";
import slide5 from "../../../../assets/images/MembershipBenefits/EveryThinkYouNeed/slide5.webp";
import slide6 from "../../../../assets/images/MembershipBenefits/EveryThinkYouNeed/slide6.webp";
import slide7 from "../../../../assets/images/MembershipBenefits/EveryThinkYouNeed/slide7.webp";
import slide8 from "../../../../assets/images/MembershipBenefits/EveryThinkYouNeed/slide8.webp";
import slide9 from "../../../../assets/images/MembershipBenefits/EveryThinkYouNeed/slide9.webp";

const professionals = [
  { title: "Physiotherapy", image: slide1 },
  { title: "Pilates", image: slide2 },
  { title: "Massage Therapy", image: slide3 },
  { title: "Chiropractic Care", image: slide4 },
  { title: "Acupuncture", image: slide5 },
  { title: "Dietitian Services", image: slide6 },
  { title: "Dietitian Services", image: slide7 },
  { title: "Laser Therapists", image: slide8 },
  { title: "Esthetician", image: slide9 },
];

const EveryThinkYouNeed = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      containScroll: "keepSnaps",
      loop: true,
    },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <section className="py-12 bg-[#F9F9F9]">
      <div className="max-w-[1280px] mx-auto px-8 flex flex-col items-start gap-8">
        <div className="flex flex-col gap-4">
          <h2 className="text-[#000] uppercase ">
            Everything You Need. All in One <br /> Place.
          </h2>
          <h4 className="text-[#000] w-[719px] leading-[26px] font-[400]">
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
            <div className="flex gap-4 pl-4">
              {professionals.map((pro, idx) => (
                <div
                  key={idx}
                  className="flex-[0_0_28%] relative rounded-lg overflow-hidden"
                >
                  <img
                    src={pro.image}
                    alt={pro.title}
                    className="w-full h-[400px] object-cover"
                  />
                  <h3 className="absolute bottom-[40px] left-0 right-0 bg-[]  flex items-center justify-center text-[#FFF] leading-[24px] font-[500]">
                    {pro.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute -top-1/7 -translate-y-1/2 left-[87%] z-10">
            <button
              onClick={scrollPrev}
              className="bg-[#ffffff] p-2 rounded-full border border-[#000000] text-[#000000]"
            >
              <img
                src={LeftArrowIcon}
                alt="Previous"
                className="h-4 w-4 text-[#00000060]"
              />
            </button>
          </div>
          <div className="absolute -top-1/7 -translate-y-1/2 right-[6%] z-10">
            <button
              onClick={scrollNext}
              className="bg-[#ffffff] p-2 rounded-full border border-[#000000] text-[#000000]"
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
