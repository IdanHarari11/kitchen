"use client";

import { useRef, useState } from "react";
import Image from "next/image";

// Sample data for before/after projects
const projects = [
  {
    id: 1,
    title: "Modern White Shaker Kitchen",
    description: "Complete transformation from outdated oak cabinets to modern white shakers with quartz countertops",
    beforeImg: "/images/before-1.jpg",
    afterImg: "/images/after-1.jpg",
  },
  {
    id: 2,
    title: "European Grey Elegance",
    description: "Conversion from traditional design to sleek European grey cabinets with waterfall island",
    beforeImg: "/images/before-2.jpg",
    afterImg: "/images/after-2.jpg",
  },
  {
    id: 3,
    title: "Luxury Dark Kitchen Renovation",
    description: "Dark wood traditional cabinets replaced with sophisticated European style with custom lighting",
    beforeImg: "/images/before-3.jpg",
    afterImg: "/images/after-3.jpg",
  }
];

const BeforeAfterSlider = ({ beforeImg, afterImg }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const sliderRef = useRef(null);

  const handleMouseMove = (e) => {
    if (sliderRef.current) {
      const rect = sliderRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      setSliderPosition(Math.min(Math.max(x, 0), 100));
    }
  };

  const handleTouchMove = (e) => {
    if (sliderRef.current && e.touches[0]) {
      const rect = sliderRef.current.getBoundingClientRect();
      const x = ((e.touches[0].clientX - rect.left) / rect.width) * 100;
      setSliderPosition(Math.min(Math.max(x, 0), 100));
    }
  };

  return (
    <div 
      ref={sliderRef}
      className="relative w-full h-72 sm:h-96 md:h-[500px] overflow-hidden rounded-lg shadow-xl cursor-col-resize"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      {/* Before Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image 
          src={beforeImg} 
          alt="Before renovation" 
          fill 
          className="object-cover"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN88OjpfwAI+QOoF8YQhgAAAABJRU5ErkJggg=="
        />
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">Before</div>
      </div>

      {/* After Image (clipped) */}
      <div 
        className="absolute inset-0 w-full h-full overflow-hidden" 
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <Image 
          src={afterImg} 
          alt="After renovation" 
          fill 
          className="object-cover"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN88OjpfwAI+QOoF8YQhgAAAABJRU5ErkJggg=="
        />
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute bottom-4 right-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">After</div>
      </div>

      {/* Slider Line */}
      <div 
        className="absolute inset-y-0 z-10 w-0.5 bg-white shadow-lg" 
        style={{ left: `${sliderPosition}%` }}
      />

      {/* Slider Handle */}
      <div 
        className="absolute z-10 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center transform -translate-x-1/2 border-2 border-primary-600"
        style={{ left: `${sliderPosition}%`, top: `50%`, transform: 'translate(-50%, -50%)' }}
      >
        <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12M8 12h12M8 17h12M4 7h0m0 5h0m0 5h0" />
        </svg>
      </div>
    </div>
  );
};

const BeforeAfterSection = () => {
  return (
    <section id="transformations" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4 text-primary-600 dark:text-primary-500">Before & After Transformations</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Witness the dramatic transformations we've created for homeowners in Los Angeles. 
            Slide to compare the before and after results of our high-quality kitchen renovations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="card-neuro overflow-hidden">
              <BeforeAfterSlider
                beforeImg={project.beforeImg}
                afterImg={project.afterImg}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection; 