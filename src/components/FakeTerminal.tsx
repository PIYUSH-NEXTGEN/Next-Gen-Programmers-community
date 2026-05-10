import { useEffect, useState } from "react";

const LINES = [
  "> initializing community...",
  "> loading members: 800+",
  "> channels: active",
  "> status: OPEN",
  "> welcome to NEXT-GEN PROGRAMMERS_",
];

export function FakeTerminal() {
  const [shown, setShown] = useState(0);

  useEffect(() => {
    let i = 0;
    let timer: ReturnType<typeof setTimeout>;
    const tick = () => {
      i = (i + 1) % (LINES.length + 2);
      setShown(i > LINES.length ? 0 : i);
      timer = setTimeout(tick, i === 0 ? 800 : 900);
    };
    timer = setTimeout(tick, 700);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="border border-white/20 bg-[#0a0a0a]">
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2">
        <span className="w-3 h-3 border border-white/40" />
        <span className="w-3 h-3 border border-white/40" />
        <span className="w-3 h-3 border border-white/40" />
        <span className="ml-3 font-mono text-[10px] tracking-[0.3em] text-white/50 uppercase">
          /bin/community
        </span>
      </div>
      <div className="p-5 font-mono text-xs md:text-sm leading-7 min-h-[200px]">
        {LINES.slice(0, shown).map((l, i) => (
          <div key={i} className="text-white/85">
            {l}
          </div>
        ))}
        <span className="cursor-blink text-white">▌</span>
      </div>
    </div>
  );
}
