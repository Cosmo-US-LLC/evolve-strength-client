import React from "react";
import MetaTags from "@/components/Metatags/Meta";
import EdmontonSouthCommonForm from "@/components/Form/EdmontonSouthCommonForm";

function LansdowneComingSoon() {
  return (
    <>
      <MetaTags
        title="Evolve Strength Lansdowne | Coming Soon"
        description="Evolve Strength is coming to Lansdowne Centre in Richmond, BC. Join the waitlist to be first in line for founding membership access."
      />
      <div className="relative overflow-hidden w-full min-h-[100vh] bg-[#0A0A0A] flex items-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#1a1a1a,_#000000)]" />
        <div className="max-w-[900px] mx-auto w-full px-4 md:px-8 py-24 relative z-10">
          <div className="text-center flex flex-col items-center">
            <div className="text-[#FFFFFF] text-[12px] md:text-[14px] font-[600] uppercase leading-[24px] mb-6 bg-[#20202066] !font-[Kanit] border border-[#ADADAD] px-4 py-2 rounded-full">
              Richmond, BC · Inside Lansdowne Centre
            </div>

            <h1 className="text-[#FFFFFF] !font-[Kanit] uppercase max-w-[700px] leading-[40px] md:leading-[64px] max-md:!text-[36px] mb-4 font-[600]">
              Evolve Strength Lansdowne
            </h1>

            <h2 className="text-[#4AB04A] uppercase !font-[Kanit] font-[600] text-[24px] md:text-[32px] mb-6">
              Coming Soon
            </h2>

            <h3 className="text-[#E5E5E5] !text-[16px] !font-[400] !leading-[24px] mb-2 max-w-[560px] !font-[Kanit]">
              Unit 314, 5300 No 3 Rd, Richmond, BC, V6X 2X9
            </h3>
            <h3 className="text-[#E5E5E5] !text-[16px] !font-[400] !leading-[24px] mb-10 max-w-[560px] !font-[Kanit]">
              Opening 2027
            </h3>

            <div className="w-full max-w-[560px]">
              <div className="text-center mb-6">
                <h4 className="text-[#FFFFFF] !font-[Kanit] !font-[500] text-[18px] md:text-[20px] mb-2">
                  Join the Waitlist
                </h4>
                <p className="text-[#B5B5B5] !font-[Kanit] !text-[14px]">
                  Be first to know when founding member presale opens.
                </p>
              </div>
              <EdmontonSouthCommonForm location="Lansdowne" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LansdowneComingSoon;
