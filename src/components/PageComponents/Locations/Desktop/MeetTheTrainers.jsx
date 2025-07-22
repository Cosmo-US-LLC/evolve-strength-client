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
    <section className="mb-12.5  bg-[#FFFFFF]">
        
      <div className="max-w-[1280px] mx-auto px-8 flex flex-col items-start ">
       <div>
        <div className="w-full flex  flex-col text-center mt-6 gap-4 ">
                    <h2 className="text-[#000] uppercase mb-4 ">Meet the trainers at seton</h2>
                    <h4 className="mb-10 ">Every great workout starts with a great coach. Meet yours. </h4>
                 
                </div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6 pl-0 md:pl-16">
              {professionals.map((pro, idx) => (
                <div
                  key={idx}
                  className="flex-[0_0_100%] md:flex-[0_0_20.5%] relative"
                >
                  <img
                    src={pro.image}
                    alt={pro.title}
                    className="w-full md:w-[400px] md:h-[273px] object-cover"
                  />
                   <div className="w-[253px] h-[95px] bg-[#F6F6F6] border-[10px] mt-2 justify-center rounded-2xl border-transparent">
                   <div className="w-full h-[95px] bg-[#F6F6F6]  rounded-[10px] flex  justify-between">
  {/* Left: Name + Description */}
  <div className="flex flex-col ">
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

          <div className="absolute top-1/2 -translate-y-1/2 left-4 md:left-0 ">
            <button
              onClick={scrollPrev}
              className="p-2 rounded-full border border-[#000000] text-[#000000]"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 right-4 md:right-0 z-10">
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
