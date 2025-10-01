import { EnhancedFeatureCard } from "./EnhancedFeatureCard";
import { Target, TrendingUp, Award, BarChart3, Zap, Users } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  { 
    icon: Target, 
    title: "Role-Specific Learning", 
    description: "Practice scenarios tailored to your career path. Master Finance, HR, Sales, and Marketing with real-world simulations.",
    gradient: "from-chart-3/20 to-chart-4/20"
  },
  { 
    icon: Zap, 
    title: "Instant Feedback", 
    description: "Get real-time guidance as you work. Our AI-powered system provides immediate corrections and best practices.",
    gradient: "from-chart-4/20 to-chart-2/20"
  },
  { 
    icon: TrendingUp, 
    title: "Real Workflows", 
    description: "Learn with actual business processes and professional tools. Experience authentic work environments.",
    gradient: "from-chart-2/20 to-ring/20"
  },
  { 
    icon: BarChart3, 
    title: "Progress Tracking", 
    description: "Monitor your growth with detailed analytics. Visualize your skill development journey.",
    gradient: "from-ring/20 to-chart-3/20"
  },
  { 
    icon: Users, 
    title: "Collaborative Learning", 
    description: "Join study groups and connect with peers. Learn together and share insights.",
    gradient: "from-chart-3/20 to-chart-4/20"
  },
  { 
    icon: Award, 
    title: "Career Outcomes", 
    description: "Build a portfolio that gets you hired. Showcase your practical skills to employers.",
    gradient: "from-chart-4/20 to-chart-2/20"
  },
];

export function EnhancedFeaturesSection() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-background via-card to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(6,182,212,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(249,115,22,0.08),transparent_50%)]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-chart-3/20 to-chart-4/20 border border-chart-3/30 mb-6"
          >
            <span className="text-sm font-semibold bg-gradient-to-r from-chart-3 to-chart-4 bg-clip-text text-transparent">
              Why Choose CareerToDo
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            Learn Skills That{" "}
            <span className="bg-gradient-to-r from-chart-3 via-chart-4 to-chart-2 bg-clip-text text-transparent">
              Actually Matter
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Experience learning that bridges the gap between education and employment
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <EnhancedFeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              gradient={feature.gradient}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
