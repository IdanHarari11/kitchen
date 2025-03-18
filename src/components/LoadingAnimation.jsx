'use client';

import React from 'react';

const LoadingAnimation = ({ size = 'medium', color = 'primary', fullScreen = false }) => {
  // Size classes
  const sizeClasses = {
    small: 'w-6 h-6',
    medium: 'w-12 h-12',
    large: 'w-16 h-16',
  };

  // Color classes
  const colorClasses = {
    primary: 'text-primary-600 dark:text-primary-400',
    accent: 'text-accent-500 dark:text-accent-400',
    white: 'text-white',
    gray: 'text-gray-600 dark:text-gray-400',
  };

  // Container classes
  const containerClasses = fullScreen 
    ? 'fixed inset-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm flex items-center justify-center z-50' 
    : 'flex items-center justify-center';

  return (
    <div className={containerClasses}>
      <div className="relative">
        {/* Spinner animation */}
        <div 
          className={`${sizeClasses[size]} ${colorClasses[color]} animate-spin`}
        >
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle 
              className="opacity-25" 
              cx="12" 
              cy="12" 
              r="10" 
              stroke="currentColor" 
              strokeWidth="4"
            />
            <path 
              className="opacity-75" 
              fill="currentColor" 
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        </div>
        
        {/* Optional pulse effect behind spinner */}
        <div className={`
          absolute inset-0 rounded-full 
          ${colorClasses[color]} opacity-30
          animate-ping
        `}></div>
      </div>
      
      {/* Optional loading text for full screen version */}
      {fullScreen && (
        <p className={`${colorClasses[color]} absolute top-[55%] font-medium`}>
          Loading amazing kitchens...
        </p>
      )}
    </div>
  );
};

// Kitchen-themed loading component
export const KitchenLoadingAnimation = ({ fullScreen = false }) => {
  return (
    <div className={
      fullScreen 
        ? 'fixed inset-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm flex flex-col items-center justify-center z-50' 
        : 'flex flex-col items-center justify-center py-8'
    }>
      <div className="relative mb-8">
        {/* Kitchen icon with animated elements */}
        <svg 
          className="w-24 h-24 text-primary-600 dark:text-primary-400" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Cabinet base */}
          <rect 
            x="2" 
            y="6" 
            width="20" 
            height="14" 
            rx="1" 
            className="text-gray-300 dark:text-gray-700" 
            stroke="currentColor" 
            strokeWidth="1.5" 
          />
          
          {/* Counter top */}
          <rect 
            x="1" 
            y="6" 
            width="22" 
            height="2" 
            className="text-gray-400 dark:text-gray-600 fill-current" 
          />
          
          {/* Cabinet doors with animation */}
          <rect 
            x="3" 
            y="9" 
            width="7" 
            height="10" 
            rx="0.5" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            className="animate-pulse"
          />
          <rect 
            x="14" 
            y="9" 
            width="7" 
            height="10" 
            rx="0.5" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            className="animate-pulse"
            style={{ animationDelay: '0.3s' }}
          />
          
          {/* Door handles */}
          <rect 
            x="8.5" 
            y="13" 
            width="1" 
            height="2" 
            className="fill-current" 
          />
          <rect 
            x="19.5" 
            y="13" 
            width="1" 
            height="2" 
            className="fill-current" 
          />
          
          {/* Sink with water animation */}
          <circle 
            cx="12" 
            cy="4" 
            r="1" 
            className="text-blue-500 dark:text-blue-400 fill-current" 
          />
          <path 
            d="M12 5 L12 2" 
            stroke="currentColor" 
            strokeWidth="0.75"
            className="text-blue-500 dark:text-blue-400 animate-[bounce_1s_ease-in-out_infinite]" 
          />
        </svg>
        
        {/* Animated circle */}
        <div className="absolute inset-0 rounded-full opacity-20 animate-ping" 
          style={{ backgroundColor: 'currentColor' }}></div>
      </div>
      
      <p className="text-primary-600 dark:text-primary-400 font-medium animate-pulse">
        Preparing your dream kitchen...
      </p>
    </div>
  );
};

export default LoadingAnimation; 