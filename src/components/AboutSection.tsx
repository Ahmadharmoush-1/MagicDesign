import { Shield, Award, Users, Wrench } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: <Shield className="h-12 w-12 text-blue-600" />,
      title: "Quality Guaranteed",
      description: "Premium materials and expert craftsmanship ensure lasting results"
    },
    {
      icon: <Award className="h-12 w-12 text-blue-600" />,
      title: "Expert Team",
      description: "Skilled professionals with years of aluminum fabrication experience"
    },
    {
      icon: <Users className="h-12 w-12 text-blue-600" />,
      title: "Customer Focus",
      description: "Dedicated to delivering solutions that exceed your expectations"
    },
    {
      icon: <Wrench className="h-12 w-12 text-blue-600" />,
      title: "Custom Solutions",
      description: "Tailored aluminum products designed for your specific needs"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About AluminumPro</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            With decades of experience in aluminum fabrication, we specialize in creating 
            high-quality windows, doors, curtain walls, and custom aluminum solutions for 
            residential and commercial projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="text-center bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;