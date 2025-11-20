import React from 'react'


function FitnessStrip() {
  return (
     <div className="inline-flex md:w-[109px] md:h-[36px] w-[100px] h-[30px] items-center gap-[6px] px-[8px] py-[2px] bg-white rounded-[10px] shadow-[0_0_4px_0_rgba(0,0,0,0.08)]">
     
      <div className="w-7 h-7 rounded-full bg-[#4AB04A] flex items-center justify-center">
        
        <div className=""></div>
        <img src="/assets/images/JoinTheMovement/SocialMedia/fitnessstrip/Fitness_Logo.svg" alt="Fitness Logo" className='w-4 h-4' />
      </div>

      <span className="text-[#4AB04A] font-medium text-sm">#fitness</span>
    </div>
  )
}

export default FitnessStrip