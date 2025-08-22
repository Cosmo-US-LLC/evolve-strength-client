import React from "react";
import { Link } from "react-router-dom";

function NoOfficeAvailable() {
  return (
    <div className="flex flex-col items-center justify-center h-[400px] bg-[#F5F5F5] rounded-[10px]">
      <div className="text-center px-6">
        <p className="text-[#393939] text-[16px] font-[kanit] leading-[39px] font-[400] ">
          There are no offices available at the moment in this branch.
        </p>
        <h3 className="text-[#000] mb-4">
          But you can join the waitlist for an office space
        </h3>
        <Link to="/join-the-wait-list">
          <button className="btnPrimary">JOIN THE WAITLIST</button>
        </Link>
      </div>
    </div>
  );
}

export default NoOfficeAvailable;
