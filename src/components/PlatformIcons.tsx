import { FaReddit, FaLinkedin } from "react-icons/fa";

const PLATFORMS = [
  { name: "Reddit", Icon: FaReddit, href: "#" },
  { name: "LinkedIn", Icon: FaLinkedin, href: "#" },
];

export function PlatformIcons() {
  return (
    <div className="flex justify-center gap-16 md:gap-24">
      {PLATFORMS.map(({ name, Icon, href }) => (
        <a
          key={name}
          href={href}
          className="group flex flex-col items-center gap-4"
        >
          <div className="icon-square">
            <svg className="frame" viewBox="0 0 96 96" preserveAspectRatio="none">
              <rect x="1" y="1" width="94" height="94" />
            </svg>
            <Icon className="icon-inner text-white" size={40} />
          </div>
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/60 group-hover:text-white">
            {name}
          </span>
        </a>
      ))}
    </div>
  );
}
