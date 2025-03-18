'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';

const FeatureCard = ({ title, description, imageSrc, index = 0 }) => {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.disconnect();
      }
    };
  }, []);
  
  // Determine animation direction - alternate between left and right
  const slideDirection = index % 2 === 0 ? 'slide-in-left' : 'slide-in-right';
  
  return (
    <div 
      ref={cardRef}
      className={`
        flex flex-col bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden
        hover-lift
        ${slideDirection} ${isVisible ? 'visible' : ''}
        stagger-delay-${(index % 5) + 1}
      `}
    >
      <div className="relative h-64 w-full hover-zoom">
        {imageSrc && (
          <Image
            src={imageSrc}
            alt={title}
            fill
            style={{ objectFit: 'cover' }}
            priority={index < 2} // Prioritize loading for first two cards
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
          <h3 className="text-white text-xl md:text-2xl font-bold p-6">{title}</h3>
        </div>
      </div>
      
      <div className="p-6 flex-grow">
        <p className="text-gray-700 dark:text-gray-300">{description}</p>
      </div>
      
      <div className="px-6 pb-6">
        <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-primary-600 px-8 py-3 text-white transition duration-300 ease-out">
          <span className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-700 transition-all duration-300 ease-out group-hover:scale-105"></span>
          <span className="relative flex items-center gap-2">
            Learn More
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path 
                fillRule="evenodd" 
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" 
                clipRule="evenodd" 
              />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
};

export default FeatureCard; 