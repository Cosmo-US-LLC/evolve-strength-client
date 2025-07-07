import React from "react";
import { cardsData } from "@/constants/AboutUsMission";
import mission from "@/assets/images/AboutUs/about_mission.svg"
import whoarewe from "@/assets/images/AboutUs/about_whoarewe.svg"
import origin from "@/assets/images/AboutUs/about_origin.svg"


function AboutUsMission() {
  return (
    <div className="max-w-[1280px] px-8 pb-[140px] mx-auto w-full h-full">
      <div className="flex flex-col md:flex-row gap-6 w-[1440px] h-[700px] p-8 bg-[#FFF] mx-auto my-8">
        
        {/* LEFT CARD */}
        <div className="flex flex-col items-center w-[351px] h-[598px] pt-[32px] pr-[54px] pb-[96px]  bg-[#F7F5F5]">
          <div className="flex flex-col items-start gap-4 w-[242px] pt-[32px]  pb-[96px] pl-[55px]">
            <div className="justify-items-start"><img src={mission} /></div>
           <div className="h-[78px] w-[242px] justify-center"> <h1 className="!text-[40px]   ">{cardsData[0].title}</h1></div>
            <p className="text-gray-700 text-sm justify-center">{cardsData[0].content}</p>
          </div>
        </div>

        {/* RIGHT TWO CARDS */}
        <div className="space-y-6">
          {/* WHO WE ARE */}
          <div className="flex flex-col items-start w-[865px] h-[293px] p-[32px_38px] gap-[10px] bg-[#F7F5F5] rounded-[10px]">
            <div className="text-green-600 text-3xl mb-2"><img src={whoarewe}/></div>
            <h2 className="text-[40px] font-[700] leading-[39px] uppercase text-[#1C1C1C] font-[kanit]">
              {cardsData[1].title}
            </h2>
            <p className="text-gray-700 text-sm">{cardsData[1].content}</p>
          </div>

          {/* ORIGIN STORY */}
          <div className="flex flex-col items-start w-[865px] h-[293px] p-[32px_38px] gap-[10px] bg-[#1C1C1C] rounded-[10px]">
            <div className="text-green-600 text-3xl mb-2"><img src={origin}  /></div>
            <h2 className="text-[40px] font-[700] leading-[39px] uppercase text-white font-[kanit]">
              {cardsData[2].title}
            </h2>
            <p className="text-white text-sm">{cardsData[2].content}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsMission;
