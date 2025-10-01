import { motion } from "framer-motion";
import { Volume2, VolumeX, Play } from "lucide-react";
import { useState } from "react";

interface VideoTestimonial {
  id: string;
  thumbnail: string;
  name: string;
  role: string;
  company: string;
}

const testimonials: VideoTestimonial[] = [
  { id: "1", thumbnail: "https://placehold.co/360x640/0ea5e9/ffffff?text=Fatima+Rahman", name: "Fatima Rahman", role: "Finance Manager", company: "BRAC Bank" },
  { id: "2", thumbnail: "https://placehold.co/360x640/f97316/ffffff?text=Kabir+Ahmed", name: "Kabir Ahmed", role: "HR Director", company: "Grameenphone" },
  { id: "3", thumbnail: "https://placehold.co/360x640/8b5cf6/ffffff?text=Nadia+Khan", name: "Nadia Khan", role: "Sales Lead", company: "Pathao" },
  { id: "4", thumbnail: "https://placehold.co/360x640/06b6d4/ffffff?text=Hassan+Ali", name: "Hassan Ali", role: "Marketing Head", company: "Chaldal" },
  { id: "5", thumbnail: "https://placehold.co/360x640/ec4899/ffffff?text=Ayesha+Begum", name: "Ayesha Begum", role: "Product Manager", company: "bKash" },
  { id: "6", thumbnail: "https://placehold.co/360x640/10b981/ffffff?text=Imran+Hossain", name: "Imran Hossain", role: "Operations Lead", company: "Daraz" },
  { id: "7", thumbnail: "https://placehold.co/360x640/f59e0b/ffffff?text=Rima+Das", name: "Rima Das", role: "Treasury Analyst", company: "City Bank" },
  { id: "8", thumbnail: "https://placehold.co/360x640/3b82f6/ffffff?text=Shakib+Alam", name: "Shakib Alam", role: "Data Analyst", company: "Robi" },
  { id: "9", thumbnail: "https://placehold.co/360x640/a855f7/ffffff?text=Lamia+Islam", name: "Lamia Islam", role: "Accountant", company: "Square Pharma" },
  { id: "10", thumbnail: "https://placehold.co/360x640/14b8a6/ffffff?text=Rafiq+Uddin", name: "Rafiq Uddin", role: "Sales Manager", company: "ACI" },
];

interface MarqueeRowProps {
  items: VideoTestimonial[];
  direction: 'left' | 'right';
  speed?: number;
  mutedVideos: Set<string>;
  onToggleMute: (id: string) => void;
  onPlay: (id: string) => void;
}

function MarqueeRow({ items, direction, speed = 30, mutedVideos, onToggleMute, onPlay }: MarqueeRowProps) {
  const [isPaused, setIsPaused] = useState(false);
  
  const duplicatedItems = [...items, ...items, ...items];
  
  return (
    <div 
      className="relative overflow-hidden"
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
          animationPlayState: isPaused ? 'paused' : 'running',
        }}
      >
        {duplicatedItems.map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            className="relative flex-shrink-0 w-48 aspect-[9/16] rounded-2xl overflow-hidden group cursor-pointer"
            data-testid={`video-testimonial-${item.id}-${index}`}
          >
            <img 
              src={item.thumbnail} 
              alt={`${item.name} video testimonial`}
              className="w-full h-full object-cover"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
            
            <button
              onClick={(e) => {
                e.stopPropagation();
                onPlay(item.id);
              }}
              className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30"
              aria-label={`Play ${item.name} testimonial`}
            >
              <div className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:scale-110 transition-transform">
                <Play className="w-8 h-8 text-primary ml-1" />
              </div>
            </button>
            
            <button
              onClick={(e) => {
                e.stopPropagation();
                onToggleMute(item.id);
              }}
              onFocus={() => setIsPaused(true)}
              onBlur={() => setIsPaused(false)}
              className="absolute top-3 right-3 p-2 rounded-full bg-black/60 backdrop-blur-sm text-white opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity z-10 hover-elevate active-elevate-2"
              aria-label={mutedVideos.has(item.id) ? `Unmute ${item.name}` : `Mute ${item.name}`}
              aria-pressed={!mutedVideos.has(item.id)}
              data-testid={`button-toggle-mute-${item.id}`}
            >
              {mutedVideos.has(item.id) ? (
                <VolumeX className="w-4 h-4" />
              ) : (
                <Volume2 className="w-4 h-4" />
              )}
            </button>
            
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <p className="font-bold text-sm mb-1">{item.name}</p>
              <p className="text-xs text-white/90">{item.role}</p>
              <p className="text-xs text-white/70">{item.company}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export function ReelsMarquee() {
  const [mutedVideos, setMutedVideos] = useState<Set<string>>(new Set(testimonials.map(t => t.id)));
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  const toggleMute = (id: string) => {
    setMutedVideos(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const handlePlay = (id: string) => {
    setPlayingVideo(id);
    console.log('Playing video:', id);
  };

  const row1 = testimonials.slice(0, 5);
  const row2 = testimonials.slice(5, 10);

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-card via-background to-card overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 bg-gradient-to-r from-ring via-chart-3 to-chart-4 bg-clip-text text-transparent">
            Real Success Stories
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Hear directly from professionals who transformed their careers with CareerToDo
          </p>
        </motion.div>

        <div className="space-y-6">
          <MarqueeRow 
            items={row1} 
            direction="left" 
            speed={40}
            mutedVideos={mutedVideos}
            onToggleMute={toggleMute}
            onPlay={handlePlay}
          />
          <MarqueeRow 
            items={row2} 
            direction="right" 
            speed={35}
            mutedVideos={mutedVideos}
            onToggleMute={toggleMute}
            onPlay={handlePlay}
          />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-8 text-sm text-muted-foreground"
        >
          Hover to pause • Click to play • Tap speaker to unmute
        </motion.p>
      </div>
    </section>
  );
}
