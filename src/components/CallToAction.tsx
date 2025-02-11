import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section id="group-8" className="relative bg-white dark:bg-gray-900 py-32 overflow-hidden transition-colors duration-300">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
          Stop! Your Search Is Over
        </h2>
        
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12 transition-colors duration-300">
          Get a <span className="text-[#5c5ce0] dark:text-[#7a7af0] font-medium">free trial</span> image edit with our fashion-focused post-production service. 
          Save time and consistently deliver <span className="text-[#5c5ce0] dark:text-[#7a7af0] font-medium">exceptional results</span>.
        </p>

        <div className="flex flex-col items-center">
          <Link
            to="/signup"
            className="group inline-flex items-center justify-center rounded-full py-3 px-6 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-[#bb4430] dark:bg-[#ff6b52] text-white hover:bg-[#bb4430]/90 dark:hover:bg-[#ff6b52]/90 active:bg-[#bb4430]/80 dark:active:bg-[#ff6b52]/80 transition-all duration-300"
          >
            Get Free Trial
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
            No Credit Card Required
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;