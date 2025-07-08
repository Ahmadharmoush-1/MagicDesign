import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import ResponsiveImage from './ResponsiveImage';

interface ImageCarouselProps {
  images: string[];
  alt: string;
  className?: string;
  autoPlay?: boolean;
  interval?: number;
}

const ImageCarousel = ({ 
  images, 
  alt, 
  className = '', 
  autoPlay = true, 
  interval = 3000 
}: ImageCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPlaying || isPaused || images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [isPlaying, isPaused, images.length, interval]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  if (images.length === 0) {
    return <div className={`bg-slate-700 ${className}`}>No images available</div>;
  }

  return (
    <div 
      className={`relative group overflow-hidden ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Main Image */}
      <ResponsiveImage
        src={images[currentIndex]}
        alt={`${alt} - Image ${currentIndex + 1}`}
        className="w-full h-full transition-all duration-500 ease-in-out"
        aspectRatio="video"
      />

      {/* Image Counter Badge */}
      <div className="absolute top-3 right-3 bg-black/70 text-white px-2 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
        {currentIndex + 1}/{images.length}
      </div>

      {/* Auto-play indicator */}
      {images.length > 1 && (
        <div className="absolute top-3 left-3 bg-black/70 text-white px-2 py-1 rounded-full text-xs font-medium backdrop-blur-sm flex items-center space-x-1">
          <div className={`w-2 h-2 rounded-full ${isPlaying && !isPaused ? 'bg-green-400 animate-pulse' : 'bg-gray-400'}`} />
          <span>AUTO</span>
        </div>
      )}

      {/* Navigation Controls (visible on hover) */}
      {images.length > 1 && (
        <div className="absolute inset-0 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto">
          <button
            onClick={goToPrev}
            className="ml-2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-200 focus:ring-2 focus:ring-white/50"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          
          <button
            onClick={togglePlayPause}
            className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-200 focus:ring-2 focus:ring-white/50"
          >
            {isPlaying && !isPaused ? (
              <Pause className="h-4 w-4" />
            ) : (
              <Play className="h-4 w-4 fill-current" />
            )}
          </button>
          
          <button
            onClick={goToNext}
            className="mr-2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-200 focus:ring-2 focus:ring-white/50"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      )}

      {/* Progress indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      )}

      {/* Loading animation for next image */}
      {isPlaying && !isPaused && images.length > 1 && (
        <div className="absolute bottom-0 left-0 h-1 bg-blue-500 animate-pulse" 
             style={{ 
               width: '100%',
               animation: `loading-bar ${interval}ms linear infinite`
             }} 
        />
      )}
    </div>
  );
};

export default ImageCarousel;
