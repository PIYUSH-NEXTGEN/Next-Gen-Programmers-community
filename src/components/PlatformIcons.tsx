import { FaDiscord, FaReddit, FaLinkedin } from "react-icons/fa";
import { DISCORD_URL, REDDIT_URL, LINKEDIN_URL } from "@/lib/links";

const PLATFORMS = [
  { name: "Discord", Icon: FaDiscord, href: DISCORD_URL },
  { name: "Reddit", Icon: FaReddit, href: REDDIT_URL },
  { name: "LinkedIn", Icon: FaLinkedin, href: LINKEDIN_URL },
];

export function PlatformIcons() {
  return (
    <div className="flex flex-wrap justify-center gap-12 md:gap-16">
      {PLATFORMS.map(({ name, Icon, href }) => (
        <a
          key={name}
          href={href}
          target={href === "#" ? undefined : "_blank"}
          rel="noreferrer"
          className="group flex flex-col items-center gap-4"
        >
          <div className="icon-square">
            <svg className="frame" viewBox="0 0 90 90" preserveAspectRatio="none">
              <rect x="1" y="1" width="88" height="88" />
            </svg>
            <Icon className="icon-inner" size={36} />
          </div>
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground group-hover:text-foreground transition-colors">
            {name}
          </span>
        </a>
      ))}
    </div>
  );
}
