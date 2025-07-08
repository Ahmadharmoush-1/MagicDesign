import { Zap, Wrench, Sparkles, Shield, Cog, Layers } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Zap className="h-12 w-12 text-blue-400" />,
      title: "قص CNC",
      description: "قص الألمنيوم بدقة باستخدام تقنية CNC المتقدمة للحصول على أبعاد مثالية وتشطيبات ناعمة."
    },
    {
      icon: <Wrench className="h-12 w-12 text-blue-400" />,
      title: "اللحام الاحترافي",
      description: "خدمات لحام متخصصة تضمن وصلات قوية ومتينة لجميع مشاريع تصنيع الألمنيوم."
    },
    {
      icon: <Sparkles className="h-12 w-12 text-blue-400" />,
      title: "طلاء البودرة",
      description: "طلاء بودرة عالي الجودة لتعزيز المتانة، مقاومة الطقس، والجاذبية الجمالية."
    },
    {
      icon: <Shield className="h-12 w-12 text-blue-400" />,
      title: "الأنودة",
      description: "خدمات أنودة احترافية لمقاومة التآكل وتحسين خصائص السطح."
    },
    {
      icon: <Cog className="h-12 w-12 text-blue-400" />,
      title: "تصنيع مخصص",
      description: "حلول ألمنيوم مصممة ومصنعة حسب متطلباتك الخاصة."
    },
    {
      icon: <Layers className="h-12 w-12 text-blue-400" />,
      title: "التجميع والتركيب",
      description: "خدمات تركيب احترافية تضمن ملاءمة مثالية وأداء أمثل لمنتجات الألمنيوم."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            خبراتنا
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            خدمات شاملة لتصنيع الألمنيوم باستخدام أحدث التقنيات والحرفية الماهرة
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
