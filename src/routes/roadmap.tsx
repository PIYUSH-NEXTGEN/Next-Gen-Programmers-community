import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { MilestoneCard } from "@/components/MilestoneCard";
import { roadmap } from "@/data/roadmap";

export const Route = createFileRoute("/roadmap")({
  component: RoadmapPage,
  head: () => ({
    meta: [
      { title: "Roadmap — NEXT-GEN PROGRAMMERS" },
      { name: "description", content: "Our vision: community goals and upcoming features." },
      { property: "og:title", content: "Roadmap — NEXT-GEN PROGRAMMERS" },
      { property: "og:description", content: "Quarterly milestones from foundation to scale." },
    ],
  }),
});

function RoadmapPage() {
  return (
    <main>
      <PageHeader
        index="04"
        label="ROADMAP"
        title="OUR VISION"
        subtitle="Community goals and the road from 800 to 2000+ members."
      />
      <section className="px-5 md:px-8 py-16 md:py-24">
        <div className="max-w-5xl mx-auto relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />
          <div className="space-y-12 md:space-y-20">
            {roadmap.map((m, i) => (
              <MilestoneCard key={m.id} milestone={m} index={i} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
