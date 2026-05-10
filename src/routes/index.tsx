import { createFileRoute } from "@tanstack/react-router";
import { HeroTitle } from "@/components/HeroTitle";
import { Typewriter } from "@/components/Typewriter";
import { Marquee } from "@/components/Marquee";
import { FakeTerminal } from "@/components/FakeTerminal";
import { Channels } from "@/components/Channels";
import { PlatformIcons } from "@/components/PlatformIcons";
import { JoinButton } from "@/components/JoinButton";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "NEXT-GEN PROGRAMMERS — Where builders write code today" },
      {
        name: "description",
        content:
          "A Discord community of 800+ programmers, students, and builders. Code. Build. Ship.",
      },
      { property: "og:title", content: "NEXT-GEN PROGRAMMERS" },
      {
        property: "og:description",
        content: "A Discord community of 800+ programmers building the future.",
      },
    ],
  }),
});

const TITLE_DURATION = "NEXT-GEN PROGRAMMERS".length * 70 + 600;

function Index() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* HERO */}
      <section className="relative min-h-screen flex flex-col">
        <div className="absolute top-0 left-0 right-0 h-px bg-white/30 z-20" />
        <div className="dot-grid" />
        <div className="noise" />

        {/* top bar */}
        <div className="relative z-10 flex justify-between items-center px-6 md:px-10 pt-6 font-mono text-[10px] tracking-[0.3em] uppercase text-white/60">
          <span>// NGP_v1.0</span>
          <span className="hidden md:inline">[ STATUS: ONLINE ]</span>
          <span>2026</span>
        </div>

        <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 py-20">
          <div className="font-mono text-[10px] md:text-xs tracking-[0.4em] text-white/50 mb-8 uppercase">
            ▌ A Discord Community
          </div>

          <HeroTitle />

          <div className="w-24 h-px bg-white/40 my-10" />

          <p className="font-mono text-sm md:text-base text-white/80 text-center max-w-2xl px-4 min-h-[2em]">
            <Typewriter
              text="Where the builders of tomorrow write code today."
              delay={TITLE_DURATION}
              speed={32}
            />
          </p>

          <div className="mt-10 inline-flex items-center gap-2 border border-white/30 px-4 py-2 font-mono text-[11px] tracking-[0.3em] uppercase">
            <span className="w-2 h-2 bg-white cursor-blink" />
            <span>[ 800+ ACTIVE MEMBERS ]</span>
            <span className="cursor-blink">▌</span>
          </div>

          <div className="mt-12">
            <JoinButton size="lg" />
          </div>
        </div>

        <div className="relative z-10 flex justify-between items-center px-6 md:px-10 pb-6 font-mono text-[10px] tracking-[0.3em] uppercase text-white/40">
          <span>scroll ↓</span>
          <span>discord.gg/ngp</span>
        </div>
      </section>

      {/* MARQUEE */}
      <Marquee />

      {/* ABOUT */}
      <section className="relative py-28 md:py-40 px-6 md:px-12 border-b border-white/10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-[80px_1fr_1fr] gap-10 md:gap-16 items-start">
          <div className="hidden md:flex justify-center">
            <div className="vertical-label text-7xl text-white/15 leading-none">
              WHO WE ARE
            </div>
          </div>

          <div>
            <div className="font-mono text-[10px] tracking-[0.4em] uppercase text-white/50 mb-6">
              [ 01 / ABOUT ]
            </div>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.9] mb-10 md:hidden">
              WHO WE ARE
            </h2>
            <div className="space-y-6 font-mono text-base md:text-lg text-white/80 leading-relaxed max-w-xl">
              <p>
                <span className="text-white">→</span> A collective of programmers,
                students, and self-taught builders.
              </p>
              <p>
                <span className="text-white">→</span> Open-source contributors,
                hackers, and indie devs sharing the same channel.
              </p>
              <p>
                <span className="text-white">→</span> No gatekeeping. No fluff.
                Just code, builds, and people who actually ship.
              </p>
              <p>
                <span className="text-white">→</span> Beginner pushing their first
                commit? Senior shipping production? Both belong here.
              </p>
            </div>
          </div>

          <div>
            <FakeTerminal />
          </div>
        </div>
      </section>

      {/* CHANNELS */}
      <section className="relative py-28 md:py-40 px-6 md:px-12 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="font-mono text-[10px] tracking-[0.4em] uppercase text-white/50 mb-4">
            [ 02 / DIRECTORY ]
          </div>
          <h2 className="font-display text-6xl md:text-8xl leading-[0.9] mb-16">
            INSIDE THE SERVER
          </h2>
          <Channels />
        </div>
      </section>

      {/* PLATFORMS */}
      <section className="relative py-28 md:py-40 px-6 md:px-12 border-b border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="font-mono text-[10px] tracking-[0.4em] uppercase text-white/50 mb-4">
            [ 03 / NETWORK ]
          </div>
          <h2 className="font-display text-6xl md:text-8xl leading-[0.9] mb-16">
            FIND US EVERYWHERE
          </h2>
          <PlatformIcons />
        </div>
      </section>

      {/* JOIN CTA */}
      <section className="relative py-32 md:py-48 px-6 md:px-12 stripes overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 noise" />
        <div className="relative max-w-5xl mx-auto text-center">
          <div className="font-mono text-[10px] tracking-[0.4em] uppercase text-white/50 mb-6">
            [ 04 / JOIN ]
          </div>
          <h2 className="font-display text-7xl md:text-[10rem] leading-[0.85] mb-8">
            READY TO
            <br />
            LEVEL UP?
          </h2>
          <p className="font-mono text-base md:text-lg text-white/70 mb-12 tracking-wide">
            Join 800+ programmers building the future.
          </p>
          <JoinButton size="lg" />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 px-6 text-center font-mono text-[11px] tracking-[0.2em] text-white/40">
        © NEXT-GEN PROGRAMMERS — Built by the community, for the community.
      </footer>
    </main>
  );
}
