import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { CtaBand } from "@/components/cta-band";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about The Evolving Digitals, our mission, vision and approach to digital brand growth.",
};

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About The Evolving Digitals"
        title="Helping ambitious brands show up with purpose."
        description="We partner with small businesses and startups to bring greater clarity, consistency and intention to their digital presence."
      />

      <section className="section-pad">
        <div className="container-shell grid gap-12 md:grid-cols-[.7fr_1.3fr]">
          <SectionHeading
            eyebrow="Our foundation"
            title="Built around meaningful brand growth."
            description="Our work starts with what a business needs to communicate and the people it needs to reach."
          />

          <div className="space-y-10">
            <div className="border-t border-black/15 pt-6">
              <p className="eyebrow text-[#927000]">Our mission</p>
              <p className="mt-4 font-display text-2xl leading-relaxed">“{site.mission}”</p>
            </div>
            <div className="border-t border-black/15 pt-6">
              <p className="eyebrow text-[#927000]">Our vision</p>
              <p className="mt-4 font-display text-2xl leading-relaxed">“{site.vision}”</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-[#faf9f6]">
        <div className="container-shell">
          <SectionHeading
            eyebrow="How we work"
            title="A practical approach to creative growth."
            description="A clear process helps good ideas become consistent execution."
          />

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              { n: "01", t: "Listen and understand", d: "Clarify your business priorities, audience, offer and current digital challenges." },
              { n: "02", t: "Plan and create", d: "Shape the messaging, content direction and creative deliverables around agreed goals." },
              { n: "03", t: "Execute and refine", d: "Support consistent delivery and use available feedback to inform what comes next." },
            ].map((x) => (
              <div key={x.n} className="border-t border-black/20 pt-5">
                <p className="font-display text-4xl text-[#927000]">{x.n}</p>
                <h3 className="mt-5 font-display text-xl font-semibold">{x.t}</h3>
                <p className="mt-3 text-sm leading-7 text-[#686868]">{x.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Our team"
            title="The people shaping the brand experience."
            description="A small, capable team focused on strategy, design and execution that moves businesses forward."
          />

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {site.team.map((member) => (
              <article key={member.id} className="overflow-hidden border border-black/10 bg-white shadow-sm">
                <img src={member.image} alt={member.name} className="h-80 w-full object-cover" />
                <div className="p-6">
                  <p className="eyebrow text-[#927000]">{member.role}</p>
                  <h3 className="mt-3 font-display text-2xl font-semibold">{member.name}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#686868]">{member.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Let’s understand where your brand can go next." />
    </>
  );
}
