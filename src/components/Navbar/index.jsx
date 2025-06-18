import React, { useEffect, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./styles.css";
import EvolveStrengthLogo from "../../assets/images/home/navbar/Evolve-Strength-Logo.svg";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

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
            }`}
          >
            <div className="max-w-[1280px] w-full h-full mx-auto px-8 flex items-center justify-between">
              <Link
                smooth
                to="/"
                className="flex items-center"
                onClick={(e) => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                <img
                  src={EvolveStrengthLogo}
                  alt="Attune Logo"
                  className="w-[196px]"
                />
              </Link>

              <div className="flex items-center justify-center gap-8">
                <Link
                  smooth
                  to="#Explore"
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
                  to="#Training"
                  className="navBarLinks text-[#F8F8F8]"
                >
                  Training
                </Link>

                <Link
                  smooth
                  to="#Wellness"
                  className="navBarLinks text-[#F8F8F8]"
                >
                  Wellness
                </Link>
                <Link
                  smooth
                  to="#Careers"
                  className="navBarLinks text-[#F8F8F8]"
                >
                  Careers
                </Link>
                <Link
                  smooth
                  to="#Franchise"
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
