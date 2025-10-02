import { motion, useScroll, useTransform } from "framer-motion";
import { Trophy, Zap, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";

export function ProgressRibbon() {
  const { scrollYProgress } = useScroll();
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [level, setLevel] = useState(1);
  const [xp, setXp] = useState(0);

  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      const percentage = Math.round(latest * 100);
      setScrollPercentage(percentage);
      
      const calculatedXP = Math.min(percentage * 10, 1000);
      setXp(calculatedXP);
      
      if (percentage > 80) setLevel(5);
      else if (percentage > 60) setLevel(4);
      else if (percentage > 40) setLevel(3);
      else if (percentage > 20) setLevel(2);
      else setLevel(1);
    });
  }, [scrollYProgress]);

  const levelTitles = [
    "Career Explorer",
    "Skill Seeker", 
    "Knowledge Builder",
    "Career Champion",
    "CareerToDo Master"
  ];

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-16 left-0 right-0 z-40 bg-card/80 backdrop-blur-xl border-b border-card-border shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center gap-4 flex-wrap">
          <Badge 
            variant="secondary" 
            className="flex items-center gap-2 px-3 py-1.5 text-sm font-semibold"
            data-testid="progress-level-badge"
          >
            <Trophy className="w-4 h-4 text-chart-3" />
            Level {level}: {levelTitles[level - 1]}
          </Badge>
          
          <div className="flex-1 min-w-[200px] max-w-md">
            <div className="flex items-center gap-3">
              <Zap className="w-5 h-5 text-chart-4 flex-shrink-0" />
              <div className="flex-1">
                <Progress value={scrollPercentage} className="h-2" />
              </div>
              <span className="text-sm font-medium text-muted-foreground min-w-[60px] text-right">
                {xp} / 1000 XP
              </span>
            </div>
          </div>

          {level >= 3 && (
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              <Badge className="bg-gradient-to-r from-chart-3 to-chart-4 text-white border-0 flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5" />
                Achievement Unlocked!
              </Badge>
            </motion.div>
          )}
        </div>
      </div>
      
      <motion.div
        className="h-1 bg-gradient-to-r from-ring via-chart-3 to-chart-4"
        style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
      />
    </motion.div>
  );
}
