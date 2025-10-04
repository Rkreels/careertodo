import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/LanguageProvider";
import { motion } from "framer-motion";
import dashboardImage from "/assets/generated_images/Dashboard_mockup_for_hero_b3204792.png";
import { Link } from "wouter";

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-ring/20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(6,182,212,0.1),transparent_50%)]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
              {t("hero.title")}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              {t("hero.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/signup">
                <Button 
                  size="lg" 
                  className="bg-chart-3 hover:bg-chart-3/90 text-white text-lg px-8 py-6 rounded-2xl"
                  data-testid="button-get-started"
                >
                  {t("hero.cta.primary")}
                </Button>
              </Link>
              <Link href="/signup">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white/30 bg-white/10 backdrop-blur-md text-white hover:bg-white/20 text-lg px-8 py-6 rounded-2xl"
                  data-testid="button-university-demo"
                >
                  {t("hero.cta.secondary")}
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={dashboardImage} 
                alt="CareerToDo Dashboard" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
