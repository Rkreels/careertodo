import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { Link } from "wouter";

export function EnhancedCTA() {
  const prefersReducedMotion = useReducedMotion();
  
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] relative overflow-hidden">
      {/* Animated background elements */}
      {!prefersReducedMotion && (
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 bg-chart-3/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * 100 - 50],
                x: [0, Math.random() * 100 - 50],
                scale: [1, 2, 1],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 8 + Math.random() * 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      )}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.15),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(249,115,22,0.15),transparent_70%)]" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8"
          >
            <Sparkles className="w-4 h-4 text-chart-3" />
            <span className="text-sm font-semibold text-white">Start Your Journey Today</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-[1.1] mb-8">
            Ready to Transform{" "}
            <span className="bg-gradient-to-r from-chart-3 via-chart-4 to-chart-2 bg-clip-text text-transparent">
              Your Career?
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-white/80 mb-12 leading-relaxed max-w-3xl mx-auto">
            Join 50,000+ learners mastering professional skills through real-world simulations
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button 
                size="lg" 
                className="group relative bg-gradient-to-r from-chart-3 to-chart-4 hover:from-chart-3/90 hover:to-chart-4/90 text-white text-base sm:text-lg px-6 sm:px-8 lg:px-10 py-4 sm:py-5 lg:py-6 rounded-xl sm:rounded-2xl overflow-hidden w-full sm:w-auto min-h-[44px] sm:min-h-[52px]"
                data-testid="button-cta-start-free"
              >
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
                <span className="relative flex items-center gap-2 text-sm sm:text-base font-medium">
                  <span className="hidden xs:inline">Start Free Trial</span>
                  <span className="xs:hidden">Start Free</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                </span>
              </Button>
            </Link>
            
            <Link href="/signup">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white/30 bg-white/5 backdrop-blur-md text-white hover:bg-white/10 text-base sm:text-lg px-6 sm:px-8 lg:px-10 py-4 sm:py-5 lg:py-6 rounded-xl sm:rounded-2xl w-full sm:w-auto min-h-[44px] sm:min-h-[52px]"
                data-testid="button-cta-schedule-demo"
              >
                <span className="text-sm sm:text-base font-medium">
                  <span className="hidden xs:inline">Schedule Demo</span>
                  <span className="xs:hidden">Demo</span>
                </span>
              </Button>
            </Link>
          </div>

          <p className="text-white/60 text-sm mt-8">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </motion.div>
      </div>
    </section>
  );
}
