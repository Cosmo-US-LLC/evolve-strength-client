import React from "react";
import { Instagram, ArrowRight } from "lucide-react";
import EvolveStrengthLogo from "../../assets/images/home/navbar/Evolve-logo-light.svg";
import { HashLink as Link } from "react-router-hash-link";
import ESFLogo from "../../assets/images/home/footer/Evolve-Strength-footer-Logo.svg";
import "./styles.css";
// import { ReactComponent as ESFLogo } from "../../assets/images/home/footer/Evolve-Strength-footer-Logo.svg";

function Footer() {
  return (
    <>
      <div className="relative bg-[#191919]">
        <div className="relative max-w-[1280px] px-4 md:px-8 mx-auto w-full h-full flex flex-col">
          <div className="flex flex-col md:flex-row gap-6 md:gap-16 pt-12 pb-4">
            <div className="max-w-[360px] flex flex-col gap-8">
              <div className="bg-[#262626] h-auto text-white px-6 py-8 rounded-[12px] flex flex-col gap-8">
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
                  At Evolve Strength, we’re redefining fitness and health with
                  cutting-edge gyms and integrated wellness spaces, stocked with
                  an abundance of top-tier equipment, so you never wait and can
                  dive into a premium workout and healthcare experience.
                </p>

                {/* <div className="flex flex-col gap-2">
                <h3 className="footer_description !text-[18px] text-[#FFFFFF] uppercase">
                  Stay in Touch
                </h3>
                <p className="footer_description text-[#999999]">
                  Subscribe to receive updates, access to exclusive deals, and
                  more
                </p>
              </div> */}

                {/* <div className="flex items-center border-b border-[#4C4B47] overflow-hidden">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="footer_quick_links bg-transparent py-2 w-full placeholder-[#6F6D66] focus:outline-none "
                />
                <button className="text-[#4AB04A] hover:text-green-400">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div> */}
              </div>
              <div className="flex items-center gap-2 max-md:hidden">
                <a
                  href="https://www.instagram.com/evolve_strength/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#4AB04A] hover:text-[#ffffff] border-[2px] border-[#4AB04A] cursor-pointer hover:border-[#ffffff] rounded-full p-2 md:p-4 transition-colors duration-200"
                >
                  <Instagram className="w-6 md:w-7 h-6 md:h-7 " />
                </a>
              </div>
            </div>

            <div className="flex flex-col w-full">
              <div className="max-w-[790px] text-white border-b border-y-[#2b2b2b] pb-2 max-md:hidden">
                <div className="footer_links !cursor-default flex flex-wrap items-center mb-4">
                  <p className="text-[#B2B1AA] w-[240px]">COMPANY</p>
                  {/* <span className="text-[#B2B1AA]">/</span>
                  <a href="#" className="text-[#B2B1AA] hover:text-[#ffffff]">
                    Become a Practitioner
                  </a> */}

                  <p className="text-[#B2B1AA] w-[260px]">CAREERS & PARTNERS</p>

                  <p className="text-[#B2B1AA] w-[240px]">FOR MEMBERS</p>
                </div>

                {/* <p className="footer_quick_links pt-3 text-[#6F6D66] uppercase ">
                  Quick Links
                </p> */}
              </div>

              <div className=" flex flex-col md:flex-row py-2 md:py-8">
                <div className="space-y-4 md:space-y-3 w-full flex flex-col md:max-w-[240px]">
                  <p className="text-[#B2B1AA] !text-[22px] !font-[600] pb-2 w-full border-b-2 border-[#2b2b2b] md:hidden">
                    COMPANY
                  </p>
                  <Link
                    smooth
                    to="/about-us"
                    className="footer_links text-[#B2B1AA] hover:text-[#ffffff]"
                  >
                    About Us
                  </Link>
                  <Link
                    to="/locations"
                    className="footer_links text-[#B2B1AA] hover:text-[#ffffff]"
                  >
                    Our Locations
                  </Link>
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
                  {/* <Link
                    to="https://tour.evolvestrength.ca/tour-form/"
                    className="max-md:hidden"
                  >
                    <button className="my-1 md:mt-12 btnPrimary transition">
                      TAKE A TOUR
                    </button>
                  </Link> */}
                </div>

                <div className="space-y-4 md:space-y-3 flex flex-col w-full md:max-w-[260px]">
                  <p className="text-[#B2B1AA] mt-3 !text-[22px] !font-[600] pb-2 w-full border-b-2 border-[#2b2b2b] md:hidden">
                    CAREERS & PARTNERS
                  </p>
                  {/* <Link
                    smooth
                    to="/careers"
                    className="footer_links text-[#B2B1AA] hover:text-[#ffffff]"
                  >
                    Careers
                  </Link> */}
                  <Link
                    smooth
                    to="/work-spaces"
                    className="footer_links text-[#B2B1AA] hover:text-[#ffffff]"
                  >
                    Work Spaces
                  </Link>
                  <Link
                    smooth
                    to="/join-as-trainer"
                    className="footer_links text-[#B2B1AA] hover:text-[#ffffff]"
                  >
                    Become a Trainer
                  </Link>
                  <Link
                    smooth
                    to="/corporate-membership"
                    className="footer_links text-[#B2B1AA] hover:text-[#ffffff]"
                  >
                    Corporate Membership
                  </Link>
                  {/* <Link
                    smooth
                    to="/membership-benefits"
                    className="footer_links text-[#B2B1AA] hover:text-[#ffffff]"
                  >
                    Membership Benefits
                  </Link> */}
                  {/* <Link
                    smooth
                    to="/join-the-Movement"
                    className="footer_links text-[#B2B1AA] hover:text-[#ffffff]"
                  >
                    Join the Movement
                  </Link> */}
                  <Link
                    smooth
                    to="/franchise"
                    className="footer_links text-[#B2B1AA] hover:text-[#ffffff]"
                  >
                    Franchise with Evolve
                  </Link>
                </div>

                <div className="space-y-4 md:space-y-3 flex flex-col w-full md:max-w-[240px]">
                  <p className="text-[#B2B1AA] mt-4 !text-[22px] !font-[600] pb-2 w-full border-b-2 border-[#2b2b2b] md:hidden">
                    FOR MEMBERS
                  </p>
                  <Link
                    smooth
                    to="/personal-training"
                    className="footer_links text-[#B2B1AA] hover:text-[#ffffff]"
                  >
                    Personal Training
                  </Link>
                  <Link
                    smooth
                    to="/wellness"
                    className="footer_links text-[#B2B1AA] hover:text-[#ffffff]"
                  >
                    Wellness Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* <Link
            to="https://tour.evolvestrength.ca/tour-form/"
            className="md:hidden"
          >
            <button className="mt-1 mb-2 md:mb-0 md:mt-12 btnPrimary transition">
              TAKE A TOUR
            </button>
          </Link> */}

          {/* <div className="flex flex-row items-center md:justify-between justify-start  w-full max-w-[568px] h-[70px] md:h-[90px] gap-14 md:gap-6">
            <a
              href="https://www.instagram.com/evolve_strength/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4AB04A] hover:text-[#ffffff] border-[2px] border-[#4AB04A] cursor-pointer hover:border-[#ffffff] rounded-full p-2 md:p-4 transition-colors duration-200"
            >
              <Instagram className="w-6 md:w-7 h-6 md:h-7 " />
            </a>

            <div className="flex flex-row">
              <div>
                <p className="footer_quick_links uppercase text-[14px] leading-[19.6px]  text-[#6F6D66]">
                  Email
                </p>
                <a
                  href="mailto:info@evolvestrength.ca"
                  className="text-[14px] leading-[19.6px] hover:cursor-pointer hover:text-[#ffffff] text-[#B2B1AA]"
                >
                  info@evolvestrength.ca
                </a>
              </div>
            </div>
          </div> */}

          <img
            src={ESFLogo}
            alt="footerImage"
            className="w-[260px] h-auto absolute bottom-[-10px] right-[30px] opacity-5 max-md:hidden"
          />
        </div>
        <div className="flex w-full items-start justify-between md:hidden">
          <div className="flex items-center gap-2 md:hidden px-4 py-4">
            <a
              href="https://www.instagram.com/evolve_strength/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4AB04A] hover:text-[#ffffff] border-[2px] border-[#4AB04A] cursor-pointer hover:border-[#ffffff] rounded-full p-2 md:p-4 transition-colors duration-200"
            >
              <Instagram className="w-10 h-10 " />
            </a>
          </div>
          <img
            src={ESFLogo}
            alt="footerImage"
            className="w-[180px] h-auto opacity-5 "
          />
        </div>
      </div>
      <div className="bg-[#000000]">
        <div className="max-w-[1280px] px-4 md:px-8 py-6 mx-auto w-full flex justify-between items-center">
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
