const ITEMS = [
  "800+ MEMBERS",
  "ACTIVE DAILY",
  "CODE. BUILD. SHIP.",
  "OPEN TO ALL LEVELS",
  "NEXT-GEN PROGRAMMERS",
];

export function Marquee() {
  const loop = [...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS];
  return (
    <div className="marquee-wrapper border-y border-white/15 py-5 overflow-hidden bg-black">
      <div className="marquee-track">
        {loop.map((it, i) => (
          <span
            key={i}
            className="font-mono text-sm md:text-base tracking-[0.25em] px-8 whitespace-nowrap text-white/90"
          >
            {it} <span className="text-white/30 mx-2">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
