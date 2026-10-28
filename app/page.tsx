import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { site } from "@/lib/site";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { CtaBand } from "@/components/cta-band";
export default function Home() {
  return (
    <>
      <section className="overflow-hidden bg-[#faf9f6]">
        <div className="container-shell grid min-h-[650px] items-center gap-12 py-16 md:grid-cols-[1fr_.92fr] md:py-20">
          <div className="relative z-10">
            <p className="eyebrow flex items-center gap-3 text-[#927000]">
              <span className="gold-rule" /> Strategy. Creativity. Digital
              growth.
            </p>
            <h1 className="mt-6 max-w-3xl text-5xl font-semibold leading-[1.04] sm:text-6xl lg:text-[76px]">
              Your brand deserves to{" "}
              <span className="relative inline-block">
                evolve.
                <span className="absolute bottom-1 left-0 -z-0 h-3 w-full bg-[#E2A712]/65 sm:h-4" />
              </span>
            </h1>
            <p className="mt-7 max-w-xl text-sm leading-8 text-[#555] sm:text-lg">
              We help small businesses and startups build visible, trusted
              brands through strategic content and thoughtful digital execution.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="button-primary">
                Let’s build together <ArrowUpRight size={16} />
              </Link>
              <Link href="/portfolio" className="button-secondary">
                Explore our work <ArrowDownRight size={16} />
              </Link>
            </div>
            <div className="mt-12 flex items-center gap-3 text-xs font-semibold text-[#686868]">
              <span className="h-px w-10 bg-[#E2A712]" /> Built around your
              goals, audience and next stage.
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[520px]">
            <div className="visual-placeholder relative aspect-[4/4.5] w-full">
              <div className="absolute left-[9%] top-[10%] z-10 w-[72%] bg-white p-5 shadow-xl sm:p-7">
                <p className="eyebrow text-[#927000]">
                  A clearer digital direction
                </p>
                <p className="mt-4 font-display text-2xl font-semibold leading-tight sm:text-4xl">
                  Make your
                  <br />
                  message matter.
                </p>
                <div className="mt-7 h-1 w-16 bg-[#E2A712]" />
                <p className="mt-4 text-xs leading-5 text-[#686868]">
                  Creative work with a reason behind it.
                </p>
              </div>
              <div className="absolute bottom-[10%] right-[8%] z-10 w-[58%] bg-black p-5 text-white sm:p-7">
                <p className="text-[10px] uppercase tracking-[.2em] text-[#E2A712]">
                  The Evolving Digitals
                </p>
                <p className="mt-3 font-display text-xl font-semibold leading-tight sm:text-3xl">
                  Strategy into
                  <br />
                  consistent action.
                </p>
              </div>
              <span className="absolute bottom-8 left-7 z-10 text-xs font-bold">
                01 / THINK WITH PURPOSE
              </span>
            </div>
            <p className="mt-3 text-right text-[10px] uppercase tracking-widest text-[#777]">
              Brand artwork placeholder — replace with approved creative
            </p>
            <div className="hero-orbit hidden lg:block">
                <img
                    src="/images/ted/ddd/83-M-ViewsArtboard-1.png"
                    alt="Brand artwork"
                    className="hero-orbit-image hero-orbit-image-1"
                />

                <img
                    src="/images/ted/ddd/IDEAL-AUDIENCEArtboard-1.png"
                    alt="Ideal audience creative"
                    className="hero-orbit-image hero-orbit-image-2"
                />

                <img
                    src="/images/ted/June_/social-growthArtboard-1-copy.png"
                    alt="Social growth creative"
                    className="hero-orbit-image hero-orbit-image-3"
                />
            </div>
            </div>
        </div>
      </section>
      <section className="border-y border-black/10 py-7">
        <div className="container-shell flex flex-wrap items-center justify-between gap-4">
          <p className="eyebrow text-[#686868]">
            Digital support for brands that want to move forward
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-semibold">
            <span>Content</span>
            <span>Creative</span>
            <span>Campaigns</span>
            <span>Consistency</span>
          </div>
        </div>
      </section>
      <section className="section-pad">
        <div className="container-shell grid gap-12 md:grid-cols-[.8fr_1.2fr]">
          <SectionHeading
            eyebrow="Who we are"
            title="Good creative gets attention. Clear strategy gives it direction."
            description="The Evolving Digitals helps small businesses, startups and growing brands communicate with purpose and show up more consistently online."
          />
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="border-t border-black/20 pt-5">
              <span className="font-display text-4xl font-semibold">01</span>
              <h3 className="mt-4 font-display text-xl font-semibold">
                Understand the brand
              </h3>
              <p className="mt-2 text-sm leading-7 text-[#686868]">
                Start with your goals, audience and the message you need to
                communicate.
              </p>
            </div>
            <div className="border-t border-black/20 pt-5">
              <span className="font-display text-4xl font-semibold">02</span>
              <h3 className="mt-4 font-display text-xl font-semibold">
                Create with purpose
              </h3>
              <p className="mt-2 text-sm leading-7 text-[#686868]">
                Develop content and creative assets that support a consistent
                brand presence.
              </p>
            </div>
            <div className="border-t border-black/20 pt-5">
              <span className="font-display text-4xl font-semibold">03</span>
              <h3 className="mt-4 font-display text-xl font-semibold">
                Show up consistently
              </h3>
              <p className="mt-2 text-sm leading-7 text-[#686868]">
                Bring structure to digital execution instead of relying on
                occasional bursts of activity.
              </p>
            </div>
            <div className="border-t border-black/20 pt-5">
              <span className="font-display text-4xl font-semibold">04</span>
              <h3 className="mt-4 font-display text-xl font-semibold">
                Learn and refine
              </h3>
              <p className="mt-2 text-sm leading-7 text-[#686868]">
                Use agreed objectives and available insights to guide the next
                steps.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section-pad bg-[#faf9f6]">
        <div className="container-shell">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="What we do"
              title="Digital services, built around your brand."
              description="From everyday content to campaign creative, get the support you need to communicate clearly online."
            />
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-bold underline decoration-[#E2A712] underline-offset-4"
            >
              View all services <ArrowUpRight size={16} />
            </Link>
          </div>
          <div className="mt-12 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
            {site.services.slice(0, 4).map((s, i) => (
              <ServiceCard
                key={s.title}
                index={`0${i + 1}`}
                title={s.title}
                description={s.description}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="section-pad">
        <div className="container-shell">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Selected work"
              title="Creative that shows what’s possible."
              description="A considered showcase of campaign ideas, brand assets and content. Authentic project work will be added as approved assets are supplied."
            />
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-sm font-bold underline decoration-[#E2A712] underline-offset-4"
            >
              Explore portfolio <ArrowUpRight size={16} />
            </Link>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <div className="visual-placeholder aspect-[4/5] p-6">
              <p className="eyebrow relative z-10">Portfolio preview 01</p>
              <h3 className="relative z-10 mt-5 max-w-[220px] font-display text-3xl font-semibold">
                Social-first creative
              </h3>
              <p className="relative z-10 mt-3 text-xs">
                Replace with approved work
              </p>
            </div>
            <div className="visual-placeholder aspect-[4/5] bg-[#ece8df] p-6">
              <p className="eyebrow relative z-10">Portfolio preview 02</p>
              <h3 className="relative z-10 mt-5 max-w-[220px] font-display text-3xl font-semibold">
                A distinct brand voice
              </h3>
              <p className="relative z-10 mt-3 text-xs">
                Replace with approved work
              </p>
            </div>
            <div className="visual-placeholder aspect-[4/5] bg-[#f4ebd3] p-6">
              <p className="eyebrow relative z-10">Portfolio preview 03</p>
              <h3 className="relative z-10 mt-5 max-w-[220px] font-display text-3xl font-semibold">
                Content with purpose
              </h3>
              <p className="relative z-10 mt-3 text-xs">
                Replace with approved work
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section-pad bg-black text-white">
        <div className="container-shell grid gap-12 md:grid-cols-2 md:items-center">
          <SectionHeading
            eyebrow="Our point of view"
            title="Visibility is built, not wished into existence."
            description="We believe sustainable digital presence comes from understanding the audience, having something meaningful to say, and showing up with consistency."
            light
          />
          <div className="space-y-5">
            {[
              "Strategic thinking before execution",
              "Creative that serves a clear purpose",
              "Consistent communication across channels",
              "Honest collaboration and practical next steps",
            ].map((t) => (
              <div key={t} className="flex gap-3 border-b border-white/15 pb-5">
                <CheckCircle2
                  className="mt-0.5 shrink-0 text-[#E2A712]"
                  size={19}
                />
                <p className="text-sm leading-6 text-white/80">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-pad">
        <div className="container-shell grid gap-10 md:grid-cols-2 md:items-center">
          <div className="visual-placeholder aspect-[5/4] p-8">
            <div className="relative z-10 max-w-sm bg-white p-7 shadow-lg">
              <p className="eyebrow text-[#927000]">Learn and grow</p>
              <h3 className="mt-4 font-display text-3xl font-semibold">
                Knowledge should move your work forward.
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#686868]">
                Course information will be added when the catalogue and
                enrolment links are confirmed.
              </p>
            </div>
          </div>
          <div>
            <SectionHeading
              eyebrow="Courses"
              title="Build your digital skills with intention."
              description="Explore learning opportunities from The Evolving Digitals. Course details and purchase links will appear here once confirmed."
            />
            <Link href="/courses" className="button-secondary mt-6">
              Explore courses <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
