export type Status = "completed" | "in-progress" | "planned";

export type Milestone = {
  id: number;
  quarter: string;
  title: string;
  status: Status;
  progress: number;
  goals: string[];
};

export const roadmap: Milestone[] = [
  {
    id: 1,
    quarter: "Q1 2026",
    title: "COMMUNITY FOUNDATION",
    status: "completed",
    progress: 100,
    goals: [
      "Build Discord community",
      "Create member roles and structure",
      "Launch learning resources channel",
      "Establish code of conduct",
    ],
  },
  {
    id: 2,
    quarter: "Q2 2026",
    title: "EXPANSION",
    status: "in-progress",
    progress: 80,
    goals: [
      "Launch official website",
      "Build projects showcase",
      "Host first hackathon",
      "Member onboarding workflow",
    ],
  },
  {
    id: 3,
    quarter: "Q3 2026",
    title: "ENGAGEMENT",
    status: "planned",
    progress: 0,
    goals: [
      "Premium courses launch",
      "Mentorship matching system",
      "Developer job board",
      "Community podcast series",
    ],
  },
  {
    id: 4,
    quarter: "Q4 2026",
    title: "SCALE",
    status: "planned",
    progress: 0,
    goals: [
      "2000+ member milestone",
      "International chapters",
      "Funding & sponsorship program",
      "NEXT-GEN Conference 2027",
    ],
  },
];
