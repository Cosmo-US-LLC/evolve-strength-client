import React from "react";

function JoinUsToday() {
  return (
    <div className=" JoinToday">
      <div className="max-w-[1280px] mx-auto w-full h-full px-8 pb-[130px] space-y-[18px] flex flex-col items-start justify-end">
        <h2 className="!text-[#FFF] uppercase !leading-[50px] !text-[50px] font-[600] ">
          Join Evolve <br /> Strength Today
        </h2>
        <h4 className="h4 !font-vazirmatn !font-[400] text-[#fff] !leading-[25px]">
          Book a free tour and explore what Evolve has to offer. <br />
          Experience the space. Meet our team. See the difference.
        </h4>
        <div className="flex justify-start items-start ">
          <button className="btnPrimary">BOOK A FREE TOUR</button>
        </div>
      </div>
    </div>
  );
}

export default JoinUsToday;
