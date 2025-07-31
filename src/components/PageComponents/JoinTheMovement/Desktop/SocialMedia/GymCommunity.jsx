import React from 'react'
import logo from "@/assets/images/JoinTheMovement/SocialMedia/GymCommunity/Gym_logo.svg"
import people from "@/assets/images/JoinTheMovement/SocialMedia/GymCommunity/People_logo.svg"


function GymCommunity() {
  return (
    <div className="flex flex-col items-center">
      
      <div className="w-[64px] h-[64px] ">
        {/* Replace this div with <img src="..." alt="barbell" className="w-full h-full" /> */}
        <img src={logo} alt="" />
      </div>

      {/* Tag Container */}
      <div className="inline-flex items-center gap-[6px] px-[12px] py-[4px] bg-[#4AB04A] rounded-[10px]">
        {/* Icon Placeholder */}
        <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center">
          
          <div className=""></div>
          <img src={people} alt="" className='w-4 h-4'/>
        </div>

        <span className="text-white font-[300] text-sm font-[Kanit]">#gymcommunity</span>
      </div>
    </div>
  )
}

export default GymCommunity