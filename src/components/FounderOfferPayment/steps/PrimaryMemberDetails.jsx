import React, { useState, useEffect, useRef } from "react";
import { ArrowLeft, ChevronDown } from "lucide-react";

const genderOptions = ["Male", "Female", "Other", "Prefer not to say"];

function PrimaryMemberDetails({ formData, updateFormData, onNext, onBack }) {
  const [errors, setErrors] = useState({});
  const [showGenderDropdown, setShowGenderDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowGenderDropdown(false);
      }
    };

    if (showGenderDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showGenderDropdown]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateFormData({ [name]: value });
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleGenderSelect = (gender) => {
    updateFormData({ gender });
    setShowGenderDropdown(false);
    if (errors.gender) {
      setErrors((prev) => ({ ...prev, gender: "" }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.province.trim()) newErrors.province = "Province is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.postalCode.trim()) {
      newErrors.postalCode = "Postal code is required";
    }
    if (!formData.dob.trim()) newErrors.dob = "Date of birth is required";
    if (!formData.gender.trim()) newErrors.gender = "Gender is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onNext();
    }
  };

  return (
    <div className="w-full max-w-[640px] mx-auto">
      <div className="flex flex-col gap-1 mb-6">
        <h2 className="font-['Kanit'] font-medium text-[#000] !text-[20px] capitalize !leading-[28px]">
          Tell us about the primary member
        </h2>
        <p className="font-['Kanit'] font-light text-[#393939] text-[14px] leading-[22px]">
          We'll use this information to set up your founder membership
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        {/* First Name & Last Name */}
        <div className="flex gap-4">
          <div className="flex-1 flex flex-col">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
              className={`w-full px-4 py-3 border rounded-[5px] form-placeholder ${
                errors.firstName ? "border-red-500" : "border-[#d4d4d4]"
              }`}
            />
            {errors.firstName && (
              <p className="input-error mt-1">{errors.firstName}</p>
            )}
          </div>
          <div className="flex-1 flex flex-col">
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              className={`w-full px-4 py-3 border rounded-[5px] form-placeholder ${
                errors.lastName ? "border-red-500" : "border-[#d4d4d4]"
              }`}
            />
            {errors.lastName && (
              <p className="input-error mt-1">{errors.lastName}</p>
            )}
          </div>
        </div>

        {/* Email & Phone */}
        <div className="flex gap-3">
          <div className="flex-1 flex flex-col">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className={`w-full h-[49px] px-4 py-3 border rounded-[5px] form-placeholder ${
                errors.email ? "border-red-500" : "border-[#d4d4d4]"
              }`}
            />
            {errors.email && <p className="input-error mt-1">{errors.email}</p>}
          </div>
          <div className="flex-1 flex flex-col">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className={`w-full h-[49px] px-4 py-3 border rounded-[5px] form-placeholder ${
                errors.phone ? "border-red-500" : "border-[#d4d4d4]"
              }`}
            />
            {errors.phone && <p className="input-error mt-1">{errors.phone}</p>}
          </div>
        </div>

        {/* Address */}
        <div className="flex flex-col">
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Address"
            className={`w-full px-4 py-3 border rounded-[5px] form-placeholder ${
              errors.address ? "border-red-500" : "border-[#d4d4d4]"
            }`}
          />
          {errors.address && (
            <p className="input-error mt-1">{errors.address}</p>
          )}
        </div>

        {/* Province */}
        <div className="flex flex-col">
          <input
            type="text"
            name="province"
            value={formData.province}
            onChange={handleChange}
            placeholder="Province"
            className={`w-full px-4 py-3 border rounded-[5px] form-placeholder ${
              errors.province ? "border-red-500" : "border-[#d4d4d4]"
            }`}
          />
          {errors.province && (
            <p className="input-error mt-1">{errors.province}</p>
          )}
        </div>

        {/* City & Postal Code */}
        <div className="flex gap-4">
          <div className="flex-1 flex flex-col">
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="City"
              className={`w-full px-4 py-3 border rounded-[5px] form-placeholder ${
                errors.city ? "border-red-500" : "border-[#d4d4d4]"
              }`}
            />
            {errors.city && <p className="input-error mt-1">{errors.city}</p>}
          </div>
          <div className="flex-1 flex flex-col">
            <input
              type="text"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleChange}
              placeholder="Postal Code"
              className={`w-full px-4 py-3 border rounded-[5px] form-placeholder ${
                errors.postalCode ? "border-red-500" : "border-[#d4d4d4]"
              }`}
            />
            {errors.postalCode && (
              <p className="input-error mt-1">{errors.postalCode}</p>
            )}
          </div>
        </div>

        {/* DOB & Gender */}
        <div className="flex gap-4">
          <div className="flex-1 flex flex-col">
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              placeholder="DOB"
              className={`w-full px-4 py-3 border rounded-[5px] form-placeholder ${
                errors.dob ? "border-red-500" : "border-[#d4d4d4]"
              }`}
            />
            {errors.dob && <p className="input-error mt-1">{errors.dob}</p>}
          </div>
          <div className="flex-1 flex flex-col relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setShowGenderDropdown(!showGenderDropdown)}
              className={`w-full px-4 py-3 border rounded-[5px] form-placeholder flex items-center justify-between ${
                errors.gender ? "border-red-500" : "border-[#d4d4d4]"
              }`}
            >
              <span className={formData.gender ? "" : "text-gray-400"}>
                {formData.gender || "Gender"}
              </span>
              <ChevronDown className="size-[10px]" />
            </button>
            {showGenderDropdown && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-[#d4d4d4] rounded-[5px] shadow-lg z-50">
                {genderOptions.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => handleGenderSelect(option)}
                    className="w-full px-4 py-2 text-left hover:bg-gray-100 form-placeholder"
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
            {errors.gender && (
              <p className="input-error mt-1">{errors.gender}</p>
            )}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between mt-8">
          <button
            type="button"
            onClick={onBack}
            className="flex gap-1.5 items-center font-['Kanit'] font-light text-black text-[16px] uppercase"
          >
            <ArrowLeft className="size-4" />
            Back
          </button>
          <button type="submit" className="btnPrimary">
            Next
          </button>
        </div>
      </form>
    </div>
  );
}

export default PrimaryMemberDetails;
