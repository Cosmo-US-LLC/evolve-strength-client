import React, { useEffect, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
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

  const navigationLinks = [
    { to: "/explore", label: "Explore" },
    { to: "/personal-training", label: "Personal Training" },
    { to: "/wellness", label: "Wellness Services" },
    { to: "/locations", label: "Our Locations" },
    { to: "/work-spaces", label: "Work Spaces" },
  ];

  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <div className="">
        <div className="fixed top-0 w-[100%] z-[99]">
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
                  const isActive =
                    currentPath === link.to ||
                    (link.to === "/explore" &&
                      currentPath.startsWith("/explore")) ||
                    (link.to === "/personal-training" &&
                      currentPath.startsWith("/personal-training")) ||
                    (link.to === "/wellness" &&
                      currentPath.startsWith("/wellness")) ||
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
                      {index === 2 && (
                        <div className="w-[1.5px] font-[vazirmatn] h-4 bg-[#F8F8F8]" />
                      )}
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
                      {navigationLinks.map((link) => (
                        <Link
                          key={link.to}
                          smooth
                          to={link.to}
                          className="text-white text-lg font-medium hover:text-green-400 transition-colors"
                          onClick={handleMobileLinkClick}
                        >
                          {link.label}
                        </Link>
                      ))}

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
