import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ArrowLeft, ArrowRight } from "lucide-react";
import slide1 from "../../../../assets/images/spaces/WhoOurSpacesFor/slide1.webp";
import slide2 from "../../../../assets/images/spaces/WhoOurSpacesFor/slide2.webp";
import slide3 from "../../../../assets/images/spaces/WhoOurSpacesFor/slide3.webp";
import slide4 from "../../../../assets/images/spaces/WhoOurSpacesFor/slide4.webp";
import slide5 from "../../../../assets/images/spaces/WhoOurSpacesFor/slide5.webp";
import slide6 from "../../../../assets/images/spaces/WhoOurSpacesFor/slide6.webp";
import slide7 from "../../../../assets/images/spaces/WhoOurSpacesFor/slide7.webp";
import slide8 from "../../../../assets/images/spaces/WhoOurSpacesFor/slide8.webp";

const professionals = [
  { title: "Chiropractors", image: slide1 },
  { title: "Massage Therapists", image: slide2 },
  { title: "Acupuncturists", image: slide3 },
  { title: "Estheticians", image: slide4 },
  { title: "Pilates Instructors", image: slide5 },
  { title: "Dietitians", image: slide6 },
  { title: "Yoga", image: slide7 },
  { title: "Laser Therapists", image: slide8 },
];

const WhoOurSpacesFor = () => {
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
    <section className="py-12">
      <div className="max-w-[1280px] mx-auto px-8 flex flex-col items-start gap-8">
        <div className="flex flex-col gap-4">
          <h2 className="text-[#000] uppercase ">Who Our Spaces Are For</h2>
          <h4 className="text-[#000] w-[719px] leading-[26px] font-[400]">
            Whether you’re launching your first office or expanding to a new
            location, our spaces are <br /> designed for wellness professionals who
            want simplicity, stability, and support.
          </h4>
          <h4 className="leading-[26px] font-[500]">
            Professionals we serve include.
          </h4>
        </div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4 pl-4">
              {professionals.map((pro, idx) => (
                <div
                  key={idx}
                  className="flex-[0_0_24%] relative rounded-lg overflow-hidden"
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

          <div className="absolute -top-1/7 -translate-y-1/2 left-[86%] z-10">
            <button
              onClick={scrollPrev}
              className="bg-[#ffffff] p-2 rounded-full border border-[#000000] text-[#000000]"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
          </div>
          <div className="absolute -top-1/7 -translate-y-1/2 right-[6%] z-10">
            <button
              onClick={scrollNext}
              className="bg-[#ffffff] p-2 rounded-full border border-[#000000] text-[#000000]"
            >
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <button className="btnPrimary">APPLY NOW</button>
      </div>
    </section>
  );
};

export default WhoOurSpacesFor;
