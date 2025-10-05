import { motion } from "framer-motion";
import { 
  GitBranch, 
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
    icon: GitBranch,
    title: "Bridge the Gap",
    subtitle: "From Theory to Practice",
    description: "Turn classroom knowledge into real workplace experience with hands-on simulations that mirror actual job scenarios.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Trophy,
    title: "Interview Dominator",
    subtitle: "Outshine the Competition",
    description: "Walk into interviews with proven experience stories and demonstrable skills that make employers compete for you.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: DollarSign,
    title: "Salary Booster",
    subtitle: "Earn What You're Worth",
    description: "Justify higher offers and negotiate better packages by showcasing hands-on expertise, not just theoretical knowledge.",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Rocket,
    title: "Promotion Accelerator",
    subtitle: "Fast-Track Your Career",
    description: "Become the go-to expert when new software launches, positioning yourself for leadership roles and faster advancement.",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: Eye,
    title: "Department Whisperer",
    subtitle: "See the Big Picture",
    description: "Understand how every department really works by mastering their tools - from Sales CRMs to Operations ERPs.",
    color: "from-indigo-500 to-purple-500"
  },
  {
    icon: Shield,
    title: "Career Insurance",
    subtitle: "Future-Proof Your Job",
    description: "Stay relevant through technology shifts and economic changes by continuously updating your in-demand software skills.",
    color: "from-teal-500 to-cyan-500"
  },
  {
    icon: Sparkles,
    title: "Confidence Builder",
    subtitle: "Replace Doubt with Mastery",
    description: "Transform imposter syndrome into expert presence through repeated practice and proven skill demonstration.",
    color: "from-pink-500 to-rose-500"
  },
  {
    icon: Brain,
    title: "Consultant Mindset",
    subtitle: "Think like a high-priced consultant without the price tag",
    description: "See business problems through multiple software lenses to find better solutions.",
    color: "from-violet-500 to-purple-500"
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
      transition={{ delay: index * 0.1 }}
      className="group relative h-full"
    >
      <div className="relative bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-slate-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full min-h-[320px] w-full flex flex-col">
        {/* Gradient Border Effect */}
        <div className={`absolute inset-0 bg-gradient-to-r ${benefit.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
        
        {/* Icon */}
        <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
          <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
        </div>
        
        {/* Content */}
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 group-hover:text-slate-800 transition-colors">
          {benefit.title}
        </h3>
        <p className="text-base sm:text-lg font-semibold text-slate-600 mb-3">
          {benefit.subtitle}
        </p>
        <p className="text-sm sm:text-base text-slate-500 leading-relaxed flex-grow">
          {benefit.description}
        </p>
      </div>
    </motion.div>
  );
}

export function CareerTodoBenefits() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-slate-50 to-slate-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.05),transparent_50%)]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 sm:mb-6">
            How CareerTodo Helps
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
            Transform your career with practical skills that make you invaluable in today's competitive job market
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {benefits.map((benefit, index) => (
            <div key={benefit.title} className="h-full">
              <BenefitCard benefit={benefit} index={index} />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-12 sm:mt-16"
        >
          <div className="inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <span>Start Your Career Transformation</span>
            <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-xs">→</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}