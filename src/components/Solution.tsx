import React from 'react';
import { AlertCircle } from 'lucide-react';

const Solution = () => {
  const challenges = [
    {
      number: "1",
      title: "Inconsistent Image Quality",
      description: "Managing thousands of SKUs while maintaining consistent image quality across your entire catalog"
    },
    {
      number: "2",
      title: "Operational Bottlenecks",
      description: "Delays in product launches due to slow turnaround times in post-production editing."
    },
    {
      number: "3",
      title: "Partnership Challenges",
      description: "Difficulty finding reliable editing partners who can handle high-volume work while maintaining quality."
    }
  ];

  return (
    <section id="group-4" className="bg-white dark:bg-gray-900 py-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
            Your Solution is Here
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
            Pixel By Hand specializes in providing scalable, high-quality image editing solutions specifically for fashion e-commerce businesses like yours.
          </p>
        </div>

        {/* Image Collage */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
          <div className="relative overflow-hidden rounded-lg shadow-lg dark:shadow-gray-800">
            <img
              src="https://www.pixelbyhand.com/wp-content/uploads/2024/09/model-fashion-ecommerce-shirt.jpg"
              alt="Fashion model wearing shirt"
              className="w-full h-[400px] object-cover transform hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-lg dark:shadow-gray-800">
            <img
              src="https://www.pixelbyhand.com/wp-content/uploads/2024/09/fashion-ecomerce-shirt-before-editing.jpg"
              alt="Shirt before editing"
              className="w-full h-[400px] object-cover transform hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-lg dark:shadow-gray-800">
            <img
              src="https://www.pixelbyhand.com/wp-content/uploads/2024/09/fashion-ecomerce-shirt-after-editing.png"
              alt="Shirt after editing"
              className="w-full h-[400px] object-cover transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Challenge Statement */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 mb-16 text-center transition-colors duration-300">
          <p className="text-xl text-gray-700 dark:text-gray-200 max-w-3xl mx-auto transition-colors duration-300">
            Struggling to maintain image quality while keeping up with your e-commerce launch schedule? You're not alone.
          </p>
        </div>

        {/* Challenges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {challenges.map((challenge, index) => (
            <div 
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 relative group hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
            >
              <div className="absolute -top-6 left-8">
                <div className="bg-[#bb4430] dark:bg-[#ff6b52] text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold transition-colors duration-300">
                  {challenge.number}
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
                  {challenge.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                  {challenge.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;