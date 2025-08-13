import React from 'react'
import logo from "@/assets/images/JoinTheMovement/SocialMedia/TrainWithEvolve/gymnastics_logo.svg"


function TrainWithEvolve() {
  return (
   <div className="md:w-[167px] md:h-[36px] w-[110px] h-[20px] inline-flex items-center gap- md:gap-[6px] px-[8px] md:py-[2px] bg-white rounded-[10px] shadow-[0_0_4px_0_rgba(0,0,0,0.08)]">
      {/* Placeholder for green circle icon */}
      <div className="md:w-7 md:h-7 w-5 h-3 rounded-full bg-[#4AB04A] flex items-center justify-center">
        {/* Replace with your actual SVG/icon */}
        <div className=""></div>
        <img src={logo} className='' />
      </div>

      {/* Hashtag text */}
      <span className="text-[#4AB04A] font-[300] font-[Kanit] text-[11px] md:text-[16px]">#trainwithevolve</span>
    </div>
  )
}

export default TrainWithEvolve