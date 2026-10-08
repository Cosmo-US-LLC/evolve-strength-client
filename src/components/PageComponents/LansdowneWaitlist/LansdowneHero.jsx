import React from "react";
import { Link } from "react-router-dom";
import { LANSDOWNE, LANSDOWNE_IMAGES } from "@/constants/lansdowneWaitlist";

function LansdowneHero() {
  const scrollToWaitlist = () => {
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <div className="relative overflow-hidden w-full h-[80vh] md:h-[100vh] bg-[#000000]">
        <img
          src={LANSDOWNE_IMAGES.location.desktop}
          alt="Lansdowne Centre"
          className="hidden md:block absolute inset-0 w-full h-full object-cover object-bottom"
        />
        <img
          src={LANSDOWNE_IMAGES.location.mobile}
          alt="Lansdowne Centre"
          className="block md:hidden absolute inset-0 w-full h-full object-cover object-bottom"
        />

        <div className="absolute top-0 left-0 z-1 w-full h-full bg-black/40" />

        <div className="max-w-[1280px] md:px-8 px-4 pb-[40px] md:pb-[80px] mx-auto w-full h-full relative z-2">
          <div className="relative z-2 flex flex-col items-start justify-end h-full text-left">
            <div className="flex flex-col items-start gap-6 md:gap-[24px] w-full max-w-[550px]">
              <div className="flex flex-col items-start gap-3 md:gap-[14px] w-full">
                <div className="backdrop-blur-[12px] bg-black/10 border border-white px-4 py-1 rounded-full">
                  <p className="text-white text-[12px] md:text-[16px] font-[600] uppercase leading-[24px] font-[Kanit]">
                    Coming Soon ·{" "}
                    <span className="hidden md:inline">Lansdowne Centre, </span>
                    Richmond
                  </p>
                </div>

                <div className="flex flex-col items-start gap-2 w-full">
                  <h1 className="text-[#4AB04A] !text-[36px] md:!text-[70px] leading-[40px] md:leading-[69px] uppercase mb-0 drop-shadow-[0_0_4px_rgba(0,0,0,0.25)]">
                    <span className="text-[#FFFFFF]">Evolve Strength</span>
                    <br />
                    {LANSDOWNE.name}
                  </h1>

                  <h3 className="text-[#FFFFFF] !text-[16px] !font-[400] !leading-[24px] m-0 max-w-[497px] !font-[Kanit] drop-shadow-[0_0_4px_rgba(0,0,0,0.25)]">
                    A new club for every way you train. Join the waitlist for
                    founding rates before we open.
                  </h3>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  className="btnPrimary uppercase min-w-[190px]"
                  onClick={scrollToWaitlist}
                >
                  Join Waitlist
                </button>
                <Link to={LANSDOWNE.leasingUrl}>
                  <button
                    type="button"
                    className="uppercase min-w-[190px] text-white font-[600] font-[Kanit] px-6 py-3 rounded-[6px] border border-white bg-black/20 hover:bg-white hover:text-black transition-colors"
                  >
                    Inquire About Leasing
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LansdowneHero;
