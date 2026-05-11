import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { PageHeader } from "@/components/PageHeader";
import { FAQAccordion } from "@/components/FAQAccordion";
import { faqs, type FAQ } from "@/data/faqs";

export const Route = createFileRoute("/faq")({
  component: FAQPage,
  head: () => ({
    meta: [
      { title: "FAQ — NEXT-GEN PROGRAMMERS" },
      { name: "description", content: "Frequently asked questions about NEXT-GEN PROGRAMMERS." },
      { property: "og:title", content: "FAQ — NEXT-GEN PROGRAMMERS" },
      { property: "og:description", content: "Joining, channels, projects, moderation — answered." },
    ],
  }),
});

const CATEGORIES: { id: "all" | FAQ["category"]; label: string }[] = [
  { id: "all", label: "All" },
  { id: "general", label: "General" },
  { id: "discord", label: "Discord" },
  { id: "projects", label: "Projects" },
  { id: "getting-started", label: "Getting Started" },
  { id: "moderation", label: "Moderation" },
];

function FAQPage() {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState<(typeof CATEGORIES)[number]["id"]>("all");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return faqs.filter((f) => {
      if (cat !== "all" && f.category !== cat) return false;
      if (!q) return true;
      return f.question.toLowerCase().includes(q) || f.answer.toLowerCase().includes(q);
    });
  }, [query, cat]);

  return (
    <main>
      <PageHeader
        index="05"
        label="FAQ"
        title="FREQUENTLY ASKED"
        subtitle="Get answers to common questions about the community, channels, and how to get involved."
      />
      <section className="px-5 md:px-8 py-12 md:py-16">
        <div className="max-w-3xl mx-auto">
          {/* Search */}
          <div className="relative mb-6">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search FAQs..."
              className="w-full bg-card border border-border focus:border-foreground outline-none pl-11 pr-11 py-4 font-mono text-sm placeholder:text-muted-foreground transition-colors"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                aria-label="Clear"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-7 h-7 grid place-items-center text-muted-foreground hover:text-foreground"
              >
                <X size={14} />
              </button>
            )}
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-1 mb-8 border-b border-border">
            {CATEGORIES.map((c) => (
              <button
                key={c.id}
                onClick={() => setCat(c.id)}
                className={`relative font-mono text-[11px] tracking-[0.22em] uppercase px-3 py-3 transition-colors
                  ${cat === c.id ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
              >
                {c.label}
                {cat === c.id && (
                  <motion.span
                    layoutId="faq-underline"
                    className="absolute left-2 right-2 -bottom-px h-0.5 bg-foreground"
                  />
                )}
              </button>
            ))}
          </div>

          <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground mb-4">
            Showing {filtered.length} of {faqs.length}
          </div>

          <div className="space-y-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((f) => (
                <motion.div
                  key={f.id}
                  layout
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.25 }}
                >
                  <FAQAccordion faq={f} />
                </motion.div>
              ))}
            </AnimatePresence>
            {filtered.length === 0 && (
              <div className="brutal-card p-10 text-center font-mono text-sm text-muted-foreground">
                No results. Try a different search.
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
