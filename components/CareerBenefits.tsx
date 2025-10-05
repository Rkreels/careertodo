import { motion } from "framer-motion";
import { 
  Layers, 
  Trophy, 
  DollarSign, 
  Rocket, 
  Eye, 
  Shield, 
  Sparkles, 
  Brain
} from "lucide-react";

const benefits = [
  {
    icon: Layers,
    title: "Bridge the Gap",
    subtitle: "From Theory to Practice",
    description: "Turn classroom knowledge into real workplace experience with hands-on simulations that mirror actual job scenarios.",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
  },
  {
    icon: Trophy,
    title: "Interview Dominator",
    subtitle: "Outshine the Competition",
    description: "Walk into interviews with proven experience stories and demonstrable skills that make employers compete for you.",
    color: "from-yellow-500 to-orange-500",
    bgColor: "bg-yellow-50",
  },
  {
    icon: DollarSign,
    title: "Salary Booster",
    subtitle: "Earn What You're Worth",
    description: "Justify higher offers and negotiate better packages by showcasing hands-on expertise, not just theoretical knowledge.",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50",
  },
  {
    icon: Rocket,
    title: "Promotion Accelerator",
    subtitle: "Fast-Track Your Career",
    description: "Become the go-to expert when new software launches, positioning yourself for leadership roles and faster advancement.",
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50",
  },
  {
    icon: Eye,
    title: "Department Whisperer",
    subtitle: "See the Big Picture",
    description: "Understand how every department really works by mastering their tools - from Sales CRMs to Operations ERPs.",
    color: "from-indigo-500 to-blue-500",
    bgColor: "bg-indigo-50",
  },
  {
    icon: Shield,
    title: "Career Insurance",
    subtitle: "Future-Proof Your Job",
    description: "Stay relevant through technology shifts and economic changes by continuously updating your in-demand software skills.",
    color: "from-red-500 to-rose-500",
    bgColor: "bg-red-50",
  },
  {
    icon: Sparkles,
    title: "Confidence Builder",
    subtitle: "Replace Doubt with Mastery",
    description: "Transform imposter syndrome into expert presence through repeated practice and proven skill demonstration.",
    color: "from-teal-500 to-cyan-500",
    bgColor: "bg-teal-50",
  },
  {
    icon: Brain,
    title: "Consultant Mindset",
    subtitle: "Think like a high-priced consultant without the price tag",
    description: "See business problems through multiple software lenses to find better solutions.",
    color: "from-violet-500 to-purple-500",
    bgColor: "bg-violet-50",
  }
];

interface BenefitCardProps {
  benefit: typeof benefits[0];
  index: number;
}

function BenefitCard({ benefit, index }: BenefitCardProps) {
  const Icon = benefit.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 * index }}
      className="group"
    >
      <div className="h-full p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:border-gray-200">
        {/* Icon */}
        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="w-8 h-8 text-white" />
        </div>
        
        {/* Content */}
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
          {benefit.title}
        </h3>
        <p className="text-sm font-semibold text-gray-600 mb-3">
          {benefit.subtitle}
        </p>
        <p className="text-gray-600 leading-relaxed">
          {benefit.description}
        </p>
      </div>
    </motion.div>
  );
}

export function CareerBenefits() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(168,85,247,0.05),transparent_50%)]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            How CareerTodo Helps You
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your career with practical skills that make employers notice, value, and hire you
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} benefit={benefit} index={index} />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 p-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl shadow-2xl">
            <div className="text-center sm:text-left">
              <h3 className="text-2xl font-bold text-white mb-3">
                Ready to Transform Your Career?
              </h3>
              <p className="text-blue-100 text-lg">
                Join thousands who've already landed their dream jobs with CareerTodo
              </p>
            </div>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 whitespace-nowrap">
              Start Your Journey
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}