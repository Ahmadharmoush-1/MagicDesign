import { useEffect, useState } from 'react';
import { Award, Users, Clock, CheckCircle } from 'lucide-react';

const AnimatedStats = () => {
  const [counts, setCounts] = useState({
    experience: 0,
    projects: 0,
    clients: 0,
    satisfaction: 0
  });

  const stats = [
    {
      icon: <Clock className="h-8 w-8 text-blue-400" />,
      label: "Years of Experience",
      value: 39,
      suffix: "+"
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-blue-400" />,
      label: "Projects Completed",
      value: 250,
      suffix: "+"
    },
    {
      icon: <Users className="h-8 w-8 text-blue-400" />,
      label: "Happy Clients",
      value: 200,
      suffix: "+"
    },
    {
      icon: <Award className="h-8 w-8 text-blue-400" />,
      label: "Client Satisfaction",
      value: 98,
      suffix: "%"
    }
  ];

  useEffect(() => {
    const animateCount = (target: number, key: keyof typeof counts) => {
      let current = 0;
      const increment = target / 100;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setCounts(prev => ({ ...prev, [key]: Math.floor(current) }));
      }, 20);
    };

    // Trigger animations with delays
    setTimeout(() => animateCount(39, 'experience'), 200);
    setTimeout(() => animateCount(250, 'projects'), 400);
    setTimeout(() => animateCount(200, 'clients'), 600);
    setTimeout(() => animateCount(98, 'satisfaction'), 800);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDYwIDAgTCAwIDAgMCA2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] bg-repeat"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
  <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
    التميز في الأرقام
  </h2>
  <p className="text-xl text-blue-200 max-w-2xl mx-auto">
    التزامنا بالجودة والابتكار يتجلى من خلال إنجازاتنا
  </p>
</div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:shadow-3xl">
                <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.label === "Years of Experience" ? counts.experience : 
                   stat.label === "Projects Completed" ? counts.projects :
                   stat.label === "Happy Clients" ? counts.clients : counts.satisfaction}
                  <span className="text-blue-300">{stat.suffix}</span>
                </div>
                <p className="text-blue-200 font-medium">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnimatedStats;
