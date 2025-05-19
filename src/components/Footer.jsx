import React from 'react';
import FacebookLogo from '../assets/facebooklogo.png';
import InstaLogo from '../assets/instalogo.png';
import BeechersLogo from '../assets/beecherslogo.png';

function Footer() {
  return (
    <footer className="bg-[#c2093b] text-white p-4 flex justify-between items-center">
      <div className="flex items-center gap-2 text-lg font-black custom-font">
        <img src={BeechersLogo} width="40" alt="Beecher's Logo" />
        <span className="hidden md:inline">BEECHER'S ICE CREAM</span>
      </div>
      <div className="flex space-x-4">
        <a href="https://www.facebook.com/beecherice/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
          <img src={FacebookLogo} alt="Visit our Facebook page" width="40" className="rounded" />
        </a>
        <a href="https://www.instagram.com/Beechers_icecream1691/#/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
          <img src={InstaLogo} alt="Visit our Instagram page" width="40" className="rounded" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
