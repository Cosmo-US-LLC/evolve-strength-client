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
  fitnessGoals: "",
  otherFitnessGoals: "",
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

const fitnessGoalsOptions = [
  "Weight Loss",
  "Strength Training",
  "Hypertrophy",
  "Powerlifting",
  "Olympic Weightlifting",
  "Sports Performance",
  "Athletic Conditioning",
  "Injury Rehab",
  "Pain Management",
  "Mobility and Flexibility",
  "Posture",
  "Technique and Movement",
  "Nutrition and Lifestyle",
  "Women's Health",
  "Prenatal and Postnatal",
  "General Fitness",
  "Beginners",
  "Seniors and Special Populations",
  "Functional Fitness",
  "HIIT and CrossFit",
  "Combat Sports",
  "Allied Health",
  "Other",
];

export default function MatchMeWithTrainer() {
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

    if (!form.fitnessGoals) {
      newErrors.fitnessGoals = "Please select your fitness goals";
    }

    if (form.fitnessGoals === "Other" && !form.otherFitnessGoals.trim()) {
      newErrors.otherFitnessGoals = "Please specify your fitness goals";
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
        // include HubSpot tracking cookie
        const hutk = document.cookie
          .split("; ")
          .find((c) => c.startsWith("hubspotutk="))
          ?.split("=")[1];

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
              name: "fitness_goals",
              value:
                form.fitnessGoals === "Other"
                  ? form.otherFitnessGoals
                  : form.fitnessGoals,
            },
            { name: "message", value: form.message },
          ],
          context: {
            pageUri: window.location.href,
            pageName: "Match Me With Trainer Form",
            ...(hutk ? { hutk } : {}),
          },
        };

        const response = await fetch(
          "https://api.hsforms.com/submissions/v3/integration/submit/342148198/320c6048-1749-4714-b0a5-f5ad108eb454",
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
        title="Find Your Perfect Personal Trainer | Evolve Strength"
        description="Get matched with the perfect personal trainer at Evolve Strength. Tell us your goals and we'll connect you with the right trainer for your fitness journey."
      />

      <FormsHeader />

      {submitted && (
        <SuccessFullScreen
          title="Thank you for your application!"
          description="We've received your trainer matching request. Our team will review your preferences and connect you with the perfect trainer within 24 hours. Let's start your fitness journey!"
          buttonText="BACK TO HOME"
          buttonLink="/"
          icon="check"
        />
      )}

      <div className="flex gap-12 px-4 pt-24 pb-12 flex-row max-w-[1280px] mx-auto justify-center">
        {/* Left Image - Personal Training Session */}
        <div className="w-full max-w-[40%] flex-shrink-0 flex flex-col max-md:hidden">
          <div className="rounded-[8px] max-w-[500px] overflow-hidden bg-white relative">
            <img
              src="https://tor1.digitaloceanspaces.com/evolve-strength/assets/images/wellness/WellnessJourneySteps/step_1.webp"
              alt="Personal Training Session"
              className="object-cover w-full h-[710px]"
            />
          </div>
        </div>

        {/* Right Form */}
        <div className="flex flex-col gap-3 w-full md:max-w-[40%] overflow-hidden">
          <div className="">
            <Link
              to="/personal-training"
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
              <h3 className="mt-[4px] font-bold text-xl">FIND YOUR TRAINER</h3>
              <p className="text-[18px] leading-[19px] !font-[Kanit] font-[400]">
                <span className="text-[#2DDE28] text-[18px] leading-[19px] font-[400]">
                  Over 200+ certified trainers
                </span>{" "}
                ready to help you achieve your goals
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
                <label htmlFor="fitnessGoals" className="block form-label mb-1">
                  What are your fitness goals? *
                </label>
                <select
                  id="fitnessGoals"
                  name="fitnessGoals"
                  value={form.fitnessGoals}
                  onChange={handleChange}
                  className={`w-full px-3 h-[40px] flex items-center justify-center form-placeholder border rounded-[5px] ${
                    errors.fitnessGoals ? "border-red-500" : "border-[#D4D4D4]"
                  } ${
                    form.fitnessGoals === ""
                      ? "text-[#6F6D66] text-[12px]"
                      : "text-[#000] text-[16px]"
                  }`}
                  disabled={isSubmitting}
                >
                  <option value="">Select your fitness goals</option>
                  {fitnessGoalsOptions.map((goal) => (
                    <option key={goal} value={goal}>
                      {goal}
                    </option>
                  ))}
                </select>
                {errors.fitnessGoals && (
                  <p className="input-error mt-1">{errors.fitnessGoals}</p>
                )}
              </div>

              {/* Other Fitness Goals field - shows only when "Other" is selected */}
              {form.fitnessGoals === "Other" && (
                <div className="w-full">
                  <label
                    htmlFor="otherFitnessGoals"
                    className="block form-label mb-1"
                  >
                    Other: *
                  </label>
                  <input
                    type="text"
                    id="otherFitnessGoals"
                    name="otherFitnessGoals"
                    value={form.otherFitnessGoals}
                    onChange={handleChange}
                    placeholder="Please specify your fitness goals"
                    className={`w-full px-3 h-[40px] flex items-center justify-center form-placeholder border rounded-[5px] ${
                      errors.otherFitnessGoals
                        ? "border-red-500"
                        : "border-[#D4D4D4]"
                    }`}
                    disabled={isSubmitting}
                  />
                  {errors.otherFitnessGoals && (
                    <p className="input-error mt-1">
                      {errors.otherFitnessGoals}
                    </p>
                  )}
                </div>
              )}

              <div className="w-full">
                <label htmlFor="message" className="block form-label mb-1">
                  Tell us more about yourself *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your fitness journey, any injuries, preferences, or specific requirements..."
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
                {isSubmitting ? "SUBMITTING..." : "FIND MY TRAINER"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
