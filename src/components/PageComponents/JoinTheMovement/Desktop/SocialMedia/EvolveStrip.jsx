import React from 'react'
import dumbellicon from "@/assets/images/JoinTheMovement/SocialMedia/evolvestrength/dumbell_icon.svg"

function EvolveStrip() {
  return (
    <div className="md:w-[150px] md:h-[36px] w-[105px] inline-flex items-center rounded-full bg-[#4AB04A] px-5 md:py-[4px] pl-[6px] pr-[10px] gap-[6px]">
      {/* White circle with icon */}
      <div className="w-5 h-4  md:w-6 md:h-6 rounded-full bg-white flex items-center justify-center">
        <img src="https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/JoinTheMovement/SocialMedia/evolvestrength/dumbell_icon.svg"alt="Dumbbell icon" className="w-3 h-3 md:w-4 md:h-4" />
      </div>

      {/* Hashtag text in white */}
      <span className="text-white font-[300] font-[Kanit] leading-none text-[10px] md:text-[16px]">
        #evolvestrength
      </span>
    </div>
  )
}

export default EvolveStrip
