export type RoleKey =
  | "Owner"
  | "Admin"
  | "Moderator"
  | "Junior"
  | "Intermediate"
  | "Advanced";

export type Member = {
  id: number;
  name: string;
  username: string;
  roles: RoleKey[]; // first = primary role, rest = skill tier etc.
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
    roles: ["Owner", "Junior"],
    avatar: seed("Piyush Baraskar"),
    socials: {
      linkedin: "https://www.linkedin.com/in/piyush-baraskar-994ab6337",
      github: "https://github.com/PIYUSH-NEXTGEN",
      twitter: "https://x.com/Piyush_NextGen?t=Yxj7znrqP7rb-D65Xp0nrw&s=09",
    },
  },
  {
    id: 2,
    name: "SIR WIZARD",
    username: "@codewizard0574",
    roles: ["Admin", "Intermediate"],
    avatar: seed("SIR WIZARD"),
    socials: {},
  },
  {
    id: 3,
    name: "Moksh Goyal",
    username: "@moxgotcooked",
    roles: ["Moderator", "Junior"],
    avatar: seed("Moksh Goyal"),
    socials: {
      github: "https://github.com/MokshonWork",
      linkedin: "https://www.linkedin.com/in/moksh-goyal-b032a9383/",
      twitter: "https://x.com/MokshGoyal007",
    },
  },
  {
    id: 4,
    name: "Divyansh Shakya",
    username: "@qu4ntum_cyb.Org",
    roles: ["Moderator", "Junior"],
    avatar: seed("Divyansh Shakya"),
    socials: {},
  },
  {
    id: 5,
    name: "Jesus",
    username: "@greenbugx",
    roles: ["Moderator", "Intermediate"],
    avatar: seed("Jesus"),
    socials: {},
  },
  {
    id: 6,
    name: "Crunch",
    username: "@webdev_guy",
    roles: ["Moderator", "Advanced"],
    avatar: seed("Crunch"),
    socials: {},
  },
  {
    id: 7,
    name: "Aayan Kumar",
    username: "@zenosss619",
    roles: ["Moderator", "Junior"],
    avatar: seed("Aayan Kumar"),
    socials: {},
  },
  {
    id: 8,
    name: "Rahul Sharma",
    username: "@being_johnwick",
    roles: ["Intermediate"],
    avatar: seed("Rahul Sharma"),
    socials: {},
  },
  {
    id: 9,
    name: "Rajat Sharma",
    username: "@brucewayne1671",
    roles: ["Intermediate"],
    avatar: seed("Rajat Sharma"),
    socials: {},
  },
  {
    id: 10,
    name: "Ranveer Minhas",
    username: "@ranveerminhas1833",
    roles: ["Advanced"],
    avatar: seed("Ranveer Minhas"),
    socials: {},
  },
  {
    id: 11,
    name: "Darius",
    username: "@innovation.gg",
    roles: ["Intermediate"],
    avatar: seed("Darius"),
    socials: {},
  },
  {
    id: 12,
    name: "Ridhaam Patel",
    username: "@spidy19_",
    roles: ["Intermediate"],
    avatar: seed("Ridhaam Patel"),
    socials: {},
  },
  {
    id: 13,
    name: "Varun Suryawanshi",
    username: "@lolbroheheh",
    roles: ["Junior"],
    avatar: seed("Varun Suryawanshi"),
    socials: {},
  },
  {
    id: 14,
    name: "Aditya",
    username: "@adityakr15",
    roles: ["Intermediate"],
    avatar: seed("Aditya"),
    socials: {},
  },
];
