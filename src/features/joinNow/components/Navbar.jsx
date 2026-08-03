import React from 'react';
import logoImage from '../assets/Evolve-Strength-Logo-and-Name-in-White-1.webp';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-brand-dark/20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-center py-3">
          <div className="flex items-center">
            {/* Logo Image */}
            <a href="/" className='w-fit'>
              <img 
                src={"https://evolve-strength.tor1.digitaloceanspaces.com/media/1763468266957-6752d638-c064-4522-9fdf-07204e850c71.svg"}
                alt="Evolve Strength" 
                className="w-[176px] h-[34px]"
              />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

