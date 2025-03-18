/**
 * Smoothly scrolls to an element by ID with an optional offset
 * @param {string} elementId - The ID of the element to scroll to
 * @param {number} [offset=0] - Offset in pixels from the top of the element
 * @param {number} [duration=800] - Animation duration in milliseconds
 */
export const scrollToElement = (elementId, offset = 0, duration = 800) => {
  const element = document.getElementById(elementId);
  
  if (!element) {
    console.warn(`Element with ID ${elementId} not found`);
    return;
  }
  
  const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
  const targetPosition = elementPosition - offset;
  
  // Use native browser smooth scrolling if available
  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth'
  });
};

/**
 * Sets up smooth scrolling for all anchor links with hash (#) in the href
 * @param {number} offset - Offset from the top of the target element (e.g., for fixed header)
 */
export const setupSmoothScrolling = (offset = 80) => {
  // Only run in browser environment
  if (typeof window === 'undefined') return;
  
  // Function to handle click on anchor links
  const handleAnchorClick = (e) => {
    const href = e.currentTarget.getAttribute('href');
    
    // Check if the href is a hash link to an element on the page
    if (href.startsWith('#') && href.length > 1) {
      e.preventDefault();
      const targetId = href.substring(1);
      scrollToElement(targetId, offset);
      
      // Update URL without refreshing page
      window.history.pushState({}, '', href);
    }
  };
  
  // Add click event listeners after DOM is fully loaded
  const setupEventListeners = () => {
    const anchorLinks = document.querySelectorAll('a[href^="#"]:not([href="#"])');
    
    anchorLinks.forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick);
    });
  };
  
  // Set up the event listeners when the DOM is loaded
  if (document.readyState === 'complete') {
    setupEventListeners();
  } else {
    window.addEventListener('DOMContentLoaded', setupEventListeners);
  }
  
  // Clean up function to remove event listeners
  return () => {
    const anchorLinks = document.querySelectorAll('a[href^="#"]:not([href="#"])');
    
    anchorLinks.forEach(anchor => {
      anchor.removeEventListener('click', handleAnchorClick);
    });
  };
}; 