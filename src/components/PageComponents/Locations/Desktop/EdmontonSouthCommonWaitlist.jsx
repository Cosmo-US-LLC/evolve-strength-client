import EdmontonSouthCommonForm from "@/components/Form/EdmontonSouthCommonForm";
import React from "react";

function EdmontonSouthCommonWaitlist() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        {/* Desktop Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="hidden md:block w-full h-full object-cover"
        >
          <source
            src="https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/videos/ES_waitlist_desktop.webm"
            type="video/mp4"
          />
        </video>

        {/* Mobile Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="block md:hidden w-full h-full object-cover"
        >
          <source
            src="https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/videos/ES_waitlist_mobile.webm"
            type="video/mp4"
          />
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
