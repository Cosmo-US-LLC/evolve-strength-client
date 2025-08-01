import React, { useState } from "react";
import locationImg from "../../assets/images/form/future-form.webp";
import arrowUp from "../../assets/images/form/arrow-down (2).svg";
import arrowDown from "../../assets/images/form/arrow-down (1).svg";
import { Link } from "react-router-dom";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  province: "",
  businessExperience: "",
  liquidCapital: "",
  franchiseExperience: "",
  bankruptcy: "",
  isMember: "",
  about: "",
};

const businessExperienceOptions = [
  "Less than 1 year",
  "1-3 years",
  "3-5 years",
  "5+ years",
];
const liquidCapitalOptions = [
  "$50,000-$100,000",
  "$100,000-$250,000",
  "$250,000-$500,000",
  "$500,000+",
];
const franchiseExperienceOptions = ["None", "Some", "Extensive"];
const bankruptcyOptions = ["Yes", "No"];
const isMemberOptions = ["Yes", "No"];

function YourFitnessFutureForm({ onReturnHome }) {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [businessFocused, setBusinessFocused] = useState(false);
  const [liquidFocused, setLiquidFocused] = useState(false);
  const [franchiseFocused, setFranchiseFocused] = useState(false);
  const [bankruptcyFocused, setBankruptcyFocused] = useState(false);
  const [isMemberFocused, setIsMemberFocused] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!form.firstName) newErrors.firstName = "Required";
    if (!form.lastName) newErrors.lastName = "Required";
    if (!form.email) newErrors.email = "Required";
    if (!form.phone) newErrors.phone = "Required";
    if (!form.address) newErrors.address = "Required";
    if (!form.city) newErrors.city = "Required";
    if (!form.province) newErrors.province = "Required";
    if (!form.businessExperience) newErrors.businessExperience = "Required";
    if (!form.liquidCapital) newErrors.liquidCapital = "Required";
    if (!form.franchiseExperience) newErrors.franchiseExperience = "Required";
    if (!form.bankruptcy) newErrors.bankruptcy = "Required";
    if (!form.isMember) newErrors.isMember = "Required";
    if (!form.about) newErrors.about = "Required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      // Submit logic here
    }
  };

  return (
    <div className="flex md:gap-12 md:p-6 p-4 py-12  flex-col md:flex-row max-w-[1280px] mx-auto justify-center  min-h-screen">
      {/* Left Image & Headline */}
      <div className="w-full md:max-w-[40%] flex-shrink-0 flex flex-col">
        <h2 className=" font-[700] leading-[39px] mb-4">
          LET'S BUILD YOUR FITNESS FUTURE TOGETHER
        </h2>
        <p className="mb-6 text-[16px] font-[300] !font-[Kanit] leading-[24px] ">
          Have questions or ready to take the first step? Reach out today and
          let's create a personalized path to your health, strength, and
          recovery goals—designed just for you.
        </p>
        <div className="rounded-[8px] max-w-[500px] overflow-hidden bg-white max-md:hidden">
          <img
            src={locationImg}
            alt="Fitness Facility"
            className="object-cover w-full h-auto"
          />
        </div>
      </div>
      {/* Right Form */}
      <div className="bg-[#FCFCFC] rounded-[10px] border md:max-w-[40%] w-full p-0 overflow-hidden">
        {/* <div className="bg-[#000] text-white text-center py-4 px-6">
          <h3 className="mt-[4px]">APPLY NOW</h3>
        </div> */}
        {submitted ? (
          <div className="text-[#4AB04A] text-lg text-center py-12">
            Thank you for your application!
          </div>
        ) : (
          <form
            className="p-5 flex flex-col gap-3"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="flex flex-row gap-4">
              <div className="flex-1 flex flex-col">
                <label className="font-[500] text-[#000] flex flex-col gap-[2px] text-[16px] leading-[24px]">
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
                <label className="font-[500] text-[#000] flex flex-col gap-[2px] text-[16px] leading-[24px]">
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
            <div className="flex flex-row gap-4">
              <div className="flex-1 flex flex-col">
                <label className="font-[500] text-[#000] flex flex-col gap-[2px] text-[16px] leading-[24px]">
                  Email Address *
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className="px-2 h-[40px] border border-[#D4D4D4] rounded-[4px] bg-[#FFFFFF] focus:border-[#4AB04A] focus:outline-none w-full placeholder:text-[#6F6D66] placeholder:text-[12px] !placeholder:font-[400]"
                  />
                  {errors.email && (
                    <span className="text-red-600 text-[12px]">
                      {errors.email}
                    </span>
                  )}
                </label>
              </div>
              <div className="flex-1 flex flex-col">
                <label className="font-[500] text-[#000] flex flex-col gap-[2px] text-[16px] leading-[24px]">
                  Phone Number *
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="px-2 h-[40px] border border-[#D4D4D4] rounded-[4px] bg-[#FFFFFF] focus:border-[#4AB04A] focus:outline-none w-full placeholder:text-[#6F6D66] placeholder:text-[12px] !placeholder:font-[400]"
                  />
                  {errors.phone && (
                    <span className="text-red-600 text-[12px]">
                      {errors.phone}
                    </span>
                  )}
                </label>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 flex flex-col">
                <label className="font-[500] text-[#000] flex flex-col gap-[2px] text-[16px] leading-[24px]">
                  Your Address *
                  <input
                    type="text"
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    placeholder="Street Address"
                    className="px-2 h-[40px] border border-[#D4D4D4] rounded-[4px] bg-[#FFFFFF] focus:border-[#4AB04A] focus:outline-none w-full placeholder:text-[#6F6D66] placeholder:text-[12px] !placeholder:font-[400]"
                  />
                  {errors.address && (
                    <span className="text-red-600 text-[12px]">
                      {errors.address}
                    </span>
                  )}
                </label>
              </div>
              
              <div className="md:flex-1 flex  flex-col">
                <label className="font-[500] text-[#000] flex flex-col gap-[2px] text-[16px] leading-[24px]">
                  City *
                  <input
                    type="text"
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    placeholder="City"
                    className="px-2 h-[40px] border border-[#D4D4D4] rounded-[4px] bg-[#FFFFFF] focus:border-[#4AB04A] focus:outline-none w-full placeholder:text-[#6F6D66] placeholder:text-[12px] !placeholder:font-[400]"
                  />
                  {errors.city && (
                    <span className="text-red-600 text-[12px]">
                      {errors.city}
                    </span>
                  )}
                </label>
              </div>
              <div className="flex-1 flex flex-col">
                <label className="font-[500] text-[#000] flex flex-col gap-[2px] text-[16px] leading-[24px]">
                  Province / State *
                  <input
                    type="text"
                    name="province"
                    value={form.province}
                    onChange={handleChange}
                    placeholder="Province / State"
                    className="px-2 h-[40px] border border-[#D4D4D4] rounded-[4px] bg-[#FFFFFF] focus:border-[#4AB04A] focus:outline-none w-full placeholder:text-[#6F6D66] placeholder:text-[12px] !placeholder:font-[400]"
                  />
                  {errors.province && (
                    <span className="text-red-600 text-[12px]">
                      {errors.province}
                    </span>
                  )}
                </label>
              </div>
            </div>
            {/* Business Experience */}
            <div className="w-full flex flex-col">
              <label className="font-[500] text-[#000] flex flex-col gap-[2px] text-[16px] leading-[24px]">
                Business Experience *
                <div className="relative w-full">
                  <select
                    name="businessExperience"
                    value={form.businessExperience}
                    onChange={handleChange}
                    onFocus={() => setBusinessFocused(true)}
                    onBlur={() => setBusinessFocused(false)}
                    className={
                      "appearance-none mt-1 px-2 h-[40px] border border-[#D4D4D4] rounded-[4px] bg-[#FFFFFF] focus:border-[#4AB04A] focus:outline-none w-full placeholder:text-[#6F6D66] placeholder:text-[12px] !placeholder:font-[400] " +
                      (form.businessExperience === ""
                        ? "text-[#6F6D66] text-[12px]"
                        : "text-[#000] text-[16px]")
                    }
                  >
                    <option value="">
                      Select the years of business experience
                    </option>
                    {businessExperienceOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#6F6D66]">
                    {businessFocused ? (
                      <img
                        src={arrowUp}
                        alt="Arrow Up"
                        width={20}
                        height={20}
                        style={{
                          filter:
                            form.businessExperience === ""
                              ? "grayscale(1)"
                              : "none",
                        }}
                      />
                    ) : (
                      <img
                        src={arrowDown}
                        alt="Arrow Down"
                        width={20}
                        height={20}
                        style={{
                          filter:
                            form.businessExperience === ""
                              ? "grayscale(1)"
                              : "none",
                        }}
                      />
                    )}
                  </span>
                </div>
                {errors.businessExperience && (
                  <span className="text-red-600 text-[12px]">
                    {errors.businessExperience}
                  </span>
                )}
              </label>
            </div>
            {/* Liquid Capital */}
            <div className="w-full flex flex-col">
              <label className="font-[500] text-[#000] flex flex-col gap-[2px] text-[16px] leading-[24px]">
                Available Liquid Capital *
                <div className="relative w-full">
                  <select
                    name="liquidCapital"
                    value={form.liquidCapital}
                    onChange={handleChange}
                    onFocus={() => setLiquidFocused(true)}
                    onBlur={() => setLiquidFocused(false)}
                    className={
                      "appearance-none mt-1 px-2 h-[40px] border border-[#D4D4D4] rounded-[4px] bg-[#FFFFFF] focus:border-[#4AB04A] focus:outline-none w-full placeholder:text-[#6F6D66] placeholder:text-[12px] !placeholder:font-[400] " +
                      (form.liquidCapital === ""
                        ? "text-[#6F6D66] text-[12px]"
                        : "text-[#000] text-[16px]")
                    }
                  >
                    <option value="">Select available liquid capital</option>
                    {liquidCapitalOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#6F6D66]">
                    {liquidFocused ? (
                      <img
                        src={arrowUp}
                        alt="Arrow Up"
                        width={20}
                        height={20}
                        style={{
                          filter:
                            form.liquidCapital === "" ? "grayscale(1)" : "none",
                        }}
                      />
                    ) : (
                      <img
                        src={arrowDown}
                        alt="Arrow Down"
                        width={20}
                        height={20}
                        style={{
                          filter:
                            form.liquidCapital === "" ? "grayscale(1)" : "none",
                        }}
                      />
                    )}
                  </span>
                </div>
                {errors.liquidCapital && (
                  <span className="text-red-600 text-[12px]">
                    {errors.liquidCapital}
                  </span>
                )}
              </label>
            </div>
            {/* Franchise Experience */}
            <div className="w-full flex flex-col">
              <label className="font-[500] text-[#000] flex flex-col gap-[2px] text-[16px] leading-[24px]">
                Previous Franchise Experience *
                <div className="relative w-full">
                  <select
                    name="franchiseExperience"
                    value={form.franchiseExperience}
                    onChange={handleChange}
                    onFocus={() => setFranchiseFocused(true)}
                    onBlur={() => setFranchiseFocused(false)}
                    className={
                      "appearance-none mt-1 px-2 h-[40px] border border-[#D4D4D4] rounded-[4px] bg-[#FFFFFF] focus:border-[#4AB04A] focus:outline-none w-full placeholder:text-[#6F6D66] placeholder:text-[12px] !placeholder:font-[400] " +
                      (form.franchiseExperience === ""
                        ? "text-[#6F6D66] text-[12px]"
                        : "text-[#000] text-[16px]")
                    }
                  >
                    <option value="">
                      Select the previous franchise experience
                    </option>
                    {franchiseExperienceOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#6F6D66]">
                    {franchiseFocused ? (
                      <img
                        src={arrowUp}
                        alt="Arrow Up"
                        width={20}
                        height={20}
                        style={{
                          filter:
                            form.franchiseExperience === ""
                              ? "grayscale(1)"
                              : "none",
                        }}
                      />
                    ) : (
                      <img
                        src={arrowDown}
                        alt="Arrow Down"
                        width={20}
                        height={20}
                        style={{
                          filter:
                            form.franchiseExperience === ""
                              ? "grayscale(1)"
                              : "none",
                        }}
                      />
                    )}
                  </span>
                </div>
                {errors.franchiseExperience && (
                  <span className="text-red-600 text-[12px]">
                    {errors.franchiseExperience}
                  </span>
                )}
              </label>
            </div>
            {/* Bankruptcy/Litigation */}
            <div className="w-full flex flex-col">
              <label className="font-[500] text-[#000] flex flex-col gap-[2px] text-[16px] leading-[24px]">
                Have You Ever Declared Bankruptcy Or Been Involved In
                Litigation? *
                <div className="relative w-full">
                  <select
                    name="bankruptcy"
                    value={form.bankruptcy}
                    onChange={handleChange}
                    onFocus={() => setBankruptcyFocused(true)}
                    onBlur={() => setBankruptcyFocused(false)}
                    className={
                      "appearance-none mt-1 px-2 h-[40px] border border-[#D4D4D4] rounded-[4px] bg-[#FFFFFF] focus:border-[#4AB04A] focus:outline-none w-full placeholder:text-[#6F6D66] placeholder:text-[12px] !placeholder:font-[400] " +
                      (form.bankruptcy === ""
                        ? "text-[#6F6D66] text-[12px]"
                        : "text-[#000] text-[16px]")
                    }
                  >
                    <option value="">
                      Have You Ever Declared Bankruptcy or Been Involved in
                      Litigation?
                    </option>
                    {bankruptcyOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#6F6D66]">
                    {bankruptcyFocused ? (
                      <img
                        src={arrowUp}
                        alt="Arrow Up"
                        width={20}
                        height={20}
                        style={{
                          filter:
                            form.bankruptcy === "" ? "grayscale(1)" : "none",
                        }}
                      />
                    ) : (
                      <img
                        src={arrowDown}
                        alt="Arrow Down"
                        width={20}
                        height={20}
                        style={{
                          filter:
                            form.bankruptcy === "" ? "grayscale(1)" : "none",
                        }}
                      />
                    )}
                  </span>
                </div>
                {errors.bankruptcy && (
                  <span className="text-red-600 text-[12px]">
                    {errors.bankruptcy}
                  </span>
                )}
              </label>
            </div>
            {/* Evolve Member */}
            <div className="w-full flex flex-col">
              <label className="font-[500] text-[#000] flex flex-col gap-[2px] text-[16px] leading-[24px]">
                Are You a Current Evolve Member? *
                <div className="relative w-full">
                  <select
                    name="isMember"
                    value={form.isMember}
                    onChange={handleChange}
                    onFocus={() => setIsMemberFocused(true)}
                    onBlur={() => setIsMemberFocused(false)}
                    className={
                      "appearance-none mt-1 px-2 h-[40px] border border-[#D4D4D4] rounded-[4px] bg-[#FFFFFF] focus:border-[#4AB04A] focus:outline-none w-full placeholder:text-[#6F6D66] placeholder:text-[12px] !placeholder:font-[400] " +
                      (form.isMember === ""
                        ? "text-[#6F6D66] text-[12px]"
                        : "text-[#000] text-[16px]")
                    }
                  >
                    <option value="">Are You a Current Evolve Member?</option>
                    {isMemberOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#6F6D66]">
                    {isMemberFocused ? (
                      <img
                        src={arrowUp}
                        alt="Arrow Up"
                        width={20}
                        height={20}
                        style={{
                          filter:
                            form.isMember === "" ? "grayscale(1)" : "none",
                        }}
                      />
                    ) : (
                      <img
                        src={arrowDown}
                        alt="Arrow Down"
                        width={20}
                        height={20}
                        style={{
                          filter:
                            form.isMember === "" ? "grayscale(1)" : "none",
                        }}
                      />
                    )}
                  </span>
                </div>
                {errors.isMember && (
                  <span className="text-red-600 text-[12px]">
                    {errors.isMember}
                  </span>
                )}
              </label>
            </div>
            {/* About Yourself */}
            <div className="w-full flex flex-col">
              <label className="font-[500] text-[#000] flex flex-col gap-[2px] text-[16px] leading-[24px]">
                Tell Us About Yourself! *
                <textarea
                  name="about"
                  value={form.about}
                  onChange={handleChange}
                  placeholder="Tell us about yourself..."
                  rows={4}
                  className="mt-1 px-2 h-[40px] border border-[#D4D4D4] rounded-[4px] bg-[#FFFFFF] focus:border-[#4AB04A] focus:outline-none w-full placeholder:text-[#6F6D66] placeholder:text-[12px] !placeholder:font-[400] resize-vertical min-h-[80px]"
                />
                {errors.about && (
                  <span className="text-red-600 text-[12px]">
                    {errors.about}
                  </span>
                )}
              </label>
            </div>
            <Link to = "/">
          <button className="w-full btnPrimary  " onClick={onReturnHome}>
            RETURN TO HOMEPAGE
          </button>
          </Link>
          </form>
        )}
      </div>
    </div>
  );
}

export default YourFitnessFutureForm;
