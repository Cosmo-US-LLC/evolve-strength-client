import React, { useState } from "react";
import locationImg from "../../assets/images/form/spaces-form.webp";
import { ArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import SuccessFullScreen from "../ui/SuccessFullScreen"; // added
import FormsHeader from "../ui/FormsHeader"; // added

function ApplyCorporateMembershipForm({ onBack, onSubmit }) {
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

      const hutk = document.cookie
        .split("; ")
        .find((c) => c.startsWith("hubspotutk="))
        ?.split("=")[1];

      const formData = {
        fields: [
          { name: "firstname", value: form.firstName },
          { name: "lastname", value: form.lastName },
          { name: "email", value: form.email },
          { name: "company", value: form.organization },
          { name: "state", value: form.province },
          { name: "city", value: form.city },
          { name: "tell_us_about_yourself", value: form.questions },
        ],
        context: {
          pageUri: window.location.href,
          pageName: "Apply for a Corporate Membership",
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

      onSubmit(form);       // keep your callback
      setSubmitted(true);   // show success overlay
      // navigate("/application-submitted"); // not navigating so overlay is visible
    } catch (err) {
      console.error("HubSpot submission error", err);
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
  <div className="fixed inset-0 z-[9999]">
    <SuccessFullScreen
      title="APPLICATION SUBMITTED"
      description="Thanks! We've received your corporate membership application. Our team will contact you shortly to discuss the next steps."
      buttonText="BACK TO HOME"
      buttonLink="/"
      icon="trophy"
    />
  </div>
)}

      <div className="flex gap-12 md:p-6 p-4 flex-row max-w-[1280px] mx-auto items-center min-h-screen">
        {/* Left Image */}
        <div className="w-full max-w-[40%] flex-shrink-0 flex max-md:hidden">
          <div className="rounded-[8px] max-w-[500px] overflow-hidden bg-white">
            <img
              src={locationImg}
              alt="Evolve Strength Facility"
              className="object-cover w-full h-auto"
            />
          </div>
        </div>
        {/* Right Form */}
        <div className="flex flex-col md:items-end md:pl-20  md:h-[660px] justify-between w-full md:max-w-[10%]">
          <button
            className="flex items-center   md:pt-5 gap-2 text-[#222] text-[15px]  hover:underline"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft size={20} /> Back
          </button>
          <div className="w-full md:max-w-[420px] bg-white rounded-[10px]  p-3">
            <div className="md:w-[537px] w-full">
              <h3 className="!text-[18px] md:text-[22px] font-[700] text-center mb-2 ">
                APPLY FOR A CORPORATE MEMBERSHIP
              </h3>
            </div>
            <div className="md:w-[537px] w-full ">
              <h4 className="text-[15px] font-[400] text-center mb-5 text-[#222] ">
                Fill out the form below to start the process of bringing Evolve to
                your workplace! We'll be in touch shortly.
              </h4>
            </div>
            <div className="md:w-[537px] w-full  self-stretch gap-[12px] p-[32px_24px] rounded-[10px] border border-[#D4D4D4] bg-[#FCFCFC]">
              <form
                className="flex flex-col gap-3"
                onSubmit={handleSubmit}
                noValidate
              >
                <div className="flex  flex-row gap-4">
                  <div className="flex-1 flex md:flex-col">
                    <label className="font-[500] text-[#000] flex flex-col gap-[2px] text-[15px] leading-[24px]">
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
                    <label className="font-[500] text-[#000] flex flex-col gap-[2px] text-[15px] leading-[24px]">
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
                <label className="font-[500] text-[#000] flex flex-col gap-[2px] text-[15px] leading-[24px]">
                  Organization *
                  <input
                    type="text"
                    name="organization"
                    value={form.organization}
                    onChange={handleChange}
                    placeholder="Organization"
                    className="px-2 h-[40px] border border-[#D4D4D4] rounded-[4px] bg-[#FFFFFF] focus:border-[#4AB04A] focus:outline-none w-full placeholder:text-[#6F6D66] placeholder:text-[12px] !placeholder:font-[400]"
                  />
                  {errors.organization && (
                    <span className="text-red-600 text-[12px]">
                      {errors.organization}
                    </span>
                  )}
                </label>
                <div className="flex flex-row gap-4">
                  <div className="flex-1 flex flex-col">
                    <label className="font-[500] text-[#000] flex flex-col gap-[2px] text-[15px] leading-[24px]">
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
                  <div className="flex-1 flex md:flex-col">
                    <label className="font-[500] text-[#000] flex flex-col gap-[2px] text-[15px] leading-[24px]">
                      Confirm Email *
                      <input
                        type="email"
                        name="confirmEmail"
                        value={form.confirmEmail}
                        onChange={handleChange}
                        placeholder="Confirm Email"
                        className="px-2 h-[40px] border border-[#D4D4D4] rounded-[4px] bg-[#FFFFFF] focus:border-[#4AB04A] focus:outline-none w-full placeholder:text-[#6F6D66] placeholder:text-[12px] !placeholder:font-[400]"
                      />
                      {errors.confirmEmail && (
                        <span className="text-red-600 text-[12px]">
                          {errors.confirmEmail}
                        </span>
                      )}
                    </label>
                  </div>
                </div>
                <div className="flex flex-row gap-4">
                  <div className="flex-1 flex flex-col">
                    <label className="font-[500] text-[#000] flex flex-col gap-[2px] text-[15px] leading-[24px]">
                      City *
                      <input
                        type="text"
                        name="city"
                        value={form.city}
                        onChange={handleChange}
                        placeholder="City"
                        className="px-2 h-[40px] border border-[#D4D4D4] rounded-[4px] bg-[#FFFFFF] focus:border-[#4AB04A] focus:outline-none w-full placeholder:text-[#6F6D66] placeholder:text-[12px] !placeholder:font-[400]"
                      />
                      {errors.city && (
                        <span className="text-red-600 text-[12px]">
                          {errors.city}
                        </span>
                      )}
                    </label>
                  </div>
                  <div className="flex-1 flex flex-col">
                    <label className="font-[500] text-[#000] flex flex-col gap-[2px] text-[15px] leading-[24px]">
                      Province *
                      <input
                        type="text"
                        name="province"
                        value={form.province}
                        onChange={handleChange}
                        placeholder="Province"
                        className="px-2 h-[40px] border border-[#D4D4D4] rounded-[4px] bg-[#FFFFFF] focus:border-[#4AB04A] focus:outline-none w-full placeholder:text-[#6F6D66] placeholder:text-[12px] !placeholder:font-[400]"
                      />
                      {errors.province && (
                        <span className="text-red-600 text-[12px]">
                          {errors.province}
                        </span>
                      )}
                    </label>
                  </div>
                </div>
                <label className="font-[500] text-[#000] flex flex-col gap-[2px] text-[15px] leading-[24px]">
                  Questions
                  <textarea
                    name="questions"
                    value={form.questions}
                    onChange={handleChange}
                    placeholder="Your question here..."
                    rows={3}
                    className="mt-1 px-2 border border-[#D4D4D4] rounded-[4px] bg-[#FFFFFF] focus:border-[#4AB04A] focus:outline-none w-full placeholder:text-[#6F6D66] placeholder:text-[12px] !placeholder:font-[400] resize-vertical min-h-[60px]"
                  />
                </label>

                <button type="submit" className="mt-2 btnPrimary w-full" disabled={isSubmitting}>
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
