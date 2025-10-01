import { Navigation } from "@/components/Navigation";
import { ProgressRibbon } from "@/components/ProgressRibbon";
import { AchievementToast } from "@/components/AchievementToast";
import { EnhancedHero } from "@/components/EnhancedHero";
import { StatsSection } from "@/components/StatsSection";
import { VideoSection } from "@/components/VideoSection";
import { EnhancedFeaturesSection } from "@/components/EnhancedFeaturesSection";
import { EnhancedToolGrid } from "@/components/EnhancedToolGrid";
import { SimulationGIFs } from "@/components/SimulationGIFs";
import { ReelsMarquee } from "@/components/ReelsMarquee";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { MediaCollage } from "@/components/MediaCollage";
import { ProblemSolution } from "@/components/ProblemSolution";
import { EnhancedCareerPaths } from "@/components/EnhancedCareerPaths";
import { EnhancedPricing } from "@/components/EnhancedPricing";
import { PartnersMarquee } from "@/components/PartnersMarquee";
import { FAQSection } from "@/components/FAQSection";
import { CommunitySection } from "@/components/CommunitySection";
import { EnhancedCTA } from "@/components/EnhancedCTA";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <ProgressRibbon />
      <AchievementToast />
      <EnhancedHero />
      <StatsSection />
      <VideoSection />
      <EnhancedFeaturesSection />
      <EnhancedToolGrid />
      <SimulationGIFs />
      <ReelsMarquee />
      <TestimonialsSection />
      <MediaCollage />
      <ProblemSolution />
      <EnhancedCareerPaths />
      <EnhancedPricing />
      <PartnersMarquee />
      <FAQSection />
      <CommunitySection />
      <EnhancedCTA />
      <Footer />
    </div>
  );
}
