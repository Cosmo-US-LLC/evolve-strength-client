import React from "react";
import locationImg from "../../assets/images/form/spaces-form.webp";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function ApplicationSubmitted({ onBack, onReturnHome }) {
    const navigate = useNavigate();
  return (
    <div className="flex gap-12 md:p-6 p-4 flex-row max-w-[1280px] mx-auto justify-center items-center min-h-screen">
      {/* Left Image */}
      <div className="w-full max-w-[40%] flex-shrink-0 flex max-md:hidden">
        <div className="rounded-[8px] max-w-[500px] overflow-hidden bg-white">
          <img
            src={locationImg}
            alt="Evolve Strength Facility"
            className="object-cover w-full h-auto"
          />
        </div>
      </div>
      {/* Right Confirmation */}
      <div className="flex flex-col items-center  h-[650px] w-full md:max-w-[60%]">
       <button
                 className="flex !self-start gap-2 text-[#222] text-[15px] mb-4 hover:underline"
                  onClick={() => navigate(-1)}
               >
                 <ArrowLeft size={20} /> Back
               </button>
        <div className="w-full md:max-w-[420px] !self-start md:pl-30 mt-50 bg-white rounded-[10px] p-6 flex flex-col items-center">
          <div className="md:w-[537px] w-[358px] ">
          <h3 className="text-[20px] md:text-[22px] font-[700] text-center mb-2">
            APPLICATION SUBMITTED
          </h3>
          </div>
          <div className="md:w-[537px] w-[358px] ">
          <p className="text-[15px] font-[400] text-center mb-5 text-[#222]">
            Your application has been submitted. Someone from our team will
            contact you soon.
          </p>
          </div>
          <Link to = "/">
          <button className="btnPrimary  md:w-[537px] w-[358px] " onClick={onReturnHome}>
            RETURN TO HOMEPAGE
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ApplicationSubmitted;
