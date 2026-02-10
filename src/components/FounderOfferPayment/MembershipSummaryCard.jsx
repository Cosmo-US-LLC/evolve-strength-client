import React from "react";
import { Calendar, MapPin, Users } from "lucide-react";

function MembershipSummaryCard({ primaryMember, paymentAmount }) {
  // Calculate 2 years from now for the guarantee date
  const getGuaranteeDate = () => {
    const date = new Date();
    date.setFullYear(date.getFullYear() + 2);
    return date.toLocaleDateString("en-US", { month: "long", year: "numeric" });
  };

  // const totalMembers = 1;
  // const primaryMemberName =
  //   primaryMember?.firstName && primaryMember?.lastName
  //     ? `${primaryMember.firstName} ${primaryMember.lastName}`
  //     : "Not provided";
  const normalizedAmount =
    typeof paymentAmount === "number"
      ? paymentAmount.toFixed(2)
      : (paymentAmount || "").toString().trim();
  const displayAmount = normalizedAmount
    ? /CA/i.test(normalizedAmount)
      ? normalizedAmount
      : normalizedAmount.startsWith("$")
        ? `CA ${normalizedAmount}`
        : `CA $${normalizedAmount}`
    : "CA $149";

  return (
    <div className="bg-[#fcfcfc] border border-[#d4d4d4] rounded-[14px] px-4 py-4 flex flex-col gap-6">
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
          {displayAmount} &nbsp;<span className="text-xs text-[#4A5565]">(Billed Biweekly)</span>
          <br />
          <span className="text-[#4A5565]">
          Refundable Deposit
          </span>
        </p>
      </div>

      {/* Details Section */}
      <div className="flex flex-col gap-3">
        {/* 2 Years Locked */}
        <div className="flex gap-2 items-start">
          <Calendar className="size-5 text-[#6A7282] flex-shrink-0 mt-0.5" />
          <div className="flex flex-col leading-[20px]">
            <p className="font-['Kanit'] font-medium text-[#0a0a0a] text-[14px]">
              Rate Locked
            </p>
            <p className="font-['Kanit'] font-light text-[#4a5565] text-[12px]">
              Rate Locked for life
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
          If you are under 18, you cannot join online, your membership must be completed in person.
        </div>

        <div className="text-[#000] text-[14px] font-['Vazirmatn'] italic font-normal"> 
        All presale offers are only available for new Evolve members. These offers are not available to current Evolve members.
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
