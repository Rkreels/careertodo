import { motion } from "framer-motion";
import { Play, Volume2, VolumeX } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">See CareerToDo in Action</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Watch how our platform transforms learning through real-world simulations
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative aspect-video rounded-3xl overflow-hidden bg-card border border-card-border shadow-2xl group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-ring/20 to-chart-4/20 flex items-center justify-center">
            <div className="text-center space-y-4">
              <Button
                size="lg"
                onClick={() => {
                  setIsPlaying(!isPlaying);
                  console.log('Video play toggled:', !isPlaying);
                }}
                className="w-20 h-20 rounded-full bg-white hover:bg-white/90 text-primary shadow-xl hover:scale-110 transition-transform"
                data-testid="button-video-play"
              >
                <Play className="w-8 h-8 ml-1" />
              </Button>
              <p className="text-lg font-semibold text-white">Watch Demo Video</p>
            </div>
          </div>
          
          <button
            onClick={() => {
              setIsMuted(!isMuted);
              console.log('Video mute toggled:', !isMuted);
            }}
            className="absolute bottom-4 right-4 z-10 p-3 rounded-xl bg-black/50 backdrop-blur-sm text-white hover:bg-black/70 transition-colors"
            data-testid="button-video-mute"
          >
            {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
