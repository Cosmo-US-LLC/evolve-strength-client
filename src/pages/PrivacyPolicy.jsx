// import React from "react";


// function PrivacyPolicy() {
//   return (
//  <>

//  <div>
//  <div className="flex-row">
//  <div className="max-md:hidden">
//        <div className=" max-w-[1280px] px-8 pb-[80px] mx-auto w-full h-full mt-30 bg-white text-black flex flex-col"></div>
//         <div>
//     <aside className=" w-[300px] py-[10px] justify-center items-start gap-[10px]">
//          <nav>
            
//           <ul    className="w-[300px] h-[241px]  leading-normal space-y-2">
//              <li><a href="#information" className="text-[#4AB04A] !font-[Kanit] text-[16px] l">Privacy Policy</a></li>
//             <li><a href="#collect" className="  w-[100px] min-h-[24px]hover:underline !font-[Kanit] text-black !font-[300] text-[16px] ">Information We Collect</a></li>
//            <li><a href="#use" className="hover:underline !font-[Kanit] text-black !font-[300] text-[16px]">Use of Information</a></li>
//            <li><a href="#cookies" className="hover:underline !font-[Kanit] text-black !font-[300] text-[16px]">Cookies</a></li>
//              <li><a href="#storage" className="hover:underline !font-[Kanit] text-black !font-[300] text-[16px]">Data Storage and Security</a></li>
//            <li><a href="#sharing" className="hover:underline !font-[Kanit] text-black !font-[300] text-[16px]">Sharing of Information</a></li>
//              <li><a href="#rights" className="hover:underline !font-[Kanit] text-black !font-[300] text-[16px]">Your Rights</a></li>
//           </ul>
//        </nav>
//       </aside>
//  </div>

//     <div className=" ">
//     <h2 className="w-3/4 pl-6 space-y-6 text-sm ">Privacy Policy</h2>
//     </div>
//     <div>
//         <h3 className="font-medium mb-4">h1</h3>
// <p className=" w-[916px] min-h-[216px] mb-6 description text-black !font-[300] !font-[Kanit]">p1</p>
// <p className=" w-[916px] min-h-[216px] mb-6 description text-black !font-[300] !font-[Kanit]">p2</p>
//     </div>


 




//  </div>
//   <div className="md:hidden">Home Mobile</div>
//      </div>
//      </div>
//  </>
//   );
// }

// export default PrivacyPolicy;









import React from "react";


function PrivacyPolicy() {
  return (
    <div>
      <div className="max-md:hidden">
       <div className=" max-w-[1280px] px-8 pb-[80px] mx-auto w-full h-full mt-30 bg-white text-black flex flex-col md:flex-row p-6 md:p-12">
      
       <aside className=" w-[300px] py-[10px] justify-center items-start gap-[10px]">
        <nav>
            
          <ul    className="w-[300px] h-[241px]  leading-normal space-y-2">
            <li><a href="#information" className="text-[#4AB04A] !font-[Kanit] text-[16px] l">Privacy Policy</a></li>
            <li><a href="#collect" className="  w-[100px] min-h-[24px]hover:underline !font-[Kanit] text-black !font-[300] text-[16px] ">Information We Collect</a></li>
            <li><a href="#use" className="hover:underline !font-[Kanit] text-black !font-[300] text-[16px]">Use of Information</a></li>
            <li><a href="#cookies" className="hover:underline !font-[Kanit] text-black !font-[300] text-[16px]">Cookies</a></li>
            <li><a href="#storage" className="hover:underline !font-[Kanit] text-black !font-[300] text-[16px]">Data Storage and Security</a></li>
            <li><a href="#sharing" className="hover:underline !font-[Kanit] text-black !font-[300] text-[16px]">Sharing of Information</a></li>
            <li><a href="#rights" className="hover:underline !font-[Kanit] text-black !font-[300] text-[16px]">Your Rights</a></li>
          </ul>
        </nav>
      </aside>

      {/* Content */}
      <main className="w-3/4 pl-6 space-y-6 text-sm ">
        <h2 id="information" className="text-2xl font-bold mb-6">Privacy Policy</h2>

        <section id="collect">
          <h3 className="font-medium mb-4">Information We Collect</h3>
          <p className="  w-[916px] min-h-[216px] mb-6 description text-black !font-[300] !font-[Kanit]">When you visit the Evolve Strength website, we automatically collect information through cookies and similar tracking technologies. This includes your IP address, device type, browser type, operating system, the pages you visit, the duration of your visits, and the website you visited immediately before ours. This data helps us understand how visitors use our site and improve your experience.
<br /> <br />
We also collect personal information that you voluntarily provide when you contact us, sign up for newsletters, or fill out forms on our website. This may include your name, email address, and any other details you choose to share. We use this information solely to respond to your requests and provide the services you ask for.</p>
        </section>

        <section className="gap-[24px]"   id="use">
          <h3 className="text-xl w-full min-h-[30px] mb-4">Use of Information</h3>
          
          <p className="w-[916px] min-h-[108px] mb-6 description  text-black !font-[300] !font-[Kanit]">The information we collect helps us operate and improve our website and services. We analyze site usage to enhance functionality and tailor content to your preferences. We use your personal data to respond to your inquiries and send you relevant information about our services. We do not sell your personal information or share it with third parties for their own marketing purposes.</p>
        </section>

        <section className="gap-[24px]"  id="cookies">
          <h3 className="text-xl w-full min-h-[30px] mb-4">Cookies</h3>
          <p className="w-[916px] min-h-[108px] mb-6 description text-black !font-[300] !font-[Kanit]" >Cookies are small data files placed on your device that allow our website to function efficiently and collect anonymous usage data. They help us remember your preferences and understand how visitors interact with our site. You can control or disable cookies through your browser settings, but doing so may limit some features of the website.</p>
        </section>

        <section className="gap-[24px]"  id="storage">
          <h3 className="text-xl w-full min-h-[30px] mb-4">Data Storage and Security</h3>
          <p className="w-[916px] min-h-[108px] mb-6 description text-black !font-[300] !font-[Kanit]">Your personal data is securely stored and processed by trusted third-party cloud service providers located in the United States. These providers are contractually obligated to protect your information and comply with our privacy standards. We implement technical and organizational measures to safeguard your data against unauthorized access, loss, or misuse.</p>
        </section>

        <section className="gap-[24px]"  id="sharing">
          <h3 className="text-xl w-full min-h-[30px] mb-4">Sharing of Information</h3>
          <p className="w-[916px] min-h-[135px] mb-6 description text-black !font-[300] !font-[Kanit]">We do not disclose your personal data to third parties except when necessary to provide our services or as required by law. For example, if you enter your information to join our gym or book tours, we share your details with ABC GymSales, a trusted partner that assists with memberships and bookings. You can review their privacy policy here.
<br /><br />
We never sell your personal information</p>
        </section>

        <section className="gap-[24px]"  id="rights">
            <h3 className="text-xl w-full min-h-[30px] mb-4">Your Rights</h3>
          <p className="w-[916px] min-h-[81px]  description description text-black !font-[300] !font-[Kanit]!font-[300] !font-[Kanit]">You have the right to access the personal information we hold about you and to request correction or deletion of your data, subject to legal and operational requirements. To exercise these rights or for any privacy-related questions, please contact us at  <span className="font-bold"> info@evolvestrength.com</span>.</p>
        </section>
      </main>
    </div>
      </div>
      <div className="md:hidden">Home Mobile</div>
    </div>
  );
}

export default PrivacyPolicy;