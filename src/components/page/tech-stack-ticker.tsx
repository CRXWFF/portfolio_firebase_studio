const technologies = [
  "React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Node.js", "Flutter", "HTML5", "CSS3", "Git", "Figma", "Vercel", "Python", "MySQL", "Java", "Kotlin", "Luau"
];

const TechStackTicker = () => {
  const extendedTechnologies = [...technologies, ...technologies];

  return (
    <div className="w-full overflow-hidden py-8 bg-card">
      <div className="flex animate-ticker whitespace-nowrap">
        {extendedTechnologies.map((tech, index) => (
          <span key={index} className="text-xl font-semibold mx-6 text-foreground/80">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TechStackTicker;
