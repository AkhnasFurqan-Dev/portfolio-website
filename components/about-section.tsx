export function AboutSection() {
  const stats = [
    { value: "3+", label: "Projects" },
    { value: "4", label: "Core Technologies" },
    { value: "2028", label: "Expected Graduation" },
  ];

  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-8 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 items-start">
          
          {/* Left Column */}
          <div>
            <p className="inline-flex items-center gap-2.5 text-[11px] tracking-[0.18em] uppercase text-muted-foreground mb-6">
              <span className="w-6 h-px bg-muted-foreground" />
              About
            </p>

            <h2 className="font-[family-name:var(--font-display)] text-[clamp(3rem,6vw,5rem)] leading-[1.05] text-foreground mb-4">
              I build systems
              <br />
              that{" "}
              <span className="font-[family-name:var(--font-serif)] italic text-muted-foreground">
                work.
              </span>
            </h2>

            {/* Stats */}
            <div className="grid grid-cols-3 border border-border rounded-xl overflow-hidden mt-10">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`py-6 px-4 text-center ${
                    index !== stats.length - 1 ? "border-r border-border" : ""
                  }`}
                >
                  <div className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-foreground leading-none mb-1">
                    {stat.value}
                  </div>
                  <div className="text-[10px] tracking-widest uppercase text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-5">
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
              I am a Computer Science student at The University of Lahore, currently
              in my 5th semester, with a strong focus on backend development,
              database systems, and software engineering fundamentals.
            </p>

            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
              My experience includes building projects in C++, designing relational
              databases using PostgreSQL, and applying core concepts such as
              object-oriented programming, data structures, and algorithm analysis
              to solve structured problems.
            </p>

            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
              I am actively improving my skills in software development and
              exploring areas such as scalable backend systems and data-driven
              applications, with the goal of securing a software engineering
              internship.
            </p>

            <p className="text-foreground text-sm md:text-base leading-relaxed font-medium">
              I focus on building practical systems, understanding how they work,
              and improving them through iteration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}