import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { MemberCard } from "@/components/MemberCard";
import { members } from "@/data/members";

export const Route = createFileRoute("/members")({
  component: MembersPage,
  head: () => ({
    meta: [
      { title: "Members — NEXT-GEN PROGRAMMERS" },
      { name: "description", content: "Meet the builders keeping NEXT-GEN PROGRAMMERS running." },
      { property: "og:title", content: "Members — NEXT-GEN PROGRAMMERS" },
      { property: "og:description", content: "Meet the core team and contributors." },
    ],
  }),
});

function MembersPage() {
  return (
    <main>
      <PageHeader
        index="01"
        label="MEMBERS"
        title="MEET THE CORE MEMBERS"
        subtitle="The core team and contributors keeping NEXT-GEN an active community."
      />
      <section className="px-5 md:px-8 py-16 md:py-24">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {members.map((m, i) => (
            <MemberCard key={m.id} member={m} index={i} />
          ))}
        </div>
      </section>
    </main>
  );
}
