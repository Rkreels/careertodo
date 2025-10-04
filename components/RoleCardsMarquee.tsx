import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { 
  Briefcase, 
  Users, 
  Calculator, 
  TrendingUp, 
  FileText, 
  HeadphonesIcon,
  ShoppingCart,
  BarChart3,
  Settings,
  MessageSquare,
  Palette,
  Camera
} from "lucide-react";

const roles = [
  {
    title: "HR Manager",
    department: "Human Resources",
    icon: Users,
    color: "from-blue-500 to-cyan-500",
    tasks: ["Recruitment", "Performance Management", "Employee Relations"]
  },
  {
    title: "Financial Analyst",
    department: "Finance & Accounting",
    icon: Calculator,
    color: "from-green-500 to-emerald-500",
    tasks: ["Budget Planning", "Financial Analysis", "Risk Assessment"]
  },
  {
    title: "Sales Executive",
    department: "Sales & Marketing",
    icon: TrendingUp,
    color: "from-purple-500 to-pink-500",
    tasks: ["Lead Generation", "Client Meetings", "Sales Targets"]
  },
  {
    title: "Project Manager",
    department: "Operations",
    icon: Briefcase,
    color: "from-orange-500 to-red-500",
    tasks: ["Project Planning", "Team Coordination", "Deadline Management"]
  },
  {
    title: "Content Writer",
    department: "Marketing",
    icon: FileText,
    color: "from-indigo-500 to-purple-500",
    tasks: ["Content Creation", "SEO Optimization", "Brand Voice"]
  },
  {
    title: "Customer Support",
    department: "Customer Service",
    icon: HeadphonesIcon,
    color: "from-teal-500 to-cyan-500",
    tasks: ["Customer Queries", "Problem Solving", "Service Quality"]
  }
];

// Duplicate roles for continuous scrolling
const duplicatedRoles = [...roles, ...roles];

export function RoleCardsMarquee() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Title overlay */}
      <div className="absolute top-2 left-0 right-0 z-20 text-center px-2">
        <h3 className="text-sm sm:text-base font-bold text-slate-800 mb-1">
          Explore Real Career Roles
        </h3>
        <p className="text-xs text-slate-600">
          Practice actual tasks from different industries
        </p>
      </div>

      {/* Rolling cards container */}
      <div className="relative w-full h-full max-w-4xl mx-auto pt-12">
        {/* Single column of cards rolling from bottom to top */}
        <motion.div
          animate={!prefersReducedMotion ? {
            y: [0, -50 * duplicatedRoles.length],
          } : {}}
          transition={!prefersReducedMotion ? {
            y: {
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            },
          } : {}}
          className="absolute inset-x-0"
        >
          {duplicatedRoles.map((role, index) => {
            const Icon = role.icon;
            const position = index * 50 - 100; // Adjusted spacing
            
            return (
              <motion.div
                key={`${role.title}-${index}`}
                className="absolute left-1/2 transform -translate-x-1/2"
                style={{ 
                  top: `${position}px`,
                  width: '180px',
                  maxWidth: 'calc(90vw - 2rem)'
                }}
                whileHover={{ scale: 1.02 }}
                animate={{
                  opacity: [0, 1, 1, 0],
                  scale: [0.8, 1, 1, 0.8],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  delay: index * 0.3,
                  ease: "easeInOut"
                }}
              >
                <div className="bg-white/90 backdrop-blur-xl rounded-lg p-3 shadow-lg border border-sky-100 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-2 mb-2">
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${role.color} flex items-center justify-center flex-shrink-0`}>
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-bold text-slate-800 text-xs truncate">{role.title}</h4>
                      <p className="text-xs text-slate-600 truncate">{role.department}</p>
                    </div>
                  </div>
                  <div className="space-y-1">
                    {role.tasks.slice(0, 2).map((task, taskIndex) => (
                      <div key={taskIndex} className="flex items-center gap-1.5">
                        <div className="w-1 h-1 rounded-full bg-sky-400 flex-shrink-0" />
                        <span className="text-xs text-slate-600 truncate">{task}</span>
                      </div>
                    ))}
                    {role.tasks.length > 2 && (
                      <div className="text-xs text-slate-400 italic">
                        +{role.tasks.length - 2} more
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Fade overlays for smooth entrance/exit */}
      <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-sky-50 via-white/70 to-transparent z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-sky-50 via-white/70 to-transparent z-10" />
    </div>
  );
}