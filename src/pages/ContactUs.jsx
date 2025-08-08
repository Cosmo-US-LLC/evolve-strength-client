import React from "react";
import ContactHero from "@/components/PageComponents/ContactUs/Desktop/ContactHero";
import ContactIntro from "@/components/PageComponents/ContactUs/Desktop/ContactIntro";
import Contactusmain from "@/components/PageComponents/ContactUs/Desktop/Contactusmain";
import MetaTags from "@/components/Metatags/Meta";
import { Helmet, HelmetProvider } from "react-helmet-async";

function ContactUs() {
  return (
    <>
     <MetaTags
        title="Contact Evolve Strength | Get in Touch Today"
        description="Have a question, media request, or career inquiry? Contact Evolve Strength by email, phone, or mail. We’re here to help and will respond as soon as possible."
      />
      <div className="">
        <ContactHero/> 
        <ContactIntro/>
        <Contactusmain/>
        

      </div>
    </>
  );
}

export default ContactUs;
