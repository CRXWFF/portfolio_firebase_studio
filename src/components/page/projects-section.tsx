import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Github, ExternalLink } from "lucide-react";

const projectData = [
  {
    id: "project-1",
    title: "TRU CLI",
    description: "A public transportation tracking project, specifically for buses. This project was created using Python and is CLI-based.",
    githubUrl: "https://github.com/CRXWFF/TRU",
  },
  {
    id: "project-2",
    title: "Crypto Exchange CLI App",
    description: "A C++ based crypto exchange application that runs on CLI.",
    githubUrl: "https://github.com/CRXWFF/Crypto-SDA-Project",
  },
  {
    id: "project-3",
    title: "KurirKu",
    description: "KurirKu is an affordable and customer-friendly package delivery application. KurirKu is also a final project for the Data Structures & Algorithms course final exam. This project uses C++ and implements the Djikstra algorithm to determine the fastest package delivery route.",
    githubUrl: "https://github.com/CRXWFF/KurirKu",
  },
  {
    id: "project-4",
    title: "VylBouquet",
    description: "VylBouquet is a website for purchasing flower bouquets. In addition, our client uses this website as a place to record their bouquet sales data.",
    liveUrl: "https://vylbouquet.com/"
  },
  {
    id: "project-5",
    title: "Baletani",
    description: "An e-commerce website for purchasing basic necessities from home.",
    liveUrl: "https://baletani.com/"
  },
  {
    id: "project-6",
    title: "ASTRONOUT QUEST",
    description: "My first attempt was learning to make a two-dimensional platformer game similar to Mario Bros using UNITY 2D..",
    liveUrl: "https://aruleyd.itch.io/astronoutquest"
  },
  {
    id: "project-7",
    title: "Aksara",
    description: "A rogue-like game that I and my team created when we participated in the Gimersia Game Jam. The theme of the game jam at that time was observe, imitate, and modify. We happened to try to imitate Balatro.",
    liveUrl: "https://ramadhann.itch.io/aksara"
  },
  {
    id: "project-8",
    title: "palugada",
    description: "Palugada is a Flutter-based mobile application that I personally use for personal purposes in my private life, and it's really great.",
    githubUrl: "https://github.com/CRXWFF/palugada"
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
