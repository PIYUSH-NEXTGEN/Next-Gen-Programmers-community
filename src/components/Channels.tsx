import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  Pin,
  MessagesSquare,
  Gamepad2,
  Rocket,
  Code2,
  Mic,
  Brain,
  type LucideIcon,
} from "lucide-react";

const CATEGORIES: { name: string; Icon: LucideIcon; channels: { name: string; description: string }[] }[] = [
  {
    name: "ENTRANCE",
    Icon: Pin,
    channels: [
      { name: "onboarding", description: "Welcome channel" },
      { name: "how-to start", description: "Quick start guides for newcomers to explore the server." },
      { name: "rules", description: "Server rules and community guidelines. Read first!" },
      { name: "announcement", description: "Official server updates, events, and news." },
    ],
  },
  {
    name: "GENERAL",
    Icon: MessagesSquare,
    channels: [
      {
        name: "introduction",
        description:
          "Give a short intro about yourself,\nRelated to your programming skills,\nWhat are you currently learning/doing & your goal,\nYour social links & projects,\nEtc.",
      },
      { name: "general-chat", description: "Open discussion on tech or casual topics." },
      {
        name: "poll",
        description:
          "This is the poll channel where you can see the statistics,\nvote or create a thread.\n\nIf anyone wants to make their own poll just mention or DM @Admin or @Moderators.",
      },
      { name: "news-meme", description: "MEMES CHECKPOINT\n\nShare news and memes related to programming here." },
      {
        name: "partner-servers",
        description:
          "Promote your own discord server here.\n\n**Condition**\n\n1. In return we can also promote our server in your server\n2. The server should have at least 100 members\n3. Server should be related to programming\n4. One promotion post per server\n\nEquivalent exchange — only promotes if you agreed to the condition.",
      },
      {
        name: "challenges",
        description: "Coding challenge channel.\n\nPost your challenge\nOr participate in others.\n\nLet's see who's the best in it 😉",
      },
      {
        name: "learning-resources",
        description:
          "Post resources for help like YouTube links, docs, or see this channel for roadmaps etc.\n\nYou can find many good resources here so make sure to check this forum.",
      },
      {
        name: "find-teammates",
        description:
          "Use this channel to find teammates to work on your projects or to study together.",
      },
      {
        name: "ask-questions",
        description:
          "Ask your questions/doubts related to programming, tech, and career.\n\nMake sure that your question is proper and complete.",
      },
      {
        name: "project-showcase",
        description:
          "Share your project that you have made or are currently working on\nSo others can review and try it.",
      },
      {
        name: "dev-advice",
        description:
          "Drop concise programming tips, shortcuts, best practices, and hard-won lessons.\n\nExplain why it works. High signal knowledge gets respect.",
      },
      {
        name: "server-suggestions",
        description: "Drop your suggestions or any kind of problem related to the server.\n\nDon't ask suggestions for yourself here.",
      },
    ],
  },
  {
    name: "VOICE CHANNELS",
    Icon: Mic,
    channels: [
      { name: "Pair Programming [00/03]", description: "Code and learn together." },
      { name: "Tech Discussions", description: "Talk and chat about programming and tech-related stuff." },
      { name: "Side Quests", description: "Hangout and chill." },
      { name: "Study Room", description: "Can't use mic here. Study silently together." },
      { name: "Cyber Security", description: "Only for cybersecurity folks." },
    ],
  },
  {
    name: "MACHINE LEARNING",
    Icon: Brain,
    channels: [
      { name: "machine-learning", description: "Discuss stuff related to machine learning and artificial intelligence." },
      { name: "resources-ml", description: "Share research papers, docs, videos, or any valuable resources you find regarding ML." },
      { name: "ml-study-vc", description: "Only for ML learners." },
    ],
  },
  {
    name: "SPECIALIZED DOMAINS",
    Icon: Rocket,
    channels: [
      { name: "app-dev", description: "For app development — Android and iOS." },
      { name: "cyber-security", description: "Locks, keys, and digital heists — learn to hack and defend like a pro." },
      { name: "data-science", description: "For our future data scientists." },
      { name: "devops-clouds", description: "For cloud and infrastructure discussions." },
      { name: "dsa", description: "Share and discuss DSA problems & solutions." },
      { name: "linux", description: "A specialized channel for Linux freaks.\nEnjoyy." },
      { name: "webdev", description: "Specific channel for frontend and backend web development." },
    ],
  },
  {
    name: "PROGRAMMING LANGUAGES",
    Icon: Code2,
    channels: [
      { name: "c-and-cpp", description: "Channel for the MOTHER OF ALL LANGUAGES.\n\nTHE C." },
      { name: "java", description: "i code in java" },
      { name: "javascript", description: "For JavaScript / TypeScript." },
      { name: "python", description: "Ask questions, share tips, or discuss anything Python-related." },
      { name: "rust", description: "~~rusty rust~~" },
      { name: "zig", description: "Dedicated channel for ZIG." },
    ],
  },
  {
    name: "NEXT-GEN CAMP",
    Icon: Gamepad2,
    channels: [
      { name: "chai-tapri", description: "This channel is mainly for Hindi language." },
      { name: "through-the-lens", description: "Share your photography here — nature, cityscapes, random captures." },
      { name: "ai-abuse", description: "Abusing AI.\nAh yea fun." },
      {
        name: "social-networking",
        description:
          "A place to share your social profiles (GitHub, LinkedIn, Twitter etc.) and your posts/work.\n\n• No AI slop\n• No spam",
      },
      { name: "ranking", description: "To check your ranks use `/rank` command of Arcane bot." },
      { name: "departure", description: "sayonara" },
    ],
  },
];

export function Channels() {
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const openCardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!openCategory) return;
      if (!openCardRef.current) return;
      if (event.target instanceof Node && !openCardRef.current.contains(event.target)) {
        setOpenCategory(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openCategory]);

  return (
    <div className="community-board relative py-2 sm:py-4">
      <div className="board-surface absolute inset-0" />
      <div className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
        {CATEGORIES.map((cat, ci) => {
          const Icon = cat.Icon;
          const isOpen = openCategory === cat.name;
          return (
            <motion.div
              key={cat.name}
              ref={(el) => {
                if (isOpen) {
                  openCardRef.current = el;
                } else if (openCardRef.current === el) {
                  openCardRef.current = null;
                }
              }}
              layout
              initial={{ opacity: 0, y: 26, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-70px" }}
              transition={{ duration: 0.45, delay: (ci % 3) * 0.08, type: "spring", stiffness: 130, damping: 20 }}
              className={`board-card ${isOpen ? "board-card-open" : ""}`}
              onClick={() => setOpenCategory(isOpen ? null : cat.name)}
            >
              <div className="board-card-inner flex h-full flex-col">
                <div className="board-card-header">
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="board-seal">{String(ci + 1).padStart(2, "0")}</span>
                    <Icon size={18} className="text-foreground" />
                    <span className="font-display font-bold text-[14px] tracking-[0.18em] text-foreground truncate">
                      {cat.name}
                    </span>
                  </div>
                  <span className="text-[12px] uppercase tracking-[0.22em] text-muted-foreground">
                    {cat.channels.length} channels
                  </span>
                </div>

                <div className="mt-6 flex-1">
                  <ul className="space-y-3 text-sm">
                    {cat.channels.map((channel) => (
                      <li key={channel.name} className="space-y-2">
                        <div className="flex items-center gap-2 text-[13px] font-semibold text-foreground">
                          <span className="text-muted-foreground">#</span>
                          <span>{channel.name}</span>
                        </div>
                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.p
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2, ease: "easeOut" }}
                              className="text-[13px] leading-6 italic text-muted-foreground whitespace-pre-line"
                            >
                              {channel.description}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
