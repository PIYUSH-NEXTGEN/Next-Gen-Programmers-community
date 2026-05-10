const TITLE = "NEXT-GEN PROGRAMMERS";

export function HeroTitle() {
  return (
    <h1 className="font-display title-breathe text-[16vw] md:text-[11vw] leading-[0.85] tracking-tight text-center">
      {TITLE.split("").map((ch, i) => (
        <span
          key={i}
          className="crt-letter"
          style={{ animationDelay: `${i * 70}ms` }}
        >
          {ch === " " ? "\u00A0" : ch}
        </span>
      ))}
    </h1>
  );
}
