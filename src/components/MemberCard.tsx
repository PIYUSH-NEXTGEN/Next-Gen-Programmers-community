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
      className="brutal-card p-7 group flex flex-col items-center text-center"
    >
      <div className="relative mb-5">
        <img
          src={member.avatar}
          alt={member.name}
          className="w-20 h-20 rounded-full border border-border bg-muted transition-transform duration-300 group-hover:scale-110"
          loading="lazy"
        />
      </div>
      <h3 className="font-display font-bold text-lg tracking-wide mb-1">{member.name}</h3>
      <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-foreground/80 group-hover:underline underline-offset-4 mb-1">
        {member.role}
      </div>
      <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-muted-foreground mb-4">
        {member.expertise}
      </div>
      <p className="font-mono text-[12px] text-muted-foreground leading-relaxed mb-5 max-w-[260px]">
        {member.bio}
      </p>
      <div className="flex gap-3 mt-auto pt-3 border-t border-border w-full justify-center">
        {member.socials.github && (
          <a href={member.socials.github} aria-label="GitHub" className="text-muted-foreground hover:text-foreground transition-colors">
            <Github size={16} />
          </a>
        )}
        {member.socials.linkedin && (
          <a href={member.socials.linkedin} aria-label="LinkedIn" className="text-muted-foreground hover:text-foreground transition-colors">
            <Linkedin size={16} />
          </a>
        )}
        {member.socials.twitter && (
          <a href={member.socials.twitter} aria-label="Twitter" className="text-muted-foreground hover:text-foreground transition-colors">
            <Twitter size={16} />
          </a>
        )}
      </div>
    </motion.article>
  );
}
