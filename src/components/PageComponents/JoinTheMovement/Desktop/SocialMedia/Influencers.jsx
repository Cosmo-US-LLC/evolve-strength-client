import React from "react";
import img1 from "@/assets/images/JoinTheMovement/SocialMedia/Featured_Influencers/img1.webp";
import img2 from "@/assets/images/JoinTheMovement/SocialMedia/Featured_Influencers/img2.webp";
import img3 from "@/assets/images/JoinTheMovement/SocialMedia/Featured_Influencers/img3.webp";
import logo from "@/assets/images/JoinTheMovement/SocialMedia/Featured_Influencers/Kettleball_logo.svg";

const Influencers = () => {
  const influencerImages = [img1, img2, img3];

  return (
    <div className="w-[192px] h-[24px] flex flex-col items-center justify-center text-center ">
      <div className="flex flex-row">
        <h3 className="w-[192px] h-[24px] !font-[Kanit] !font-[300] leading-normal pt-2 !text-[16px]">
          Featured Influencers
        </h3>
        <img src={logo} alt="" />
      </div>

 <div className="flex md:mt-4 relative w-full bg-amber-300 h-20">
  {influencerImages.map((img, index) => (
    <img
      key={index}
      src={img}
      alt={`Influencer ${index + 1}`}
      className="w-20 h-20 rounded-full object-cover absolute"
      style={{ left: `${index * 40}px` }}
    />
  ))}
</div>
    </div>
  );
};

export default Influencers;
