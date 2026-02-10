import { ArrowLeft } from "lucide-react";
import React from "react";
import BenefitsCard from "../BenefitsCard";

const getDisplayedPlanAmount = (planDetails) => {
  console.log(planDetails?.schedules?.[0], "planDetails?.schedules?.[0]");
  const rawAmount =
    planDetails?.schedules?.[0]?.schedulePreTaxAmount ??
    planDetails?.schedulePreTaxAmount ??
    planDetails?.scheduleTotalAmount;

  if (rawAmount === undefined || rawAmount === null) return "$--.--";

  const normalizedAmount =
    typeof rawAmount === "number"
      ? rawAmount.toFixed(2)
      : String(rawAmount).trim();

  if (!normalizedAmount) return "$--.--";

  const amountWithoutCurrencyPrefix = normalizedAmount.replace(/^CA\s*/i, "");
  return amountWithoutCurrencyPrefix.startsWith("$")
    ? amountWithoutCurrencyPrefix
    : `$${amountWithoutCurrencyPrefix}`;
};

function PlanType({
  onNext,
  onBack,
  currentPlan,
  onPlanChange,
  selectedPlanDetails,
  isPlansLoading,
  plansError,
  planAddons,
  selectedServices = [],
  onToggleService,
  paymentAmount,
}) {
  console.log(paymentAmount)
  const displayAmount = isPlansLoading
    ? "$--.--"
    : paymentAmount
      ? `$${Number.parseFloat(paymentAmount).toFixed(2)}`
      : getDisplayedPlanAmount(selectedPlanDetails);

  return (
    <div className="w-full max-w-[640px] mx-auto">
      <div className="flex flex-col gap-1 mb-6">
        <h2 className="!font-[Kanit] !font-[500] text-[#000] !text-[20px] capitalize !leading-[28px]">
          Choose your pricing plan
        </h2>
      </div>

      <div className="flex lg:items-center justify-between max-lg:gap-4 mb-4 lg:mb-8 lg:bg-[#FCFCFC] lg:border lg:rounded-lg lg:border-gray-300 lg:p-4">
        {/* Pricing Toggle */}
        <div className="grid grid-cols-2 w-full max-w-[340px] bg-white-100 border border-gray-300 rounded-lg p-2">
          <button
            type="button"
            onClick={() => onPlanChange(0)}
            className={`py-3 md:px-6 max-md:px-2 max-md:text-[10px] text-xs rounded-md font-medium cursor-pointer transition-colors tracking-tight ${
              currentPlan === 0 ? "bg-[#4AB04A] text-white" : "text-black"
            }`}
          >
            1 YEAR CONTRACT
          </button>
          <button
            type="button"
            onClick={() => onPlanChange(1)}
            className={`py-3 max-md:px-2 max-md:text-[10px] text-xs md:px-6 rounded-md font-medium cursor-pointer transition-colors tracking-tight ${
              currentPlan === 1 ? "bg-[#4AB04A] text-white" : "text-black"
            }`}
          >
            MONTH TO MONTH
          </button>
        </div>

        {/* Pricing Display */}
        <div className="text-right">
          <div className="text-black text-base font-[kanit] font-semibold whitespace-nowrap">
            BI-WEEKLY
          </div>
          <div className="flex items-end space-x-1 justify-end whitespace-nowrap">
            <div className="text-[#4AB04A] text-2xl lg:text-4xl font-bold whitespace-nowrap">
              {displayAmount}
            </div>
            <div className="text-[#4AB04A] text-xs max-md:pb-1 md:text-sm">
              +<span className="max-md:hidden"> </span>GST
              {/* (Tax included) */}
            </div>
          </div>
          <div className="text-[#000] md:text-right text-left md:text-[12px] text-[10px] pt-1 font-[kanit] font-normal">
          Billing starts at opening
          </div>
        </div>
      </div>
      {planAddons?.length > 0 && (
        <div className="mb-3">
          <div className="flex justify-between items-center mb-2 lg:mb-4">
            <h3 className="font-[kanit] text-[20px] font-[500] text-black">
              Choose Additional Services
            </h3>
            <button className="hidden text-black text-sm items-center space-x-1">
              <span>See More</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>

          <div className="grid md:grid-cols-2 max-md:grid-cols-1 gap-2">
            {planAddons.map((service, index) => (
              <div
                key={index}
                onClick={() => onToggleService?.(service?.profitCenter)}
                className="border border-[#E8E8E8] bg-[#FBFBFB] rounded-lg p-3 lg:p-4 cursor-pointer hover:border-[#4AB04A] transition-colors"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-[kanit] font-[500] text-black">
                      {service?.profitCenter}
                    </p>
                    <p className="text-black text-sm">
                      {/* Recurring {service?.scheduleAmount} Bi-Weekly */}
                      Recurring {service?.schedulePreTaxAmount} Bi-Weekly
                    </p>
                  </div>
                  <div className=" flex items-center justify-center">
                    {selectedServices.includes(service?.profitCenter) ? (
                      <div className="w-[24px] h-[24px] bg-[#4AB04A] flex items-center justify-center rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="15"
                          viewBox="0 0 14 15"
                          fill="none"
                        >
                          <path
                            d="M11.6666 4L5.24992 10.4167L2.33325 7.5"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    ) : (
                      <div className="w-[24px] h-[24px] border border-[#000] flex items-center justify-center rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="15"
                          viewBox="0 0 14 15"
                          fill="none"
                        >
                          <path
                            d="M7 3.41699V11.5837"
                            stroke="#101010"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M2.91675 7.5H11.0834"
                            stroke="#101010"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {plansError && (
        <p className="mb-4 text-[13px] text-red-600">{plansError}</p>
      )}

      <div className="md:hidden">
        <BenefitsCard />
        <br />
      </div>

      <div className="md:mt-[220px]">
        <div className="flex items-center justify-between gap-4 mt-0 md:mt-8">
          <button
            type="button"
            onClick={onBack}
            className="flex gap-1.5 underline items-center hover:cursor-pointer font-['Kanit'] font-light text-black text-[16px] uppercase"
          >
            <ArrowLeft className="size-4" />
            Back
          </button>
          <button
            type="button"
            disabled={displayAmount === "$--.--"}
            onClick={onNext}
            className="btnPrimary disabled:cursor-wait max-md:w-[100%]"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default PlanType;
