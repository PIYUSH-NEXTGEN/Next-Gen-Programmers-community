const a = (n: string) => `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(n)}`;

export const serverStats = {
  members: 800,
  online: 234,
  channels: 35,
  categories: 8,
  uptimeDays: 45,
  growthPct: 12,
};

export const onlineMembers = [
  "Priya", "Amit", "John", "Sarah", "Dev", "Lin",
  "Ravi", "Mira", "Kenji", "Aisha", "Marco", "Nora",
].map((n, i) => ({
  id: i + 1,
  name: `${n}#${1000 + i * 7}`,
  avatar: a(n),
}));

export const recentMessages = [
  { time: "12:34", user: "Priya", text: "Just deployed the new feature!" },
  { time: "12:35", user: "Amit", text: "@Priya awesome work 🚀" },
  { time: "12:36", user: "John", text: "Check out the code review thread..." },
  { time: "12:40", user: "Sarah", text: "Can someone help with Node.js streams?" },
  { time: "12:41", user: "Dev", text: "@Sarah yes, what's the issue?" },
  { time: "12:43", user: "Lin", text: "CTF tonight — anyone joining?" },
  { time: "12:46", user: "Kenji", text: "Pushed the Zig allocator fix." },
  { time: "12:48", user: "Mira", text: "Pipeline is green ✓" },
];

export const channelTree: { emoji: string; name: string; channels: string[] }[] = [
  { emoji: "📌", name: "ENTRANCE", channels: ["onboarding", "how-to-start", "rules"] },
  { emoji: "💬", name: "GENERAL", channels: ["introduction", "general-chat", "poll", "announcements"] },
  { emoji: "🚀", name: "SPECIALIZED DOMAINS", channels: ["app-dev", "cyber-security", "data-science", "devops-cloud"] },
  { emoji: "🐍", name: "PROGRAMMING LANGUAGES", channels: ["python", "javascript", "java", "rust"] },
  { emoji: "🎤", name: "VOICE CHANNELS", channels: ["Pair Programming", "Tech Discussions", "Study room"] },
  { emoji: "📚", name: "OTHER", channels: ["projects-showcase", "resources", "faq"] },
];
