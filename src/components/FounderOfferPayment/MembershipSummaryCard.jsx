import React from "react";
import { Calendar, MapPin, Users } from "lucide-react";

function MembershipSummaryCard({ primaryMember, familyMembers }) {
  // Calculate 2 years from now for the guarantee date
  const getGuaranteeDate = () => {
    const date = new Date();
    date.setFullYear(date.getFullYear() + 2);
    return date.toLocaleDateString("en-US", { month: "long", year: "numeric" });
  };

  const totalMembers = 1 + (familyMembers?.length || 0);
  const primaryMemberName =
    primaryMember?.firstName && primaryMember?.lastName
      ? `${primaryMember.firstName} ${primaryMember.lastName}`
      : "Not provided";

  return (
    <div className="bg-[#fcfcfc] border border-[#d4d4d4] rounded-[14px] px-6 py-4 flex flex-col gap-6">
      {/* Header Section */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <span className="bg-[#4ab04a] rounded-[8px] px-2.5 py-1 w-fit">
            <p className="font-['Kanit'] font-medium text-white text-[10px] leading-[16px]">
              Founder Rate
            </p>
          </span>
          <p className="font-['Kanit'] font-bold text-[#0a0a0a] text-[18px] leading-[normal]">
            Founder Membership
          </p>
        </div>
        <div className="flex items-end gap-1">
          <p className="font-['Kanit'] font-bold text-[#4ab04a] text-[24px] leading-[24px]">
            $29.99
          </p>
          <p className="font-['Kanit'] font-normal text-[#4a5565] text-[14px] leading-[20px]">
            / bi-weekly
          </p>
        </div>
      </div>

      {/* Details Section */}
      <div className="flex flex-col gap-3">
        {/* 2 Years Locked */}
        <div className="flex gap-2 items-start">
          <Calendar className="size-5 text-[#4ab04a] flex-shrink-0 mt-0.5" />
          <div className="flex flex-col leading-[20px]">
            <p className="font-['Kanit'] font-medium text-[#0a0a0a] text-[14px]">
              2 Years Locked
            </p>
            <p className="font-['Kanit'] font-light text-[#4a5565] text-[12px]">
              Guaranteed until {getGuaranteeDate()}
            </p>
          </div>
        </div>

        {/* Location */}
        <div className="flex gap-2 items-start">
          <MapPin className="size-5 text-[#4ab04a] flex-shrink-0 mt-0.5" />
          <div className="flex flex-col leading-[20px]">
            <p className="font-['Kanit'] font-medium text-[#0a0a0a] text-[14px]">
              Location
            </p>
            <p className="font-['Kanit'] font-light text-[#4a5565] text-[12px]">
              South Edmonton Common
            </p>
          </div>
        </div>

        {/* Members */}
        <div className="flex gap-2 items-start">
          <Users className="size-5 text-[#4ab04a] flex-shrink-0 mt-0.5" />
          <div className="flex flex-col leading-[20px]">
            <p className="font-['Kanit'] font-medium text-[#0a0a0a] text-[14px]">
              Members
            </p>
            <p className="font-['Kanit'] font-light text-[#4a5565] text-[12px]">
              {totalMembers} {totalMembers === 1 ? "member" : "members"}
            </p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-[#d4d4d4] w-full" />

      {/* Members List */}
      <div className="flex flex-col gap-3">
        {/* Primary Member */}
        <div className="flex flex-col leading-[20px]">
          <p className="font-['Kanit'] font-medium text-[#0a0a0a] text-[14px]">
            Primary Member
          </p>
          <p className="font-['Kanit'] font-light text-[#4a5565] text-[12px]">
            {primaryMemberName}
          </p>
        </div>

        {/* Family Members */}
        {familyMembers && familyMembers.length > 0 && (
          <div className="flex flex-col gap-0.5">
            <p className="font-['Kanit'] font-medium text-[#0a0a0a] text-[14px] leading-[20px]">
              Family Members
            </p>
            <div className="flex flex-col gap-0.5 font-['Kanit'] font-light text-[#4a5565] text-[12px] leading-[16px]">
              {familyMembers.map((member, index) => {
                const memberName =
                  member.firstName && member.lastName
                    ? `${member.firstName} ${member.lastName}`
                    : `Family Member ${index + 1}`;
                return (
                  <p key={member.id || index} className="relative shrink-0">
                    {memberName}
                  </p>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default MembershipSummaryCard;
