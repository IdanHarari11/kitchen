"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { scrollToElement } from "@/utils/scrollHelpers";

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    scrollToElement(targetId, 80);
  };

  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-10" />
        <Image
          src="/images/hero-kitchen.jpg" 
          alt="Luxury modern kitchen with European style cabinets and quartz countertops"
          fill
          priority
          className="object-cover"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN88OjpfwAI+QOoF8YQhgAAAABJRU5ErkJggg=="
          sizes="100vw"
          quality={90}
        />
      </div>

      {/* Content */}
      <div 
        className={`container mx-auto px-5 sm:px-6 lg:px-8 relative z-20 transform transition-all duration-1000 ease-out ${
          isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="max-w-3xl">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium rounded-full bg-primary-600/20 text-primary-400 backdrop-blur-sm">Premier Kitchen Remodeling</span>
          <h1 className="text-white font-bold leading-tight mb-6 text-4xl sm:text-5xl lg:text-6xl">
            Transform Your Kitchen with Precision & Luxury
          </h1>
          <h2 className="text-white/90 text-lg md:text-xl lg:text-2xl font-light mb-8">
            Shaker & European-Style Cabinets with Quartz Countertops – Designed for Perfection.
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={(e) => handleSmoothScroll(e, "contact")}
              className="btn btn-primary animate-glow flex items-center justify-center group"
            >
              <span>Schedule a Free 3D Design Consultation</span>
              <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
            <button 
              onClick={(e) => handleSmoothScroll(e, "gallery")}
              className="btn btn-outline border-white text-white hover:bg-white/10 flex items-center justify-center group"
            >
              <span>View Our Projects</span>
              <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14" />
              </svg>
            </button>
          </div>
          
          {/* Features Badge Bar */}
          <div className="mt-12 md:mt-16 bg-white/10 backdrop-blur-sm p-4 rounded-xl grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex items-center space-x-3 text-white">
              <div className="rounded-full bg-primary-500/90 p-2 flex-shrink-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <span className="text-sm font-medium">Premium Materials</span>
            </div>
            <div className="flex items-center space-x-3 text-white">
              <div className="rounded-full bg-primary-500/90 p-2 flex-shrink-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <span className="text-sm font-medium">3D Design Preview</span>
            </div>
            <div className="flex items-center space-x-3 text-white">
              <div className="rounded-full bg-primary-500/90 p-2 flex-shrink-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <span className="text-sm font-medium">10+ Years Experience</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button 
        onClick={(e) => handleSmoothScroll(e, "features")}
        aria-label="Scroll to features"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors duration-300"
      >
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </button>
    </section>
  );
};

export default HeroSection; 