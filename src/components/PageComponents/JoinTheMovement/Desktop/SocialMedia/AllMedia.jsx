import React from 'react'

function AllMedia() {
  return (
    <div className="md:w-full md:max-w-[228px] w-[144px] md:h-[192px] h-[123px] bg-white rounded-xl shadow-sm border border-[#000] p-3 md:p-6 flex flex-col">
      <div className="flex justify-between items-start relative">
        <p className="md:w-[131px] md:h-[44px] font-[Kanit] !font-[500] leading-[16px] md:leading-[21px] text-[16px] md:!text-[21px]">
          Views across social media
        </p>

        <div className="absolute -right-[30px] md:-right-[50px]">
          <img src="/assets/images/JoinTheMovement/SocialMedia/Allmedia/MediaUsers.webp" alt="Socialmedia Users" className="h-[35px] md:h-[47px]" />
        </div>
      </div>

      <div className="md:mt-3 mt-1 flex items-center justify-between">
        <div className="w-10 h-10 rounded-full"></div>
        <p className="!description !font-[Kanit] mt-7 md:mt-9">1,170K+</p>
      </div>

      {/* Progress Bar */}
      <div className="md:mt-4 mt-1 w-full h-[6px] bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-green-500"
          style={{ width: "45%" }} // Adjust as needed
        ></div>
      </div>
    </div>
  )
}

export default AllMedia
