import React from "react";
import { Link, useNavigate } from "react-router-dom";
import locationImg from "../../assets/images/form/spaces-form.webp";
import { Building2, ArrowLeft } from "lucide-react";
import MetaTags from "@/components/Metatags/Meta";
import { Helmet, HelmetProvider } from "react-helmet-async";
import FormsHeader from "../ui/FormsHeader";

function CorporateMembershipWizard({ onSelectOption }) {
  const navigate = useNavigate();

  // Safe back: go -1 if history exists, otherwise fallback to "/"
  const handleBack = () => {
    const idx = window.history.state?.idx ?? 0;
    if (idx > 0) {
      navigate(-1);
    } else {
      navigate("/"); // change this fallback if you prefer
    }
  };

  return (
    <>
      <MetaTags
        title="Corporate Gym Membership | Check or Apply at Evolve Strength"
        description="Check if your company is already enrolled or apply for a new corporate gym membership with Evolve Strength. Easy setup for teams of any size."
      />

      {/* Form Header */}
      <FormsHeader />

      <div className="w-full pt-24 pb-12 flex md:gap-12 md:flex-row px-4 md:px-8 flex-col md:max-w-[1280px] mx-auto justify-center items-center">
        {/* Left Image */}

        <div className="rounded-[8px] md:w-[50%] justify-center flex overflow-hidden bg-white max-md:hidden">
          <img
            src={locationImg}
            alt="Evolve Strength Facility"
            className="object-cover w-full h-[620ox]"
          />
        </div>

        {/* Right Options */}
        <div className="flex flex-col items-center md:w-[50%]">
          {/* Back button */}
          <button
            type="button"
            onClick={handleBack}
            className="self-start mb-4  flex items-center gap-2 text-black hover:text-gray-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black rounded-full"
            aria-label="Go back"
          >
            <div className="w-8 h-8 rounded-full border border-black flex  items-center justify-center">
              <ArrowLeft className="w-4 h-4" />
            </div>
            <span className="font-medium">Back</span>
          </button>

          <h2 className="!text-[20px] md:text-[28px] md:font-[700] !font-[500] text-center mb-2">
            LET'S GET YOU STARTED
          </h2>
          <p className="text-[16px] md:text-[18px] font-[400] text-center mb-6 md:max-w-[420px]">
            Whether you're signing up for yourself or on behalf of a company,
            choose the option that best fits your journey.
          </p>
          <div className="flex flex-col md:flex-row gap-6 w-full justify-end">
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
                  I want to check if my company already has a membership with
                  Evolve
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
    </>
  );
}

export default CorporateMembershipWizard;
