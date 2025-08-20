import React from 'react'



function GymCommunity() {
  return (
  <div className="flex flex-col items-center">
    <div className="md:w-[64px] md:h-[64px] w-[50px] h-[50px]">
      <img
        src="https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/JoinTheMovement/SocialMedia/GymCommunity/Gym_logo.svg"
        alt=""
        className="w-full h-full"
      />
    </div>

    {/* Tag Container */}
    <div className="inline-flex items-center gap-[2px] md:gap-[6px] md:px-[12px] md:py-[4px]  w-[106px] md:w-[170px] bg-[#4AB04A] rounded-[10px]">
      {/* Icon Placeholder */}
      <div className="w-4 h-4 md:w-7 md:h-7 bg-white rounded-full flex items-center justify-center">
        <div className=""></div>
        <img
          src="https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/JoinTheMovement/SocialMedia/GymCommunity/People_logo.svg"
          alt=""
          className="w-3 h-3 md:w-4 md:h-4"
        />
      </div>

      <span className="text-white font-[300] text-[11px] md:text-sm font-[Kanit] md:w-[110px]  w-[80px]">
        #gymcommunity
      </span>
    </div>
  </div>
);

}

export default GymCommunity