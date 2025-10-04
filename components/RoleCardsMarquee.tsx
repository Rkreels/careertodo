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
  BarChart3
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
    title: "Marketing Manager",
    department: "Marketing",
    icon: ShoppingCart,
    color: "from-pink-500 to-rose-500",
    tasks: ["Campaign Strategy", "Market Research", "Brand Management"]
  },
  {
    title: "Data Analyst",
    department: "Analytics",
    icon: BarChart3,
    color: "from-violet-500 to-purple-500",
    tasks: ["Data Visualization", "Statistical Analysis", "Reporting"]
  }
];

// Create multiple copies for seamless infinite loop
const createInfiniteRoles = (count = 4) => {
  const result = [];
  for (let i = 0; i < count; i++) {
    result.push(...roles);
  }
  return result;
};

interface RoleCardProps {
  role: typeof roles[0];
  index: number;
  total: number;
}

function RoleCard({ role }: RoleCardProps) {
  const Icon = role.icon;
  
  return (
    <motion.div
      className="flex items-center gap-2 sm:gap-3 bg-white/80 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 border border-sky-100 hover:bg-white/90 transition-all duration-300 w-full max-w-none"
      whileHover={{ scale: 1.02, y: -2 }}
    >
      <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br ${role.color} flex items-center justify-center flex-shrink-0`}>
        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
      </div>
      <div className="min-w-0 flex-1">
        <h4 className="font-bold text-slate-800 text-sm sm:text-sm mb-1">{role.title}</h4>
        <p className="text-sm text-slate-600 mb-1 sm:mb-2">{role.department}</p>
        <div className="flex flex-wrap gap-1">
          {role.tasks.slice(0, 2).map((task, taskIndex) => (
            <span key={taskIndex} className="inline-flex items-center gap-1 px-1.5 sm:px-2 py-0.5 rounded-full bg-sky-50 text-sm text-slate-600">
              <div className="w-1 h-1 rounded-full bg-sky-400" />
              {task}
            </span>
          ))}
          {role.tasks.length > 2 && (
            <span className="text-sm text-slate-400 italic">
              +{role.tasks.length - 2}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export function RoleCardsMarquee() {
  const prefersReducedMotion = useReducedMotion();
  const infiniteRoles = createInfiniteRoles(4); // Create 4 copies for seamless loop

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Two rolling columns - Desktop: side by side with gap, Mobile: single column */}
      <div className="relative w-full h-full max-w-4xl sm:max-w-6xl mx-auto flex gap-4 sm:gap-8 justify-center">
        
        {/* First column - Bottom to Top */}
        <div className="relative w-64 h-80 sm:h-96 lg:w-[490px] lg:h-[140px] overflow-hidden">
          {/* Desktop: No shadows, Mobile: No shadows */}
          
          <motion.div
            animate={!prefersReducedMotion ? {
              y: [0, -roles.length * 180], // Adjusted spacing for shorter cards
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
            {infiniteRoles.map((role, index) => (
              <div
                key={`col1-${role.title}-${index}`}
                className="absolute px-2"
                style={{ 
                  top: `${(index % roles.length) * 180}px`, // 40px gap between shorter cards
                  left: '0',
                  right: '0'
                }}
              >
                <RoleCard role={role} index={index} total={infiniteRoles.length} />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Second column - Top to Bottom */}
        <div className="relative w-64 h-80 sm:h-96 lg:w-[490px] lg:h-[140px] overflow-hidden hidden lg:block">
          {/* Desktop: No shadows */}
          
          <motion.div
            animate={!prefersReducedMotion ? {
              y: [-roles.length * 180, 0], // Adjusted spacing for shorter cards
            } : {}}
            transition={!prefersReducedMotion ? {
              y: {
                duration: 25, // Slightly different speed for visual interest
                repeat: Infinity,
                ease: "linear",
              },
            } : {}}
            className="absolute inset-x-0"
          >
            {infiniteRoles.map((role, index) => (
              <div
                key={`col2-${role.title}-${index}`}
                className="absolute px-2"
                style={{ 
                  top: `${(index % roles.length) * 180}px`, // 40px gap between shorter cards
                  left: '0',
                  right: '0'
                }}
              >
                <RoleCard role={role} index={index} total={infiniteRoles.length} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}