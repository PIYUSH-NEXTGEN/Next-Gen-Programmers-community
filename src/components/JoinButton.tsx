import { DISCORD_URL } from "@/lib/links";

export function JoinButton({
  size = "md",
  variant = "primary",
  label,
  href,
}: {
  size?: "md" | "lg";
  variant?: "primary" | "ghost";
  label?: string;
  href?: string;
}) {
  const cls = variant === "ghost" ? "btn-ghost" : "btn-brutal";
  return (
    <a
      href={href ?? DISCORD_URL}
      target="_blank"
      rel="noreferrer"
      className={cls}
      style={size === "lg" ? { padding: "1.2rem 2.2rem", fontSize: "0.95rem" } : undefined}
    >
      {label ?? "JOIN DISCORD"} →
    </a>
  );
}
