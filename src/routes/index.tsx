import { createFileRoute } from "@tanstack/react-router";
import { HeroTitle, HERO_TITLE_DURATION } from "@/components/HeroTitle";
import { HeroTerminal } from "@/components/HeroTerminal";
import { Marquee } from "@/components/Marquee";
import { Channels } from "@/components/Channels";
import { Stats } from "@/components/Stats";
import { PlatformIcons } from "@/components/PlatformIcons";
import { JoinButton } from "@/components/JoinButton";
import { DISCORD_URL, REDDIT_URL } from "@/lib/links";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "NEXT-GEN PROGRAMMERS — A Discord community of 800+ builders" },
      {
        name: "description",
        content:
          "Join 800+ programmers, students, and indie builders. Code, ship, and level up together.",
      },
      { property: "og:title", content: "NEXT-GEN PROGRAMMERS" },
      {
        property: "og:description",
        content: "A Discord community of 800+ programmers building the future.",
      },
    ],
  }),
});

function Index() {
  return (
    <main id="top" className="overflow-x-hidden">
      {/* HERO */}
      <section className="relative px-5 md:px-8">
        <div className="dot-grid" />
        <div className="grain" />
        <div className="relative max-w-7xl mx-auto pt-14 md:pt-20 pb-20 md:pb-28 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="font-mono text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-6">
              ▌ A Discord Community · EST 4 JULY 2025
            </div>
            <HeroTitle />
            <p
              className="fade-up font-cursive text-2xl md:text-3xl text-foreground/90 mt-7 max-w-xl leading-snug"
              style={{ animationDelay: `${HERO_TITLE_DURATION}ms` }}
            >
              Coding with a sip of coffee — a community made by programmers, for programmers.
            </p>

            <div
              className="fade-up mt-7 font-mono text-[11px] tracking-[0.25em] uppercase text-foreground/80 flex flex-wrap items-center gap-x-3 gap-y-2"
              style={{ animationDelay: `${HERO_TITLE_DURATION + 250}ms` }}
            >
              <span>800+ MEMBERS</span>
              <span className="text-muted-foreground">·</span>
              <span>7 CATEGORIES</span>
              <span className="text-muted-foreground">·</span>
              <span>35+ CHANNELS</span>
              <span className="text-muted-foreground">·</span>
              <span>ACTIVE DAILY</span>
            </div>

            <div
              className="fade-up mt-10 flex flex-wrap gap-4"
              style={{ animationDelay: `${HERO_TITLE_DURATION + 500}ms` }}
            >
              <JoinButton size="lg" label="JOIN DISCORD" href={DISCORD_URL} />
              <Link to="/projects" className="btn-ghost" style={{ padding: "1.2rem 2.2rem", fontSize: "0.95rem" }}>
                EXPLORE COMMUNITY →
              </Link>
            </div>
          </div>

          <div className="fade-up" style={{ animationDelay: `${HERO_TITLE_DURATION + 200}ms` }}>
            <HeroTerminal startDelay={HERO_TITLE_DURATION + 400} />
          </div>
        </div>
      </section>

      <Marquee />

      {/* CHANNELS */}
      <section className="relative py-24 md:py-32 px-5 md:px-8 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="font-mono text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-3">
            [ 01 / DIRECTORY ]
          </div>
          <h2 className="font-display font-bold text-4xl md:text-6xl tracking-tight leading-[0.95] mb-3">
            EXPLORE THE COMMUNITY
          </h2>
          <p className="font-mono text-sm md:text-base text-muted-foreground max-w-2xl mb-3">
            The actual Discord structure. Eight categories, dozens of channels, one community.
          </p>
          <p className="font-cursive text-base md:text-lg text-center text-muted-foreground/70 max-w-xl mx-auto mb-14 leading-7">
            Pin board<br />
            Click on the cards to see channels description.
          </p>
          <Channels />
        </div>
      </section>

      {/* STATS */}
      <section className="relative py-24 md:py-32 px-5 md:px-8 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="font-mono text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-3">
            [ 02 / NUMBERS ]
          </div>
          <h2 className="font-display font-bold text-4xl md:text-6xl tracking-tight leading-[0.95] mb-14">
            BY THE NUMBERS
          </h2>
          <Stats />
        </div>
      </section>

      {/* PLATFORMS */}
      <section className="relative py-24 md:py-32 px-5 md:px-8 border-b border-border">
        <div className="max-w-7xl mx-auto text-center">
          <div className="font-mono text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-3">
            [ 03 / NETWORK ]
          </div>
          <h2 className="font-display font-bold text-4xl md:text-6xl tracking-tight leading-[0.95] mb-14">
            CONNECT WITH US
          </h2>
          <PlatformIcons />
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 md:py-44 px-5 md:px-8 stripes overflow-hidden border-b border-border">
        <div className="absolute inset-0 grain" />
        <div className="relative max-w-5xl mx-auto text-center">
          <div className="font-mono text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-5">
            [ 04 / JOIN ]
          </div>
          <h2 className="font-display font-bold text-5xl md:text-8xl leading-[0.92] tracking-tight mb-6">
            READY TO JOIN
            <br />
            800+ PROGRAMMERS?
          </h2>
          <p className="font-mono text-base md:text-lg text-muted-foreground mb-12">
            Build projects. Learn together. Level up.
          </p>
          <JoinButton size="lg" label="ENTER DISCORD" href={DISCORD_URL} />
        </div>
      </section>
    </main>
  );
}
