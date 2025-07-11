import React from "react";
import useCounter from "../../../../hooks/useCounter";
import useSyncedCounter from "../../../../hooks/useSyncedCounter";

function BuildToTeamSupport() {
  // Use useCounter for scroll trigger only
  const { elementRef, hasStarted } = useCounter(1, 2000); // dummy count for trigger

  // Use useSyncedCounter for all counters, triggered by hasStarted
  const practitionersCount = useSyncedCounter(195, 3000, hasStarted);
  const trainersCount = useSyncedCounter(205, 3000, hasStarted);
  const facilitiesCount = useSyncedCounter(8, 3000, hasStarted);

  return (
    <div className="w-full py-16 bg-[#EEEEEE]" ref={elementRef}>
      <div className="w-full max-w-[1280px] px-8 mx-auto flex flex-col items-center justify-center gap-10">
        <div className="flex flex-col justify-center items-center gap-3">
          <h2 className="text-[#000000] uppercase">
            Built to Support Your Team at Scale
          </h2>

          <h4 className="text-[#000] font-[400] leading-[26px] text-center max-w-[520px]">
            Evolve isn't a small operation. We have the team and space to
            deliver real support to your employees across Canada.
          </h4>
        </div>
        <div className="w-full flex items-center justify-center gap-16 px-8">
          <div className="flex flex-col justify-start gap-2 border-r-2 border-[#C1C1C1] pr-8 h-[100px]">
            <h2 className="text-[#000] font-[700] leading-[39px]">
              {practitionersCount}
            </h2>
            <h3 className="text-[#000] !font-[400] leading-[26px]">
              Practitioners
            </h3>
          </div>
          <div className="flex flex-col justify-start gap-2 border-r-2 border-[#C1C1C1] pr-8 h-[100px]">
            <h2 className="text-[#000] font-[700] leading-[39px]">
              {trainersCount}
            </h2>
            <h3 className="text-[#000] !font-[400] leading-[26px]">Trainers</h3>
          </div>
          <div className="flex flex-col justify-start gap-2 pr-8 h-[100px]">
            <h2 className="text-[#000] font-[700] leading-[39px]">
              {facilitiesCount.toString().padStart(2, "0")}
            </h2>
            <h3 className="text-[#000] !font-[400] leading-[26px]">
              Large Facilities <br /> Across Canada
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuildToTeamSupport;
