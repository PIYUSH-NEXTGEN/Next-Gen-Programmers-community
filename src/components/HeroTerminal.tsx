import { useEffect, useState } from "react";

const LINES = [
  "> initializing nextgen...",
  "> loading 800+ members",
  "> channels: active",
  "> status: OPERATIONAL",
];

export function HeroTerminal({ startDelay = 0 }: { startDelay?: number }) {
  const [shown, setShown] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => {
      let i = 0;
      const tick = () => {
        i++;
        setShown(i);
        if (i < LINES.length) setTimeout(tick, 480);
      };
      tick();
    }, startDelay);
    return () => clearTimeout(t);
  }, [startDelay]);

  return (
    <div className="brutal-card font-mono text-sm">
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <span className="w-2.5 h-2.5 border border-muted-foreground" />
        <span className="w-2.5 h-2.5 border border-muted-foreground" />
        <span className="w-2.5 h-2.5 border border-muted-foreground" />
        <span className="ml-3 text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
          /bin/nextgen
        </span>
      </div>
      <div className="p-6 leading-7 min-h-[200px]">
        {LINES.slice(0, shown).map((l, i) => (
          <div
            key={i}
            className={
              l.includes("OPERATIONAL")
                ? "text-foreground font-bold"
                : "text-muted-foreground"
            }
          >
            {l}
          </div>
        ))}
        <span className="cursor-blink">▌</span>
      </div>
    </div>
  );
}
