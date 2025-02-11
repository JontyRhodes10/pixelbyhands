import React from 'react';
import { ArrowRight, Camera, Upload, Pencil, Download, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const HowItWorks = () => {
  const processSteps = [
    {
      icon: <Camera className="w-16 h-16" />,
      title: "Shoot",
      description: "You Shoot your ecommerce product images."
    },
    {
      icon: <Upload className="w-16 h-16" />,
      title: "Upload",
      description: "Using our Share File system you can quickly share images with us."
    },
    {
      icon: <Pencil className="w-16 h-16" />,
      title: "Edit",
      description: "We get to work on your images and return them within 24 hours."
    },
    {
      icon: <Download className="w-16 h-16" />,
      title: "Receive",
      description: "We return your fully edited images through our platform."
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="min-h-screen flex items-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-24">
              {/* Text Content */}
              <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                  How Our <span className="text-[#5c5ce0]">Image Editing Service</span> Works
                </h1>
                
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-8">
                  Great Product Images That Inspire Action
                </h2>
                
                <div className="space-y-6">
                  <div className="text-lg text-gray-600 dark:text-gray-300 space-y-6">
                    <p>
                      Starting with Pixel By Hand Image Editing Services could not be easier! All you need to do is to sign up for our <span className="text-[#bb4430] dark:text-[#ff6b52] font-semibold">FREE TRIAL</span> and upload the image that you need to be edited. Once we receive your image, our team of highly skilled and experienced editors will get to work on it and return the edited version to you within 24 hours!
                    </p>
                    
                    <p>
                      Pixel By hand is more than an image editing company. We help you deliver success through a post-production partnership. Our photo editing services are designed to help your business reach its potential. Find out more about how we can help you by leaving a message to one of our friendly team members through our chatbox below!
                    </p>
                  </div>

                  <div className="flex flex-col items-center pt-6">
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
              </div>
              
              {/* Image */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white p-8 max-w-[80%] mx-auto">
                  <img
                    src="https://www.pixelbyhand.com/wp-content/uploads/2024/07/blazer-on-transparent-background.png"
                    alt="Professional image editing example"
                    className="w-full h-auto transform hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Separator Section */}
      <section className="relative bg-[#bb4430] py-24 overflow-hidden">
        {/* Diagonal Overlays for Visual Interest */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-white/5 transform -skew-y-6" />
          <div className="absolute inset-0 bg-black/10 transform skew-y-6" />
        </div>
        
        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-medium text-white leading-relaxed">
              We are trusted and loved by more than 500 companies World-wide including photography studios, eCommerce giants and small product retailers!
            </p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -translate-x-16 -translate-y-16" />
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-full translate-x-16 translate-y-16" />
        </div>
      </section>

      {/* Process Section */}
      <section 
        className="relative bg-fixed bg-cover bg-center py-24"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('https://www.pixelbyhand.com/wp-content/uploads/2024/10/fashion-ecommerce-quality-control.jpeg')`
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
              The Pixel By Hand Image Editing Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {processSteps.map((step, index) => (
              <div 
                key={index}
                className="flex flex-col items-center text-center group"
              >
                <div className="mb-6 text-white">
                  <div className="transform transition-transform duration-300 group-hover:scale-110">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">
                  {step.title}
                </h3>
                <p className="text-gray-300 text-lg">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-300 text-lg">
              Any amendments needed are FREE of charge!
            </p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-32 h-32 bg-white/5 rounded-full -translate-x-16 -translate-y-16" />
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/5 rounded-full translate-x-16 translate-y-16" />
        </div>
      </section>

      {/* Secure File Sharing Section */}
      <section className="bg-white dark:bg-gray-900 py-24 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://www.pixelbyhand.com/wp-content/uploads/2023/11/A-professional-working-on-photo-editing-software-with-dual-monitors-displaying-before-and-after-images-of-fashion-products.-The-before-side-shows-a.png"
                  alt="Secure file sharing system"
                  className="w-full h-auto transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#5c5ce0]/20 to-transparent mix-blend-overlay"></div>
              </div>
            </div>

            {/* Text Content */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 mb-6">
                <Shield className="w-8 h-8 text-[#bb4430] dark:text-[#ff6b52]" />
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                  Secure Image File Sharing With Share File
                </h2>
              </div>
              
              <div className="space-y-4 text-lg text-gray-600 dark:text-gray-300">
                <p>
                  At Pixel by Hand Image Editing Services, we encourage our customers to use our own Secure Share File System for sending and receiving images. This allows us to securely send and receive files without having to worry about them being intercepted or stolen.
                </p>
                <p>
                  When you sign up for a Pixel by Hand Photo Editing Service account, you'll be given a personal Share File folder that only you have access to. This means that only you and the people you invite will be able to see or download the edited photos on your page.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Free Trial Section */}
      <section className="bg-[#bb4430] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Start Your Free Trial
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-12">
              Send us a selection of your current images and we will show you how we can improve them.
              All our sample images are completely Free.
            </p>
            <div className="flex flex-col items-center">
              <Link
                to="/signup"
                className="group inline-flex items-center justify-center rounded-full py-3 px-6 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-white text-[#bb4430] hover:bg-white/90 active:bg-white/80 transition-all duration-300"
              >
                Get Free Trial
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <p className="text-sm text-white/80 mt-2">
                No Credit Card Required
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HowItWorks;