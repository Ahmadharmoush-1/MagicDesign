// import { Play, Clock, Eye } from 'lucide-react';
// import ResponsiveImage from './ResponsiveImage';

// const VideoSection = () => {
//   const videos = [
//     // {
//     //   title: "CNC Precision Cutting Process",
//     //   thumbnail: "/placeholder.svg",
//     //   description: "Watch our state-of-the-art CNC machines create perfect aluminum components with micron-level precision.",
//     //   duration: "3:45",
//     //   views: "2.1K"
//     // },
//     // {
//     //   title: "Curtain Wall Installation Timelapse",
//     //   thumbnail: "/placeholder.svg", 
//     //   description: "Complete installation of a 200m² curtain wall system from start to finish in this captivating timelapse.",
//     //   duration: "5:22",
//     //   views: "1.8K"
//     // },
//     // {
//     //   title: "Powder Coating Excellence",
//     //   thumbnail: "/placeholder.svg",
//     //   description: "Behind the scenes of our powder coating process ensuring durable, weather-resistant finishes.",
//     //   duration: "4:15",
//     //   views: "1.5K"
//     // },
//     // {
//     //   title: "Quality Control & Testing",
//     //   thumbnail: "/placeholder.svg",
//     //   description: "Our comprehensive quality assurance process ensuring every product meets the highest standards.",
//     //   duration: "6:30",
//     //   views: "2.5K"
//     // },
//     // {
//     //   title: "Custom Fabrication Workshop",
//     //   thumbnail: "/placeholder.svg",
//     //   description: "Tour our modern fabrication facility and see how we bring custom aluminum solutions to life.",
//     //   duration: "4:58",
//     //   views: "1.9K"
//     // },
//     // {
//     //   title: "Welding Mastery Techniques",
//     //   thumbnail: "/placeholder.svg",
//     //   description: "Professional welding techniques for creating strong, seamless aluminum joints and structures.",
//     //   duration: "3:33",
//     //   views: "1.7K"
//     // }
//   ];

//   return (
//     <section id="videos" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-50 to-blue-50">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-12 sm:mb-16 animate-fade-in">
//           <h2 className="text-fluid-2xl sm:text-4xl md:text-5xl font-bold text-slate-800 mb-4">
//             Process Videos
//           </h2>
//           <p className="text-fluid sm:text-xl text-slate-600 max-w-3xl mx-auto">
//             See our aluminum fabrication and installation processes in action through these detailed showcase videos
//           </p>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
//           {videos.map((video, index) => (
//             <div 
//               key={index}
//               className="group cursor-pointer hover:scale-105 transition-all duration-500 will-change-transform animate-scale-in"
//               style={{ animationDelay: `${index * 0.1}s` }}
//             >
//               <div className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl overflow-hidden border border-white/50 shadow-lg hover:shadow-2xl transition-all duration-500">
//                 <div className="relative overflow-hidden">
//                   <ResponsiveImage
//                     src={video.thumbnail}
//                     alt={video.title}
//                     className="w-full h-36 sm:h-40 lg:h-48 group-hover:scale-110 transition-transform duration-500"
//                     aspectRatio="video"
//                     sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
//                   />
//                   <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
//                     <div className="glass rounded-full p-4 sm:p-6 group-hover:scale-110 transition-transform duration-300 border border-white/30">
//                       <Play className="h-6 w-6 sm:h-8 sm:w-8 text-white fill-current" />
//                     </div>
//                   </div>
                  
//                   {/* Video stats */}
//                   <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 right-2 sm:right-3 flex justify-between items-center text-white text-xs sm:text-sm">
//                     <div className="flex items-center bg-black/50 backdrop-blur-sm rounded-full px-2 py-1">
//                       <Clock className="h-3 w-3 mr-1" />
//                       {video.duration}
//                     </div>
//                     <div className="flex items-center bg-black/50 backdrop-blur-sm rounded-full px-2 py-1">
//                       <Eye className="h-3 w-3 mr-1" />
//                       {video.views}
//                     </div>
//                   </div>
//                 </div>
//                 <div className="p-4 sm:p-6 card-responsive">
//                   <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
//                     {video.title}
//                   </h3>
//                   <p className="text-slate-600 leading-relaxed text-sm sm:text-base">{video.description}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default VideoSection;
