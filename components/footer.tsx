import Link from "next/link";

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="py-10 border-t border-border">
      <div className="container mx-auto px-6 md:px-8 max-w-6xl">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left */}
          <p className="text-muted-foreground text-xs text-center md:text-left">
            © {new Date().getFullYear()} Akhnas Furqan. All rights reserved.
            <br className="md:hidden" />
            <span className="opacity-70">
              {" "}Built with Next.js & Tailwind CSS.
            </span>
          </p>

          {/* Navigation */}
          <nav className="flex items-center gap-8">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-muted-foreground text-[11px] tracking-widest uppercase hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

      </div>
    </footer>
  );
}