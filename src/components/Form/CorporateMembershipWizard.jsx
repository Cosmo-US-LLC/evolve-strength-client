import React from "react";
import { Link } from "react-router-dom";
import locationImg from "../../assets/images/form/spaces-form.webp";
import { Building2 } from "lucide-react";

function CorporateMembershipWizard({ onSelectOption }) {
  return (
    <div className="flex md:gap-12 md:p-6 p-4 md:flex-row flex-col md:max-w-[1280px] mx-auto justify-center items-center min-h-screen">
      {/* Left Image */}
      <div className="w-full max-w-[40%] flex-shrink-0 flex">
        <div className="rounded-[8px] max-w-[500px] overflow-hidden bg-white max-md:hidden">
          <img
            src={locationImg}
            alt="Evolve Strength Facility"
            className="object-cover w-full h-auto"
          />
        </div>
      </div>
      {/* Right Options */}
      <div className="flex flex-col items-center  w-full md:max-w-[60%]">
        <h2 className="!text-[20px] md:text-[28px] md:font-[700] !font-[500] text-center mb-2">
          LET'S GET YOU STARTED
        </h2>
        <p className="text-[16px] md:text-[18px] font-[400] text-center mb-6 md:max-w-[420px]">
          Whether you're signing up for yourself or on behalf of a company,
          choose the option that best fits your journey.
        </p>
        <div className="flex flex-col md:flex-row gap-6 w-full justify-center">
          <Link to="/check-membership-form">
          {/* Option 1 */}
          <button
            className="flex-1 bg-white border border-[#D4D4D4] rounded-[8px] p-6 flex flex-col items-center cursor-pointer hover:border-[#4AB04A] transition-all md:min-w-[220px] md:max-w-[260px] shadow-sm"
            onClick={() => onSelectOption("check")}
          >
            <span className="mb-3">
              <Building2 size={36} className="text-[#4AB04A]" />
            </span>
            <span className="font-[600] text-[16px] mb-1 text-[#222] text-center">
              Check Existing Corporate Membership
            </span>
            <span className="text-[13px] text-[#6F6D66] text-center">
              I want to check if my company already has a membership with Evolve
            </span>
          </button>
          </Link>
          {/* Option 2 */}
          <Link to="/apply-membership-form">
          <button
            className="flex-1 bg-white border border-[#D4D4D4] rounded-[8px] p-6 flex flex-col items-center cursor-pointer hover:border-[#4AB04A] transition-all md:min-w-[220px] md:h-[208px] md:max-w-[260px] shadow-sm"
            onClick={() => onSelectOption("apply")}
          >
            <span className="mb-3">
              <Building2 size={36} className="text-[#4AB04A]" />
            </span>
            <span className="font-[600] text-[16px] mb-1 text-[#222] text-center">
              Apply for a New Corporate Membership
            </span>
            <span className="text-[13px] text-[#6F6D66] text-center">
              I want to apply for a new membership for my company
            </span>
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CorporateMembershipWizard;
