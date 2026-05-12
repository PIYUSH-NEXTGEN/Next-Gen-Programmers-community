import { useEffect, useState } from "react";

type Line = { text: string; kind?: "cmd" | "ok" | "warn" | "info" | "dim" | "ascii" };

const LINES: Line[] = [
  { text: "Last login: Fri Jul  4 09:42:11 on ttys001", kind: "dim" },
  { text: "$ ssh nextgen@discord.gg/CSmrA5fbx9", kind: "cmd" },
  { text: "→ handshake ............ ok", kind: "ok" },
  { text: "→ auth ................. verified", kind: "ok" },
  { text: "$ ./boot --community nextgen", kind: "cmd" },
  { text: "[boot] mounting /channels ......... ok  (35+)", kind: "ok" },
  { text: "[boot] loading /categories ........ ok  (07)", kind: "ok" },
  { text: "[boot] syncing /members ........... 800+", kind: "ok" },
  { text: "[boot] online .................... 234", kind: "info" },
  { text: "$ cat motd.txt", kind: "cmd" },
  { text: "  ╔════════════════════════════════════╗", kind: "ascii" },
  { text: "  ║   NEXT-GEN PROGRAMMERS · v2025.07  ║", kind: "ascii" },
  { text: "  ║   built with coffee & curiosity    ║", kind: "ascii" },
  { text: "  ╚════════════════════════════════════╝", kind: "ascii" },
  { text: "$ status", kind: "cmd" },
  { text: "● OPERATIONAL — ready to ship.", kind: "ok" },
];

const COLORS: Record<NonNullable<Line["kind"]>, string> = {
  cmd: "text-foreground",
  ok: "text-foreground/80",
  warn: "text-foreground/70 italic",
  info: "text-muted-foreground",
  dim: "text-muted-foreground/70",
  ascii: "text-foreground/70",
};

export function HeroTerminal({ startDelay = 0 }: { startDelay?: number }) {
  const [shown, setShown] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => {
      let i = 0;
      const tick = () => {
        i++;
        setShown(i);
        if (i < LINES.length) {
          const next = LINES[i];
          const delay =
            next?.kind === "cmd" ? 360 :
            next?.kind === "ascii" ? 90 :
            next?.kind === "dim" ? 240 : 220;
          setTimeout(tick, delay);
        }
      };
      tick();
    }, startDelay);
    return () => clearTimeout(t);
  }, [startDelay]);

  return (
    <div className="brutal-card font-mono text-[12.5px] md:text-[13px] shadow-[0_20px_60px_-20px_rgba(0,0,0,0.4)]">
      {/* title bar */}
      <div className="flex items-center gap-2 border-b border-border px-3.5 py-2.5 bg-muted/40">
        <span className="w-2.5 h-2.5 rounded-full border border-foreground/40" />
        <span className="w-2.5 h-2.5 rounded-full border border-foreground/40" />
        <span className="w-2.5 h-2.5 rounded-full border border-foreground/40" />
        <span className="ml-auto text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
          nextgen@discord — /bin/zsh — 80×24
        </span>
      </div>

      {/* terminal body */}
      <div className="relative px-5 py-4 leading-[1.7] min-h-[340px] overflow-hidden">
        {/* scanlines */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, currentColor 0 1px, transparent 1px 3px)",
          }}
        />
        <div className="relative">
          {LINES.slice(0, shown).map((l, i) => (
            <div key={i} className={`whitespace-pre ${COLORS[l.kind ?? "info"]}`}>
              {l.text}
            </div>
          ))}
          <div className="flex items-center gap-2 mt-1 text-foreground">
            <span className="text-muted-foreground">nextgen ~ %</span>
            <span className="cursor-blink">▌</span>
          </div>
        </div>
      </div>

      {/* status footer */}
      <div className="flex items-center justify-between border-t border-border px-3.5 py-2 text-[10px] tracking-[0.25em] uppercase text-muted-foreground">
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-foreground rounded-full animate-pulse" />
          live · 234 online
        </span>
        <span>utf-8 · zsh · main</span>
      </div>
    </div>
  );
}
