import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ArrowLeft, ArrowRight } from "lucide-react";
import onSite from "../../../../assets/images/corporateMembership/MembershipPremiumAmenities/on-site.webp";
import waitingArea from "../../../../assets/images/corporateMembership/MembershipPremiumAmenities/waiting-area.webp";
import showers from "../../../../assets/images/corporateMembership/MembershipPremiumAmenities/showers.webp";
import lockerRoom from "../../../../assets/images/corporateMembership/MembershipPremiumAmenities/locker-room.webp";
import steamRoom from "../../../../assets/images/corporateMembership/MembershipPremiumAmenities/steam-room.webp";

const professionals = [
  { title: "On-Site Parking", image: onSite },
  { title: "Waiting Area", image: waitingArea },
  { title: "Showers", image: showers },
  { title: "Locker Rooms", image: lockerRoom },
  { title: "Steam Rooms and Saunas", image: steamRoom },
];

const MembershipPremiumAmenities = () => {
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
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 flex flex-col items-start gap-16 md:gap-8">
        <div className="flex flex-col gap-4">
          <h2 className="text-[#000] uppercase ">Premium Amenities</h2>
        </div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-0 md:gap-4 pl-0 md:pl-4">
              {professionals.map((pro, idx) => (
                <div
                  key={idx}
                  className="flex-[0_0_100%] md:flex-[0_0_32.5%] relative"
                >
                  <img
                    src={pro.image}
                    alt={pro.title}
                    className="w-full max-md:w-[350px] md:w-[400px] h-[233px] md:h-[263px] object-cover rounded-[8px]"
                  />
                  <h3 className="flex items-center mt-6 text-[#000] leading-[24px] font-[500]">
                    {pro.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute -top-1/9 md:-top-1/6 -translate-y-1/2 left-[76%] md:left-[86%] z-10">
            <button
              onClick={scrollPrev}
              className="p-2 rounded-full border border-[#000000] text-[#000000] hover:bg-gray-300 cursor-pointer"
            >
              <ArrowLeft className="w-4 md:w-6 h-4 md:h-6" />
            </button>
          </div>
          <div className="absolute -top-1/9 md:-top-1/6 -translate-y-1/2 right-[2%] md:right-[6%] z-10">
            <button
              onClick={scrollNext}
              className="p-2 rounded-full border border-[#000000] text-[#000000] hover:bg-gray-300 cursor-pointer"
            >
              <ArrowRight className="w-4 md:w-6 h-4 md:h-6" />
            </button>
          </div>
        </div>

        {/* <button className="btnPrimary">APPLY NOW</button> */}
      </div>
    </section>
  );
};

export default MembershipPremiumAmenities;
