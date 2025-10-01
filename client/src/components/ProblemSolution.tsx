import { motion } from "framer-motion";
import { AlertCircle, TrendingDown, Users, BookOpen } from "lucide-react";

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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">The Skills Gap Crisis</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Understanding the challenge facing today's job market
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-card-border rounded-2xl p-8 text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-destructive/10 flex items-center justify-center">
                <TrendingDown className="w-8 h-8 text-destructive" />
              </div>
              <div className="text-4xl font-bold mb-2">68%</div>
              <p className="text-muted-foreground">
                of graduates in Bangladesh lack job-ready skills
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
              <div className="text-4xl font-bold mb-2">85%</div>
              <p className="text-muted-foreground">
                of employers struggle to find qualified candidates
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
                <BookOpen className="w-8 h-8 text-destructive" />
              </div>
              <div className="text-4xl font-bold mb-2">2+ Years</div>
              <p className="text-muted-foreground">
                Average time to become job-ready with traditional education
              </p>
            </motion.div>
          </div>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">How CareerToDo Works</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your journey to career success in 4 simple steps
            </p>
          </motion.div>

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
