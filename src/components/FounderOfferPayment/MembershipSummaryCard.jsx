import React from "react";
import { Calendar, MapPin } from "lucide-react";

const formatCurrency = (value) => {
  const amount = Number.isFinite(value) ? value : Number.parseFloat(value) || 0;
  return `$${amount.toFixed(2)}`;
};

function MembershipSummaryCard({
  paymentAmount,
  feeAmount = 0,
  planFeeAmount,
  addonLabel = "",
  untaxedAddonFeeAmount = 0,
  gstAmount = 0,
  totalAmount = 0,
}) {
  const fallbackTotal =
    typeof paymentAmount === "number"
      ? paymentAmount
      : Number.parseFloat(
          (paymentAmount || "").toString().replace(/[^0-9.-]/g, ""),
        ) || 0;
  const normalizedFeeAmount = Number.isFinite(feeAmount) ? feeAmount : 0;
  const normalizedPlanFeeAmount = Number.isFinite(planFeeAmount)
    ? planFeeAmount
    : normalizedFeeAmount;
  const normalizedUntaxedAddonFeeAmount = Number.isFinite(untaxedAddonFeeAmount)
    ? untaxedAddonFeeAmount
    : 0;
  const showUntaxedAddonRow =
    normalizedUntaxedAddonFeeAmount > 0 && addonLabel.trim().length > 0;
  const normalizedGstAmount = Number.isFinite(gstAmount) ? gstAmount : 0;
  const normalizedTotalAmount =
    Number.isFinite(totalAmount) && totalAmount > 0
      ? totalAmount
      : fallbackTotal;

  return (
    <div className="flex flex-col gap-6 rounded-[24px] border border-[#D4D4D4] bg-[#FCFCFC] px-6 py-4 md:px-8 md:py-7">
      <div className="flex flex-col gap-4">
        <span className="w-fit rounded-[14px] bg-[#67B357] px-4 py-2 font-['Kanit'] text-[10px] font-semibold leading-none text-white">
          Founder Rate
        </span>

        <div className="flex flex-col gap-3">
          <h3 className="font-['Kanit'] text-lg font-bold leading-[1.1] text-[#0A0A0A] md:text-xl">
            Founder Membership
          </h3>
          <p className="font-['Kanit'] text-xl leading-none text-[#67B357] md:text-[28px]">
            Due today: <span className="font-bold">$0.00</span>
          </p>
        </div>
      </div>

      <div className="rounded-[18px] border border-[#E9E9E9] bg-[#FAFAFA] px-5 py-5">
        <div className="space-y-4 font-['Kanit']">
          <div className="flex items-center justify-between gap-4">
            <span className="text-[18px] font-medium text-[#0A0A0A]">Fee</span>
            <span className="text-[18px] font-light text-[#0A0A0A]">
              {formatCurrency(normalizedPlanFeeAmount)}
            </span>
          </div>
          {showUntaxedAddonRow && (
            <div className="flex items-center justify-between gap-4">
              <span className="text-[18px] font-medium text-[#0A0A0A]">
                {addonLabel}
              </span>
              <span className="text-[18px] font-light text-[#0A0A0A]">
                {formatCurrency(normalizedUntaxedAddonFeeAmount)}
              </span>
            </div>
          )}
          <div className="flex items-center justify-between gap-4">
            <span className="text-[18px] font-medium text-[#0A0A0A]">GST</span>
            <span className="text-[18px] font-light text-[#0A0A0A]">
              {formatCurrency(normalizedGstAmount)}
            </span>
          </div>
          <div className="border-t border-[#D9D9D9] pt-5">
            <div className="flex items-center justify-between gap-4 font-['Kanit']">
              <span className="text-base font-semibold text-[#67B357]">
                Total
              </span>
              <span className="text-base font-semibold text-[#67B357]">
                {formatCurrency(normalizedTotalAmount)}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <div className="flex items-start gap-3">
          <Calendar className="mt-0.5 size-6 flex-shrink-0 text-[#7D8593]" />
          <div className="flex flex-col">
            <p className="font-['Kanit'] text-[18px] font-semibold leading-[1.1] text-[#0A0A0A]">
              Rate Lock
            </p>
            <p className="mt-1 font-['Kanit'] text-[16px] font-light leading-[1.25] text-[#6A7282]">
              Rate locked for life
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <MapPin className="mt-0.5 size-6 flex-shrink-0 text-[#7D8593]" />
          <div className="flex flex-col">
            <p className="font-['Kanit'] text-[18px] font-semibold leading-[1.1] text-[#0A0A0A]">
              Location
            </p>
            <p className="mt-1 font-['Kanit'] text-[16px] font-light leading-[1.25] text-[#6A7282]">
              South Edmonton Common
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MembershipSummaryCard;
