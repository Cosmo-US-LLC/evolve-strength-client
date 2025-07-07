
import React from "react";

function TourOurFitness() {

  return (
    <div className="w-full">
      <div className="w-full max-w-[1440px] flex justify-start items-end min-h-[680px] TourOurFitness px-[180px] mx-auto pb-[100px] ">
        <div className="max-w-[593px] w-[100%] space-y-[18px]">
          <h2 className="!text-[#FFF] uppercase leading-[45px] font-[700]">
            Tour Our Fitness Facility
          </h2>
          <h4 className="h4 !font-vazirmatn !font-[400] text-[#fff] !leading-[25px]">
            Come see the space for yourself. Our training floors are one of the
            largest in Canada, built to support serious trainers like you.
          </h4>
            <div className="flex justify-start items-start ">
          <button className="btnPrimary">START TODAY</button>
        </div>
        </div>
      </div>
    </div>
  );
}

export default TourOurFitness;
