import dynamic from 'next/dynamic';
import Navbar from "@/components/layout/navbar";
import HeroSection from "@/components/page/hero-section";
import TechStackTicker from "@/components/page/tech-stack-ticker";
import AboutMeSection from "@/components/page/about-me-section";

// Lazy load below-the-fold sections
const ProjectsSection = dynamic(() => import("@/components/page/projects-section"), {
  loading: () => <div className="py-20 sm:py-32 bg-card" />,
});

const ConnectSection = dynamic(() => import("@/components/page/connect-section"), {
  loading: () => <div className="py-20 sm:py-32" />,
});

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <TechStackTicker />
        <AboutMeSection />
        <ProjectsSection />
        <ConnectSection />
      </main>
    </div>
  );
}
