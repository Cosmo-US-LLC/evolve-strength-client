import React from 'react'
import Users from "../../../../../assets/images/JoinTheMovement/SocialMedia/Allmedia/MediaUsers.svg"


function AllMedia() {
  return (
    <div className="w-full max-w-[228px] h-[192px] bg-white rounded-xl shadow-sm border border-[#000] p-6 flex flex-col ">
             {/* Title and Instagram Icon */}
             <div className="flex justify-between items-start relative">
               
                 <p className=" w-[131px] h-[44px] font-[Kanit] !font-[500] leading-[21px] !text-[21px]">Views across social media</p>
              
               
               <div className="absolute -right-[50px]">
                  <img src={Users} alt="" />
               </div>
             </div>
             
       
             {/* Runner emoji and Reach Number */}
             <div className="mt-3 flex  items-center justify-between">
                
               <div className="w-10 h-10 rounded-full"></div>
               <p className="!description !font-[Kanit] mt-9">1,170K+</p>
             </div>
       
             {/* Progress Bar */}
             <div className="mt-4 w-full h-[6px] bg-gray-200 rounded-full overflow-hidden">
               <div
                 className="h-full bg-green-500"
                 style={{ width: "45%" }} // Adjust as needed
               ></div>
             </div>
           </div>
  )
}

export default AllMedia