import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import MetaTags from "@/components/Metatags/Meta";
import FormsHeader from "../ui/FormsHeader";
import SuccessFullScreen from "../ui/SuccessFullScreen";
import trainerImage from "@/assets/images/form/trainer-form.webp";

function TrainerForm() {
  const navigate = useNavigate();

  // HubSpot constants
  const HUBSPOT_PORTAL_ID = "342148198";
  const HUBSPOT_FORM_GUID = "07e658c9-d49c-45ad-a1e9-09ce9ef52dd6";

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

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",
    yearsOfExperience: "",
    areasOfExpertise: "",
    otherAreasOfExpertise: "",
    about: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false); // added

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
    if (!form.location) newErrors.location = "Required";
    if (!form.yearsOfExperience) newErrors.yearsOfExperience = "Required";
    if (!form.areasOfExpertise) newErrors.areasOfExpertise = "Required";
    if (
      form.areasOfExpertise === "Other" &&
      !form.otherAreasOfExpertise.trim()
    ) {
      newErrors.otherAreasOfExpertise =
        "Please specify your areas of expertise";
    }
    if (!form.about) newErrors.about = "Required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return; // prevent double submit

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      const firstKey = Object.keys(validationErrors)[0];
      requestAnimationFrame(() => {
        document.querySelector(`[name="${firstKey}"]`)?.focus();
      });
      return;
    }

    try {
      setIsSubmitting(true);

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
          { name: "years_of_experience", value: form.yearsOfExperience },
          {
            name: "areas_of_expertise__select_all_that_apply_",
            value:
              form.areasOfExpertise === "Other"
                ? form.otherAreasOfExpertise
                : form.areasOfExpertise,
          },
          { name: "tell_us_about_yourself", value: form.about }, // fixed name
        ],
        context: {
          pageUri: window.location.href,
          pageName: "Join as Trainer",
          ...(hutk ? { hutk } : {}),
        },
      };

      const response = await fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_GUID}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setSubmitted(true);
      } else {
        const text = await response.text().catch(() => "");
        console.error("HubSpot submission failed", response.status, text);
        alert("There was an error submitting your form. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("There was an error submitting your form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <MetaTags
        title="Join as Trainer | Evolve Strength"
        description="Ready to join our team? Fill out the trainer application form to start your journey with Evolve Strength."
      />

      {/* Form Header */}

      {/* <FormsHeader /> */}

      {/* Success Screen Full Screen Overlay */}
      {submitted && (
        <div className="fixed inset-0 z-[9999]">
          <SuccessFullScreen
            title="JOIN OUR TEAM"
            description="Thank you for your trainer application! We've received your information and our team will be in touch with you soon to discuss the next steps in your Evolve Strength journey."
            buttonText="BACK TO HOME"
            buttonLink="/"
            icon="check"
          />
        </div>
      )}

      <div className="flex gap-12 md:p-6 p-4 flex-row max-w-[1280px] mx-auto justify-center min-h-screen mt-[80px]">
        <div className="fixed top-0 left-0 right-0 z-10">
          <FormsHeader />
        </div>
        {/* Left Image */}
        <div className="w-full max-w-[40%] flex-shrink-0 flex flex-col max-md:hidden">
          <div className="rounded-[8px] max-w-[500px] overflow-hidden bg-white">
            <img
              src={trainerImage}
              alt="Trainer at Gym"
              className="object-cover w-full h-[786px]"
            />
          </div>
        </div>

        {/* Right Form */}
        <div className="flex flex-col gap-3 w-full md:max-w-[40%] overflow-hidden">
          <div className="">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-black hover:text-gray-700 transition-colors"
            >
              <div className="w-8 h-8 rounded-full border border-black flex items-center justify-center">
                <ArrowLeft className="w-4 h-4" />
              </div>
              <span className="font-medium">Back</span>
            </button>
          </div>

          <div className="bg-[#FCFCFC] rounded-[10px] border w-full overflow-hidden">
            <div className="bg-[#000] text-white text-center py-4 px-6">
              <h3 className="mt-[4px]">JOIN OUR TEAM</h3>
              <p className="text-[18px] leading-[19px] !font-[Kanit] font-[400]">
                <span className="text-[#2DDE28] text-[18px] leading-[19px] font-[400]">
                  Become a trainer
                </span>{" "}
                and help others achieve their fitness goals
              </p>
            </div>

            <form
              className="p-5 flex flex-col gap-3"
              onSubmit={handleSubmit}
              noValidate
            >
              <div className="flex flex-row gap-4">
                <div className="flex-1 flex flex-col">
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
                    className={`w-full px-3 h-[40px] flex items-center justify-center form-placeholder border rounded-[5px] ${
                      errors.firstName ? "border-red-500" : "border-[#D4D4D4]"
                    }`}
                  />
                  {errors.firstName && (
                    <p className="input-error mt-1">{errors.firstName}</p>
                  )}
                </div>
                <div className="flex-1 flex flex-col">
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
                    className={`w-full px-3 h-[40px] flex items-center justify-center form-placeholder border rounded-[5px] ${
                      errors.lastName ? "border-red-500" : "border-[#D4D4D4]"
                    }`}
                  />
                  {errors.lastName && (
                    <p className="input-error mt-1">{errors.lastName}</p>
                  )}
                </div>
              </div>

              <div className="flex flex-row gap-4">
                <div className="flex-1 flex flex-col">
                  <label htmlFor="email" className="block form-label mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john.doe@email.com"
                    className={`w-full px-3 h-[40px] flex items-center justify-center form-placeholder border rounded-[5px] ${
                      errors.email ? "border-red-500" : "border-[#D4D4D4]"
                    }`}
                  />
                  {errors.email && (
                    <p className="input-error mt-1">{errors.email}</p>
                  )}
                </div>
                <div className="flex-1 flex flex-col">
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
                  />
                  {errors.phone && (
                    <p className="input-error mt-1">{errors.phone}</p>
                  )}
                </div>
              </div>

              {/* Location dropdown (city label -> address value) */}
              <div className="w-full flex flex-col">
                <label htmlFor="location" className="block form-label mb-1">
                  Location *
                </label>
                <select
                  id="location"
                  name="location"
                  value={form.location}
                  onChange={handleChange}
                  className={`w-full px-3 h-[40px] flex items-center justify-center form-placeholder border rounded-[5px] ${
                    errors.location ? "border-red-500" : "border-[#D4D4D4]"
                  }`}
                >
                  <option value="">Select your preferred location</option>
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

              {/* Years of Experience */}
              <div className="w-full flex flex-col">
                <label
                  htmlFor="yearsOfExperience"
                  className="block form-label mb-1"
                >
                  Years of Experience *
                </label>
                <select
                  id="yearsOfExperience"
                  name="yearsOfExperience"
                  value={form.yearsOfExperience}
                  onChange={handleChange}
                  className={`w-full px-3 h-[40px] flex items-center justify-center form-placeholder border rounded-[5px] ${
                    errors.yearsOfExperience
                      ? "border-red-500"
                      : "border-[#D4D4D4]"
                  }`}
                >
                  <option value="">Select your experience level</option>
                  <option value="0-1 years">0-1 years</option>
                  <option value="1-2 years">1-2 years</option>
                  <option value="2-3 years">2-3 years</option>
                  <option value="3-5 years">3-5 years</option>
                  <option value="5-10 years">5-10 years</option>
                  <option value="10+ years">10+ years</option>
                </select>
                {errors.yearsOfExperience && (
                  <p className="input-error mt-1">{errors.yearsOfExperience}</p>
                )}
              </div>

              {/* Areas of Expertise */}
              <div className="w-full flex flex-col">
                <label
                  htmlFor="areasOfExpertise"
                  className="block form-label mb-1"
                >
                  Areas of Expertise *
                </label>
                <select
                  id="areasOfExpertise"
                  name="areasOfExpertise"
                  value={form.areasOfExpertise}
                  onChange={handleChange}
                  className={`w-full px-3 h-[40px] flex items-center justify-center form-placeholder border rounded-[5px] ${
                    errors.areasOfExpertise
                      ? "border-red-500"
                      : "border-[#D4D4D4]"
                  }`}
                >
                  <option value="">Select your areas of expertise</option>
                  {[
                    "Strength Training",
                    "Cardio Training",
                    "Weight Loss",
                    "Muscle Building",
                    "Functional Training",
                    "Sports Performance",
                    "Rehabilitation",
                    "Nutrition Coaching",
                    "Group Fitness",
                    "Personal Training",
                    "Yoga/Pilates",
                    "CrossFit",
                    "Bodybuilding",
                    "Powerlifting",
                    "Olympic Lifting",
                    "HIIT Training",
                    "Senior Fitness",
                    "Youth Training",
                    "Other",
                  ].map((expertise) => (
                    <option key={expertise} value={expertise}>
                      {expertise}
                    </option>
                  ))}
                </select>
                {errors.areasOfExpertise && (
                  <p className="input-error mt-1">{errors.areasOfExpertise}</p>
                )}
              </div>

              {/* Other Areas of Expertise field - shows only when "Other" is selected */}
              {form.areasOfExpertise === "Other" && (
                <div className="w-full flex flex-col">
                  <label
                    htmlFor="otherAreasOfExpertise"
                    className="block form-label mb-1"
                  >
                    Other: *
                  </label>
                  <input
                    type="text"
                    id="otherAreasOfExpertise"
                    name="otherAreasOfExpertise"
                    value={form.otherAreasOfExpertise}
                    onChange={handleChange}
                    placeholder="e.g. Martial Arts, Dance, Swimming"
                    className={`w-full px-3 h-[40px] flex items-center justify-center form-placeholder border rounded-[5px] ${
                      errors.otherAreasOfExpertise
                        ? "border-red-500"
                        : "border-[#D4D4D4]"
                    }`}
                  />
                  {errors.otherAreasOfExpertise && (
                    <p className="input-error mt-1">
                      {errors.otherAreasOfExpertise}
                    </p>
                  )}
                </div>
              )}

              <div className="w-full flex flex-col">
                <label htmlFor="about" className="block form-label mb-1">
                  Tell Us About Yourself! *
                </label>
                <textarea
                  id="about"
                  name="about"
                  value={form.about}
                  onChange={handleChange}
                  placeholder="I have 5 years of experience in personal training and specialize in strength training and weight loss. I'm passionate about helping clients achieve their fitness goals..."
                  rows={4}
                  className={`w-full px-3 py-2 form-placeholder border rounded-[5px] resize-none ${
                    errors.about ? "border-red-500" : "border-[#D4D4D4]"
                  }`}
                />
                {errors.about && (
                  <p className="input-error mt-1">{errors.about}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full mt-2 btnPrimary"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "SUBMIT NOW"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default TrainerForm;
