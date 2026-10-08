import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { pushEvent } from "@/lib/analytics";
import { LANSDOWNE } from "@/constants/lansdowneWaitlist";

// TODO: confirm with HubSpot details from Faisal. Currently the shared waitlist form.
const HUBSPOT_PORTAL_ID = "342148198";
const HUBSPOT_FORM_ID = "c9613040-2288-4222-b130-2b95191542b2";

// Submissions faster than this are treated as bots.
const MIN_FILL_MS = 3000;

// TODO: final "Are you a member" values to be confirmed.
const MEMBER_OPTIONS = ["Yes", "No"];

const emptyForm = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  isCurrentMember: "",
};

const inputClass =
  "w-full px-4 py-3 bg-black/60 border border-white rounded-[6px] text-white placeholder-gray-400 focus:outline-none focus:border-green-400";

function LansdowneWaitlistForm() {
  const [formData, setFormData] = useState(emptyForm);
  const [honeypot, setHoneypot] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const mountedAt = useRef(Date.now());

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    // Bot traps: filled honeypot or implausibly fast submit. Pretend success
    // so bots get no signal, but never hit HubSpot or fire analytics.
    if (honeypot || Date.now() - mountedAt.current < MIN_FILL_MS) {
      setSubmitStatus("success");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const hutk = document.cookie
        .split("; ")
        .find((c) => c.startsWith("hubspotutk="))
        ?.split("=")[1];

      // NOTE: "waitlist_location" must exist as a HubSpot contact property
      // or HubSpot silently drops it.
      const hubspotData = {
        firstname: formData.firstName,
        lastname: formData.lastName,
        email: formData.email,
        mobilephone: formData.phoneNumber,
        are_you_a_current_evolve_member_: formData.isCurrentMember,
        waitlist_location: LANSDOWNE.name,
      };

      const response = await fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_ID}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            fields: Object.entries(hubspotData).map(([name, value]) => ({
              name,
              value,
            })),
            // HubSpot records the visitor IP server-side.
            context: {
              pageUri: window.location.href,
              pageName: `${LANSDOWNE.name} Waitlist`,
              ...(hutk && { hutk }),
            },
          }),
        },
      );

      if (response.ok) {
        pushEvent("generate_lead", {
          form_name: "lansdowne_waitlist",
          location: LANSDOWNE.name,
        });
        setSubmitStatus("success");
        setFormData(emptyForm);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("HubSpot submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === "success") {
    return (
      <div className="bg-black/40 border-2 border-[#fff] rounded-lg p-8 w-full text-center">
        <h4 className="text-[#fff] font-medium">
          Thank you! You've been added to the {LANSDOWNE.name} waitlist.{" "}
          <Link
            to="/"
            className="text-[#fff] underline !font-[400] !text-[20px]"
          >
            Back to Home
          </Link>
        </h4>
      </div>
    );
  }

  return (
    <div className="bg-black/40 border-2 border-[#fff] rounded-lg p-8 w-full">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Honeypot: hidden from people and assistive tech, bots fill it */}
        <div
          aria-hidden="true"
          style={{ position: "absolute", left: "-9999px", height: 0, overflow: "hidden" }}
        >
          <label>
            Company
            <input
              type="text"
              name="company"
              tabIndex={-1}
              autoComplete="off"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
            />
          </label>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-white font-bold mb-2">
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              placeholder="First Name"
              className={inputClass}
              required
            />
          </div>
          <div>
            <label className="block text-white font-bold mb-2">
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              placeholder="Last Name"
              className={inputClass}
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-white font-bold mb-2">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email Address"
              className={inputClass}
              required
            />
          </div>
          <div>
            <label className="block text-white font-bold mb-2">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              placeholder="Phone Number"
              className={inputClass}
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-white font-bold mb-2">
            Are you currently an Evolve member?{" "}
            <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <select
              name="isCurrentMember"
              value={formData.isCurrentMember}
              onChange={handleInputChange}
              className={`${inputClass} appearance-none pr-10 cursor-pointer ${
                formData.isCurrentMember ? "text-white" : "text-gray-400"
              }`}
              required
            >
              <option value="" disabled>
                Select the option
              </option>
              {MEMBER_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            <svg
              className="pointer-events-none absolute inset-y-0 right-3 my-auto w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full btnPrimary py-4 px-6 rounded-[6px] uppercase disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Submitting..." : "Join the Waitlist"}
        </button>

        <p className="text-center text-[12px] text-[#CFCFCF] !font-[Kanit] m-0">
          By joining, you agree to receive emails from Evolve Strength.
          Unsubscribe anytime.{" "}
          <Link to={LANSDOWNE.privacyUrl} className="underline">
            Privacy Policy
          </Link>
          .
        </p>

        {submitStatus === "error" && (
          <h4 className="text-red-400 text-center font-medium">
            Something went wrong. Please try again.
          </h4>
        )}
      </form>
    </div>
  );
}

export default LansdowneWaitlistForm;
