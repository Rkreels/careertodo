import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";
import { RoleCardsMarquee } from "@/components/RoleCardsMarquee";

export function EnhancedHero() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-sky-50 via-white to-blue-50">
      {/* Animated background particles - reduced for mobile performance */}
      {!prefersReducedMotion && (
        <div className="absolute inset-0">
          {[...Array(window.innerWidth < 768 ? 8 : 20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 sm:w-2 sm:h-2 bg-sky-300/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * 50 - 25],
                x: [0, Math.random() * 50 - 25],
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.4, 0.2],
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
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 mt-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r from-sky-100 to-blue-100 border border-sky-200 mb-4 sm:mb-6"
            >
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-sky-600" />
              <span className="text-xs sm:text-sm font-semibold text-sky-700">The World's First Job Simulation Platform</span>
            </motion.div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-slate-800 leading-[1.1] mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-sky-600 via-blue-600 to-sky-700 bg-clip-text text-transparent">
                Learn by Doing, Not by Watching
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-slate-600 mb-6 sm:mb-8 leading-relaxed">
              No classrooms. No lectures. Just the work employers pay for. Practice real HR, finance, product, and sales tasks in a safe environment.
            </p>

            <div className="flex items-center justify-center gap-3 sm:gap-6 lg:gap-8 mb-6 sm:mb-8">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-black text-sky-600">11%</div>
                <div className="text-xs sm:text-sm text-slate-600">Graduate Unemployment</div>
              </div>
              <div className="h-6 sm:h-8 md:h-12 w-px bg-sky-200" />
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-black text-blue-600">2M+</div>
                <div className="text-xs sm:text-sm text-slate-600">Tech Jobs by 2030</div>
              </div>
              <div className="h-6 sm:h-8 md:h-12 w-px bg-sky-200 hidden sm:block" />
              <div className="text-center hidden sm:block">
                <div className="text-2xl sm:text-3xl md:text-4xl font-black text-sky-700">$850M</div>
                <div className="text-xs sm:text-sm text-slate-600">World Bank Support</div>
              </div>
            </div>

            {/* Mobile-only third stat */}
            <div className="flex justify-center sm:hidden mb-6">
              <div className="text-center">
                <div className="text-2xl font-black text-sky-700">$850M</div>
                <div className="text-xs text-slate-600">World Bank Support</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link href="/signup">
                <Button 
                  size="lg" 
                  className="group relative bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-700 hover:to-blue-700 text-white text-sm sm:text-base px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg shadow-sky-200/50 hover:shadow-xl hover:shadow-sky-300/50 transition-all duration-300 w-full sm:w-auto min-h-[44px]"
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
                  <span className="relative flex items-center gap-2 text-xs sm:text-sm font-medium">
                    <span className="hidden xs:inline">Start Simulating</span>
                    <span className="xs:hidden">Start Now</span>
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                  </span>
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="order-first lg:order-last mb-8 lg:mb-0"
          >
            <RoleCardsMarquee />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
