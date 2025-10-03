import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp } from "lucide-react";
import { Link } from "wouter";
import financeImage from "/assets/generated_images/Finance_career_path_illustration_bd4a80b3.png";
import hrImage from "/assets/generated_images/HR_career_path_illustration_acbb8bdc.png";
import salesImage from "/assets/generated_images/Sales_career_path_illustration_1e56eccb.png";

const paths = [
  {
    title: "Finance & Accounting",
    description: "Master financial analysis, accounting, treasury management, and tax filing through real-world scenarios.",
    image: financeImage,
    gradient: "from-blue-500 to-cyan-500",
    skills: ["Financial Analysis", "Accounting", "Treasury", "Tax Filing"],
    salary: "৳40,000 - ৳1,20,000"
  },
  {
    title: "Human Resources",
    description: "Learn recruitment, payroll, employee management, and HRMS systems with practical simulations.",
    image: hrImage,
    gradient: "from-orange-500 to-red-500",
    skills: ["Recruitment", "Payroll", "HRMS", "Performance Mgmt"],
    salary: "৳35,000 - ৳90,000"
  },
  {
    title: "Sales & Marketing",
    description: "Practice CRM, campaign management, analytics, and social media marketing with industry tools.",
    image: salesImage,
    gradient: "from-purple-500 to-pink-500",
    skills: ["CRM", "Campaigns", "Analytics", "Social Media"],
    salary: "৳30,000 - ৳1,00,000"
  },
];

export function EnhancedCareerPaths() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-background via-card to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.1),transparent_50%)]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            Choose Your{" "}
            <span className="bg-gradient-to-r from-chart-3 via-chart-4 to-chart-2 bg-clip-text text-transparent">
              Career Path
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Start your journey in the field that matches your passion
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {paths.map((path, index) => (
            <motion.div
              key={path.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className={`absolute -inset-1 bg-gradient-to-br ${path.gradient} rounded-3xl blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-700`} />
              
              <div className="relative bg-card/80 backdrop-blur-xl border border-card-border rounded-3xl overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={path.image} 
                    alt={path.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${path.gradient} opacity-20 group-hover:opacity-30 transition-opacity`} />
                  
                  <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm">
                    <div className="flex items-center gap-1">
                      <TrendingUp className="w-4 h-4 text-green-600" />
                      <span className="text-xs font-bold">High Demand</span>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-black mb-3 group-hover:text-chart-3 transition-colors">
                    {path.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {path.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {path.skills.map((skill) => (
                      <span 
                        key={skill}
                        className="px-3 py-1 rounded-full bg-background border border-card-border text-xs font-semibold"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mb-6 pb-6 border-b border-card-border">
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Avg. Salary Range</p>
                      <p className="text-lg font-bold">{path.salary}</p>
                    </div>
                  </div>

                  <Link href="/signup">
                    <Button 
                      className="w-full group/btn rounded-xl"
                      data-testid={`button-explore-${path.title.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      Explore Path
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
