import React, { useState } from 'react';
import { DollarSign, UserPlus, Package, FileType, ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  icon: JSX.Element;
  question: string;
  answer: string;
}

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      icon: <DollarSign className="w-6 h-6" />,
      question: "How Much Does it Cost?",
      answer: "We edit images from as little as £0.79GBP/$1.05USD per image and happy to discuss a volume-based editing discount. Please contact paul@pixelbyhand.com for quotation."
    },
    {
      icon: <UserPlus className="w-6 h-6" />,
      question: "How Do I Set Up an Account With You?",
      answer: "Simply request an account set up through chat or email. Account setup usually consists of creating a Share File account to share images as well as your payment details."
    },
    {
      icon: <Package className="w-6 h-6" />,
      question: "Are There Minimum Order Amounts?",
      answer: "No, we do not have minimum orders. You can send us a single image or thousands of images in a day. The only requirement for using our service is that you run or work at an ecommerce business."
    },
    {
      icon: <FileType className="w-6 h-6" />,
      question: "What File Types Do You Accept?",
      answer: "We accept all major file types, including JPG, PNG, TIFF, and PSD. We can also accept RAW camera files."
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="group-6" className="relative bg-white dark:bg-gray-900 py-24 overflow-hidden transition-colors duration-300">
      {/* Background Masks */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large centered image frame */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[800px] h-[800px] bg-[#5c5ce0]/25">
            {/* Image corners */}
            <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-[#5c5ce0]/25" />
            <div className="absolute top-0 right-0 w-20 h-20 border-t-4 border-r-4 border-[#5c5ce0]/25" />
            <div className="absolute bottom-0 left-0 w-20 h-20 border-b-4 border-l-4 border-[#5c5ce0]/25" />
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-[#5c5ce0]/25" />
            
            {/* Crop marks */}
            <div className="absolute inset-8 border-2 border-dashed border-[#5c5ce0]/25" />
            
            {/* Center guides */}
            <div className="absolute top-1/2 left-0 right-0 h-px bg-[#5c5ce0]/25" />
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#5c5ce0]/25" />
          </div>
        </div>

        {/* Additional decorative elements */}
        <div className="absolute top-10 left-10 w-40 h-40 bg-[#5c5ce0]/25 rounded-lg transform -rotate-12" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#5c5ce0]/25 rounded-lg transform rotate-12" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
            Pixel By Hand FAQ
          </h2>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden transition-all duration-300 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm"
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                onClick={() => toggleAccordion(index)}
              >
                <div className="flex items-center space-x-4">
                  <div className={`text-[#bb4430] dark:text-[#ff6b52] transition-colors duration-300 ${
                    openIndex === index ? 'transform rotate-6' : ''
                  }`}>
                    {item.icon}
                  </div>
                  <span className="text-lg font-semibold text-gray-900 dark:text-white transition-colors duration-300">
                    {item.question}
                  </span>
                </div>
                <div className="text-[#bb4430] dark:text-[#ff6b52] transition-colors duration-300">
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </div>
              </button>
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? 'max-h-48 opacity-100'
                    : 'max-h-0 opacity-0'
                } overflow-hidden`}
              >
                <div className="p-6 pt-0 text-gray-600 dark:text-gray-300">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;