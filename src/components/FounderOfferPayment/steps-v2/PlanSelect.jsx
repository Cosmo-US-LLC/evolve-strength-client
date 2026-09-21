import React from "react";

function PlanSelect({
  plans = [],
  currentPlan = 0,
  onPlanChange,
  isLoading = false,
  error = "",
  className = "",
  displayPrice,
  hasAddons = false,
}) {
  const activePlan = plans.find((plan) => plan.value === currentPlan) || plans[0];
  // When add-ons (e.g. Towel) are selected, `displayPrice` is the live
  // plan + add-ons pre-tax total (computed from the same API data as the
  // payment step), so the price shown here actually moves instead of
  // staying pinned to the base plan price. Tax/GST is intentionally left
  // out here — it's only shown at the final payment step.
  const priceToShow = displayPrice || activePlan?.price;

  return (
    <div
      className={`rounded-[8px] border border-[#D4D4D4] bg-[#FCFCFC] p-4 pt-2 space-y-4 ${className}`}
    >
      <div className="grid grid-cols-2 gap-x-1.5 rounded-full bg-[#F0F0F2] p-1">
        {plans.map((plan) => {
          const isActive = plan.value === currentPlan;
          return (
            <button
              key={plan.value}
              type="button"
              onClick={() => onPlanChange?.(plan.value)}
              className={`cursor-pointer rounded-full p-2 text-center text-xs transition-colors ${
                isActive
                  ? "bg-black font-bold text-white"
                  : "text-black hover:bg-white/70"
              }`}
            >
              {plan.label}
            </button>
          );
        })}
      </div>

      {isLoading ? (
        <div className="flex min-h-[120px] items-center justify-center text-sm text-[#605E5E]">
          Loading plans...
        </div>
      ) : error ? (
        <div className="rounded-[8px] border border-red-200 bg-red-50 px-3 py-4 text-sm text-red-700">
          {error}
        </div>
      ) : activePlan ? (
        <div className="flex w-full flex-col items-center">
          <span className="font-medium text-black">{activePlan.label}</span>
          <div className="flex items-baseline">
            <span className="text-2xl font-bold text-[#4AB04A]">
              {priceToShow}
            </span>
            &nbsp;
            <span className="text-xs text-[#605E5E]">
              {activePlan.taxLabel}
              {hasAddons && " + add-ons"}
            </span>
          </div>
          <span className="text-sm text-[#393939]">{activePlan.billingLabel}</span>
        </div>
      ) : null}
    </div>
  );
}

export default PlanSelect;
