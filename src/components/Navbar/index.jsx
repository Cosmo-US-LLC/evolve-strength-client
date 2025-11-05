import React, { useEffect, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import "./styles.css";
import EvolveStrengthLogo from "../../assets/images/home/navbar/Evolve-logo-light.svg";
import ESFLogo from "../../assets/images/home/footer/Evolve-Strength-footer-Logo.svg";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../components/ui/sheet";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isDropdownOpen && !event.target.closest(".dropdown-container")) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isDropdownOpen]);

  const navigationLinks = [
    { to: "/explore", label: "Explore" },
    { to: "/locations", label: "Our Locations" },
    { to: "/gym", label: "Gym" },
    {
      label: "Training & Services",
      dropdown: [
        { to: "/personal-training", label: "Personal Training" },
        { to: "/wellness", label: "Wellness Services" },
      ],
    },
    { to: "/work-spaces", label: "Work Spaces" },
  ];

  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <div className="">
        <div className="fixed top-0 w-[100%] z-[9999]">
          <nav
            className={`navbarWrapper fixed top-0 w-full  ${
              scrolled ? "scrolled" : ""
            } ${
              currentPath.includes("work-spaces") ||
              currentPath.includes("privacy-policy") ||
              currentPath.includes("terms-and-conditions") ||
              currentPath.includes("faqs") ||
              currentPath.includes("franchise") ||
              currentPath.includes("join-as-trainer") ||
              currentPath.includes("join-the-Movement") ||
              currentPath.includes("corporate-membership") ||
              currentPath.includes("about-us") ||
              currentPath.includes("contact-us") ||
              currentPath.includes("locations") ||
              currentPath.includes("explore")
                ? "!bg-[#000]"
                : ""
            }
            }`}
          >
            <div className="max-w-[1280px] w-full h-full mx-auto px-4 md:px-8 flex items-center justify-between">
              <Link
                to="/"
                className="flex items-center select-none [-webkit-user-select:none] [-webkit-touch-callout:none]"
              >
                <img
                  src={EvolveStrengthLogo}
                  alt="Evolve Logo"
                  className="md:w-[196px] w-[140px] cursor-pointer z-20 select-none [-webkit-user-select:none] [-webkit-user-drag:none]"
                  draggable="false"
                />
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center justify-center gap-8">
                {navigationLinks.map((link, index) => {
                  // Check if this is a dropdown
                  if (link.dropdown) {
                    const isDropdownActive = link.dropdown.some(
                      (dropdownItem) => currentPath === dropdownItem.to
                    );

                    return (
                      <React.Fragment key={link.label}>
                        {index === 3 && (
                          <div className="w-[1.5px] font-[vazirmatn] h-4 bg-[#F8F8F8]" />
                        )}
                        <div className="relative z-[9999] dropdown-container">
                          <button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className={`navBarLinks text-[#F8F8F8] flex flex-col items-center gap-1 ${
                              isDropdownActive ? "active" : ""
                            }`}
                          >
                            {link.label}
                            <ChevronDown
                              size={20}
                              className={`transition-transform duration-300 ${
                                isDropdownOpen ? "rotate-180" : ""
                              }`}
                            />
                          </button>

                          {/* Dropdown Menu */}
                          {isDropdownOpen && (
                            <div className="absolute top-[30px] left-0 space-y-4 z-[9999] bg-[#000] border border-[#ffffff20] rounded-[5px] min-w-[170px]  px-4 py-6 shadow-lg">
                              {link.dropdown.map((dropdownItem) => (
                                <Link
                                  key={dropdownItem.to}
                                  smooth
                                  to={dropdownItem.to}
                                  className="navBarLinks block   text-[#F8F8F8] hover:bg-[#ffffff10] transition-colors"
                                  onClick={() => setIsDropdownOpen(false)}
                                >
                                  {dropdownItem.label}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      </React.Fragment>
                    );
                  }

                  // Regular link
                  const isActive =
                    currentPath === link.to ||
                    (link.to === "/explore" &&
                      currentPath.startsWith("/explore")) ||
                    (link.to === "/locations" &&
                      currentPath.startsWith("/locations")) ||
                    (link.to === "/spaces" &&
                      currentPath.startsWith("/spaces"));

                  return (
                    <React.Fragment key={link.to}>
                      <Link
                        smooth
                        to={link.to}
                        className={`navBarLinks text-[#F8F8F8] ${
                          isActive ? "active" : ""
                        }`}
                      >
                        {link.label}
                      </Link>
                    </React.Fragment>
                  );
                })}
              </div>

              {/* Desktop CTA Button */}
              <div className="hidden md:flex items-center">
                <a href="/book-a-tour">
                  <button className="btnSecondary">Book a Free Tour</button>
                </a>
              </div>

              {/* Mobile Hamburger Menu */}
              <div className="md:hidden">
                <Sheet
                  open={isMobileMenuOpen}
                  onOpenChange={setIsMobileMenuOpen}
                >
                  <SheetTrigger asChild>
                    <button className="flex items-center justify-center w-10 h-10 rounded-[5px] bg-[#00000040] border border-[#fff] text-white transition-colors">
                      <Menu className="w-5 h-5" />
                    </button>
                  </SheetTrigger>
                  <SheetContent
                    side="left"
                    className="w-[290px] bg-[#000] border-r border-[#00000040] px-8 pt-[60px]"
                  >
                    {/* <SheetHeader className="border-b border-gray-700 pb-4 pt-[80px]">
                      <SheetTitle className="text-white text-left">
                        <img
                          src={EvolveStrengthLogo}
                          alt="Evolve Strength Logo"
                          className="w-[140px]"
                        />
                      </SheetTitle>
                    </SheetHeader> */}

                    <div className="flex flex-col space-y-6 mt-8">
                      {navigationLinks.map((link) => {
                        // Check if this is a dropdown - show items directly on mobile
                        if (link.dropdown) {
                          return (
                            <div
                              key={link.label}
                              className="flex flex-col space-y-3"
                            >
                              <span className="text-white text-lg font-medium">
                                {link.label}
                              </span>
                              <div className="flex flex-col space-y-2 pl-4">
                                {link.dropdown.map((dropdownItem) => (
                                  <Link
                                    key={dropdownItem.to}
                                    smooth
                                    to={dropdownItem.to}
                                    className="text-white/80 text-base font-medium hover:text-green-400 transition-colors"
                                    onClick={handleMobileLinkClick}
                                  >
                                    {dropdownItem.label}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          );
                        }

                        // Regular link
                        return (
                          <Link
                            key={link.to}
                            smooth
                            to={link.to}
                            className="text-white text-lg font-medium hover:text-green-400 transition-colors"
                            onClick={handleMobileLinkClick}
                          >
                            {link.label}
                          </Link>
                        );
                      })}

                      <div className="">
                        <a href="/book-a-tour">
                          <button className="btnSecondary">
                            Book a Free Tour
                          </button>
                        </a>
                      </div>
                      <img
                        src={ESFLogo}
                        alt="footerImage"
                        className="w-[220px] h-auto absolute bottom-[10px] right-[0px] opacity-30 "
                      />
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Navbar;
