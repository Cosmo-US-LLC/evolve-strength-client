import React from "react";
import { Link } from "react-router-dom";
import { LANSDOWNE } from "@/constants/lansdowneWaitlist";
import trainerPhoto from "@/assets/images/Lansdowne/trainer.webp";

function LansdowneRecruitingShowcase() {
  return (
    <section className="w-full bg-white py-16 md:py-[112px]">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 flex flex-col md:flex-row items-center gap-7 md:gap-[88px]">
        <img
          src={trainerPhoto}
          alt="Evolve Strength trainer"
          className="w-full md:w-[600px] shrink-0 h-[280px] md:h-[540px] object-cover rounded-xl"
        />

        <div className="flex flex-col items-start gap-6 w-full">
          <div className="flex flex-col items-start gap-2 md:gap-4">
            <p className="!text-[16px] !font-[500] text-[#4AB04A] uppercase !font-[Kanit] leading-[24px] m-0">
              Now Recruiting
            </p>
            <div className="flex flex-col items-start gap-4">
            <h2 className="text-black uppercase m-0 !text-[40px] !leading-[39px]">
              Write your own story
            </h2>
            <p className="!text-[18px] !font-[300] text-[#545454] !font-[Kanit] leading-[27px] m-0">
              Stop building someone else's dream. At Evolve you're not an
              employee, you're an entrepreneur. Build your brand, grow your
              client base, and create a business that's truly yours.
            </p>
            </div>
          </div>

          <Link to={LANSDOWNE.trainerUrl}>
            <button type="button" className="btnPrimary uppercase !text-[16px] !py-[14px] md:!py-3">
              Become a Trainer
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default LansdowneRecruitingShowcase;
