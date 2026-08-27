import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { Menu } from "lucide-react";
import { useLocation, Link as RouterLink } from "react-router-dom";
import EvolveStrengthLogo from "../../assets/images/home/navbar/Evolve-logo-light.svg";
import { Sheet, SheetContent, SheetTrigger } from "../../components/ui/sheet";
import { southEdmontonCommonBookTourHref } from "@/constants/southEdmontonCommonTour";

function PresaleNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const location = useLocation();
  const isSouthEdmontonCommonPage =
    location.pathname === "/tour-south-edmonton-common";
  const isParkRoyalTermsPage =
    location.pathname === "/park-royal-terms-and-conditions";
  const isParkRoyalPresalePage = location.pathname === "/presale-park-royal";

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 150);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationLinks = [
    { to: "/about-us", label: "About" },
    { to: "#price", label: "Price" },
    { to: "#how-to-win", label: "How to win" },
  ];

  const parkRoyalLinks = [
    { to: "#founder-rate", label: "Founder Rate" },
    { to: "#faq", label: "FAQ" },
  ];

  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  const scrollToSection = (hash) => {
    const el = document.getElementById(hash.replace("#", ""));
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleParkRoyalLinkClick = (hash) => {
    scrollToSection(hash);
    handleMobileLinkClick();
  };

  return (
    <nav className="fixed top-0 w-full z-[9999] backdrop-blur-[7.5px] bg-[rgba(0,0,0,0.1)] overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full bg-[rgba(0,0,0,0.8)] transition-[height] duration-[0.6s] ease-in-out pointer-events-none"
        style={{ height: scrolled || isParkRoyalTermsPage ? "100%" : "0%" }}
      />

      <div className="relative z-10 max-w-[1280px] w-full h-[60px] md:h-[80px] mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="#"
          className="flex items-center select-none [-webkit-user-select:none] [-webkit-touch-callout:none]"
        >
          <img
            src={EvolveStrengthLogo}
            alt="Evolve Logo"
            className="md:w-[175px] w-[140px] cursor-pointer z-20 select-none [-webkit-user-select:none] [-webkit-user-drag:none]"
            draggable="false"
          />
        </Link>

        {isSouthEdmontonCommonPage && (
          <a
            href={southEdmontonCommonBookTourHref()}
            className="w-fit z-10"
          >
            <button type="button" className="btnPrimary uppercase">
              Book a Free Tour
            </button>
          </a>
        )}

        {isParkRoyalPresalePage && (
          <>
            {/* Desktop: Founder Rate / FAQ links + Lock My Rate Now button */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              {parkRoyalLinks.map((link) => (
                <button
                  key={link.to}
                  type="button"
                  onClick={() => scrollToSection(link.to)}
                  className="navBarLinks text-[#f8f8f8] text-[16px] font-[400] font-[Vazirmatn] capitalize bg-transparent border-0 p-0 cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
              <RouterLink to="/park-royal-waitlist" className="w-fit">
                <button type="button" className="btnPrimary uppercase whitespace-nowrap">
                  Lock My Rate Now
                </button>
              </RouterLink>
            </div>

            {/* Mobile: hamburger for Founder Rate / FAQ / Lock My Rate Now */}
            <div className="flex md:hidden items-center">
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <button className="flex items-center justify-center w-10 h-10 shrink-0 rounded-[5px] bg-[#00000040] border border-[#fff] text-white transition-colors">
                    <Menu className="w-5 h-5" />
                  </button>
                </SheetTrigger>
                <SheetContent
                  side="left"
                  className="w-[290px] bg-[#000] border-r border-[#00000040] px-8 pt-[60px]"
                >
                  <div className="flex flex-col space-y-6 mt-8">
                    {parkRoyalLinks.map((link) => (
                      <button
                        key={link.to}
                        type="button"
                        onClick={() => handleParkRoyalLinkClick(link.to)}
                        className="text-white text-lg font-medium hover:text-[#4ab04a] transition-colors bg-transparent border-0 p-0 text-left cursor-pointer"
                      >
                        {link.label}
                      </button>
                    ))}
                    <RouterLink
                      to="/park-royal-waitlist"
                      className="w-fit"
                      onClick={handleMobileLinkClick}
                    >
                      <button type="button" className="btnPrimary uppercase whitespace-nowrap">
                        Lock My Rate Now
                      </button>
                    </RouterLink>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </>
        )}

        {/* Desktop Navigation */}
        {/* <div className="hidden md:flex items-center gap-5 md:gap-[21px]">
          {navigationLinks.map((link) => (
            <Link
              key={link.to}
              smooth
              to={link.to}
              className="navBarLinks text-[#f8f8f8] text-[16px] font-[400] font-[Vazirmatn] capitalize"
            >
              {link.label}
            </Link>
          ))}
        </div> */}

        {/* Mobile Hamburger Menu */}
        {/* <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <button className="flex items-center justify-center w-10 h-10 rounded-[5px] bg-[#00000040] border border-[#fff] text-white transition-colors">
                <Menu className="w-5 h-5" />
              </button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="w-[290px] bg-[#000] border-r border-[#00000040] px-8 pt-[60px]"
            >
              <div className="flex flex-col space-y-6 mt-8">
                {navigationLinks.map((link) => (
                  <Link
                    key={link.to}
                    smooth
                    to={link.to}
                    className="text-white text-lg font-medium hover:text-green-400 transition-colors capitalize"
                    onClick={handleMobileLinkClick}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div> */}
      </div>
    </nav>
  );
}

export default PresaleNavbar;
