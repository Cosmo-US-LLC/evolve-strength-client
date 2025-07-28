import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ArrowLeft, ArrowRight } from "lucide-react";
import kieryn from "@/assets/images/Locations/MeetTheTrainers/Kieryn.webp"
import Naomi from "@/assets/images/Locations/MeetTheTrainers/Naomi.webp"
import Paige from "@/assets/images/Locations/MeetTheTrainers/Paige.webp"
import Steven from "@/assets/images/Locations/MeetTheTrainers/Steven.webp"
import downicon from "@/assets/images/Locations/icon_down.svg"



const professionals = [
  { title: "Paige Thomson", image: Paige , des:"Manual Osteopathic Practitioner" },
  { title: " Kieryn Marcellus", image:  kieryn, des:"Personal Trainer"  },
  { title: "Steven Fitzpatrick", image: Steven, des:"Personal Trainer" },
  { title: "Naomi Sachs", image: Naomi ,des:"Personal Trainer" },
 
  
];

const MeetTheTrainers = () => {
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
    <section className="md:mb-12.5  mb-20 bg-[#FFFFFF]">
        
      <div className="max-w-[1280px] mx-auto md:px-8  px-4 flex flex-col items-start ">
      
        <div className="w-full flex  flex-col text-center mt-6 gap-4 ">
                    <h2 className="text-[#000] uppercase  ">Meet the trainers at SUNRIDGE</h2>
                    <h4 className="mb-10 ">Every great workout starts with a great coach. Meet yours. </h4>
                 
                </div>
                 

        <div className="relative w-full">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex md:gap-6 md:pl-16">
              {professionals.map((pro, idx) => (
                <div
                  key={idx}
                  className="md:flex-[0_0_20.5%] flex-[0_0_100%]  relative"
                >
                  <img
                    src={pro.image}
                    alt={pro.title}
                    className="md:w-[400px] w-full md:h-[273px] h-[300px] rounded-2xl object-cover"
                  />
                   <div className="md:w-[253px] w-full h-[95px] bg-[#F6F6F6] border-[10px] mt-2 justify-center rounded-2xl border-transparent">
                   <div className="w-full h-[95px] bg-[#F6F6F6]  rounded-[10px] flex  justify-between">
  {/* Left: Name + Description */}
  <div className="flex flex-col w-[full]  ">
    <h3 className="text-[#000]  leading-tight">{pro.title}</h3>
    <p className="text-[#767676]  ">{pro.des}</p>
  </div>

  {/* Right: Down Button */}
  <button className="w-6 h-6 flex justify-center mt-6 mr-1 rounded-full border  border-black">
    <img src={downicon} alt="More" />
  </button>
</div>
                </div>
                </div>
                
              ))}
            </div>
          </div>
          <div className="pt-5">
          <div className="absolute md:top-[30%] left-[37%]  md:left-[0%] md:translate-y-1/2 ">
            <button
              onClick={scrollPrev}
              className="p-2 rounded-full border border-[#000000] text-[#000000]"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
          </div>
          <div className="absolute  md:top-[30%] md:translate-y-1/2 md:-right-[0.1%] right-[37%] z-10">
            <button
              onClick={scrollNext}
              className="p-2 rounded-full border border-[#000000] text-[#000000]"
            >
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
          </div>
        </div>

        
      </div>
    </section>
  );
};
export default MeetTheTrainers;
