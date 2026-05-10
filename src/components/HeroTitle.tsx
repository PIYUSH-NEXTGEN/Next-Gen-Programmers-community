const LINES = ["NEXT-GEN", "PROGRAMMERS"];

export function HeroTitle() {
  let idx = 0;
  return (
    <h1 className="font-display font-bold leading-[0.92] tracking-tight text-[36px] md:text-[64px] lg:text-[84px]">
      {LINES.map((line, li) => (
        <div key={li} className="block">
          {line.split("").map((ch) => {
            const delay = idx++ * 60;
            return (
              <span
                key={`${li}-${idx}`}
                className="crt-letter"
                style={{ animationDelay: `${delay}ms` }}
              >
                {ch === " " ? "\u00A0" : ch}
              </span>
            );
          })}
        </div>
      ))}
    </h1>
  );
}

export const HERO_TITLE_DURATION =
  ("NEXT-GEN".length + "PROGRAMMERS".length) * 60 + 700;
