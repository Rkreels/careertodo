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
      className="flex items-center gap-2 bg-white/95 backdrop-blur-sm rounded-lg p-3 border border-sky-200 hover:border-sky-300 hover:bg-white hover:shadow-lg transition-all duration-300 w-full max-w-none mx-7"
      whileHover={{ scale: 1.02, y: -1 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${role.color} flex items-center justify-center flex-shrink-0 shadow-sm`}>
        <Icon className="w-4 h-4 text-white" />
      </div>
      <div className="min-w-0 flex-1">
        <h4 className="font-bold text-slate-900 text-xs mb-1 truncate">{role.title}</h4>
        <p className="text-xs text-slate-600 mb-1 font-medium truncate">{role.department}</p>
        <div className="flex flex-wrap gap-1">
          {role.tasks.slice(0, 1).map((task, taskIndex) => (
            <span key={taskIndex} className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-sky-100 text-xs text-slate-700 font-medium border border-sky-200">
              <div className="w-1 h-1 rounded-full bg-sky-500" />
              {task}
            </span>
          ))}
          {role.tasks.length > 1 && (
            <span className="text-xs text-slate-500 italic font-medium">
              +{role.tasks.length - 1}
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
      <div className="relative w-full h-full max-w-4xl sm:max-w-7xl mx-auto flex gap-5 sm:gap-5 lg:gap-4 justify-center">
        
        {/* First column - Bottom to Top */}
        <div className="relative w-64 h-[420px] sm:h-[420px] lg:w-[550px] lg:h-[450px] overflow-hidden">
          {/* Desktop: No shadows, Mobile: No shadows */}
          
          <motion.div
            animate={!prefersReducedMotion ? {
              y: [0, -roles.length * 175], // 160px card + 15px gap
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
                className="absolute px-1 py-1"
                style={{ 
                  top: `${(index % roles.length) * 175}px`, // 160px card + 15px gap
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
        <div className="relative w-64 h-[420px] sm:h-[420px] lg:w-[550px] lg:h-[450px] overflow-hidden hidden lg:block">
          {/* Desktop: No shadows */}
          
          <motion.div
            animate={!prefersReducedMotion ? {
              y: [-roles.length * 175, 0], // 160px card + 15px gap
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
                className="absolute px-1 py-1"
                style={{ 
                  top: `${(index % roles.length) * 175}px`, // 160px card + 15px gap
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