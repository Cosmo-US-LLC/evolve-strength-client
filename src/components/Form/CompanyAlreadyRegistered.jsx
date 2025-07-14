import React from "react";
import locationImg from "../../assets/images/form/spaces-form.webp";
import { ArrowLeft } from "lucide-react";

function CompanyAlreadyRegistered({ onBack, onReturnHome }) {
  return (
    <div className="flex gap-12 p-6 flex-row max-w-[1280px] mx-auto justify-center items-center min-h-screen">
      {/* Left Image */}
      <div className="w-full max-w-[40%] flex-shrink-0 flex">
        <div className="rounded-[8px] max-w-[500px] overflow-hidden bg-white">
          <img
            src={locationImg}
            alt="Evolve Strength Facility"
            className="object-cover w-full h-auto"
          />
        </div>
      </div>
      {/* Right Confirmation */}
      <div className="flex flex-col items-center w-full max-w-[60%]">
        <button
          className="flex items-center gap-2 text-[#222] text-[15px] mb-4 hover:underline"
          onClick={onBack}
        >
          <ArrowLeft size={20} /> Back
        </button>
        <div className="w-full max-w-[420px] bg-white rounded-[10px] border p-6 flex flex-col items-center">
          <h2 className="text-[18px] md:text-[20px] font-[700] text-center mb-2">
            YOUR COMPANY IS ALREADY REGISTERED WITH EVOLVE:
          </h2>
          <p className="text-[15px] font-[400] text-center mb-5 text-[#222]">
            You're all set. Your organization is already a member of Evolve.
          </p>
          <button className="btnPrimary w-full" onClick={onReturnHome}>
            RETURN TO HOMEPAGE
          </button>
        </div>
      </div>
    </div>
  );
}

export default CompanyAlreadyRegistered;
