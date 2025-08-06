import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

function TrainerForm() {
  const turnstileRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const existingScript = document.querySelector('script[src="https://challenges.cloudflare.com/turnstile/v0/api.js"]');

    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
      script.async = true;
      script.defer = true;
      script.onload = () => setIsLoaded(true);
      document.body.appendChild(script);
    } else {
      setIsLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (isLoaded && window.turnstile && turnstileRef.current) {
      window.turnstile.render(turnstileRef.current, {
        sitekey: '1x00000000000000000000AA',
        theme: 'light',
      });
    }
  }, [isLoaded]);

  return (
    <div className='max-w-[1280px] px-4 sm:px-8 pb-16 md:pb-[80px] mx-auto w-full h-full'>
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-[#222] text-[15px] mt-8 hover:underline"
      >
        <ArrowLeft size={20} /> Back
      </button>

      <div className="flex flex-col items-center gap-6 self-stretch pt-12 md:pt-[80px] pb-8 md:pb-[50px] text-center">
        <h1 className='uppercase text-4xl md:text-5xl'>Take control</h1>
        <p className='description !font-[kanit] text-lg md:text-xl'>Contact us today</p>
      </div>

      <div className="w-full p-6 md:p-8 rounded-[16px] bg-[#F7F5F5]">
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <p className="description !font-[kanit]">First Name *</p>
              <input type="text" placeholder="First Name" className="bg-white border p-3 rounded w-full" />
            </div>
            <div className="flex flex-col">
              <label className="description !font-[kanit]">Last Name *</label>
              <input type="text" placeholder="Last Name" className="bg-white border p-3 rounded w-full" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="description !font-[kanit]">Email Address *</label>
              <input type="email" placeholder="Email Address" className="bg-white border p-3 rounded w-full" />
            </div>
            <div className="flex flex-col">
              <label className="description !font-[kanit]">Phone Number *</label>
              <input type="tel" placeholder="Phone Number" className="bg-white border p-3 rounded w-full" />
            </div>
          </div>

          <div className="flex flex-col">
            <label className="description !font-[kanit]">Location *</label>
            <input type="text" placeholder="Select your location" className="bg-white border p-3 rounded w-full" />
          </div>

          <div className="flex flex-col">
            <label className="description !font-[kanit]">Tell Us About Yourself! *</label>
            <textarea placeholder="Tell us about yourself..." className="bg-white border p-3 rounded w-full h-48 md:h-[300px]"></textarea>
          </div>

          <div className="flex flex-col">
            <div ref={turnstileRef} className="cf-turnstile"></div>
          </div>

          <button type="submit" className="btnPrimary w-full md:w-auto">
            SUBMIT NOW
          </button>
        </form>
      </div>
    </div>
  );
}

export default TrainerForm;
