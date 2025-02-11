import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutUs = () => {
  const services = [
    "Clipping Paths",
    "Cropping & Resizing",
    "Background Removal",
    "Invisible Mannequin",
    "Color Correction",
    "Shadowing",
    "Multiple Output Types",
    "Advanced Product Photo Retouching",
    "Advanced Lighting Effects"
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      
      {/* Hero Section */}
      <section 
        id="group-1" 
        className="relative min-h-screen bg-fixed bg-cover bg-center flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('https://www.pixelbyhand.com/wp-content/uploads/2023/07/top-100-photo-studio-professionals-scaled.jpg')`
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Great Product Images That Inspire Action
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-bold text-white/90 mb-6">
              Meet Pixel By Hand
            </h2>
            
            <div className="space-y-4 mb-12">
              <p className="text-xl text-white/80">
                Discover our brilliant fashion ecommerce post-production team.
              </p>
              <p className="text-lg text-white/80">
                Learn how we make it simple for e-commerce companies to work with us and how we create product images that convert to sales.
              </p>
              <p className="text-lg text-white/80">
                Get a free trial image edit with our fashion-focused post-production service. Save time and consistently deliver exceptional results.
              </p>
            </div>
            
            <div className="flex flex-col items-start">
              <Link
                to="/signup"
                className="group inline-flex items-center justify-center rounded-full py-3 px-6 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-[#bb4430] dark:bg-[#ff6b52] text-white hover:bg-[#bb4430]/90 dark:hover:bg-[#ff6b52]/90 active:bg-[#bb4430]/80 dark:active:bg-[#ff6b52]/80 transition-all duration-300"
              >
                Get Free Trial
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <p className="text-xs text-white/60 mt-2">
                No Credit Card Required
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section id="group-2" className="bg-white dark:bg-gray-900 py-24 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Text Content */}
            <div className="flex-1 lg:pr-8">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">
                Who We Are
              </h2>
              <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300">
                <p>
                  We are a <span className="text-[#5c5ce0] dark:text-[#7a7af0] font-medium">product image editing team</span> creating <span className="text-[#bb4430] dark:text-[#ff6b52] font-medium">amazing images</span> every day for eCommerce businesses.
                </p>
                <p>
                  Working <span className="text-[#5c5ce0] dark:text-[#7a7af0] font-medium">24/7, 365 days</span> per year we are <span className="text-[#bb4430] dark:text-[#ff6b52] font-medium">always available</span> to chat or work on your images.
                </p>
                <p>
                  Why not give our <span className="text-[#5c5ce0] dark:text-[#7a7af0] font-medium">photo retouching services</span> a try and send a sample image for us to edit <span className="text-[#bb4430] dark:text-[#ff6b52] font-medium">free of charge</span>?
                </p>
              </div>
            </div>
            
            {/* Image */}
            <div className="flex-1">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://www.pixelbyhand.com/wp-content/uploads/2024/12/photo-studio-professional-with-ecommerce-website.png"
                  alt="Professional photo editing team"
                  className="w-full h-[500px] object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#5c5ce0]/20 to-transparent mix-blend-overlay"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* First Separator Section */}
      <section className="relative h-96 overflow-hidden bg-[#bb4430] dark:bg-[#ff6b52]">
        {/* Diagonal Overlays */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-white/5 transform -skew-y-6" />
          <div className="absolute inset-0 bg-black/10 transform skew-y-6" />
        </div>
        
        {/* Content */}
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Transforming Fashion E-commerce
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              From product photography to final delivery, we ensure your images stand out in the digital marketplace
            </p>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section id="group-3" className="bg-white dark:bg-gray-900 py-24 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start gap-12">
            {/* Image */}
            <div className="flex-1">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://www.pixelbyhand.com/wp-content/uploads/2024/09/fashion-ecomerce-shirt-after-editing.png"
                  alt="Professional image editing services"
                  className="w-full h-[600px] object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#5c5ce0]/20 to-transparent mix-blend-overlay"></div>
              </div>
            </div>
            
            {/* Text Content */}
            <div className="flex-1 lg:pl-8">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">
                What We Do
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  We work with over <span className="text-[#bb4430] dark:text-[#ff6b52] font-medium">500+</span> of the world's leading Ecommerce Retailers. From local start up retailers to <span className="text-[#5c5ce0] dark:text-[#7a7af0] font-medium">Large Multi National Brands</span> to help them grow with our Image Processing & image retouching services. Simply, we do:
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                  {services.map((service, index) => (
                    <div 
                      key={index}
                      className="flex items-center space-x-2 text-gray-700 dark:text-gray-200"
                    >
                      <div className="w-2 h-2 rounded-full bg-[#bb4430] dark:bg-[#ff6b52]" />
                      <span className="text-lg">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Second Separator Section */}
      <section className="relative h-96 overflow-hidden bg-[#5c5ce0] dark:bg-[#7a7af0]">
        {/* Diagonal Overlays */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-white/5 transform -skew-y-6" />
          <div className="absolute inset-0 bg-black/10 transform skew-y-6" />
        </div>
        
        {/* Content */}
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Precision in Every Pixel
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Our attention to detail and commitment to quality sets us apart in the industry
            </p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -translate-x-16 -translate-y-16" />
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-full translate-x-16 translate-y-16" />
        </div>
      </section>

      {/* Our History Section */}
      <section id="group-4" className="bg-white dark:bg-gray-900 py-24 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Text Content */}
            <div className="flex-1 lg:pr-8">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">
                Born In 2006...
              </h2>
              <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300">
                <p>
                  Having started as a <span className="text-[#5c5ce0] dark:text-[#7a7af0] font-medium">home based business</span> in the UK, we opened our first small office based in <span className="text-[#bb4430] dark:text-[#ff6b52] font-medium">India in 2009</span>.
                </p>
                <p>
                  With our team, Pixel By Hand gradually built our client base committed to the mission of <span className="text-[#5c5ce0] dark:text-[#7a7af0] font-medium">constantly improving processes</span>.
                </p>
                <p>
                  Since the initial launch of our platform, we have been on a mission to <span className="text-[#bb4430] dark:text-[#ff6b52] font-medium">empower people</span> to make their ecommerce sites as attractive as possible, whilst increasing brand recognition through <span className="text-[#5c5ce0] dark:text-[#7a7af0] font-medium">consistent imagery</span>.
                </p>
                <p>
                  We have since launched and supported <span className="text-[#bb4430] dark:text-[#ff6b52] font-medium">hundreds of websites</span> for brands and online retailers selling a wide variety of products.
                </p>
                <p>
                  We move mountains for our clients when a <span className="text-[#5c5ce0] dark:text-[#7a7af0] font-medium">rush order</span> is needed or a <span className="text-[#bb4430] dark:text-[#ff6b52] font-medium">seasonal surge</span> of images is required.
                </p>
              </div>
            </div>
            
            {/* Image */}
            <div className="flex-1">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://www.pixelbyhand.com/wp-content/uploads/2024/09/model-fashion-ecommerce-shirt.jpg"
                  alt="Our journey through the years"
                  className="w-full h-[600px] object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#5c5ce0]/20 to-transparent mix-blend-overlay"></div>
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

export default AboutUs;