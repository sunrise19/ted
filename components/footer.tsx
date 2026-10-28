import Link from "next/link";
import { ArrowUpRight, Instagram, Mail, MessageCircle, Music2, Phone, Twitter } from "lucide-react";
import { navItems, site, getWhatsAppUrl } from "@/lib/site";

export function Footer() {
  const wa = getWhatsAppUrl();
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL || site.contact.email;
  const phone = site.contact.phone;

  return (
    <footer className="bg-black text-white">
      <div className="container-shell py-16">
        <div className="grid gap-12 border-b border-white/15 pb-12 md:grid-cols-[1.3fr_.7fr_.9fr]">
          <div>
            <img src="/images/logo/ted_logo.jpeg" alt="The Evolving Digitals logo" className="h-10" />
            <h2 className="mt-4 max-w-md text-3xl font-semibold leading-tight sm:text-4xl">Make your next digital move a considered one.</h2>
            <p className="mt-4 max-w-md text-sm leading-7 text-white/65">Strategic content, creative execution and digital support for brands ready to grow with intention.</p>
            <Link href="/contact" className="button-primary mt-6">Start a conversation <ArrowUpRight size={16}/></Link>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold">Explore</h3>
            <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3">{navItems.map((n) => <Link key={n.href} href={n.href} className="text-xs text-white/65 hover:text-[#E2A712]">{n.label}</Link>)}</div>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold">Get in touch</h3>
            <p className="mt-4 text-sm leading-6 text-white/65">Have a project in mind? Tell us what you are working towards.</p>
            <a className="mt-4 flex items-center gap-2 text-sm hover:text-[#E2A712]" href={`tel:${phone}`}><Phone size={16}/>{phone}</a>
            <a className="mt-3 flex items-center gap-2 text-sm hover:text-[#E2A712]" href={`mailto:${email}`}><Mail size={16}/>{email}</a>
            {wa ? <a className="mt-3 flex items-center gap-2 text-sm hover:text-[#E2A712]" href={wa} target="_blank" rel="noreferrer"><MessageCircle size={16}/> Chat on WhatsApp</a> : null}

            <div className="mt-5 flex items-center gap-3">
              <a href={site.contact.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/75 hover:border-[#E2A712] hover:text-[#E2A712]">
                <Instagram size={16} />
              </a>
              <a href={site.contact.tiktok} target="_blank" rel="noreferrer" aria-label="TikTok" className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/75 hover:border-[#E2A712] hover:text-[#E2A712]">
                <Music2 size={16} />
              </a>
              <a href={site.contact.x} target="_blank" rel="noreferrer" aria-label="X" className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/75 hover:border-[#E2A712] hover:text-[#E2A712]">
                <Twitter size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-3 pt-6 text-xs text-white/45 sm:flex-row">
          <span>© {new Date().getFullYear()} {site.name}. All rights reserved.</span>
          <span>Built for clarity, creativity and considered growth.</span>
        </div>
      </div>
    </footer>
  );
}

