import React, { useState } from "react";
import locationImg from "../../assets/images/form/spaces-form.webp";
import { ChevronDown, ChevronUp } from "lucide-react";
import arrowUp from "../../assets/images/form/arrow-down (2).svg";
import arrowDown from "../../assets/images/form/arrow-down (1).svg";
import { Link } from "react-router-dom";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  bestTime: "",
  location: "",
  message: "",
};

const bestTimeOptions = ["Morning", "Afternoon", "Evening"];
const locationOptions = ["Downtown", "North", "South", "East", "West"];

export default function EvolveSpacesForm({ onReturnHome }) {
  
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [locationFocused, setLocationFocused] = useState(false);
  const [bestTimeFocused, setBestTimeFocused] = useState(false);

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
    if (!form.bestTime) newErrors.bestTime = "Required";
    if (!form.location) newErrors.location = "Required";
    if (!form.message) newErrors.message = "Required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form submitted:", form);
      setSubmitted(true);
      // Submit logic here
    }
  };

  return (
    <div className="flex gap-12 md:p-6 p-4  flex-row max-w-[1280px] mx-auto justify-center items-center min-h-screen">
      {/* Left Image */}
      <div className="w-full max-w-[40%] flex-shrink-0 flex max-md:hidden ">
        <div className="rounded-[8px] max-w-[500px] overflow-hidden bg-white">
          <img
            src={locationImg}
            alt="Evolve Strength Location"
            className="object-cover w-full h-auto"
          />
        </div>
      </div>
      {/* Right Form */}
      <div className="bg-[#FCFCFC] rounded-[10px] border md:max-w-[40%] w-full p-0 overflow-hidden">
        <div className="bg-[#000] text-white text-center py-4 px-6">
          <h3 className="mt-[4px] ">JOIN THE WAITLIST</h3>
          <p className="text-[18px] leading-[19px] !font-[Kanit] font-[400]">
            <span className="text-[#2DDE28] text-[18px] leading-[19px] font-[400]">
              Over 120 professionals
            </span>{" "}
            have applied. Only a few spots left this month
          </p>
        </div>
        {submitted ? (
          <div className="text-[#4AB04A] text-lg text-center py-12">
            Thank you for joining the waitlist!
          </div>
        ) : (
          <form
            className="p-5 flex flex-col gap-3"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="flex flex-row gap-4">
              <div className="flex-1 flex flex-col">
                <label className="font-[500] text-[#000] flex flex-col gap-[2px] test-[16px] leading-[24px]">
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
                <label className="font-[500] text-[#000] flex flex-col gap-[2px] test-[16px] leading-[24px]">
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
                <label className="font-[500] text-[#000] flex flex-col gap-[2px] test-[16px] leading-[24px]">
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
                <label className="font-[500] text-[#000] flex flex-col gap-[2px] test-[16px] leading-[24px]">
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
            <div className="w-full flex flex-col">
              <label className="font-[500] text-[#000] flex flex-col gap-[2px] test-[16px] leading-[24px]">
                Best Time to call you *
                <div className="relative w-full">
                  <select
                    name="bestTime"
                    value={form.bestTime}
                    onChange={handleChange}
                    onFocus={() => setBestTimeFocused(true)}
                    onBlur={() => setBestTimeFocused(false)}
                    className={
                      "appearance-none mt-1 px-2 h-[40px] border border-[#D4D4D4] rounded-[4px] bg-[#FFFFFF] focus:border-[#4AB04A] focus:outline-none w-full placeholder:text-[#6F6D66] placeholder:text-[12px] !placeholder:font-[400] " +
                      (form.bestTime === ""
                        ? "text-[#6F6D66] text-[12px]"
                        : "text-[#000] text-[16px]")
                    }
                  >
                    <option value="">Select the best time to call you</option>
                    {bestTimeOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#6F6D66]">
                    {bestTimeFocused ? (
                      <img
                        src={arrowUp}
                        alt="Arrow Up"
                        width={20}
                        height={20}
                        style={{
                          filter:
                            form.bestTime === "" ? "grayscale(1)" : "none",
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
                            form.bestTime === "" ? "grayscale(1)" : "none",
                        }}
                      />
                    )}
                  </span>
                </div>
                {errors.bestTime && (
                  <span className="text-red-600 text-[12px]">
                    {errors.bestTime}
                  </span>
                )}
              </label>
            </div>
            <div className="w-full flex flex-col">
              <label className="font-[500] text-[#000] flex flex-col gap-[2px] test-[16px] leading-[24px]">
                Select a Location *
                <div className="relative w-full">
                  <select
                    name="location"
                    value={form.location}
                    onChange={handleChange}
                    onFocus={() => setLocationFocused(true)}
                    onBlur={() => setLocationFocused(false)}
                    className={
                      "appearance-none px-2 h-[40px] border border-[#D4D4D4] rounded-[4px] bg-[#FFFFFF] focus:border-[#4AB04A] focus:outline-none w-full placeholder:text-[#6F6D66] placeholder:text-[12px] !placeholder:font-[400] " +
                      (form.location === ""
                        ? "text-[#6F6D66] text-[12px]"
                        : "text-[#000] text-[16px]")
                    }
                  >
                    <option value="" disabled>
                      Select a location
                    </option>
                    {locationOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#6F6D66]">
                    {locationFocused ? (
                      <img
                        src={arrowUp}
                        alt="Arrow Up"
                        width={20}
                        height={20}
                      />
                    ) : (
                      <img
                        src={arrowDown}
                        alt="Arrow Down"
                        width={20}
                        height={20}
                      />
                    )}
                  </span>
                </div>
                {errors.location && (
                  <span className="text-red-600 text-[12px]">
                    {errors.location}
                  </span>
                )}
              </label>
            </div>
            <div className="w-full flex flex-col">
              <label className="font-[500] text-[#000] flex flex-col gap-[2px] test-[16px] leading-[24px]">
                Write Your Message *
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Type your message here..."
                  rows={4}
                  className="mt-1 px-2 h-[40px] border border-[#D4D4D4] rounded-[4px] bg-[#FFFFFF] focus:border-[#4AB04A] focus:outline-none w-full placeholder:text-[#6F6D66] placeholder:text-[12px] !placeholder:font-[400] resize-vertical min-h-[80px]"
                />
                {errors.message && (
                  <span className="text-red-600 text-[12px]s">
                    {errors.message}
                  </span>
                )}
              </label>
            </div>
            <Link to = "/">
                      <button className="w-full mt-2 btnPrimary  " onClick={onReturnHome}>
                        SUBMIT NOW
                      </button>
                      </Link>
          </form>
        )}
      </div>
    </div>
  );
}
