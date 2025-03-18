import React from 'react';
import Image from 'next/image';

const CtaSection = ({ 
  title = "Transform Your Kitchen Today", 
  subtitle = "Schedule a free consultation and take the first step toward your dream kitchen",
  backgroundImage = "/images/cta-background.jpg",
  buttonText = "Get Free Consultation",
  darkOverlay = true
}) => {
  return (
    <section className="py-16 relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="Kitchen remodeling background"
          fill
          className="object-cover"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN88OjpfwAI+QOoF8YQhgAAAABJRU5ErkJggg=="
        />
        {darkOverlay && (
          <div className="absolute inset-0 bg-gray-900/70"></div>
        )}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            {title}
          </h2>
          <p className="text-lg mb-8 text-gray-200">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#contact" 
              className="px-8 py-3 rounded-md bg-primary-600 hover:bg-primary-700 text-white font-medium transition-colors duration-200 flex items-center justify-center"
            >
              {buttonText}
              <svg className="ml-2 -mr-1 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a 
              href="tel:+12135551234" 
              className="px-8 py-3 rounded-md bg-white/10 hover:bg-white/20 text-white font-medium transition-colors duration-200 flex items-center justify-center backdrop-blur-sm"
            >
              <svg className="mr-2 -ml-1 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498.4a1 1 0 01.71 1.22l-.321 1.61a1 1 0 01-1.172.79l-2.414-.2a2 2 0 00-2.131 1.196l-.612 1.611a2 2 0 001.152 2.566l1.604.485a1 1 0 01.67 1.235l-1 3a1 1 0 01-1.193.67l-2.066-.621a2 2 0 00-2.416 1.148l-.33.876a2 2 0 01-1.876 1.313H5a2 2 0 01-2-2V5z" />
              </svg>
              Call (213) 555-1234
            </a>
          </div>
          <p className="mt-6 text-gray-300 text-sm">
            No obligation. 100% free consultation. Same-day response.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CtaSection; 