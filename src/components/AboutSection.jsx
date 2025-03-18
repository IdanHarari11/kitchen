import Image from "next/image";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="mb-4 text-primary-600 dark:text-primary-500">About Master Kitchen</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            From concept to completion, we bring precision and luxury to every kitchen transformation
            in Los Angeles.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Our Story</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Founded over a decade ago by master craftsmen with a passion for transforming homes, Master Kitchen has evolved into Los Angeles' premier kitchen remodeling company. Our journey began with a simple vision: to combine European-inspired design principles with exceptional craftsmanship to create kitchens that are both stunning and functional.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Today, we've completed over 500 kitchen transformations across Los Angeles County, building a reputation for meticulous attention to detail, superior materials, and unparalleled customer satisfaction. Our team of designers, craftsmen, and installation experts work together seamlessly to bring your dream kitchen to life.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm">
                <div className="text-primary-600 dark:text-primary-400 mb-3">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Quality Promise</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  We source only the finest materials and employ skilled craftsmen to ensure lasting beauty and durability.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm">
                <div className="text-primary-600 dark:text-primary-400 mb-3">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Client-Focused Approach</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Your vision leads our design process, ensuring your kitchen reflects your style and meets your needs.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm">
                <div className="text-primary-600 dark:text-primary-400 mb-3">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Innovative Solutions</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  We stay ahead of industry trends, offering cutting-edge design technology and modern materials.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm">
                <div className="text-primary-600 dark:text-primary-400 mb-3">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Timely Execution</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  We respect your time with efficient project management and clear timelines from start to finish.
                </p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative h-[500px] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/images/about-team.jpg"
                alt="Master Kitchen team of designers and craftsmen"
                fill
                className="object-cover"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN88OjpfwAI+QOoF8YQhgAAAABJRU5ErkJggg=="
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h4 className="text-xl font-bold mb-2">Our Expert Team</h4>
                  <p className="text-white/90">
                    Meet the dedicated professionals who bring precision and creativity to every kitchen project.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Awards and Certifications */}
        <div className="mt-20 pt-12 border-t border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-bold text-center mb-10 text-gray-900 dark:text-white">
            Awards and Certifications
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-80">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-full mb-3">
                <svg className="w-10 h-10 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Best of Houzz Design 2024</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-full mb-3">
                <svg className="w-10 h-10 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300">NKBA Certified</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-full mb-3">
                <svg className="w-10 h-10 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                </svg>
              </div>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300">EPA Lead-Safe Certified</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-full mb-3">
                <svg className="w-10 h-10 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Licensed & Insured</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-full mb-3">
                <svg className="w-10 h-10 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300">BBB A+ Rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 