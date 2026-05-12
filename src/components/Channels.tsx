import { motion } from "framer-motion";
import {
  Pin,
  MessagesSquare,
  Gamepad2,
  Rocket,
  Code2,
  BookOpen,
  Mic,
  Brain,
  type LucideIcon,
} from "lucide-react";

const CATEGORIES: { name: string; Icon: LucideIcon; channels: string[] }[] = [
  { name: "ENTRANCE", Icon: Pin, channels: ["onboarding", "how-to-start", "rules", "announcements"] },
  { name: "GENERAL", Icon: MessagesSquare, channels: ["introduction", "general-chat", "poll", "news-meme", "partner-servers", "challenges", "learning-resources", "find-teammates", "ask-questions", "project-showcase", "dev-advice", "server-suggestions"] },
  { name: "VOICE CHANNELS", Icon: Mic, channels: ["Pair Programming [00/03]", "Tech Discussions", "Side Quests", "Study Room", "Cyber Security"] },
  { name: "MACHINE LEARNING", Icon: Brain, channels: ["machine-learning", "resources-ml", "ml-study-vc"] },
  { name: "SPECIALIZED DOMAINS", Icon: Rocket, channels: ["app-dev", "cyber-security", "data-science", "devops-cloud", "dsa", "linux", "webdev"] },
  { name: "PROGRAMMING LANGUAGES", Icon: Code2, channels: ["c-and-cpp", "java", "javascript", "python", "rust", "zig"] },
  { name: "NEXT-GEN CAMP", Icon: Gamepad2, channels: ["chai-tapri", "through-the-lens", "ai-abuse", "social-networking", "ranking", "departure"] },
];

export function Channels() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {CATEGORIES.map((cat, ci) => {
        const Icon = cat.Icon;
        return (
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
                <Icon size={15} className="text-foreground/80 group-hover:text-foreground transition-colors" />
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
        );
      })}
    </div>
  );
}
