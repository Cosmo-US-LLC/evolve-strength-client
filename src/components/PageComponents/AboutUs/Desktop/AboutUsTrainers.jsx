import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ArrowLeft, ArrowRight } from "lucide-react";
import strength from "@/assets/images/AboutUs/AboutUs_Trainers/Strenght_Training.webp"
import Cardio from "@/assets/images/AboutUs/AboutUs_Trainers/Cardio.webp"
import Body from "@/assets/images/AboutUs/AboutUs_Trainers/Weight_Training.webp"
import Turf from "@/assets/images/AboutUs/AboutUs_Trainers/Turf_Workout.webp"
import Olympic from "@/assets/images/AboutUs/AboutUs_Trainers/Olympic_Lifting.webp"
import Yoga from "@/assets/images/AboutUs/AboutUs_Trainers/Yoga.webp"


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
        [Autoplay({ delay: 3000, stopOnInteraction: false })]
    );

    const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
    const scrollNext = () => emblaApi && emblaApi.scrollNext();

    return (
        <section className="py-12 bg-[#EEEEEE]">
            <div className="max-w-[1280px] mx-auto px-8 flex flex-col items-start gap-8">
                <div className="flex items-start flex-col gap-4 pb-6 md:pb-0">
                    <h2 className="text-[#000] uppercase ">Trainers</h2>
                    <h4 className="mb-6 !max-w-[800px]">Our personal trainers are more than fitness professionals. They’re passionate partners in your growth. Each one is certified and experienced in helping people set clear goals, stay consistent, and see real results. </h4>
                <button className="btnPrimary ">
                 Find A TRAINER
                </button>
                </div>


                <div className="relative">
                     <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex md:gap-4 md:pl-4 ">
              {professionals.map((pro, idx) => (
                <div
                  key={idx}
                  className="flex-[0_0_102%] md:flex-[0_0_32.5%] relative"
                >
                  <img
                    src={pro.image}
                    alt={pro.title}
                    className="md:w-[400px]  h-[244px] md:h-[273px] p-1 md:p-0 object-cover"
                  />
                  <h3 className="flex items-center mt-6 text-[#000] leading-[24px] font-[500]">
                    {pro.title}
                  </h3>
                </div>
                
              ))}
            </div>
          </div>

        <div className="absolute -top-1/9 left-[70%]  md:-top-1/6 md:left-[86%] -translate-y-1/2  z-10">
                   <button
                     onClick={scrollPrev}
                     className="p-2 rounded-full border border-[#000000] text-[#000000]"
                   >
                     <ArrowLeft className="md:w-6 md:h-6 w-4 h-4" />
                   </button>
                 </div>
                 <div className="absolute -top-1/9  md:-top-1/6  -translate-y-1/2 left-[82%] md:left-auto md:right-[6%] z-10">
                   <button
                     onClick={scrollNext}
                     className="p-2 rounded-full border border-[#000000] text-[#000000]"
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

export default AboutUsTrainers;
