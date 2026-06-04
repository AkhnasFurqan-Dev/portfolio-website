type Skill = {
  name: string;
  featured?: boolean;
};

type SkillCategory = {
  label: string;
  skills: Skill[];
};

const skillCategories: SkillCategory[] = [
  {
    label: "Programming Languages",
    skills: [
      { name: "C++", featured: true },
      { name: "Python", featured: true },
      { name: "SQL", featured: true },
      { name: "C#" },
    ],
  },
  {
    label: "Databases",
    skills: [
      { name: "PostgreSQL", featured: true },
      { name: "MySQL", featured: true },
    ],
  },
  {
    label: "Tools & Environment",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "VS Code" },
      { name: "Visual Studio" },
    ],
  },
  {
    label: "Core Concepts",
    skills: [
      { name: "Object-Oriented Programming" },
      { name: "Data Structures & Algorithms" },
      { name: "Database Systems" },
      { name: "Software Engineering" },
      { name: "Theory of Computation" },
      { name: "Programming Fundamentals" },
    ],
  },
];

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-24 md:py-32 bg-secondary border-y border-border"
    >
      <div className="container mx-auto px-6 md:px-8 max-w-6xl">

        {/* Header */}
        <p className="inline-flex items-center gap-2.5 text-[11px] tracking-[0.18em] uppercase text-muted-foreground mb-6">
          <span className="w-6 h-px bg-muted-foreground" />
          Technical Profile
        </p>

        <h2 className="font-[family-name:var(--font-display)] text-[clamp(2.8rem,5vw,4.5rem)] leading-[1.05] text-foreground mb-2">
          Skills & Stack
        </h2>

        <p className="text-muted-foreground text-sm mb-12">
          Languages, databases, tools, and core computer science concepts.
        </p>

        {/* Skills */}
        <div className="space-y-10">
          {skillCategories.map((category) => (
            <div key={category.label}>
              
              {/* Category Label */}
              <div className="flex items-center gap-3 mb-4">
                <p className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground whitespace-nowrap">
                  {category.label}
                </p>
                <span className="flex-1 h-px bg-border" />
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill) => {
                  const isFeatured = skill.featured === true;

                  return (
                    <span
                      key={skill.name}
                      className={[
                        "px-4 py-2 rounded-md text-sm tracking-wide cursor-default transition-all",
                        "hover:-translate-y-0.5 hover:border-border/50 hover:text-foreground",
                        isFeatured
                          ? "bg-card border border-white/10 text-foreground"
                          : "bg-card border border-border text-muted-foreground",
                      ].join(" ")}
                    >
                      {skill.name}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}