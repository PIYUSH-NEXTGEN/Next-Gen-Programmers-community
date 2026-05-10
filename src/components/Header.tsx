import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { DISCORD_URL } from "@/lib/links";

export function Header() {
  const { theme, toggle } = useTheme();
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto h-[60px] px-5 md:px-8 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="w-6 h-6 border border-foreground inline-block" />
          <span className="font-display text-sm tracking-[0.22em] font-bold">NEXT-GEN</span>
        </a>
        <div className="flex items-center gap-3">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="w-10 h-10 grid place-items-center border border-border hover:border-foreground transition-colors"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <a href={DISCORD_URL} target="_blank" rel="noreferrer" className="btn-ghost !py-2.5 !px-4 !text-[11px]">
            JOIN SERVER
          </a>
        </div>
      </div>
    </header>
  );
}
