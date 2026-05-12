import { Link } from "@tanstack/react-router";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useTheme } from "./ThemeProvider";
import { LogoMark } from "./LogoMark";
import { DISCORD_URL } from "@/lib/links";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/members", label: "Members" },
  { to: "/projects", label: "Projects" },
  { to: "/server-info", label: "Server" },
  { to: "/roadmap", label: "Roadmap" },
  { to: "/faq", label: "FAQ" },
] as const;

export function Navbar() {
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="max-w-7xl mx-auto h-[60px] px-5 md:px-8 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="w-6 h-6 border border-foreground inline-block" />
          <span className="font-display text-sm tracking-[0.22em] font-bold">NEXT-GEN</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="relative font-mono text-[11px] tracking-[0.22em] uppercase text-muted-foreground hover:text-foreground transition-colors data-[status=active]:text-foreground data-[status=active]:after:content-[''] data-[status=active]:after:absolute data-[status=active]:after:left-0 data-[status=active]:after:right-0 data-[status=active]:after:-bottom-1.5 data-[status=active]:after:h-px data-[status=active]:after:bg-foreground"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-3">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="w-10 h-10 grid place-items-center border border-border hover:border-foreground transition-colors"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <a
            href={DISCORD_URL}
            target="_blank"
            rel="noreferrer"
            className="btn-brutal !py-2.5 !px-4 !text-[11px] hidden sm:inline-flex"
          >
            JOIN DISCORD
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            className="lg:hidden w-10 h-10 grid place-items-center border border-border hover:border-foreground transition-colors"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden fixed inset-0 top-[60px] z-40 bg-background border-t border-border animate-[fadeUp_200ms_ease]">
          <nav className="flex flex-col px-5 py-6 gap-1">
            {LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: l.to === "/" }}
                className="font-display tracking-[0.18em] text-lg py-4 border-b border-border text-muted-foreground hover:text-foreground data-[status=active]:text-foreground"
              >
                {l.label.toUpperCase()}
              </Link>
            ))}
            <a
              href={DISCORD_URL}
              target="_blank"
              rel="noreferrer"
              className="btn-brutal mt-6 justify-center"
            >
              JOIN DISCORD →
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
