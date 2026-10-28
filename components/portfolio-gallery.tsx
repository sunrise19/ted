"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/lib/site";

const categories = ["All", ...Array.from(new Set(site.portfolio.map((project) => project.category)))];

const tedGallery = [
  "/images/ted/ddd/83-M-ViewsArtboard-1.png",
  "/images/ted/ddd/Baby-Asher-modArtboard-1.png",
  "/images/ted/ddd/Baby-AsherArtboard-1.png",
  "/images/ted/ddd/Brand-Stand-outArtboard-1.png",
  "/images/ted/ddd/CEO-BDesignArtboard-1.png",
  "/images/ted/ddd/EngageArtboard-1.png",
  "/images/ted/ddd/IDEAL-AUDIENCEArtboard-1.png",
  "/images/ted/ddd/IG-BioArtboard-1.png",
  "/images/ted/ddd/Market-challengeArtboard-1.png",
  "/images/ted/ddd/MISSING-STRATEGYArtboard-1-copy-2.png",
  "/images/ted/ddd/MISSING-STRATEGYArtboard-1-copy-3.png",
  "/images/ted/ddd/MISSING-STRATEGYArtboard-1-copy-4.png",
  "/images/ted/ddd/MISSING-STRATEGYArtboard-1-copy.png",
  "/images/ted/ddd/MISSING-STRATEGYArtboard-1.png",
  "/images/ted/ddd/MythArtboard-1.png",
  "/images/ted/ddd/MythArtboard-2.png",
  "/images/ted/ddd/SeptemberArtboard-1.png",
  "/images/ted/ddd/TED-Highlights-CoversResults.png",
  "/images/ted/ddd/TED-Highlights-CoversTrainings.png",
  "/images/ted/ddd/Your-BusinessArtboard-1.png",
  "/images/ted/June_/democracy-day-TED-modArtboard-1-copy.png",
  "/images/ted/June_/democracy-day-TED-modArtboard-1.png",
  "/images/ted/June_/JAson-Design-ModArtboard-1.png",
  "/images/ted/June_/July-New-MonthArtboard-1.png",
  "/images/ted/June_/june-new-month-designArtboard-1.png",
  "/images/ted/June_/Meme-modArtboard-1.png",
  "/images/ted/June_/MemeArtboard-1.png",
  "/images/ted/June_/MistakesArtboard-1-copy-10.png",
  "/images/ted/June_/MistakesArtboard-1-copy-2.png",
  "/images/ted/June_/MistakesArtboard-1-copy-3.png",
  "/images/ted/June_/MistakesArtboard-1-copy-4.png",
  "/images/ted/June_/MistakesArtboard-1-copy-5.png",
  "/images/ted/June_/MistakesArtboard-1-copy-6.png",
  "/images/ted/June_/MistakesArtboard-1-copy-7.png",
  "/images/ted/June_/MistakesArtboard-1-copy-9.png",
  "/images/ted/June_/MistakesArtboard-1-copy.png",
  "/images/ted/June_/Our-social-plansArtboard-1.png",
  "/images/ted/June_/social-growth-coverArtboard-1-copy.png",
  "/images/ted/June_/social-growth-modifiedArtboard-1-copy.png",
  "/images/ted/June_/social-growthArtboard-1-copy.png",
  "/images/ted/June_/social-growthArtboard-2-copy-2.png",
  "/images/ted/June_/social-growthArtboard-2-copy-3.png",
  "/images/ted/June_/social-growthArtboard-2-copy.png",
  "/images/ted/June_/social-growthArtboard-2.png",
  "/images/ted/June_/What-to-ExpectArtboard-1-copy-2.png",
  "/images/ted/June_/What-to-ExpectArtboard-1-copy-3.png",
  "/images/ted/June_/What-to-ExpectArtboard-1-copy-4.png",
  "/images/ted/June_/What-to-ExpectArtboard-1-copy-5.png",
  "/images/ted/June_/What-to-ExpectArtboard-1-copy-6.png",
  "/images/ted/June_/What-to-ExpectArtboard-1-copy.png",
  "/images/ted/June_/What-to-ExpectArtboard-1.png",
  "/images/ted/MAy_/Hallelujah-modifiedArtboard-1.png",
  "/images/ted/MAy_/HallelujahArtboard-1.png",
  "/images/ted/MAy_/May-Design-modifiedArtboard-1.png",
  "/images/ted/MAy_/SoarArtboard-1.png",
  "/images/ted/MAy_/Social-media-need-edArtboard-1.png",
  "/images/ted/MAy_/Social-media-needArtboard-1.png",
  "/images/ted/MAy_/Social-media-needArtboard-2-copy.png",
  "/images/ted/MAy_/Social-media-needArtboard-2.png",
  "/images/ted/MAy_/Social-media-needArtboard-3.png",
  "/images/ted/MAy_/Social-media-needArtboard-4.png",
  "/images/ted/MAy_/Social-media-needArtboard-5.png",
  "/images/ted/MAy_/Social-media-needArtboard-6.png",
  "/images/ted/MAy_/TED-Childrens-DayArtboard-1.png",
];

export function PortfolioGallery() {
  const [active, setActive] = useState("All");
  const items = useMemo(
    () => (active === "All" ? site.portfolio : site.portfolio.filter((project) => project.category === active)),
    [active],
  );

  return (
    <div className="space-y-16">
      <div>
        <div className="mb-8 flex flex-wrap gap-2" aria-label="Filter portfolio projects">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActive(category)}
              aria-pressed={active === category}
              className={`focus-ring border px-4 py-2 text-xs font-semibold transition ${active === category ? "border-black bg-black text-white" : "border-black/15 hover:border-black"}`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((project) => (
            <article key={project.id} className="group overflow-hidden border border-black/10 bg-white">
              <div className="relative overflow-hidden">
                <img
                  src={project.cover}
                  alt={project.title}
                  className="h-72 w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute left-4 top-4 z-10 border border-black/20 bg-white/85 px-3 py-2 text-[10px] font-bold uppercase tracking-widest text-black">
                  {project.category}
                </div>
                <span className="absolute bottom-4 right-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-black text-white">
                  <ArrowUpRight size={17} />
                </span>
              </div>

              <div className="p-5">
                <h3 className="font-display text-xl font-semibold">{project.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#686868]">{project.description}</p>
                <p className="mt-4 text-[10px] uppercase tracking-[0.18em] text-[#927000]">{project.gallery.length} visuals</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="border-t border-black/10 pt-12">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow text-[#927000]">Studio gallery</p>
            <h2 className="mt-3 font-display text-3xl font-semibold">The Evolving Digitals design archive</h2>
          </div>
          <p className="text-xs uppercase tracking-[0.2em] text-[#686868]">{tedGallery.length} creative assets</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {tedGallery.map((src, index) => (
            <div key={`${src}-${index}`} className="group overflow-hidden border border-black/10 bg-[#faf9f6]">
              <img
                src={src}
                alt={`The Evolving Digitals design ${index + 1}`}
                className="h-72 w-full object-cover transition duration-700 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

