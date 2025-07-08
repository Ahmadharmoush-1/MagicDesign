import { Button } from '@/components/ui/button';
import { ArrowDown, Phone, MessageCircle } from 'lucide-react';
import ResponsiveVideo from './ResponsiveVideo';

const HeroSection = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "96171953239";
    const message = "مرحبًا! أنا مهتم بخدمات الألمنيوم الخاصة بكم.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCallClick = () => {
    window.open('tel:+96171953239', '_self');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/public/photos/background.png)' }}
        />
        {/* Background overlay */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"></div>
      </div>

      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-slate-900/40 backdrop-blur-sm"></div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="max-w-4xl mx-auto lg:mx-0">
          <div className="glass rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl animate-fade-in">
            <h1 className="text-fluid-2xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 text-white leading-tight">
              تحويل المعدن إلى
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white animate-slide-up">
                تحف فنية
              </span>
            </h1>
            <p className="text-fluid sm:text-xl md:text-2xl mb-6 sm:mb-8 text-blue-100 leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
"منذ عام 1986، مشروع واحد في كل مرة – تصنيع الألمنيوم باحترافية مع دقة، ابتكار، وجودة لا مثيل لها."

            </p>
            
            {/* Quick Contact Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white border-0 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 will-change-transform"
                onClick={handleWhatsAppClick}
              >
                <MessageCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                تواصل عبر واتساب
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white/30 text-white hover:bg-white/20 hover:text-white backdrop-blur-md text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl transition-all duration-300 hover:scale-105 will-change-transform"
                onClick={handleCallClick}
              >
                <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                اتصل الآن
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white/30 text-white hover:bg-white/20 hover:text-white backdrop-blur-md text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl transition-all duration-300 hover:scale-105 will-change-transform"
                onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
              >
                شاهد أعمالنا
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Animated scroll indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle z-10">
        <div className="glass rounded-full p-2 sm:p-3 border border-white/30">
          <ArrowDown className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
