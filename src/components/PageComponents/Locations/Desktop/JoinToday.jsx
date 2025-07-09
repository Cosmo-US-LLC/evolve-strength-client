import React from "react";

function JoinUsToday() {

  return (
  <div className="JoinToday">
      <div className="w-full max-w-[1440px] flex justify-start items-end min-h-[680px]  px-[180px] mx-auto pb-[100px] ">
        <div className="max-w-[593px] w-[100%] space-y-[18px]">
          <h2 className="!text-[#FFF] uppercase leading-[45px] font-[700]">
            Join Evolve <br /> Strength Today
          </h2>
          <h4 className="h4 !font-vazirmatn !font-[400] text-[#fff] !leading-[25px]">
            Book a free tour and explore what Evolve has to offer.
            Experience the space. Meet our team. See the difference.
          </h4>
            <div className="flex justify-start items-start ">
          <button className="btnPrimary">BOOK A FREE TOUR</button>
        </div>
        </div>
      </div>
    </div>
  );
}

export default JoinUsToday;
