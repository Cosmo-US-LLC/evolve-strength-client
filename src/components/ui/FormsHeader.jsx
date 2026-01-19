import React from "react";
import { Link } from "react-router-dom";
import EvolveStrengthBlackLogo from "../../assets/images/home/navbar/Evolve-logo-dark.svg";

function FormsHeader() {
  return (
    <div className="relative">
      <div className="fixed top-0 left-0 w-full z-[99999] bg-white justify-center items-center mb-8 border-b border-[#D4D4D4] py-3 px-4 flex">
        <Link to="/" className="flex items-center">
          <img
            src={EvolveStrengthBlackLogo}
            alt="Evolve Strength Logo"
            className="w-[176px]"
          />
        </Link>
      </div>
    </div>
  );
}

export default FormsHeader;
