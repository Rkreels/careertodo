import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { RoleCardsMarquee } from "@/components/RoleCardsMarquee";

export function EnhancedHero() {
  const [isHovered, setIsHovered] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-sky-50 via-white to-blue-50">
      {/* Animated background particles - reduced for mobile performance */}
      {!prefersReducedMotion && (
        <div className="absolute inset-0">
          {[...Array(typeof window !== 'undefined' && window.innerWidth < 768 ? 6 : 20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 sm:w-2 sm:h-2 bg-sky-300/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * 30 - 15],
                x: [0, Math.random() * 30 - 15],
                scale: [1, 1.1, 1],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 8 + Math.random() * 6,
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
      
      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 md:py-8 lg:py-12 mt-8 sm:mt-10 md:mt-12">
        <div className="grid lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-1 px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 rounded-full bg-gradient-to-r from-sky-100 to-blue-100 border border-sky-200 mb-2 sm:mb-3 md:mb-4"
            >
              <Sparkles className="w-3 h-3 sm:w-3 sm:h-3 md:w-4 md:h-4 text-sky-600" />
              <span className="text-sm sm:text-xs md:text-sm font-semibold text-sky-700">Job Simulation Platform</span>
            </motion.div>

            <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-slate-800 leading-tight mb-2 sm:mb-3 md:mb-4">
              <span className="bg-gradient-to-r from-sky-600 via-blue-600 to-sky-700 bg-clip-text text-transparent">
                Learn by Doing, Not by Watching
              </span>
            </h1>
            
            <p className="text-base sm:text-base md:text-lg lg:text-xl text-slate-600 mb-3 sm:mb-4 md:mb-6 leading-relaxed">
              No classrooms. No lectures. Just real work practice. Build HR, finance, product, and sales skills in a safe environment.
            </p>

            <div className="flex items-center justify-center lg:justify-start gap-2 sm:gap-3 md:gap-4 lg:gap-6 mb-3 sm:mb-4 md:mb-6">
              <div className="text-center">
                <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-sky-600">11%</div>
                <div className="text-base text-slate-600">Graduate Unemployment</div>
              </div>
              <div className="h-3 sm:h-4 md:h-6 lg:h-8 w-px bg-sky-200" />
              <div className="text-center">
                <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-blue-600">2M+</div>
                <div className="text-base text-slate-600">Tech Jobs by 2030</div>
              </div>
              <div className="h-3 sm:h-4 md:h-6 lg:h-8 w-px bg-sky-200 hidden sm:block" />
              <div className="text-center hidden sm:block">
                <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-sky-700">$850M</div>
                <div className="text-xs text-slate-600">World Bank Support</div>
              </div>
            </div>

            {/* Mobile-only third stat */}
            <div className="flex justify-center lg:hidden mb-3 sm:mb-4">
              <div className="text-center">
                <div className="text-lg sm:text-xl font-black text-sky-700">$850M</div>
                <div className="text-xs text-slate-600">World Bank Support</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center lg:justify-start">
              <Link href="/signup">
                <Button 
                  size="lg" 
                  className="group relative bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-700 hover:to-blue-700 text-white text-sm sm:text-base px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl overflow-hidden shadow-lg shadow-sky-200/50 hover:shadow-xl hover:shadow-sky-300/50 transition-all duration-300 w-full sm:w-auto min-h-[40px]"
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
                  <span className="relative flex items-center gap-2 text-xs sm:text-sm font-medium justify-center">
                    <span className="hidden xs:inline">Start Simulating</span>
                    <span className="xs:hidden">Start Now</span>
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                  </span>
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Rolling cards - positioned below CTA on mobile, properly positioned on desktop */}
          <div className="lg:absolute lg:right-4 lg:top-1/2 lg:-translate-y-1/2 lg:w-96 lg:h-96 hidden lg:block">
            <div className="relative w-full h-full">
              <RoleCardsMarquee />
            </div>
          </div>
        </div>

        {/* Rolling cards for mobile/tablet - positioned below CTA button */}
        <div className="lg:hidden mt-15 sm:mt-20 md:mt-24">
          <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px]">
            {/* Mobile shadow only at top - starts right after black Reality Check section */}
            <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-white via-white/70 to-transparent z-10 pointer-events-none" />
            <RoleCardsMarquee />
          </div>
        </div>
      </div>
    </section>
  );
}
