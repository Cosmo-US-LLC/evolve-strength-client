import React from "react";
import { Link } from "react-router-dom";
import { LANSDOWNE } from "@/constants/lansdowneWaitlist";
// TODO: the Figma frame ("Our Services - Chiropractic Care", node 17117:309) uses a
// full-bleed photo of two women in a training space (blurred blonde trainer in the
// foreground, dark-haired trainer with a stopwatch behind). The real Chiropractic Care
// photo is still needed; reusing the existing trainer photo as a placeholder.
import servicesPhoto from "@/assets/images/Lansdowne/trainer.webp";

function LansdowneServicesShowcase() {
  return (
    <section className="w-full bg-white">
      <div className="relative overflow-hidden w-full min-h-[700px] min-[1440px]:min-h-[48.61vw]">
        <img
          src={servicesPhoto}
          alt="Evolve Strength Lansdowne trainers"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none bg-black/[0.51]"
        />

        <div className="relative z-10 flex items-end md:items-center justify-center min-h-[700px] min-[1440px]:min-h-[48.61vw] max-w-[1440px] mx-auto px-4 py-12 md:px-[100px] md:py-[50px]">
          <div className="w-full max-w-[800px] flex flex-col items-center gap-6 text-center">
            <div className="w-full flex flex-col items-center gap-2">
              <p className="!text-[16px] !font-[500] text-[#4AB04A] uppercase !font-[Kanit] leading-[24px] m-0">
                Now Recruiting
              </p>
              <div className="w-full flex flex-col items-center gap-4">
                <h2 className="text-white uppercase m-0 !text-[40px] !leading-[39px]">
                  Write your own story
                </h2>
                <p className="w-full max-w-[318px] md:max-w-[744px] !text-[18px] !font-[300] text-white !font-[Kanit] leading-[27px] m-0">
                  Stop building someone else's dream. At Evolve you're not an
                  employee, you're an entrepreneur. Build your brand, grow your
                  client base, and create a business that's truly yours.
                </p>
              </div>
            </div>

            {/* TODO: confirm destination with client; design shows "Become a Trainer" */}
            <Link to={LANSDOWNE.trainerUrl}>
              <button
                type="button"
                className="btnPrimary uppercase !text-[16px] !py-[14px]"
              >
                Become a Trainer
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LansdowneServicesShowcase;
