import React from "react";

function ContactUsMap() {
  return (
    <div className="w-full max-w-[1280px] pt-24 md:pt-32 pb-6 md:pb-12 mx-auto px-4 md:px-8">
      <div className="relative w-full flex flex-col items-center justify-center">
        {/* <div className="absolute inset-0 w-full h-full contact_us_map_bg" /> */}

        <div className="text-center flex flex-col gap-4  items-center justify-center z-20 relative">
          <h1 className="!text-[#1C1C1C] !leading-[42px] md:!leading-[56px]">
            CONTACT US TODAY
          </h1>
          <h4 className="text-[#000] max-w-[700px] mb-2 ">
            Interested in finding out more about personal training programs,
            cost, or anything else? <br /> Contact us through this form!
          </h4>
        </div>
      </div>
    </div>
  );
}

export default ContactUsMap;
