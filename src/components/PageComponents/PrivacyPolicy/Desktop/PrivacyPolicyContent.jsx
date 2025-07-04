import React, { useState } from 'react';

const PrivacyPolicyContant = ({ privacyMain }) => {
  const [activeId, setActiveId] = useState('privacy-policy');

  // Scroll handler
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -100; 
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveId(id); 
    }
  };

  return (
    <div className="max-w-[1280px] px-8 pb-[140px] mt-50 mx-auto w-full">
      <div className="flex w-[1240px]">

        {/* Sidebar */}
        <section>
          <div className="flex flex-col items-start w-[300px] p-[10px] gap-[10px] sticky top-[215px]">

            <ul>
              <li>
                <button
                  onClick={() => handleScroll('privacy-policy')}
                  className={`text-left !font-[kanit] block w-fullcursor-pointer ${
                    activeId === 'privacy-policy'
                      ? 'text-[#4AB04A] gap- border-l-3 border-[#4AB04A] pl-2 '
                      : 'text-black'
                  }`}
                >
                  Privacy Policy
                </button>
              </li>
            </ul>

            <ul className="pl-3 scroll-smooth !font-[kanit] space-y-[10px]">
              {privacyMain.map((section) => (
                <li key={section.id}>
                  <button
                    onClick={() => handleScroll(section.id)}
                    className={`block w-full text-left  cursor-pointer ${
                      activeId === section.id
                        ? 'text-[#4AB04A] border-l-3 border-[#4AB04A] pl-2'
                        : 'text-black'
                    }`}
                  >
                    {section.h1}
                  </button>
                </li>
              ))}
            </ul>

          </div>
        </section>

        {/* Main content */}
        <section>
          <div className="flex flex-col gap-6 flex-1 p-2">
            <h1 id="privacy-policy" className='!text-[40px]'>Privacy Policy</h1>
            {privacyMain.map((section) => (
              <div key={section.id} className="flex flex-col gap-4">
                <h3 id={section.id} className="!text-[20px] !font-[Kanit] leading-normal">
                  {section.h1}
                </h3>
                <p className="leading-normal text-[#000] font-[300] !font-[Kanit] text-[18px]">
                  {section.para1}
                </p>
                {section.para2 && (
                  <p className="leading-normal text-[#000] !font-[Kanit] font-[300] text-[18px]">
                    {section.para2}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default PrivacyPolicyContant;
