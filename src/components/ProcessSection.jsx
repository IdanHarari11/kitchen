import React from 'react';

const ProcessSection = () => {
  const processSteps = [
    {
      id: 1,
      title: "Consultation & Discovery",
      description: "We begin with an in-depth consultation to understand your vision, needs, and budget. Our designers will assess your space and discuss your style preferences.",
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      )
    },
    {
      id: 2,
      title: "3D Design & Planning",
      description: "Our designers create a detailed 3D rendering of your new kitchen, allowing you to visualize the space and make adjustments before construction begins.",
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Material Selection",
      description: "Choose from premium cabinets, countertops, backsplashes, fixtures, and appliances at our showroom with guidance from our design experts.",
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      )
    },
    {
      id: 4,
      title: "Detailed Proposal",
      description: "We provide a comprehensive proposal outlining the project scope, timeline, materials, and costs, ensuring transparency and clarity before work begins.",
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      id: 5,
      title: "Demolition & Preparation",
      description: "Our team carefully removes your existing kitchen while protecting the rest of your home, then prepares the space for new installations.",
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      )
    },
    {
      id: 6,
      title: "Expert Installation",
      description: "Our skilled craftsmen install your new kitchen with precision and care, adhering to the highest quality standards and timeline commitments.",
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      id: 7,
      title: "Final Walkthrough",
      description: "We conduct a detailed inspection with you to ensure everything meets our high standards and your expectations before completing the project.",
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      )
    }
  ];

  return (
    <section id="process" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="mb-4 text-primary-600 dark:text-primary-500">Our Process</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            We've refined our kitchen remodeling process to ensure a seamless experience 
            from the initial consultation to the final reveal.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block w-1 bg-primary-100 dark:bg-primary-950/30 absolute h-full left-1/2 transform -translate-x-1/2"></div>
          
          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <div key={step.id} className="relative flex md:items-center">
                {/* Timeline circle */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-primary-500 dark:bg-primary-600 text-white flex items-center justify-center font-bold shadow-lg">
                  {step.id}
                </div>
                
                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 ml-auto' : 'md:pl-16'}`}>
                  <div className={`bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                    <div className={`mb-4 ${index % 2 === 0 ? 'md:ml-auto' : ''} inline-block text-primary-600 dark:text-primary-400`}>
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white flex items-center md:hidden">
                      <span className="w-8 h-8 rounded-full bg-primary-500 text-white text-sm flex items-center justify-center font-bold mr-3">
                        {step.id}
                      </span>
                      {step.title}
                    </h3>
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white hidden md:block">
                      {step.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            Ready to transform your kitchen?
          </p>
          <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors duration-200">
            Start Your Project
            <svg className="ml-2 -mr-1 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection; 