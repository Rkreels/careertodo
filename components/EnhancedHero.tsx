import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/LanguageProvider";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { ArrowRight, Sparkles, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import dashboardImage from "/assets/generated_images/Dashboard_mockup_for_hero_b3204792.png";

export function EnhancedHero() {
  const { t } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useTransform(mouseY, [-300, 300], prefersReducedMotion ? [0, 0] : [10, -10]);
  const rotateY = useTransform(mouseX, [-300, 300], prefersReducedMotion ? [0, 0] : [-10, 10]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      mouseX.set(e.clientX - centerX);
      mouseY.set(e.clientY - centerY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-sky-50 via-white to-blue-50">
      {/* Animated background particles */}
      {!prefersReducedMotion && (
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-sky-300/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * 100 - 50],
                x: [0, Math.random() * 100 - 50],
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 10 + Math.random() * 10,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
        </div>
      )}

      {/* Enhanced Gradient overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(14,165,233,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(125,211,252,0.08),transparent_70%)]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 mt-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-sky-100 to-blue-100 border border-sky-200 mb-6"
            >
              <Sparkles className="w-4 h-4 text-sky-600" />
              <span className="text-sm font-semibold text-sky-700">The World's First Job Simulation Platform</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-800 leading-[1.1] mb-6">
              <span className="bg-gradient-to-r from-sky-600 via-blue-600 to-sky-700 bg-clip-text text-transparent">
                Learn by Doing, Not by Watching
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 mb-8 leading-relaxed">
              No classrooms. No lectures. Just the work employers pay for. Practice real HR, finance, product, and sales tasks in a safe environment.
            </p>

            <div className="flex items-center justify-center gap-4 sm:gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-black text-sky-600">11%</div>
                <div className="text-xs sm:text-sm text-slate-600">Graduate Unemployment</div>
              </div>
              <div className="h-8 sm:h-12 w-px bg-sky-200" />
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-black text-blue-600">2M+</div>
                <div className="text-xs sm:text-sm text-slate-600">Tech Jobs by 2030</div>
              </div>
              <div className="h-8 sm:h-12 w-px bg-sky-200" />
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-black text-sky-700">$850M</div>
                <div className="text-xs sm:text-sm text-slate-600">World Bank Support</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="group relative bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-700 hover:to-blue-700 text-white text-lg px-8 py-6 rounded-2xl overflow-hidden shadow-lg shadow-sky-200/50 hover:shadow-xl hover:shadow-sky-300/50 transition-all duration-300"
                data-testid="button-get-started"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: "-100%" }}
                  animate={{ x: isHovered ? "100%" : "-100%" }}
                  transition={{ duration: 0.6 }}
                />
                <span className="relative flex items-center gap-2">
                  Start Simulating Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-sky-300 bg-white/80 backdrop-blur-sm text-sky-700 hover:bg-sky-50 hover:border-sky-400 text-lg px-8 py-6 rounded-2xl group transition-all duration-300"
                data-testid="button-watch-demo"
              >
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </div>
          </motion.div>

          <motion.div
            ref={cardRef}
            initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{
              rotateX: rotateX,
              rotateY: rotateY,
              transformStyle: "preserve-3d",
            }}
            className="relative perspective-1000"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-sky-200">
              {/* Enhanced Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-sky-400 via-blue-500 to-sky-600 rounded-3xl blur-2xl opacity-50" />
              
              <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl overflow-hidden border border-sky-100">
                <img 
                  src={dashboardImage} 
                  alt="CareerToDo Dashboard" 
                  className="w-full h-auto relative z-10"
                  style={{ transform: "translateZ(20px)" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sky-600/20 via-transparent to-transparent" />
              </div>
            </div>

            {/* Enhanced Floating badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="absolute -top-4 -right-4 bg-gradient-to-r from-sky-600 to-blue-600 text-white px-4 py-2 rounded-2xl shadow-xl border border-sky-200"
            >
              <div className="text-xs font-semibold">🔥 Trending</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="absolute -bottom-4 -left-4 bg-white/90 backdrop-blur-xl text-sky-700 px-4 py-2 rounded-2xl shadow-xl border border-sky-200"
            >
              <div className="text-xs font-semibold">⭐ 4.9/5 Rating</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
