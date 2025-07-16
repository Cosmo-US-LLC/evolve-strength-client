import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Physiotherapy from "../../../../assets/images/corporateMembership/MembershipRecovery/Physiotherapy.webp";
import Pilates from "../../../../assets/images/corporateMembership/MembershipRecovery/Pilates.webp";
import MassageTherapy from "../../../../assets/images/corporateMembership/MembershipRecovery/Massage_Therapy.webp";
import Chiropractic from "../../../../assets/images/corporateMembership/MembershipRecovery/Chiropractic.webp";
import Acupuncture from "../../../../assets/images/corporateMembership/MembershipRecovery/Acupuncture.webp";
import DietitianServices from "../../../../assets/images/corporateMembership/MembershipRecovery/Dietitian_Services.webp";
import LaserTherapy from "../../../../assets/images/corporateMembership/MembershipRecovery/Laser_Therapy.webp";
import Esthetician from "../../../../assets/images/corporateMembership/MembershipRecovery/Esthetician.webp";

const professionals = [
  { title: "Physiotherapy", image: Physiotherapy },
  { title: "Pilates", image: Pilates },
  { title: "Massage Therapy", image: MassageTherapy },
  { title: "Chiropractic", image: Chiropractic },
  { title: "Acupuncture", image: Acupuncture },
  { title: "Dietitian Services", image: DietitianServices },
  { title: "Laser Therapy", image: LaserTherapy },
  { title: "Esthetician", image: Esthetician },
];

const AboutUsPractitioners = () => {
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
    <section className="py-5 bg-[#EEEEEE]">
      <div className="max-w-[1280px] mx-auto px-8 flex flex-col items-start gap-8">
        <div className="flex items-start flex-col gap-10">
                    <h2 className="text-[#000] uppercase ">Practitioners</h2>
                    <h4 className=" !max-w-[800px]">Evolve brings together a team of licensed professionals so you can take care of your body and mind under one roof. We make it easy to access health services without having to leave your gym.  </h4>
              
                </div>
                 

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4 pl-4">
              {professionals.map((pro, idx) => (
                <div key={idx} className="flex-[0_0_32.5%] relative">
                  <img
                    src={pro.image}
                    alt={pro.title}
                    className="w-[400px] h-[273px] object-cover"
                  />
                  <h3 className="flex items-center mt-6 text-[#000] leading-[24px] font-[500]">
                    {pro.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
          <br />
          <button className="btnPrimary ">
                 FIND A WELLNESS EXPERT
                </button>

          <div className="absolute -top-1/6 -translate-y-1/2 left-[86%] z-10">
            <button
              onClick={scrollPrev}
              className="p-2 rounded-full border border-[#000000] text-[#000000]"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
          </div>
          <div className="absolute -top-1/6 -translate-y-1/2 right-[6%] z-10">
            <button
              onClick={scrollNext}
              className="p-2 rounded-full border border-[#000000] text-[#000000]"
            >
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* <button className="btnPrimary">APPLY NOW</button> */}
      </div>
    </section>
  );
};

export default AboutUsPractitioners;
