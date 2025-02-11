import React from 'react';
import { 
  Clock, 
  TrendingUp, 
  Image as ImageIcon, 
  Users,
  Sparkles
} from 'lucide-react';

const CaseStudy = () => {
  const stats = [
    {
      icon: <Clock className="w-12 h-12" />,
      value: "24h",
      label: "Turnaround Time"
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      value: "35%",
      label: "Increase in Sales"
    },
    {
      icon: <ImageIcon className="w-12 h-12" />,
      value: "15k+",
      label: "Images per Month"
    },
    {
      icon: <Users className="w-12 h-12" />,
      value: "100%",
      label: "Client Satisfaction"
    },
    {
      icon: <Sparkles className="w-12 h-12" />,
      value: "40%",
      label: "Time Saved"
    }
  ];

  return (
    <section 
      id="group-7" 
      className="relative min-h-screen bg-fixed bg-cover bg-center flex items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url('https://www.pixelbyhand.com/wp-content/uploads/2024/10/Ultimate-Guide-to-Product-Photo-Post-Production.jpeg')`
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-24">
          <p className="text-sm uppercase tracking-wider text-[#ff6b52] mb-4">
            CASE STUDY
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Craven Fashion Group: Streamlined Post-Production
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="group relative bg-black/20 backdrop-blur-sm rounded-lg p-6 text-center transform transition-all duration-300 hover:-translate-y-2 hover:bg-black/30"
            >
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className="text-white bg-[#ff6b52] p-3 rounded-lg transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  {stat.icon}
                </div>
              </div>
              <div className="mt-8">
                <p className="text-3xl font-bold text-white mb-2">
                  {stat.value}
                </p>
                <p className="text-gray-300">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;