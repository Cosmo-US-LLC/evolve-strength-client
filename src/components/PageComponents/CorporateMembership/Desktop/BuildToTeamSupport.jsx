import React from "react";
import useCounter from "../../../../hooks/useCounter";
import useSyncedCounter from "../../../../hooks/useSyncedCounter";

function BuildToTeamSupport() {
  const { elementRef, hasStarted } = useCounter(1, 2000);

  const practitionersCount = useSyncedCounter(195, 3000, hasStarted);
  const trainersCount = useSyncedCounter(205, 3000, hasStarted);
  const facilitiesCount = useSyncedCounter(8, 3000, hasStarted);

  return (
    <div className="w-full py-16 bg-[#EEEEEE]" ref={elementRef}>
      <div className="w-full max-w-[1280px] px-4 md:px-8 mx-auto flex flex-col items-center justify-center gap-4 md:gap-10">
        <div className="flex flex-col justify-center items-center gap-3">
          <h2 className="text-[#000000] uppercase text-center">
            Built to Support Your Team at Scale
          </h2>

          <h4 className="text-[#000] font-[400] leading-[24px] md:leading-[26px] text-center max-w-[520px]">
            Evolve isn't a small operation. We have the team and space to
            deliver real support to your employees across Canada.
          </h4>
        </div>
        <div className="w-full flex flex-col md:flex-row items-center justify-center gap-4 md:gap-16 px-4 md:px-8">
          <div className="flex flex-col justify-center md:justify-start items-center md:items-start gap-0 md:gap-2 md:border-b-0 max-md:border-b-2 md:border-r-2 max-md:border-r-0 border-[#C1C1C1] pr-0 md:pr-8 h-[100px] w-full max-md:w-[100%] md:w-auto">
            <h2 className="text-[#000] font-[700] leading-[39px]">
              {practitionersCount}
            </h2>
            <h3 className="text-[#000] !font-[400] leading-[26px]">
              Practitioners
            </h3>
          </div>
          <div className="flex flex-col justify-center md:justify-start items-center md:items-start gap-0 md:gap-2 md:border-b-0 max-md:border-b-2 md:border-r-2 max-md:border-r-0 border-[#C1C1C1] pr-0 md:pr-8 h-[100px] w-full max-md:w-[100%] md:w-auto">
            <h2 className="text-[#000] font-[700] leading-[39px]">
              {trainersCount}
            </h2>
            <h3 className="text-[#000] !font-[400] leading-[26px]">Trainers</h3>
          </div>
          <div className="flex flex-col justify-center md:justify-start  items-center md:items-start gap-0 md:gap-2 md:border-b-0 max-md:border-b-2 md:border-r-2 max-md:border-r-0 border-[#C1C1C1] pr-0 md:pr-8 h-[100px] w-full max-md:w-[100%] md:w-auto">
            <h2 className="text-[#000] font-[700] leading-[39px]">
              {facilitiesCount.toString().padStart(2, "0")}
            </h2>
            <h3 className="text-[#000] !font-[400] leading-[26px] pb-4 md:pb-0">
              Large Facilities <br /> Across Canada
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuildToTeamSupport;
