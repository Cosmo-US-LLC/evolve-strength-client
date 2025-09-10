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
          { name: "location", value: form.location },
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
              className="object-cover w-full h-[616px]"
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

              {/* Location dropdown (city label -> address value) */}
              <div className="w-full flex flex-col">
                <label className="font-[500] text-[#000] flex flex-col gap-[2px] text-[16px] leading-[24px]">
                  Location *
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
