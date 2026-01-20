import Navbar from "@/components/layout/navbar";
import HeroSection from "@/components/page/hero-section";
import TechStackTicker from "@/components/page/tech-stack-ticker";
import AboutMeSection from "@/components/page/about-me-section";
import ProjectsSection from "@/components/page/projects-section";
import ConnectSection from "@/components/page/connect-section";

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
