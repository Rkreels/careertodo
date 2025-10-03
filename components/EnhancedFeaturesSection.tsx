import { EnhancedFeatureCard } from "./EnhancedFeatureCard";
import { Target, TrendingUp, Award, BarChart3, Zap, Users } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  { 
    icon: Target, 
    title: "Role-Specific Learning", 
    description: "Practice scenarios tailored to your career path. Master Finance, HR, Sales, and Marketing with real-world simulations.",
    gradient: "from-sky-100/80 to-blue-100/80",
    iconColor: "text-sky-600",
    borderColor: "border-sky-200"
  },
  { 
    icon: Zap, 
    title: "Instant Feedback", 
    description: "Get real-time guidance as you work. Our AI-powered system provides immediate corrections and best practices.",
    gradient: "from-blue-100/80 to-sky-100/80",
    iconColor: "text-blue-600",
    borderColor: "border-blue-200"
  },
  { 
    icon: TrendingUp, 
    title: "Real Workflows", 
    description: "Learn with actual business processes and professional tools. Experience authentic work environments.",
    gradient: "from-sky-50/80 to-blue-50/80",
    iconColor: "text-sky-700",
    borderColor: "border-sky-300"
  },
  { 
    icon: BarChart3, 
    title: "Progress Tracking", 
    description: "Monitor your growth with detailed analytics. Visualize your skill development journey.",
    gradient: "from-blue-50/80 to-sky-50/80",
    iconColor: "text-blue-700",
    borderColor: "border-blue-300"
  },
  { 
    icon: Users, 
    title: "Collaborative Learning", 
    description: "Join study groups and connect with peers. Learn together and share insights.",
    gradient: "from-sky-100/60 to-blue-100/60",
    iconColor: "text-sky-600",
    borderColor: "border-sky-200"
  },
  { 
    icon: Award, 
    title: "Career Outcomes", 
    description: "Build a portfolio that gets you hired. Showcase your practical skills to employers.",
    gradient: "from-blue-100/60 to-sky-100/60",
    iconColor: "text-blue-600",
    borderColor: "border-blue-200"
  },
];

export function EnhancedFeaturesSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-32 bg-gradient-to-br from-sky-50/30 via-white to-blue-50/30 relative overflow-hidden">
      {/* Enhanced Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(14,165,233,0.12),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(59,130,246,0.12),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(125,211,252,0.08),transparent_70%)]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r from-sky-100 to-blue-100 border border-sky-200 mb-4 sm:mb-6 shadow-lg shadow-sky-100/50"
          >
            <span className="text-xs sm:text-sm font-semibold bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
              Why Choose CareerToDo
            </span>
          </motion.div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 sm:mb-6">
            Learn Skills That{" "}
            <span className="bg-gradient-to-r from-sky-600 via-blue-600 to-sky-700 bg-clip-text text-transparent">
              Actually Matter
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-4">
            Experience learning that bridges the gap between education and employment
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <EnhancedFeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              gradient={feature.gradient}
              delay={index * 0.1}
              iconColor={feature.iconColor}
              borderColor={feature.borderColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
