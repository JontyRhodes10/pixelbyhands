import React from 'react';
import { 
  ImageDown, 
  Scissors, 
  Image, 
  PaintBucket, 
  Palette, 
  Wand2,
  Ghost,
  Droplets
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <ImageDown className="w-12 h-12" />,
      title: "Background Removal",
      description: "Clean and precise background removal for all your product images"
    },
    {
      icon: <Ghost className="w-12 h-12" />,
      title: "Ghost Mannequin",
      description: "Professional ghost mannequin effect for a natural, 3D look"
    },
    {
      icon: <PaintBucket className="w-12 h-12" />,
      title: "Color Correction",
      description: "Accurate color matching to ensure product color consistency"
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: "Retouching",
      description: "Expert retouching to enhance product appearance"
    },
    {
      icon: <Image className="w-12 h-12" />,
      title: "Image Manipulation",
      description: "Creative image manipulation and compositing"
    },
    {
      icon: <Droplets className="w-12 h-12" />,
      title: "Shadow Creation",
      description: "Natural shadow effects for a realistic product presentation"
    },
    {
      icon: <Scissors className="w-12 h-12" />,
      title: "Clipping Path",
      description: "Precise clipping paths for complex product shapes"
    },
    {
      icon: <Wand2 className="w-12 h-12" />,
      title: "Image Masking",
      description: "Advanced masking techniques for intricate details"
    }
  ];

  return (
    <section 
      id="group-5" 
      className="relative bg-fixed bg-cover bg-center py-24"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('https://www.pixelbyhand.com/wp-content/uploads/2024/10/fashion-ecommerce-website.jpeg')`
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group p-6 text-center transform transition-all duration-300 hover:-translate-y-2"
            >
              <div className="mb-4 text-white flex justify-center">
                <div className="transform transition-transform duration-300 group-hover:scale-110">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                {service.title}
              </h3>
              <p className="text-gray-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;