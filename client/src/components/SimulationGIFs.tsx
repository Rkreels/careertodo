import { motion } from "framer-motion";

const simulations = [
  { id: "1", title: "Financial Dashboard", image: "https://placehold.co/800x600/0f172a/06b6d4?text=Financial+Analytics+Dashboard" },
  { id: "2", title: "HRMS System", image: "https://placehold.co/800x600/0f172a/f97316?text=Employee+Management+System" },
  { id: "3", title: "CRM Interface", image: "https://placehold.co/800x600/0f172a/3b82f6?text=Customer+Relationship+Management" },
];

export function SimulationGIFs() {
  return (
    <section className="py-20 md:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Interactive Simulations</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience real-world tools in action
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {simulations.map((sim, index) => (
            <motion.div
              key={sim.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-card-border bg-background hover-elevate active-elevate-2 transition-all"
              data-testid={`simulation-${sim.id}`}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={sim.image} 
                  alt={sim.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">{sim.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
