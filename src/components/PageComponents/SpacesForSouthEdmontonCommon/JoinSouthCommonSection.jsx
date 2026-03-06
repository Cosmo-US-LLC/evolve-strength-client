import React, { useState } from "react";
import { Link } from "react-router-dom";
import receptionImage from "../../../assets/images/SpacesCommon/spot_card_1.webp";

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

const LOCATIONS = ["South Edmonton Common"];

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function JoinSouthCommonSection() {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [bestTimeFocused, setBestTimeFocused] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!form.firstName.trim()) {
      newErrors.firstName = "First name is required";
    } else if (form.firstName.length > 50) {
      newErrors.firstName = "First name must be less than 50 characters";
    }

    if (!form.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    } else if (form.lastName.length > 50) {
      newErrors.lastName = "Last name must be less than 50 characters";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(form.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (!form.bestTime) {
      newErrors.bestTime = "Please select a preferred time";
    }

    if (!form.location) {
      newErrors.location = "Please select a location";
    }

    if (!form.message.trim()) {
      newErrors.message = "Message is required";
    } else if (form.message.length > 1000) {
      newErrors.message = "Message must be less than 1000 characters";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      try {
        const getCookie = (name) => {
          const value = `; ${document.cookie}`;
          const parts = value.split(`; ${name}=`);
          if (parts.length === 2) return parts.pop().split(";").shift();
          return null;
        };

        const hutk = getCookie("hubspotutk");

        const getUserIP = async () => {
          try {
            const response = await fetch("https://api.ipify.org?format=json");
            const data = await response.json();
            return data.ip;
          } catch (error) {
            console.warn("Could not fetch IP address:", error);
            return null;
          }
        };

        const userIP = await getUserIP();

        const formData = {
          fields: [
            { name: "firstname", value: form.firstName },
            { name: "lastname", value: form.lastName },
            { name: "email", value: form.email },
            { name: "mobilephone", value: form.phone },
            { name: "best_time_to_call_you__cloned_", value: form.bestTime },
            {
              name: "location",
              value: form.location
                ? `South Edmonton Common - ${form.location}`
                : "",
            },
            {
              name: "could_you_share_the_purpose_of_using_the_office_",
              value: "South Edmonton Common leasing inquiry",
            },
            { name: "message", value: form.message },
          ],
          context: {
            pageUri: window.location.href,
            pageName: "South Common Leasing Inquiry",
            ...(hutk && { hutk }),
            ...(userIP && { ipAddress: userIP }),
          },
        };

        const response = await fetch(
          "https://api.hsforms.com/submissions/v3/integration/submit/342148198/1bb16ac9-687a-49b8-bdf2-5b7db19f2a55",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          },
        );

        if (!response.ok) {
          const text = await response.text().catch(() => "");
          console.error("HubSpot submission failed", response.status, text);
          throw new Error("Submission failed");
        }

        setSubmitted(true);
        setForm(initialState);
      } catch (error) {
        console.error("Form submission error:", error);
        alert("There was an error submitting your form. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <section
      className="relative w-full py-16 md:py-20 joinSouthCommonSection"
      data-node-id="14338:806"
    >
      <div className="w-full h-full max-w-[1280px] mx-auto px-4 md:px-8 flex items-center justify-end">
        <div className="relative w-full max-w-[500px] bg-[#FCFCFC] border border-[#D4D4D4] rounded-[10px] overflow-hidden h-full">
          <div className="bg-black text-white text-center py-4 px-6">
            <h3 className="font-medium text-[20px] uppercase">
              JOIN SOUTH COMMON
            </h3>
            <p className="mt-2 text-[16px] !font-[Kanit] leading-[19px]">
              <span className="text-[#2DDE28] font-normal">
                Over 120 professionals
              </span>{" "}
              have applied. Only a few spots left this month
            </p>
          </div>

          <form
            className="p-6 flex flex-col gap-4 bg-[#FCFCFC]"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label htmlFor="firstName" className="block form-label mb-1">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  maxLength={50}
                  className={`w-full px-3 h-[40px] form-placeholder border rounded-[5px] ${
                    errors.firstName ? "border-red-500" : "border-[#D4D4D4]"
                  }`}
                  disabled={isSubmitting}
                />
                {errors.firstName && (
                  <p className="input-error mt-1">{errors.firstName}</p>
                )}
              </div>
              <div className="flex-1">
                <label htmlFor="lastName" className="block form-label mb-1">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  maxLength={50}
                  className={`w-full px-3 h-[40px] form-placeholder border rounded-[5px] ${
                    errors.lastName ? "border-red-500" : "border-[#D4D4D4]"
                  }`}
                  disabled={isSubmitting}
                />
                {errors.lastName && (
                  <p className="input-error mt-1">{errors.lastName}</p>
                )}
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label htmlFor="email" className="block form-label mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className={`w-full px-3 h-[40px] form-placeholder border rounded-[5px] ${
                    errors.email ? "border-red-500" : "border-[#D4D4D4]"
                  }`}
                  disabled={isSubmitting}
                />
                {errors.email && (
                  <p className="input-error mt-1">{errors.email}</p>
                )}
              </div>
              <div className="flex-1">
                <label htmlFor="phone" className="block form-label mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className={`w-full px-3 h-[40px] form-placeholder border rounded-[5px] ${
                    errors.phone ? "border-red-500" : "border-[#D4D4D4]"
                  }`}
                  disabled={isSubmitting}
                />
                {errors.phone && (
                  <p className="input-error mt-1">{errors.phone}</p>
                )}
              </div>
            </div>

            <div className="w-full">
              <label htmlFor="bestTime" className="block form-label mb-1">
                Best Time to call you *
              </label>
              <select
                id="bestTime"
                name="bestTime"
                value={form.bestTime}
                onChange={handleChange}
                onFocus={() => setBestTimeFocused(true)}
                onBlur={() => setBestTimeFocused(false)}
                className={`appearance-none w-full px-3 h-[40px] form-placeholder border rounded-[5px] ${
                  errors.bestTime ? "border-red-500" : "border-[#D4D4D4]"
                } ${
                  form.bestTime === ""
                    ? "text-[#6F6D66] text-[12px]"
                    : "text-[#000] text-[16px]"
                }`}
                disabled={isSubmitting}
              >
                <option value="">Select the best time to call you</option>
                {bestTimeOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
              {errors.bestTime && (
                <p className="input-error mt-1">{errors.bestTime}</p>
              )}
            </div>

            <div className="w-full">
              <label htmlFor="location" className="block form-label mb-1">
                Select a Location *
              </label>
              <select
                id="location"
                name="location"
                value={form.location}
                onChange={handleChange}
                className={`w-full px-3 h-[40px] form-placeholder border rounded-[5px] ${
                  errors.location ? "border-red-500" : "border-[#D4D4D4]"
                } ${
                  form.location === ""
                    ? "text-[#6F6D66] text-[12px]"
                    : "text-[#000] text-[16px]"
                }`}
                disabled={isSubmitting}
              >
                <option value="">Select a location</option>
                {LOCATIONS.map((loc) => (
                  <option key={loc} value={loc}>
                    {loc}
                  </option>
                ))}
              </select>
              {errors.location && (
                <p className="input-error mt-1">{errors.location}</p>
              )}
            </div>

            <div className="w-full">
              <label htmlFor="message" className="block form-label mb-1">
                Write Your Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Type your message here..."
                rows={4}
                maxLength={1000}
                className={`w-full px-3 py-2 form-placeholder border rounded-[5px] resize-vertical min-h-[80px] ${
                  errors.message ? "border-red-500" : "border-[#D4D4D4]"
                }`}
                disabled={isSubmitting}
              />
              {errors.message && (
                <p className="input-error mt-1">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full mt-2 btnPrimary"
              disabled={isSubmitting}
            >
              {isSubmitting ? "SUBMITTING..." : "SUBMIT NOW"}
            </button>

            {submitted && (
              <p className="mt-2 text-sm text-green-600">
                Thank you for your inquiry. We will be in touch shortly.
              </p>
            )}
          </form>

          <div className="px-6 pb-4 text-center text-[16px] text-black !font-[Kanit]">
            Limited suites are available
          </div>
        </div>
      </div>
    </section>
  );
}

export default JoinSouthCommonSection;
