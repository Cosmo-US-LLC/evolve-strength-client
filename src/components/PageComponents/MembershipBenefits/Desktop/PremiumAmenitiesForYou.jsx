import React from "react";
import card1 from "@/assets/images/MembershipBenefits/PremiumAmenitiesForYou/card1.webp";
import card2 from "@/assets/images/MembershipBenefits/PremiumAmenitiesForYou/card2.webp";
import card3 from "@/assets/images/MembershipBenefits/PremiumAmenitiesForYou/card3.webp";
import card4 from "@/assets/images/MembershipBenefits/PremiumAmenitiesForYou/card4.webp";
import card5 from "@/assets/images/MembershipBenefits/PremiumAmenitiesForYou/card5.webp";
import card6 from "@/assets/images/MembershipBenefits/PremiumAmenitiesForYou/card6.webp";

const PremiumAmenitiesForYou = () => {
  const cardData = [
    {
      imageUrl: card1,
      title: "On-Site Parking",
      description: "Always find a convenient spot close to the main entrance.",
    },
    {
      imageUrl: card2,
      title: "Locker Rooms",
      description:
        "Secure, spacious locker rooms to store your personal items.",
    },
    {
      imageUrl: card3,
      title: "Showers",
      description: "Clean, private showers to refresh after every workout.",
    },
    {
      imageUrl: card4,
      title: "Steam Rooms and Saunas",
      description:
        "Relax and recover in our premium in-house steam rooms and saunas.",
    },
    {
      imageUrl: card5,
      title: "Premium Waiting Area",
      description:
        "A quiet, comfortable space to relax before or after your session.",
    },
    {
      imageUrl: card6,
      title: "Full Commercial Gym Access",
      description: "Train freely with top-tier equipment and expansive space.",
    },
  ];

  return (
    <div className="py-12 bg-[#F9F9F9]">
      <div className="max-w-[1280px] px-8 mx-auto w-full flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <h2 className="text-[#000] uppercase">Premium Amenities for You</h2>
          <h4 className="text-[#000] leading-[26px] font-[400]">
            Joining Evolve as a member gives you access to our full range of
            premium amenities.
          </h4>
        </div>
        <div className="flex flex-wrap gap-10 ">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="w-full max-w-[31%]   overflow-hidden"
            >
              <img
                src={card.imageUrl}
                alt={`${card.title} image`}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="p-4 flex flex-col gap-3">
                <h3 className="text-[#000] leading-[26px] max-w-[335px]">
                  {card.title}
                </h3>
                <h4 className="text-[#000] leading-[26px] max-w-[335px]">{card.description}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PremiumAmenitiesForYou;
