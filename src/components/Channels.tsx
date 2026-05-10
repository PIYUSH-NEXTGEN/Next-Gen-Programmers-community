import { motion } from "framer-motion";

const CATEGORIES = [
  {
    name: "GENERAL",
    channels: ["welcome", "announcements", "introductions"],
  },
  {
    name: "PROGRAMMING",
    channels: ["python", "javascript", "web-dev", "open-source"],
  },
  {
    name: "RESOURCES",
    channels: ["tools", "tutorials", "projects"],
  },
];

export function Channels() {
  return (
    <div className="grid md:grid-cols-3 gap-10">
      {CATEGORIES.map((cat, ci) => (
        <motion.div
          key={cat.name}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: ci * 0.15 }}
          className="border border-white/15 bg-[#070707] p-6 font-mono"
        >
          <div className="flex items-center gap-2 text-white text-sm tracking-[0.2em] mb-5">
            <span>📁</span>
            <span>{cat.name}</span>
          </div>
          <ul className="space-y-2 text-sm">
            {cat.channels.map((c, i) => {
              const last = i === cat.channels.length - 1;
              return (
                <motion.li
                  key={c}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: ci * 0.15 + i * 0.08, duration: 0.35 }}
                  className="group flex items-center gap-2 text-white/55 hover:text-white transition-colors"
                >
                  <span className="text-white/30">
                    {last ? "└──" : "├──"}
                  </span>
                  <span>#</span>
                  <span>{c}</span>
                  <span className="cursor-blink opacity-0 group-hover:opacity-100">
                    ▌
                  </span>
                </motion.li>
              );
            })}
          </ul>
        </motion.div>
      ))}
    </div>
  );
}
