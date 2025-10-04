import { motion } from "framer-motion";
import { Play, Volume2, VolumeX } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";

export function VideoSection() {
  const [mainVideoPlaying, setMainVideoPlaying] = useState(false);
  const [mainVideoMuted, setMainVideoMuted] = useState(true);
  const [mainVideoCurrentTime, setMainVideoCurrentTime] = useState(0);
  const [mainVideoDuration, setMainVideoDuration] = useState(0);
  const mainVideoRef = useRef<HTMLVideoElement>(null);

  const mainVideoId = "careertodo-demo"; // Main video ID

  useEffect(() => {
    const video = mainVideoRef.current;
    if (video) {
      const updateTime = () => setMainVideoCurrentTime(video.currentTime);
      const updateDuration = () => setMainVideoDuration(video.duration);
      
      video.addEventListener('timeupdate', updateTime);
      video.addEventListener('loadedmetadata', updateDuration);
      
      return () => {
        video.removeEventListener('timeupdate', updateTime);
        video.removeEventListener('loadedmetadata', updateDuration);
      };
    }
  }, []);

  const handleMainVideoPlay = () => {
    if (mainVideoRef.current) {
      if (mainVideoPlaying) {
        mainVideoRef.current.pause();
      } else {
        mainVideoRef.current.play();
      }
      setMainVideoPlaying(!mainVideoPlaying);
    }
  };

  const toggleMainVideoMute = () => {
    if (mainVideoRef.current) {
      mainVideoRef.current.muted = !mainVideoMuted;
      setMainVideoMuted(!mainVideoMuted);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleMainVideoSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    if (mainVideoRef.current) {
      mainVideoRef.current.currentTime = time;
      setMainVideoCurrentTime(time);
    }
  };

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-sky-50/30 via-white to-blue-50/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(14,165,233,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.08),transparent_50%)]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
            See CareerToDo in Action
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Watch how our platform transforms learning through real-world simulations
          </p>
        </motion.div>

        {/* Main Video with proper shadow for depth */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative max-w-5xl mx-auto"
        >
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-white shadow-2xl">
            {/* Video thumbnail or player */}
            <div className="relative inset-0">
              {!mainVideoPlaying ? (
                <>
                  <img 
                    src={`https://picsum.photos/seed/${mainVideoId}/1280/720.jpg`}
                    alt="CareerToDo Platform Video"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
                  
                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button
                      size="lg"
                      onClick={handleMainVideoPlay}
                      className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white shadow-2xl hover:scale-110 transition-all duration-300 group"
                      data-testid="button-video-play"
                    >
                      <Play className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 ml-1 group-hover:scale-110 transition-transform" />
                    </Button>
                  </div>

                  {/* Video info overlay - simplified for mobile */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                    <div className="flex items-center justify-between">
                      <div className="text-left">
                        <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-white mb-1 sm:mb-2">
                          CareerToDo Platform
                        </h3>
                        <p className="text-sm sm:text-base lg:text-lg text-white/90 max-w-xs sm:max-w-md lg:max-w-2xl line-clamp-2">
                          Transform your career with practical skills
                        </p>
                      </div>
                      <div className="hidden sm:flex items-center gap-3 text-white/80">
                        <div className="text-right">
                          <div className="text-xs sm:text-sm font-medium">Platform Video</div>
                          <div className="text-xs">3:45</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <video
                    ref={mainVideoRef}
                    className="w-full h-full object-cover"
                    onEnded={() => setMainVideoPlaying(false)}
                  >
                    <source src={`https://www.w3schools.com/html/mov_bbb.mp4`} type="video/mp4" />
                  </video>
                  
                  {/* Video controls overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30">
                    {/* Center play/pause */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Button
                        size="lg"
                        onClick={handleMainVideoPlay}
                        className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all duration-300"
                      >
                        <Play className="w-8 h-8 ml-1" />
                      </Button>
                    </div>

                    {/* Bottom controls */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-center gap-4">
                        <Button
                          size="sm"
                          onClick={handleMainVideoPlay}
                          className="p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors"
                        >
                          <Play className="w-4 h-4 ml-0.5" />
                        </Button>
                        
                        <Button
                          size="sm"
                          onClick={toggleMainVideoMute}
                          className="p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors"
                        >
                          {mainVideoMuted ? (
                            <VolumeX className="w-4 h-4" />
                          ) : (
                            <Volume2 className="w-4 h-4" />
                          )}
                        </Button>

                        <div className="flex-1 flex items-center gap-3">
                          <span className="text-white text-sm">{formatTime(mainVideoCurrentTime)}</span>
                          <input
                            type="range"
                            min="0"
                            max={mainVideoDuration || 0}
                            value={mainVideoCurrentTime}
                            onChange={handleMainVideoSeek}
                            className="flex-1 h-1 bg-white/30 rounded-full appearance-none cursor-pointer"
                          />
                          <span className="text-white text-sm">{formatTime(mainVideoDuration)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}