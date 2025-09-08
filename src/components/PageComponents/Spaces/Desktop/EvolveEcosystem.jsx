import React from "react";
import { Link } from "react-router-dom";
function EvolveEcosystem() {
  return (
    <div className="w-full md:py-12 max-md:pt-0 pb-0 md:pb-[48px] bg-[#fff]">
      <div className="w-full max-w-[1280px] md:px-8  mx-auto ">
        {/* Desktop Image */}
        <div
          className=" relative bg-cover bg-center min-h-[600px] flex flex-col max-md:px-[16px] justify-between md:px-[76px]  md:py-16 max-md:py-[24px]  items-start text-left md:rounded-xl overflow-hidden shadow-lg"
          style={{
            backgroundImage: `url("https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/spaces/EvolveEcosystem/EvolveEcosystemBG.webp")`,
          }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat md:hidden"
            style={{
              backgroundImage: `url("https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/spaces/EvolveEcosystem/EvolveEcosystemMob.webp")`,
            }}
          />
          {/* <div className="absolute inset-0 bg-black/40 z-0" /> */}
          <div className="absolute inset-y-0 left-0 w-[50%] z-0 bg-gradient-to-r from-black/40 via-black/10 to-transparent " />

          <div className="relative z-10 max-md:px-[0px] max-w-3xl space-y-4">
            <h2 className="uppercase text-[#FFF]">
              Be Part of the Evolve <br /> Ecosystem
            </h2>
            <h4 className="leading-[26px] font-[400] text-[#fff] max-w-[400px] relative z-20">
              You’re not just renting a space. You’re joining a full wellness
              ecosystem. Our gym members often need the exact services you
              offer, and we help make that connection. No referral fees. No
              gatekeeping.You grow. We support you.
            </h4>

            <h4 className="leading-[26px] font-[700] text-[#fff] relative z-20 ">
              You grow. We support you.
            </h4>
          </div>

          <div className="w-full flex justify-center items-center">
            <div className="relative z-10 w-full max-w-[720px] bg-[#0000006E] backdrop-blur-[25px] rounded-[10px] flex justify-between gap-6 items-center px-6 py-4 text-[#fff]">
              <span className="description text-[#fff]">
                Set up your practice in Canada’s best gym.
              </span>
              <Link to="/join-the-wait-list">
                <button className="btnPrimary">Join the Waitlist</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EvolveEcosystem;
