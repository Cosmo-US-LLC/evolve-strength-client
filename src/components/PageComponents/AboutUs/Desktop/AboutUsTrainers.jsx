import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const professionals = [
  {
    title: "Strength Training",
    image:
      "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/AboutUs/AboutUs_Trainers/Strenght_Training.webp",
  },
  {
    title: "Body Weight Training",
    image:
      "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/AboutUs/AboutUs_Trainers/Weight_Training.webp",
  },
  {
    title: "Cardio",
    image:
      "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/AboutUs/AboutUs_Trainers/Cardio.webp",
  },
  {
    title: "Turf Workout",
    image:
      "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/AboutUs/AboutUs_Trainers/Turf_Workout.webp",
  },
  {
    title: "Olympic Lifting",
    image:
      "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/AboutUs/AboutUs_Trainers/Olympic_Lifting.webp",
  },
  {
    title: "Yoga",
    image:
      "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/AboutUs/AboutUs_Trainers/Yoga.webp",
  },
];

const AboutUsTrainers = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      containScroll: "keepSnaps",
      loop: true,
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
    <section className=" md:py-0 bg-[#EEEEEE]">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 flex flex-col items-start gap-8">
        <div className="flex items-start flex-col gap-4 pb-6 md:pb-0">
          <h2 className="text-[#000] uppercase ">Trainers</h2>
          <h4 className="mb-6 !max-w-[800px]">
            Our personal trainers are more than fitness professionals. They're
            passionate partners in your growth. Each one is certified and
            experienced in helping people set clear goals, stay consistent, and
            see real results.
          </h4>
          <div className="flex flex-row gap-4">
          <Link to="/explore?category=trainers">
            <button className="btnPrimary">FIND A TRAINER</button>
          </Link>
          <Link to="/wellness">
            <button className="btnSecondary !bg-[#000] !border-[#fff] !border-2 !text-[#fff] hover:!border-[#000] hover:!bg-[#fff] hover:!text-[#000]">BECAME A PRACTITIONERS</button>
          </Link>
          </div>
        </div>
        <div className="relative w-full">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4 pl-0 md:pl-4">
              {professionals.map((pro, idx) => (
                <div
                  key={idx}
                  className="flex-[0_0_100%] md:flex-[0_0_32.5%] relative"
                >
                  <img
                    src={pro.image}
                    alt={pro.title}
                    className="w-full h-[220px] md:h-[253px] object-cover rounded-lg"
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
              className=" p-2 rounded-full border border-[#000000] text-[#000000] hover:bg-gray-300 cursor-pointer"
            >
              <ArrowRight className="w-4 h-4 md:w-6 md:h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsTrainers;
