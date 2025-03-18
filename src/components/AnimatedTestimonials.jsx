'use client';

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

// Sample testimonial data
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Homeowner in Los Angeles",
    imageUrl: "/images/testimonial-1.jpg",
    content: "Master Kitchen transformed our outdated space into a stunning modern kitchen. The 3D design they created helped us visualize the end result perfectly. Their Shaker cabinets and quartz countertops are absolutely beautiful and the craftsmanship is impeccable.",
    rating: 5,
    videoUrl: null
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    role: "New Home Buyer",
    imageUrl: "/images/testimonial-2.jpg",
    content: "As first-time homeowners, we were overwhelmed with the kitchen renovation process. Master Kitchen guided us through every step. The European-style cabinets they installed are not only gorgeous but incredibly functional. Highly recommend!",
    rating: 5,
    videoUrl: "/videos/testimonial-1.mp4"
  },
  {
    id: 3,
    name: "Jennifer and David Lee",
    role: "Home Remodelers",
    imageUrl: "/images/testimonial-3.jpg",
    content: "We've remodeled three kitchens over the years, and Master Kitchen provided by far the best experience. Their 3D design process saved us from making costly mistakes, and the quality of materials is outstanding. The quartz countertops are stunning.",
    rating: 5,
    videoUrl: null
  },
  {
    id: 4,
    name: "Robert Thompson",
    role: "Retired Homeowner",
    imageUrl: "/images/testimonial-4.jpg",
    content: "After 30 years with the same kitchen, we decided it was time for a change. Master Kitchen brought our vision to life with their gorgeous Shaker style cabinets. The whole process was smooth and their attention to detail is remarkable.",
    rating: 4,
    videoUrl: "/videos/testimonial-2.mp4"
  },
  {
    id: 5,
    name: "Emily Chen",
    role: "Interior Designer",
    imageUrl: "/images/testimonial-5.jpg",
    content: "As an interior designer, I have high standards for kitchen renovations. Master Kitchen exceeded all my expectations. Their European style cabinets are exceptional quality and the installation was perfect. I'll be recommending them to all my clients.",
    rating: 5,
    videoUrl: null
  }
];

const StarRating = ({ rating }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${
            i < rating ? "text-yellow-400" : "text-gray-300 dark:text-gray-600"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

const TestimonialCard = ({ testimonial, onClick, index, isActive }) => {
  return (
    <div 
      className={`
        card p-6 h-full flex flex-col 
        transition-all duration-500 ease-in-out
        ${testimonial.videoUrl ? 'cursor-pointer hover:shadow-lg' : ''}
        ${isActive 
          ? 'opacity-100 translate-x-0 scale-100' 
          : 'opacity-0 translate-x-20 scale-95 pointer-events-none'}
        hover-lift
      `}
      style={{ 
        transitionDelay: `${(index % 5) * 100}ms`,
      }}
      onClick={testimonial.videoUrl ? onClick : undefined}
    >
      <div className="flex items-start mb-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4 flex-shrink-0">
          <Image
            src={testimonial.imageUrl}
            alt={testimonial.name}
            fill
            className="object-cover"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN88OjpfwAI+QOoF8YQhgAAAABJRU5ErkJggg=="
          />
        </div>
        <div>
          <h4 className="font-semibold">{testimonial.name}</h4>
          <p className="text-gray-600 dark:text-gray-400 text-sm">{testimonial.role}</p>
          <StarRating rating={testimonial.rating} />
        </div>
        {testimonial.videoUrl && (
          <div className="ml-auto flex-shrink-0 text-primary-500 group-hover:animate-pulse">
            <svg className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        )}
      </div>
      <blockquote className="text-gray-700 dark:text-gray-300 italic flex-grow">
        "{testimonial.content}"
      </blockquote>
    </div>
  );
};

const VideoModal = ({ testimonial, onClose }) => {
  const videoRef = useRef(null);
  const modalRef = useRef(null);

  useEffect(() => {
    // Add animation class after component mounts for entrance effect
    setTimeout(() => {
      if (modalRef.current) {
        modalRef.current.classList.add('scale-100', 'opacity-100');
        modalRef.current.classList.remove('scale-95', 'opacity-0');
      }
    }, 10);

    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  if (!testimonial) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
      onClick={onClose}
    >
      <div 
        ref={modalRef}
        className="relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden max-w-3xl w-full transition-all duration-300 transform scale-95 opacity-0"
        onClick={e => e.stopPropagation()}
      >
        <div className="p-4 flex items-center justify-between border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center">
            <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3">
              <Image
                src={testimonial.imageUrl}
                alt={testimonial.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h4 className="font-semibold">{testimonial.name}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="relative">
          <video 
            ref={videoRef}
            className="w-full aspect-video"
            controls
            autoPlay
            src={testimonial.videoUrl}
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

const AnimatedTestimonials = () => {
  const [activeVideoTestimonial, setActiveVideoTestimonial] = useState(null);
  const [currentSet, setCurrentSet] = useState(0);
  const itemsPerSet = 3;
  const totalSets = Math.ceil(testimonials.length / itemsPerSet);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSet((prev) => (prev + 1) % totalSets);
    }, 6000);

    return () => clearInterval(interval);
  }, [totalSets]);

  // Detect when section is in viewport
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  const handleOpenVideo = (testimonial) => {
    if (testimonial.videoUrl) {
      setActiveVideoTestimonial(testimonial);
    }
  };

  const getCurrentTestimonials = () => {
    const start = currentSet * itemsPerSet;
    return testimonials.slice(start, start + itemsPerSet);
  };

  return (
    <section 
      ref={sectionRef} 
      id="testimonials" 
      className="py-20 bg-gray-50 dark:bg-gray-800"
    >
      <div className="container mx-auto px-4">
        <div className={`
          text-center max-w-3xl mx-auto mb-16
          transition-all duration-700 transform
          ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
        `}>
          <h2 className="mb-4 text-3xl md:text-4xl font-bold">
            What Our <span className="text-gradient">Clients</span> Say
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Don't just take our word for it. Hear from homeowners across Los Angeles who have 
            transformed their kitchens with our premium cabinet and countertop solutions.
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {getCurrentTestimonials().map((testimonial, index) => (
              <TestimonialCard 
                key={testimonial.id} 
                testimonial={testimonial} 
                index={index}
                isActive={isVisible}
                onClick={() => handleOpenVideo(testimonial)}
              />
            ))}
          </div>

          {/* Carousel controls */}
          <div className="mt-10 flex justify-center space-x-2">
            {Array.from({ length: totalSets }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSet(index)}
                className={`
                  w-3 h-3 rounded-full transition-all duration-300
                  ${currentSet === index 
                    ? 'bg-primary-600 w-8' 
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'}
                `}
                aria-label={`View testimonial set ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Overall Rating Section */}
        <div className={`
          mt-16 max-w-4xl mx-auto glass-panel p-8
          transition-all duration-700 transform delay-300
          ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
        `}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">Overall Customer Rating</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Based on 147 verified customer reviews
              </p>
              <div className="flex space-x-4 items-center">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-6 h-6 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-3xl font-bold">4.9/5</span>
              </div>
            </div>
            
            <div className="text-center bg-white dark:bg-gray-700 rounded-xl p-6 shadow-sm hover-lift">
              <div className="flex justify-center items-center space-x-2 mb-3">
                <svg className="w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-semibold">100% Satisfaction Guarantee</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                We stand behind our work with a full satisfaction guarantee.
              </p>
              <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-primary-600 px-8 py-3 text-white transition duration-300 ease-out">
                <span className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-700 transition-all duration-300 ease-out group-hover:scale-105"></span>
                <span className="relative flex items-center gap-2">
                  Schedule Your Free Consultation
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
        </div>
      </div>

      {/* Video Testimonial Modal */}
      {activeVideoTestimonial && (
        <VideoModal 
          testimonial={activeVideoTestimonial} 
          onClose={() => setActiveVideoTestimonial(null)}
        />
      )}
    </section>
  );
};

export default AnimatedTestimonials; 