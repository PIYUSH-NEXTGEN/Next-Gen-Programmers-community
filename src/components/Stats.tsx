import { motion } from "framer-motion";

const STATS = [
  { n: "800+", label: "Active Members" },
  { n: "10+", label: "Programming Languages" },
  { n: "5+", label: "Specialized Domains" },
  { n: "24/7", label: "Community Support" },
];

export function Stats() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
      {STATS.map((s, i) => (
        <motion.div
          key={s.label}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45, delay: i * 0.08 }}
          className="brutal-card p-7 md:p-9"
        >
          <div className="font-display font-bold text-5xl md:text-6xl leading-none mb-3">
            {s.n}
          </div>
          <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground">
            {s.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
