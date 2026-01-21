const technologies = [
  "React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Node.js", "Flutter", "HTML5", "CSS3", "Git", "Figma", "Vercel", "Python", "MySQL", "Java", "Kotlin", "Luau", "UNITY", "GODOT", "renpy"
];

const TechStackTicker = () => {
  return (
    <div className="w-full overflow-hidden py-8 bg-card">
      <div className="flex animate-ticker whitespace-nowrap">
        {technologies.map((tech, index) => (
          <span key={`tech-1-${index}`} className="text-xl font-semibold mx-6 text-foreground/80">
            {tech}
          </span>
        ))}
        {/* Duplicate for seamless loop */}
        {technologies.map((tech, index) => (
          <span key={`tech-2-${index}`} className="text-xl font-semibold mx-6 text-foreground/80" aria-hidden="true">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TechStackTicker;
