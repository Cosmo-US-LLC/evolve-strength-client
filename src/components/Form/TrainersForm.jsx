import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import MetaTags from "@/components/Metatags/Meta";
import FormsHeader from "../ui/FormsHeader";
import SuccessFullScreen from "../ui/SuccessFullScreen";
import trainerImage from "@/assets/images/form/trainer-form.webp";

function TrainerForm() {
  const turnstileRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();

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

  useEffect(() => {
    const existingScript = document.querySelector(
      'script[src="https://challenges.cloudflare.com/turnstile/v0/api.js"]'
    );

    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
      script.async = true;
      script.defer = true;
      script.onload = () => setIsLoaded(true);
      document.body.appendChild(script);
    } else {
      setIsLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (isLoaded && window.turnstile && turnstileRef.current) {
      window.turnstile.render(turnstileRef.current, {
        sitekey: "1x00000000000000000000AA",
        theme: "light",
      });
    }
  }, [isLoaded]);

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
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      try {
        const formData = {
          fields: [
            { name: "firstname", value: form.firstName },
            { name: "lastname", value: form.lastName },
            { name: "email", value: form.email },
            { name: "phone", value: form.phone },
            { name: "location", value: form.location },
            { name: "about_yourself", value: form.about },
          ],
          context: {
            pageUri: window.location.href,
            pageName: "Trainer Form",
          },
        };

        const response = await fetch(
          "https://api.hsforms.com/submissions/v3/integration/submit/342148198/2df02615-f490-435e-abb4-a44270f455a5",
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
          alert("There was an error submitting your form. Please try again.");
        }
      } catch (error) {
        console.error("Form submission error:", error);
        alert("There was an error submitting your form. Please try again.");
      }
    }
  };

  return (
    <>
      <MetaTags
        title="Join as Trainer | Evolve Strength"
        description="Ready to join our team? Fill out the trainer application form to start your journey with Evolve Strength."
      />

      {/* Form Header */}
      <FormsHeader />

      {/* Success Screen Full Screen Overlay */}
      {submitted && (
        <SuccessFullScreen
          title="JOIN OUR TEAM"
          description="Thank you for your trainer application! We've received your information and our team will be in touch with you soon to discuss the next steps in your Evolve Strength journey."
          buttonText="BACK TO HOME"
          buttonLink="/"
          icon="check"
        />
      )}

      <div className="flex gap-12 md:p-6 p-4 flex-row max-w-[1280px] mx-auto justify-center min-h-screen">
        {/* Left Image */}
        <div className="w-full max-w-[40%] flex-shrink-0 flex flex-col max-md:hidden">
          <div className="rounded-[8px] max-w-[500px] overflow-hidden bg-white">
            <img
              src={trainerImage}
              alt="Trainer at Gym"
              className="object-cover w-full h-[610px]"
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

              <div className="w-full flex flex-col">
                <label className="font-[500] text-[#000] flex flex-col gap-[2px] text-[16px] leading-[24px]">
                  Location *
                  <input
                    type="text"
                    name="location"
                    value={form.location}
                    onChange={handleChange}
                    placeholder="Select your location"
                    className="px-2 h-[40px] border border-[#D4D4D4] rounded-[4px] bg-[#FFFFFF] focus:border-[#4AB04A] focus:outline-none w-full placeholder:text-[#6F6D66] placeholder:text-[12px] !placeholder:font-[400]"
                  />
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

              <div className="w-full flex flex-col">
                <div ref={turnstileRef} className="cf-turnstile"></div>
              </div>

              <button type="submit" className="w-full mt-2 btnPrimary">
                SUBMIT NOW
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default TrainerForm;
