import React, { useState } from "react";

function PrivacyPolicy() {
  const [activeId, setActiveId] = useState("information");

  const handleScroll = (id) => {
    setActiveId(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setTimeout(() => {
        window.scrollBy(0, -100); // Adjust offset as needed
      }, 300);
    }
  };

  return (
    <div>
      <div className="max-md:hidden">
        <div className="max-w-[1280px] px-8 pb-[80px] mx-auto w-full h-full mt-30 bg-white text-black flex flex-col md:flex-row md:gap-[24px] p-6 md:p-12">

          {/* Sidebar */}
          <aside className="flex flex-col w-[300px] py-[10px] gap-[10px] items-start">
            <nav>
              <ul className="space-y-2 leading-normal">
                <li className="flex items-center gap-2.5">
                  <span
                    className={`block w-1 h-5 bg-[#4AB04A] transition-all duration-300 ${
                      activeId === "information" ? "opacity-100" : "opacity-0"
                    }`}
                  />
                  <button
                    onClick={() => handleScroll("information")}
                    className={`font-[Kanit] text-[16px] text-left transition-colors duration-300 ${
                      activeId === "information" ? "text-[#4AB04A]" : "text-black"
                    }`}
                  >
                    Privacy Policy
                  </button>
                </li>

                {[
                  { id: "collect-p", label: "Information we collect" },
                  { id: "use-p", label: "Use of Information" },
                  { id: "cookies-p", label: "Cookies" },
                  { id: "storage-p", label: "Data Storage and Security" },
                  { id: "sharing-p", label: "Sharing of Information" },
                  { id: "rights-p", label: "Your Rights" },
                ].map((item) => (
                  <li key={item.id} className="flex items-center gap-2.5">
                    <span
                      className={`block w-1 h-5 bg-[#4AB04A] transition-all duration-300 ${
                        activeId === item.id ? "opacity-100" : "opacity-0"
                      }`}
                    />
                    <button
                      onClick={() => handleScroll(item.id)}
                      className={`sidebar-button transition-colors duration-300 ${
                        activeId === item.id ? "text-[#4AB04A]" : "text-black"
                      }`}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
          {/* Main Content */}
          <main className="w-3/4 pl-6 space-y-6 text-sm">
            <h2 id="information" className="text-2xl font-bold mb-6">Privacy Policy</h2>

            <section>
              <h3 className="text-xl font-semibold mb-2">Information We Collect</h3>
              <p id="collect-p" className="w-[916px] mb-6   space-y-2 text-black font-kanit text-[18px]  leading-normal">
                When you visit the Evolve Strength website, we automatically collect information through cookies and similar tracking technologies. This includes your IP address, device type, browser type, operating system, the pages you visit, the duration of your visits, and the website you visited immediately before ours. This data helps us understand how visitors use our site and improve your experience.
                <br /><br />
                We also collect personal information that you voluntarily provide when you contact us, sign up for newsletters, or fill out forms on our website. This may include your name, email address, and any other details you choose to share. We use this information solely to respond to your requests and provide the services you ask for.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">Use of Information</h3>
              <p id="use-p" className="w-[916px] mb-6 space-y-2 text-black font-kanit text-[18px]  leading-normal">
                The information we collect helps us operate and improve our website and services. We analyze site usage to enhance functionality and tailor content to your preferences. We use your personal data to respond to your inquiries and send you relevant information about our services. We do not sell your personal information or share it with third parties for their own marketing purposes.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">Cookies</h3>
              <p id="cookies-p" className="w-[916px] mb-6 space-y-2 text-black font-kanit text-[18px]  leading-normal">
                Cookies are small data files placed on your device that allow our website to function efficiently and collect anonymous usage data. They help us remember your preferences and understand how visitors interact with our site. You can control or disable cookies through your browser settings, but doing so may limit some features of the website.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">Data Storage and Security</h3>
              <p id="storage-p" className="w-[916px] mb-6 space-y-2 text-black font-kanit text-[18px]  leading-normal">
                Your personal data is securely stored and processed by trusted third-party cloud service providers located in the United States. These providers are contractually obligated to protect your information and comply with our privacy standards. We implement technical and organizational measures to safeguard your data against unauthorized access, loss, or misuse.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">Sharing of Information</h3>
              <p id="sharing-p" className="w-[916px] mb-6 space-y-2 text-black font-kanit text-[18px]  leading-normal">
                We do not disclose your personal data to third parties except when necessary to provide our services or as required by law. For example, if you enter your information to join our gym or book tours, we share your details with ABC GymSales, a trusted partner that assists with memberships and bookings. You can review their privacy policy here.
                <br /><br />
                We never sell your personal information.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">Your Rights</h3>
              <p id="rights-p" className="w-[916px] space-y-2 text-black font-kanit text-[18px]  leading-normal">
                You have the right to access the personal information we hold about you and to request correction or deletion of your data, subject to legal and operational requirements. To exercise these rights or for any privacy-related questions, please contact us at <span className="font-bold">info@evolvestrength.com</span>.
              </p>
            </section>
          </main>

        </div>
      </div>

      <div className="md:hidden">Home Mobile</div>
    </div>
  );
}

export default PrivacyPolicy;
