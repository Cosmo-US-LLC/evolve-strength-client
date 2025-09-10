import React from "react";


function WhyYouShould() {
  const cardData = [
  {
    img: "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/JoinTheMovement/WhyYouShould/why_should_card%20_icon%20(1).svg",
    title: "Build Your Audience Faster",
    description:
      "We tag every creator. Our community sees and engages with your content",
  },
  {
    img: "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/JoinTheMovement/WhyYouShould/why_should_card%20_icon%20(2).svg",
    title: "Reach More People",
    description: "Evolve gets over 800,000 views a month across Instagram and TikTok",
  },
  {
    img: "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/JoinTheMovement/WhyYouShould/why_should_card%20_icon%20(3).svg",
    title: "Stay Authentic",
    description:
      "No scripts. No staged shoots. Just your real gym moments",
  },
  {
    img: "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/JoinTheMovement/WhyYouShould/why_should_card%20_icon%20(4).svg",
    title: "Get 50% Off Your Next Membership",
    description:
      "If your content is selected, you get half off your next renewal",
  },
  {
    img: "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/JoinTheMovement/WhyYouShould/why_should_card%20_icon%20(5).svg",
    title: "Free Access to Film Inside Evolve",
    description: "You’ll get a special creator pass to shoot content in the gym without hassle",
  },
  {
    img: "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/JoinTheMovement/WhyYouShould/why_should_card%20_icon%20(6).svg",
    title: "Be Part of Something Bigger",
    description: "Join a growing group of creators who train and grow together",
  },
];


  return (
    <div className="w-full md:py-[80px] max-md:py-[48px] bg-[#F9F9F9]">
      <div className="w-full max-w-[1280px] px-8 mx-auto flex flex-col gap-12">
        <div className="space-y-[50px]">
          <div className="">
            <h2 className="leading-[39px] max-md:text-center uppercase">Why You Should Share</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[32px]">
            {cardData.map((item, index) => (
              <div
                key={index}
                className="max-w-[378px] space-y-[14px] max-md:flex max-md:flex-col max-md:items-center  rounded-[10px]"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-[60px] !mt-0 h-[60px]"
                />
                <h3 className="font-[500] max-md:text-center !mt-[25px] leading-[16px]">
                  {item.title}
                </h3>
                <h4 className="text-[18px] max-md:text-center font-[300] leading-[26px] font-[Kanit]">
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
