export type FAQ = {
  id: number;
  category: "general" | "discord" | "projects" | "getting-started" | "moderation";
  question: string;
  answer: string;
};

export const faqs: FAQ[] = [
  { id: 1, category: "general", question: "How do I join the Discord server?", answer: "Click the 'Join Discord' button at the top of the page. Accept the rules and introduce yourself in #onboarding. Mods will verify and grant member role within 24 hours." },
  { id: 2, category: "general", question: "What is NEXT-GEN PROGRAMMERS?", answer: "A 800+ member Discord community for developers of all levels — students, juniors, indie hackers, and senior engineers — building, learning, and shipping together." },
  { id: 3, category: "general", question: "Who can join?", answer: "Anyone interested in programming. No gatekeeping. All skill levels are welcome from absolute beginners to staff engineers." },
  { id: 4, category: "general", question: "Is it really free?", answer: "Yes, 100% free. We may add optional paid courses in the future but the core community will always be free." },
  { id: 5, category: "discord", question: "What are the different roles?", answer: "Member, Contributor, Mentor, Moderator, and Admin. Roles unlock by participation — there are no paid upgrades." },
  { id: 6, category: "discord", question: "How do channels work?", answer: "Channels are grouped into categories like ENTRANCE, GENERAL, SPECIALIZED DOMAINS, PROGRAMMING LANGUAGES, and VOICE. See the Server page for a full map." },
  { id: 7, category: "discord", question: "What's the code of conduct?", answer: "Be respectful, help others, no spam, no NFT/crypto promotion, no self-promo without permission. Repeat violations result in bans." },
  { id: 8, category: "discord", question: "How do I report issues?", answer: "DM any moderator or use #report-an-issue. We respond within hours, not days." },
  { id: 9, category: "projects", question: "How do I showcase my project?", answer: "Post in #projects-showcase with a screenshot, short description, and links. Community will give feedback." },
  { id: 10, category: "projects", question: "Can I collaborate with others?", answer: "Yes — #find-teammates is dedicated to forming groups for hackathons, side projects, and open source." },
  { id: 11, category: "projects", question: "Are there project reviews?", answer: "Yes. Drop your repo in #dev-advice and you'll get real PR-style feedback from senior members." },
  { id: 12, category: "projects", question: "Can I use external libraries?", answer: "Absolutely. Just mention the stack in your description so others can follow along." },
  { id: 13, category: "getting-started", question: "I'm a beginner, where do I start?", answer: "Start in #how-to-start. We have curated roadmaps for web, mobile, ML, DSA, and systems programming." },
  { id: 14, category: "getting-started", question: "What programming languages are covered?", answer: "Python, JavaScript/TypeScript, Java, C/C++, Rust, Go, Zig, Kotlin, Swift, and more. Each has its own channel." },
  { id: 15, category: "getting-started", question: "Where are the learning resources?", answer: "#learning-resources has curated playlists, books, and free courses, regularly updated by mentors." },
  { id: 16, category: "getting-started", question: "Do you have mentors?", answer: "Yes — ask in #dev-advice. Mentors include senior engineers, OSS contributors, and ICPC finalists." },
  { id: 17, category: "moderation", question: "What gets you banned?", answer: "Harassment, hate speech, NSFW content, spam, NFT/crypto shilling, and repeated violations of the code of conduct." },
  { id: 18, category: "moderation", question: "Can I promote my own Discord?", answer: "Not in regular channels. Partner servers are allowed via #partner-servers after mod approval." },
  { id: 19, category: "moderation", question: "How do I report spam?", answer: "DM any online mod with a link to the message. We act within minutes during active hours." },
  { id: 20, category: "moderation", question: "What about NFT spam?", answer: "Immediate, permanent ban. No warnings, no appeals." },
  { id: 21, category: "general", question: "Are there meetups or events?", answer: "Yes — weekly voice events, monthly contests, and quarterly hackathons. See #announcements." },
  { id: 22, category: "discord", question: "Can I suggest a new channel?", answer: "Yes, post your idea in #server-suggestions. Mods review weekly." },
];
