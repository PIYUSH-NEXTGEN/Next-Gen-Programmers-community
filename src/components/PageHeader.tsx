export function PageHeader({
  index,
  label,
  title,
  subtitle,
}: {
  index: string;
  label: string;
  title: string;
  subtitle: string;
}) {
  return (
    <header className="relative px-5 md:px-8 pt-20 md:pt-28 pb-14 border-b border-border overflow-hidden">
      <div className="dot-grid" />
      <div className="relative max-w-7xl mx-auto">
        <div className="font-mono text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-4">
          [ {index} / {label} ]
        </div>
        <h1 className="font-display font-bold text-5xl md:text-7xl tracking-tight leading-[0.92] mb-5">
          {title}
        </h1>
        <p className="font-mono text-sm md:text-base text-muted-foreground max-w-2xl">
          {subtitle}
        </p>
      </div>
    </header>
  );
}
