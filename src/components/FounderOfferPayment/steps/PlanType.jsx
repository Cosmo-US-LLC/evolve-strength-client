import { ArrowLeft } from "lucide-react";
import React from "react";

const getDisplayedPlanAmount = (planDetails) => {
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
}) {
  const displayAmount = isPlansLoading
    ? "$--.--"
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
          <div className="flex items-end space-x-1 justify-end">
            <div className="text-[#4AB04A] text-2xl lg:text-4xl font-bold whitespace-nowrap">
              {displayAmount}
            </div>
            <div className="text-[#4AB04A] max-md:hidden text-sm">
              + GST
              {/* (Tax included) */}
            </div>
          </div>
        </div>
      </div>
      {plansError && (
        <p className="mb-4 text-[13px] text-red-600">{plansError}</p>
      )}

      <div className="mt-[320px]">
        <div className="flex items-center justify-between gap-4 mt-0 md:mt-8">
          <button
            type="button"
            onClick={onBack}
            className="flex gap-1.5 underline items-center hover:cursor-pointer font-['Kanit'] font-light text-black text-[16px] uppercase"
          >
            <ArrowLeft className="size-4" />
            Back
          </button>
          <button type="button" disabled={displayAmount === "$--.--"} onClick={onNext} className="btnPrimary disabled:cursor-wait max-md:w-[100%]">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default PlanType;
