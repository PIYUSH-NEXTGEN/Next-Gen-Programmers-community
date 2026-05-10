import { motion } from "framer-motion";

const CATEGORIES: { name: string; emoji: string; channels: string[] }[] = [
  { name: "ENTRANCE", emoji: "📌", channels: ["onboarding", "how-to-start", "rules", "announcements"] },
  { name: "GENERAL", emoji: "💬", channels: ["introduction", "general-chat", "poll", "news-memes", "partner-servers", "challenges", "learning-resources", "find-teammates", "ask-questions"] },
  { name: "NXT-GEN CAMP", emoji: "🎮", channels: ["underworld", "chai-tapri", "through-the-lens", "ai-abuse", "social-networking", "ranking", "departure"] },
  { name: "SPECIALIZED DOMAINS", emoji: "🚀", channels: ["app-dev", "cyber-security", "data-science", "devops-cloud", "dsa", "linux", "webdev"] },
  { name: "PROGRAMMING LANGUAGES", emoji: "🐍", channels: ["c-and-cpp", "java", "javascript", "python", "rust", "zig"] },
  { name: "LEARNING & RESOURCES", emoji: "📚", channels: ["dsk-questions", "projects-showcase", "dev-advice", "server-suggestions"] },
  { name: "VOICE CHANNELS", emoji: "🎤", channels: ["Pair Programming", "Tech Discussions", "SIDE QUESTS", "Study room", "Cyber Security", "Underworld"] },
  { name: "MACHINE LEARNING", emoji: "🤖", channels: ["machine-learning", "resources-ml", "ML STUDY"] },
];

export function Channels() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {CATEGORIES.map((cat, ci) => (
        <motion.div
          key={cat.name}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45, delay: (ci % 3) * 0.08 }}
          className="brutal-card p-6 group"
        >
          <div className="flex items-center justify-between border-b border-border pb-4 mb-4">
            <div className="flex items-center gap-2.5">
              <span className="text-base">{cat.emoji}</span>
              <span className="font-display font-bold text-[13px] tracking-[0.18em]">
                {cat.name}
              </span>
            </div>
            <span className="font-mono text-[10px] text-muted-foreground">
              {String(cat.channels.length).padStart(2, "0")}
            </span>
          </div>
          <ul className="space-y-1.5 font-mono text-[13px]">
            {cat.channels.map((c) => (
              <li
                key={c}
                className="flex items-center gap-1.5 text-muted-foreground group-hover:text-foreground transition-colors"
              >
                <span className="opacity-50">#</span>
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
}
