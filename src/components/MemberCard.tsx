import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";
import type { Member } from "@/data/members";

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

      <span className="inline-flex items-center font-mono text-[10px] tracking-[0.28em] uppercase px-3 py-1 mb-6 border border-foreground/30 bg-foreground/[0.04] text-foreground/90 rounded-sm">
        {member.role}
      </span>

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
