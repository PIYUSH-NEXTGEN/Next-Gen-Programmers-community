export type Member = {
  id: number;
  name: string;
  username: string;
  role: string;
  avatar: string;
  socials: { github?: string; linkedin?: string; twitter?: string };
};

const seed = (n: string) =>
  `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(n)}`;

export const members: Member[] = [
  {
    id: 1,
    name: "Piyush Baraskar",
    username: "@majestic_728",
    role: "Owner",
    avatar: seed("Piyush Baraskar"),
    socials: {
      linkedin: "https://www.linkedin.com/in/piyush-baraskar-994ab6337",
      github: "https://github.com/PIYUSH-NEXTGEN",
      twitter: "https://x.com/Piyush_NextGen?t=Yxj7znrqP7rb-D65Xp0nrw&s=09",
    },
  },
];
