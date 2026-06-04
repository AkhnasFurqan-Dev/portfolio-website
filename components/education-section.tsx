const timelineItems = [
  {
    year: "2023",
    title: "Started BS Computer Science",
    description:
      "Enrolled at The University of Lahore. Built foundational understanding of programming fundamentals, problem-solving, and C++ through structured coursework.",
    active: true,
  },
  {
    year: "2024",
    title: "OOP & Software Fundamentals",
    description:
      "Studied Object-Oriented Programming concepts including classes, inheritance, polymorphism, and encapsulation. Applied concepts in academic projects such as a Library Management System and Tic Tac Toe game.",
    active: false,
  },
  {
    year: "2025",
    title: "Data Structures & Databases",
    description:
      "Focused on Data Structures & Algorithms and Database Systems. Designed and implemented a normalized relational database system for a vehicle dealership project using SQL and PostgreSQL.",
    active: false,
  },
  {
    year: "2026",
    title: "Software Engineering & Internship Readiness",
    description:
      "Completing Software Engineering coursework while actively preparing for internships in software development, backend systems, or database engineering roles.",
    active: false,
  },
];

export function EducationSection() {
  return (
    <section id="education" className="py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-8 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20 items-start">
          
          {/* Left Column */}
          <div>
            <p className="inline-flex items-center gap-2.5 text-[11px] tracking-[0.18em] uppercase text-muted-foreground mb-6">
              <span className="w-6 h-px bg-muted-foreground" />
              Background
            </p>

            <h2 className="font-[family-name:var(--font-display)] text-[clamp(2.8rem,5vw,4.5rem)] leading-[1.05] text-foreground">
              Education
            </h2>

            <p className="text-muted-foreground text-sm mt-4 leading-relaxed">
              BS Computer Science
              <br />
              The University of Lahore
              <br />
              Lahore, Pakistan
            </p>
          </div>

          {/* Right Column - Timeline */}
          <div className="relative pl-8">
            <div className="absolute left-0 top-2 bottom-2 w-px bg-border" />

            <div className="space-y-10" role="list">
              {timelineItems.map((item) => (
                <div key={item.year} className="relative group" role="listitem">
                  
                  {/* Dot */}
                  <div
                    className={`absolute -left-[1.6rem] top-1.5 w-2.5 h-2.5 rounded-full border transition-all duration-300 ${
                      item.active
                        ? "bg-foreground border-foreground shadow-[0_0_0_4px_rgba(255,255,255,0.06)]"
                        : "bg-background border-border/50 group-hover:bg-foreground group-hover:border-foreground group-hover:shadow-[0_0_0_4px_rgba(255,255,255,0.06)]"
                    }`}
                  />

                  <p className="text-[11px] tracking-widest uppercase text-muted-foreground mb-1.5">
                    {item.year}
                  </p>

                  <h3 className="font-[family-name:var(--font-display)] text-xl md:text-2xl tracking-wide text-foreground mb-2">
                    {item.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}