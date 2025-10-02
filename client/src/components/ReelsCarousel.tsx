import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import { useState } from "react";

interface Reel {
  id: string;
  thumbnail: string;
  name: string;
  role: string;
}

const reels: Reel[] = [
  { id: "1", thumbnail: "https://placehold.co/360x640/06b6d4/white?text=Success+Story+1", name: "Fatima Rahman", role: "Finance Pro" },
  { id: "2", thumbnail: "https://placehold.co/360x640/f97316/white?text=Success+Story+2", name: "Kabir Ahmed", role: "HR Manager" },
  { id: "3", thumbnail: "https://placehold.co/360x640/3b82f6/white?text=Success+Story+3", name: "Nadia Khan", role: "Sales Lead" },
  { id: "4", thumbnail: "https://placehold.co/360x640/8b5cf6/white?text=Success+Story+4", name: "Hassan Ali", role: "Marketing" },
  { id: "5", thumbnail: "https://placehold.co/360x640/ec4899/white?text=Success+Story+5", name: "Ayesha Begum", role: "Product Mgr" },
  { id: "6", thumbnail: "https://placehold.co/360x640/10b981/white?text=Success+Story+6", name: "Imran Hossain", role: "Operations" },
  { id: "7", thumbnail: "https://placehold.co/360x640/f59e0b/white?text=Success+Story+7", name: "Rima Das", role: "Treasury" },
  { id: "8", thumbnail: "https://placehold.co/360x640/06b6d4/white?text=Success+Story+8", name: "Shakib Alam", role: "Analytics" },
];

export function ReelsCarousel() {
  const [mutedReels, setMutedReels] = useState<Set<string>>(new Set(reels.map(r => r.id)));

  const toggleMute = (id: string) => {
    setMutedReels(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
    console.log('Reel mute toggled:', id);
  };

  return (
    <section className="py-20 md:py-32 bg-card overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Real Success Stories</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear directly from professionals who transformed their careers
          </p>
        </motion.div>

        <div className="space-y-6">
          <div className="flex gap-3 sm:gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {reels.map((reel, index) => (
              <motion.div
                key={reel.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative flex-shrink-0 w-36 sm:w-40 md:w-44 lg:w-48 aspect-[9/16] rounded-xl sm:rounded-2xl overflow-hidden snap-start group"
                data-testid={`reel-${reel.id}`}
              >
                <img 
                  src={reel.thumbnail} 
                  alt={`${reel.name} testimonial`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                <button
                  onClick={() => toggleMute(reel.id)}
                  className="absolute top-2 sm:top-4 right-2 sm:right-4 p-1.5 sm:p-2 rounded-full bg-black/50 backdrop-blur-sm text-white opacity-0 group-hover:opacity-100 transition-opacity"
                  data-testid={`button-reel-mute-${reel.id}`}
                >
                  {mutedReels.has(reel.id) ? (
                    <VolumeX className="w-3 h-3 sm:w-4 sm:h-4" />
                  ) : (
                    <Volume2 className="w-3 h-3 sm:w-4 sm:h-4" />
                  )}
                </button>
                
                <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4 text-white">
                  <p className="font-semibold text-xs sm:text-sm">{reel.name}</p>
                  <p className="text-xs sm:text-sm text-white/80">{reel.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
