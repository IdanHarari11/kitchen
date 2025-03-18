'use client';

/**
 * Initialize animations when the page loads
 * This script should be imported in the root layout for global animation initialization
 */

import { useEffect } from 'react';

export default function AnimationInit() {
  useEffect(() => {
    // Apply fade-in animation to elements with the animate-on-scroll class
    setupScrollAnimations();
    
    // Apply parallax effects
    setupParallaxEffects();
    
    return () => {
      // Clean up any event listeners or observers
      cleanupScrollAnimations();
      cleanupParallaxEffects();
    };
  }, []);
  
  return null; // This component doesn't render anything
}

// Set up IntersectionObserver for scroll animations
function setupScrollAnimations() {
  // Store observers to clean them up later
  window.scrollObservers = window.scrollObservers || [];
  
  // Animate elements when they come into view
  const animateElements = document.querySelectorAll(
    '.animate-on-scroll, .slide-in-left, .slide-in-right'
  );
  
  if (animateElements.length === 0) return;
  
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add the visible class to slide elements
          if (entry.target.classList.contains('slide-in-left') || 
              entry.target.classList.contains('slide-in-right')) {
            entry.target.classList.add('visible');
          }
          
          // Add the fade-in class to animate-on-scroll elements
          if (entry.target.classList.contains('animate-on-scroll')) {
            entry.target.classList.add('fade-in');
          }
          
          // Stop observing after animation is triggered
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );
  
  animateElements.forEach((element) => {
    observer.observe(element);
  });
  
  // Store observer for cleanup
  window.scrollObservers.push(observer);
}

// Set up parallax effects
function setupParallaxEffects() {
  const parallaxElements = document.querySelectorAll('.parallax');
  
  if (parallaxElements.length === 0) return;
  
  // Store the parallax scroll handler to clean it up later
  window.parallaxScrollHandler = () => {
    const scrollY = window.scrollY;
    
    parallaxElements.forEach((element) => {
      const speed = element.dataset.speed || 0.2;
      const yPos = -(scrollY * speed);
      
      // Apply transform to the first child to create parallax effect
      const target = element.querySelector('.parallax-content') || element.firstElementChild;
      if (target) {
        target.style.transform = `translateY(${yPos}px)`;
      }
    });
  };
  
  // Add scroll event listener
  window.addEventListener('scroll', window.parallaxScrollHandler);
  
  // Trigger once on load
  window.parallaxScrollHandler();
}

// Clean up scroll animation observers
function cleanupScrollAnimations() {
  if (window.scrollObservers) {
    window.scrollObservers.forEach((observer) => {
      observer.disconnect();
    });
    window.scrollObservers = [];
  }
}

// Clean up parallax effects
function cleanupParallaxEffects() {
  if (window.parallaxScrollHandler) {
    window.removeEventListener('scroll', window.parallaxScrollHandler);
    window.parallaxScrollHandler = null;
  }
} 