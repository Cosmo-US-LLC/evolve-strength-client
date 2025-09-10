import EdmontonSouthCommonForm from "@/components/Form/EdmontonSouthCommonForm";
import EvolveStrengthBlackLogo from "@/assets/images/home/navbar/Evolve-logo-dark.svg";
import { Link } from "react-router-dom";
import React from "react";

function EdmontonSouthCommonWaitlist() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <div className="relative pb-[60px] overflow-hidden">
        <div className="fixed top-0 left-0 w-full z-30 bg-transparent backdrop-blur-2xl justify-center items-center mb-8 border-b border-[#D4D4D4] py-3 px-4 flex">
          <Link to="/" className="flex items-center">
            <img
              src={EvolveStrengthBlackLogo}
              alt="Evolve Strength Logo"
              className="w-[176px]"
            />
          </Link>
        </div>
      </div>
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        {/* Desktop Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="hidden md:block absolute inset-0 w-full h-full object-cover"
          style={{
            objectFit: "cover",
            objectPosition: "bottom",
          }}
        >
          <source
            src="https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/videos/ES_waitlist_desktop.webm"
            type="video/webm"
          />
          Your browser does not support the video tag.
        </video>

        {/* Mobile Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="block md:hidden absolute inset-0 w-full h-full object-cover"
          style={{
            objectFit: "cover",
            objectPosition: "bottom",
          }}
        >
          <source
            src="https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/videos/ES_waitlist_mobile.webm"
            type="video/webm"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-8">
        {/* Main Heading */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="md:max-w-[807px] leading-[46px] md:leading-[59px] mb-4">
            <span className="text-[#4AB04A]">COMING SOON</span> {""}
            <span className="text-[#fff]">TO SOUTH EDMONTON COMMON!</span>
          </h1>
          <h4 className="text-[#fff] text-center font-[kanit]">
            Presale starts October 2025. Join the waitlist for early access.
          </h4>
        </div>

        {/* Waitlist Form */}
        <div className="w-full max-w-3xl">
          <EdmontonSouthCommonForm />
        </div>
      </div>
    </div>
  );
}

export default EdmontonSouthCommonWaitlist;
