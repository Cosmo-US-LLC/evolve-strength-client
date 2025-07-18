import React from "react";
import FreeAssessmentBG from "../../../../assets/images/spaces/WhyProfessionalsChooseUs/why_professionals_choose_us.webp";

function WhyProfessionalsChooseUs() {
  return (
    <div className="relative w-full aspect-[16/9]">
      <img
        src={FreeAssessmentBG}
        alt="Gym trainers high five"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="w-full max-w-[1280px] px-8   mx-auto z-10 h-full items-center flex flex-row relative">
        <div className="bg-[#ffffff] rounded-[10px] shadow-lg p-6 max-w-[500px]">
          <h3 className="text-[#000] uppercase leading-[26px] !font-[700]">
            Why Professionals Choose Us?
          </h3>
          <p className="text-[#000] description mt-4 mb-6 leading-[26px]">
            Some practitioners join us to open their first business without
            taking on too much risk. Others expand to new locations because it’s
            easy to replicate their setup across our network. <br /> <br />
            With Evolve, there’s no long list of to-dos. You move in, set up
            your space, and start seeing clients. We take care of the rest.
          </p>
           <button className="btnPrimary">
            Apply now
          </button>
        </div>
      </div>
      {/* <div className="absolute inset-0 bg-black/10 backdrop-blur-sm"></div> */}
    </div>
  );
}

export default WhyProfessionalsChooseUs;
