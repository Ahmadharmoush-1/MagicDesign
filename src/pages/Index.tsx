import { Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroSection from '@/components/HeroSection';
import AnimatedStats from '@/components/AnimatedStats';
import GallerySection from '@/components/GallerySection';
// import VideoSection from '@/components/VideoSection';
import ContactSection from '@/components/ContactSection';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-900" dir="rtl">
      {/* رأس عصري مع تأثير زجاجي */}
      <header className="bg-slate-900/80 backdrop-blur-md border-b border-white/10 sticky top-0 z-40 shadow-lg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src="/photos/logo.png" 
                alt="شعار MagicDesign" 
                className="h-20 w-20 rounded-full object-cover"
              />
            </Link>
            <nav className="hidden md:flex space-x-6 lg:space-x-8">
              <Link to="/" className="text-white hover:text-blue-300 transition-colors duration-300 font-medium text-sm lg:text-base">الرئيسية</Link>
              <Link to="/about" className="text-white hover:text-blue-300 transition-colors duration-300 font-medium text-sm lg:text-base">من نحن</Link>
              <Link to="/services" className="text-white hover:text-blue-300 transition-colors duration-300 font-medium text-sm lg:text-base">الخدمات</Link>
              <a href="#gallery" className="text-white hover:text-blue-300 transition-colors duration-300 font-medium text-sm lg:text-base">المعرض</a>
              <a href="#videos" className="text-white hover:text-blue-300 transition-colors duration-300 font-medium text-sm lg:text-base">الفيديوهات</a>
              <a href="#contact" className="text-white hover:text-blue-300 transition-colors duration-300 font-medium text-sm lg:text-base">تواصل معنا</a>
            </nav>
          </div>
        </div>
      </header>

      {/* المحتوى الرئيسي */}
      <main>
        <HeroSection />
        <AnimatedStats />
        <GallerySection />
        {/* <VideoSection /> */}
        <ContactSection />
      </main>

      {/* تذييل عصري */}
      <footer className="bg-slate-950 text-white py-12 sm:py-16 border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            <div className="animate-fade-in">
              <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                <img 
                  src="/public/photos/logo.png" 
                  alt="شعار MagicDesign" 
                  className="h-8 sm:h-10 w-auto rounded-full"
                />
              </div>
              <p className="text-slate-300 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                حلول ألمنيوم احترافية لاحتياجات البناء والتصميم.
                نحول المعدن إلى تحف فنية بدقة وابتكار.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600/20 rounded-full flex items-center justify-center border border-blue-400/30">
                  <span className="text-blue-400 font-bold text-sm sm:text-base">MD</span>
                </div>
              </div>
            </div>
            <div className="animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-white">معلومات التواصل</h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center space-x-3 text-slate-300 hover:text-blue-300 transition-colors duration-300">
                  <div className="bg-blue-600/20 rounded-lg p-2 border border-blue-400/30 flex-shrink-0">
                    <Phone className="h-3 w-3 sm:h-4 sm:w-4 text-blue-400" />
                  </div>
                  <span className="text-sm sm:text-base">+961 71 953 239</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-300 hover:text-blue-300 transition-colors duration-300">
                  <div className="bg-blue-600/20 rounded-lg p-2 border border-blue-400/30 flex-shrink-0">
                    <Mail className="h-3 w-3 sm:h-4 sm:w-4 text-blue-400" />
                  </div>
                  <span className="text-sm sm:text-base break-all">info@magicdesign.com</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-300 hover:text-blue-300 transition-colors duration-300">
                  <div className="bg-blue-600/20 rounded-lg p-2 border border-blue-400/30 flex-shrink-0">
                    <MapPin className="h-3 w-3 sm:h-4 sm:w-4 text-blue-400" />
                  </div>
                  <span className="text-sm sm:text-base">لبنان</span>
                </div>
              </div>
            </div>
            <div className="animate-slide-in-right" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-white">خدماتنا</h3>
              <ul className="space-y-2 sm:space-y-3 text-slate-300 text-sm sm:text-base">
                <li className="hover:text-blue-300 transition-colors duration-300 cursor-pointer">• نوافذ وأبواب ألمنيوم</li>
                <li className="hover:text-blue-300 transition-colors duration-300 cursor-pointer">• أنظمة الواجهات الزجاجية</li>
                <li className="hover:text-blue-300 transition-colors duration-300 cursor-pointer">• تقطيع وتصنيع CNC</li>
                <li className="hover:text-blue-300 transition-colors duration-300 cursor-pointer">• الطلاء بالبودرة وتشطيب الأنودايز</li>
                <li className="hover:text-blue-300 transition-colors duration-300 cursor-pointer">• حلول ألمنيوم مخصصة</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <p className="text-slate-400 text-sm sm:text-base">
              © 1986 MagicDesign. جميع الحقوق محفوظة. | تصميم بدقة وابتكار
            </p>
          </div>
        </div>
      </footer>

      {/* زر واتساب محسّن */}
      <WhatsAppButton />
    </div>
  );
};

export default Index;
