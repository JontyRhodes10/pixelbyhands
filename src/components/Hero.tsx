import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section
      id="group-1"
      className="relative min-h-screen bg-white dark:bg-gray-900 overflow-hidden transition-colors duration-300"
    >
      {/* Add padding-top to account for fixed navbar */}
      <div className="pt-16 md:pt-20 min-h-screen flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Text Content */}
            <div className="flex-1 lg:pr-8 text-center lg:text-left">
              <p className="text-[#bb4430] dark:text-[#ff6b52] font-medium text-lg mb-4">
                Elevate Your Fashion Imagery Production
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-7xl font-black text-black dark:text-white leading-tight mb-6 tracking-tight">
                Your{' '}
                <span className="text-[#5c5ce0] dark:text-[#7a7af0]">Scalable Solution</span> for High-Volume Fashion Image{' '}
                <span className="text-[#5c5ce0] dark:text-[#7a7af0]">Editing</span>
              </h1>
              <p className="text-black/70 dark:text-white/70 text-lg mb-8 max-w-2xl mx-auto lg:mx-0">
                Get a{' '}
                <span className="text-[#5c5ce0] dark:text-[#7a7af0] font-medium">free trial</span> image edit with our
                fashion-focused post-production service. Save time and consistently deliver{' '}
                <span className="text-[#5c5ce0] dark:text-[#7a7af0] font-medium">exceptional results</span>.
              </p>
              <div className="flex flex-col items-center lg:items-start">
                <Link
                  to="/signup"
                  className="group inline-flex items-center justify-center rounded-full py-3 px-6 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-[#bb4430] dark:bg-[#ff6b52] text-white hover:bg-[#bb4430]/90 dark:hover:bg-[#ff6b52]/90 active:bg-[#bb4430]/80 dark:active:bg-[#ff6b52]/80 transition-all duration-300"
                >
                  Get Free Trial
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">No Credit Card Required</p>
              </div>
            </div>

            {/* Image */}
            <div className="flex-1 w-full">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://cdn.shopify.com/s/files/1/2303/2711/files/Fashion_Photography_for_E-Commerce_How_to_Capture_Your_Model_and_Clothing_in_the_Best_Light_1_2.png"
                  alt="Fashion photography post-production"
                  className="w-full h-[600px] object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#5c5ce0]/20 dark:from-[#7a7af0]/20 to-transparent mix-blend-overlay"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-0 right-0 -z-10 w-1/3 h-screen bg-[#5c5ce0]/5 dark:bg-[#7a7af0]/5 blur-3xl"></div>
      <div className="absolute sbottom-0 left-0 -z-10 w-1/3 h-screen bg-[#bb4430]/5 dark:bg-[#ff6b52]/5 blur-3xl"></div>
    </section>
  );
};

export default Hero;