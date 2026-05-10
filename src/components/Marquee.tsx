const ITEMS = [
  "800+ MEMBERS",
  "10+ CATEGORIES",
  "ACTIVE DAILY",
  "ALL SKILL LEVELS",
  "CODE · BUILD · SHIP",
];

export function Marquee() {
  const loop = [...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS];
  return (
    <div className="marquee-wrapper border-y border-border py-4 overflow-hidden bg-background">
      <div className="marquee-track">
        {loop.map((it, i) => (
          <span
            key={i}
            className="font-mono text-xs md:text-sm tracking-[0.28em] px-6 whitespace-nowrap text-foreground/80"
          >
            {it} <span className="text-muted-foreground mx-2">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
