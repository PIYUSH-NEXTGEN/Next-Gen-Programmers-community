import { useEffect, useState } from "react";

export function Typewriter({
  text,
  delay = 0,
  speed = 35,
  className = "",
}: {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
}) {
  const [i, setI] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    if (i >= text.length) return;
    const t = setTimeout(() => setI(i + 1), speed);
    return () => clearTimeout(t);
  }, [i, started, text, speed]);

  return (
    <span className={className}>
      {text.slice(0, i)}
      <span className="cursor-blink">_</span>
    </span>
  );
}
