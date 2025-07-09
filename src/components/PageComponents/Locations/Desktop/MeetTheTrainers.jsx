import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
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
    <section className="py-20 bg-[#FFFFFF]">
        
      <div className="max-w-[1280px] mx-auto px-8 flex flex-col items-start gap-8">
       
        <div className="flex  flex-col gap-4 items-center">
                    <h2 className="text-[#000] uppercase ">Meet the trainers at seton</h2>
                    <h4 className="mb-6 !max-w-[800px]">Every great workout starts with a great coach. Meet yours. </h4>
                
                </div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4 pl-4">
              {professionals.map((pro, idx) => (
                <div
                  key={idx}
                  className="flex-[0_0_20.5%] relative"
                >
                  <img
                    src={pro.image}
                    alt={pro.title}
                    className="w-[400px] h-[273px] object-cover"
                  />
                   <div className="w-[253px] h-[95px] bg-[#F6F6F6] border-[10px] mt-2 justify-center rounded-2xl border-transparent">
                  <h3 className="flex   text-[#000]     font-[500]">
                    {pro.title}
                    
                  </h3>
                  <p className="description text-[#767676] w-[167px]">{pro.des}</p>
                  <button className="w-4 h-4 flex items-center justify-center rounded-full border border-black">
                    <img src={downicon} alt="" />
                  </button>
                 
  
                </div>
                </div>
                
              ))}
            </div>
          </div>

          <div className="absolute top-[30%] -left-[4%] translate-y-1/2 ">
            <button
              onClick={scrollPrev}
              className="p-2 rounded-full border border-[#000000] text-[#000000]"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          </div>
          <div className="absolute  top-[30%] translate-y-1/2 right-[6%] z-10">
            <button
              onClick={scrollNext}
              className="p-2 rounded-full border border-[#000000] text-[#000000]"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* <button className="btnPrimary">APPLY NOW</button> */}
      </div>
    </section>
  );
};

export default MeetTheTrainers;
