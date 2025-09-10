import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

function EdmontonSouthCommonForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    isCurrentMember: "Yes",
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const selectRef = useRef(null);

  // HubSpot Form Configuration
  const HUBSPOT_FORM_ID = "c9613040-2288-4222-b130-2b95191542b2";
  const HUBSPOT_PORTAL_ID = "342148198"; // You'll need to add your portal ID

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Map form data to HubSpot field names
      const hubspotData = {
        firstname: formData.firstName,
        lastname: formData.lastName,
        email: formData.email,
        mobilephone: formData.phoneNumber,
        are_you_a_current_evolve_member_: formData.isCurrentMember,
      };

      // Submit to HubSpot
      const response = await fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_ID}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fields: Object.entries(hubspotData).map(([name, value]) => ({
              name,
              value,
            })),
            context: {
              pageUri: window.location.href,
              pageName: "Edmonton South Common Waitlist",
            },
          }),
        }
      );

      if (response.ok) {
        setSubmitStatus("success");
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          isCurrentMember: "Yes",
        });
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

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    if (selectRef.current) {
      selectRef.current.focus();
    }
  };

  return (
    <div className="bg-black/40 border-2 border-[#fff]  rounded-lg p-8 w-full">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* First Row - Two Columns */}
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
              placeholder="Enter your first name"
              className="w-full px-4 py-3 bg-black/60 border border-white rounded-[6px] text-white placeholder-gray-400 focus:outline-none focus:border-green-400"
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
              placeholder="Enter your last name"
              className="w-full px-4 py-3 bg-black/60 border border-white rounded-[6px] text-white placeholder-gray-400 focus:outline-none focus:border-green-400"
              required
            />
          </div>
        </div>

        {/* Second Row - Two Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-white font-bold mb-2">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email address"
              className="w-full px-4 py-3 bg-black/60 border border-white rounded-[6px] text-white placeholder-gray-400 focus:outline-none focus:border-green-400"
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
              placeholder="(e.g. 416-123-4567)"
              className="w-full px-4 py-3 bg-black/60 border border-white rounded-[6px] text-white placeholder-gray-400 focus:outline-none focus:border-green-400"
              required
            />
          </div>
        </div>

        {/* Third Row - Full Width */}
        <div>
          <label className="block text-white font-bold mb-2">
            Are you a current Evolve member?{" "}
            <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <select
              ref={selectRef}
              name="isCurrentMember"
              value={formData.isCurrentMember}
              onChange={handleInputChange}
              onFocus={() => setIsDropdownOpen(true)}
              onBlur={() => setTimeout(() => setIsDropdownOpen(false), 150)}
              className="w-full px-4 py-3 bg-black/60 border border-white rounded-[6px] text-white focus:outline-none focus:border-green-400 appearance-none pr-10 cursor-pointer"
              required
            >
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
            {/* Interactive Dropdown Arrow */}
            <button
              type="button"
              onClick={toggleDropdown}
              className="absolute inset-y-0 right-0 flex items-center pr-3 hover:bg-gray-700 rounded-r-lg transition-colors duration-200"
            >
              <svg
                className={`w-5 h-5 text-white transition-transform duration-200 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full btnPrimary py-4 px-6 rounded-[6px] uppercase disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Submitting..." : "Join the Waitlist"}
        </button>

        {/* Status Messages */}
        {submitStatus === "success" && (
          <h4 className="text-[#fff] text-center  font-medium">
            Thank you! You've been added to the waitlist successfully.{" "}
            <Link
              to="/"
              className="text-[#fff] underline !font-[400] !text-[20px]"
            >
              Back to Home
            </Link>
          </h4>
        )}
        {submitStatus === "error" && (
          <h4 className="text-red-400 text-center font-medium">
            Something went wrong. Please try again.
          </h4>
        )}
      </form>
    </div>
  );
}

export default EdmontonSouthCommonForm;
