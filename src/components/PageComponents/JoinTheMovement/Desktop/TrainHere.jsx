import React from "react";

function TrainHere() {

  return (
    <div className="w-full aboutUsReadyToEvolve max-md:!h-[478px] max-md:!bg-cover max-md:!bg-center relative overflow-hidden">
         <div className="absolute inset-0 bg-black/20 opacity-50 z-0"></div>
      <div className="w-full max-w-[1280px] mx-auto flex h-full md:pb-[80px] max-md:pb-[34px] items-end md:px-8 max-md:px-[16px]">
        <div className="space-y-[24px] relative z-[9]">
            <h2 className="!text-[#fff] leading-[45px] uppercase">Train here. Film here. <br /> Get featured.</h2>
            <button className="btnPrimary">Submit your content now</button>
        </div>
      </div>
    </div>
  );
}

export default TrainHere;
