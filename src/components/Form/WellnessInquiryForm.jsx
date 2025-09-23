import React, { useState } from "react";
import { Link } from "react-router-dom";
import MetaTags from "@/components/Metatags/Meta";
import FormsHeader from "../ui/FormsHeader";
import SuccessFullScreen from "../ui/SuccessFullScreen";
import { ArrowLeft } from "lucide-react";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  location: "",
  wellnessService: "",
  otherWellnessService: "",
  message: "",
};

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

const wellnessServiceOptions = [
  "Massage Therapy",
  "Physiotherapy",
  "Chiropractic Care",
  "Acupuncture",
  "Esthetician Services",
  "Dietitian Services",
  "Osteopathy",
  "Laser Therapy",
  "Mental Health Services",
  "Other",
];

export default function WellnessInquiryForm() {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

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

    if (!form.location) {
      newErrors.location = "Please select a location";
    }

    if (!form.wellnessService) {
      newErrors.wellnessService = "Please select a wellness service";
    }

    if (form.wellnessService === "Other" && !form.otherWellnessService.trim()) {
      newErrors.otherWellnessService = "Please specify the wellness service";
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
            { name: "phone", value: form.phone },
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
              name: "which_wellness_service_are_you_interested_in_",
              value:
                form.wellnessService === "Other"
                  ? form.otherWellnessService
                  : form.wellnessService,
            },
            { name: "message", value: form.message },
          ],
          context: {
            pageUri: window.location.href,
            pageName: "Wellness Inquiry Form",
            ...(hutk && { hutk }),
            ...(userIP && { ipAddress: userIP }),
          },
        };

        const response = await fetch(
          "https://api.hsforms.com/submissions/v3/integration/submit/342148198/fe2bdba8-7fa5-4e84-858c-e625ed1f22e8",
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
        title="Join Evolve Wellness Network | Professional Wellness Services"
        description="Join our network of wellness professionals at Evolve Strength. Apply to provide your wellness services in our state-of-the-art facilities."
      />

      <FormsHeader />

      {submitted && (
        <SuccessFullScreen
          title="Thank you for your application!"
          description="We've received your wellness inquiry. Our team will review your application and reach out with next steps. Welcome to the Evolve wellness community."
          buttonText="BACK TO HOME"
          buttonLink="/"
          icon="check"
        />
      )}

      <div className="flex gap-12 px-4 pt-24 pb-12 flex-row max-w-[1280px] mx-auto justify-center">
        {/* Left Image - Wellness Session */}
        <div className="w-full max-w-[40%] flex-shrink-0 flex flex-col max-md:hidden">
          <div className="rounded-[8px] max-w-[500px] overflow-hidden bg-white relative">
            <img
              src="https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/wellness/YogaAndRecoveryRoom/wellness_form.webp"
              alt="Wellness Therapy Session"
              className="object-cover w-full h-[710px]"
            />
          </div>
        </div>

        {/* Right Form */}
        <div className="flex flex-col gap-3 w-full md:max-w-[40%] overflow-hidden">
          <div className="">
            <Link
              to="/wellness"
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
              <h3 className="mt-[4px] font-bold text-xl">
                FIND A WELLNESS EXPERT
              </h3>
              <p className="text-[18px] leading-[19px] !font-[Kanit] font-[400]">
                <span className="text-[#2DDE28] text-[18px] leading-[19px] font-[400]">
                  Get matched with your perfect wellness expert
                </span>{" "}
                based on your needs and preferences
              </p>
            </div>

            <form
              className="p-5 flex flex-col gap-3"
              onSubmit={handleSubmit}
              noValidate
            >
              <div className="flex flex-row gap-4">
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
                  <option value="">Select a location</option>
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

              <div className="w-full">
                <label
                  htmlFor="wellnessService"
                  className="block form-label mb-1"
                >
                  Which wellness service are you interested in? *
                </label>
                <select
                  id="wellnessService"
                  name="wellnessService"
                  value={form.wellnessService}
                  onChange={handleChange}
                  className={`w-full px-3 h-[40px] flex items-center justify-center form-placeholder border rounded-[5px] ${
                    errors.wellnessService
                      ? "border-red-500"
                      : "border-[#D4D4D4]"
                  } ${
                    form.wellnessService === ""
                      ? "text-[#6F6D66] text-[12px]"
                      : "text-[#000] text-[16px]"
                  }`}
                  disabled={isSubmitting}
                >
                  <option value="">Select a wellness service</option>
                  {wellnessServiceOptions.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
                {errors.wellnessService && (
                  <p className="input-error mt-1">{errors.wellnessService}</p>
                )}
              </div>

              {/* Other Wellness Service field - shows only when "Other" is selected */}
              {form.wellnessService === "Other" && (
                <div className="w-full">
                  <label
                    htmlFor="otherWellnessService"
                    className="block form-label mb-1"
                  >
                    Other: *
                  </label>
                  <input
                    type="text"
                    id="otherWellnessService"
                    name="otherWellnessService"
                    value={form.otherWellnessService}
                    onChange={handleChange}
                    placeholder="Please specify your wellness service"
                    className={`w-full px-3 h-[40px] flex items-center justify-center form-placeholder border rounded-[5px] ${
                      errors.otherWellnessService
                        ? "border-red-500"
                        : "border-[#D4D4D4]"
                    }`}
                    disabled={isSubmitting}
                  />
                  {errors.otherWellnessService && (
                    <p className="input-error mt-1">
                      {errors.otherWellnessService}
                    </p>
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
                  placeholder="Type your message here.."
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
                {isSubmitting ? "SUBMITTING..." : "FIND WELLNESS EXPERT"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
