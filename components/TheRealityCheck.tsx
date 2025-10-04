import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { AlertTriangle, TrendingUp, Users, DollarSign, GraduationCap, Briefcase, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";

interface StatItem {
  value: string;
  label: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
  source: string;
}

const shockingStats: StatItem[] = [
  {
    value: "11%",
    label: "Graduate Unemployment",
    description: "Educated youth unemployment rate - more than double the national average",
    icon: <GraduationCap className="w-6 h-6" />,
    color: "text-red-600",
    bgColor: "bg-red-100",
    source: "The Financial Express"
  },
  {
    value: "29%",
    label: "Long-term Unemployed",
    description: "Job seekers remain unemployed for over two years",
    icon: <AlertTriangle className="w-6 h-6" />,
    color: "text-orange-600",
    bgColor: "bg-orange-100",
    source: "The Financial Express"
  },
  {
    value: "2.6M",
    label: "Unemployed Youth",
    description: "Nearly 2.6 million unemployed, with 83% aged 15-29",
    icon: <Users className="w-6 h-6" />,
    color: "text-purple-600",
    bgColor: "bg-purple-100",
    source: "The Business Standard"
  },
  {
    value: "1.3M",
    label: "Underemployed Graduates",
    description: "Graduates working below their skill level in low-skilled jobs",
    icon: <Briefcase className="w-6 h-6" />,
    color: "text-indigo-600",
    bgColor: "bg-indigo-100",
    source: "The Business Standard"
  }
];

const opportunityStats: StatItem[] = [
  {
    value: "2M",
    label: "Tech Jobs by 2030",
    description: "IT sector could generate 1.5-2 million jobs in Bangladesh",
    icon: <TrendingUp className="w-6 h-6" />,
    color: "text-green-600",
    bgColor: "bg-green-100",
    source: "The Financial Express"
  },
  {
    value: "$850M",
    label: "World Bank Investment",
    description: "Government partnership for job creation and skills training",
    icon: <DollarSign className="w-6 h-6" />,
    color: "text-blue-600",
    bgColor: "bg-blue-100",
    source: "Reuters"
  },
  {
    value: "$26.9B",
    label: "Record Remittances",
    description: "Bangladeshis working abroad sent home a record $26.89 billion in 2024",
    icon: <DollarSign className="w-6 h-6" />,
    color: "text-emerald-600",
    bgColor: "bg-emerald-100",
    source: "The Business Standard"
  },
  {
    value: "1.01M",
    label: "Working Abroad",
    description: "Bangladeshis found work abroad in 2024 - third-highest in history",
    icon: <Users className="w-6 h-6" />,
    color: "text-cyan-600",
    bgColor: "bg-cyan-100",
    source: "The Business Standard"
  }
];

export function TheRealityCheck() {
  const [activeTab, setActiveTab] = useState<'crisis' | 'opportunity'>('crisis');
  const [animatedStats, setAnimatedStats] = useState<Set<string>>(new Set());

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedStats(new Set(['all']));
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const currentStats = activeTab === 'crisis' ? shockingStats : opportunityStats;

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(239,68,68,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.1),transparent_50%)]" />
      
      <div className="relative max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4 sm:mb-6">
            <AlertTriangle className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-red-500" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              The Reality Check
            </h2>
          </div>
          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto px-4">
            The hard truths about Bangladesh's job market and the opportunity that awaits those prepared
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex justify-center mb-8 sm:mb-12"
        >
          <div className="inline-flex p-1 bg-slate-800 rounded-xl sm:rounded-2xl border border-slate-700">
            <button
              onClick={() => setActiveTab('crisis')}
              className={`px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 text-sm sm:text-base ${
                activeTab === 'crisis'
                  ? 'bg-red-600 text-white shadow-lg'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">The Crisis</span>
              <span className="sm:hidden">Crisis</span>
            </button>
            <button
              onClick={() => setActiveTab('opportunity')}
              className={`px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 text-sm sm:text-base ${
                activeTab === 'opportunity'
                  ? 'bg-green-600 text-white shadow-lg'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">The Opportunity</span>
              <span className="sm:hidden">Opportunity</span>
            </button>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12 md:mb-16">
          {currentStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
            >
              <Card className={`h-full ${activeTab === 'crisis' ? 'bg-slate-800 border-slate-700' : 'bg-slate-800 border-slate-700'} hover:shadow-2xl transition-all duration-300 hover:scale-105`}>
                <CardContent className="p-4 sm:p-6">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl ${stat.bgColor} ${stat.color} flex items-center justify-center mb-3 sm:mb-4`}>
                    {stat.icon}
                  </div>
                  <motion.div 
                    className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2"
                    initial={{ scale: 0 }}
                    animate={{ scale: animatedStats.has('all') ? 1 : 0 }}
                    transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                  >
                    {stat.value}
                  </motion.div>
                  <h3 className="text-base sm:text-lg font-semibold text-white mb-2">{stat.label}</h3>
                  <p className="text-slate-400 text-xs sm:text-sm mb-3">{stat.description}</p>
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <span>Source:</span>
                    <span className="text-slate-400">{stat.source}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Message Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <div className={`p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border-2 ${
            activeTab === 'crisis' 
              ? 'bg-red-900/20 border-red-500/30' 
              : 'bg-green-900/20 border-green-500/30'
          }`}>
            <h3 className={`text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 ${
              activeTab === 'crisis' ? 'text-red-400' : 'text-green-400'
            }`}>
              {activeTab === 'crisis' ? 'The Hard Truth' : 'The Golden Opportunity'}
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-3xl mx-auto px-2">
              {activeTab === 'crisis' 
                ? 'The traditional education system is failing Bangladesh\'s youth. With millions of graduates unable to find jobs that match their skills, it\'s clear that theoretical knowledge alone isn\'t enough.'
                : 'Bangladesh\'s future is bright for those with the right skills. The IT sector boom, massive government investment, and global demand for skilled professionals create unprecedented opportunities.'
              }
            </p>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 p-6 sm:p-8 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl sm:rounded-3xl shadow-2xl">
            <div className="text-center sm:text-left">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                {activeTab === 'crisis' ? 'Don\'t Be Another Statistic' : 'Seize the Opportunity'}
              </h3>
              <p className="text-indigo-100 mb-4 text-sm sm:text-base">
                {activeTab === 'crisis' 
                  ? 'Build practical skills that employers actually value. Transform from graduate to professional.'
                  : 'Position yourself for the coming tech boom. Gain the skills that will be in high demand.'
                }
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
                <Link href="/signup">
                  <Button 
                    size="lg" 
                    className="bg-white text-indigo-600 hover:bg-slate-100 px-6 sm:px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                  >
                    Start Your Transformation
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                  </Button>
                </Link>
                <div className="flex items-center gap-2 text-white/80">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-xs sm:text-sm">6 months to job-ready</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Additional Context */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-8 sm:mt-12 md:mt-16 text-center"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 text-slate-400 text-xs sm:text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <span>4.63% national unemployment rate</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-slate-600"></div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
              <span>11% graduate unemployment rate</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-slate-600"></div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>2M tech jobs coming by 2030</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}