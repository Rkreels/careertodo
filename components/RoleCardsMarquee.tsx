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
} from "lucide-react";

const roles = [
  {
    title: "HR Manager",
    department: "Human Resources",
    icon: Users,
    color: "from-blue-500 to-cyan-500",
    tasks: ["Recruitment", "Performance Management", "Employee Relations"],
  },
  {
    title: "Financial Analyst",
    department: "Finance & Accounting",
    icon: Calculator,
    color: "from-green-500 to-emerald-500",
    tasks: ["Budget Planning", "Financial Analysis", "Risk Assessment"],
  },
  {
    title: "Sales Executive",
    department: "Sales & Marketing",
    icon: TrendingUp,
    color: "from-purple-500 to-pink-500",
    tasks: ["Lead Generation", "Client Meetings", "Sales Targets"],
  },
  {
    title: "Project Manager",
    department: "Operations",
    icon: Briefcase,
    color: "from-orange-500 to-red-500",
    tasks: ["Project Planning", "Team Coordination", "Deadline Management"],
  },
  {
    title: "Content Writer",
    department: "Marketing",
    icon: FileText,
    color: "from-indigo-500 to-purple-500",
    tasks: ["Content Creation", "SEO Optimization", "Brand Voice"],
  },
  {
    title: "Customer Support",
    department: "Customer Service",
    icon: HeadphonesIcon,
    color: "from-teal-500 to-cyan-500",
    tasks: ["Customer Queries", "Problem Solving", "Service Quality"],
  },
  {
    title: "Marketing Manager",
    department: "Marketing",
    icon: ShoppingCart,
    color: "from-pink-500 to-rose-500",
    tasks: ["Campaign Strategy", "Market Research", "Brand Management"],
  },
  {
    title: "Data Analyst",
    department: "Analytics",
    icon: BarChart3,
    color: "from-violet-500 to-purple-500",
    tasks: ["Data Visualization", "Statistical Analysis", "Reporting"],
  },
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
      className="flex flex-col items-start gap-2 bg-white rounded-2xl shadow-lg p-4 border border-slate-200 hover:shadow-xl hover:border-sky-300 transition-all duration-300 w-[260px] mx-auto"
      whileHover={{ scale: 1.03, y: -3 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex items-center gap-2 w-full">
        <div
          className={`w-8 h-8 rounded-xl bg-gradient-to-br ${role.color} flex items-center justify-center shadow-sm`}
        >
          <Icon className="w-4 h-4 text-white" />
        </div>
        <div>
          <h4 className="font-semibold text-slate-900 text-sm">
            {role.title}
          </h4>
          <p className="text-xs text-slate-600">{role.department}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-1 mt-1">
        {role.tasks.map((task, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-sky-50 text-xs text-sky-800 font-medium border border-sky-200"
          >
            <div className="w-1 h-1 rounded-full bg-sky-500" />
            {task}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export function RoleCardsMarquee() {
  const prefersReducedMotion = useReducedMotion();
  const infiniteRoles = createInfiniteRoles(4);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Two rolling columns - Desktop: side by side with gap, Mobile: single column */}
      <div className="relative w-full h-full max-w-4xl sm:max-w-none lg:max-w-screen-2xl mx-auto flex gap-5 sm:gap-5 lg:gap-6 justify-center">
        
        {/* First column - Bottom to Top */}
        <div className="relative w-80 h-[520px] sm:h-[520px] lg:w-[480px] lg:h-[550px] overflow-hidden">
          {/* Desktop: No shadows, Mobile: No shadows */}
          
          <motion.div
            animate={!prefersReducedMotion ? {
              y: [0, -roles.length * 189], // Reduced spacing by 30% (270 * 0.7 = 189)
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
                className="absolute px-2 py-2"
                style={{ 
                  top: `${(index % roles.length) * 189}px`, // Reduced spacing by 30%
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
        <div className="relative w-80 h-[520px] sm:h-[520px] lg:w-[480px] lg:h-[550px] overflow-hidden hidden lg:block">
          {/* Desktop: No shadows */}
          
          <motion.div
            animate={!prefersReducedMotion ? {
              y: [-roles.length * 189, 0], // Reduced spacing by 30%
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
                className="absolute px-2 py-2"
                style={{ 
                  top: `${(index % roles.length) * 189}px`, // Reduced spacing by 30%
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