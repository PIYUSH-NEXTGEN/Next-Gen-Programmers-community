import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHeader } from "@/components/PageHeader";
import { MemberCard } from "@/components/MemberCard";
import { members, type RoleKey } from "@/data/members";

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

const ROLE_PRIORITY: Record<RoleKey, number> = {
  Owner: 0,
  Admin: 1,
  Moderator: 2,
  Advanced: 3,
  Intermediate: 4,
  Junior: 5,
};

function primaryRank(roles: RoleKey[]) {
  return Math.min(...roles.map((r) => ROLE_PRIORITY[r]));
}

type Filter = "All" | "Owner" | "Admin" | "Moderator";

const FILTERS: Filter[] = ["All", "Owner", "Admin", "Moderator"];

const FILTER_STYLES: Record<Filter, string> = {
  All: "border-foreground/40 hover:border-foreground",
  Owner: "border-blue-500 text-blue-500 dark:text-blue-400 hover:bg-blue-500/10",
  Admin: "border-pink-500 text-pink-500 dark:text-pink-400 hover:bg-pink-500/10",
  Moderator: "border-red-500 text-red-500 dark:text-red-400 hover:bg-red-500/10",
};

const FILTER_ACTIVE: Record<Filter, string> = {
  All: "bg-foreground text-background",
  Owner: "bg-blue-500/15 text-blue-500 dark:text-blue-400",
  Admin: "bg-pink-500/15 text-pink-500 dark:text-pink-400",
  Moderator: "bg-red-500/15 text-red-500 dark:text-red-400",
};

function MembersPage() {
  const [filter, setFilter] = useState<Filter>("All");

  const sorted = useMemo(
    () =>
      [...members].sort((a, b) => {
        const r = primaryRank(a.roles) - primaryRank(b.roles);
        return r !== 0 ? r : a.id - b.id;
      }),
    [],
  );

  const visible = useMemo(
    () => (filter === "All" ? sorted : sorted.filter((m) => m.roles.includes(filter))),
    [sorted, filter],
  );

  return (
    <main>
      <PageHeader
        index="01"
        label="MEMBERS"
        title="MEET THE CORE MEMBERS"
        subtitle="The core team and contributors keeping NEXT-GEN an active community."
      />
      <section className="px-5 md:px-8 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 mb-10">
            {FILTERS.map((f) => {
              const active = filter === f;
              return (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`font-mono text-[11px] tracking-[0.24em] uppercase px-4 py-2 border rounded-sm transition-colors ${
                    active ? FILTER_ACTIVE[f] : FILTER_STYLES[f]
                  } ${active ? "" : "border"}`}
                >
                  {f}
                </button>
              );
            })}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {visible.map((m, i) => (
              <MemberCard key={m.id} member={m} index={i} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
