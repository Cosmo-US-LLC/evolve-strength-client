import React from "react";


function ContactHero() {
  return (
    <>
       <div className=" relative ContactHeroBG ">
      {/* <div className="absolute top-0 left-0 z-1 w-full h-full bg-black/40" /> */}
      <div className="max-w-[1280px] px-8 md:pb-[140px]  pb-6 mx-auto w-full h-full">
        <div className="relative z-2 flex  flex-col items-start justify-end h-full">
          <h1 className="text-[#FFFFFF] uppercase  md:h-auto md:max-w-[707px] md:leading-[56px] md:mb-5">
            Contact us
          </h1>
      
        </div>
      </div>
    </div>
    </>
  );
}

export default ContactHero;
