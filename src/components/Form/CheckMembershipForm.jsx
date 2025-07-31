import React, { useState } from "react";
import locationImg from "../../assets/images/form/spaces-form.webp";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function CheckMembershipForm({ onBack, onCheckMembership }) {
  
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    organization: "",
  });
  const [errors, setErrors] = useState({});

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      onCheckMembership(form);
    }
  };

  return (
    <div className="flex gap-12 md:p-6 p-4 flex-row max-w-[1280px] mx-auto items-center  min-h-screen">
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
      <div className="flex flex-col md:items-end md:pl-20  md:h-[660px] justify-between w-full md:max-w-[0%]">
        
        <button
          className="flex self-start md:self- gap-2 text-[#222] text-[15px] hover:underline"
           onClick={() => navigate(-1)}
        >
          <ArrowLeft size={20} /> Back
        </button>
        
        <div className="w-full md:max-w-[420px] bg-white rounded-[10px] mt-10  md:mb-30">
          <div className="md:pb-4  md:w-[537px] md:h-[26px]">
          <h3 className="md:text-center  leading-[26px]  md:mb-2">
            CHECK YOUR COMPANY MEMBERSHIP
          </h3>
          </div>
          <div className="md:pt-[16px] md:pb-[40px] text-center j md:leading-[19px] md:w-[537px] md:h-[26px]">
          <h4 >
            Enter your details to see if your organization is already enrolled 
            with Evolve.
          </h4>
          </div>
          <div className="md:w-[537px] w-full md:h-[380px] rounded-[10px] bg-[#FCFCFC] border p-6">
          <form
            className="flex flex-col  gap-3"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="flex flex-row gap-4">
              <div className="flex-1 flex flex-col ">
                <label className="font-[500] text-[#000] flex flex-col gap-[10px] text-[15px] leading-[24px]">
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
                <label className="font-[500] text-[#000] flex flex-col gap-[10px] text-[15px] leading-[24px]">
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
            <div className="flex flex-col gap-4">
              <label className="font-[500] text-[#000] flex flex-col gap-[10px] text-[15px] leading-[24px]">
                Company Email *
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Company Email"
                  className="px-2 h-[40px] border border-[#D4D4D4] rounded-[4px] bg-[#FFFFFF] focus:border-[#4AB04A] focus:outline-none w-full placeholder:text-[#6F6D66] placeholder:text-[12px] !placeholder:font-[400]"
                />
                {errors.email && (
                  <span className="text-red-600 text-[12px]">
                    {errors.email}
                  </span>
                )}
              </label>
              <label className="font-[500] text-[#000] flex flex-col gap-[10px] text-[15px] leading-[24px]">
                Organization Name *
                <input
                  type="text"
                  name="organization"
                  value={form.organization}
                  onChange={handleChange}
                  placeholder="Organization Name"
                  className="px-2 h-[40px] border border-[#D4D4D4] rounded-[4px] bg-[#FFFFFF] focus:border-[#4AB04A] focus:outline-none w-full placeholder:text-[#6F6D66] placeholder:text-[12px] !placeholder:font-[400]"
                />
                {errors.organization && (
                  <span className="text-red-600 text-[12px]">
                    {errors.organization}
                  </span>
                )}
              </label>
            </div>
            <Link to = "/company-already-registered">
            <button type="submit" className="mt-2 btnPrimary w-full" >
              
              CHECK MEMBERSHIP
            </button>
            </Link>
          </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckMembershipForm;
