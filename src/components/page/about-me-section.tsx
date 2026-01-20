import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card } from "@/components/ui/card";

const AboutMeSection = () => {
  const aboutMeImage = PlaceHolderImages.find((img) => img.id === "about-me");

  return (
    <section id="about" className="py-20 sm:py-32">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tight text-center sm:text-4xl font-headline">
          About Me
        </h2>
        <Card className="mt-12 overflow-hidden">
          <div className="grid md:grid-cols-3">
            <div className="md:col-span-1">
              {aboutMeImage && (
                <div className="relative h-full w-full min-h-[300px]">
                  <Image
                    src={aboutMeImage.imageUrl}
                    alt={aboutMeImage.description}
                    fill
                    className="object-cover"
                    data-ai-hint={aboutMeImage.imageHint}
                  />
                </div>
              )}
            </div>
            <div className="md:col-span-2 p-8 md:p-12">
              <div className="space-y-4 text-lg text-foreground/80">
                <p>
                  Hello! I&apos;m John Doe, a dedicated software developer with a knack for creating elegant solutions in the least amount of time. I have a strong foundation in front-end and back-end development, specializing in building modern, responsive, and user-friendly web applications.
                </p>
                <p>
                  My journey in tech began with a curiosity for how things work, which quickly evolved into a passion for coding. I thrive on challenges and am constantly learning new technologies to stay at the forefront of the industry.
                </p>
                <p>
                  When I&apos;m not coding, you can find me exploring new hiking trails, experimenting with new recipes in the kitchen, or getting lost in a good book.
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default AboutMeSection;
