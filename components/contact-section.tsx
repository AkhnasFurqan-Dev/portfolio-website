"use client";

import { useState } from "react";
import { Mail, Send, CheckCircle } from "lucide-react";
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

const contactLinks = [
  {
    href: "mailto:akhnasfurqanabid@gmail.com",
    icon: Mail,
    label: "Email",
    value: "akhnasfurqanabid@gmail.com",
  },
  {
    href: "https://github.com/AkhnasFurqan-Dev",
    icon: GithubIcon,
    label: "GitHub",
    value: "AkhnasFurqan-Dev",
    external: true,
  },
  {
    href: "https://www.linkedin.com/in/akhnas-furqan/",
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "Akhnas Furqan",
    external: true,
  },
];

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // placeholder behavior (no backend yet)
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({ name: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <section
      id="contact"
      className="py-24 md:py-32 bg-secondary border-t border-border"
    >
      <div className="container mx-auto px-6 md:px-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="inline-flex items-center justify-center gap-2.5 text-[11px] tracking-[0.18em] uppercase text-muted-foreground mb-6">
            <span className="w-6 h-px bg-muted-foreground" />
            Get in Touch
            <span className="w-6 h-px bg-muted-foreground" />
          </p>

          <h2 className="font-[family-name:var(--font-display)] text-[clamp(3.5rem,8vw,7rem)] leading-[1] text-foreground mb-4">
            LET'S TALK.
          </h2>

          <p className="text-muted-foreground text-sm">
            Open to software development, backend, and database internship opportunities.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16">
          {contactLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="bg-card border border-border rounded-2xl p-6 text-center flex flex-col items-center gap-3 transition-all duration-300 hover:border-border/50 hover:-translate-y-1 hover:shadow-[0_8px_40px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.06)]"
            >
              <div className="w-12 h-12 rounded-md bg-secondary border border-border flex items-center justify-center">
                <link.icon className="w-5 h-5 text-muted-foreground" />
              </div>

              <p className="text-[11px] tracking-widest uppercase text-muted-foreground">
                {link.label}
              </p>

              <p className="text-foreground text-sm break-all">
                {link.value}
              </p>
            </Link>
          ))}
        </div>

        {/* Contact Form */}
        <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
          <h3 className="font-[family-name:var(--font-display)] text-2xl tracking-wide text-foreground mb-6">
            Send a Message
          </h3>

          {isSubmitted ? (
            <div className="flex flex-col items-center justify-center py-12 gap-4">
              <CheckCircle className="w-12 h-12 text-green-500" />
              <p className="text-foreground text-lg">Message sent!</p>
              <p className="text-muted-foreground text-sm">
                I will get back to you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[11px] tracking-widest uppercase text-muted-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    className="w-full bg-secondary border border-border rounded-md px-4 py-3 text-sm text-foreground"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-[11px] tracking-widest uppercase text-muted-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    className="w-full bg-secondary border border-border rounded-md px-4 py-3 text-sm text-foreground"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] tracking-widest uppercase text-muted-foreground mb-2">
                  Message
                </label>

                <textarea
                  rows={5}
                  required
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  className="w-full bg-secondary border border-border rounded-md px-4 py-3 text-sm text-foreground resize-none"
                  placeholder="Tell me about the opportunity..."
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-md text-xs tracking-widest uppercase font-medium hover:opacity-85 transition-all"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}