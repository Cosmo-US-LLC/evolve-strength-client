import React from 'react'
import phone from "../../../../../assets/images/JoinTheMovement/SocialMedia/PhoneMockUp/Mobile.webp"
import { assetUrl } from "@/lib/assetUrl";

function PhoneMockUp() {
  return (
   <div className=''>
  <img 
    src={assetUrl("/assets/images/JoinTheMovement/SocialMedia/PhoneMockUp/Mobile.webp")} 
    alt="galary image" 
    className='w-[170px] h-[339px] md:w-full md:h-full'
  />
</div>

  )
}

export default PhoneMockUp;