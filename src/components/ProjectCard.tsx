import { motion } from "framer-motion";
import { Github, ExternalLink, Star, GitFork } from "lucide-react";
import type { Project } from "@/data/projects";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4, delay: (index % 6) * 0.04 }}
      className="brutal-card group overflow-hidden flex flex-col"
    >
      <div className="relative aspect-[3/2] overflow-hidden border-b border-border bg-muted">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
        />
        <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          {project.githubLink && (
            <a href={project.githubLink} target="_blank" rel="noreferrer" aria-label="GitHub"
              className="w-8 h-8 grid place-items-center bg-background border border-border hover:border-foreground">
              <Github size={14} />
            </a>
          )}
          {project.liveLink && (
            <a href={project.liveLink} target="_blank" rel="noreferrer" aria-label="Live"
              className="w-8 h-8 grid place-items-center bg-background border border-border hover:border-foreground">
              <ExternalLink size={14} />
            </a>
          )}
        </div>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-display font-bold text-xl tracking-tight mb-2">{project.title}</h3>
        <p className="font-mono text-[12px] text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.map((t) => (
            <span key={t} className="font-mono text-[10px] tracking-[0.15em] uppercase px-2 py-1 border border-border text-muted-foreground">
              {t}
            </span>
          ))}
        </div>
        <div className="mt-auto flex items-center justify-between pt-4 border-t border-border">
          <div className="flex -space-x-2">
            {project.contributors.slice(0, 4).map((c) => (
              <img key={c.name} src={c.avatar} alt={c.name}
                className="w-7 h-7 rounded-full border border-border bg-muted" loading="lazy" />
            ))}
          </div>
          <div className="flex items-center gap-3 font-mono text-[11px] text-muted-foreground">
            <span className="flex items-center gap-1"><Star size={12} /> {project.stats.stars}</span>
            <span className="flex items-center gap-1"><GitFork size={12} /> {project.stats.forks}</span>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
