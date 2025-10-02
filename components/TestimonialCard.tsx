import { Star } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface TestimonialCardProps {
  name: string;
  role: string;
  rating: number;
  quote: string;
  image: string;
}

export function TestimonialCard({ name, role, rating, quote, image }: TestimonialCardProps) {
  return (
    <div className="bg-card border border-card-border rounded-2xl p-6 space-y-4">
      <div className="flex items-center gap-4">
        <Avatar className="w-12 h-12">
          <AvatarImage src={image} alt={name} />
          <AvatarFallback>{name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
        </Avatar>
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </div>
      <div className="flex gap-1">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-chart-3 text-chart-3" />
        ))}
      </div>
      <p className="text-muted-foreground leading-relaxed">{quote}</p>
    </div>
  );
}
