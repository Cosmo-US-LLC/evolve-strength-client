import React from "react";
import { Instagram, ArrowRight } from "lucide-react";

function Footer() {
  return (
    <div className="relative">
      <div className="max-w-[1280px] px-8 pb-12 mx-auto w-full h-full flex flex-col">
        <div className="flex ">
          <div>
            <div className="bg-[#1a1a1a] text-white p-6 rounded-xl max-w-md">
              {/* Logo (replace with actual <img> if available) */}
              <div className="mb-4">
                <h1 className="text-xl font-bold text-white">
                  EVOLVE <span className="text-green-500">STRENGTH</span>
                </h1>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-300 mb-6 leading-relaxed">
                At Evolve Strength, we're redefining fitness with cutting-edge
                gyms stocked with an abundance of top-tier equipment, ensuring
                you never wait and can dive into a premium workout experience.
              </p>

              {/* Stay in Touch */}
              <h3 className="text-sm font-semibold uppercase mb-1">
                Stay in Touch
              </h3>
              <p className="text-sm text-gray-400 mb-4">
                Subscribe to receive updates, access to exclusive deals, and
                more
              </p>

              {/* Input with arrow */}
              <div className="flex items-center border border-gray-700 rounded-md overflow-hidden">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="bg-transparent px-4 py-2 text-sm w-full placeholder-gray-500 focus:outline-none"
                />
                <button className="p-2 pr-3 text-green-500 hover:text-green-400">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div>
              <div className="bg-black text-white border-t border-t-[#2b2b2b] py-6">
                <div className="max-w-[1280px] mx-auto px-6">
                  {/* Links with separators */}
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300 mb-4">
                    <a href="#" className="hover:underline">
                      Become a Trainer
                    </a>
                    <span className="text-gray-600">/</span>
                    <a href="#" className="hover:underline">
                      Become a Practitioner
                    </a>
                    <span className="text-gray-600">/</span>
                    <a href="#" className="hover:underline">
                      Franchise with Evolve
                    </a>
                  </div>

                  {/* Label */}
                  <p className="text-[10px] text-gray-500 uppercase tracking-wide border-t border-t-[#2b2b2b] pt-3">
                    Quick Links
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-black text-white px-6 py-10">
              <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between gap-10">
                {/* Left Column */}
                <div className="space-y-3 flex flex-col">
                  <a href="#" className="text-sm text-gray-300 hover:underline">
                    About Us
                  </a>
                  <a href="#" className="text-sm text-gray-300 hover:underline">
                    Our Locations
                  </a>
                  <a href="#" className="text-sm text-gray-300 hover:underline">
                    Corporate Membership
                  </a>
                  <a href="#" className="text-sm text-gray-300 hover:underline">
                    Join the Movement
                  </a>

                  <button className="mt-4 bg-green-600 hover:bg-green-700 text-white text-xs font-semibold px-6 py-2 rounded-md transition">
                    TAKE A TOUR
                  </button>
                </div>

                {/* Right Column */}
                <div className="space-y-3 flex flex-col">
                  <a href="#" className="text-sm text-gray-300 hover:underline">
                    Careers
                  </a>
                  <a href="#" className="text-sm text-gray-300 hover:underline">
                    FAQs
                  </a>
                  <a href="#" className="text-sm text-gray-300 hover:underline">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-black text-white py-8">
          <div className="max-w-[1280px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Instagram Icon */}
            <div className="border border-green-600 rounded-full p-3">
              <Instagram className="w-6 h-6 text-green-500" />
            </div>

            {/* Contact Info */}
            <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
              {/* Phone */}
              <div>
                <p className="text-xs uppercase text-gray-400 tracking-wide">
                  Selection Committee
                </p>
                <p className="text-sm font-medium mt-1">+1 891 989-11-92</p>
              </div>

              {/* Email */}
              <div>
                <p className="text-xs uppercase text-gray-400 tracking-wide">
                  Email
                </p>
                <p className="text-sm font-medium mt-1">
                  info@evolvestrength.com
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <footer className="bg-black text-white py-6">
            <div className="max-w-[1280px] mx-auto px-6 flex justify-between items-center text-sm">
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
              <span className="text-gray-500 text-xs text-center">
                Copyright © 2025 Evolve Strength
              </span>
              <a href="#" className="hover:underline">
                Terms of Service
              </a>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Footer;
