import React, { useState } from 'react';

const TermsAgreementContent = ({ termsMain }) => {
  const [activeId, setActiveId] = useState('terms-agreement');

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -150; // Adjust based on your sticky header height
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveId(id);
    }
  };

  return (
    <div className="max-w-[1280px] md:px-8 px-4 pb-[140px] mt-32 mx-auto w-full flex">
     

    
          <div className="flex flex-col items-start w-[300px] p-[10px] gap-[10px] sticky top-[150px] max-md:hidden">

            <ul>
              <li>
                <button
                  onClick={() => handleScroll('terms-agreement')}
                  className={`text-left  !font-[kanit] block w-fullcursor-pointer  ${
                    activeId === 'terms-agreement'
                      ? 'text-[#4AB04A] pr-2 gap- border-l-3 border-[#4AB04A] pl-2'
                      : 'text-black'
                  }`}
                >
                  Terms and Agreement
                </button>
              </li>
            </ul>

            <ul className="pl-5 scroll-smooth !font-[kanit] space-y-[10px]">
              {termsMain.map((section) => (
                <li key={section.id}>
                  <button
                    onClick={() => handleScroll(section.id)}
                    className={`block w-full text-left  cursor-pointer ${
                      activeId === section.id
                        ? 'text-[#4AB04A] border-l-3  border-[#4AB04A] pl-2'
                        : 'text-black'
                    }`}
                  >
                    {section.h1}
                  </button>
                </li>
              ))}
            </ul>

          </div>
        

     
          <div className="flex flex-col gap-6 flex-1 p-2">
            <h1 id="terms-agreement" className='!text-[40px] leading-[34px]'>Terms and Agreement</h1>
            {termsMain.map((section) => (
  <div key={section.id} id={section.id} className="flex flex-col gap-4">
    <h3 className="!text-[20px] font-Kanit leading-normal">{section.h1}</h3>
    <ul className="leading-normal text-[#000] !font-[kanit] font-[300] list-disc pl-5 !text-[18px]">
      {section.content.map((item, index) =>
        typeof item === 'string' ? (
          <li key={index}>{item}</li>
        ) : (
          <li key={index}>
            {item.text}
            <ul className="list-disc pl-5">
              {item.sublist.map((sub, subIndex) => (
                <li key={subIndex}>{sub}</li>
              ))}
            </ul>
          </li>
        )
      )}
    </ul>
  </div>
))}

          </div>

      </div>
   
  );
};

export default TermsAgreementContent;
