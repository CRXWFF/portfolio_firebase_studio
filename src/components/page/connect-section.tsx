import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

const ConnectSection = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="connect" className="py-20 sm:py-32">
      <div className="container text-center px-4 sm:px-6">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">
          Connect With Me
        </h2>
        <p className="mt-4 max-w-xl mx-auto text-lg text-foreground/60">
          I&apos;m currently open to new opportunities. Feel free to reach out on LinkedIn or check out my work on GitHub.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="https://www.linkedin.com/in/haqresa" target="_blank">
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </Link>
          </Button>
          <Button size="lg" variant="secondary" asChild>
            <Link href="https://github.com/CRXWFF" target="_blank">
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default ConnectSection;
