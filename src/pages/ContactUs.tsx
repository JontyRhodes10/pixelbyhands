import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { CheckCircle } from 'lucide-react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    message: ''
  });
  const [showNotification, setShowNotification] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    // console.log('Form submitted:', formData);
    
    // Show notification
    setShowNotification(true);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      website: '',
      message: ''
    });
    
    // Hide notification after 3 seconds
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navbar />

      {/* Notification Overlay */}
      <div
        className={`fixed inset-0 flex items-center justify-center z-50 transition-all duration-300 ${
          showNotification ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
        
        {/* Notification */}
        <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 transform transition-all duration-300 flex items-center space-x-3 max-w-md mx-4">
          <CheckCircle className="w-6 h-6 text-green-500 dark:text-green-400" />
          <p className="text-gray-900 dark:text-white text-lg">
            Thank you for your message! I will respond asap..
          </p>
        </div>
      </div>

      <section className="bg-white dark:bg-gray-900 py-24 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center min-h-[calc(100vh-16rem)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl w-full">
            {/* Left Column - Image and Text */}
            <div className="space-y-8 flex flex-col items-center">
              <div className="w-64 h-64 rounded-full overflow-hidden shadow-2xl">
                <img
                  src="https://www.pixelbyhand.com/wp-content/uploads/2025/02/1695798463161.jpg"
                  alt="Paul Lloyd"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="space-y-4 text-center">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    PAUL LLOYD
                  </h2>
                  <p className="text-lg text-[#bb4430] dark:text-[#ff6b52]">
                    Founder & CEO
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                    How can I help you?
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300">
                    I read every message that comes into my inbox.
                  </p>
                  <p className="text-lg text-gray-600 dark:text-gray-300 italic">
                    ..and its true.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label 
                    htmlFor="name" 
                    className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1"
                  >
                    Name <span className="text-[#bb4430]">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-[#bb4430] dark:focus:ring-[#ff6b52] focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors duration-300"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label 
                    htmlFor="email" 
                    className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1"
                  >
                    Email <span className="text-[#bb4430]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-[#bb4430] dark:focus:ring-[#ff6b52] focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors duration-300"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label 
                    htmlFor="website" 
                    className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1"
                  >
                    Website
                  </label>
                  <input
                    type="url"
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-[#bb4430] dark:focus:ring-[#ff6b52] focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors duration-300"
                    placeholder="https://yourwebsite.com"
                  />
                </div>

                <div>
                  <label 
                    htmlFor="message" 
                    className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-[#bb4430] dark:focus:ring-[#ff6b52] focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors duration-300 resize-none"
                    placeholder="How can we help you?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#bb4430] dark:bg-[#ff6b52] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#bb4430]/90 dark:hover:bg-[#ff6b52]/90 transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactUs;