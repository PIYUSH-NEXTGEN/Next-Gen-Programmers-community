export type Member = {
  id: number;
  name: string;
  role: string;
  expertise: string;
  avatar: string;
  bio: string;
  socials: { github?: string; linkedin?: string; twitter?: string };
};

const seed = (n: string) => `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(n)}`;

export const members: Member[] = [
  { id: 1, name: "Priya Singh", role: "Founder & Lead Developer", expertise: "Full-Stack Developer", avatar: seed("Priya"), bio: "Started NEXT-GEN to build a learning-first community.", socials: { github: "#", linkedin: "#" } },
  { id: 2, name: "Amit Patel", role: "Moderator", expertise: "DevOps Engineer", avatar: seed("Amit"), bio: "Kubernetes expert, helps with infra questions.", socials: { github: "#", linkedin: "#" } },
  { id: 3, name: "John Carter", role: "Moderator", expertise: "Backend Engineer", avatar: seed("John"), bio: "Go and Rust enthusiast. Reviews PRs in his sleep.", socials: { github: "#", twitter: "#" } },
  { id: 4, name: "Sarah Lee", role: "Community Manager", expertise: "Frontend Developer", avatar: seed("Sarah"), bio: "Keeps the chat alive. Loves React internals.", socials: { github: "#", linkedin: "#" } },
  { id: 5, name: "Dev Sharma", role: "Mentor", expertise: "Machine Learning", avatar: seed("Dev"), bio: "PyTorch & transformers. Open-source contributor.", socials: { github: "#", twitter: "#" } },
  { id: 6, name: "Lin Wei", role: "Mentor", expertise: "Cyber Security", avatar: seed("Lin"), bio: "Red-team specialist. CTF regular.", socials: { github: "#" } },
  { id: 7, name: "Ravi Kumar", role: "Contributor", expertise: "Mobile Developer", avatar: seed("Ravi"), bio: "Flutter & native Android. Ships side-projects weekly.", socials: { github: "#", linkedin: "#" } },
  { id: 8, name: "Mira Patel", role: "Contributor", expertise: "Data Engineer", avatar: seed("Mira"), bio: "Pipelines, Airflow, dbt. Loves clean schemas.", socials: { github: "#" } },
  { id: 9, name: "Kenji Sato", role: "Contributor", expertise: "Systems Programmer", avatar: seed("Kenji"), bio: "Writes Zig and reads kernel code for fun.", socials: { github: "#", twitter: "#" } },
  { id: 10, name: "Aisha Khan", role: "Mentor", expertise: "Game Developer", avatar: seed("Aisha"), bio: "Unity, Unreal, and her own engine in C++.", socials: { github: "#", linkedin: "#" } },
  { id: 11, name: "Marco Rossi", role: "Contributor", expertise: "Cloud Architect", avatar: seed("Marco"), bio: "AWS, Terraform, and zero-downtime deploys.", socials: { linkedin: "#" } },
  { id: 12, name: "Nora Ahmed", role: "Moderator", expertise: "DSA & Competitive", avatar: seed("Nora"), bio: "ICPC finalist. Hosts weekly contests.", socials: { github: "#", twitter: "#" } },
];
