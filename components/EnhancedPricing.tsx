import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";
import { Link } from "wouter";

const plans = [
  {
    name: "Early Access Special",
    price: "৳4,999",
    originalPrice: "৳12,000",
    period: "6 months",
    description: "Limited time offer - Get 6 months of full access at our special launch price!",
    icon: Sparkles,
    gradient: "from-chart-3 to-chart-4",
    savings: 58,
    features: [
      "Access to all 20+ professional simulations",
      "ERP, CRM, HRMS, Accounting & more tools",
      "Progress tracking dashboard",
      "Community forum access",
      "Priority email support",
      "Certificate of completion",
      "Job placement assistance",
      "Mobile app access"
    ],
    popular: true,
    earlyAccess: true
  }
];

export function EnhancedPricing() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-card via-background to-card relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_70%)]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            Simple,{" "}
            <span className="bg-gradient-to-r from-chart-3 to-chart-4 bg-clip-text text-transparent">
              Transparent Pricing
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Choose the plan that fits your career goals
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative"
            >
              {plan.earlyAccess && (
                <div className="absolute -top-5 left-0 right-0 flex justify-center z-10">
                  <div className="px-6 py-2 rounded-full bg-gradient-to-r from-chart-3 to-chart-4 text-white text-sm font-bold animate-pulse">
                    🎉 Limited Time Early Access Offer
                  </div>
                </div>
              )}

              <div className={`absolute -inset-1 bg-gradient-to-br ${plan.gradient} rounded-3xl blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-700`} />
              
              <div className={`relative bg-card/80 backdrop-blur-xl border-2 ${plan.popular ? 'border-chart-3' : 'border-card-border'} rounded-3xl p-8 md:p-12`}>
                <div className="text-center mb-8">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${plan.gradient} flex items-center justify-center mb-6 mx-auto`}>
                    <plan.icon className="w-10 h-10 text-white" />
                  </div>

                  <h3 className="text-3xl md:text-4xl font-black mb-4">{plan.name}</h3>
                  <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">{plan.description}</p>

                  <div className="mb-8">
                    <div className="flex items-center justify-center gap-4 mb-2">
                      <span className="text-6xl md:text-7xl font-black bg-gradient-to-r from-chart-3 to-chart-4 bg-clip-text text-transparent">
                        {plan.price}
                      </span>
                    </div>
                    <div className="flex items-center justify-center gap-3">
                      <span className="text-xl text-muted-foreground line-through">{plan.originalPrice}</span>
                      <span className="text-lg text-muted-foreground">{plan.period}</span>
                    </div>
                    <div className="mt-3 inline-flex items-center px-4 py-1 rounded-full bg-green-100 text-green-800 text-sm font-medium">
                      Save {plan.savings}%
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${plan.gradient} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-sm leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link href="/signup">
                  <Button 
                    size="lg"
                    className={`w-full rounded-xl bg-gradient-to-r from-chart-3 to-chart-4 hover:from-chart-3/90 hover:to-chart-4/90 text-white text-lg py-6`}
                    data-testid={`button-select-${plan.name.toLowerCase()}`}
                  >
                    Get Started Now
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12 text-muted-foreground"
        >
          bKash payment supported • 7-day money-back guarantee • Limited time offer
        </motion.p>
      </div>
    </section>
  );
}
