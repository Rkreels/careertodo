import { motion } from "framer-motion";
import { AnimatedCounter } from "./AnimatedCounter";
import { Users, Award, Briefcase, TrendingUp } from "lucide-react";

const stats = [
  { icon: Users, label: "Active Learners", value: 50000, suffix: "+", color: "text-chart-3" },
  { icon: Award, label: "Career Paths", value: 20, suffix: "+", color: "text-chart-4" },
  { icon: Briefcase, label: "Job Placements", value: 12000, suffix: "+", color: "text-chart-2" },
  { icon: TrendingUp, label: "Success Rate", value: 95, suffix: "%", color: "text-chart-3" },
];

export function StatsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-card via-background to-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-card to-background border border-card-border mb-4 group-hover:scale-110 transition-transform">
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              <div className={`text-4xl md:text-5xl font-black mb-2 ${stat.color}`}>
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
