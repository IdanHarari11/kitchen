"use client";

import FeatureCard from './FeatureCard';
import StatsCounter from './StatsCounter';

const features = [
  {
    id: 1,
    title: "3D Design Preview",
    description: "Visualize your new kitchen in stunning detail before any work begins. Our 3D design technology helps you make confident decisions and avoid costly mistakes.",
    icon: (
      <svg className="w-10 h-10 text-primary-600 dark:text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
      </svg>
    ),
    imageSrc: "/images/feature-3d-design.jpg"
  },
  {
    id: 2,
    title: "Premium European & Shaker Cabinets",
    description: "Choose from our exquisite range of European and Shaker style cabinets, crafted from the highest quality materials for durability and stunning aesthetics.",
    icon: (
      <svg className="w-10 h-10 text-primary-600 dark:text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    imageSrc: "/images/feature-cabinets.jpg"
  },
  {
    id: 3,
    title: "Luxury Quartz Countertops",
    description: "Our quartz countertops offer unparalleled beauty and durability. Resistant to stains, scratches, and heat, they're the perfect blend of luxury and practicality.",
    icon: (
      <svg className="w-10 h-10 text-primary-600 dark:text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    imageSrc: "/images/feature-quartz.jpg"
  },
  {
    id: 4,
    title: "Expert Installation & Craftsmanship",
    description: "Our team of skilled craftsmen ensures flawless installation with meticulous attention to detail, creating kitchens of exceptional quality that will stand the test of time.",
    icon: (
      <svg className="w-10 h-10 text-primary-600 dark:text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    imageSrc: "/images/feature-installation.jpg"
  }
];

const FeatureSection = () => {
  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4 text-3xl md:text-4xl font-bold">
            Why Choose <span className="text-gradient">Master Kitchen</span>
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            We combine cutting-edge technology with premium materials and expert craftsmanship
            to create kitchens that are as functional as they are beautiful.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={feature.id} 
              title={feature.title} 
              description={feature.description} 
              imageSrc={feature.imageSrc}
              index={index} 
            />
          ))}
        </div>
        
        {/* Animated Stats Counter */}
        <StatsCounter />
      </div>
    </section>
  );
};

export default FeatureSection; 