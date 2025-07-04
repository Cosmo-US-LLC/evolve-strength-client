import React, { useEffect, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { useLocation } from "react-router-dom";
import "./styles.css";
import EvolveStrengthLogo from "../../assets/images/home/navbar/Evolve-Strength-Logo-w.webp";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const currentPath = location.pathname;
  console.log(currentPath);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 150;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="">
        <div className="fixed top-0 w-[100%] z-[99]">
          <nav
            className={`navbarWrapper fixed top-0 w-full  ${
              scrolled ? "scrolled" : ""
            }  ${
              currentPath === "/spaces" ||
              currentPath === "/privacy-policy" ||
              currentPath === "/terms-and-conditions" ||
              currentPath === "/faqs" ||
              currentPath === "/franchise" ||
              currentPath === "/join-as-trainer"
                ? "!bg-[#000]"
                : ""
            }`}
          >
            <div className="max-w-[1280px] w-full h-full mx-auto px-8 flex items-center justify-between">
              <Link smooth to="/" className="flex items-center">
                <img
                  src={EvolveStrengthLogo}
                  alt="Attune Logo"
                  className="w-[196px]"
                />
              </Link>

              <div className="flex items-center justify-center gap-8">
                <Link
                  smooth
                  to="/explore"
                  className="navBarLinks text-[#F8F8F8]"
                >
                  Explore
                </Link>

                <Link
                  smooth
                  to="#Membership"
                  className="navBarLinks text-[#F8F8F8]"
                >
                  Membership
                </Link>

                <Link
                  smooth
                  to="/personal-training"
                  className="navBarLinks text-[#F8F8F8]"
                >
                  Training
                </Link>

                <Link
                  smooth
                  to="/wellness"
                  className="navBarLinks text-[#F8F8F8]"
                >
                  Wellness
                </Link>
                <div className="w-[1.5px] font-[vazirmatn] h-4 bg-[#F8F8F8]" />
                <Link
                  smooth
                  to="#Careers"
                  className="navBarLinks text-[#F8F8F8]"
                >
                  Careers
                </Link>

                <Link
                  smooth
                  to="/franchise"
                  className="navBarLinks text-[#F8F8F8]"
                >
                  Franchise
                </Link>
              </div>
              <div className="flex items-center">
                <button className="btnSecondary">Book a Free Tour</button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Navbar;
