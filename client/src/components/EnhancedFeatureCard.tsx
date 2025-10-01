import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface EnhancedFeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
  gradient?: string;
}

export function EnhancedFeatureCard({ 
  icon: Icon, 
  title, 
  description, 
  delay = 0,
  gradient = "from-chart-3/10 to-chart-4/10"
}: EnhancedFeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="group relative"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      
      <div className="relative bg-card/60 backdrop-blur-xl border border-card-border rounded-3xl p-8 hover-elevate active-elevate-2 transition-all">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-chart-3 to-chart-4 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
          <Icon className="w-7 h-7 text-white" />
        </div>
        
        <h3 className="text-xl font-bold mb-3 group-hover:text-chart-3 transition-colors">
          {title}
        </h3>
        
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>

        <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-chart-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="absolute inset-0 rounded-full bg-chart-3 animate-ping" />
        </div>
      </div>
    </motion.div>
  );
}
