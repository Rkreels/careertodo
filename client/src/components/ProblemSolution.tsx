import { motion } from "framer-motion";
import { AlertCircle, TrendingDown, Users, BookOpen, Globe, Briefcase } from "lucide-react";

export function ProblemSolution() {
  return (
    <>
      <section className="py-20 md:py-32 bg-destructive/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Bangladesh's Skills Gap Crisis</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              "Over 11% of educated youth in Bangladesh remain jobless—more than double the national rate. Nearly 30% can't find work even after two years of searching."
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-card-border rounded-2xl p-8 text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-destructive/10 flex items-center justify-center">
                <TrendingDown className="w-8 h-8 text-destructive" />
              </div>
              <div className="text-4xl font-bold mb-2">11%</div>
              <p className="text-muted-foreground">
                Graduate unemployment vs 4.6% national average
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-card border border-card-border rounded-2xl p-8 text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-destructive/10 flex items-center justify-center">
                <Users className="w-8 h-8 text-destructive" />
              </div>
              <div className="text-4xl font-bold mb-2">29%</div>
              <p className="text-muted-foreground">
                Unemployed for over 2 years; 45% don't reach interviews
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-card border border-card-border rounded-2xl p-8 text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-destructive/10 flex items-center justify-center">
                <Briefcase className="w-8 h-8 text-destructive" />
              </div>
              <div className="text-4xl font-bold mb-2">1.3M</div>
              <p className="text-muted-foreground">
                Graduates working below their skill level
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-card border border-card-border rounded-2xl p-8 text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-destructive/10 flex items-center justify-center">
                <Globe className="w-8 h-8 text-destructive" />
              </div>
              <div className="text-4xl font-bold mb-2">15.1%</div>
              <p className="text-muted-foreground">
                Youth unemployment rate - highest in South Asia
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-chart-3/10 to-chart-4/10 rounded-3xl p-8 text-center"
          >
            <h3 className="text-2xl font-bold mb-4">But There's Hope!</h3>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              "The Bangladeshi IT sector is projected to create up to 2 million jobs by 2030, but only those with hands-on, relevant skills will qualify."
            </p>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto mt-2">
              "Bangladesh has partnered with the World Bank on an $850 million jobs and skills program, underlining the urgent need for practical skills, not just degrees."
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Degrees & YouTube Tutorials Aren't Enough</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              You can watch tutorials all day — but when your boss asks you to "file payroll," "create a tax report," or "build a roadmap," theory won't save you.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-destructive">The Problem</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Passive Learning</p>
                    <p className="text-muted-foreground">Watching videos isn't the same as doing the work</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">No Real Context</p>
                    <p className="text-muted-foreground">Theory doesn't prepare you for actual workplace challenges</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Employers Don't Care</p>
                    <p className="text-muted-foreground">They care what you can execute, not what you memorized</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-chart-3">The CareerToDo Solution</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <BookOpen className="w-6 h-6 text-chart-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Active Practice</p>
                    <p className="text-muted-foreground">Run HRMS, ERP, CRM like you're actually on the job</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <BookOpen className="w-6 h-6 text-chart-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Real Workflows</p>
                    <p className="text-muted-foreground">Practice actual tasks employers pay for</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <BookOpen className="w-6 h-6 text-chart-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Job-Ready Skills</p>
                    <p className="text-muted-foreground">Build the confidence to execute from day one</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Choose Your Path", desc: "Select from Finance, HR, Sales, Marketing, and more" },
              { step: "2", title: "Practice Tools", desc: "Use 20+ real-world professional software simulations" },
              { step: "3", title: "Track Progress", desc: "Monitor your growth with detailed analytics and feedback" },
              { step: "4", title: "Get Hired", desc: "Build a portfolio that showcases your practical skills" },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="text-6xl font-extrabold text-ring/10 mb-4">{item.step}</div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
