export function JoinButton({ size = "md" }: { size?: "md" | "lg" }) {
  return (
    <a
      href="#"
      className="btn-brutal"
      style={size === "lg" ? { padding: "1.4rem 2.6rem", fontSize: "1rem" } : undefined}
    >
      JOIN THE SERVER →
    </a>
  );
}
