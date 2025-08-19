import React from "react";

const cardsData = [
  {
    title: (
      <p>
        OUR
       
        MISSION
      </p>
    ),

    icon: "",
    backgroundColor: "#F7F5F5",
    borderRadius: "10px",
    padding: "32px",
    width: "351px",
    content:
      "At Evolve, we help people across Canada reach their full potential through fitness, health, and wellness. As one of the best fitness and wellness hubs in the country, we offer expert coaching, integrated health services, and world-class facilities at a price people can afford. Our mission is simple: make high-quality fitness accessible to everyone.",
    titleColor: "#1C1C1C",
  },
  {
    title: "WHO WE ARE",
    icon: "👁️",
    backgroundColor: "#F7F5F5",
    borderRadius: "10px",
    padding: "32px",
    width: "1043px",
    content:
      "Evolve is one of Canada’s top fitness and wellness hubs, with locations in Edmonton, Calgary, Burnaby, and Vancouver. We started in Edmonton, Alberta where we opened our first location in 2015. Since then we’ve grown by focusing on what matters most: more space to train, expert support, and a welcoming community for every fitness level. We’re here to help you feel stronger, healthier, and supported every step of the way.",
    titleColor: "#1C1C1C",
  },
  {
    title: "OUR ORIGIN STORY",
    icon: "👥",
    backgroundColor: "#1C1C1C",
    borderRadius: "10px",
    padding: "32px",
    width: "1043px",
    content:
      "Evolve started with a simple idea: to create a space where trainers and healthcare practitioners could work together in a supportive, cross-functional environment. What began as a small concept grew quickly, fueled by our focus on quality, affordability, and transparency. Today, we serve thousands of Canadians in modern, purposefully designed spaces built for real results.",
    titleColor: "#FFFFFF",
  },
];

function AboutUsMission() {
  return (
    <div className="max-w-[1280px]  mx-auto  ">
      <div className="flex flex-col md:flex-row gap-4 md:p-8 p-4 bg-[#FFF] mx-auto my-5">
       
        <div className="w-[100%] flex flex-col items-start bg-[#F7F5F5] p-4 md:p-8 rounded-[10px]">
          <div className=" mb-4 h-[40px] w-[45px] md:h-auto md:w-auto">
            <img src="https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/AboutUs/about_mission.svg" alt="Mission Icon" className="w-full h-auto" />
          </div>

          <h1 className="!text-[40px] !font-[700] !leading-[39px]  text-black mb-3">
            {cardsData[0].title}
          </h1>

          <h4 className="">{cardsData[0].content}</h4>
        </div>

        {/* RIGHT TWO CARDS */}
        <div className="space-y-3">
         
          <div className="flex flex-col items-start  bg-[#F7F5F5] p-6 md:p-8 rounded-[10px]">
            <div className="text-green-600 text-3xl mb-3 h-[40px] w-[45px] md:h-auto md:w-auto">
              <img src="https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/AboutUs/about_whoarewe.svg" />
            </div>
            <h2 className=" text-[#1C1C1C] mb-3">
              {cardsData[1].title}
            </h2>
            <h4>{cardsData[1].content}</h4>
          </div>
 
          <div className="flex flex-col items-start p-6 md:p-8 bg-[#1C1C1C] rounded-[10px] relative">
            <div className="absolute right-[20px] md:top-[10px] top-[8px] flex-shrink-0 ">
              <img
                src="https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/AboutUs/AboutUs_Trainers/our_origin_story_logo.svg"
                alt="Logo"
                className="md:w-[180px] w-[111px]  h-full object-contain"
              />
            </div>
            <div className="text-green-600 text-3xl mb-3 h-[40px] w-[45px] md:h-auto md:w-auto ">
              <img src="https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/AboutUs/about_origin.svg" alt="Origin" />
            </div>
            <h2 className="w-[300px] md:w-auto  text-white ">
              {cardsData[2].title}
            </h2>
            <h4 className="text-white ">{cardsData[2].content}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsMission;
