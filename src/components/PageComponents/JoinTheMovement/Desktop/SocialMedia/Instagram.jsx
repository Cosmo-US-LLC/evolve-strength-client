import React from "react";


const Instagram = () => {
return (
  <div className="md:w-full md:max-w-[228px] md:h-[192px] w-[144px] h-[123px] bg-white rounded-xl shadow-sm border border-[#000] p-3 md:p-6 flex flex-col ">
    {/* Title and Instagram Icon */}
    <div className="flex justify-between items-start">
      <p className=" md:w-[118px] md:h-[44px]   font-[Kanit] !font-[500] leading-[16px] md:leading-[21px] text-[16px] md:!text-[21px]">
        Reach on Instagram
      </p>

      <div className=" rounded-full">
        <img
          src="/assets/images/JoinTheMovement/SocialMedia/instagram/insta_logo.svg"
          alt="Instagram Logo"
        />
      </div>
    </div>

    {/* Runner emoji and Reach Number */}
    <div className="md:mt-3 mt-1 flex items-center justify-between">
      <img
        src="/assets/images/JoinTheMovement/SocialMedia/instagram/Jogging_emoji.svg"
        alt="Jogging SVG"
        className="w-12 h-12 md:w-auto md:h-auto"
      />
      <div className="md:w-10 md:h-10   rounded-full"></div>
      <p className="!description !font-[Kanit] mt-7 md:mt-9">130.2K</p>
    </div>

    {/* Progress Bar */}
    <div className="md:mt-4 mt-1 w-full h-[6px] bg-gray-200 rounded-full overflow-hidden">
      <div
        className="h-full bg-green-500"
        style={{ width: "65%" }} // Adjust as needed
      ></div>
    </div>
  </div>
);

};

export default Instagram;
