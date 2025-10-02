import { motion, AnimatePresence } from "framer-motion";
import { Trophy, Star, Target, Award } from "lucide-react";
import { useEffect, useState } from "react";

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: typeof Trophy;
}

const achievements: Achievement[] = [
  { id: "explorer", title: "Career Explorer", description: "Started your journey!", icon: Star },
  { id: "learner", title: "Quick Learner", description: "Viewed 5 sections", icon: Target },
  { id: "engaged", title: "Fully Engaged", description: "Explored all features", icon: Trophy },
  { id: "master", title: "CareerToDo Master", description: "Completed the tour!", icon: Award },
];

export function AchievementToast() {
  const [visible, setVisible] = useState(false);
  const [currentAchievement, setCurrentAchievement] = useState<Achievement | null>(null);
  const [unlockedAchievements, setUnlockedAchievements] = useState<Set<string>>(new Set());

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      
      if (scrollPercentage > 10 && !unlockedAchievements.has("explorer")) {
        showAchievement(achievements[0]);
        setUnlockedAchievements(prev => new Set(prev).add("explorer"));
      } else if (scrollPercentage > 40 && !unlockedAchievements.has("learner")) {
        showAchievement(achievements[1]);
        setUnlockedAchievements(prev => new Set(prev).add("learner"));
      } else if (scrollPercentage > 70 && !unlockedAchievements.has("engaged")) {
        showAchievement(achievements[2]);
        setUnlockedAchievements(prev => new Set(prev).add("engaged"));
      } else if (scrollPercentage > 95 && !unlockedAchievements.has("master")) {
        showAchievement(achievements[3]);
        setUnlockedAchievements(prev => new Set(prev).add("master"));
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [unlockedAchievements]);

  const showAchievement = (achievement: Achievement) => {
    setCurrentAchievement(achievement);
    setVisible(true);
    setTimeout(() => setVisible(false), 4000);
  };

  return (
    <AnimatePresence>
      {visible && currentAchievement && (
        <motion.div
          initial={{ x: 400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 400, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50 max-w-xs sm:max-w-sm"
          role="status"
          aria-live="polite"
          aria-atomic="true"
          data-testid={`achievement-${currentAchievement.id}`}
        >
          <div className="bg-gradient-to-r from-chart-3 to-chart-4 rounded-2xl p-6 shadow-2xl border-2 border-white/20">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <currentAchievement.icon className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-white/80 mb-1">Achievement Unlocked!</p>
                <h3 className="text-lg font-bold text-white mb-1">{currentAchievement.title}</h3>
                <p className="text-sm text-white/90">{currentAchievement.description}</p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
