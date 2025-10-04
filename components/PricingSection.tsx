import { Button } from "@/components/ui/button";
import { Check, Shield } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";

export function PricingSection() {
  return (
    <section className="py-20 md:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Special Launch Offer</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get started today with our limited-time pricing
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-background border-2 border-ring rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-ring/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-chart-3/10 rounded-full blur-3xl" />
            
            <div className="relative">
              <div className="inline-block bg-chart-3 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                Pay for 3 Months → Get 6 Months Access
              </div>
              
              <div className="mb-8">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-5xl md:text-6xl font-extrabold">৳2,999</span>
                  <span className="text-xl text-muted-foreground line-through">৳5,998</span>
                </div>
                <p className="text-muted-foreground">One-time payment • 6 months access</p>
              </div>

              <div className="space-y-4 mb-8">
                {[
                  "Access to all 20+ simulation tools",
                  "Real-world project scenarios",
                  "Progress tracking & certificates",
                  "Community support access",
                  "7-day money-back guarantee"
                ].map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-ring/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-ring" />
                    </div>
                    <span className="text-lg">{feature}</span>
                  </div>
                ))}
              </div>

              <Link href="/signup">
                <Button 
                  size="lg" 
                  className="w-full bg-chart-3 hover:bg-chart-3/90 text-white text-lg py-6 rounded-2xl"
                  data-testid="button-get-access"
                >
                  Get Access Now
                </Button>
              </Link>

              <div className="flex items-center justify-center gap-2 mt-6 text-sm text-muted-foreground">
                <Shield className="w-4 h-4" />
                <span>Secure payment via bKash</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
