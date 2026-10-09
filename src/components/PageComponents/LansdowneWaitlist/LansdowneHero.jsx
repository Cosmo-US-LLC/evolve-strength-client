import React from "react";
import { LANSDOWNE } from "@/constants/lansdowneWaitlist";
import heroImage from "@/assets/images/Lansdowne/lansdowne-hero.webp";

function LansdowneHero() {
  const scrollToWaitlist = () => {
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <div className="relative overflow-hidden w-full h-[700px] md:h-[760px] bg-[#000000]">
        <img
          src={heroImage}
          alt="Lansdowne Centre"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        <div className="absolute top-0 left-0 z-1 w-full h-full bg-black/[0.42]" />

        <div className="max-w-[1280px] md:px-8 px-5 pb-[48px] md:pb-[96px] mx-auto w-full h-full relative z-2">
          <div className="relative z-2 flex flex-col items-start justify-end h-full text-left">
            <div className="flex flex-col items-start gap-4 md:gap-[28px] w-full max-w-[940px]">
              <div className="flex flex-col items-start gap-4 md:gap-[8px] w-full">
                <div className="backdrop-blur-[12px] bg-black/10 border border-white px-4 py-1 rounded-full">
                  <p className="text-white text-[16px] font-[600] uppercase leading-[24px] font-[Kanit]">
                    Coming Soon
                  </p>
                </div>

                <div className="flex flex-col items-start gap-4 md:gap-[10px] w-full">
                  <h1 className="text-[#4AB04A] !text-[46px] md:!text-[96px] !leading-[46px] md:!leading-[88px] uppercase mb-0 drop-shadow-[0_0_4px_rgba(0,0,0,0.25)]">
                    <span className="text-[#FFFFFF]">Evolve Strength</span>
                    <br />
                    {LANSDOWNE.name}
                  </h1>

                  <h3 className="text-[#FFFFFF] !text-[16px] md:!text-[20px] !font-[300] !leading-[24px] md:!leading-[30px] m-0 max-w-[560px] !font-[Kanit] drop-shadow-[0_0_4px_rgba(0,0,0,0.25)]">
                    Join the waitlist for founding rates before we open in
                    Richmond.
                  </h3>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4 w-full md:w-auto">
                <button
                  type="button"
                  className="btnPrimary uppercase md:min-w-[164px] !h-[44px] md:!h-[50px]"
                  onClick={scrollToWaitlist}
                >
                  Join The Waitlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LansdowneHero;
