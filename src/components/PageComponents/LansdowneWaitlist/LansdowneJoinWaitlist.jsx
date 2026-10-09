import React from "react";
import LansdowneWaitlistForm from "@/components/Form/LansdowneWaitlistForm";
import formBackground from "@/assets/images/Lansdowne/lansdowne-form-background.webp";

function LansdowneJoinWaitlist() {
  return (
    <section
      id="waitlist"
      className="relative py-16 md:py-24 px-5 md:px-8 bg-cover bg-center md:min-h-[870px] flex items-center"
      style={{ backgroundImage: `url('${formBackground}')` }}
    >
      <div className="absolute inset-0 bg-black/70" aria-hidden="true" />
      <div className="w-full max-w-[804px] mx-auto relative z-10">
        <div className="text-center mb-7 md:mb-12">
          <h2 className="text-[#FFFFFF] uppercase mb-[10px] md:mb-4 max-md:!leading-[58px] max-md:!font-[600]">
            Join the <span className="text-[#4AB04A]">Waitlist</span>
          </h2>
          <h4 className="text-[#E5E5E5] !font-[Kanit] !font-[300] !text-[16px] md:!text-[18px] !leading-[24px] text-white max-w-[640px] mx-auto">
            Be first to know when presale opens at Lansdowne.
          </h4>
        </div>

        <LansdowneWaitlistForm />
      </div>
    </section>
  );
}

export default LansdowneJoinWaitlist;
