import React from 'react';
import Image from 'next/image';

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Full Kitchen Remodeling",
      description: "Complete transformation of your kitchen space, including layout changes, new cabinets, countertops, backsplash, flooring, lighting, and appliances.",
      image: "/images/service-full-remodel.jpg",
      features: [
        "Custom cabinet design & installation",
        "Premium countertop selection & fitting",
        "Electrical & plumbing updates",
        "Lighting design & installation",
        "Flooring replacement",
        "Appliance selection & integration"
      ]
    },
    {
      id: 2,
      title: "Cabinet Refacing & Replacement",
      description: "Update your kitchen's appearance with new cabinet doors and drawer fronts, or completely replace your cabinets with custom-built solutions.",
      image: "/images/service-cabinets.jpg",
      features: [
        "Cabinet door & drawer front replacement",
        "Hardware upgrades",
        "Custom cabinet design",
        "Soft-close mechanism installation",
        "Interior cabinet organizers",
        "European-style cabinet options"
      ]
    },
    {
      id: 3,
      title: "Countertop Installation",
      description: "Transform your kitchen with premium countertop materials including quartz, granite, marble, solid surface, and eco-friendly options.",
      image: "/images/service-countertops.jpg",
      features: [
        "Premium material selection",
        "Template creation & precision cutting",
        "Expert installation",
        "Sink & faucet integration",
        "Seam minimization techniques",
        "Edge profile customization"
      ]
    },
    {
      id: 4,
      title: "Kitchen Island Design",
      description: "Add functionality and style to your kitchen with a custom-designed island that serves as both a workspace and gathering area.",
      image: "/images/service-island.jpg",
      features: [
        "Custom island design & building",
        "Integrated storage solutions",
        "Seating area incorporation",
        "Appliance integration",
        "Unique lighting features",
        "Premium countertop selection"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="mb-4 text-primary-600 dark:text-primary-500">Our Services</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Specializing in premium kitchen transformations with expert craftsmanship 
            and attention to detail
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map((service) => (
            <div key={service.id} className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-60">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN88OjpfwAI+QOoF8YQhgAAAABJRU5ErkJggg=="
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{service.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{service.description}</p>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">What's Included:</h4>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 dark:text-primary-400 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="text-right">
                  <button className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md text-primary-600 bg-primary-50 dark:text-primary-400 dark:bg-primary-900/20 hover:bg-primary-100 dark:hover:bg-primary-900/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors duration-200">
                    Learn More
                    <svg className="ml-2 -mr-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
            Each service includes a free consultation to discuss your needs and preferences.
            We can also provide custom solutions tailored to your specific requirements.
          </p>
          <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors duration-200">
            Request a Consultation
            <svg className="ml-2 -mr-1 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection; 