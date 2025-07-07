import React from "react";
import corporateHero from "@/assets/images/corporateMembership/corporateMemberHero/corporateHero.webp";

function CorporateMembershipHero() {
  return (
    <div className="w-full pb-12 pt-[110px]">
      <div className="w-full max-w-[1280px] px-8 mx-auto flex flex-col gap-12">
        <div className="flex flex-row gap-10">
          <div className="w-[50%] flex">
            <h1 className="max-w-[655px] text-left leading-[56px] uppercase">
              Support Your Team with Gym and Wellness Access
            </h1>
          </div>
          <div className="flex flex-col w-[50%] text-left justify-center items-start gap-5">
            <h3 className="text-[#000] leading-[26px] font-[400] w-[585px]">
              Evolve Strength gives your team access to fitness and healthcare
              under one roof. It’s a simple way to improve employee health,
              performance, and recovery<br /> <br /> Locations Edmonton, Calgary, Burnaby,
              and Vancouver. 
            </h3>
            <button className="btnPrimary">Book a Free Consultation</button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src={corporateHero} alt="Description" />
        </div>
      </div>
    </div>
  );
}

export default CorporateMembershipHero;
