import { ArrowUp } from "lucide-react";

export function BackToTop() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="fixed top-[72px] left-1/2 -translate-x-1/2 z-40 h-9 w-9 grid place-items-center border border-border bg-background/70 backdrop-blur-md opacity-50 hover:opacity-100 hover:border-foreground transition-all duration-300 hover:shadow-[0_0_18px_-4px_color-mix(in_oklab,var(--color-foreground)_45%,transparent)]"
    >
      <ArrowUp size={14} />
    </button>
  );
}
