import React from "react";

function FreeAssessment() {
  return (
    <div className="relative w-full personalTrainingFreeAssessment">
      <div className="w-full max-w-[1280px] px-4 md:px-8 py-16 mx-auto z-10 h-full items-end flex flex-row relative">
        <div className="bg-[#ffffff] rounded-[10px] shadow-lg p-8 max-w-[346px]">
          <h3 className="text-[#000] uppercase leading-[26px] !font-[700]">
            START STRONG WITH A FREE PERSONALISED ASSESSMENT
          </h3>
          <h4 className="text-[#000] mt-4 mb-6  leading-[24px] md:leading-[26px]">
            Every new member at Evolve gets a complimentary one-on-one
            assessment with a certified trainer.
          </h4>
          <a
            href="#"
            className="text-[#4AB04A] text-[16px] font-[700] leading-[26px] underline underline-offset-4 decoration-solid decoration-auto [text-underline-position:from-font]"
          >
            Begin free training consultation
          </a>
        </div>
      </div>
      {/* <div className="absolute inset-0 bg-black/10 backdrop-blur-sm"></div> */}
    </div>
  );
}

export default FreeAssessment;
