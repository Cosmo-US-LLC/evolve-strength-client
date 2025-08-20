import React, { useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import LeftArrowIcon from "@/assets/images/MembershipBenefits/AccessEvolveLocationWithEase/left-arrow.svg";
import RightArrowIcon from "@/assets/images/MembershipBenefits/AccessEvolveLocationWithEase/right-arrow.svg";


const PremiumAmenitiesForYou = () => {
  const carouselRef = useRef(null);

  const cardData = [
    {
      imageUrl: "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/MembershipBenefits/PremiumAmenitiesForYou/card1.webp",
      title: "On-Site Parking",
      description: "Always find a convenient spot close to the main entrance.",
    },
    {
      imageUrl: "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/MembershipBenefits/PremiumAmenitiesForYou/card2.webp",
      title: "Locker Rooms",
      description:
        "Secure, spacious locker rooms to store your personal items.",
    },
    {
      imageUrl: "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/MembershipBenefits/PremiumAmenitiesForYou/card3.webp",
      title: "Showers",
      description: "Clean, private showers to refresh after every workout.",
    },
    {
      imageUrl: "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/MembershipBenefits/PremiumAmenitiesForYou/card4.webp",
      title: "Steam Rooms and Saunas",
      description:
        "Relax and recover in our premium in-house steam rooms and saunas.",
    },
    {
      imageUrl: "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/MembershipBenefits/PremiumAmenitiesForYou/card5.webp",
      title: "Premium Waiting Area",
      description:
        "A quiet, comfortable space to relax before or after your session.",
    },
    {
      imageUrl: "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/MembershipBenefits/PremiumAmenitiesForYou/card6.webp",
      title: "Full Commercial Gym Access",
      description: "Train freely with top-tier equipment and expansive space.",
    },
  ];

  const scrollPrev = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollPrev();
    }
  };

  const scrollNext = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollNext();
    }
  };

  return (
    <div className="py-12 bg-[#F9F9F9]">
      <div className="max-w-[1280px] px-4 md:px-8 mx-auto w-full flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <h2 className="text-[#000] uppercase">Premium Amenities for You</h2>
          <h4 className="text-[#000] leading-[26px] font-[400]">
            Joining Evolve as a member gives you access to our full range of
            premium amenities.
          </h4>
        </div>

        <div className="hidden md:flex flex-wrap gap-10">
          {cardData.map((card, index) => (
            <div key={index} className="w-full max-w-[31%] overflow-hidden">
              <img
                src={card.imageUrl}
                alt={`${card.title} image`}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="p-4 flex flex-col gap-3">
                <h3 className="text-[#000] leading-[26px] max-w-[335px]">
                  {card.title}
                </h3>
                <h4 className="text-[#000] leading-[26px] max-w-[335px]">
                  {card.description}
                </h4>
              </div>
            </div>
          ))}
        </div>

        <div className="md:hidden relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
            setApi={(api) => (carouselRef.current = api)}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {cardData.map((card, index) => (
                <CarouselItem
                  key={index}
                  className="pl-2 md:pl-4 basis-[100%] md:basis-[40%] lg:basis-[31%]"
                >
                  <div className="w-full overflow-hidden">
                    <img
                      src={card.imageUrl}
                      alt={`${card.title} image`}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                    <div className="p-4 flex flex-col gap-3">
                      <h3 className="text-[#000] leading-[26px]">
                        {card.title}
                      </h3>
                      <h4 className="text-[#000] leading-[26px]">
                        {card.description}
                      </h4>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <div className="absolute -top-1/12 md:-top-1/7 -translate-y-1/2 left-[75%] md:left-[87%] z-10">
            <button
              onClick={scrollPrev}
              className="bg-[#ffffff] p-2 rounded-full border border-[#000000] text-[#000000]"
            >
              <img
                src="https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/MembershipBenefits/AccessEvolveLocationWithEase/left-arrow.svg"
                alt="Previous"
                className="h-4 w-4 text-[#00000060]"
              />
            </button>
          </div>
          <div className="absolute -top-1/12 md:-top-1/7 -translate-y-1/2 right-[3%] md:right-[6%] z-10">
            <button
              onClick={scrollNext}
              className="bg-[#ffffff] p-2 rounded-full border border-[#000000] text-[#000000]"
            >
              <img
                src="https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/MembershipBenefits/AccessEvolveLocationWithEase/right-arrow.svg"
                alt="Next"
                className="h-4 w-4 text-[#00000060]"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremiumAmenitiesForYou;
