import React, { useState } from "react";

const contactmain = {
  heading: "OUR LOCATIONS",
  locations: [
    {
      cityname: "Edmonton Downtown",
      address: "12328 102 ave nw Edmonton, Alberta, T5N 0L9",
      number: "(780) 784-2675",
    },
    {
      cityname: "Edmonton South",
      address: "4825 89 St NW Edmonton, Alberta, T6E 5K1",
      number: "(780) 690-4252",
    },
    {
      cityname: "Edmonton North",
      address: "13457 149 St Edmonton, Alberta, T5L 2T3",
      number: "(780) 784-7870",
    },
    {
      cityname: "Calgary Royal Oak",
      address: "8888 Country Hills Blvd NW #600 Calgary, Alberta, T3G 5T4",
      number: "(403) 452-3169",
    },
    {
      cityname: "Calgary Sunridge",
      address: "2985 23 Ave NE Unit#125 Calgary, Alberta, T1Y 7L3",
      number: "(587) 393-9428",
    },
    {
      cityname: "Calgary Seton",
      address: "710-19587 Seton Crescent SE Calgary, Alberta, T3M 2T5",
      number: "(825) 407-9015",
    },
    {
      cityname: "Burnaby Brentwood",
      address: "1920 Willingdon Ave #3105 Burnaby, British Columbia, V5C 0K3",
      number: "(236) 455-6573",
    },
    {
      cityname: "Vancouver Post",
      address: "658 Homer St Vancouver, British Columbia, V6B 2R4",
      number: "(236) 757-5475",
    },
  ],
};

import SuccessFullScreen from "@/components/ui/SuccessFullScreen";


function Contactusmain() {
  // === HubSpot constants ===
  const HUBSPOT_PORTAL_ID = "342148198";
  const HUBSPOT_FORM_GUID = "53c692f6-0015-4782-ac3c-c0aab44567d4";
  // =========================

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const e = {};
    if (!form.firstName) e.firstName = "Required";
    if (!form.lastName) e.lastName = "Required";
    if (!form.email) e.email = "Required";
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) e.email = "Invalid email";
    if (!form.phone) e.phone = "Required";
    if (!form.location) e.location = "Required";
    if (!form.message) e.message = "Required";
    return e;
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    if (isSubmitting) return;

    const v = validate();
    setErrors(v);
    if (Object.keys(v).length > 0) {
      const firstKey = Object.keys(v)[0];
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
          { name: "message", value: form.message },
        ],
        context: {
          pageUri: window.location.href,
          pageName: "Contact Us",
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

      // success: show overlay first
      setSubmitted(true);
    } catch (err) {
      console.error("HubSpot submission error", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
     
     

      {/* Success Overlay */}
      {submitted && (
        <div className="fixed inset-0 z-[9999]">
          <SuccessFullScreen
            title="MESSAGE SENT"
            description="Thanks for reaching out. Our team will get back to you as soon as possible."
            buttonText="BACK TO HOME"
            buttonLink="/"
            icon="trophy"
          />
        </div>
      )}

      <div className="max-w-[1280px] px-4 md:px-8 md:mb-15 mb-12  mx-auto flex md:flex-row flex-col w-full h-full">
        {/* LEFT: OUR LOCATIONS (unchanged) */}
        <div className="w-full md:w-[50%] mb-8  ">
          <h2 className="text-[#4AB04A] font-bold text-lg mb-4">
            {contactmain.heading}
          </h2>
          <ul className="space-y-6 text-sm">
            {contactmain.locations.map((location, index) => (
              <li key={index}>
                <h3 className="font-bold text-base ">{location.cityname}</h3>
                <div className=" flex flex-col md:flex-row gap-4 md:gap-2 py-3 md:py-0 description border-b border-[#9D9D9D] md:border-none !font-[Kanit] !font-[300] !text-[14px]">
                  <span className="w-[358px] h-[21px]">
                    {location.address}
                  </span>
                  <a
                    href={`tel:${location.number}`}
                    className="h-[21px] block"
                  >
                    {location.number}
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT: FORM (refactored to match previous forms) */}
        <div className=" w-full md:w-[50%] h-full  md:h-[687px] p-[32px_30px] items-center gap-[10px] rounded-[16px] bg-[#F7F5F5]">
          <h3 className="font-bold mb-4 text-center">SEND US A MESSAGE</h3>
          <form className="space-y-4" onSubmit={handleSubmit} noValidate>
            <div className="grid grid-cols-2 gap-2 md:grid-cols-2 md:gap-4">
              <div>
                <input
                  type="text"
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  className=" bg-[#FFF] border p-2 rounded w-full"
                />
                {errors.firstName && (
                  <span className="text-red-600 text-[12px]">{errors.firstName}</span>
                )}
              </div>
              <div>
                <input
                  type="text"
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  className="bg-[#FFF] border p-2 rounded w-full"
                />
                {errors.lastName && (
                  <span className="text-red-600 text-[12px]">{errors.lastName}</span>
                )}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 md:grid-cols-2 md:gap-6">
              <div>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="bg-[#FFF] border p-2 rounded w-full"
                />
                {errors.email && (
                  <span className="text-red-600 text-[12px]">{errors.email}</span>
                )}
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="bg-[#FFF] border p-2 rounded w-full"
                />
                {errors.phone && (
                  <span className="text-red-600 text-[12px]">{errors.phone}</span>
                )}
              </div>
            </div>
            <div>
              <select
                name="location"
                value={form.location}
                onChange={handleChange}
                className="bg-[#FFF] border p-2 rounded w-full text-gray-500"
              >
                <option value="" disabled>
                  Select Location
                </option>
                <option>Edmonton Downtown</option>
                <option>Edmonton South</option>
                <option>Edmonton North</option>
                <option>Calgary Royal Oak</option>
                <option>Calgary Sunridge</option>
                <option>Calgary Seton</option>
                <option>Burnaby Brentwood</option>
                <option>Vancouver Post</option>
              </select>
              {errors.location && (
                <span className="text-red-600 text-[12px]">{errors.location}</span>
              )}
            </div>
            <div>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Type your message here.."
                className="bg-[#FFF] border p-2 rounded w-full h-[300px]"
              ></textarea>
              {errors.message && (
                <span className="text-red-600 text-[12px]">{errors.message}</span>
              )}
            </div>
            <button
              type="submit"
              className=" bg-[#4AB04A] hover:bg-green-700 text-white w-full py-2 rounded"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "SUBMIT NOW"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contactusmain;
