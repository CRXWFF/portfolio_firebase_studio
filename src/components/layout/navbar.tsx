import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Code } from "lucide-react";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container h-14 flex items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Code className="h-6 w-6 text-primary" />
          <span className="font-bold hidden sm:inline-block">John Doe</span>
        </Link>
        <nav className="flex items-center gap-4 text-sm lg:gap-6 flex-1">
          <Link
            href="#about"
            className="text-foreground/60 transition-colors hover:text-foreground/80"
          >
            About
          </Link>
          <Link
            href="#projects"
            className="text-foreground/60 transition-colors hover:text-foreground/80"
          >
            Projects
          </Link>
        </nav>
        <div className="flex items-center justify-end gap-2">
           <Button variant="ghost" size="icon" asChild>
            <Link href="https://github.com" target="_blank" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </Link>
          </Button>
          <Button asChild>
            <Link href="#connect">Connect</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
