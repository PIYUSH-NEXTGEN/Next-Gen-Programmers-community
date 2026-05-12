import { DISCORD_URL, REDDIT_URL } from "@/lib/links";

export function Footer() {
  return (
    <footer className="border-t border-border py-12 px-5 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="flex items-center gap-2.5">
          <span className="w-5 h-5 border border-foreground inline-block" />
          <span className="font-display text-xs tracking-[0.22em] font-bold">NEXT-GEN PROGRAMMERS</span>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground">
          <a href={DISCORD_URL} target="_blank" rel="noreferrer" className="hover:text-foreground">Discord</a>
          <a href={REDDIT_URL} target="_blank" rel="noreferrer" className="hover:text-foreground">Reddit</a>
          <span>EST 4 JULY 2025</span>
          <span>© 2026</span>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-6 font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
        Built by programmers, for programmers.
      </div>
    </footer>
  );
}
