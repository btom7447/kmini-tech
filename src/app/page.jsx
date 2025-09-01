import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SolutionsSection from '../components/SolutionsSection';
import RecentProjectsSection from '../components/RecentProjectsSection';
import MetricsSection from '../components/MetricsSection';
import PricingPlanSection from '../components/PricingPlanSection';
import RequestQuoteSection from '../components/RequestQuoteSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SolutionsSection />
      <RecentProjectsSection />
      <MetricsSection />
      <PricingPlanSection />
      <RequestQuoteSection />
    </>
  );
}
