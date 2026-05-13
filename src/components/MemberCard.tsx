import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";
import type { Member, RoleKey } from "@/data/members";

// Role color mapping. Outline + soft tinted background, theme-friendly.
const ROLE_STYLES: Record<RoleKey, { border: string; bg: string; text: string; dot: string }> = {
  Owner: {
    border: "border-blue-500",
    bg: "bg-blue-500/10",
    text: "text-blue-500 dark:text-blue-400",
    dot: "bg-blue-500",
  },
  Admin: {
    border: "border-pink-500",
    bg: "bg-pink-500/10",
    text: "text-pink-500 dark:text-pink-400",
    dot: "bg-pink-500",
  },
  Moderator: {
    border: "border-red-500",
    bg: "bg-red-500/10",
    text: "text-red-500 dark:text-red-400",
    dot: "bg-red-500",
  },
  Junior: {
    border: "border-orange-500",
    bg: "bg-orange-500/10",
    text: "text-orange-500 dark:text-orange-400",
    dot: "bg-orange-500",
  },
  Intermediate: {
    border: "border-purple-500",
    bg: "bg-purple-500/10",
    text: "text-purple-500 dark:text-purple-400",
    dot: "bg-purple-500",
  },
  Advanced: {
    border: "border-yellow-500",
    bg: "bg-yellow-500/10",
    text: "text-yellow-500 dark:text-yellow-400",
    dot: "bg-yellow-500",
  },
};

function RoleBadge({ role }: { role: RoleKey }) {
  const s = ROLE_STYLES[role];
  return (
    <span
      className={`inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.24em] uppercase px-2.5 py-1 border ${s.border} ${s.bg} ${s.text} rounded-sm`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${s.dot}`} />
      {role}
    </span>
  );
}

export function MemberCard({ member, index }: { member: Member; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: (index % 6) * 0.05 }}
      className="brutal-card p-8 group flex flex-col items-center text-center"
    >
      <div className="relative mb-5">
        <img
          src={member.avatar}
          alt={member.name}
          className="w-24 h-24 rounded-full border border-border bg-muted transition-transform duration-300 group-hover:scale-110"
          loading="lazy"
        />
      </div>

      <h3 className="font-display font-bold text-xl tracking-wide mb-1">
        {member.name}
      </h3>

      <div className="font-mono text-[11px] tracking-[0.18em] text-muted-foreground mb-4">
        {member.username}
      </div>

      <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
        {member.roles.map((r) => (
          <RoleBadge key={r} role={r} />
        ))}
      </div>

      <div className="flex gap-4 mt-auto pt-4 border-t border-border w-full justify-center">
        {member.socials.github && (
          <a
            href={member.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted-foreground hover:text-foreground transition-all duration-200 hover:-translate-y-0.5"
          >
            <Github size={18} />
          </a>
        )}
        {member.socials.linkedin && (
          <a
            href={member.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted-foreground hover:text-foreground transition-all duration-200 hover:-translate-y-0.5"
          >
            <Linkedin size={18} />
          </a>
        )}
        {member.socials.twitter && (
          <a
            href={member.socials.twitter}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="text-muted-foreground hover:text-foreground transition-all duration-200 hover:-translate-y-0.5"
          >
            <Twitter size={18} />
          </a>
        )}
      </div>
    </motion.article>
  );
}
