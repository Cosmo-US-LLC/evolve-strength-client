import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
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
    <section className="py-12 ">
        
      <div className="max-w-[1280px] mx-auto md:px-8 px-4 flex flex-col items-start gap-8">
        <div className="flex items-start flex-col gap-4">
                    <h2 className="text-[#000] uppercase ">Spacious and Modern Facilities</h2>
                    <h4 className="mb-6 !max-w-[800px]">Our gyms give you space to move, train, and recover without the crowd. Each location has more training space than a typical gym in Canada. Every area is designed with purpose to support your fitness and wellness goals.   </h4>
                 <Link to="https://join.evolvestrength.ca/tour-form/">
                            <button className="btnPrimary">BOOK A FREE TOUR</button>
                            </Link>
                </div>

        <div className="relative">
                  <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex md:gap-4 md:pl-4 ">
                      {professionals.map((pro, idx) => (
                        <div
                          key={idx}
                          className="flex-[0_0_100%] md:flex-[0_0_32.5%] relative overflow-hidden"
                        >
                          <img
                            src={pro.image}
                            alt={pro.title}
                            className="w-full md:w-[400px]  h-[224px] md:h-[257px] object-cover rounded-[8px] overflow-hidden "
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
                  <div className="absolute -top-1/9  md:-top-1/6  -translate-y-1/2 left-[83%] md:left-auto md:right-[6%] z-10">
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

export default MembershipPremiumAmenities;
