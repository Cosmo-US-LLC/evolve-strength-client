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
    <div className="bg-[#fcfcfc] border border-[#d4d4d4] rounded-[14px] px-4 py-4 flex flex-col gap-4">
      {/* Header Section */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <span className="bg-[#4ab04a] rounded-[8px] px-2.5 py-1 w-fit">
            <p className="font-['Kanit'] font-medium text-white text-[10px] leading-[16px]">
              Founder Rate
            </p>
          </span>
          <p className="font-['Kanit'] font-bold text-[#0a0a0a] md:text-[18px] !text-[20px] leading-[normal]">
            Founder Membership
          </p>
        </div>
        <div className="flex items-end gap-1">
          <p className="font-['Kanit'] text-[#4ab04a] text-[24px] leading-[24px]">
            Due Today:
            <span className="font-bold"> $0.00</span>
          </p>
          {/* <p className="font-['Kanit'] font-normal text-[#4a5565] text-[14px] leading-[20px]">
            / bi-weekly
            </p> */}
        </div>
        <p className="font-['Kanit'] text-[#0A0A0A] text-sm">
          <span className="text-[#4A5565]">Refundable Deposit</span>
        </p>
        <div className="space-y-1 font-['Kanit']">
          <div className="flex justify-between items-center">
            <span className="text-[#4A5565] font-light text-xs">Fee</span>
            <span className="text-[#0A0A0A] text-sm">
              {formatCurrency(normalizedPlanFeeAmount)}
            </span>
          </div>
          {showUntaxedAddonRow && (
            <div className="flex justify-between items-center">
              <span className="text-[#4A5565] font-light text-xs">
                {addonLabel}
              </span>
              <span className="text-[#0A0A0A] text-sm">
                {formatCurrency(normalizedUntaxedAddonFeeAmount)}
              </span>
            </div>
          )}
          <div className="flex justify-between items-center">
            <span className="text-[#4A5565] font-light text-xs">GST</span>
            <span className="text-[#0A0A0A] text-sm">
              {formatCurrency(normalizedGstAmount)}
            </span>
          </div>
          <div className="flex justify-between items-center text-md font-[kanit] font-medium text-[#4AB04A]">
            <span>Total</span>
            <span>{formatCurrency(normalizedTotalAmount)}</span>
          </div>
          <span className="float-right text-xs text-[#4A5565]">
            (Billed Biweekly)
          </span>
        </div>
      </div>

      {/* Details Section */}
      <div className="flex flex-col gap-3 border-t border-[#d4d4d4] pt-4">
        {/* 2 Years Locked */}
        <div className="flex gap-2 items-start">
          <Calendar className="size-5 text-[#6A7282] flex-shrink-0 mt-0.5" />
          <div className="flex flex-col leading-[20px]">
            <p className="font-['Kanit'] font-medium text-[#0a0a0a] text-[14px]">
              Rate Locked
            </p>
            <p className="font-['Kanit'] font-light text-[#4a5565] text-[12px]">
              Rate locked for life while membership is active
            </p>
          </div>
        </div>

        {/* Location */}
        <div className="flex gap-2 items-start">
          <MapPin className="size-5 text-[#6A7282] flex-shrink-0 mt-0.5" />
          <div className="flex flex-col leading-[20px]">
            <p className="font-['Kanit'] font-medium text-[#0a0a0a] text-[14px]">
              Location
            </p>
            <p className="font-['Kanit'] font-light text-[#4a5565] text-[12px]">
              South Edmonton Common
            </p>
          </div>
        </div>

        <div className="text-[#000] text-[14px] font-['Vazirmatn'] italic font-normal border-t border-[#d4d4d4] pt-4">
          If you are under 18, you cannot join online, your membership must be
          completed in person.
        </div>

        <div className="text-[#000] font-bold text-[14px] font-['Vazirmatn'] italic">
          All presale offers are only available for new Evolve members. These
          offers are not available to current Evolve members.
        </div>

        {/* Members */}
        {/* <div className="flex gap-2 items-start">
          <Users className="size-5 text-[#4ab04a] flex-shrink-0 mt-0.5" />
          <div className="flex flex-col leading-[20px]">
            <p className="font-['Kanit'] font-medium text-[#0a0a0a] text-[14px]">
              Members
            </p>
            <p className="font-['Kanit'] font-light text-[#4a5565] text-[12px]">
              {totalMembers} {totalMembers === 1 ? "member" : "members"}
            </p>
          </div>
        </div> */}
      </div>

      {/* Divider */}
      {/* <div className="h-px bg-[#d4d4d4] w-full" /> */}

      {/* Members List */}
      {/* <div className="flex flex-col gap-3">
        <div className="flex flex-col leading-[20px]">
          <p className="font-['Kanit'] font-medium text-[#0a0a0a] text-[14px]">
            Primary Member
          </p>
          <p className="font-['Kanit'] font-light text-[#4a5565] text-[12px]">
            {primaryMemberName}
          </p>
        </div>
      </div> */}
    </div>
  );
}

export default MembershipSummaryCard;
