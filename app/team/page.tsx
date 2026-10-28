import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Team",
  description: "Meet the people behind The Evolving Digitals and the creative roles that shape the agency's work.",
};

export default function Team() {
  return (
    <>
      <PageHero
        eyebrow="Our team"
        title="Good work starts with good people."
        description="Get to know the individuals who bring strategy, creativity and execution to each client project."
        cta={false}
      />

      <section className="section-pad">
        <div className="container-shell">
          <div className="grid gap-8 md:grid-cols-3">
            {site.team.map((member) => (
              <article key={member.id} className="overflow-hidden border border-black/10 bg-white shadow-sm">
                <img src={member.image} alt={member.name} className="h-80 w-full object-cover" />
                <div className="p-6">
                  <p className="eyebrow text-[#927000]">{member.role}</p>
                  <h2 className="mt-3 font-display text-2xl font-semibold">{member.name}</h2>
                  <p className="mt-3 text-sm leading-7 text-[#686868]">{member.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Want to work with us?" />
    </>
  );
}

