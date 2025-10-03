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
  },
  {
    title: "Sales Representative",
    department: "Sales",
    icon: ShoppingCart,
    color: "from-rose-500 to-pink-500",
    tasks: ["Product Sales", "Customer Relations", "Revenue Targets"]
  },
  {
    title: "Business Analyst",
    department: "Analytics",
    icon: BarChart3,
    color: "from-amber-500 to-orange-500",
    tasks: ["Data Analysis", "Business Insights", "Reporting"]
  },
  {
    title: "Operations Manager",
    department: "Operations",
    icon: Settings,
    color: "from-slate-500 to-gray-500",
    tasks: ["Process Optimization", "Quality Control", "Efficiency"]
  },
  {
    title: "Social Media Manager",
    department: "Marketing",
    icon: MessageSquare,
    color: "from-blue-500 to-indigo-500",
    tasks: ["Social Strategy", "Content Planning", "Community Management"]
  },
  {
    title: "UX Designer",
    department: "Design",
    icon: Palette,
    color: "from-pink-500 to-rose-500",
    tasks: ["User Research", "Interface Design", "Prototyping"]
  },
  {
    title: "Brand Manager",
    department: "Marketing",
    icon: Camera,
    color: "from-violet-500 to-purple-500",
    tasks: ["Brand Strategy", "Campaign Management", "Market Positioning"]
  }
];

// Duplicate roles for continuous scrolling
const duplicatedRoles = [...roles, ...roles];

export function RoleCardsMarquee() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden bg-gradient-to-br from-sky-50 via-white to-blue-50 rounded-2xl sm:rounded-3xl border border-sky-200">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(14,165,233,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(59,130,246,0.1),transparent_50%)]" />
      
      {/* Title overlay */}
      <div className="absolute top-4 sm:top-6 left-0 right-0 z-20 text-center">
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-800 mb-2">
          Explore Real Career Roles
        </h3>
        <p className="text-sm sm:text-base text-slate-600">
          Practice actual tasks from different industries
        </p>
      </div>

      {/* Rolling cards container */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full h-full">
          {/* Single column of cards rolling from bottom to top */}
          <motion.div
            animate={!prefersReducedMotion ? {
              y: [0, -50 * duplicatedRoles.length],
            } : {}}
            transition={!prefersReducedMotion ? {
              y: {
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              },
            } : {}}
            className="absolute inset-x-0"
          >
            {duplicatedRoles.map((role, index) => {
              const Icon = role.icon;
              const position = index * 50 - 100; // Start from bottom
              
              return (
                <motion.div
                  key={`${role.title}-${index}`}
                  className="absolute left-1/2 transform -translate-x-1/2"
                  style={{ 
                    top: `${position}px`,
                    width: '280px',
                    maxWidth: 'calc(100vw - 2rem)'
                  }}
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  animate={{
                    opacity: [0, 1, 1, 0],
                    scale: [0.8, 1, 1, 0.8],
                  }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    delay: index * 0.5,
                    ease: "easeInOut"
                  }}
                >
                  <div className="bg-white/90 backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-sky-100 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${role.color} flex items-center justify-center`}>
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800 text-sm sm:text-base">{role.title}</h4>
                        <p className="text-xs sm:text-sm text-slate-600">{role.department}</p>
                      </div>
                    </div>
                    <div className="space-y-1">
                      {role.tasks.map((task, taskIndex) => (
                        <div key={taskIndex} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                          <span className="text-xs text-slate-600">{task}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Fade overlays for smooth entrance/exit */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-sky-50 via-white/50 to-transparent z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-sky-50 via-white/50 to-transparent z-10" />
    </div>
  );
}