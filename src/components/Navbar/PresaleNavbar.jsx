import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { Menu } from "lucide-react";
import EvolveStrengthLogo from "../../assets/images/home/navbar/Evolve-logo-light.svg";
import { Sheet, SheetContent, SheetTrigger } from "../../components/ui/sheet";

function PresaleNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const navigationLinks = [
    { to: "/about-us", label: "About" },
    { to: "#price", label: "Price" },
    { to: "#how-to-win", label: "How to win" },
  ];

  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-[9999] backdrop-blur-[7.5px] bg-[rgba(0,0,0,0.1)]">
      <div className="max-w-[1280px] w-full h-[60px] md:h-[80px] mx-auto px-4 md:px-8 flex items-center justify-between">
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

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-5 md:gap-[21px]">
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
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden">
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
        </div>
      </div>
    </nav>
  );
}

export default PresaleNavbar;
