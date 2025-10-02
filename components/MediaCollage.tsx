import { motion } from "framer-motion";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

interface MediaItem {
  id: string;
  logo: string;
  name: string;
  article: string;
  rotation: number;
  scale: number;
  zIndex: number;
}

const mediaItems: MediaItem[] = [
  { id: "1", logo: "https://placehold.co/200x80/f3f4f6/6b7280?text=📰+Paper+Cut+1", name: "TechCrunch", article: "CareerToDo revolutionizes skill-based learning in Bangladesh", rotation: -8, scale: 1, zIndex: 5 },
  { id: "2", logo: "https://placehold.co/200x80/e5e7eb/374151?text=📰+Paper+Cut+2", name: "Forbes", article: "The future of career education is here", rotation: 5, scale: 0.9, zIndex: 4 },
  { id: "3", logo: "https://placehold.co/200x80/d1d5db/1f2937?text=📰+Paper+Cut+3", name: "EdTech News", article: "How simulations are changing the job market", rotation: -12, scale: 0.95, zIndex: 3 },
  { id: "4", logo: "https://placehold.co/200x80/9ca3af/111827?text=📰+Paper+Cut+4", name: "Business Today", article: "Startup spotlight: CareerToDo", rotation: 10, scale: 1.05, zIndex: 6 },
  { id: "5", logo: "https://placehold.co/200x80/6b7280/030712?text=📰+Paper+Cut+5", name: "The Daily Star", article: "Bridging the skills gap with technology", rotation: -15, scale: 0.85, zIndex: 2 },
  { id: "6", logo: "https://placehold.co/200x80/4b5563/ffffff?text=📰+Paper+Cut+6", name: "Tech Review", article: "Best EdTech platforms of 2024", rotation: 8, scale: 0.92, zIndex: 1 },
];

export function MediaCollage() {
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured In</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Recognized by leading media outlets worldwide
          </p>
        </motion.div>

        <div className="relative h-48 sm:h-64 md:h-80 lg:h-96 flex items-center justify-center overflow-hidden">
          {mediaItems.map((item, index) => (
            <motion.button
              key={item.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: item.scale }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => {
                setSelectedMedia(item);
                console.log('Media clicked:', item.name);
              }}
              className="absolute hover-elevate active-elevate-2 transition-all cursor-pointer"
              style={{
                transform: `rotate(${item.rotation}deg) scale(${item.scale})`,
                zIndex: item.zIndex,
                left: index < 3 ? `${10 + index * 15}%` : `${10 + (index - 3) * 15}%`,
                top: index < 3 ? '25%' : '55%',
              }}
              data-testid={`media-${item.id}`}
            >
              <div className="bg-card border-2 border-card-border rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4 shadow-lg">
                <img src={item.logo} alt={item.name} className="w-16 sm:w-20 md:w-24 lg:w-32 h-auto" />
              </div>
            </motion.button>
          ))}
        </div>

        <Dialog open={!!selectedMedia} onOpenChange={() => setSelectedMedia(null)}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{selectedMedia?.name}</DialogTitle>
              <DialogDescription>
                Featured article from {selectedMedia?.name}
              </DialogDescription>
            </DialogHeader>
            <p className="text-muted-foreground">{selectedMedia?.article}</p>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
