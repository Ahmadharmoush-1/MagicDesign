import { Shield, Award, Users, Wrench, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import WhatsAppButton from '@/components/WhatsAppButton';

const About = () => {
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
    <div className="min-h-screen bg-slate-900">
      {/* Modern Header with glassmorphism */}
      <header className="bg-slate-900/80 backdrop-blur-md border-b border-white/10 sticky top-0 z-40 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent">
              AluminumPro
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link to="/" className="text-white hover:text-blue-300 transition-colors duration-300 font-medium">Home</Link>
              <Link to="/about" className="text-white hover:text-blue-300 transition-colors duration-300 font-medium">About</Link>
              <Link to="/services" className="text-white hover:text-blue-300 transition-colors duration-300 font-medium">Services</Link>
              <Link to="/#gallery" className="text-white hover:text-blue-300 transition-colors duration-300 font-medium">Gallery</Link>
              <Link to="/#videos" className="text-white hover:text-blue-300 transition-colors duration-300 font-medium">Videos</Link>
              <Link to="/#contact" className="text-white hover:text-blue-300 transition-colors duration-300 font-medium">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">About AluminumPro</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              With decades of experience in aluminum fabrication, we specialize in creating 
              high-quality windows, doors, curtain walls, and custom aluminum solutions for 
              residential and commercial projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="text-center bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-white/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:bg-white/90 h-full hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="bg-slate-900/10 rounded-2xl p-4 hover:bg-blue-500/20 transition-colors duration-300">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4 hover:text-blue-600 transition-colors duration-300">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Footer */}
      <footer className="bg-slate-950 text-white py-16 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent">
                AluminumPro
              </h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                Professional aluminum solutions for construction and design needs. 
                Transforming metal into masterpieces with precision and innovation.
              </p>
              <div className="flex space-x-4">
                <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center border border-blue-400/30">
                  <span className="text-blue-400 font-bold">AP</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6 text-white">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-slate-300 hover:text-blue-300 transition-colors duration-300">
                  <div className="bg-blue-600/20 rounded-lg p-2 border border-blue-400/30">
                    <Phone className="h-4 w-4 text-blue-400" />
                  </div>
                  <span>+961 71 953 239</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-300 hover:text-blue-300 transition-colors duration-300">
                  <div className="bg-blue-600/20 rounded-lg p-2 border border-blue-400/30">
                    <Mail className="h-4 w-4 text-blue-400" />
                  </div>
                  <span>info@magicdesign.com</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-300 hover:text-blue-300 transition-colors duration-300">
                  <div className="bg-blue-600/20 rounded-lg p-2 border border-blue-400/30">
                    <MapPin className="h-4 w-4 text-blue-400" />
                  </div>
                  <span>Lebanon</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6 text-white">Our Services</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="hover:text-blue-300 transition-colors duration-300 cursor-pointer">• Aluminum Windows & Doors</li>
                <li className="hover:text-blue-300 transition-colors duration-300 cursor-pointer">• Curtain Wall Systems</li>
                <li className="hover:text-blue-300 transition-colors duration-300 cursor-pointer">• CNC Cutting & Fabrication</li>
                <li className="hover:text-blue-300 transition-colors duration-300 cursor-pointer">• Powder Coating & Anodizing</li>
                <li className="hover:text-blue-300 transition-colors duration-300 cursor-pointer">• Custom Aluminum Solutions</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-12 pt-8 text-center">
            <p className="text-slate-400">
              © 1986 MagicDesign. All rights reserved. | Crafted with precision and innovation
            </p>
          </div>
        </div>
      </footer>

      {/* Enhanced WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
};

export default About;
