import { ExternalLink } from "lucide-react";
import Link from "next/link";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

const projects = [
  {
    title: "Vehicle Dealership Database",
    description:
      "A relational database system designed for managing a vehicle dealership workflow including inventory, customers, employees, and sales transactions. Implemented using PostgreSQL with normalization up to 3NF and optimized SQL queries with indexing.",
    tech: ["PostgreSQL", "SQL", "Database Design"],
    features: [
      "Normalized schema (3NF)",
      "15+ relational tables",
      "Foreign key relationships",
      "Indexed queries",
      "Optimized data retrieval",
    ],
    category: "Database Systems",
    githubUrl: "https://github.com/AkhnasFurqan-Dev",
    icon: "🗃",
  },
  {
    title: "Library Management System",
    description:
      "A C++ object-oriented system for managing library operations such as book issuance, returns, and member records. Focused on applying OOP principles including encapsulation, inheritance, and modular design.",
    tech: ["C++", "OOP"],
    features: [
      "Book & member management",
      "Borrow/return system",
      "Class-based architecture",
      "Encapsulation design",
    ],
    category: "OOP Project",
    githubUrl: "https://github.com/AkhnasFurqan-Dev",
    icon: "📚",
  },
  {
    title: "Tic Tac Toe Game",
    description:
      "A console-based Tic Tac Toe game built in C++ featuring turn-based gameplay, input validation, and win-condition detection across rows, columns, and diagonals.",
    tech: ["C++", "Game Logic"],
    features: [
      "Turn-based logic",
      "Input validation",
      "Win detection",
      "Error handling",
    ],
    category: "Programming Fundamentals",
    githubUrl: "https://github.com/AkhnasFurqan-Dev",
    icon: "✕ ○",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-8 max-w-6xl">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <p className="inline-flex items-center gap-2.5 text-[11px] tracking-[0.18em] uppercase text-muted-foreground mb-6">
              <span className="w-6 h-px bg-muted-foreground" />
              Work
            </p>

            <h2 className="font-[family-name:var(--font-display)] text-[clamp(2.8rem,5vw,4.5rem)] leading-[1.05] text-foreground">
              Projects
            </h2>
          </div>

          <Link
            href="https://github.com/AkhnasFurqan-Dev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 border border-border text-muted-foreground rounded-md text-xs tracking-widest uppercase hover:text-foreground transition-all"
          >
            View GitHub
            <ExternalLink className="w-3 h-3" />
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <article
              key={project.title}
              className="bg-card border border-border rounded-2xl overflow-hidden flex flex-col transition-all duration-500 hover:border-border/50 hover:-translate-y-1 hover:shadow-[0_8px_40px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.06)]"
            >
              {/* Thumbnail */}
              <div className="h-48 bg-secondary flex items-center justify-center border-b border-border relative">
                <span className="text-5xl opacity-15">{project.icon}</span>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col gap-4">

                {/* Tech */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 bg-secondary border border-border rounded text-[10px] text-muted-foreground uppercase tracking-widest"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="font-[family-name:var(--font-display)] text-2xl text-foreground leading-tight">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-1.5">
                  {project.features.slice(0, 4).map((feature) => (
                    <span
                      key={feature}
                      className="px-2 py-0.5 bg-background rounded text-[10px] text-muted-foreground"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-[11px] text-muted-foreground">
                    {project.category}
                  </span>

                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-border text-muted-foreground rounded text-[11px] uppercase hover:text-foreground transition-all"
                  >
                    <GithubIcon className="w-3 h-3" />
                    Code
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}