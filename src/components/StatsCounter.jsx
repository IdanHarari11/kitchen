'use client';

import { useEffect, useRef, useState } from 'react';

const stats = [
  {
    id: 1,
    value: 250,
    label: 'Projects Completed',
    suffix: '+',
    icon: '🏠'
  },
  {
    id: 2, 
    value: 15,
    label: 'Years Experience',
    suffix: '+',
    icon: '🔧'
  },
  {
    id: 3,
    value: 98,
    label: 'Client Satisfaction',
    suffix: '%',
    icon: '⭐'
  },
  {
    id: 4,
    value: 45,
    label: 'Design Awards',
    suffix: '',
    icon: '🏆'
  }
];

const StatsCounter = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState(stats.map(() => 0));
  const [animationComplete, setAnimationComplete] = useState(stats.map(() => false));

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

  useEffect(() => {
    if (!isVisible) return;

    const intervals = stats.map((stat, index) => {
      // Skip if animation is already complete
      if (animationComplete[index]) return null;

      const duration = 2000; // ms
      const incrementsPerSecond = 60;
      const totalIncrements = (duration / 1000) * incrementsPerSecond;
      const incrementValue = stat.value / totalIncrements;
      const interval = duration / totalIncrements;

      return setInterval(() => {
        setCounters(prev => {
          const newCounters = [...prev];
          if (newCounters[index] < stat.value) {
            newCounters[index] = Math.min(
              newCounters[index] + incrementValue,
              stat.value
            );
            
            // Mark animation as complete when we reach the target value
            if (newCounters[index] >= stat.value) {
              setAnimationComplete(prev => {
                const newComplete = [...prev];
                newComplete[index] = true;
                return newComplete;
              });
            }
          }
          return newCounters;
        });
      }, interval);
    });

    return () => {
      intervals.forEach(interval => interval && clearInterval(interval));
    };
  }, [isVisible, animationComplete]);

  return (
    <section 
      ref={sectionRef}
      className="py-16 bg-gray-50 dark:bg-gray-900"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our <span className="text-gradient">Numbers</span> Tell The Story
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={stat.id}
              className={`
                card-neuro p-6 text-center hover-lift
                ${isVisible ? `fadeInUp stagger-delay-${index + 1}` : 'opacity-0'}
                ${animationComplete[index] ? 'counter-animation-complete' : ''}
              `}
            >
              <div className="text-5xl mb-4">{stat.icon}</div>
              <div className="text-4xl font-bold mb-2 flex items-center justify-center">
                <span>{Math.round(counters[index])}</span>
                <span>{stat.suffix}</span>
              </div>
              <p className="text-gray-600 dark:text-gray-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter; 