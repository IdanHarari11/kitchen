'use client';

import { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-6 right-6 z-50 
        p-3 rounded-full bg-primary-600 text-white
        shadow-lg hover:bg-primary-700 transition-all duration-300
        transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
        focus:outline-none focus:ring-2 focus:ring-primary-400
        group
      `}
      aria-label="Scroll to top"
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="h-6 w-6 transform transition-transform duration-300 group-hover:-translate-y-1" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M5 11l7-7 7 7M5 19l7-7 7 7" 
        />
      </svg>
      <span className="sr-only">Scroll to top</span>
    </button>
  );
};

export default ScrollToTop; 