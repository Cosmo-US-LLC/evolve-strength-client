import React from "react";
import ContactHero from "@/components/PageComponents/ContactUs/Desktop/ContactHero";
import ContactIntro from "@/components/PageComponents/ContactUs/Desktop/ContactIntro";
import Contactusmain from "@/components/PageComponents/ContactUs/Desktop/Contactusmain";

function ContactUs() {
  return (
    <div>
      <div className="">
        <ContactHero/> 
        <ContactIntro/>
        <Contactusmain/>
        

      </div>
    </div>
  );
}

export default ContactUs;
