import React from "react";
import why_should_card1 from "../../../../assets/images/JoinTheMovement/WhyYouShould/why_should_card _icon (1).svg";
import why_should_card2 from "../../../../assets/images/JoinTheMovement/WhyYouShould/why_should_card _icon (2).svg";
import why_should_card3 from "../../../../assets/images/JoinTheMovement/WhyYouShould/why_should_card _icon (3).svg";
import why_should_card4 from "../../../../assets/images/JoinTheMovement/WhyYouShould/why_should_card _icon (4).svg";
import why_should_card5 from "../../../../assets/images/JoinTheMovement/WhyYouShould/why_should_card _icon (5).svg";
import why_should_card6 from "../../../../assets/images/JoinTheMovement/WhyYouShould/why_should_card _icon (6).svg";

function WhyYouShould() {
  const cardData = [
    {
      img: why_should_card1,
      title: "Build Your Audience Faster",
      description:
        "We tag every creator. Our community sees and engages with your content",
    },
    {
      img: why_should_card2,
      title: "Reach More People",
      description: "Evolve gets over 800,000 views a month across Instagram and TikTok",
    },
    {
      img: why_should_card3,
      title: "Stay Authentic",
      description:
        "No scripts. No staged shoots. Just your real gym moments",
    },
    {
      img: why_should_card4,
      title: "Get 50% Off Your Next Membership",
      description:
        "If your content is selected, you get half off your next renewal",
    },
    {
      img: why_should_card5,
      title: "Free Access to Film Inside Evolve",
      description: "You’ll get a special creator pass to shoot content in the gym without hassle",
    },
    {
      img: why_should_card6,
      title: "Be Part of Something Bigger",
      description: "Join a growing group of creators who train and grow together",
    },
  ];

  return (
    <div className="w-full py-[80px] bg-[#F9F9F9]">
      <div className="w-full max-w-[1280px] px-8 mx-auto flex flex-col gap-12">
        <div className="space-y-[50px]">
          <div className="">
            <h2 className="leading-[39px] uppercase">Why You Should Share</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[32px]">
            {cardData.map((item, index) => (
              <div
                key={index}
                className="max-w-[378px] space-y-[14px]  rounded-[10px]"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-[60px] !mt-0 h-[60px]"
                />
                <h3 className="font-[500] !mt-[25px] leading-[16px]">
                  {item.title}
                </h3>
                <h4 className="text-[18px] font-[300] leading-[26px] font-[Kanit]">
                  {item.description}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyYouShould;
