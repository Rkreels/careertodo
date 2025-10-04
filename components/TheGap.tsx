import { motion } from "framer-motion";
import { useState } from "react";
import { GraduationCap, Briefcase, TrendingUp, Users, CheckCircle, XCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";

interface SkillLevel {
  title: string;
  description: string;
  icon: React.ReactNode;
  traditional: {
    text: string;
    color: string;
    bgColor: string;
    status: 'poor' | 'average' | 'good';
  };
  careertodo: {
    text: string;
    color: string;
    bgColor: string;
    status: 'good' | 'excellent' | 'expert';
  };
}

const skillLevels: SkillLevel[] = [
  {
    title: "Theoretical Knowledge",
    description: "Understanding concepts and principles",
    icon: <GraduationCap className="w-6 h-6" />,
    traditional: {
      text: "High - Can explain theories",
      color: "text-green-600",
      bgColor: "bg-green-100",
      status: 'good'
    },
    careertodo: {
      text: "High - Can explain theories",
      color: "text-green-600",
      bgColor: "bg-green-100",
      status: 'good'
    }
  },
  {
    title: "Practical Application",
    description: "Applying knowledge to real tasks",
    icon: <Briefcase className="w-6 h-6" />,
    traditional: {
      text: "Low - Never practiced",
      color: "text-red-600",
      bgColor: "bg-red-100",
      status: 'poor'
    },
    careertodo: {
      text: "High - Real-world practice",
      color: "text-green-600",
      bgColor: "bg-green-100",
      status: 'excellent'
    }
  },
  {
    title: "Tool Proficiency",
    description: "Using professional software/tools",
    icon: <TrendingUp className="w-6 h-6" />,
    traditional: {
      text: "None - Only theoretical knowledge",
      color: "text-red-600",
      bgColor: "bg-red-100",
      status: 'poor'
    },
    careertodo: {
      text: "Expert - Hands-on experience",
      color: "text-purple-600",
      bgColor: "bg-purple-100",
      status: 'expert'
    }
  },
  {
    title: "Problem Solving",
    description: "Handling real workplace challenges",
    icon: <Users className="w-6 h-6" />,
    traditional: {
      text: "Average - Textbook scenarios only",
      color: "text-yellow-600",
      bgColor: "bg-yellow-100",
      status: 'average'
    },
    careertodo: {
      text: "Excellent - Real scenarios practiced",
      color: "text-green-600",
      bgColor: "bg-green-100",
      status: 'excellent'
    }
  },
  {
    title: "Job Readiness",
    description: "Ready for workplace from day one",
    icon: <CheckCircle className="w-6 h-6" />,
    traditional: {
      text: "Low - Needs on-the-job training",
      color: "text-red-600",
      bgColor: "bg-red-100",
      status: 'poor'
    },
    careertodo: {
      text: "High - Ready from day one",
      color: "text-green-600",
      bgColor: "bg-green-100",
      status: 'excellent'
    }
  }
];

export function TheGap() {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderChange = (value: number) => {
    setSliderPosition(value);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'expert':
        return <CheckCircle className="w-5 h-5 text-purple-600" />;
      case 'excellent':
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'good':
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'average':
        return <AlertCircle className="w-5 h-5 text-yellow-600" />;
      case 'poor':
        return <XCircle className="w-5 h-5 text-red-600" />;
      default:
        return null;
    }
  };

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-purple-50 via-white to-indigo-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(99,102,241,0.08),transparent_50%)]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            The Gap Between Theory and Reality
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            See the dramatic difference between traditional learning and CareerToDo's practical approach
          </p>
        </motion.div>

        {/* Interactive Slider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative mb-16"
        >
          <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
            {/* Background layers */}
            <div className="absolute inset-0">
              {/* Traditional Learning Side */}
              <div 
                className="absolute inset-0 bg-gradient-to-br from-red-50 to-orange-50"
                style={{
                  clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`
                }}
              >
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-red-500 text-white flex items-center justify-center">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900">Traditional Learning</h3>
                      <p className="text-slate-600">Theory-focused education</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <XCircle className="w-5 h-5 text-red-600" />
                      <span className="text-slate-700">No practical experience</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <XCircle className="w-5 h-5 text-red-600" />
                      <span className="text-slate-700">No tool proficiency</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <AlertCircle className="w-5 h-5 text-yellow-600" />
                      <span className="text-slate-700">Limited problem-solving</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* CareerToDo Side */}
              <div 
                className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50"
                style={{
                  clipPath: `polygon(${sliderPosition}% 0, 100% 0, 100% 100%, ${sliderPosition}% 100%)`
                }}
              >
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-green-500 text-white flex items-center justify-center">
                      <Briefcase className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900">CareerToDo</h3>
                      <p className="text-slate-600">Practice-based learning</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-slate-700">Real-world experience</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-slate-700">Professional tools mastery</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-slate-700">Advanced problem-solving</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Slider Handle */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl"
              style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
            >
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-12 h-12 bg-white rounded-full shadow-lg border-4 border-indigo-500 flex items-center justify-center cursor-grab active:cursor-grabbing">
                  <div className="w-2 h-8 bg-indigo-500 rounded-full" />
                </div>
              </div>
            </div>

            {/* Slider Input */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPosition}
              onChange={(e) => handleSliderChange(Number(e.target.value))}
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
              style={{ zIndex: 10 }}
            />
          </div>

  
        </motion.div>

        {/* Skill Comparison Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-slate-800">
            Skill Level Comparison
          </h3>
          <div className="space-y-4">
            {skillLevels.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
              >
                <Card className="overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center">
                        {skill.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-slate-900">{skill.title}</h4>
                        <p className="text-sm text-slate-600">{skill.description}</p>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className={`p-4 rounded-xl ${skill.traditional.bgColor} ${sliderPosition < 50 ? 'ring-2 ring-red-400' : ''} transition-all duration-300`}>
                        <div className="flex items-center gap-2 mb-2">
                          {getStatusIcon(skill.traditional.status)}
                          <span className="font-semibold text-slate-800">Traditional Learning</span>
                        </div>
                        <p className={`text-sm ${skill.traditional.color}`}>{skill.traditional.text}</p>
                      </div>
                      
                      <div className={`p-4 rounded-xl ${skill.careertodo.bgColor} ${sliderPosition > 50 ? 'ring-2 ring-green-400' : ''} transition-all duration-300`}>
                        <div className="flex items-center gap-2 mb-2">
                          {getStatusIcon(skill.careertodo.status)}
                          <span className="font-semibold text-slate-800">CareerToDo</span>
                        </div>
                        <p className={`text-sm ${skill.careertodo.color}`}>{skill.careertodo.text}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-100 to-indigo-100 rounded-2xl border border-purple-200 p-6 lg:p-8">
            <div className="text-left lg:text-center mb-6 lg:mb-0">
              <p className="text-lg font-bold text-slate-900 mb-1">
                Close the gap between theory and practice
              </p>
              <p className="text-slate-600">
                Start building skills that employers actually value
              </p>
            </div>
            <div className="lg:text-center">
              <Link href="/signup">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full lg:w-auto"
                >
                  Bridge the Gap Now
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}