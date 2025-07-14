import React, { useEffect, useRef, useState } from 'react';

function TrainerForm() {
  const turnstileRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load Turnstile script
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

  // Render Turnstile
  useEffect(() => {
    if (isLoaded && window.turnstile && turnstileRef.current) {
      window.turnstile.render(turnstileRef.current, {
        sitekey: '1x00000000000000000000AA', // ✅ Cloudflare test sitekey
        theme: 'light',
      });
    }
  }, [isLoaded]);

  return (
    <div className='max-w-[1280px] px-8 pb-[80px] mx-auto w-full h-full'>
      <div className="flex flex-col items-center gap-6 self-stretch w-[1240px] pt-[80px] pb-[50px] box-border">
        <h1 className='uppercase !text-[40px]'>Take control</h1>
        <p className='description !font-[kanit]'>Contact us today</p>
      </div>

      <div className="w-auto h-[800px] p-[32px_30px] items-center gap-[10px] rounded-[16px] bg-[#F7F5F5]">
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <p className="description !font-[kanit]">First Name *</p>
              <input type="text" placeholder="First Name" className="bg-[#FFF] border p-2 rounded w-full" />
            </div>
            <div className="flex flex-col">
              <label className="description !font-[kanit]">Last Name *</label>
              <input type="text" placeholder="Last Name" className="bg-[#FFF] border p-2 rounded w-full" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="description !font-[kanit]">Email Address *</label>
              <input type="email" placeholder="Email Address" className="bg-[#FFF] border p-2 rounded w-full" />
            </div>
            <div className="flex flex-col">
              <label className="description !font-[kanit]">Phone Number *</label>
              <input type="tel" placeholder="Phone Number" className="bg-[#FFF] border p-2 rounded w-full" />
            </div>
          </div>

          <div className="flex flex-col">
            <label className="description !font-[kanit]">Location *</label>
            <input type="text" placeholder="Select your location" className="bg-[#FFF] border p-2 rounded w-full" />
          </div>

          <div className="flex flex-col">
            <label className="description !font-[kanit]">Tell Us About Yourself! *</label>
            <textarea placeholder="Tell us about yourself..." className="bg-[#FFF] border p-2 rounded w-full h-[300px]"></textarea>
          </div>

          {/* ✅ Cloudflare Turnstile Widget */}
          <div className="flex flex-col">
            <div ref={turnstileRef} className="cf-turnstile"></div>
          </div>

          <button type="submit" className="btnPrimary">
            SUBMIT NOW
          </button>
        </form>
      </div>
    </div>
  );
}

export default TrainerForm;
