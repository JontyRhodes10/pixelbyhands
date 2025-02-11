import React from 'react';
import { Ghost, Clock, Briefcase } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Ghost className="w-12 h-12 text-white" />,
      title: "Image Quality at Scale",
      description: "Our expert team of retouchers, combined with custom-built workflows, ensures your brand's visual identity remains consistent across every product image, regardless of volume."
    },
    {
      icon: <Clock className="w-12 h-12 text-white" />,
      title: "Accelerated Time to Market",
      description: "Our streamlined processes and 24-hour turnaround times keep your product launches on schedule, maximizing revenue opportunities."
    },
    {
      icon: <Briefcase className="w-12 h-12 text-white" />,
      title: "Cost-Effective Expertise",
      description: "Pixel By Hand offers flexible pricing models tailored to your needs, ensuring premium quality without breaking the bank."
    }
  ];

  return (
    <section 
      id="group-2" 
      className="relative min-h-screen bg-cover bg-fixed bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url('https://www.pixelbyhand.com/wp-content/uploads/2024/12/photo-studio-professional-with-ecommerce-website.png')`
      }}
    >
      <div className="relative min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
            Why Choose Pixel By Hand?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex flex-col items-center text-center group"
              >
                <div className="mb-6 transform transition-transform duration-300 group-hover:scale-110">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-200">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;