import React from "react";
import EdmontonSouthCommonForm from "@/components/Form/EdmontonSouthCommonForm";

function ParkRoyalJoinWaitlist() {
  return (
    <section
      id="waitlist"
      className="relative py-16 md:py-24 px-4 md:px-8 bg-cover bg-center "
      style={{
        backgroundImage:
          "url('https://assets.evolvestrength.ca/media/1784034777603-f33e27dd-7938-4c90-be0f-42ea8ddae6f1.webp')",
      }}
    >
      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-[#FFFFFF] uppercase mb-3">
            To Join the <span className="text-[#4AB04A]">Waitlist</span>
          </h2>
          <h4 className="text-[#E5E5E5] !font-[Kanit] !font-[400]">
            Be first to know when presale opens at Park Royal.
          </h4>
        </div>

        <EdmontonSouthCommonForm location="Park Royal" />
      </div>
    </section>
  );
}

export default ParkRoyalJoinWaitlist;
