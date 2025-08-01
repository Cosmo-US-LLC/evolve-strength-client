import React from "react";
import Jog from "@/assets/images/JoinTheMovement/SocialMedia/instagram/Jogging_emoji.svg"
import insta from "@/assets/images/JoinTheMovement/SocialMedia/instagram/insta_logo.svg"

const Instagram = () => {
  return (
    <div className="w-full max-w-[228px] h-[192px] bg-white rounded-xl shadow-sm border border-[#000] p-6 flex flex-col ">
      {/* Title and Instagram Icon */}
      <div className="flex justify-between items-start">
        
          <p className=" w-[118px] h-[44px] font-[Kanit] !font-[500] leading-[21px] !text-[21px]">Reach on Instagram</p>
       
        
        <div className=" rounded-full">
           <img src={insta} alt="" /> 
        </div>
      </div>

      {/* Runner emoji and Reach Number */}
      <div className="mt-3 flex items-center justify-between">
         <img src={Jog} alt="" />
        <div className="w-10 h-10 rounded-full"></div>
        <p className="!description !font-[Kanit] mt-9">130.2K</p>
      </div>

      {/* Progress Bar */}
      <div className="mt-4 w-full h-[6px] bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-green-500"
          style={{ width: "65%" }} // Adjust as needed
        ></div>
      </div>
    </div>
  );
};

export default Instagram;
