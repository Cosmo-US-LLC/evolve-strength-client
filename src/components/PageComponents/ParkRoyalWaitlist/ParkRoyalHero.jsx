import React from "react";

function ParkRoyalHero() {
  const scrollToWaitlist = () => {
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <div className="relative overflow-hidden w-full h-[70vh] md:h-[100vh] bg-[#000000]">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectFit: "cover", objectPosition: "bottom" }}
        >
          <source
            src="/assets/videos/ES_waitlist_desktop.webm"
            type="video/webm"
          />
          Your browser does not support the video tag.
        </video>

        <div className="absolute top-0 left-0 z-1 w-full h-full bg-black/40" />

        <div className="max-w-[1280px] md:px-8 px-4 pb-[40px] md:pb-[80px] mx-auto w-full h-full relative z-2">
          <div className="relative z-2 flex flex-col items-center justify-end h-full text-center">
            <div className="flex flex-col items-center gap-3 md:gap-[12px] w-full max-w-[800px]">
              <div className="backdrop-blur-[12px] bg-black/10 border border-white px-4 py-1 rounded-full">
                <p className="text-white text-[12px] md:text-[16px] font-[600] uppercase leading-[24px] font-[Kanit]">
                  West Vancouver · Opening 2026
                </p>
              </div>

              <h1 className="text-[#FFFFFF] !text-[36px] md:!text-[70px] leading-[40px] md:leading-[72px] uppercase mb-0 drop-shadow-[0_0_4px_rgba(0,0,0,0.25)]">
                Park Royal Evolved
              </h1>

              <h3 className="text-[#FFFFFF] !text-[16px] !font-[400] !leading-[24px] mt-3 mb-6 md:mb-[30px] max-w-[350px] md:max-w-[593px] !font-[Kanit] drop-shadow-[0_0_4px_rgba(0,0,0,0.25)]">
                A new Evolve Strength facility is coming to Park Royal. Join the
                waitlist for early access when presale opens.
              </h3>

              <button
                type="button"
                className="btnPrimary uppercase"
                onClick={scrollToWaitlist}
              >
                Join the Waitlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ParkRoyalHero;
