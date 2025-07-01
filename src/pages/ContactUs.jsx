import React from "react";
import Hero from "../components/PageComponents/Home/Desktop/Hero";

function ContactUs() {
  return (
    <div>
      <div className="max-md:hidden">
        <Hero />
      </div>
      <div className="md:hidden">Home Mobile</div>
    </div>
  );
}

export default ContactUs;
