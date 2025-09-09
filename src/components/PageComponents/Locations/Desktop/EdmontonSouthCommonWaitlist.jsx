import EdmontonSouthCommonForm from "@/components/Form/EdmontonSouthCommonForm";
import EvolveStrengthBlackLogo from "@/assets/images/home/navbar/Evolve-logo-dark.svg";
import { Link } from "react-router-dom";
import React, { useState, useRef, useEffect } from "react";

function EdmontonSouthCommonWaitlist() {
  const [videoError, setVideoError] = useState(false);
  const desktopVideoRef = useRef(null);
  const mobileVideoRef = useRef(null);

  // Handle video errors and provide fallback
  const handleVideoError = () => {
    setVideoError(true);
  };

  // Ensure videos play on Safari
  useEffect(() => {
    const playVideos = () => {
      if (desktopVideoRef.current) {
        desktopVideoRef.current.play().catch(console.error);
      }
      if (mobileVideoRef.current) {
        mobileVideoRef.current.play().catch(console.error);
      }
    };

    // Try to play videos after a short delay
    const timer = setTimeout(playVideos, 50);
    return () => clearTimeout(timer);
  }, []);

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
        {/* Fallback Background Image */}
        {videoError && (
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url('https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/home/someThinkNew/common_new_branch_desktop.webp')",
            }}
          />
        )}
        {/* Desktop Video */}
        <video
          ref={desktopVideoRef}
          autoPlay
          loop
          muted
          playsInline
          webkit-playsinline="true"
          x-webkit-airplay="allow"
          className="hidden md:block w-full h-full object-cover"
          onError={handleVideoError}
        >
          <source
            src="https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/videos/ES_waitlist_desktop.webm"
            type="video/mp4"
          />
          <source
            src="https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/videos/ES_waitlist_desktop.webm"
            type="video/webm"
          />
        </video>

        {/* Mobile Video */}
        <video
          ref={mobileVideoRef}
          autoPlay
          loop
          muted
          playsInline
          webkit-playsinline="true"
          x-webkit-airplay="allow"
          className="block md:hidden w-full h-full object-cover"
          onError={handleVideoError}
        >
          <source
            src="https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/videos/ES_waitlist_mobile.webm"
            type="video/mp4"
          />
          <source
            src="https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/videos/ES_waitlist_mobile.webm"
            type="video/webm"
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
