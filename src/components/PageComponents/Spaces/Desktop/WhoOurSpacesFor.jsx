import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import slide1 from "../../../../assets/images/spaces/WhoOurSpacesFor/slide1.webp";
import slide2 from "../../../../assets/images/spaces/WhoOurSpacesFor/slide2.webp";
import slide3 from "../../../../assets/images/spaces/WhoOurSpacesFor/slide3.webp";
import slide4 from "../../../../assets/images/spaces/WhoOurSpacesFor/slide4.webp";
import slide5 from "../../../../assets/images/spaces/WhoOurSpacesFor/slide5.webp";
import slide6 from "../../../../assets/images/spaces/WhoOurSpacesFor/slide6.webp";
import slide7 from "../../../../assets/images/spaces/WhoOurSpacesFor/slide7.webp";
import slide8 from "../../../../assets/images/spaces/WhoOurSpacesFor/slide8.webp";
import slide9 from "../../../../assets/images/spaces/WhoOurSpacesFor/slide9.webp";

const professionals = [
  { title: "Chiropractors", image: slide1 },
  { title: "Massage Therapists", image: slide2 },
  { title: "Acupuncturists", image: slide3 },
  { title: "Estheticians", image: slide4 },
  { title: "physiotherapy", image: slide5 },
  { title: "Dietitians", image: slide6 },
  { title: "Yoga", image: slide7 },
  { title: "Laser Therapists", image: slide8 },
  { title: "Mental Health", image: slide9 },
];

const WhoOurSpacesFor = () => {
  // Carousel
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      containScroll: "trimSnaps",
      loop: true,
      slidesToScroll: 1,
      align: "start",
    },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <section className="py-12">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 flex flex-col items-start gap-8">
        <div className="flex flex-col gap-4">
          <h2 className="text-[#000] uppercase">Who Our Spaces Are For</h2>
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
              {professionals.map((pro, idx) => (
                <div className=" pl-0.5 md:pl-2.5 w-fit md:basis-1/4.1 flex-shrink-0">
                  <div
                    key={idx}
                    className="flex relative rounded-lg overflow-hidden"
                  >
                    <img
                      src={pro.image}
                      alt={pro.title}
                      className="w-full h-[400px] object-cover"
                    />
                    <h3 className="absolute bottom-[40px] left-0 right-0 flex items-center justify-center text-[#FFF] leading-[24px] font-[500]">
                      {pro.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute -top-1/7 -translate-y-1/2 left-[86%] z-10 max-md:hidden">
            <button
              onClick={scrollPrev}
              className="bg-[#ffffff] p-2 rounded-full border border-[#000000] text-[#000000] hover:bg-gray-100 transition-colors"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
          </div>
          <div className="absolute -top-1/7 -translate-y-1/2 right-[6%] z-10 max-md:hidden">
            <button
              onClick={scrollNext}
              className="bg-[#ffffff] p-2 rounded-full border border-[#000000] text-[#000000] hover:bg-gray-100 transition-colors"
            >
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <Link to="/join-the-wait-list">
              <button className="btnPrimary">Apply Now</button>
            </Link>
      </div>
    </section>
  );
};

export default WhoOurSpacesFor;
