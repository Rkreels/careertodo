import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Sparkles, Zap, Crown } from "lucide-react";

const plans = [
  {
    name: "Explorer",
    price: "৳499",
    period: "/month",
    description: "Perfect for beginners starting their journey",
    icon: Sparkles,
    gradient: "from-blue-500 to-cyan-500",
    features: [
      "Access to 5 basic simulations",
      "Progress tracking dashboard",
      "Community forum access",
      "Email support",
      "Certificate of completion"
    ],
    popular: false
  },
  {
    name: "Professional",
    price: "৳1,499",
    period: "/month",
    description: "For serious learners ready to excel",
    icon: Zap,
    gradient: "from-orange-500 to-red-500",
    features: [
      "All Explorer features",
      "Access to all 20+ simulations",
      "Priority support (24/7)",
      "1-on-1 mentorship sessions",
      "Industry-recognized certificate",
      "Job placement assistance",
      "Lifetime access to materials"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For universities and organizations",
    icon: Crown,
    gradient: "from-purple-500 to-pink-500",
    features: [
      "All Professional features",
      "Custom simulations",
      "Dedicated account manager",
      "LMS integration",
      "Analytics dashboard",
      "White-label option",
      "Volume discounts"
    ],
    popular: false
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

        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: plan.popular ? 1.02 : 1 }}
              className={`group relative ${plan.popular ? 'lg:-mt-4 lg:mb-4' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-5 left-0 right-0 flex justify-center z-10">
                  <div className="px-4 py-1.5 rounded-full bg-gradient-to-r from-chart-3 to-chart-4 text-white text-sm font-bold">
                    Most Popular
                  </div>
                </div>
              )}

              <div className={`absolute -inset-1 bg-gradient-to-br ${plan.gradient} rounded-3xl blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-700`} />
              
              <div className={`relative bg-card/80 backdrop-blur-xl border-2 ${plan.popular ? 'border-chart-3' : 'border-card-border'} rounded-3xl p-8 h-full flex flex-col`}>
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${plan.gradient} flex items-center justify-center mb-6`}>
                  <plan.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-2xl font-black mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>

                <div className="mb-8">
                  <div className="flex items-baseline">
                    <span className="text-5xl font-black bg-gradient-to-r from-chart-3 to-chart-4 bg-clip-text text-transparent">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground ml-2">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${plan.gradient} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  size="lg"
                  className={`w-full rounded-xl ${plan.popular ? 'bg-gradient-to-r from-chart-3 to-chart-4 hover:from-chart-3/90 hover:to-chart-4/90 text-white' : ''}`}
                  variant={plan.popular ? "default" : "outline"}
                  data-testid={`button-select-${plan.name.toLowerCase()}`}
                >
                  {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                </Button>
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
          All plans include bKash payment support • 14-day money-back guarantee
        </motion.p>
      </div>
    </section>
  );
}
