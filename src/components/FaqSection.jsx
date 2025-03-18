"use client";

import { useState } from 'react';

const faqs = [
  {
    id: 1,
    question: "How long does a typical kitchen remodeling project take?",
    answer: "Most kitchen remodeling projects take between 4-8 weeks from demolition to completion. The timeline depends on the scope of work, materials selected, and any unforeseen challenges that may arise. Our 3D design process helps minimize delays by ensuring all details are planned before construction begins."
  },
  {
    id: 2,
    question: "What's the difference between Shaker and European style cabinets?",
    answer: "Shaker cabinets feature a five-piece door with a recessed center panel and clean, simple lines - offering a timeless, versatile look suitable for many kitchen styles. European (frameless) cabinets have a sleeker, more contemporary appearance with flat doors, hidden hinges, and maximized storage space due to the absence of a face frame."
  },
  {
    id: 3,
    question: "Why choose quartz over granite or marble countertops?",
    answer: "Quartz countertops offer exceptional durability, being non-porous and resistant to stains, scratches, and bacterial growth without requiring sealing. They provide consistent patterns compared to natural stone's variability and come in countless design options. While premium quartz costs similarly to high-end granite or marble, it generally offers better long-term value due to lower maintenance requirements."
  },
  {
    id: 4,
    question: "How does the 3D design visualization process work?",
    answer: "Our 3D design process begins with measuring your existing space and discussing your vision. We then create a detailed 3D model of your kitchen with your selected cabinets, countertops, and features. This allows you to virtually walk through your new kitchen and make any adjustments before manufacturing begins, ensuring the final result matches your expectations perfectly."
  },
  {
    id: 5,
    question: "Do you offer financing options for kitchen remodeling?",
    answer: "Yes, we partner with trusted financial institutions to offer various financing options tailored to your budget. Options include no-interest periods, long-term financing with competitive rates, and home improvement loans. Our team can guide you through the application process and help you find the best solution for your project."
  },
  {
    id: 6,
    question: "Is Master Kitchen licensed and insured?",
    answer: "Absolutely. Master Kitchen holds all required state and local licenses for kitchen remodeling in Los Angeles. We maintain comprehensive insurance coverage, including liability and workers' compensation, for your protection and peace of mind. We're happy to provide verification of our credentials before beginning any project."
  }
];

const FaqItem = ({ faq, isOpen, toggleAccordion }) => {
  return (
    <div className="border-b border-gray-200 dark:border-gray-700">
      <button
        className="w-full py-5 px-3 flex justify-between items-center focus:outline-none"
        onClick={toggleAccordion}
        aria-expanded={isOpen}
      >
        <h3 className="text-left font-medium text-lg text-gray-900 dark:text-white">{faq.question}</h3>
        <svg
          className={`w-5 h-5 text-gray-500 dark:text-gray-400 transition-transform duration-300 ${
            isOpen ? 'transform rotate-180' : ''
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-3 pb-5 pt-0">
          <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
        </div>
      </div>
    </div>
  );
};

const FaqSection = () => {
  const [openFaq, setOpenFaq] = useState(1);

  const toggleAccordion = (faqId) => {
    setOpenFaq(openFaq === faqId ? null : faqId);
  };

  return (
    <section id="faq" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="mb-4 text-primary-600 dark:text-primary-500">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Get answers to common questions about kitchen remodeling, our materials, 
            and our process to help you plan your dream kitchen transformation.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
            {faqs.map((faq) => (
              <FaqItem
                key={faq.id}
                faq={faq}
                isOpen={openFaq === faq.id}
                toggleAccordion={() => toggleAccordion(faq.id)}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Still have questions? We're here to help with your kitchen remodeling project.
            </p>
            <a
              href="#contact"
              className="btn btn-primary inline-block"
            >
              Contact Us For More Information
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection; 