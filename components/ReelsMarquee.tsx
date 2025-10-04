import { motion } from "framer-motion";
import { Volume2, VolumeX, Play } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface VideoTestimonial {
  id: string;
  youtubeId: string;
  name: string;
  role: string;
  company: string;
  quote: string;
}

const testimonials: VideoTestimonial[] = [
  { 
    id: "1", 
    youtubeId: "sample1", 
    name: "Fatima Rahman", 
    role: "Finance Manager", 
    company: "BRAC Bank",
    quote: "CareerToDo helped me master payroll systems in just 3 months!"
  },
  { 
    id: "2", 
    youtubeId: "sample2", 
    name: "Kabir Ahmed", 
    role: "HR Director", 
    company: "Grameenphone",
    quote: "The HR simulations were exactly like real-world scenarios."
  },
  { 
    id: "3", 
    youtubeId: "sample3", 
    name: "Nadia Khan", 
    role: "Sales Lead", 
    company: "Pathao",
    quote: "CRM practice on CareerToDo landed me my dream job!"
  },
  { 
    id: "4", 
    youtubeId: "sample4", 
    name: "Hassan Ali", 
    role: "Marketing Head", 
    company: "Chaldal",
    quote: "Finally, a platform that teaches actual workplace skills."
  },
  { 
    id: "5", 
    youtubeId: "sample5", 
    name: "Ayesha Begum", 
    role: "Product Manager", 
    company: "bKash",
    quote: "The product management simulations were incredibly realistic."
  },
  { 
    id: "6", 
    youtubeId: "sample6", 
    name: "Imran Hossain", 
    role: "Operations Lead", 
    company: "Daraz",
    quote: "From theory to practice - CareerToDo bridges the gap perfectly."
  },
  { 
    id: "7", 
    youtubeId: "sample7", 
    name: "Rima Das", 
    role: "Treasury Analyst", 
    company: "City Bank",
    quote: "The finance tools training gave me the confidence I needed."
  },
  { 
    id: "8", 
    youtubeId: "sample8", 
    name: "Shakib Alam", 
    role: "Data Analyst", 
    company: "Robi",
    quote: "Real-world data analysis practice made all the difference."
  },
  { 
    id: "9", 
    youtubeId: "sample9", 
    name: "Lamia Islam", 
    role: "Accountant", 
    company: "Square Pharma",
    quote: "Accounting software simulations prepared me for day one."
  },
  { 
    id: "10", 
    youtubeId: "sample10", 
    name: "Rafiq Uddin", 
    role: "Sales Manager", 
    company: "ACI",
    quote: "The sales CRM practice was exactly what employers wanted."
  },
];

interface MarqueeRowProps {
  items: VideoTestimonial[];
  direction: 'left' | 'right';
  speed?: number;
  onPlay: (video: VideoTestimonial) => void;
  videoStates: {[key: string]: {playing: boolean, muted: boolean, currentTime: number, duration: number}};
  onToggleMute: (videoId: string) => void;
  onSeek: (videoId: string, time: number) => void;
  isAnyVideoPlaying: boolean;
}

function MarqueeRow({ items, direction, speed = 30, onPlay, videoStates, onToggleMute, onSeek, isAnyVideoPlaying }: MarqueeRowProps) {
  const [isPaused, setIsPaused] = useState(false);
  
  const duplicatedItems = [...items, ...items, ...items];
  
  return (
    <div 
      className="relative overflow-hidden max-w-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <motion.div
        className="flex gap-4"
        animate={{
          x: direction === 'left' ? [0, -100 * items.length] : [-100 * items.length, 0],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
        style={{
          animationPlayState: (isPaused || isAnyVideoPlaying) ? 'paused' : 'running',
        }}
      >
        {duplicatedItems.map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            className="relative flex-shrink-0 w-48 aspect-[9/16] rounded-2xl overflow-hidden group cursor-pointer bg-white shadow-lg hover:shadow-xl transition-all duration-300"
            data-testid={`video-testimonial-${item.id}-${index}`}
            onClick={() => onPlay(item)}
          >
            {!videoStates[item.id]?.playing ? (
              <>
                {/* YouTube Thumbnail */}
                <img 
                  src={`https://picsum.photos/seed/${item.youtubeId}/400/700.jpg`}
                  alt={`${item.name} video testimonial`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
                    <Play className="w-6 h-6 text-white ml-0.5" />
                  </div>
                </div>
                
                {/* Duration Badge */}
                <div className="absolute top-3 left-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
                  0:45
                </div>
                
                {/* Person Info */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-sky-400 to-blue-500 flex items-center justify-center">
                      <span className="text-xs font-bold text-white">
                        {item.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-sm truncate">{item.name}</p>
                      <p className="text-xs text-sky-200 truncate">{item.role}</p>
                    </div>
                  </div>
                  <p className="text-xs text-white/80 line-clamp-2">{item.quote}</p>
                  <p className="text-xs text-sky-300 mt-1">{item.company}</p>
                </div>
              </>
            ) : (
              <>
                {/* Video Player */}
                <video
                  id={`reel-video-${item.id}`}
                  className="w-full h-full object-cover"
                  onEnded={() => onPlay(item)}
                  autoPlay
                  muted={videoStates[item.id]?.muted}
                  playsInline
                >
                <source src={`https://www.w3schools.com/html/mov_bbb.mp4`} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                {/* Video controls overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30">
                  {/* Top controls */}
                  <div className="absolute top-2 right-2 flex items-center gap-1">
                    <Button
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleMute(item.id);
                      }}
                      className="p-1 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all duration-300"
                    >
                      {videoStates[item.id]?.muted ? (
                        <VolumeX className="w-3 h-3" />
                      ) : (
                        <Volume2 className="w-3 h-3" />
                      )}
                    </Button>
                  </div>

                  {/* Center play/pause indicator */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <Play className="w-6 h-6 text-white ml-0.5" />
                    </div>
                  </div>

                  {/* Person info */}
                  <div className="absolute bottom-16 left-0 right-0 p-3 text-white">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-sky-400 to-blue-500 flex items-center justify-center">
                        <span className="text-xs font-bold text-white">
                          {item.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-bold text-xs truncate">{item.name}</p>
                        <p className="text-xs text-sky-200 truncate">{item.role}</p>
                      </div>
                    </div>
                    <p className="text-xs text-white/80 line-clamp-1">{item.quote}</p>
                    <p className="text-xs text-sky-300 mt-1">{item.company}</p>
                  </div>

                  {/* Bottom controls */}
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <div className="flex items-center gap-2">
                      <Button
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          onPlay(item);
                        }}
                        className="p-1 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all duration-300"
                      >
                        <Play className="w-3 h-3 ml-0.5" />
                      </Button>
                      
                      <div className="flex-1 flex items-center gap-1">
                        <span className="text-white text-xs">
                          {Math.floor((videoStates[item.id]?.currentTime || 0) / 60)}:
                          {String(Math.floor((videoStates[item.id]?.currentTime || 0) % 60)).padStart(2, '0')}
                        </span>
                        <input
                          type="range"
                          min="0"
                          max={videoStates[item.id]?.duration || 0}
                          value={videoStates[item.id]?.currentTime || 0}
                          onChange={(e) => {
                            e.stopPropagation();
                            onSeek(item.id, parseFloat(e.target.value));
                          }}
                          className="flex-1 h-1 bg-white/30 rounded-full appearance-none cursor-pointer"
                        />
                        <span className="text-white text-xs">
                          {Math.floor((videoStates[item.id]?.duration || 0) / 60)}:
                          {String(Math.floor((videoStates[item.id]?.duration || 0) % 60)).padStart(2, '0')}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export function ReelsMarquee() {
  const [videoStates, setVideoStates] = useState<{[key: string]: {playing: boolean, muted: boolean, currentTime: number, duration: number}}>({});
  const [isAnyVideoPlaying, setIsAnyVideoPlaying] = useState(false);

  const handlePlay = (video: VideoTestimonial) => {
    const newPlayingState = !videoStates[video.id]?.playing || false;
    setIsAnyVideoPlaying(newPlayingState);
    
    setVideoStates(prev => {
      const newStates = {
        ...prev,
        [video.id]: {
          playing: newPlayingState,
          muted: prev[video.id]?.muted || true,
          currentTime: prev[video.id]?.currentTime || 0,
          duration: prev[video.id]?.duration || 0
        }
      };
      
      // Pause all other videos
      Object.keys(newStates).forEach(key => {
        if (key !== video.id) {
          newStates[key] = { ...newStates[key], playing: false };
        }
      });
      
      return newStates;
    });
    
    const videoElement = document.getElementById(`reel-video-${video.id}`) as HTMLVideoElement;
    if (videoElement) {
      if (newPlayingState) {
        videoElement.play();
        // Setup listeners for this video
        const updateTime = () => {
          setVideoStates(prev => ({
            ...prev,
            [video.id]: {
              ...prev[video.id],
              currentTime: videoElement.currentTime
            }
          }));
        };
        const updateDuration = () => {
          setVideoStates(prev => ({
            ...prev,
            [video.id]: {
              ...prev[video.id],
              duration: videoElement.duration
            }
          }));
        };
        
        videoElement.addEventListener('timeupdate', updateTime);
        videoElement.addEventListener('loadedmetadata', updateDuration);
        
        // Store cleanup function
        (videoElement as unknown as { cleanup: () => void }).cleanup = () => {
          videoElement.removeEventListener('timeupdate', updateTime);
          videoElement.removeEventListener('loadedmetadata', updateDuration);
        };
      } else {
        videoElement.pause();
        setIsAnyVideoPlaying(false);
      }
    }
    
    // Pause all other videos
    Object.keys(videoStates).forEach(id => {
      if (id !== video.id && videoStates[id]?.playing) {
        const otherVideoElement = document.getElementById(`reel-video-${id}`) as HTMLVideoElement;
        if (otherVideoElement) {
          otherVideoElement.pause();
        }
      }
    });
  };

  const handleToggleMute = (videoId: string) => {
    const videoElement = document.getElementById(`reel-video-${videoId}`) as HTMLVideoElement;
    if (videoElement) {
      videoElement.muted = !videoStates[videoId]?.muted;
      setVideoStates(prev => ({
        ...prev,
        [videoId]: {
          ...prev[videoId],
          muted: !prev[videoId]?.muted
        }
      }));
    }
  };

  const handleSeek = (videoId: string, time: number) => {
    const videoElement = document.getElementById(`reel-video-${videoId}`) as HTMLVideoElement;
    if (videoElement) {
      videoElement.currentTime = time;
      setVideoStates(prev => ({
        ...prev,
        [videoId]: {
          ...prev[videoId],
          currentTime: time
        }
      }));
    }
  };

  const row1 = testimonials.slice(0, 5);
  const row2 = testimonials.slice(5, 10);

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-sky-50/50 via-white to-blue-50/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 bg-gradient-to-r from-sky-600 via-blue-600 to-sky-700 bg-clip-text text-transparent">
            Real Success Stories
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto">
            Hear directly from professionals who transformed their careers with CareerToDo
          </p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center">
              <Play className="w-3 h-3 text-white ml-0.5" />
            </div>
            <span className="text-sm text-slate-500">Click any video to watch testimonials in-platform</span>
          </div>
        </motion.div>

        <div className="space-y-6">
          <MarqueeRow 
            items={row1} 
            direction="left" 
            speed={40}
            onPlay={handlePlay}
            videoStates={videoStates}
            onToggleMute={handleToggleMute}
            onSeek={handleSeek}
            isAnyVideoPlaying={isAnyVideoPlaying}
          />
          <MarqueeRow 
            items={row2} 
            direction="right" 
            speed={35}
            onPlay={handlePlay}
            videoStates={videoStates}
            onToggleMute={handleToggleMute}
            onSeek={handleSeek}
            isAnyVideoPlaying={isAnyVideoPlaying}
          />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-4 px-6 py-3 bg-gradient-to-r from-sky-100 to-blue-100 rounded-full border border-sky-200">
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <div className="w-2 h-2 rounded-full bg-sky-500 animate-pulse"></div>
              <span>Hover to pause</span>
            </div>
            <div className="w-px h-4 bg-sky-300"></div>
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <div className="w-4 h-4 rounded-full bg-red-600 flex items-center justify-center">
                <Play className="w-2 h-2 text-white ml-0.5" />
              </div>
              <span>Click to play</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}