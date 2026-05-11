import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageHeader } from "@/components/PageHeader";
import { serverStats, onlineMembers, recentMessages, channelTree } from "@/data/server";

export const Route = createFileRoute("/server-info")({
  component: ServerInfoPage,
  head: () => ({
    meta: [
      { title: "Server — NEXT-GEN PROGRAMMERS" },
      { name: "description", content: "Live insights into the NEXT-GEN Discord community." },
      { property: "og:title", content: "Server — NEXT-GEN PROGRAMMERS" },
      { property: "og:description", content: "Member count, online status, channel map, and recent activity." },
    ],
  }),
});

function StatBlock({ value, label, sub }: { value: string; label: string; sub?: string }) {
  return (
    <div className="brutal-card p-7">
      <div className="font-display font-bold text-5xl md:text-6xl leading-none mb-3">{value}</div>
      <div className="font-mono text-[11px] tracking-[0.22em] uppercase text-muted-foreground">{label}</div>
      {sub && <div className="font-mono text-[10px] text-muted-foreground mt-2">{sub}</div>}
    </div>
  );
}

function ServerInfoPage() {
  return (
    <main>
      <PageHeader
        index="03"
        label="SERVER"
        title="SERVER OVERVIEW"
        subtitle="Live insights into our community — members, channels, and recent activity."
      />
      <section className="px-5 md:px-8 py-16 md:py-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-12">
          {/* LEFT */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-5">
              <StatBlock value={`${serverStats.members}+`} label="Active Members" />
              <div className="brutal-card p-7 relative">
                <div className="flex items-center gap-2 mb-3">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-foreground opacity-40 animate-ping" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-foreground" />
                  </span>
                  <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground">Online</span>
                </div>
                <div className="font-display font-bold text-5xl md:text-6xl leading-none mb-2">{serverStats.online}</div>
                <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground">Members Online</div>
              </div>
            </div>

            <div className="brutal-card p-7 font-mono text-[12px]">
              <div className="border-b border-border pb-3 mb-3 text-muted-foreground tracking-[0.22em] text-[10px] uppercase">
                Server Stats
              </div>
              <ul className="space-y-2">
                <li className="flex justify-between"><span className="text-muted-foreground">Total Channels</span><span>{serverStats.channels}</span></li>
                <li className="flex justify-between"><span className="text-muted-foreground">Active Categories</span><span>{serverStats.categories}</span></li>
                <li className="flex justify-between"><span className="text-muted-foreground">Uptime</span><span>{serverStats.uptimeDays} days</span></li>
                <li className="flex justify-between"><span className="text-muted-foreground">Member Growth</span><span>↑ {serverStats.growthPct}% this month</span></li>
              </ul>
            </div>

            <div>
              <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-3">
                Online Members
              </div>
              <div className="flex gap-3 overflow-x-auto pb-2 -mx-1 px-1">
                {onlineMembers.map((m) => (
                  <div key={m.id} className="brutal-card flex-shrink-0 p-3 w-[160px] flex items-center gap-3">
                    <div className="relative">
                      <img src={m.avatar} alt={m.name} className="w-9 h-9 rounded-full border border-border bg-muted" loading="lazy" />
                      <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-foreground border-2 border-card" />
                    </div>
                    <span className="font-mono text-[11px] truncate">{m.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="space-y-6">
            <div>
              <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-3">
                Recent Messages
              </div>
              <div className="brutal-card max-h-[400px] overflow-y-auto p-5 font-mono text-[12px] leading-6 space-y-3">
                {recentMessages.map((m, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                  >
                    <span className="text-muted-foreground">[{m.time}]</span>{" "}
                    <span className="font-semibold">{m.user}</span>
                    <div className="pl-7 text-muted-foreground">{m.text}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-3">
                Active Channels
              </div>
              <div className="brutal-card p-5 font-mono text-[12px]">
                {channelTree.map((cat, ci) => (
                  <motion.div
                    key={cat.name}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: ci * 0.06 }}
                    className="mb-3 last:mb-0"
                  >
                    <div className="flex items-center gap-2 font-semibold text-foreground">
                      <span>{cat.emoji}</span>
                      <span className="tracking-[0.15em]">{cat.name}</span>
                    </div>
                    <ul className="mt-1 pl-5 space-y-1 text-muted-foreground">
                      {cat.channels.map((c, idx) => (
                        <li key={c} className="hover:text-foreground transition-colors cursor-default">
                          <span className="opacity-50">{idx === cat.channels.length - 1 ? "└──" : "├──"}</span>{" "}
                          <span className="opacity-60">#</span>{c}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
