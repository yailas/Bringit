import React from 'react';

const Logo = ({ className = "w-10 h-10" }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Globe Circle Background */}
      <div className="absolute inset-0 bg-bringit-900 rounded-full"></div>
      
      {/* Paper Plane Icon */}
      <svg 
        viewBox="0 0 24 24" 
        fill="none" 
        className="w-2/3 h-2/3 text-bringit-400 relative transform translate-x-[-2px] translate-y-[1px]"
        stroke="currentColor" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <path d="M22 2L11 13" />
        <path d="M22 2L15 22L11 13L2 9L22 2Z" />
      </svg>
    </div>
  );
};

export default Logo;
