import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PageHeader } from "@/components/PageHeader";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export const Route = createFileRoute("/projects")({
  component: ProjectsPage,
  head: () => ({
    meta: [
      { title: "Projects — NEXT-GEN PROGRAMMERS" },
      { name: "description", content: "Projects shipped by the NEXT-GEN community." },
      { property: "og:title", content: "Projects — NEXT-GEN PROGRAMMERS" },
      { property: "og:description", content: "Community-built projects across web, mobile, devops, data, and games." },
    ],
  }),
});

const FILTERS = [
  { id: "all", label: "All" },
  { id: "web", label: "Web" },
  { id: "mobile", label: "Mobile" },
  { id: "devops", label: "DevOps" },
  { id: "data", label: "Data" },
  { id: "games", label: "Games" },
] as const;

type FilterId = (typeof FILTERS)[number]["id"];

function ProjectsPage() {
  const [filter, setFilter] = useState<FilterId>("all");
  const filtered = useMemo(
    () => (filter === "all" ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  );

  return (
    <main>
      <PageHeader
        index="02"
        label="PROJECTS"
        title="COMMUNITY PROJECTS"
        subtitle="800+ developers, countless creations. Open source, side projects, and shipped products."
      />
      <section className="px-5 md:px-8 py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-1 mb-10 border-b border-border">
            {FILTERS.map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={`relative font-mono text-[11px] tracking-[0.22em] uppercase px-4 py-3 transition-colors
                  ${filter === f.id ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
              >
                {f.label}
                {filter === f.id && (
                  <motion.span
                    layoutId="filter-underline"
                    className="absolute left-2 right-2 -bottom-px h-0.5 bg-foreground"
                  />
                )}
              </button>
            ))}
          </div>
          <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <AnimatePresence mode="popLayout">
              {filtered.map((p, i) => (
                <ProjectCard key={p.id} project={p} index={i} />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
