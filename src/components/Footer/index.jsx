import React from "react";
import { Instagram, ArrowRight } from "lucide-react";
import EvolveStrengthLogo from "../../assets/images/home/navbar/Evolve-Strength-Logo-w.webp";
import { HashLink as Link } from "react-router-hash-link";
import ESFLogo from "../../assets/images/home/footer/Evolve-Strength-footer-Logo.svg";
// import { ReactComponent as ESFLogo } from "../../assets/images/home/footer/Evolve-Strength-footer-Logo.svg";

function Footer() {
  return (
    <>
      <div className="relative bg-[#191919]">
        <div className="relative max-w-[1280px] px-8 mx-auto w-full h-full flex flex-col">
          <div className="flex flex-row gap-16 pt-12 pb-6">
            <div className="bg-[#262626] text-white p-6 rounded-[12px] max-w-[360px] flex flex-col gap-8">
              <div className="">
                <Link
                  smooth
                  to="/"
                  className="flex items-center"
                  onClick={(e) => {
                    // window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  <img
                    src={EvolveStrengthLogo}
                    alt="Attune Logo"
                    className="w-[196px]"
                  />
                </Link>
              </div>

              <p className="footer_description text-[#ffffff]">
                At Evolve Strength, we're redefining fitness with cutting-edge
                gyms stocked with an abundance of top-tier equipment, ensuring
                you never wait and can dive into a premium workout experience.
              </p>

              <div className="flex flex-col gap-2">
                <h3 className="footer_description !text-[18px] text-[#FFFFFF] uppercase">
                  Stay in Touch
                </h3>
                <p className="footer_description text-[#999999]">
                  Subscribe to receive updates, access to exclusive deals, and
                  more
                </p>
              </div>

              <div className="flex items-center border-b border-[#4C4B47] overflow-hidden">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="footer_quick_links bg-transparent py-2 w-full placeholder-[#6F6D66] focus:outline-none "
                />
                <button className="text-[#4AB04A] hover:text-green-400">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="w-[790px] text-white border-y border-y-[#2b2b2b] pt-6 pb-2">
                <div className="footer_links flex flex-wrap items-center gap-6 mb-4">
                  <a href="#" className="text-[#B2B1AA] hover:text-[#ffffff]">
                    Become a Trainer
                  </a>
                  <span className="text-[#B2B1AA]">/</span>
                  <a href="#" className="text-[#B2B1AA] hover:text-[#ffffff]">
                    Become a Practitioner
                  </a>
                  <span className="text-[#B2B1AA]">/</span>
                  <a href="#" className="text-[#B2B1AA] hover:text-[#ffffff]">
                    Franchise with Evolve
                  </a>
                </div>

                <p className="footer_quick_links pt-3 text-[#6F6D66] uppercase ">
                  Quick Links
                </p>
              </div>

              <div className=" flex flex-row gap-[130px] py-8">
                <div className="space-y-3 flex flex-col">
                  <a
                    href="/about-us"
                    className="footer_links text-[#B2B1AA] hover:text-[#ffffff]"
                  >
                    About Us
                  </a>
                  <a
                    href="#"
                    className="footer_links text-[#B2B1AA] hover:text-[#ffffff]"
                  >
                    Our Locations
                  </a>
                  <a
                    href="#"
                    className="footer_links text-[#B2B1AA] hover:text-[#ffffff]"
                  >
                    Corporate Membership
                  </a>
                  <Link
                    smooth
                    to="/membership-benefits"
                    className="footer_links text-[#B2B1AA] hover:text-[#ffffff]"
                  >
                    Membership Benefits
                  </Link>
                  <a
                    href="#"
                    className="footer_links text-[#B2B1AA] hover:text-[#ffffff]"
                  >
                    Join the Movement
                  </a>

                  <button className="mt-4 btnPrimary transition">
                    TAKE A TOUR
                  </button>
                </div>

                <div className="space-y-3 flex flex-col">
                  <a
                    href="#"
                    className="footer_links text-[#B2B1AA] hover:text-[#ffffff]"
                  >
                    Careers
                  </a>
                  <Link
                    smooth
                    to="/faqs"
                    className="footer_links text-[#B2B1AA] hover:text-[#ffffff]"
                  >
                    FAQs
                  </Link>
                  <Link
                    smooth
                    to="/contact-us"
                    className="footer_links text-[#B2B1AA] hover:text-[#ffffff]"
                  >
                    Contact Us
                  </Link>
                  <Link
                    smooth
                    to="/spaces"
                    className="footer_links text-[#B2B1AA] hover:text-[#ffffff]"
                  >
                    Spaces
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between w-full max-w-[780px] h-[100px] gap-6">
            <div className="text-[#4AB04A] hover:text-[#ffffff] border-[2px] border-[#4AB04A] cursor-pointer hover:border-[#ffffff] rounded-full p-4">
              <Instagram className="w-7 h-7 " />
            </div>

            <div className="flex flex-row gap-10 ">
              <div>
                <p className="footer_quick_links uppercase text-[#6F6D66]  ">
                  Selection Committee
                </p>
                <p className="footer_quick_links text-[#B2B1AA]">
                  +1 891 989-11-92
                </p>
              </div>

              <div>
                <p className="footer_quick_links uppercase text-[#6F6D66]">
                  Email
                </p>
                <p className="footer_quick_links text-[#B2B1AA]">
                  info@evolvestrength.com
                </p>
              </div>
            </div>
          </div>
          <img
            src={ESFLogo}
            alt="footerImage"
            className="w-[380px] h-auto absolute bottom-[-30px] right-[30px] opacity-5"
          />
        </div>
      </div>
      <div className="bg-[#000000]">
        <div className="max-w-[1280px] px-8 py-6 mx-auto w-full flex justify-between items-center">
          <Link
            smooth
            to="privacy-policy"
            className="footer_quick_links text-[#6F6D66] hover:text-[#ffffff]"
          >
            Privacy Policy
          </Link>
          <span className="footer_quick_links text-[#6F6D66]">
            Copyright © 2025 Evolve Strength
          </span>
          <Link
            smooth
            to="/terms-and-conditions"
            className="footer_quick_links text-[#6F6D66] hover:text-[#ffffff]"
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </>
  );
}

export default Footer;
