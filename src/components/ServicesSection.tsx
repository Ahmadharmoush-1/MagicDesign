import { Zap, Wrench, Sparkles, Shield, Cog, Layers } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Zap className="h-12 w-12 text-blue-400" />,
      title: "CNC Cutting",
      description: "Precision aluminum cutting with advanced CNC technology for perfect dimensions and smooth finishes."
    },
    {
      icon: <Wrench className="h-12 w-12 text-blue-400" />,
      title: "Professional Welding",
      description: "Expert welding services ensuring strong, durable joints for all aluminum fabrication projects."
    },
    {
      icon: <Sparkles className="h-12 w-12 text-blue-400" />,
      title: "Powder Coating",
      description: "High-quality powder coating for enhanced durability, weather resistance, and aesthetic appeal."
    },
    {
      icon: <Shield className="h-12 w-12 text-blue-400" />,
      title: "Anodizing",
      description: "Professional anodizing services for corrosion resistance and enhanced surface properties."
    },
    {
      icon: <Cog className="h-12 w-12 text-blue-400" />,
      title: "Custom Fabrication",
      description: "Tailored aluminum solutions designed and manufactured to meet your specific requirements."
    },
    {
      icon: <Layers className="h-12 w-12 text-blue-400" />,
      title: "Assembly & Installation",
      description: "Professional installation services ensuring perfect fit and optimal performance of aluminum products."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Our Expertise
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive aluminum fabrication services with cutting-edge technology and skilled craftsmanship
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group hover:scale-105 transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:bg-white/90 h-full">
                <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="bg-slate-900/10 rounded-2xl p-4 group-hover:bg-blue-500/20 transition-colors duration-300">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4 text-center group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-center leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
