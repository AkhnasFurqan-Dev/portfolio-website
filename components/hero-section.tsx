import { FileText } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

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

function LinkedinIcon({ className }: { className?: string }) {
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
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-24 pb-16 relative"
    >
      <div className="container mx-auto px-6 md:px-8 max-w-5xl">
        <div className="flex flex-col items-center text-center gap-6">

          {/* Avatar */}
<div className="animate-fade-in-up delay-100">
  <div className="w-28 h-28 md:w-32 md:h-32 rounded-full border border-border/50 overflow-hidden relative animate-float bg-card">
    
    <Image
      src="/profile.jpeg"
      alt="Akhnas Furqan"
      fill
      className="object-cover"
      priority
    />

    {/* subtle glow overlay */}
    <div className="absolute inset-0 rounded-full bg-gradient-radial from-white/5 to-transparent" />
  </div>
</div>

          {/* Badge */}
          <div className="animate-fade-in-up delay-200">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-secondary border border-border rounded-full text-xs text-muted-foreground tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse-dot" />
              Open to Software Engineering Internships
            </div>
          </div>

          {/* Name */}
          <h1 className="animate-fade-in-up delay-300 font-[family-name:var(--font-display)] text-[clamp(4rem,12vw,9rem)] leading-[0.9] tracking-tight text-foreground">
            AKHNAS
            <br />
            FURQAN
          </h1>

          {/* Subtitle */}
          <p className="animate-fade-in-up delay-400 font-[family-name:var(--font-serif)] italic text-lg md:text-xl text-muted-foreground font-light">
            Computer Science Student · The University of Lahore
          </p>

          {/* Bio */}
          <p className="animate-fade-in-up delay-500 max-w-xl text-muted-foreground text-sm md:text-base leading-relaxed">
            I am a Computer Science student focused on backend development,
            database systems, and software engineering fundamentals. I build
            structured applications using C++, SQL, and core CS principles with
            an emphasis on clean design and correctness.
          </p>

          {/* CTA Buttons */}
          <div className="animate-fade-in-up delay-600 flex flex-wrap items-center justify-center gap-3">

            <Link
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-foreground text-background rounded-md text-xs tracking-widest uppercase font-medium hover:opacity-85 transition-all"
            >
              View Projects
            </Link>

            {/* Resume (replace later with actual PDF) */}
            <a
              href="/resume.pdf"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-border/50 text-muted-foreground rounded-md text-xs tracking-widest uppercase hover:text-foreground transition-all"
            >
              <FileText className="w-3.5 h-3.5" />
              Resume
            </a>

            <Link
              href="https://github.com/AkhnasFurqan-Dev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 border border-border text-muted-foreground rounded-md text-xs tracking-widest uppercase hover:text-foreground transition-all"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              GitHub
            </Link>

            <Link
              href="https://www.linkedin.com/in/akhnas-furqan/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 border border-border text-muted-foreground rounded-md text-xs tracking-widest uppercase hover:text-foreground transition-all"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              LinkedIn
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground animate-fade-in-up delay-700">
        <span className="text-[10px] tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-muted-foreground to-transparent animate-scroll-line" />
      </div>
    </section>
  );
}