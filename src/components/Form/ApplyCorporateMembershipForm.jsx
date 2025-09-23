import React, { useState } from "react";
import locationImg from "../../assets/images/form/spaces-form.webp";
import { ArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import SuccessFullScreen from "../ui/SuccessFullScreen"; // added
import FormsHeader from "../ui/FormsHeader"; // added

function ApplyCorporateMembershipForm({ onSubmit }) {
  // === HubSpot constants (replace GUID if you have a separate corporate form) ===
  const HUBSPOT_PORTAL_ID = "342148198";
  const HUBSPOT_FORM_GUID = "a51560aa-fb0b-4ba7-a013-70b2dc550b85"; // <- replace if needed
  // ============================================================================

  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    organization: "",
    email: "",
    confirmEmail: "",
    phone: "", // Added phone field
    city: "",
    province: "",
    questions: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false); // existing
  const [submitted, setSubmitted] = useState(false); // added

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!form.firstName) newErrors.firstName = "Required";
    if (!form.lastName) newErrors.lastName = "Required";
    if (!form.organization) newErrors.organization = "Required";
    if (!form.email) newErrors.email = "Required";
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email))
      newErrors.email = "Invalid email";
    if (!form.confirmEmail) newErrors.confirmEmail = "Required";
    else if (form.email !== form.confirmEmail)
      newErrors.confirmEmail = "Emails do not match";
    if (!form.city) newErrors.city = "Required";
    if (!form.province) newErrors.province = "Required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
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
          { name: "phone", value: "" }, // Submit empty phone to HubSpot
          { name: "company", value: form.organization },
          { name: "state", value: form.province },
          { name: "city", value: form.city },
          { name: "tell_us_about_yourself", value: form.questions },
        ],
        context: {
          pageUri: window.location.href,
          pageName: "Apply for a Corporate Membership",
          ...(hutk && { hutk }),
          ...(userIP && { ipAddress: userIP }),
        },
      };

      const res = await fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_GUID}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (!res.ok) {
        const text = await res.text().catch(() => "");
        console.error("HubSpot submission failed", res.status, text);
        throw new Error("Submission failed");
      }

      // Call onSubmit if provided, otherwise just show success
      if (onSubmit && typeof onSubmit === "function") {
        onSubmit(form);
      }
      setSubmitted(true); // show success overlay

      // Reset form after successful submission
      setForm({
        firstName: "",
        lastName: "",
        organization: "",
        email: "",
        confirmEmail: "",
        phone: "",
        city: "",
        province: "",
        questions: "",
      });
      setErrors({});
    } catch (err) {
      console.error("HubSpot submission error", err);
      alert("There was an error submitting your form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Form Header */}
      <FormsHeader />

      {/* Success Screen Full Screen Overlay */}
      {submitted && (
        <div className="fixed inset-0 z-[9999] bg-white">
          <SuccessFullScreen
            title="Thank You for Reaching Out"
            description="We’re excited to help your organization take the next step toward better health and performance. A member of our team will contact you soon to discuss corporate membership options tailored to your needs."
            buttonText="BACK TO HOME"
            buttonLink="/"
            icon="check"
          />
        </div>
      )}

      <div className="flex gap-10 pt-24 pb-12 px-4 md:px-6 flex-row max-w-[1280px] mx-auto items-center w-full">
        {/* Left Image */}
        <div className="w-full max-w-[50%] flex-shrink-0 flex max-md:hidden">
          <div className="rounded-[8px] overflow-hidden bg-white">
            <img
              src={locationImg}
              alt="Evolve Strength Facility"
              className="object-cover w-full h-[740px]"
            />
          </div>
        </div>
        {/* Right Form */}
        <div className="flex flex-col md:items-start  justify-between w-full md:max-w-[50%]">
          {/* <button
            className="flex items-center md:pt-5 gap-2 text-[#222] text-[15px] hover:underline"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft size={20} /> Back
          </button> */}
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="self-start md:pt-5 cursor-pointer flex items-center gap-2 text-black hover:text-gray-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black rounded-full"
            aria-label="Go back"
          >
            <div className="w-8 h-8 rounded-full border border-black hover:text-[#fff] hover:bg-[#000] flex  items-center justify-center">
              <ArrowLeft className="w-4 h-4" />
            </div>
            <span className="font-medium">Back</span>
          </button>
          <div className="w-full md:max-w-[537px] bg-white rounded-[10px] p-3">
            <div className="w-full">
              <h3 className="!text-[18px] md:text-[22px] font-[700] text-center mb-2 uppercase">
                Apply For A New Corporate Membership
              </h3>
            </div>
            <div className="w-full">
              <h4 className="text-[15px] font-[400] text-center mb-5 text-[#222]">
                Fill out the form below to start the process of bringing Evolve
                to your workplace! We'll be in touch shortly.
              </h4>
            </div>
            <div className="w-full self-stretch gap-[12px] p-[32px_24px] rounded-[10px] border border-[#D4D4D4] bg-[#FCFCFC]">
              <form
                className="flex flex-col gap-3"
                onSubmit={handleSubmit}
                noValidate
              >
                <div className="flex flex-row gap-4">
                  <div className="flex-1 flex flex-col">
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
                <label htmlFor="organization" className="block form-label mb-1">
                  Organization *
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  value={form.organization}
                  onChange={handleChange}
                  placeholder="Acme Corporation"
                  className={`w-full px-3 h-[40px] flex items-center justify-center form-placeholder border rounded-[5px] ${
                    errors.organization ? "border-red-500" : "border-[#D4D4D4]"
                  }`}
                />
                {errors.organization && (
                  <p className="input-error mt-1">{errors.organization}</p>
                )}
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
                      placeholder="john.doe@company.com"
                      className={`w-full px-3 h-[40px] flex items-center justify-center form-placeholder border rounded-[5px] ${
                        errors.email ? "border-red-500" : "border-[#D4D4D4]"
                      }`}
                    />
                    {errors.email && (
                      <p className="input-error mt-1">{errors.email}</p>
                    )}
                  </div>
                  <div className="flex-1 flex flex-col">
                    <label
                      htmlFor="confirmEmail"
                      className="block form-label mb-1"
                    >
                      Confirm Email *
                    </label>
                    <input
                      type="email"
                      id="confirmEmail"
                      name="confirmEmail"
                      value={form.confirmEmail}
                      onChange={handleChange}
                      placeholder="john.doe@company.com"
                      className={`w-full px-3 h-[40px] flex items-center justify-center form-placeholder border rounded-[5px] ${
                        errors.confirmEmail
                          ? "border-red-500"
                          : "border-[#D4D4D4]"
                      }`}
                    />
                    {errors.confirmEmail && (
                      <p className="input-error mt-1">{errors.confirmEmail}</p>
                    )}
                  </div>
                </div>
                <div className="flex flex-row gap-4">
                  <div className="flex-1 flex flex-col">
                    <label htmlFor="city" className="block form-label mb-1">
                      City *
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={form.city}
                      onChange={handleChange}
                      placeholder="Toronto"
                      className={`w-full px-3 h-[40px] flex items-center justify-center form-placeholder border rounded-[5px] ${
                        errors.city ? "border-red-500" : "border-[#D4D4D4]"
                      }`}
                    />
                    {errors.city && (
                      <p className="input-error mt-1">{errors.city}</p>
                    )}
                  </div>
                  <div className="flex-1 flex flex-col">
                    <label htmlFor="province" className="block form-label mb-1">
                      Province *
                    </label>
                    <input
                      type="text"
                      id="province"
                      name="province"
                      value={form.province}
                      onChange={handleChange}
                      placeholder="Ontario"
                      className={`w-full px-3 h-[40px] flex items-center justify-center form-placeholder border rounded-[5px] ${
                        errors.province ? "border-red-500" : "border-[#D4D4D4]"
                      }`}
                    />
                    {errors.province && (
                      <p className="input-error mt-1">{errors.province}</p>
                    )}
                  </div>
                </div>
                <label htmlFor="questions" className="block form-label mb-1">
                  Questions
                </label>
                <textarea
                  id="questions"
                  name="questions"
                  value={form.questions}
                  onChange={handleChange}
                  placeholder="We're interested in corporate membership for our 50+ employees. What packages do you offer and what are the pricing options?"
                  rows={3}
                  className="w-full px-3 py-2 form-placeholder border rounded-[5px] resize-none"
                />

                <button
                  type="submit"
                  className="mt-2 btnPrimary w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "SUBMIT NOW"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ApplyCorporateMembershipForm;
