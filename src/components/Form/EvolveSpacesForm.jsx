import React, { useState, useEffect } from "react";
import locationImg from "../../assets/images/form/spaces-form.webp";
import arrowUp from "../../assets/images/form/arrow-down (2).svg";
import arrowDown from "../../assets/images/form/arrow-down (1).svg";
import { Link, useLocation } from "react-router-dom";
import MetaTags from "@/components/Metatags/Meta";
import FormsHeader from "../ui/FormsHeader";
import SuccessFullScreen from "../ui/SuccessFullScreen";
import { ArrowLeft } from "lucide-react";

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
    cityName: "Edmonton Downtown",
    location: "12328 102 ave nw Edmonton, Alberta, T5N 0L9",
  },
  {
    cityName: "Edmonton South",
    location: "4825 89 St NW Edmonton, Alberta, T6E 5K1",
  },
  {
    cityName: "Edmonton North",
    location: "13457 149 St Edmonton, Alberta, T5L 2T3",
  },
  {
    cityName: "Calgary Royal Oak",
    location: "8888 Country Hills Blvd NW #600 Calgary, Alberta, T3G 5T4",
  },
  // {
  //   cityName: "Calgary Sunridge",
  //   location: "2985 23 Ave NE Unit#125 Calgary, Alberta, T1Y 7L3",
  // },
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

export default function EvolveSpacesForm() {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [bestTimeFocused, setBestTimeFocused] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const routerLocation = useLocation();

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
        (loc) => normalized(loc.cityName) === aliasTarget
      );

      // Fallback: loose contains match on city name
      if (!matched) {
        matched = LOCATIONS.find(
          (loc) =>
            normalized(loc.cityName).includes(aliasTarget) ||
            aliasTarget.includes(normalized(loc.cityName))
        );
      }

      if (matched) {
        setForm((prev) => ({ ...prev, location: matched.location }));
      }
    } catch {
      // ignore parsing errors
    }
  }, [routerLocation.search]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
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
        // Get HubSpot tracking cookie and other tracking data
        const getCookie = (name) => {
          const value = `; ${document.cookie}`;
          const parts = value.split(`; ${name}=`);
          if (parts.length === 2) return parts.pop().split(";").shift();
          return null;
        };

        const hutk = getCookie("hubspotutk");

        // Get user's IP address (client-side approximation)
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
            pageName: "Spaces Form",
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
          }
        );

        if (!response.ok) {
          const text = await response.text().catch(() => "");
          console.error("HubSpot submission failed", response.status, text);
          throw new Error("Submission failed");
        }

        setSubmitted(true);
        setForm(initialState); // Reset form
      } catch (error) {
        console.error("Form submission error:", error);
        alert("There was an error submitting your form. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <>
      <MetaTags
        title="Lease Space at Evolve Strength | Apply for Gym or Clinic Space"
        description="Looking to lease space inside Evolve Strength? Fill out the form to apply for available space for your clinic, wellness service, or training business."
      />

      <FormsHeader />

      {submitted && (
        <SuccessFullScreen
          title="Congratulations, your spot is secured."
          description="We’ve received your application. Our team will review it shortly and reach out with next steps. Welcome to the movement - your journey with Evolve starts here."
          buttonText="BACK TO HOME"
          buttonLink="/"
          icon="check"
        />
      )}

      <div className="flex gap-12 px-4 pt-24 pb-12 flex-row max-w-[1280px] mx-auto justify-center ">
        {/* Left Image */}
        <div className="w-full max-w-[40%] flex-shrink-0 flex flex-col max-md:hidden">
          <div className="rounded-[8px] max-w-[500px] overflow-hidden bg-white">
            <img
              src={locationImg}
              alt="Evolve Strength Location"
              className="object-cover w-full h-[750px]"
            />
          </div>
        </div>
        {/* Right Form */}
        <div className="flex flex-col gap-3 w-full md:max-w-[40%] overflow-hidden">
          <div className="">
            <Link
              to="/work-spaces"
              className="flex items-center gap-2 text-black hover:text-gray-700 transition-colors"
            >
              <div className="w-8 h-8 rounded-full border border-black flex items-center justify-center">
                <ArrowLeft className="w-4 h-4" />
              </div>
              <span className="font-medium">Back</span>
            </Link>
          </div>
          <div className="bg-[#FCFCFC] rounded-[10px] border w-full overflow-hidden">
            <div className="bg-[#000] text-white text-center py-4 px-6">
              <h3 className="mt-[4px] ">JOIN THE WAITLIST</h3>
              {/* <p className="text-[18px] leading-[19px] !font-[Kanit] font-[400]">
                <span className="text-[#2DDE28] text-[18px] leading-[19px] font-[400]">
                  Over 120 professionals
                </span>{" "}
                have applied. Only a few spots left this month
              </p> */}
            </div>
            {
              <form
                className="p-5 flex flex-col gap-3"
                onSubmit={handleSubmit}
                noValidate
              >
                <div className="flex flex-row gap-4">
                  <div className="flex-1">
                    <label
                      htmlFor="firstName"
                      className="block form-label mb-1"
                    >
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={form.firstName}
                      onChange={handleChange}
                      placeholder="John"
                      maxLength={50}
                      className={`w-full px-3 h-[40px] flex items-center justify-center form-placeholder border rounded-[5px] ${
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
                      placeholder="Doe"
                      maxLength={50}
                      className={`w-full px-3 h-[40px] flex items-center justify-center form-placeholder border rounded-[5px] ${
                        errors.lastName ? "border-red-500" : "border-[#D4D4D4]"
                      }`}
                      disabled={isSubmitting}
                    />
                    {errors.lastName && (
                      <p className="input-error mt-1">{errors.lastName}</p>
                    )}
                  </div>
                </div>
                <div className="flex flex-row gap-4">
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
                      placeholder="john@example.com"
                      className={`w-full px-3 h-[40px] flex items-center justify-center form-placeholder border rounded-[5px] ${
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
                      placeholder="(555) 123-4567"
                      className={`w-full px-3 h-[40px] flex items-center justify-center form-placeholder border rounded-[5px] ${
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
                      onChange={handleChange}
                      onFocus={() => setBestTimeFocused(true)}
                      onBlur={() => setBestTimeFocused(false)}
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
                    <p className="input-error mt-1">{errors.bestTime}</p>
                  )}
                </div>

                {/* Location dropdown replaced with Contact-Us style (label: city, value: address) */}
                <div className="w-full">
                  <label htmlFor="location" className="block form-label mb-1">
                    Select a Location *
                  </label>
                  <select
                    id="location"
                    name="location"
                    value={form.location}
                    onChange={handleChange}
                    className={`w-full px-3 h-[40px] flex items-center justify-center form-placeholder border rounded-[5px] ${
                      errors.location ? "border-red-500" : "border-[#D4D4D4]"
                    } ${
                      form.location === ""
                        ? "text-[#6F6D66] text-[12px]"
                        : "text-[#000] text-[16px]"
                    }`}
                    disabled={isSubmitting}
                  >
                    <option value="">Select Location</option>
                    {LOCATIONS.map((loc) => (
                      <option key={loc.cityName} value={loc.location}>
                        {loc.cityName}
                      </option>
                    ))}
                  </select>
                  {errors.location && (
                    <p className="input-error mt-1">{errors.location}</p>
                  )}
                </div>

                {/* Purpose of Office Use dropdown */}
                <div className="w-full">
                  <label
                    htmlFor="purposeOfUse"
                    className="block form-label mb-1"
                  >
                    Could you share the purpose of using the office? *
                  </label>
                  <select
                    id="purposeOfUse"
                    name="purposeOfUse"
                    value={form.purposeOfUse}
                    onChange={handleChange}
                    className={`w-full px-3 h-[40px] flex items-center justify-center form-placeholder border rounded-[5px] ${
                      errors.purposeOfUse
                        ? "border-red-500"
                        : "border-[#D4D4D4]"
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
                  {errors.purposeOfUse && (
                    <p className="input-error mt-1">{errors.purposeOfUse}</p>
                  )}
                </div>

                {/* Other Purpose field - shows only when "Other" is selected */}
                {form.purposeOfUse === "Other" && (
                  <div className="w-full">
                    <label
                      htmlFor="otherPurpose"
                      className="block form-label mb-1"
                    >
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
                        errors.otherPurpose
                          ? "border-red-500"
                          : "border-[#D4D4D4]"
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
            }
          </div>
        </div>
      </div>
    </>
  );
}
