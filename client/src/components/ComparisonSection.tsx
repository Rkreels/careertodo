import { motion } from "framer-motion";
import { Check, X, ArrowRight } from "lucide-react";

export function ComparisonSection() {
  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">The Choice Is Yours</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay stuck in theory — or take the leap into practical, real-world learning that makes you employable
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Traditional Learning */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-destructive/20 rounded-3xl p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 bg-destructive text-white px-4 py-2 rounded-bl-2xl">
              <span className="text-sm font-semibold">Outdated</span>
            </div>
            
            <h3 className="text-2xl font-bold mb-6 text-destructive">Traditional Learning</h3>
            
            <div className="space-y-4 mb-8">
              {[
                { text: "Long, boring lectures", has: false },
                { text: "Theoretical knowledge only", has: false },
                { text: "Passive watching", has: false },
                { text: "No real-world context", has: false },
                { text: "Years to become job-ready", has: false },
                { text: "Still unprepared for work", has: false },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
                    <X className="w-4 h-4 text-destructive" />
                  </div>
                  <span className="text-muted-foreground">{item.text}</span>
                </div>
              ))}
            </div>
            
            <div className="bg-destructive/5 rounded-2xl p-6">
              <p className="text-sm text-destructive font-medium">
                "Why Degrees & YouTube Tutorials Aren't Enough Anymore"
              </p>
            </div>
          </motion.div>

          {/* CareerToDo Simulation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-chart-3/20 rounded-3xl p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 bg-gradient-to-r from-chart-3 to-chart-4 text-white px-4 py-2 rounded-bl-2xl">
              <span className="text-sm font-semibold">Future-Ready</span>
            </div>
            
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-chart-3 to-chart-4 bg-clip-text text-transparent">
              CareerToDo Simulation
            </h3>
            
            <div className="space-y-4 mb-8">
              {[
                { text: "Hands-on practice from day 1", has: true },
                { text: "Actual workplace tasks", has: true },
                { text: "Active learning by doing", has: true },
                { text: "Real professional tools", has: true },
                { text: "6 months to job-ready", has: true },
                { text: "Ready for job execution", has: true },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-chart-3/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-chart-3" />
                  </div>
                  <span className="text-foreground font-medium">{item.text}</span>
                </div>
              ))}
            </div>
            
            <div className="bg-gradient-to-r from-chart-3/10 to-chart-4/10 rounded-2xl p-6">
              <p className="text-sm text-chart-3 font-medium">
                "The World's First Job Simulation Platform"
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-chart-3/10 to-chart-4/10 rounded-3xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Employers Don't Care What You Memorized</h3>
            <p className="text-lg text-muted-foreground mb-6">
              They care what you can execute. That's why so many graduates stay stuck in entry-level roles — 
              they know about the work, but can't actually do it.
            </p>
            <div className="flex items-center justify-center gap-2 text-chart-3 font-semibold">
              <span>Bridge the gap with CareerToDo</span>
              <ArrowRight className="w-5 h-5" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}