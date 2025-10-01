import { FeatureCard } from "./FeatureCard";
import { Target, TrendingUp, Award, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";

export function FeaturesSection() {
  return (
    <section className="py-20 md:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose CareerToDo?</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience learning that bridges the gap between education and employment
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard
            icon={Target}
            title="Role-Specific Learning"
            description="Practice scenarios tailored to your career path"
            delay={0}
          />
          <FeatureCard
            icon={TrendingUp}
            title="Real Workflows"
            description="Learn with actual business processes and tools"
            delay={0.1}
          />
          <FeatureCard
            icon={BarChart3}
            title="Progress Tracking"
            description="Monitor your growth with detailed analytics"
            delay={0.2}
          />
          <FeatureCard
            icon={Award}
            title="Career Outcomes"
            description="Build a portfolio that gets you hired"
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
}
