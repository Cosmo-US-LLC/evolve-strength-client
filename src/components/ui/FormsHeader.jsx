import React from "react";
import { Link } from "react-router-dom";
import EvolveStrengthBlackLogo from "../../assets/images/home/navbar/Evolve-logo-dark.svg";

function FormsHeader() {
  return (
    <div className="w-full bg-white justify-center items-center mb-8 border-b border-gray-500 py-3 px-4 flex">
      <Link to="/" className="flex items-center">
        <img
          src={EvolveStrengthBlackLogo}
          alt="Evolve Strength Logo"
          className="w-[176px]"
        />
      </Link>
    </div>
  );
}

export default FormsHeader;
