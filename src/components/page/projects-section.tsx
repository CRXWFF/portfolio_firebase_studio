import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Github, ExternalLink } from "lucide-react";

const projectData = [
  {
    id: "project-1",
    title: "TRU",
    description: "A public transportation tracking project, specifically for buses. This project was created using Python and is CLI-based.",
    githubUrl: "https://github.com/CRXWFF/TRU",
    liveUrl: "#",
  },
  {
    id: "project-2",
    title: "Task Management App",
    description: "A responsive and interactive task management application to help users organize their daily tasks and boost productivity.",
  },
  {
    id: "project-3",
    title: "Portfolio Website",
    description: "This very portfolio website, designed to be clean, modern, and showcase my skills and projects effectively.",
    githubUrl: "https://github.com",
    liveUrl: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 sm:py-32 bg-card">
      <div className="container px-4 sm:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-center sm:text-4xl font-headline">
          My Projects
        </h2>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projectData.map((project) => {
            const projectImage = PlaceHolderImages.find((img) => img.id === project.id);
            return (
              <Card key={project.id} className="flex flex-col overflow-hidden bg-background">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  {projectImage && (
                    <div className="aspect-video relative mb-4 rounded-lg overflow-hidden">
                      <Image
                        src={projectImage.imageUrl}
                        alt={projectImage.description}
                        fill
                        className="object-cover"
                        data-ai-hint={projectImage.imageHint}
                      />
                    </div>
                  )}
                  <p className="text-muted-foreground">{project.description}</p>
                </CardContent>
                <CardFooter className="gap-2">
                  {project.githubUrl && (
                    <Button variant="outline" asChild className="w-full">
                      <Link href={project.githubUrl} target="_blank">
                        <Github />
                        GitHub
                      </Link>
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button asChild className="w-full">
                      <Link href={project.liveUrl} target="_blank">
                        <ExternalLink />
                        Live Demo
                      </Link>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
