import { motion } from "framer-motion";
import { 
  BarChart3, Calculator, FileText, Users, 
  TrendingUp, DollarSign, Package, Mail,
  Calendar, MessageSquare, Target, Briefcase,
  ShoppingCart, Share2, PieChart, Database,
  CreditCard, Globe, Smartphone, Laptop
} from "lucide-react";

const tools = [
  { icon: Calculator, name: "Accounting Software", category: "Finance", color: "from-blue-500 to-cyan-500" },
  { icon: BarChart3, name: "Financial Analysis", category: "Finance", color: "from-cyan-500 to-teal-500" },
  { icon: DollarSign, name: "Treasury Management", category: "Finance", color: "from-teal-500 to-green-500" },
  { icon: FileText, name: "Tax Filing System", category: "Finance", color: "from-green-500 to-lime-500" },
  { icon: Users, name: "HRMS Platform", category: "HR", color: "from-orange-500 to-red-500" },
  { icon: Calendar, name: "Recruitment Tool", category: "HR", color: "from-red-500 to-pink-500" },
  { icon: TrendingUp, name: "Payroll System", category: "HR", color: "from-pink-500 to-purple-500" },
  { icon: Target, name: "Performance Mgmt", category: "HR", color: "from-purple-500 to-indigo-500" },
  { icon: ShoppingCart, name: "CRM Software", category: "Sales", color: "from-indigo-500 to-blue-500" },
  { icon: Briefcase, name: "Sales Pipeline", category: "Sales", color: "from-blue-500 to-cyan-500" },
  { icon: Package, name: "Inventory System", category: "Sales", color: "from-cyan-500 to-teal-500" },
  { icon: CreditCard, name: "POS Terminal", category: "Sales", color: "from-teal-500 to-green-500" },
  { icon: Mail, name: "Email Marketing", category: "Marketing", color: "from-green-500 to-lime-500" },
  { icon: Share2, name: "Social Media Tool", category: "Marketing", color: "from-lime-500 to-yellow-500" },
  { icon: PieChart, name: "Analytics Dashboard", category: "Marketing", color: "from-yellow-500 to-orange-500" },
  { icon: Globe, name: "SEO Platform", category: "Marketing", color: "from-orange-500 to-red-500" },
  { icon: MessageSquare, name: "Content CMS", category: "Marketing", color: "from-red-500 to-pink-500" },
  { icon: Database, name: "Data Warehouse", category: "Analytics", color: "from-pink-500 to-purple-500" },
  { icon: Smartphone, name: "Mobile App Dev", category: "Tech", color: "from-purple-500 to-indigo-500" },
  { icon: Laptop, name: "Web Platform", category: "Tech", color: "from-indigo-500 to-blue-500" },
];

export function EnhancedToolGrid() {
  return (
    <section className="py-20 md:py-32 bg-card relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.05),transparent_70%)]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            Master <span className="bg-gradient-to-r from-chart-3 to-chart-4 bg-clip-text text-transparent">20+ Professional Tools</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Practice with real software used by industry professionals
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.03 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative"
              data-testid={`tool-${tool.name.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${tool.color} rounded-xl sm:rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
              
              <div className="relative bg-background/60 backdrop-blur-xl border border-card-border rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 hover-elevate active-elevate-2 transition-all">
                <div className={`w-8 h-8 sm:w-10 sm:h-12 md:w-12 md:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br ${tool.color} flex items-center justify-center mb-2 sm:mb-4 group-hover:rotate-6 transition-transform`}>
                  <tool.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                </div>
                
                <h3 className="font-bold text-xs sm:text-sm mb-1 line-clamp-2">{tool.name}</h3>
                <p className="text-xs text-muted-foreground">{tool.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
