import React from "react";

function PerfectTrainer() {
  return (
    <div className="w-full py-12">
      <div className="w-full max-w-[1280px] px-4 md:px-8 mx-auto flex flex-col gap-4 items-center justify-center">
        <div className="w-full flex flex-col items-center justify-center">
          <h2 className="text-[#000] uppercase !font-[700] leading-[26px] ">
            Not a Member Yet?
          </h2>
        </div>

        <div className=" max-w-[696px] text-[#000] description text-center !font-[kanit] !font-[300] !md:font-[400] leading-[24px] md:leading-[26px]">
          Don’t worry if you are new here. Personal training at Evolve is
          available only to members, and it comes with an additional fee.
          Getting started is simple.
        </div>
      </div>
    </div>
  );
}

export default PerfectTrainer;
