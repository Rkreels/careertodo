import { motion } from "framer-motion";
import { useState } from "react";
import { Play, Eye, Hand, FileText, Monitor, Users, TrendingUp, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface TaskExample {
  icon: React.ReactNode;
  title: string;
  description: string;
  watching: string;
  doing: string;
}

const taskExamples: TaskExample[] = [
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Payroll Processing",
    description: "Handle monthly payroll like an HR manager",
    watching: "Watch 2-hour video about payroll theory",
    doing: "Process actual employee payroll with taxes and deductions"
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Financial Reporting",
    description: "Create quarterly financial reports",
    watching: "Read textbook chapters on accounting principles",
    doing: "Build real P&L statements using actual financial data"
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Sales Pipeline",
    description: "Manage customer relationships in CRM",
    watching: "Memorize sales techniques and frameworks",
    doing: "Track real leads, close deals, and manage customer data"
  },
  {
    icon: <Monitor className="w-6 h-6" />,
    title: "Project Management",
    description: "Lead projects from planning to completion",
    watching: "Study project management methodologies",
    doing: "Manage actual project timelines, resources, and deliverables"
  }
];

export function WatchingVsDoing() {
  const [activeMode, setActiveMode] = useState<'watching' | 'doing'>('watching');
  const [selectedTask, setSelectedTask] = useState(0);

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-orange-50 via-white to-red-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(251,146,60,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(239,68,68,0.08),transparent_50%)]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            Watching Passively vs Doing Actively
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Graduates stay stuck in entry-level roles because they only watch. With CareerToDo, you practice what your boss actually does.
          </p>
          
          {/* Mode Toggle */}
          <div className="inline-flex p-1 bg-white rounded-2xl shadow-lg border border-slate-200">
            <button
              onClick={() => setActiveMode('watching')}
              className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeMode === 'watching'
                  ? 'bg-orange-500 text-white shadow-lg'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Eye className="w-5 h-5" />
              Watching
            </button>
            <button
              onClick={() => setActiveMode('doing')}
              className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeMode === 'doing'
                  ? 'bg-green-500 text-white shadow-lg'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Hand className="w-5 h-5" />
              Doing
            </button>
          </div>
        </motion.div>

        {/* Main Comparison Area */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left Side - Traditional Learning */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`relative ${activeMode === 'watching' ? 'scale-105' : 'scale-95 opacity-60'} transition-all duration-500`}
          >
            <div className={`rounded-3xl p-8 h-full ${
              activeMode === 'watching' 
                ? 'bg-gradient-to-br from-orange-100 to-orange-50 border-2 border-orange-300 shadow-2xl' 
                : 'bg-slate-50 border-2 border-slate-200'
            }`}>
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  activeMode === 'watching' ? 'bg-orange-500 text-white' : 'bg-slate-300 text-slate-600'
                }`}>
                  <Eye className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">Traditional Learning</h3>
                  <p className="text-slate-600">Passive consumption of information</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Play className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-800">Watch 2-hour video lectures</p>
                    <p className="text-slate-600 text-sm">Sit through long, boring presentations</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FileText className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-800">Read textbooks & manuals</p>
                    <p className="text-slate-600 text-sm">Memorize theories and frameworks</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Monitor className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-800">Take multiple-choice tests</p>
                    <p className="text-slate-600 text-sm">Prove you can recall information</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-orange-100 rounded-xl">
                <p className="text-orange-800 font-semibold text-center">
                  🎓 Result: "I know about the work"
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Side - CareerToDo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`relative ${activeMode === 'doing' ? 'scale-105' : 'scale-95 opacity-60'} transition-all duration-500`}
          >
            <div className={`rounded-3xl p-8 h-full ${
              activeMode === 'doing' 
                ? 'bg-gradient-to-br from-green-100 to-emerald-50 border-2 border-green-300 shadow-2xl' 
                : 'bg-slate-50 border-2 border-slate-200'
            }`}>
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  activeMode === 'doing' ? 'bg-green-500 text-white' : 'bg-slate-300 text-slate-600'
                }`}>
                  <Hand className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">CareerToDo</h3>
                  <p className="text-slate-600">Active practice of real tasks</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Hand className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-800">Execute real business workflows</p>
                    <p className="text-slate-600 text-sm">Practice actual tasks your boss does daily</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-800">Use professional software tools</p>
                    <p className="text-slate-600 text-sm">Work with HRMS, ERP, CRM systems</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-800">Get instant feedback</p>
                    <p className="text-slate-600 text-sm">Learn from mistakes in a safe environment</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-green-100 rounded-xl">
                <p className="text-green-800 font-semibold text-center">
                  💼 Result: "I can actually do the work"
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Task Examples */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-slate-800">
            Real Tasks You'll Master
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {taskExamples.map((task, index) => (
              <Card 
                key={index}
                className={`cursor-pointer transition-all duration-300 hover:shadow-xl ${
                  selectedTask === index ? 'ring-2 ring-orange-500 shadow-lg' : 'hover:scale-105'
                }`}
                onClick={() => setSelectedTask(index)}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center">
                      {task.icon}
                    </div>
                    <h4 className="font-bold text-slate-800">{task.title}</h4>
                  </div>
                  <p className="text-sm text-slate-600 mb-4">{task.description}</p>
                  <div className="text-xs">
                    <div className="flex items-center gap-2 mb-2">
                      <Eye className="w-3 h-3 text-orange-500" />
                      <span className="text-slate-600">
                        {activeMode === 'watching' ? task.watching : task.doing}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-4 p-6 bg-gradient-to-r from-orange-100 to-red-100 rounded-2xl border border-orange-200">
            <div className="text-left">
              <p className="text-lg font-bold text-slate-900 mb-1">
                Ready to stop watching and start doing?
              </p>
              <p className="text-slate-600">
                Join thousands who've made the leap to practical learning
              </p>
            </div>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Try a Free Simulation
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}