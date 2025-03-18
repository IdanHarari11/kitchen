// Number counter animation
export const animateCounter = (element, target, duration = 2000, startNumber = 0) => {
  if (!element) return;
  
  const start = startNumber;
  const increment = Math.ceil(target / (duration / 16)); // 60 FPS
  let current = start;
  
  const updateCounter = () => {
    current += increment;
    if (current >= target) {
      element.textContent = target + (target.toString().includes('+') ? '' : '');
      return;
    }
    
    element.textContent = Math.floor(current) + (target.toString().includes('+') ? '+' : '');
    requestAnimationFrame(updateCounter);
  };
  
  updateCounter();
};

// Staggered animation for multiple elements
export const animateStaggered = (elements, className, delay = 100) => {
  if (!elements || !elements.length) return;
  
  elements.forEach((element, index) => {
    setTimeout(() => {
      element.classList.add(className);
    }, index * delay);
  });
};

// Animate on scroll
export const setupScrollAnimations = () => {
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  
  const checkScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;
    
    animatedElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      
      if (elementTop < triggerBottom) {
        const animationType = element.dataset.animation || 'fade-in';
        element.classList.add(animationType);
      }
    });
  };
  
  window.addEventListener('scroll', checkScroll);
  // Initial check
  setTimeout(checkScroll, 100);
};

// Smooth scroll to element
export const scrollToElement = (elementId, offset = 0) => {
  const element = document.getElementById(elementId);
  if (!element) return;
  
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - offset;
  
  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
};

// Parallax effect
export const applyParallax = () => {
  const parallaxElements = document.querySelectorAll('.parallax');
  
  const handleScroll = () => {
    const scrollY = window.pageYOffset;
    
    parallaxElements.forEach(element => {
      const speed = element.dataset.speed || 0.2;
      const yPos = -(scrollY * speed);
      element.style.transform = `translateY(${yPos}px)`;
    });
  };
  
  window.addEventListener('scroll', handleScroll);
}; 