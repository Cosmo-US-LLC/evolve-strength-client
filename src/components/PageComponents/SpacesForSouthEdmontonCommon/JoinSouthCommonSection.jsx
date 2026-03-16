import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SuccessFullScreen from "../../ui/SuccessFullScreen";
import { ChevronDown } from "lucide-react";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  bestTime: "",
  location: "",
  purposeOfUse: "",
  otherPurpose: "",
  message: "",
};

const bestTimeOptions = ["Morning", "Afternoon", "Evening"];

const purposeOfUseOptions = [
  "Esthetician",
  "Chiropractic Care",
  "Massage Therapy",
  "Physiotherapy",
  "Acupuncture",
  "Dietitian Services",
  "Osteopathy",
  "Laser Therapy",
  "Mental Health",
  "Other",
];

// Contact-Us style locations list (label = cityName, value = full address)
const LOCATIONS = [
  {
    cityName: "South Edmonton Common",
    location: "1910 102 STREET NW, EDMONTON, AB T6N 1N3",
  },
  {
    cityName: "Edmonton Downtown",
    location: "12328 102 ave nw Edmonton, Alberta, T5N 0L9",
  },
  {
    cityName: "Edmonton North",
    location: "13457 149 St Edmonton, Alberta, T5L 2T3",
  },
  {
    cityName: "Calgary Royal Oak",
    location: "8888 Country Hills Blvd NW #600 Calgary, Alberta, T3G 5T4",
  },
  {
    cityName: "Calgary Seton",
    location: "710-19587 Seton Crescent SE Calgary, Alberta, T3M 2T5",
  },
  {
    cityName: "Burnaby Brentwood",
    location: "1920 Willingdon Ave #3105 Burnaby, British Columbia, V5C 0K3",
  },
  {
    cityName: "Vancouver Post",
    location: "658 Homer St Vancouver, British Columbia, V6B 2R4",
  },
];

// Alias short names to full city names used in LOCATIONS
const LOCATION_ALIASES = {
  brentwood: "Burnaby Brentwood",
  post: "Vancouver Post",
  "calgary sunridge": "Calgary Sunridge",
};

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function JoinSouthCommonSection() {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [bestTimeOpen, setBestTimeOpen] = useState(false);
  const [locationOpen, setLocationOpen] = useState(false);
  const [purposeOpen, setPurposeOpen] = useState(false);
  const routerLocation = useLocation();
  const isSouthCommonPage =
    routerLocation.pathname === "/spaces-for-south-edmonton-common";
  const southCommonLocation = LOCATIONS.find(
    (loc) => loc.cityName === "South Edmonton Common",
  )?.location;
  const hideLocationArrow =
    isSouthCommonPage && form.location === southCommonLocation;

  // Auto-select location from query param: ?location=City%20Name
  useEffect(() => {
    try {
      const params = new URLSearchParams(routerLocation.search);
      const cityParam = params.get("location");
      if (!cityParam) return;
      const normalized = (s) => s.trim().toLowerCase();
      const target = normalized(cityParam);
      const aliasCity = LOCATION_ALIASES[target] || cityParam;
      const aliasTarget = normalized(aliasCity);

      // Try exact city name match first
      let matched = LOCATIONS.find(
        (loc) => normalized(loc.cityName) === aliasTarget,
      );

      // Fallback: loose contains match on city name
      if (!matched) {
        matched = LOCATIONS.find(
          (loc) =>
            normalized(loc.cityName).includes(aliasTarget) ||
            aliasTarget.includes(normalized(loc.cityName)),
        );
      }

      if (matched) {
        setForm((prev) => ({ ...prev, location: matched.location }));
      }
    } catch {
      // ignore parsing errors
    }
  }, [routerLocation.search]);

  // Fallback: on the South Common page, default to South Edmonton Common if nothing is selected
  useEffect(() => {
    if (isSouthCommonPage && !form.location) {
      const southCommon = LOCATIONS.find(
        (loc) => loc.cityName === "South Edmonton Common",
      );
      if (southCommon) {
        setForm((prev) => ({ ...prev, location: southCommon.location }));
      }
    }
  }, [isSouthCommonPage, form.location]);

  const handleChange = (e) => {
    const { name } = e.target;
    let { value } = e.target;

    // Restrict phone field to digits only
    if (name === "phone") {
      value = value.replace(/\D/g, "");
    }

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

    if (!form.purposeOfUse) {
      newErrors.purposeOfUse = "Please select a purpose of office use";
    }

    if (form.purposeOfUse === "Other" && !form.otherPurpose.trim()) {
      newErrors.otherPurpose = "Please specify the purpose of office use";
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
                ? `${
                    LOCATIONS.find((loc) => loc.location === form.location)
                      ?.cityName || form.location
                  } - ${form.location}`
                : "",
            },
            {
              name: "could_you_share_the_purpose_of_using_the_office_",
              value:
                form.purposeOfUse === "Other"
                  ? form.otherPurpose
                  : form.purposeOfUse,
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
          "https://api.hsforms.com/submissions/v3/integration/submit/342148198/cd0925f8-5782-4c15-b784-6691da248002",
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
      id="join-south-common-form"
      className="relative w-full py-16 md:py-20 joinSouthCommonSection"
      data-node-id="14338:806"
    >
      {submitted && (
        <SuccessFullScreen
          title="Thank you for your interest in Evolve."
          description="We’ve received your details. Our team will review them and reach out soon with the next steps. We’re excited to help you find the right space to grow your practice."
          buttonText="BACK TO HOME"
          buttonLink="/spaces-for-south-edmonton-common"
          icon="check"
          onButtonClick={() => setSubmitted(false)}
        />
      )}

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
            className="px-6 pt-6 pb-3 flex flex-col gap-4 bg-[#FCFCFC]"
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
                  placeholder="(345) 345-3453"
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
              <div className="relative w-full">
                <select
                  id="bestTime"
                  name="bestTime"
                  value={form.bestTime}
                  onChange={(e) => {
                    handleChange(e);
                    setBestTimeOpen(false);
                  }}
                  onClick={() => setBestTimeOpen((prev) => !prev)}
                  onBlur={() => setBestTimeOpen(false)}
                  className={`appearance-none w-full px-3 h-[40px] flex items-center justify-center form-placeholder border rounded-[5px] ${
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
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#6F6D66]">
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      bestTimeOpen ? "rotate-180" : ""
                    }`}
                  />
                </span>
              </div>
              {errors.bestTime && (
                <p className="input-error mt-1">{errors.bestTime}</p>
              )}
            </div>

            <div className="w-full">
              <label htmlFor="location" className="block form-label mb-1">
                Select a Location *
              </label>
              <div className="relative w-full">
                <select
                  id="location"
                  name="location"
                  value={form.location}
                  onChange={(e) => {
                    handleChange(e);
                    setLocationOpen(false);
                  }}
                  onClick={() => setLocationOpen((prev) => !prev)}
                  onBlur={() => setLocationOpen(false)}
                  className={`appearance-none w-full px-3 h-[40px] flex items-center justify-center form-placeholder border rounded-[5px] ${
                    errors.location ? "border-red-500" : "border-[#D4D4D4]"
                  } ${
                    form.location === ""
                      ? "text-[#6F6D66] text-[12px]"
                      : "text-[#000] text-[16px]"
                  }`}
                  disabled={isSubmitting || isSouthCommonPage}
                >
                  <option value="">Select a location</option>
                  {LOCATIONS.map((loc) => (
                    <option key={loc.cityName} value={loc.location}>
                      {loc.cityName}
                    </option>
                  ))}
                </select>
                {!hideLocationArrow && (
                  <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#6F6D66]">
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        locationOpen ? "rotate-180" : ""
                      }`}
                    />
                  </span>
                )}
              </div>
              {errors.location && (
                <p className="input-error mt-1">{errors.location}</p>
              )}
            </div>

            <div className="w-full">
              <label htmlFor="purposeOfUse" className="block form-label mb-1">
                Could you share the purpose of using the office? *
              </label>
              <div className="relative w-full">
                <select
                  id="purposeOfUse"
                  name="purposeOfUse"
                  value={form.purposeOfUse}
                  onChange={(e) => {
                    handleChange(e);
                    setPurposeOpen(false);
                  }}
                  onClick={() => setPurposeOpen((prev) => !prev)}
                  onBlur={() => setPurposeOpen(false)}
                  className={`appearance-none w-full px-3 h-[40px] flex items-center justify-center form-placeholder border rounded-[5px] ${
                    errors.purposeOfUse ? "border-red-500" : "border-[#D4D4D4]"
                  } ${
                    form.purposeOfUse === ""
                      ? "text-[#6F6D66] text-[12px]"
                      : "text-[#000] text-[16px]"
                  }`}
                  disabled={isSubmitting}
                >
                  <option value="">Select Purpose</option>
                  {purposeOfUseOptions.map((purpose) => (
                    <option key={purpose} value={purpose}>
                      {purpose}
                    </option>
                  ))}
                </select>
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#6F6D66]">
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      purposeOpen ? "rotate-180" : ""
                    }`}
                  />
                </span>
              </div>
              {errors.purposeOfUse && (
                <p className="input-error mt-1">{errors.purposeOfUse}</p>
              )}
            </div>

            {form.purposeOfUse === "Other" && (
              <div className="w-full">
                <label htmlFor="otherPurpose" className="block form-label mb-1">
                  Other: *
                </label>
                <input
                  type="text"
                  id="otherPurpose"
                  name="otherPurpose"
                  value={form.otherPurpose}
                  onChange={handleChange}
                  placeholder="Please specify your purpose"
                  className={`w-full px-3 h-[40px] flex items-center justify-center form-placeholder border rounded-[5px] ${
                    errors.otherPurpose ? "border-red-500" : "border-[#D4D4D4]"
                  }`}
                  disabled={isSubmitting}
                />
                {errors.otherPurpose && (
                  <p className="input-error mt-1">{errors.otherPurpose}</p>
                )}
              </div>
            )}

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
