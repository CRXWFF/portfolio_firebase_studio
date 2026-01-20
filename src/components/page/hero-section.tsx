import { Button } from "@/components/ui/button";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="py-20 sm:py-32 md:py-40">
      <div className="container text-center px-4 sm:px-6">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl font-headline">
          Hi, I&apos;m Nashirul
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg tracking-tight text-foreground/80 sm:text-xl">
          A passionate developer transforming ideas into beautiful and functional web applications. Welcome to my digital space.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button asChild size="lg">
            <Link href="#projects">View My Work</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="#connect">Get In Touch</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
