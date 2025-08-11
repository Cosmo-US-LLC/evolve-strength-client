import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Trainers from "@/assets/images/Locations/WhyChooseEvolve/personal_trainer.webp";
import Equipments from "@/assets/images/Locations/WhyChooseEvolve/Equipments.webp";
import Health from "@/assets/images/Locations/WhyChooseEvolve/Health.webp";
const professionals = [
  {
    title: "Top Personal Trainers",
    image: Trainers,
    dec: "Train with certified personal trainers ranked in the top 1% locally. Programs are tailored to your goals, pace, and ability.",
  },
  {
    title: "Top of the Line Equipment",
    image: Equipments,
    dec: "Each gym is fully stocked with high-end machines, free weights, and tools built for strength, cardio, and recovery.",
  },
  {
    title: "Health and Wellness",
    image: Health,
    dec: "Access licensed physiotherapists, massage therapists, nutritionists, and other wellness professionals all in one place.",
  },
];

const LoWhyChooseEvolve = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      containScroll: "keepSnaps",
      loop: true,
      slidesToScroll: 1,
      align: "start",
    },
    [Autoplay({ delay: 2000, stopOnInteraction: false })]
  );

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();
  return (
    <section className="py-12 bg-[#FFFFFF]">
      <div className="max-w-[1280px] mx-auto md:px-8 px-4 flex flex-col items-start gap-8">
        <div className="flex items-start flex-col gap-4">
          <h2 className="text-[#000] uppercase ">Why Choose Evolve?</h2>
          <h4 className="mb-6 !max-w-[800px]">
            At Evolve, we help people across Canada reach their full potential
            through fitness, health, and wellness. We <br /> offer expert
            coaching, integrated health services, and top-tier facilities at a
            price you can afford.
          </h4>
          <Link to="https://subscription.evolvestrength.ca/">
 <button className="btnPrimary">Join Now</button>
 </Link>
        </div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4 pl-2 md:pl-0">
              {professionals.map((pro, idx) => (
                <div
                  key={idx}
                  className="flex-[0_0_100%] md:flex-[0_0_calc(50%-8px)] relative"
                >
                  <img
                    src={pro.image}
                    alt={pro.title}
                    className="w-full h-[400px] object-cover rounded-[10px]"
                  />
                  <h3 className="flex items-center mt-6 text-[#000] leading-[24px] font-[500]">
                    {pro.title}
                  </h3>

                  <h4 className="mt-4">{pro.dec}</h4>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute -top-1/12 md:-top-1/6 -translate-y-1/2 left-[74%] md:left-[86%] z-10">
            <button
              onClick={scrollPrev}
              className="p-2 rounded-full border border-[#000000] text-[#000000]"
            >
              <ArrowLeft className="w-4 h-4 md:w-6 md:h-6" />
            </button>
          </div>
          <div className="absolute -top-1/12 md:-top-1/6 -translate-y-1/2 right-[4%] md:right-[6%] z-10">
            <button
              onClick={scrollNext}
              className="p-2 rounded-full border border-[#000000] text-[#000000]"
            >
              <ArrowRight className="w-4 h-4 md:w-6 md:h-6" />
            </button>
          </div>
        </div>

        {/* <button className="btnPrimary">APPLY NOW</button> */}
      </div>
    </section>
  );
};

export default LoWhyChooseEvolve;
