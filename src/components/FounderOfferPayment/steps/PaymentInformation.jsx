import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

function PaymentInformation({ formData, updateFormData, onNext, onBack }) {
  const [errors, setErrors] = useState({});
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [agreedToAuthorization, setAgreedToAuthorization] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    let formattedValue = value;

    // Format card number (add spaces every 4 digits)
    if (name === "cardNumber") {
      formattedValue = value
        .replace(/\s/g, "")
        .replace(/(.{4})/g, "$1 ")
        .trim();
      if (formattedValue.length > 19)
        formattedValue = formattedValue.slice(0, 19);
    }

    // Format expiry date (MM/YY)
    if (name === "expiryDate") {
      formattedValue = value.replace(/\D/g, "");
      if (formattedValue.length >= 2) {
        formattedValue =
          formattedValue.slice(0, 2) + "/" + formattedValue.slice(2, 4);
      }
      if (formattedValue.length > 5)
        formattedValue = formattedValue.slice(0, 5);
    }

    // Format CVV (max 3 digits)
    if (name === "cvv") {
      formattedValue = value.replace(/\D/g, "").slice(0, 3);
    }

    updateFormData({ [name]: formattedValue });
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (
      !formData.cardNumber.trim() ||
      formData.cardNumber.replace(/\s/g, "").length < 16
    ) {
      newErrors.cardNumber = "Valid card number is required";
    }
    if (
      !formData.expiryDate.trim() ||
      !/^\d{2}\/\d{2}$/.test(formData.expiryDate)
    ) {
      newErrors.expiryDate = "Valid expiry date is required (MM/YY)";
    }
    if (!formData.cvv.trim() || formData.cvv.length < 3) {
      newErrors.cvv = "Valid CVV is required";
    }
    if (!agreedToTerms) {
      newErrors.agreedToTerms =
        "Please confirm you have read our Terms and Conditions";
    }
    if (!agreedToAuthorization) {
      newErrors.agreedToAuthorization =
        "Please accept the authorization and agreement";
    }

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
      <div className="flex flex-col gap-1 items-start mb-6">
        <h2 className="font-['Kanit'] !font-medium text-[#000] !text-[20px] capitalize !leading-[28px]">
          Add Payment Information
        </h2>
        <p className="font-['Kanit'] font-light text-[#393939] text-[14px] leading-[22px]">
          Provide billing details to complete your founder membership
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        {/* Card Number */}
        <div className="flex flex-col">
          <input
            type="text"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            placeholder="Card Number"
            maxLength={19}
            className={`w-full px-4 py-3 border rounded-[5px] form-placeholder ${
              errors.cardNumber ? "border-red-500" : "border-[#d4d4d4]"
            }`}
          />
          {errors.cardNumber && (
            <p className="input-error mt-1">{errors.cardNumber}</p>
          )}
        </div>

        {/* Expiry Date & CVV */}
        <div className="flex gap-4">
          <div className="flex-1 flex flex-col">
            <input
              type="text"
              name="expiryDate"
              value={formData.expiryDate}
              onChange={handleChange}
              placeholder="MM/YY"
              maxLength={5}
              className={`w-full px-4 py-3 border rounded-[5px] form-placeholder ${
                errors.expiryDate ? "border-red-500" : "border-[#d4d4d4]"
              }`}
            />
            {errors.expiryDate && (
              <p className="input-error mt-1">{errors.expiryDate}</p>
            )}
          </div>
          <div className="flex-1 flex flex-col">
            <input
              type="text"
              name="cvv"
              value={formData.cvv}
              onChange={handleChange}
              placeholder="CVV"
              maxLength={3}
              className={`w-full px-4 py-3 border rounded-[5px] form-placeholder ${
                errors.cvv ? "border-red-500" : "border-[#d4d4d4]"
              }`}
            />
            {errors.cvv && <p className="input-error mt-1">{errors.cvv}</p>}
          </div>
        </div>

        {/* Terms and Conditions Checkboxes */}
        <div className="flex flex-col gap-4">
          {/* First Checkbox */}
          <div className="flex gap-3 items-start">
            <input
              type="checkbox"
              id="agreedToTerms"
              checked={agreedToTerms}
              onChange={(e) => {
                setAgreedToTerms(e.target.checked);
                if (errors.agreedToTerms) {
                  setErrors((prev) => ({ ...prev, agreedToTerms: "" }));
                }
              }}
              className="mt-1 size-4 flex-shrink-0 cursor-pointer"
            />
            <label
              htmlFor="agreedToTerms"
              className="flex-1 font-['Vazirmatn'] font-normal text-black text-[14px] leading-[22px] cursor-pointer"
            >
              Please confirm you have read our{" "}
              <Link
                to="/terms-and-conditions"
                target="_blank"
                className="text-[#4ab04a] underline"
              >
                Terms
              </Link>{" "}
              and{" "}
              <Link
                to="/terms-and-conditions"
                target="_blank"
                className="text-[#4ab04a] underline"
              >
                Conditions
              </Link>
            </label>
          </div>
          {errors.agreedToTerms && (
            <p className="input-error ml-7">{errors.agreedToTerms}</p>
          )}

          {/* Second Checkbox */}
          <div className="flex gap-3 items-start">
            <input
              type="checkbox"
              id="agreedToAuthorization"
              checked={agreedToAuthorization}
              onChange={(e) => {
                setAgreedToAuthorization(e.target.checked);
                if (errors.agreedToAuthorization) {
                  setErrors((prev) => ({ ...prev, agreedToAuthorization: "" }));
                }
              }}
              className="mt-1 size-4 flex-shrink-0 cursor-pointer"
            />
            <label
              htmlFor="agreedToAuthorization"
              className="flex-1 font-['Vazirmatn'] font-normal text-black text-[14px] leading-[22px] cursor-pointer"
            >
              I authorize Evolve Strength to change my card for membership fees.
              I understand my membership renews automatically unless I cancel as
              stated in the contract. I have read and agree to the{" "}
              <Link
                to="/terms-and-conditions"
                target="_blank"
                className="text-[#4ab04a] underline"
              >
                Terms And Conditions
              </Link>{" "}
              and{" "}
              <Link
                to="/privacy-policy"
                target="_blank"
                className="text-[#4ab04a] underline"
              >
                Privacy Policy
              </Link>
              .
            </label>
          </div>
          {errors.agreedToAuthorization && (
            <p className="input-error ml-7">{errors.agreedToAuthorization}</p>
          )}
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
            Complete Payment
          </button>
        </div>
      </form>
    </div>
  );
}

export default PaymentInformation;
