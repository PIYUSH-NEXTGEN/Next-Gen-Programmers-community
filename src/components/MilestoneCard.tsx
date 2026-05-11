import { motion } from "framer-motion";
import { Check, Loader, Circle } from "lucide-react";
import type { Milestone } from "@/data/roadmap";

const STATUS_LABEL: Record<Milestone["status"], string> = {
  completed: "COMPLETED",
  "in-progress": "IN PROGRESS",
  planned: "PLANNED",
};

export function MilestoneCard({ milestone, index }: { milestone: Milestone; index: number }) {
  const Icon = milestone.status === "completed" ? Check : milestone.status === "in-progress" ? Loader : Circle;
  const isLeft = index % 2 === 0;
  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative md:w-1/2 ${isLeft ? "md:pr-12" : "md:pl-12 md:ml-auto"}`}
    >
      {/* Timeline dot */}
      <div className={`hidden md:flex absolute top-7 w-4 h-4 items-center justify-center
        ${isLeft ? "right-[-9px]" : "left-[-9px]"}
        ${milestone.status === "completed" ? "bg-foreground" : "bg-background"}
        border-2 border-foreground rounded-full`}
      />
      <div className="brutal-card p-7">
        <div className="flex items-center justify-between mb-4">
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
            {milestone.quarter}
          </span>
          <span className={`flex items-center gap-1.5 font-mono text-[10px] tracking-[0.22em] uppercase px-2 py-1 border
            ${milestone.status === "completed" ? "border-foreground bg-foreground text-background" :
              milestone.status === "in-progress" ? "border-foreground" : "border-border text-muted-foreground"}`}>
            <Icon size={11} className={milestone.status === "in-progress" ? "animate-spin" : ""} />
            {STATUS_LABEL[milestone.status]}
          </span>
        </div>
        <h3 className="font-display font-bold text-2xl tracking-tight mb-5">{milestone.title}</h3>
        <ul className="space-y-2 font-mono text-[13px] mb-5">
          {milestone.goals.map((g) => (
            <li key={g} className="flex items-start gap-2 text-muted-foreground">
              <span className="text-foreground mt-0.5">
                {milestone.status === "completed" ? "✓" : milestone.status === "in-progress" ? "⏳" : "○"}
              </span>
              <span>{g}</span>
            </li>
          ))}
        </ul>
        {milestone.status !== "planned" && (
          <div>
            <div className="flex justify-between font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground mb-2">
              <span>Progress</span>
              <span>{milestone.progress}%</span>
            </div>
            <div className="h-1 bg-border overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${milestone.progress}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 + index * 0.1, ease: "easeOut" }}
                className="h-full bg-foreground"
              />
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
