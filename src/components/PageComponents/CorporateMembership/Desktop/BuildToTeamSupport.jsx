import React from "react";

function BuildToTeamSupport() {
  return (
    <div className="w-full py-16 bg-[#EEEEEE]">
      <div className="w-full max-w-[1280px] px-8 mx-auto flex flex-col items-center justify-center gap-10">
        <div className="flex flex-col justify-center items-center gap-3">
          <h2 className="text-[#000000] uppercase">
            Built to Support Your Team at Scale
          </h2>

          <h4 className="text-[#000] font-[400] leading-[26px] text-center max-w-[520px]">
            Evolve isn’t a small operation. We have the team and space to
            deliver real support to your employees across Canada.
          </h4>
        </div>
        <div className="w-full flex items-center justify-center gap-16 px-8">
          <div className="flex flex-col justify-center gap-2 border-r-2 border-[#C1C1C1] pr-8 h-[100px]">
            <h2 className="text-[#000] font-[700] leading-[39px]">195</h2>
            <h3 className="text-[#000] font-[400] leading-[26px]">
              Practitioners
            </h3>
          </div>
          <div className="flex flex-col justify-center border-r-2 border-[#C1C1C1] pr-8 h-[100px]">
            <h2 className="text-[#000] font-[700] leading-[39px]">205</h2>
            <h3 className="text-[#000] font-[400] leading-[26px]">Trainers</h3>
          </div>
          <div className="flex flex-col justify-center pr-8 h-[100px]">
            <h2 className="text-[#000] font-[700] leading-[39px]">08</h2>
            <h3 className="text-[#000] font-[400] leading-[26px]">
              Large Facilities <br /> Across Canada
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuildToTeamSupport;
