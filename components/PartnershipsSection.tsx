import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Building2 } from "lucide-react";

const partners = [
  "University of Dhaka", "BUET", "NSU", "BRAC University",
  "Grameenphone", "Robi", "bKash", "Pathao", "Chaldal", "Daraz"
];

export function PartnershipsSection() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Trusted by Leading Organizations</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Partnering with top universities and companies to transform education
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-12">
          {partners.map((partner, index) => (
            <motion.div
              key={partner}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-card border border-card-border rounded-xl p-6 flex items-center justify-center hover-elevate active-elevate-2 transition-all"
            >
              <div className="text-center">
                <Building2 className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                <p className="text-sm font-medium">{partner}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button size="lg" variant="outline" className="rounded-2xl" data-testid="button-partnership-inquiry">
            Become a Partner
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
