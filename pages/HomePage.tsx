import { Navigation } from "@/components/Navigation";
import { AchievementToast } from "@/components/AchievementToast";
import { EnhancedHero } from "@/components/EnhancedHero";
import { TheRealityCheck } from "@/components/TheRealityCheck";
import { VideoSection } from "@/components/VideoSection";
import { WatchingVsDoing } from "@/components/WatchingVsDoing";
import { CareerTodoBenefits } from "@/components/CareerTodoBenefits";
import { TheGap } from "@/components/TheGap";
import { MediaCoverage } from "@/components/MediaCoverage";
import { EnhancedFeaturesSection } from "@/components/EnhancedFeaturesSection";
import { EnhancedToolGrid } from "@/components/EnhancedToolGrid";
import { SimulationGIFs } from "@/components/SimulationGIFs";
import { ReelsMarquee } from "@/components/ReelsMarquee";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { MediaCollage } from "@/components/MediaCollage";
import { ProblemSolution } from "@/components/ProblemSolution";
import { ComparisonSection } from "@/components/ComparisonSection";
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
      <AchievementToast />
      <EnhancedHero />
      <TheRealityCheck />
      <VideoSection />
      <WatchingVsDoing />
      <CareerTodoBenefits />
      <TheGap />
      <MediaCoverage />
      <EnhancedFeaturesSection />
      <EnhancedToolGrid />
      <SimulationGIFs />
      <ReelsMarquee />
      <TestimonialsSection />
      <MediaCollage />
      <ProblemSolution />
      <ComparisonSection />
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
