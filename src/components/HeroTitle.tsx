const LINES = ["NEXT-GEN", "PROGRAMMERS"];

export function HeroTitle() {
  let idx = 0;
  return (
    <h1 className="font-display font-bold leading-[1.05] tracking-[-0.02em] text-[40px] sm:text-[56px] md:text-[72px] lg:text-[84px]">
      {LINES.map((line, li) => (
        <div key={li} className="block whitespace-nowrap">
          {line.split("").map((ch) => {
            const delay = idx++ * 60;
            return (
              <span
                key={`${li}-${idx}`}
                className="crt-letter"
                style={{ animationDelay: `${delay}ms` }}
              >
                {ch}
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
