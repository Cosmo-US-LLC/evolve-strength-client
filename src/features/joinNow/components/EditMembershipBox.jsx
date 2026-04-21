import React from "react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { cn } from "@/features/joinNow/lib/utils";

function EditMembershipBox({ className = "" }) {
  const navigate = useNavigate();
  const params = new URLSearchParams(window.location.search);
  const location = params.get("location") || "";
  const currentPlan = params.get("plan") || "";
  const services = params.get("services") || "";

  const handleBack = () => {
    window.location.href = `/join-now/?location=${location}&plan=${currentPlan}${
      services ? `&services=${services}` : ""
    }`;
    // navigate(
    //   `/?location=${location}&plan=${currentPlan}${
    //     services ? `&services=${services}` : ""
    //   }`
    // );
  };

  return (
    <div
      className={cn(
        className,
        "flex items-start justify-between mt-[5px] bg-[#EAEAEA] rounded-[8px] px-4 py-[10px] mb-4"
      )}
    >
      <div>
        <p className="text-sm font-light text-[#393939]">Your Membership at</p>
        <h2 className="uppercase text-xl font-[kanit] font-[700] text-black line-clamp-1">
          {location}
        </h2>
      </div>
      <div>
        <Button
          variant="link"
          onClick={() => handleBack()}
          className="flex items-center text-brand-green text-xs gap-1 px-0 cursor-pointer"
        >
          Edit
          <div className="w-4 h-4">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.9974 4.00045L11.9974 6.00045M8.66406 13.3338H13.9974M3.33073 10.6671L2.66406 13.3338L5.33073 12.6671L13.0547 4.94312C13.3047 4.69308 13.4451 4.354 13.4451 4.00045C13.4451 3.6469 13.3047 3.30782 13.0547 3.05778L12.9401 2.94312C12.69 2.69315 12.3509 2.55273 11.9974 2.55273C11.6438 2.55273 11.3048 2.69315 11.0547 2.94312L3.33073 10.6671Z"
                stroke="#4AB04A"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </Button>
      </div>
    </div>
  );
}

export default EditMembershipBox;
