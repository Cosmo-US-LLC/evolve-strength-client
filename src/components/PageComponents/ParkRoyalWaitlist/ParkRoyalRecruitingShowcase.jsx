import React from "react";
import { Link } from "react-router-dom";

// TODO: replace with CDN links when shared
const desktopImage =
  "https://evolve-strength.tor1.digitaloceanspaces.com/media/1784283892364-21f3d413-c5f3-4334-8d90-02f6e23d795d.webp";
const mobileImage =
  "https://evolve-strength.tor1.digitaloceanspaces.com/media/1784283906214-dde155ef-7125-49e7-b506-3e4eae632b8c.webp";

function ParkRoyalRecruitingShowcase() {
  return (
    <section className="w-full bg-white">
      <div className="relative overflow-hidden w-full min-h-[420px] md:min-h-[667px]">
        <img
          src={desktopImage}
          alt="Evolve Strength trainers"
          className="hidden md:block absolute inset-0 w-full h-full object-cover"
        />
        <img
          src={mobileImage}
          alt="Evolve Strength trainers"
          className="block md:hidden absolute inset-0 w-full h-full object-cover"
        />

        <div className="relative z-10 flex items-center justify-center min-h-[420px] md:min-h-[667px] max-w-[1280px] mx-auto px-4 py-12 md:px-8 md:py-[50px]">
          <div className="w-full max-w-[800px] flex flex-col items-center gap-6 text-center">
            <div className="flex flex-col items-center gap-2 md:gap-4">
              <p className="!text-[16px] !font-[500] text-[#4AB04A] uppercase !font-[Kanit] leading-[24px] m-0">
                Now Recruiting
              </p>
              <h2 className="text-white uppercase m-0 !text-[32px] md:!text-[40px] !leading-[34px] md:!leading-[39px]">
                Write your own story
              </h2>
              <p className="!text-[16px] md:!text-[18px] !font-[300] text-white !font-[Kanit] leading-[24px] md:leading-[27px] m-0 max-w-[744px]">
                Stop building someone else's dream. At Evolve you're not an
                employee, you're an entrepreneur. Build your brand, grow your
                client base, and create a business that's truly yours.
              </p>
            </div>

            <Link to="/trainer-form?location=Park%20Royal">
              <button type="button" className="btnPrimary uppercase">
                Become a Trainer
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ParkRoyalRecruitingShowcase;
