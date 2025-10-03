import { motion, useAnimation, useMotionValue, useTransform, PanInfo } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MediaItem {
  id: string;
  name: string;
  image: string;
}

const mediaItems: MediaItem[] = [
  {
    id: "1",
    name: "TechCrunch Feature",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=800&fit=crop"
  },
  {
    id: "2",
    name: "Forbes Cover Story",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop"
  },
  {
    id: "3",
    name: "BBC News Report",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=800&fit=crop"
  },
  {
    id: "4",
    name: "WIRED Innovation",
    image: "https://images.unsplash.com/photo-1517077304035-dd4e8c12e6dd?w=600&h=800&fit=crop"
  },
  {
    id: "5",
    name: "Economist Analysis",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&h=800&fit=crop"
  },
  {
    id: "6",
    name: "Fast Company Award",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=800&fit=crop"
  },
  {
    id: "7",
    name: "Bloomberg Investment",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=800&fit=crop"
  },
  {
    id: "8",
    name: "TechAsia Review",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=800&fit=crop"
  },
  {
    id: "9",
    name: "Venture Beat",
    image: "https://images.unsplash.com/photo-1517077304035-dd4e8c12e6dd?w=600&h=800&fit=crop"
  },
  {
    id: "10",
    name: "Reuters Coverage",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=800&fit=crop"
  }
];

export function MediaCoverage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const constraintsRef = useRef<HTMLDivElement>(null);
  const dragX = useMotionValue(0);
  
  const featuredItem = mediaItems[currentIndex];
  const totalItems = mediaItems.length;
  
  // Get previous and next items
  const getAdjacentItems = () => {
    const prevIndex = (currentIndex - 1 + totalItems) % totalItems;
    const nextIndex = (currentIndex + 1) % totalItems;
    
    return {
      previous: mediaItems[prevIndex],
      next: mediaItems[nextIndex]
    };
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalItems);
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
  };

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const { offset, velocity } = info;
    
    if (offset.x > 100 || velocity.x > 500) {
      handlePrevious();
    } else if (offset.x < -100 || velocity.x < -500) {
      handleNext();
    }
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-play functionality
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isDragging) {
        handleNext();
      }
    }, 4000);
    
    return () => clearInterval(timer);
  }, [currentIndex, isDragging]);

  const { previous, next } = getAdjacentItems();

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-32 bg-gradient-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.05),transparent_50%)]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            As Featured In
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto px-4">
            Discover how leading media outlets are covering CareerToDo's revolution in professional development
          </p>
        </motion.div>

        {/* Desktop: 3D Carousel - Mobile: Simple Grid */}
        <div className="block lg:hidden">
          {/* Mobile Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
            {mediaItems.slice(0, 6).map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group cursor-pointer"
                onClick={() => setCurrentIndex(index)}
              >
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <img 
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-semibold text-sm sm:text-base">{item.name}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Mobile dots navigation */}
          <div className="flex justify-center gap-2 mt-6 sm:mt-8">
            {mediaItems.slice(0, 6).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'w-6 bg-indigo-600' 
                    : 'w-2 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Desktop 3D Carousel */}
        <div className="hidden lg:block">
          <div className="relative max-w-6xl mx-auto h-[400px] xl:h-[600px] flex items-center justify-center" ref={constraintsRef}>
            
            {/* Left card - behind featured */}
            <motion.div
              className="absolute w-60 xl:w-80 h-[350px] xl:h-[500px] rounded-2xl overflow-hidden shadow-2xl z-10"
              style={{
                left: '10%',
                transform: 'translateX(-50%) translateZ(-100px) rotateY(25deg) scale(0.85)',
              }}
              animate={{
                x: -50,
                scale: 0.85,
                rotateY: 25,
                opacity: 0.7,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
            >
              <img 
                src={previous.image}
                alt={previous.name}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Featured card - center */}
            <motion.div
              className="relative z-30 w-72 xl:w-96 h-[450px] xl:h-[600px] rounded-3xl overflow-hidden shadow-2xl"
              drag="x"
              dragConstraints={constraintsRef}
              dragElastic={0.2}
              onDragStart={() => setIsDragging(true)}
              onDragEnd={handleDragEnd}
              onDragTransitionEnd={() => setIsDragging(false)}
              style={{ x: dragX }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
            >
              <img 
                src={featuredItem.image}
                alt={featuredItem.name}
                className="w-full h-full object-cover"
              />
              
              {/* Subtle overlay for better text readability if needed */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </motion.div>

            {/* Right card - behind featured */}
            <motion.div
              className="absolute w-60 xl:w-80 h-[350px] xl:h-[500px] rounded-2xl overflow-hidden shadow-2xl z-10"
              style={{
                right: '10%',
                transform: 'translateX(50%) translateZ(-100px) rotateY(-25deg) scale(0.85)',
              }}
              animate={{
                x: 50,
                scale: 0.85,
                rotateY: -25,
                opacity: 0.7,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
            >
              <img 
                src={next.image}
                alt={next.name}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Navigation buttons */}
            <Button
              size="lg"
              onClick={handlePrevious}
              className="absolute left-4 xl:left-8 z-40 rounded-full bg-white/90 hover:bg-white text-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-5 h-5 xl:w-6 xl:h-6" />
            </Button>

            <Button
              size="lg"
              onClick={handleNext}
              className="absolute right-4 xl:right-8 z-40 rounded-full bg-white/90 hover:bg-white text-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-5 h-5 xl:w-6 xl:h-6" />
            </Button>
          </div>

          {/* Desktop navigation dots */}
          <div className="flex justify-center gap-2 mt-8 lg:mt-12">
            {mediaItems.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'w-8 bg-indigo-600' 
                    : 'w-2 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Swipe hint - only show on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-6 lg:hidden"
        >
          <p className="text-sm text-slate-500 flex items-center justify-center gap-2">
            <ChevronLeft className="w-4 h-4" />
            Tap to explore more coverage
            <ChevronRight className="w-4 h-4" />
          </p>
        </motion.div>
      </div>
    </section>
  );
}