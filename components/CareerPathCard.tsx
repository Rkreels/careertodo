import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";

interface CareerPathCardProps {
  title: string;
  description: string;
  image: string;
  delay?: number;
}

export function CareerPathCard({ title, description, image, delay = 0 }: CareerPathCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-card border border-card-border rounded-2xl overflow-hidden hover-elevate active-elevate-2 transition-all group"
      data-testid={`career-card-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6 space-y-4">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
        <Link href="/signup">
          <Button 
            className="w-full justify-between bg-ring hover:bg-ring/90 text-white"
            data-testid={`button-explore-${title.toLowerCase().replace(/\s+/g, '-')}`}
          >
            Explore Path
            <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
      </div>
    </motion.div>
  );
}
