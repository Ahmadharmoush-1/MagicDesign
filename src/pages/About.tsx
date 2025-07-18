import { Shield, Award, Users, Wrench, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import WhatsAppButton from '@/components/WhatsAppButton';

const About = () => {
  const features = [
    {
      icon: <Shield className="h-12 w-12 text-blue-600" />,
      title: "جودة مضمونة",
      description: "مواد ممتازة وحرفية عالية لضمان نتائج تدوم طويلًا"
    },
    {
      icon: <Award className="h-12 w-12 text-blue-600" />,
      title: "فريق خبراء",
      description: "محترفون ماهرون بخبرة طويلة في تصنيع الألمنيوم"
    },
    {
      icon: <Users className="h-12 w-12 text-blue-600" />,
      title: "اهتمام بالعميل",
      description: "نلتزم بتقديم حلول تفوق توقعاتكم"
    },
    {
      icon: <Wrench className="h-12 w-12 text-blue-600" />,
      title: "حلول مخصصة",
      description: "منتجات ألمنيوم مصممة خصيصًا لتلبية احتياجاتك"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900" dir="rtl">
      {/* رأس عصري مع تأثير زجاجي */}
      <header className="bg-slate-900/80 backdrop-blur-md border-b border-white/10 sticky top-0 z-40 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent">
              ألمنيوم برو
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link to="/" className="text-white hover:text-blue-300 transition-colors duration-300 font-medium">الرئيسية</Link>
              <Link to="/about" className="text-white hover:text-blue-300 transition-colors duration-300 font-medium">من نحن</Link>
              <Link to="/services" className="text-white hover:text-blue-300 transition-colors duration-300 font-medium">الخدمات</Link>
              <Link to="/#gallery" className="text-white hover:text-blue-300 transition-colors duration-300 font-medium">المعرض</Link>
              <Link to="/#videos" className="text-white hover:text-blue-300 transition-colors duration-300 font-medium">الفيديوهات</Link>
              <Link to="/#contact" className="text-white hover:text-blue-300 transition-colors duration-300 font-medium">تواصل معنا</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* المحتوى الرئيسي */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">من نحن</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              بخبرة تمتد لعقود في تصنيع الألمنيوم، نتميز بتقديم نوافذ وأبواب وأنظمة واجهات حديثة، بالإضافة إلى حلول ألمنيوم مخصصة للمشاريع السكنية والتجارية.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="text-center bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-white/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:bg-white/90 h-full hover:scale-105"
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

      {/* تذييل عصري */}
      <footer className="bg-slate-950 text-white py-16 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent">
                ألمنيوم برو
              </h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                حلول ألمنيوم احترافية لتلبية احتياجات البناء والتصميم. نحول المعدن إلى تحف فنية بدقة وابتكار.
              </p>
              <div className="flex space-x-4">
                <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center border border-blue-400/30">
                  <span className="text-blue-400 font-bold">AP</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6 text-white">معلومات التواصل</h3>
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
                  <span>لبنان</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6 text-white">خدماتنا</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="hover:text-blue-300 transition-colors duration-300 cursor-pointer">• نوافذ وأبواب ألمنيوم</li>
                <li className="hover:text-blue-300 transition-colors duration-300 cursor-pointer">• أنظمة واجهات زجاجية</li>
                <li className="hover:text-blue-300 transition-colors duration-300 cursor-pointer">• تقطيع وتشغيل CNC</li>
                <li className="hover:text-blue-300 transition-colors duration-300 cursor-pointer">• طلاء بودرة وتشطيب أنودايز</li>
                <li className="hover:text-blue-300 transition-colors duration-300 cursor-pointer">• حلول ألمنيوم مخصصة</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-12 pt-8 text-center">
            <p className="text-slate-400">
              © 1986 MagicDesign. جميع الحقوق محفوظة. | تصميم بدقة وابتكار
            </p>
          </div>
        </div>
      </footer>

      {/* زر واتساب */}
      <WhatsAppButton />
    </div>
  );
};

export default About;