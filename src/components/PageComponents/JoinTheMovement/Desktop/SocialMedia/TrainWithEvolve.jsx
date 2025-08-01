import React from 'react'
import logo from "@/assets/images/JoinTheMovement/SocialMedia/TrainWithEvolve/gymnastics_logo.svg"


function TrainWithEvolve() {
  return (
   <div className="w-[167px] h-[36px] inline-flex items-center gap-[6px] px-[8px] py-[2px] bg-white rounded-[10px] shadow-[0_0_4px_0_rgba(0,0,0,0.08)]">
      {/* Placeholder for green circle icon */}
      <div className="w-7 h-7 rounded-full bg-[#4AB04A] flex items-center justify-center">
        {/* Replace with your actual SVG/icon */}
        <div className=""></div>
        <img src={logo}  />
      </div>

      {/* Hashtag text */}
      <span className="text-[#4AB04A] font-[300] font-[Kanit] text-[16px]">#trainwithevolve</span>
    </div>
  )
}

export default TrainWithEvolve