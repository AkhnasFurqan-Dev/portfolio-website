"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔒 Lock body scroll when mobile menu is open (important UX improvement)
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMobileMenuOpen]);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-5 flex items-center justify-between transition-all duration-300 ${
          isScrolled
            ? "bg-background/85 backdrop-blur-xl border-b border-border"
            : ""
        }`}
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="#hero"
          className="font-[family-name:var(--font-display)] text-2xl tracking-wider text-foreground"
        >
          AF.
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-10" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-muted-foreground text-xs tracking-widest uppercase hover:text-foreground transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-foreground transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
          ))}

          <li>
            <Link
              href="#contact"
              className="bg-foreground text-background px-4 py-2 rounded-md text-xs tracking-widest uppercase font-medium hover:opacity-85 transition-opacity"
            >
              Hire Me
            </Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setIsMobileMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 text-foreground" />
          ) : (
            <Menu className="w-6 h-6 text-foreground" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-background/97 backdrop-blur-2xl z-40 flex flex-col items-center justify-center gap-8 transition-all duration-500 md:hidden ${
          isMobileMenuOpen
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-full pointer-events-none"
        }`}
        role="dialog"
        aria-label="Mobile navigation"
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={closeMenu}
            className="font-[family-name:var(--font-display)] text-5xl tracking-wider text-muted-foreground hover:text-foreground transition-colors"
          >
            {link.label}
          </Link>
        ))}

        <Link
          href="#contact"
          onClick={closeMenu}
          className="mt-6 bg-foreground text-background px-6 py-3 rounded-md text-xs tracking-widest uppercase font-medium"
        >
          Hire Me
        </Link>
      </div>
    </>
  );
}