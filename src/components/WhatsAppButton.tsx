import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "96171953239";
    const message = "Hello! I'm interested in your aluminum services.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      <button
        onClick={handleWhatsAppClick}
        className="relative bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 animate-pulse-glow"
      >
        {/* Ripple effect */}
        <div className="absolute inset-0 rounded-full bg-green-400 opacity-20 animate-ping"></div>
        <div className="absolute inset-0 rounded-full bg-green-400 opacity-10 animate-ping" style={{ animationDelay: '0.5s' }}></div>
        
        <MessageCircle className="h-8 w-8 relative z-10 group-hover:scale-110 transition-transform duration-200" />
      </button>
      
      {/* Enhanced Tooltip */}
      <div className="absolute bottom-full right-0 mb-3 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none transform translate-y-2 group-hover:translate-y-0">
        <div className="bg-slate-900/90 backdrop-blur-md text-white text-sm px-4 py-3 rounded-2xl whitespace-nowrap border border-white/20 shadow-xl">
          <div className="font-semibold">Chat with us on WhatsApp</div>
          <div className="text-green-300 text-xs">+961 71 953 239</div>
          <div className="absolute top-full right-6 w-0 h-0 border-l-4 border-r-4 border-t-6 border-transparent border-t-slate-900/90"></div>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppButton;
