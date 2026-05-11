export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: "web" | "mobile" | "devops" | "data" | "games";
  githubLink: string;
  liveLink?: string;
  contributors: { name: string; avatar: string }[];
  stats: { stars: number; forks: number };
};

const a = (n: string) => `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(n)}`;
const img = (id: string) => `https://images.unsplash.com/${id}?w=600&h=400&fit=crop&auto=format`;

export const projects: Project[] = [
  { id: 1, title: "CodeSync", description: "Real-time collaborative code editor with live sync.", image: img("photo-1517694712202-14dd9538aa97"), tags: ["react", "node", "websocket"], category: "web", githubLink: "#", liveLink: "#", contributors: [{ name: "u1", avatar: a("u1") }, { name: "u2", avatar: a("u2") }], stats: { stars: 156, forks: 42 } },
  { id: 2, title: "Pulse Monitor", description: "Lightweight server monitoring dashboard.", image: img("photo-1551288049-bebda4e38f71"), tags: ["go", "prometheus", "devops"], category: "devops", githubLink: "#", contributors: [{ name: "u3", avatar: a("u3") }], stats: { stars: 89, forks: 14 } },
  { id: 3, title: "LeafID", description: "Plant species classifier using CNN.", image: img("photo-1518770660439-4636190af475"), tags: ["python", "pytorch", "ml"], category: "data", githubLink: "#", liveLink: "#", contributors: [{ name: "u4", avatar: a("u4") }, { name: "u5", avatar: a("u5") }], stats: { stars: 312, forks: 88 } },
  { id: 4, title: "Pocket Tasks", description: "Offline-first task manager for Android & iOS.", image: img("photo-1512941937669-90a1b58e7e9c"), tags: ["flutter", "dart"], category: "mobile", githubLink: "#", contributors: [{ name: "u6", avatar: a("u6") }], stats: { stars: 47, forks: 9 } },
  { id: 5, title: "Voxel Wars", description: "Multiplayer voxel arena game.", image: img("photo-1542751371-adc38448a05e"), tags: ["unity", "csharp", "netcode"], category: "games", githubLink: "#", liveLink: "#", contributors: [{ name: "u7", avatar: a("u7") }, { name: "u8", avatar: a("u8") }], stats: { stars: 220, forks: 31 } },
  { id: 6, title: "TermBlog", description: "Static blog generator with a terminal aesthetic.", image: img("photo-1555066931-4365d14bab8c"), tags: ["typescript", "vite"], category: "web", githubLink: "#", liveLink: "#", contributors: [{ name: "u9", avatar: a("u9") }], stats: { stars: 71, forks: 12 } },
  { id: 7, title: "Helm Hub", description: "Curated Helm chart registry for indie teams.", image: img("photo-1605379399642-870262d3d051"), tags: ["k8s", "helm", "devops"], category: "devops", githubLink: "#", contributors: [{ name: "u10", avatar: a("u10") }], stats: { stars: 134, forks: 22 } },
  { id: 8, title: "Lex DB", description: "Embedded key-value store written in Rust.", image: img("photo-1555949963-aa79dcee981c"), tags: ["rust", "db"], category: "data", githubLink: "#", contributors: [{ name: "u11", avatar: a("u11") }], stats: { stars: 410, forks: 56 } },
  { id: 9, title: "Stride", description: "Habit-tracking PWA with streak analytics.", image: img("photo-1551288049-48512cb1bd1d"), tags: ["react", "pwa"], category: "web", githubLink: "#", liveLink: "#", contributors: [{ name: "u12", avatar: a("u12") }], stats: { stars: 64, forks: 11 } },
  { id: 10, title: "Nimbus Chat", description: "End-to-end encrypted mobile chat.", image: img("photo-1495511167051-13bb07cde85f"), tags: ["react-native", "signal"], category: "mobile", githubLink: "#", contributors: [{ name: "u13", avatar: a("u13") }], stats: { stars: 198, forks: 27 } },
  { id: 11, title: "Pixel Forge", description: "Browser-based pixel-art editor with layers.", image: img("photo-1550745165-9bc0b252726f"), tags: ["canvas", "ts"], category: "games", githubLink: "#", liveLink: "#", contributors: [{ name: "u14", avatar: a("u14") }], stats: { stars: 92, forks: 17 } },
  { id: 12, title: "Ingest", description: "Streaming ETL framework for event pipelines.", image: img("photo-1551288049-bebda4e38f71"), tags: ["kafka", "go"], category: "data", githubLink: "#", contributors: [{ name: "u15", avatar: a("u15") }], stats: { stars: 256, forks: 41 } },
  { id: 13, title: "Cluster CLI", description: "One-command bootstrap for k3s clusters.", image: img("photo-1518770660439-4636190af475"), tags: ["k3s", "bash"], category: "devops", githubLink: "#", contributors: [{ name: "u16", avatar: a("u16") }], stats: { stars: 121, forks: 19 } },
  { id: 14, title: "Whiteboard X", description: "Real-time infinite whiteboard.", image: img("photo-1517694712202-14dd9538aa97"), tags: ["react", "yjs"], category: "web", githubLink: "#", liveLink: "#", contributors: [{ name: "u17", avatar: a("u17") }, { name: "u18", avatar: a("u18") }], stats: { stars: 333, forks: 60 } },
  { id: 15, title: "Roguelike Core", description: "Engine for grid-based roguelikes in TypeScript.", image: img("photo-1542751371-adc38448a05e"), tags: ["ts", "engine"], category: "games", githubLink: "#", contributors: [{ name: "u19", avatar: a("u19") }], stats: { stars: 76, forks: 13 } },
];
