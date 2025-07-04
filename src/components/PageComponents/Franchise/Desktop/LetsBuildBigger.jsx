import React from "react";
import letsBuildBiggerBG from "@/assets/images/franchise/letsBuildBigger/lets-build-bigger-BG.webp";

function LetsBuildBigger() {
  return (
    <div
      className="relative w-full min-h-[600px] flex items-center justify-center"
      style={{
        backgroundImage: `url(${letsBuildBiggerBG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-8 relative z-10 flex flex-col gap-6 items-center justify-center w-full text-center">
        <h2 className="text-[#fff] uppercase leading-[39px] font-[700]">
          LET'S BUILD SOMETHING BIGGER, TOGETHER
        </h2>
        <p className="text-[#fff] text-[18px] leading-[26px] font-[400] max-w-[800px]">
          Whether you're a solo entrepreneur or a group of investors, Evolve is
          your
          <br />
          opportunity to enter the booming wellness space with a partner you can
          trust.
          <br />
          Fill out the form and let's explore your path to ownership.
        </p>
        <button className="btnPrimary">
          APPLY NOW
        </button>
      </div>
    </div>
  );
}

export default LetsBuildBigger;
