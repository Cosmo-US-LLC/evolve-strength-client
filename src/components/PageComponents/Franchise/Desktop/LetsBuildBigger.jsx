import React from "react";
import { Link } from "react-router-dom";

function LetsBuildBigger() {
  return (
    <div
      className="relative w-full flex items-center justify-center franchiseLetsBuildBigger"
    >
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 relative z-10 flex flex-col gap-6 items-center justify-center w-full text-center">
        <h2 className="text-[#fff]  uppercase leading-[39px] font-[700]">
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
        <Link to="/your-fitness-future">
              <button className="btnPrimary">Apply Now</button>
            </Link>
      </div>
    </div>
  );
}

export default LetsBuildBigger;
