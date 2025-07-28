import React from "react";
import trainerBg from "/src/assets/images/spaces/EvolveEcosystem/EvolveEcosystemBG.webp";

function EvolveEcosystem() {
  return (
    <div className="w-full md:py-12 max-md:pt-0 pb-[48px] bg-[#fff]">
      <div className="w-full max-w-[1280px] md:px-8  mx-auto ">
        <div
          className="bg-cover bg-center min-h-[600px] flex flex-col max-md:px-[16px] justify-between md:px-[76px]  md:py-16 max-md:py-[24px]  items-start text-left md:rounded-xl overflow-hidden shadow-lg"
          style={{ backgroundImage: `url(${trainerBg})` }}
        >
          {/* <div className="absolute inset-0 bg-black/40 z-0" /> */}

          <div className="relative z-10 max-md:px-[16px] max-w-3xl space-y-4">
            <h2 className="uppercase text-[#FFF]">
              Be Part of the Evolve <br /> Ecosystem
            </h2>
            <h4 className="leading-[26px] font-[400] text-[#fff] max-w-[400px] relative z-20">
              You’re not just renting a space. You’re joining a full wellness
              ecosystem. Our gym members often need the exact services you
              offer, and we help make that connection. No referral fees. No
              gatekeeping.You grow. We support you.
            </h4>

            <h4 className="leading-[26px] font-[700] text-[#fff] relative z-20 ">You grow. We support you.</h4>
          </div>

          <div className="w-full flex justify-center items-center">
            <div className="relative z-10 w-full max-w-[720px] bg-[#0000006E] backdrop-blur-[25px] rounded-[10px] flex justify-between gap-6 items-center px-6 py-4 text-[#fff]">
              <span className="description text-[#fff]">
                Set up your practice in Canada’s best gym.
              </span>
              <button className="btnPrimary">Apply now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EvolveEcosystem;
