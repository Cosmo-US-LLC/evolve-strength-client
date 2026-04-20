import React from "react";

function AdditionalServices({
  addons = [],
  selectedServices = [],
  onToggleService,
  isLoading = false,
  className = "",
}) {
  return (
    <div className={`py-2 ${className}`}>
      <span className="text-black font-semibold leading-6">
        Choose Additional Services
      </span>

      <div className="mt-2 space-y-3">
        {isLoading ? (
          <div className="rounded-[8px] border border-[#D4D4D4] bg-[#FCFCFC] px-3 py-4 text-sm text-[#605E5E]">
            Loading add-on services...
          </div>
        ) : addons.length === 0 ? (
          <div className="rounded-[8px] border border-[#D4D4D4] bg-[#FCFCFC] px-3 py-4 text-sm text-[#605E5E]">
            No additional services are currently available.
          </div>
        ) : (
          addons.map((addon) => {
            const isSelected = selectedServices.includes(addon.profitCenter);
            return (
              <button
                key={addon.profitCenter}
                type="button"
                onClick={() => onToggleService?.(addon.profitCenter)}
                className="flex w-full items-center gap-3 rounded-[8px] border border-[#D4D4D4] bg-[#FCFCFC] p-3 text-left"
              >
                <div className="flex-1">
                  <p className="text-lg font-bold text-black">{addon.name}</p>
                  <p className="text-sm text-black">{addon.priceLabel}</p>
                </div>
                <div className="rounded-2xl">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="23"
                      height="23"
                      rx="11.5"
                      stroke={isSelected ? "#4AB04A" : "black"}
                      fill={isSelected ? "#4AB04A" : "none"}
                    />
                    <path
                      d="M12 7.91699V16.0837"
                      stroke={isSelected ? "white" : "#101010"}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7.91406 12H16.0807"
                      stroke={isSelected ? "white" : "#101010"}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </button>
            );
          })
        )}
      </div>
    </div>
  );
}

export default AdditionalServices;
