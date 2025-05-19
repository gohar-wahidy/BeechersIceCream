import React, { useState } from 'react';
import BeechersLogo from '../assets/beecherslogo.png';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#c2093b] text-white p-4">
      <div className="text-center">
        <div className="flex items-center justify-center gap-x-2">
          <img src={BeechersLogo} width="40" alt="Beecher's Logo" className="hidden md:block" />
          <h1 className="text-2xl md:text-3xl font-bold custom-font">BEECHER'S ICE CREAM</h1>
        </div>
      </div>

      <div className="mt-3 md:hidden text-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer border border-white rounded whiteHeaderHover transition duration-300"
        >
          <span>
            <img
              src={BeechersLogo}
              width="40"
              alt="Open menu"
              className="inline-block"
            />
          </span>
          <span className='text-xs'> ►</span>
        </button>

        <div
          className={`transition-all overflow-hidden duration-300 ease-in-out ${
            isOpen ? 'max-h-60' : 'max-h-0'
          }`}
        >
          <ul className="flex flex-col items-center space-y-2 bg-[#c2093b] p-4 rounded shadow-md">
            <li><a href="/" className="whiteHeaderHover">HOME</a></li>
            <li><a href="/menu" className="whiteHeaderHover">OUR MENU</a></li>
            <li><a href="/contact" className="whiteHeaderHover">CONTACT US</a></li>
            <li className='-mb-3'><a href="/application" className="whiteHeaderHover">APPLICATION</a></li>
          </ul>
        </div>
      </div>

      <nav className="mt-4 font-[550] hidden md:block">
        <ul className="flex justify-center space-x-4">
          <li><a href="/" className="whiteHeaderHover">HOME</a></li>
          <li><a href="/menu" className="whiteHeaderHover">OUR MENU</a></li>
          <li><a href="/contact" className="whiteHeaderHover">CONTACT US</a></li>
          <li><a href="/application" className="whiteHeaderHover">APPLICATION</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;