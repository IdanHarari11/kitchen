"use client";

import { useState } from "react";
import Image from "next/image";

// Sample gallery data
const galleryItems = [
  {
    id: 1,
    title: "Modern White Kitchen",
    description: "Shaker style cabinets with quartz countertops",
    imageUrl: "/images/gallery-1.jpg",
    categories: ["modern", "shaker"]
  },
  {
    id: 2,
    title: "Luxury European Kitchen",
    description: "Handleless European cabinets with integrated appliances",
    imageUrl: "/images/gallery-2.jpg",
    categories: ["luxury", "european"]
  },
  {
    id: 3,
    title: "Classic Elegance",
    description: "Traditional inspired kitchen with modern elements",
    imageUrl: "/images/gallery-3.jpg",
    categories: ["classic", "shaker"]
  },
  {
    id: 4,
    title: "Minimalist Design",
    description: "Clean lines with European style cabinetry",
    imageUrl: "/images/gallery-4.jpg",
    categories: ["modern", "european", "minimalist"]
  },
  {
    id: 5,
    title: "Rich Dark Cabinets",
    description: "Dramatic dark cabinets with light countertops",
    imageUrl: "/images/gallery-5.jpg",
    categories: ["luxury", "shaker"]
  },
  {
    id: 6,
    title: "Open Concept Kitchen",
    description: "Spacious design with island and breakfast bar",
    imageUrl: "/images/gallery-6.jpg",
    categories: ["modern", "minimalist"]
  },
  {
    id: 7,
    title: "Urban Loft Kitchen",
    description: "Industrial elements with sleek modern finishes",
    imageUrl: "/images/gallery-7.jpg",
    categories: ["modern", "minimalist"]
  },
  {
    id: 8,
    title: "Coastal Inspired",
    description: "Light and airy design with blue accents",
    imageUrl: "/images/gallery-8.jpg",
    categories: ["classic", "shaker"]
  }
];

const categories = [
  { id: "all", label: "All" },
  { id: "modern", label: "Modern" },
  { id: "classic", label: "Classic" },
  { id: "luxury", label: "Luxury" },
  { id: "european", label: "European" },
  { id: "shaker", label: "Shaker" },
  { id: "minimalist", label: "Minimalist" }
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxItem, setLightboxItem] = useState(null);

  const filteredItems = activeCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.categories.includes(activeCategory));

  return (
    <section id="gallery" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="mb-4 text-primary-600 dark:text-primary-500">Our Kitchen Gallery</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Browse our portfolio of stunning kitchen transformations featuring premium 
            Shaker & European style cabinets with quartz countertops.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center mb-10 gap-2">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full transition-all ${
                activeCategory === category.id
                  ? "bg-primary-600 text-white"
                  : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map(item => (
            <div 
              key={item.id}
              className="card overflow-hidden group transition-all duration-300 hover:shadow-lg cursor-pointer"
              onClick={() => setLightboxItem(item)}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN88OjpfwAI+QOoF8YQhgAAAABJRU5ErkJggg=="
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <span className="text-white text-sm">Click to enlarge</span>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {lightboxItem && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-in fade-in"
            onClick={() => setLightboxItem(null)}
          >
            <div className="relative max-w-5xl max-h-[90vh] overflow-hidden rounded-lg" onClick={e => e.stopPropagation()}>
              <div className="relative w-full" style={{ height: "80vh" }}>
                <Image
                  src={lightboxItem.imageUrl}
                  alt={lightboxItem.title}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="absolute top-4 right-4">
                <button 
                  onClick={() => setLightboxItem(null)}
                  className="bg-white/20 text-white rounded-full p-2 hover:bg-white/40 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4 text-white">
                <h3 className="text-xl font-bold">{lightboxItem.title}</h3>
                <p>{lightboxItem.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery; 