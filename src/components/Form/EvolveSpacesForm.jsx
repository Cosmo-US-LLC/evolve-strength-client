import React, { useState } from "react";
import locationImg from "../../assets/images/form/spaces-form.webp";
import arrowUp from "../../assets/images/form/arrow-down (2).svg";
import arrowDown from "../../assets/images/form/arrow-down (1).svg";
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
  bestTime: "",
  location: "",
  message: "",
};

const bestTimeOptions = ["Morning", "Afternoon", "Evening"];

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
    cityName: "Calgary Sunridge",
    location: "2985 23 Ave NE Unit#125 Calgary, Alberta, T1Y 7L3",
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

export default function EvolveSpacesForm() {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [bestTimeFocused, setBestTimeFocused] = useState(false);
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
            { name: "mobilephone", value: form.phone },
            { name: "best_time_to_call_you__cloned_", value: form.bestTime },
            { name: "location", value: form.location },
            { name: "message", value: form.message },
          ],
          context: {
            pageUri: window.location.href,
            pageName: "Spaces Form",
            ...(hutk ? { hutk } : {}),
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
          description="We’ve received your application. Our team will review it shortly and reach out with next steps. Welcome to the movement—your journey with Evolve starts here."
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
              className="object-cover w-full h-[680px]"
            />
          </div>
        </div>
        {/* Right Form */}
        <div className="flex flex-col gap-3 w-full md:max-w-[40%] overflow-hidden">
          <div className="">
            <Link
              to="/spaces"
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
              <p className="text-[18px] leading-[19px] !font-[Kanit] font-[400]">
                <span className="text-[#2DDE28] text-[18px] leading-[19px] font-[400]">
                  Over 120 professionals
                </span>{" "}
                have applied. Only a few spots left this month
              </p>
            </div>
            {
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
                        maxLength={50}
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
                        maxLength={50}
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
                <div className="w-full flex flex-col">
                  <label className="font-[500] text-[#000] flex flex-col gap-[2px] text-[16px] leading-[24px]">
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
                        <option value="">
                          Select the best time to call you
                        </option>
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

                {/* Location dropdown replaced with Contact-Us style (label: city, value: address) */}
                <div className="w-full flex flex-col">
                  <label className="font-[500] text-[#000] flex flex-col gap-[2px] text-[16px] leading-[24px]">
                    Select a Location *
                    <select
                      name="location"
                      value={form.location}
                      onChange={handleChange}
                      className={
                        "mt-1 px-2 h-[40px] border border-[#D4D4D4] rounded-[4px] bg-[#FFFFFF] focus:border-[#4AB04A] focus:outline-none w-full " +
                        (form.location === ""
                          ? "text-[#6F6D66] text-[12px]"
                          : "text-[#000] text-[16px]")
                      }
                    >
                      <option value="">Select Location</option>
                      {LOCATIONS.map((loc) => (
                        <option key={loc.cityName} value={loc.location}>
                          {loc.cityName}
                        </option>
                      ))}
                    </select>
                    {errors.location && (
                      <span className="text-red-600 text-[12px]">
                        {errors.location}
                      </span>
                    )}
                  </label>
                </div>

                <div className="w-full flex flex-col">
                  <label className="font-[500] text-[#000] flex flex-col gap-[2px] text-[16px] leading-[24px]">
                    Write Your Message *
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Type your message here..."
                      rows={4}
                      maxLength={1000}
                      className="mt-1 px-2 h-[40px] border border-[#D4D4D4] rounded-[4px] bg-[#FFFFFF] focus:border-[#4AB04A] focus:outline-none w-full placeholder:text-[#6F6D66] placeholder:text-[12px] !placeholder:font-[400] resize-vertical min-h-[80px]"
                    />
                    {errors.message && (
                      <span className="text-red-600 text-[12px]">
                        {errors.message}
                      </span>
                    )}
                  </label>
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
