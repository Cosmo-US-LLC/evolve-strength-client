import React, { useState } from "react";
import locationImg from "../../assets/images/form/spaces-form.webp";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SuccessFullScreen from "../ui/SuccessFullScreen"; // added
import FormsHeader from "../ui/FormsHeader"; // added

function CheckMembershipForm({ onBack, onCheckMembership }) {
  // === HubSpot constants ===
  const HUBSPOT_PORTAL_ID = "342148198";
  const HUBSPOT_FORM_GUID = "295803bd-f0d9-4910-bf27-ed7ab63a8ed2";
  // =========================

  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    organization: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false); // added
  const [submitted, setSubmitted] = useState(false); // added

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!form.firstName) newErrors.firstName = "Required";
    if (!form.lastName) newErrors.lastName = "Required";
    if (!form.email) newErrors.email = "Required";
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email))
      newErrors.email = "Invalid email";
    if (!form.organization) newErrors.organization = "Required";
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

      // HubSpot submission (same pattern)
      const hutk = document.cookie
        .split("; ")
        .find((c) => c.startsWith("hubspotutk="))
        ?.split("=")[1];

      const formData = {
        fields: [
          { name: "firstname", value: form.firstName },
          { name: "lastname", value: form.lastName },
          { name: "email", value: form.email },
          { name: "company", value: form.organization }, // map organization -> company
        ],
        context: {
          pageUri: window.location.href,
          pageName: "Check for Membership",
          ...(hutk ? { hutk } : {}),
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
        return;
      }

      // Success: show overlay first, then defer parent callback
      setSubmitted(true);
      setTimeout(() => {
        onCheckMembership(form);
      }, 0);
    } catch (err) {
      console.error("HubSpot submission error", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Header (same as previous form) */}

      <FormsHeader />

      {/* Success overlay with high z-index (same as previous form) */}
      {submitted && (
        <div className="fixed inset-0 z-[9999]">
          <SuccessFullScreen
            title="Thank You for Reaching Out"
            description="We’re excited to help your organization take the next step toward better health and performance. A member of our team will contact you soon to discuss corporate membership options tailored to your needs."
            buttonText="BACK TO HOME"
            buttonLink="/"
            icon="check"
          />
        </div>
      )}

      <div className="flex px-4 md:px-8 pt-24 pb-12 flex-row max-w-[1280px] mx-auto">
        {/* Left Image */}
        <div className="w-full max-w-[50%]  flex max-md:hidden">
          <div className="rounded-[8px] max-w-[500px] overflow-hidden bg-white">
            <img
              src={locationImg}
              alt="Evolve Strength Facility"
              className="object-cover w-full h-[630px]"
            />
          </div>
        </div>
        {/* Right Form */}
        <div className="flex flex-col md:w-[50%] w-full">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="self-start mb-4 cursor-pointer flex items-center gap-2 text-black hover:text-gray-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black rounded-full"
            aria-label="Go back"
          >
            <div className="w-8 h-8 rounded-full border border-black hover:text-[#fff] hover:bg-[#000] flex  items-center justify-center">
              <ArrowLeft className="w-4 h-4" />
            </div>
            <span className="font-medium">Back</span>
          </button>

          <div className="w-full md:max-w={[420px]} bg-white rounded-[10px] mt-10">
            <div className="md:pb-4  md:w-[537px] md:h-[26px]">
              <h3 className="md:text-center  leading-[26px]  md:mb-2">
                CHECK YOUR COMPANY MEMBERSHIP
              </h3>
            </div>
            <div className="md:pt-[16px] md:pb-[40px] text-center j md:leading-[19px] md:w-[537px] md:h-[26px]">
              <h4>
                Enter your details to see if your organization is already
                enrolled with Evolve.
              </h4>
            </div>
            <div className="md:w-[537px] w-full md:h-auto rounded-[10px] bg-[#FCFCFC] border p-6 mt-6">
              <form
                className="flex flex-col  gap-3"
                onSubmit={handleSubmit}
                noValidate
              >
                <div className="flex flex-row gap-4">
                  <div className="flex-1 flex flex-col ">
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
                <div className="flex flex-col ">
                  <label htmlFor="email" className="block form-label mb-1">
                    Company Email *
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
                  <label
                    htmlFor="organization"
                    className="block form-label mb-1 mt-4"
                  >
                    Organization Name *
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    value={form.organization}
                    onChange={handleChange}
                    placeholder="Acme Corporation"
                    className={`w-full px-3 h-[40px] flex items-center justify-center form-placeholder border rounded-[5px] ${
                      errors.organization
                        ? "border-red-500"
                        : "border-[#D4D4D4]"
                    }`}
                  />
                  {errors.organization && (
                    <p className="input-error mt-1">{errors.organization}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="mt-2 btnPrimary w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "CHECK MEMBERSHIP"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckMembershipForm;
