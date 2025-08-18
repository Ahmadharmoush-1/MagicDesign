import { useState } from 'react';
import { X, ZoomIn, ChevronLeft, ChevronRight, MapPin, Calendar, Wrench, Images } from 'lucide-react';
import ImageCarousel from './ImageCarousel';

type Project = {
  title: string;
  category: string;
  location: string;
  date: string;
  materials: string;
  images: string[];
  description: string;
};

const GallerySection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects: Project[] = [
    {
      title: "Luxury Villa",
      category: "Luxury Residential Buildind",
      location: "Sibline, Lebanon",
      date: "2023",
      materials: "Anodized Aluminum",
      images: ["/photos/image13-1.jpg", "/photos/image13-2.jpg", "/photos/image13-3.jpg", "/photos/image13-4.jpg","/photos/image13-5.jpg", "/photos/image13-6.jpg","photos/image13-7.jpg"],
      description: "Complete curtain wall system installation for a 12-story office building featuring energy-efficient glazing and custom aluminum frames."
    },
    {
      title: "Modern Office Building Facade",
      category: "Commercial",
      location: "Jezzine, Lebanon",
      date: "2016",
      materials: "Anodized Aluminum, Tempered Glass",
      images: ["/photos/image1-1.jpg", "/photos/image1-2.jpg", "/photos/image1-3.jpg", "/photos/image1-1.jpg"],
      description: "Complete curtain wall system installation for a 12-story office building featuring energy-efficient glazing and custom aluminum frames."
    },
    {
      title: "Luxury Villa Windows & Doors",
      category: "Residential",
      location: "Chouifat, Lebanon",
      date: "2017",
      materials: "Powder Coated Aluminum, Double Glazing",
      images: ["/photos/image2-1.jpg", "/photos/image2-2.jpg", "/photos/image2-3.jpg"],
      description: "Custom aluminum windows and doors with thermal break technology for enhanced energy efficiency."
    },
    {
      title: "Indoor House Design",
      category: "Home Interior Design",
      location: "Aaraya, Lebanon",
      date: "2018",
      materials: "Structural Glazing, Aluminum Composite",
      images: ["/photos/image3-1.jpg", "/photos/image3-2.jpg", "/photos/image3-3.jpg",  ],
      description: "Large-scale retail storefront with automated sliding doors and impact-resistant glazing."
    },
    {
      title: "Hospital Entrance System",
      category: "Healthcare",
      location: "Hotel dieu, Lebanon",
      date: "2020",
      materials: "Antimicrobial Coating, Safety Glass",
      images: ["/photos/image4-1.jpg", "/photos/image4-2.jpg","/photos/image4-3.jpg",],
      description: "Automatic entrance doors with antimicrobial aluminum surfaces and safety features for healthcare facility."
    },
    {
      title: "View bchamoun",
      category: "Residential",
      location: "Bchamoun, Lebanon",
      date: "2023",
      materials: "Insulated Aluminum Panels, Weather Sealing",
      images: ["/photos/image5-1.jpg", "/photos/image5-2.jpg", "/photos/image5-3.jpg",],
      description: "Complete building envelope solution with insulated aluminum cladding for optimal thermal performance."
    },
    {
     title: "Villa ",
      category: "Luxurious Villa",
      location: "Baabdat, Lebanon",
      date: "2022",
      materials: "Insulated Aluminum Panels, Weather Sealing",
      images: ["/photos/image6-1.jpg", "/photos/image6-2.jpg", "/photos/image6-3.jpg", ],
      description: "Complete building envelope solution with insulated aluminum cladding for optimal thermal performance."
    },
    {
     title: "VILLA - Ain AL Jadeedah",
      category: "Villa",
      location: "Aley, Lebanon",
      date: "2024",
      materials: "Insulated Aluminum Panels, Weather Sealing",
      images: ["/photos/image7-1.jpg", "/photos/image7-2.jpg", "/photos/image7-3.jpg", ],
      description: "Complete building envelope solution with insulated aluminum cladding for optimal thermal performance."
    },
    {
     title: "Industrial Warehouse Cladding",
      category: "Industrial",
      location: "Jnoub, Lebanon",
      date: "2023",
      materials: "Insulated Aluminum Panels, Weather Sealing",
      images: ["/photos/image8-1.jpg", "/photos/image8-2.jpg", "/photos/image8-3.jpg"],
      description: "Complete building envelope solution with insulated aluminum cladding for optimal thermal performance."
    },
    {
     title: "Industrial Warehouse Cladding",
      category: "Industrial",
      location: "Nabateyeh, Lebanon",
      date: "2024",
      materials: "Insulated Aluminum Panels, Weather Sealing",
      images: ["/photos/image9-1.jpg", "/photos/image9-2.jpg", "/photos/image9-3.jpg", "/photos/image9-4.jpg"],
      description: "Complete building envelope solution with insulated aluminum cladding for optimal thermal performance."
    },
    {
     title: "Luxury Villa",
      category: "Villa",
      location: "Bent Jbeil, Lebanon",
      date: "2024",
      materials: "Insulated Aluminum Panels, Weather Sealing",
      images: ["/photos/image10-1.jpg", "/photos/image10-2.jpg", "/photos/image10-3.jpg","/photos/image1-3.jpg" ],
      description: "Complete building envelope solution with insulated aluminum cladding for optimal thermal performance."
    },
    {
     title: "Exterior Building",
      category: "Exterior Building",
      location: "Batroun, Lebanon",
      date: "2024",
      materials: "Insulated Aluminum Panels, Weather Sealing",
      images: ["/photos/image11-1.jpg", "/photos/image11-2.jpg", ],
      description: "Complete building envelope solution with insulated aluminum cladding for optimal thermal performance."
    },
    {
     title: "House",
      category: "House Exterior",
      location: "Tripoli, Lebanon",
      date: "2024",
      materials: "Insulated Aluminum Panels, Weather Sealing",
      images: ["/photos/image12-1.jpg", "/photos/image12-2.jpg", ],
      description: "Complete building envelope solution with insulated aluminum cladding for optimal thermal performance."
    }
  ];

  const openLightbox = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeLightbox = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <section id="gallery" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
  <h2 className="text-fluid-2xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
    معرض مشاريعنا
  </h2>
  <p className="text-fluid sm:text-xl text-blue-200 max-w-3xl mx-auto">
    استكشف محفظتنا من المشاريع المكتملة في مجال الألمنيوم التي تُبرز دقة الصنعة وحلول مبتكرة
  </p>
</div>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group cursor-pointer animate-scale-in will-change-transform"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openLightbox(project)}
            >
              <div className="glass-dark rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
                <div className="relative overflow-hidden">
                  <ImageCarousel
                    images={project.images}
                    alt={project.title}
                    className="w-full h-48 sm:h-56 lg:h-64"
                    autoPlay={true}
                    interval={2500}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center justify-between text-white">
                        <div className="flex items-center space-x-2">
                          <ZoomIn className="h-5 w-5 sm:h-6 sm:w-6" />
                          <Images className="h-4 w-4 sm:h-5 sm:w-5" />
                        </div>
                        <span className="text-xs sm:text-sm font-medium bg-black/50 px-2 py-1 rounded-full">
                          {project.images.length} Images
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                    <span className="bg-blue-500/90 backdrop-blur-sm text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-4 sm:p-6 card-responsive">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="flex items-center text-blue-200 text-sm mb-2">
                    <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                    {project.location}
                  </div>
                  <div className="flex items-center text-blue-200 text-sm">
                    <Calendar className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                    {project.date}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Message about more images below */}
       <div className="mt-6 text-center text-blue-300 italic select-none">
  لدينا العديد من المشاريع المميزة منذ عام 1986 وأكثر بكثير!
</div>

        {/* Lightbox Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-2 sm:p-4" onClick={closeLightbox}>
            <div className="max-w-6xl max-h-full w-full glass-dark rounded-2xl sm:rounded-3xl border border-white/20 overflow-hidden animate-scale-in" onClick={(e) => e.stopPropagation()}>
              <div className="relative">
                {/* Close button */}
                <button 
                  onClick={closeLightbox}
                  className="absolute top-2 sm:top-4 right-2 sm:right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors duration-200 focus:ring-2"
                >
                  <X className="h-5 w-5 sm:h-6 sm:w-6" />
                </button>

                {/* Navigation buttons */}
                <button 
                  onClick={prevImage}
                  className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors duration-200 focus:ring-2"
                >
                  <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
                </button>
                <button 
                  onClick={nextImage}
                  className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors duration-200 focus:ring-2"
                >
                  <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
                </button>

                {/* Image */}
                <ImageCarousel
                  images={selectedProject.images}
                  alt={selectedProject.title}
                  className="w-full max-h-[60vh] sm:max-h-[70vh]"
                  autoPlay={false}
                />

                {/* Image counter */}
                <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-2 sm:px-3 py-1 rounded-full text-sm">
                  {currentImageIndex + 1} / {selectedProject.images.length}
                </div>
              </div>

              {/* Project details */}
              <div className="p-4 sm:p-6 text-white">
                <h3 className="text-xl sm:text-2xl font-bold mb-2">{selectedProject.title}</h3>
                <p className="text-blue-200 mb-4 text-sm sm:text-base">{selectedProject.description}</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-sm sm:text-base">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400 mr-2 flex-shrink-0" />
                    <span className="truncate">{selectedProject.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400 mr-2 flex-shrink-0" />
                    <span>{selectedProject.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Wrench className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400 mr-2 flex-shrink-0" />
                    <span className="truncate">{selectedProject.materials}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;
