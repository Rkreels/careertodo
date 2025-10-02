import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

export function FeatureCard({ icon: Icon, title, description, delay = 0 }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-card border border-card-border rounded-2xl p-8 hover-elevate active-elevate-2 transition-all"
    >
      <div className="w-14 h-14 rounded-xl bg-ring/10 flex items-center justify-center mb-6">
        <Icon className="w-7 h-7 text-ring" />
      </div>
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground text-lg leading-relaxed">{description}</p>
    </motion.div>
  );
}
