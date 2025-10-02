import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface EnhancedFeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
  gradient?: string;
  iconColor?: string;
  borderColor?: string;
}

export function EnhancedFeatureCard({ 
  icon: Icon, 
  title, 
  description, 
  delay = 0,
  gradient = "from-sky-100/80 to-blue-100/80",
  iconColor = "text-sky-600",
  borderColor = "border-sky-200"
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
      
      <div className={`relative bg-white/80 backdrop-blur-xl border ${borderColor} rounded-3xl p-8 hover:shadow-2xl hover:shadow-sky-200/50 transition-all duration-300`}>
        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border ${borderColor}`}>
          <Icon className={`w-8 h-8 ${iconColor}`} />
        </div>
        
        <h3 className={`text-xl font-bold mb-3 group-hover:${iconColor} transition-colors duration-300`}>
          {title}
        </h3>
        
        <p className="text-slate-600 leading-relaxed">
          {description}
        </p>

        <div className={`absolute top-4 right-4 w-2 h-2 rounded-full bg-gradient-to-r from-sky-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
          <div className="absolute inset-0 rounded-full bg-sky-400 animate-ping" />
        </div>

        {/* Hover effect border */}
        <div className={`absolute inset-0 rounded-3xl border ${borderColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
      </div>
    </motion.div>
  );
}
