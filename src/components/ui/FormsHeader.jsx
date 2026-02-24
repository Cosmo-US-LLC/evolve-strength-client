import React from "react";
import { Link, useLocation } from "react-router-dom";
import EvolveStrengthBlackLogo from "../../assets/images/home/navbar/Evolve-logo-dark.svg";

function FormsHeader() {
  const location = useLocation();

  const isPresalePage = location.pathname === "/presale-edmonton-south-common";
  const isFounderOfferPaymentPage =
    location.pathname === "/founder-offer-payment";

  const logoTo =
    isPresalePage || isFounderOfferPaymentPage
      ? "/presale-edmonton-south-common"
      : "/";

  return (
    <div className="relative">
      <div className="fixed top-0 left-0 w-full z-[99] bg-white justify-center items-center mb-8 border-b border-[#D4D4D4] py-3 px-4 flex">
        <Link to={logoTo} className="flex items-center">
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
