import { format } from "date-fns";
import React from "react";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const date = localStorage.getItem("date") || new Date();
  const type = localStorage.getItem("plan") || "";
  const amount = localStorage.getItem("amount") || "";

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="max-w-md mx-auto px-4 grow flex flex-col justify-center items-center">
        <div className="bg-[#fcfcfc] border border-[#D4D4D4] rounded-lg px-4 py-8">
          <h1 className="text-2xl lg:text-3xl font-[kanit] font-bold text-black text-center mb-4">
            CONGRATULATIONS
          </h1>

          <p className="text-black text-sm font-light text-center mb-8">
            You've successfully activated your{" "}
            <span className="font-bold">
              {type == 0 ? "Month to Month" : "1 Year Contract"}
            </span>{" "}
            membership.
          </p>

          <div className="space-y-3 mb-5 border border-[#80808050] bg-[#F9F9F9] rounded-[8px] p-5">
            <div className="flex justify-between items-center py-2 border-b border-gray-200">
              <span className="text-black font-medium">Start Date</span>
              <span className="text-black">
                {format(new Date(date), "MMMM d, yyyy")}
              </span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-200">
              <span className="text-black font-medium">Subscription</span>
              <span className="text-black">
                {type == 0 ? "Month to Month" : "1 Year Contract"}
              </span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-black font-medium">Amount Paid</span>
              <span className="text-black">{amount}</span>
            </div>
          </div>

          <a href={"https://www.evolvestrength.ca/"}>
            <button className="w-full bg-brand-green cursor-pointer text-white font-bold py-4 px-6 rounded-[5px] hover:bg-brand-green/90 transition-colors">
              BACK HOME
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Success;
