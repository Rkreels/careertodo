import { motion } from "framer-motion";
import { 
  Building2, Users, TrendingUp, Package, DollarSign, 
  FileText, ShoppingCart, Mail, BarChart3, Calendar,
  FolderOpen, Truck, GraduationCap, LineChart, Megaphone,
  Share2, Sheet, Keyboard, Zap, Briefcase, CreditCard
} from "lucide-react";

const tools = [
  { icon: Building2, name: "ERP" },
  { icon: Users, name: "HRMS" },
  { icon: TrendingUp, name: "ATS" },
  { icon: DollarSign, name: "Accounting" },
  { icon: FileText, name: "Payroll" },
  { icon: Package, name: "Tax Filing" },
  { icon: ShoppingCart, name: "POS" },
  { icon: Mail, name: "E-commerce" },
  { icon: BarChart3, name: "CRM" },
  { icon: Calendar, name: "Project Mgmt" },
  { icon: FolderOpen, name: "Documents" },
  { icon: Truck, name: "Inventory" },
  { icon: GraduationCap, name: "Student CRM" },
  { icon: LineChart, name: "Analytics" },
  { icon: Megaphone, name: "Marketing" },
  { icon: Share2, name: "Social Media" },
  { icon: Sheet, name: "Excel" },
  { icon: Keyboard, name: "Typing" },
  { icon: Zap, name: "Automation" },
  { icon: Briefcase, name: "Treasury" },
  { icon: CreditCard, name: "Payment" },
];

export function ToolGrid() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">20+ Professional Tools</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Practice with industry-standard software and build real-world expertise
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="bg-card border border-card-border rounded-xl p-6 flex flex-col items-center justify-center gap-3 hover-elevate active-elevate-2 transition-all"
              data-testid={`tool-${tool.name.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <tool.icon className="w-8 h-8 text-ring" />
              <span className="text-sm font-medium text-center">{tool.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
