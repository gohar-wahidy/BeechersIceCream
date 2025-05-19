import React from 'react';

function Button({ onClick, children, className }) {
  return (
    <button
      onClick={onClick}
      className={`bg-[#c2093b] text-white font-bold py-2 px-4 rounded transition duration-300 hover:bg-[#d2093b] cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;