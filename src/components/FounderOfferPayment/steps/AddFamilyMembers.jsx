import React, { useState } from "react";
import { ArrowLeft, Plus, Trash2, Users } from "lucide-react";

function AddFamilyMembers({
  familyMembers,
  updateFamilyMembers,
  onNext,
  onBack,
}) {
  const [showAddButton, setShowAddButton] = useState(
    familyMembers.length === 0
  );

  const addFamilyMember = () => {
    const newMember = {
      id: Date.now(),
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    };
    updateFamilyMembers([...familyMembers, newMember]);
    setShowAddButton(false);
  };

  const removeFamilyMember = (id) => {
    const updated = familyMembers.filter((member) => member.id !== id);
    updateFamilyMembers(updated);
    if (updated.length === 0) {
      setShowAddButton(true);
    }
  };

  const updateMember = (id, field, value) => {
    const updated = familyMembers.map((member) =>
      member.id === id ? { ...member, [field]: value } : member
    );
    updateFamilyMembers(updated);
  };

  const handleNext = () => {
    // Optional step - can proceed even without family members
    onNext();
  };

  return (
    <div className="w-full max-w-[640px] mx-auto">
      <div className="flex flex-col gap-1 items-start mb-6">
        <h2 className="font-['Kanit'] !font-medium text-[#000] !text-[20px] capitalize !leading-[28px]">
          Add Family Member (Optional)
        </h2>
        <p className="font-['Kanit'] font-light text-[#393939] text-[14px] leading-[22px]">
          Lock founder pricing for your entire family (optional)
        </p>
      </div>

      <div className="flex flex-col gap-6">
        {/* Family Member Cards */}
        {familyMembers.map((member, index) => (
          <div
            key={member.id}
            className="bg-white border border-[#d4d4d4] rounded-[8px] px-4 py-6"
          >
            {/* Card Header */}
            <div className="flex items-center justify-between mb-5">
              <div className="flex gap-3 items-center">
                <p className="font-['Kanit'] font-semibold text-[#0a0a0a] text-[16px] leading-[24px]">
                  Family Member #{index + 1}
                </p>
                <span className="bg-[#00a63e] border border-transparent rounded-[8px] px-2.5 py-1.5">
                  <p className="font-['Kanit'] font-light text-white text-[12px] leading-[16px]">
                    Founder Rate Applied
                  </p>
                </span>
              </div>
              <button
                type="button"
                onClick={() => removeFamilyMember(member.id)}
                className="size-8 rounded-[8px] flex items-center justify-center hover:bg-gray-100"
              >
                <Trash2 className="size-4 text-red-500" />
              </button>
            </div>

            {/* Form Fields */}
            <div className="flex flex-col gap-4">
              {/* First Name & Last Name */}
              <div className="flex gap-4">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="First Name"
                    value={member.firstName}
                    onChange={(e) =>
                      updateMember(member.id, "firstName", e.target.value)
                    }
                    className="w-full px-4 py-3 border border-[#d4d4d4] rounded-[5px] form-placeholder"
                  />
                </div>
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={member.lastName}
                    onChange={(e) =>
                      updateMember(member.id, "lastName", e.target.value)
                    }
                    className="w-full px-4 py-3 border border-[#d4d4d4] rounded-[5px] form-placeholder"
                  />
                </div>
              </div>

              {/* Email & Phone */}
              <div className="flex gap-4">
                <div className="flex-1">
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={member.email}
                    onChange={(e) =>
                      updateMember(member.id, "email", e.target.value)
                    }
                    className="w-full h-[49px] px-4 py-3 border border-[#d4d4d4] rounded-[5px] font-['Kanit'] font-light text-[16px] text-black placeholder:text-black"
                  />
                </div>
                <div className="flex-1">
                  <input
                    type="tel"
                    placeholder="Phone Number (Optional)"
                    value={member.phone}
                    onChange={(e) =>
                      updateMember(member.id, "phone", e.target.value)
                    }
                    className="w-full h-[49px] px-4 py-3 border border-[#d4d4d4] rounded-[5px] font-['Kanit'] font-light text-[16px] text-black placeholder:text-black"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Add Family Member Button */}
        {showAddButton && (
          <button
            type="button"
            onClick={addFamilyMember}
            className="border border-black border-dashed rounded-[8px] px-[17px] py-3 flex gap-2 items-center justify-center"
          >
            <Users className="size-4 text-black" />
            <p className="font-['Kanit'] font-normal text-[#0a0a0a] text-[14px] leading-[20px]">
              Add a family member
            </p>
          </button>
        )}

        {!showAddButton && familyMembers.length > 0 && (
          <button
            type="button"
            onClick={addFamilyMember}
            className="border border-black border-dashed rounded-[8px] px-[17px] py-3 flex gap-2 items-center justify-center"
          >
            <Plus className="size-4 text-black" />
            <p className="font-['Kanit'] font-normal text-[#0a0a0a] text-[14px] leading-[20px]">
              Add another family member
            </p>
          </button>
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between mt-8">
        <button
          type="button"
          onClick={onBack}
          className="flex gap-1.5 items-center hover:cursor-pointer font-['Kanit'] font-light text-black text-[16px] uppercase"
        >
          <ArrowLeft className="size-4" />
          Back
        </button>
        <button type="button" onClick={handleNext} className="btnPrimary">
          Next
        </button>
      </div>
    </div>
  );
}

export default AddFamilyMembers;
