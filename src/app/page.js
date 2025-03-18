'use client';

import { useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeatureSection';
import AboutSection from '@/components/AboutSection';
import ProcessSection from '@/components/ProcessSection';
import ServicesSection from '@/components/ServicesSection';
import BeforeAfterSection from '@/components/BeforeAfterSection';
import AnimatedTestimonials from '@/components/AnimatedTestimonials';
import FaqSection from '@/components/FaqSection';
import CtaSection from '@/components/CtaSection';
import StatsSection from '@/components/StatsSection';
import GallerySection from '@/components/Gallery';
import ContactSection from '@/components/ContactForm';
import { setupSmoothScrolling } from '@/utils/scrollHelpers';

export default function Home() {
  useEffect(() => {
    // Setup smooth scrolling with an offset for the fixed header
    const cleanup = setupSmoothScrolling(80);
    
    // Apply animations to elements that should animate on page load
    document.querySelectorAll('.animate-on-scroll').forEach(element => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('fade-in');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );
      
      observer.observe(element);
    });
    
    return () => {
      // Clean up event listeners
      if (cleanup) cleanup();
    };
  }, []);

  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <StatsSection />
      <ServicesSection />
      <ProcessSection />
      <BeforeAfterSection />
      <CtaSection 
        title="Ready to Start Your Dream Kitchen Project?" 
        subtitle="Take the first step toward transforming your kitchen with our expert team"
      />
      <GallerySection />
      <AnimatedTestimonials />
      <FaqSection />
      <ContactSection />
    </main>
  );
}
