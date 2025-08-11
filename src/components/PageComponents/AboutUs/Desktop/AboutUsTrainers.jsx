import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import strength from "@/assets/images/AboutUs/AboutUs_Trainers/Strenght_Training.webp";
import Cardio from "@/assets/images/AboutUs/AboutUs_Trainers/Cardio.webp";
import Body from "@/assets/images/AboutUs/AboutUs_Trainers/Weight_Training.webp";
import Turf from "@/assets/images/AboutUs/AboutUs_Trainers/Turf_Workout.webp";
import Olympic from "@/assets/images/AboutUs/AboutUs_Trainers/Olympic_Lifting.webp";
import Yoga from "@/assets/images/AboutUs/AboutUs_Trainers/Yoga.webp";

const professionals = [
  { title: " Strength Training", image: strength },
  { title: "Body Weight Training", image: Body },
  { title: "Cardio", image: Cardio },
  { title: "Turf Workout", image: Turf },
  { title: "Olympic Lifting", image: Olympic },
  { title: "Yoga", image: Yoga },
];

const AboutUsTrainers = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      containScroll: "keepSnaps",
      loop: true,
    },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );
  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();
  return (
    <section className=" md:py-0 bg-[#EEEEEE]">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 flex flex-col items-start gap-8">
        <div className="flex items-start flex-col gap-4 pb-6 md:pb-0">
          <h2 className="text-[#000] uppercase ">Trainers</h2>
          <h4 className="mb-6 !max-w-[800px]">
            Our personal trainers are more than fitness professionals. They’re
            passionate partners in your growth. Each one is certified and
            experienced in helping people set clear goals, stay consistent, and
            see real results. 
          </h4>
          <Link to="/explore">
            <button className="btnPrimary">FIND A TRAINER</button>
          </Link>
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
                    className="w-full h-[200px] md:h-[273px] object-cover rounded-lg"
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
