import React, { useState } from "react";
import locationImg from "../../assets/images/form/spaces-form.webp";
import { ArrowLeft } from "lucide-react";

function CheckMembershipForm({ onBack, onCheckMembership }) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    organization: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!form.firstName) newErrors.firstName = "Required";
    if (!form.lastName) newErrors.lastName = "Required";
    if (!form.email) newErrors.email = "Required";
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email))
      newErrors.email = "Invalid email";
    if (!form.organization) newErrors.organization = "Required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      onCheckMembership(form);
    }
  };

  return (
    <div className="flex gap-12 p-6 flex-row max-w-[1280px] mx-auto justify-center items-center min-h-screen">
      {/* Left Image */}
      <div className="w-full max-w-[40%] flex-shrink-0 flex">
        <div className="rounded-[8px] max-w-[500px] overflow-hidden bg-white">
          <img
            src={locationImg}
            alt="Evolve Strength Facility"
            className="object-cover w-full h-auto"
          />
        </div>
      </div>
      {/* Right Form */}
      <div className="flex flex-col items-center w-full max-w-[60%]">
        <button
          className="flex items-center gap-2 text-[#222] text-[15px] mb-4 hover:underline"
          onClick={onBack}
        >
          <ArrowLeft size={20} /> Back
        </button>
        <div className="w-full max-w-[420px] bg-white rounded-[10px] border p-6">
          <h2 className="text-[20px] md:text-[22px] font-[700] text-center mb-2">
            CHECK YOUR COMPANY MEMBERSHIP
          </h2>
          <p className="text-[15px] font-[400] text-center mb-5 text-[#222]">
            Enter your details to see if your organization is already enrolled
            with Evolve.
          </p>
          <form
            className="flex flex-col gap-3"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 flex flex-col">
                <label className="font-[500] text-[#000] flex flex-col gap-[2px] text-[15px] leading-[24px]">
                  First Name *
                  <input
                    type="text"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    className="px-2 h-[40px] border border-[#D4D4D4] rounded-[4px] bg-[#FFFFFF] focus:border-[#4AB04A] focus:outline-none w-full placeholder:text-[#6F6D66] placeholder:text-[12px] !placeholder:font-[400]"
                  />
                  {errors.firstName && (
                    <span className="text-red-600 text-[12px]">
                      {errors.firstName}
                    </span>
                  )}
                </label>
              </div>
              <div className="flex-1 flex flex-col">
                <label className="font-[500] text-[#000] flex flex-col gap-[2px] text-[15px] leading-[24px]">
                  Last Name *
                  <input
                    type="text"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                    className="px-2 h-[40px] border border-[#D4D4D4] rounded-[4px] bg-[#FFFFFF] focus:border-[#4AB04A] focus:outline-none w-full placeholder:text-[#6F6D66] placeholder:text-[12px] !placeholder:font-[400]"
                  />
                  {errors.lastName && (
                    <span className="text-red-600 text-[12px]">
                      {errors.lastName}
                    </span>
                  )}
                </label>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <label className="font-[500] text-[#000] flex flex-col gap-[2px] text-[15px] leading-[24px]">
                Company Email *
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Company Email"
                  className="px-2 h-[40px] border border-[#D4D4D4] rounded-[4px] bg-[#FFFFFF] focus:border-[#4AB04A] focus:outline-none w-full placeholder:text-[#6F6D66] placeholder:text-[12px] !placeholder:font-[400]"
                />
                {errors.email && (
                  <span className="text-red-600 text-[12px]">
                    {errors.email}
                  </span>
                )}
              </label>
              <label className="font-[500] text-[#000] flex flex-col gap-[2px] text-[15px] leading-[24px]">
                Organization Name *
                <input
                  type="text"
                  name="organization"
                  value={form.organization}
                  onChange={handleChange}
                  placeholder="Organization Name"
                  className="px-2 h-[40px] border border-[#D4D4D4] rounded-[4px] bg-[#FFFFFF] focus:border-[#4AB04A] focus:outline-none w-full placeholder:text-[#6F6D66] placeholder:text-[12px] !placeholder:font-[400]"
                />
                {errors.organization && (
                  <span className="text-red-600 text-[12px]">
                    {errors.organization}
                  </span>
                )}
              </label>
            </div>
            <button type="submit" className="mt-2 btnPrimary w-full">
              CHECK MEMBERSHIP
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CheckMembershipForm;
