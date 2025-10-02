import { CareerPathCard } from "./CareerPathCard";
import { motion } from "framer-motion";
import financeImage from "/assets/generated_images/Finance_career_path_illustration_bd4a80b3.png";
import hrImage from "/assets/generated_images/HR_career_path_illustration_acbb8bdc.png";
import salesImage from "/assets/generated_images/Sales_career_path_illustration_1e56eccb.png";

export function CareerPathsSection() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Choose Your Career Path</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Start your journey in the field that matches your passion
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <CareerPathCard
            title="Finance"
            description="Master accounting, financial analysis, treasury management, and tax filing through real-world scenarios."
            image={financeImage}
            delay={0}
          />
          <CareerPathCard
            title="Human Resources"
            description="Learn recruitment, payroll, employee management, and HRMS systems with practical simulations."
            image={hrImage}
            delay={0.1}
          />
          <CareerPathCard
            title="Sales & Marketing"
            description="Practice CRM, campaign management, analytics, and social media marketing with industry tools."
            image={salesImage}
            delay={0.2}
          />
        </div>
      </div>
    </section>
  );
}
