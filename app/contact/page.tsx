import type { Metadata } from "next";
import { Mail, MessageCircle, CalendarDays, ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { ContactForm } from "@/components/contact-form";
import { getWhatsAppUrl, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact The Evolving Digitals to discuss social media, content, creative design and digital marketing support.",
};

export default function Contact() {
  const wa = getWhatsAppUrl();
  const calendly = process.env.NEXT_PUBLIC_CALENDLY_URL;
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL || site.contact.email;

  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title="Tell us what you want your brand to become."
        description="Share a little about your business, what you need help with and where you want to go. We’ll use that as a starting point for the conversation."
        cta={false}
      />

      <section className="section-pad">
        <div className="container-shell grid gap-12 lg:grid-cols-[1.05fr_.75fr]">
          <div>
            <p className="eyebrow text-[#927000]">Project enquiry</p>
            <h2 className="mt-3 font-display text-3xl font-semibold">Let’s talk about your goals.</h2>
            <p className="mt-3 mb-8 max-w-xl text-sm leading-7 text-[#686868]">Complete the form to prepare your enquiry. Form delivery will be enabled when an API or email service is connected.</p>
            <ContactForm />
          </div>

          <aside className="space-y-5">
            <div className="bg-[#faf9f6] p-6 sm:p-8">
              <p className="eyebrow text-[#927000]">Other ways to connect</p>
              <h3 className="mt-3 font-display text-2xl font-semibold">Choose the channel that works for you.</h3>

              {email ? (
                <a href={`mailto:${email}`} className="mt-6 flex items-center gap-4 border-t border-black/10 pt-5">
                  <span className="grid h-11 w-11 place-items-center bg-white"><Mail size={19}/></span>
                  <span>
                    <span className="block text-xs text-[#686868]">Email</span>
                    <span className="mt-1 block text-sm font-bold">{email}</span>
                  </span>
                  <ArrowUpRight className="ml-auto" size={17}/>
                </a>
              ) : null}

              {wa ? (
                <a href={wa} target="_blank" rel="noreferrer" className="mt-5 flex items-center gap-4 border-t border-black/10 pt-5">
                  <span className="grid h-11 w-11 place-items-center bg-white"><MessageCircle size={19}/></span>
                  <span>
                    <span className="block text-xs text-[#686868]">WhatsApp</span>
                    <span className="mt-1 block text-sm font-bold">Message us</span>
                  </span>
                  <ArrowUpRight className="ml-auto" size={17}/>
                </a>
              ) : null}

              {calendly ? (
                <a href={calendly} target="_blank" rel="noreferrer" className="mt-5 flex items-center gap-4 border-t border-black/10 pt-5">
                  <span className="grid h-11 w-11 place-items-center bg-white"><CalendarDays size={19}/></span>
                  <span>
                    <span className="block text-xs text-[#686868]">Book a call</span>
                    <span className="mt-1 block text-sm font-bold">Schedule a consultation</span>
                  </span>
                  <ArrowUpRight className="ml-auto" size={17}/>
                </a>
              ) : null}
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
