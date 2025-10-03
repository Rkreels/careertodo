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
    <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px] overflow-hidden bg-gradient-to-br from-sky-50 via-white to-blue-50 rounded-2xl sm:rounded-3xl border border-sky-200 shadow-xl">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(14,165,233,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(59,130,246,0.1),transparent_50%)]" />
      
      {/* Title overlay - responsive sizing */}
      <div className="absolute top-2 sm:top-4 left-0 right-0 z-20 text-center px-4">
        <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-slate-800 mb-1">
          Explore Real Career Roles
        </h3>
        <p className="text-xs sm:text-sm md:text-base text-slate-600">
          Practice actual tasks from different industries
        </p>
      </div>

      {/* Rolling cards container - constrained to available space */}
      <div className="absolute inset-0 flex items-center justify-center pt-16 sm:pt-20">
        <div className="relative w-full h-full max-w-6xl mx-auto">
          {/* Single column of cards rolling from bottom to top */}
          <motion.div
            animate={!prefersReducedMotion ? {
              y: [0, -40 * duplicatedRoles.length],
            } : {}}
            transition={!prefersReducedMotion ? {
              y: {
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              },
            } : {}}
            className="absolute inset-x-0"
          >
            {duplicatedRoles.map((role, index) => {
              const Icon = role.icon;
              const position = index * 40 - 80; // Adjusted spacing for better fit
              
              return (
                <motion.div
                  key={`${role.title}-${index}`}
                  className="absolute left-1/2 transform -translate-x-1/2"
                  style={{ 
                    top: `${position}px`,
                    width: '200px xs:240px sm:280px md:320px',
                    maxWidth: 'calc(90vw - 2rem)'
                  }}
                  whileHover={{ scale: 1.02 }}
                  animate={{
                    opacity: [0, 1, 1, 0],
                    scale: [0.8, 1, 1, 0.8],
                  }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    delay: index * 0.4,
                    ease: "easeInOut"
                  }}
                >
                  <div className="bg-white/90 backdrop-blur-xl rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 shadow-lg border border-sky-100 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                      <div className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br ${role.color} flex items-center justify-center flex-shrink-0`}>
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="font-bold text-slate-800 text-xs sm:text-sm md:text-base truncate">{role.title}</h4>
                        <p className="text-xs sm:text-sm text-slate-600 truncate">{role.department}</p>
                      </div>
                    </div>
                    <div className="space-y-1">
                      {role.tasks.slice(0, 2).map((task, taskIndex) => (
                        <div key={taskIndex} className="flex items-center gap-1.5 sm:gap-2">
                          <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-sky-400 flex-shrink-0" />
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
      </div>

      {/* Fade overlays for smooth entrance/exit - adjusted height */}
      <div className="absolute top-0 left-0 right-0 h-12 sm:h-16 bg-gradient-to-b from-sky-50 via-white/70 to-transparent z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-12 sm:h-16 bg-gradient-to-t from-sky-50 via-white/70 to-transparent z-10" />
    </div>
  );
}