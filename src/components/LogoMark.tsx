import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, MessageSquare, Users, Map, HelpCircle, FolderGit2, Server } from "lucide-react";
import logoUrl from "@/assets/logo.png";
import { DISCORD_URL, REDDIT_URL } from "@/lib/links";

const QUICK_LINKS = [
  { to: "/members", label: "Members", icon: Users },
  { to: "/projects", label: "Projects", icon: FolderGit2 },
  { to: "/server-info", label: "Server", icon: Server },
  { to: "/roadmap", label: "Roadmap", icon: Map },
  { to: "/faq", label: "FAQ", icon: HelpCircle },
] as const;

export function LogoMark() {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onClick = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("mousedown", onClick);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  return (
    <div ref={wrapRef} className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="NEXT-GEN logo menu"
        aria-expanded={open}
        className="flex items-center gap-2.5 group focus:outline-none"
      >
        <span className="relative w-8 h-8 grid place-items-center border border-border group-hover:border-foreground transition-colors overflow-hidden bg-background">
          <img
            src={logoUrl}
            alt="NEXT-GEN PROGRAMMERS"
            className="w-full h-full object-cover mix-blend-multiply dark:mix-blend-screen dark:invert transition-transform duration-300 group-hover:scale-110"
            draggable={false}
          />
        </span>
        <span className="font-display text-sm tracking-[0.22em] font-bold">NEXT-GEN</span>
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="fixed inset-0 top-[60px] z-30 bg-background/40 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.97 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="absolute left-0 top-[calc(100%+12px)] z-40 w-[min(92vw,360px)] origin-top-left border border-border bg-card shadow-2xl"
              role="menu"
            >
              <div className="p-5 border-b border-border flex items-center gap-3">
                <span className="w-12 h-12 grid place-items-center border border-border overflow-hidden bg-background shrink-0">
                  <img
                    src={logoUrl}
                    alt=""
                    className="w-full h-full object-cover mix-blend-multiply dark:mix-blend-screen dark:invert"
                  />
                </span>
                <div className="min-w-0">
                  <div className="font-display text-sm tracking-[0.22em] font-bold leading-tight">
                    NEXT-GEN
                    <br />PROGRAMMERS
                  </div>
                  <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-muted-foreground mt-1">
                    800+ MEMBERS · EST 2025
                  </div>
                </div>
              </div>

              <nav className="p-2">
                {QUICK_LINKS.map(({ to, label, icon: Icon }, i) => (
                  <motion.div
                    key={to}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.03, duration: 0.2 }}
                  >
                    <Link
                      to={to}
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-3 px-3 py-2.5 font-mono text-[11px] tracking-[0.22em] uppercase text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                    >
                      <Icon size={14} />
                      <span>{label}</span>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="p-3 border-t border-border grid grid-cols-2 gap-2">
                <a
                  href={DISCORD_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 border border-foreground bg-foreground text-background hover:bg-background hover:text-foreground transition-colors font-mono text-[10px] tracking-[0.22em]"
                >
                  <MessageSquare size={12} /> DISCORD
                </a>
                <a
                  href={REDDIT_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 border border-border hover:border-foreground transition-colors font-mono text-[10px] tracking-[0.22em]"
                >
                  <ExternalLink size={12} /> REDDIT
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
