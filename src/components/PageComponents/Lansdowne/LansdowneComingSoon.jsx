import React from "react";
import { Link } from "react-router-dom";
import EdmontonSouthCommonForm from "@/components/Form/EdmontonSouthCommonForm";
import EvolveStrengthBlackLogo from "@/assets/images/home/navbar/Evolve-logo-dark.svg";

function LansdowneComingSoon() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#000000]">
      {/* Logo Header */}
      <div className="fixed top-0 left-0 w-full z-30 bg-transparent backdrop-blur-2xl justify-center items-center border-b border-[#D4D4D4]/40 py-3 px-4 flex">
        <Link to="/" className="flex items-center">
          <img
            src={EvolveStrengthBlackLogo}
            alt="Evolve Strength Logo"
            className="w-[176px]"
          />
        </Link>
      </div>

      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="hidden md:block absolute inset-0 w-full h-full object-cover"
          style={{ objectFit: "cover", objectPosition: "bottom" }}
        >
          <source
            src="/assets/videos/ES_waitlist_desktop.webm"
            type="video/webm"
          />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="block md:hidden absolute inset-0 w-full h-full object-cover"
          style={{ objectFit: "cover", objectPosition: "bottom" }}
        >
          <source
            src="/assets/videos/ES_waitlist_mobile.webm"
            type="video/webm"
          />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 w-full h-full bg-black/50" />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-24">
        <div className="backdrop-blur-[12px] bg-black/20 border border-white/60 px-4 py-1 rounded-full mb-5">
          <p className="text-white text-[12px] md:text-[14px] font-[600] uppercase leading-[24px] font-[Kanit]">
            Richmond, BC · Inside Lansdowne Centre
          </p>
        </div>

        <div className="text-center mb-3">
          <h1 className="md:max-w-[820px] leading-[46px] md:leading-[64px] mb-4 uppercase">
            <span className="text-[#4AB04A]">Coming Soon</span>{" "}
            <span className="text-[#FFFFFF]">to Lansdowne!</span>
          </h1>
          <h4 className="text-[#FFFFFF] text-center !font-[Kanit] !font-[400] max-w-[560px] mx-auto">
            Evolve Strength is opening inside Lansdowne Centre in 2027. Join
            the waitlist for founding member rates before doors open.
          </h4>
        </div>

        <div className="flex items-center gap-2 mb-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z"
              stroke="#4AB04A"
              strokeWidth="1.6"
            />
            <circle cx="12" cy="9" r="2.4" stroke="#4AB04A" strokeWidth="1.6" />
          </svg>
          <p className="text-[#E5E5E5] !text-[14px] !font-[400] !font-[Kanit] leading-[20px] m-0">
            Unit 314, 5300 No 3 Rd, Richmond, BC, V6X 2X9
          </p>
        </div>

        {/* Waitlist Form */}
        <div id="waitlist" className="w-full max-w-3xl scroll-mt-24">
          <EdmontonSouthCommonForm location="Lansdowne" />
        </div>
      </div>
    </div>
  );
}

export default LansdowneComingSoon;
