import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Ayura" },
      { name: "description", content: "Get in touch with the Ayura workshop — questions, wholesale, custom orders, or just to say hello." },
      { property: "og:title", content: "Contact — Ayura" },
      { property: "og:description", content: "Get in touch with the Ayura workshop." },
    ],
  }),
  component: Contact,
});

const faqs = [
  { q: "How long does a bar last?", a: "With a draining dish and dry-between-uses care, a 110g bar lasts about 4–6 weeks of daily use." },
  { q: "Are your soaps safe for sensitive skin?", a: "Yes — the lavender bar in particular is built for reactive skin. If you have a known allergy to an ingredient, check the full list on each product page first." },
  { q: "Do you ship internationally?", a: "We currently ship across India, with select international shipping to the US, UK, and UAE. Email us for a quote." },
  { q: "Are the soaps vegan?", a: "Yes. All bars are 100% plant-based and cruelty-free. We use no tallow, honey, or animal-derived ingredients." },
  { q: "Do you offer wholesale or gifting?", a: "Yes — we work with small shops, hotels, and gift-curators. Drop us a line via the form below and tell us a bit about your project." },
  { q: "How should I store my soap?", a: "Keep it out of direct water between uses, on a draining wooden or slatted dish. A dry bar is a long-lasting bar." },
];

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="border-b border-border">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">
          <div className="text-[11px] uppercase tracking-[0.28em] text-accent">Say hello</div>
          <h1 className="mt-6 font-display text-5xl leading-[1.05] md:text-6xl">Get in touch.</h1>
          <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
            Questions about a bar, custom orders, wholesale, or just want to swap soap-making notes — we read every message.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-px bg-border px-0 py-0 md:grid-cols-[2fr_1fr]">
        {/* Form */}
        <div className="bg-background p-8 md:p-12">
          {sent ? (
            <div className="py-12 text-center">
              <h2 className="font-display text-3xl">Thank you.</h2>
              <p className="mt-3 text-muted-foreground">Your note is on its way. We usually reply within two working days.</p>
            </div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="space-y-6"
            >
              <h2 className="font-display text-2xl">Send a note</h2>
              <div className="grid gap-6 sm:grid-cols-2">
                <Field label="Name" name="name" required />
                <Field label="Email" name="email" type="email" required />
              </div>
              <Field label="Subject" name="subject" />
              <div>
                <label className="block text-[11px] uppercase tracking-[0.22em] text-muted-foreground">Message</label>
                <textarea
                  required
                  rows={6}
                  name="message"
                  className="mt-2 w-full border border-border bg-background px-4 py-3 text-sm focus:border-accent focus:outline-none"
                />
              </div>
              <button type="submit" className="bg-forest px-7 py-4 text-[11px] uppercase tracking-[0.22em] text-cream hover:bg-accent">
                Send message
              </button>
            </form>
          )}
        </div>

        {/* Details */}
        <div className="bg-muted/50 p-8 md:p-12">
          <h2 className="font-display text-2xl">Workshop</h2>
          <div className="mt-6 space-y-5 text-sm">
            <div>
              <div className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">Email</div>
              <a href="mailto:hello@saanvinaturals.com" className="mt-1 block hover:text-accent">hello@saanvinaturals.com</a>
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">Phone</div>
              <a href="tel:+919876543210" className="mt-1 block hover:text-accent">+91 98765 43210</a>
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">Hours</div>
              <p className="mt-1">Tue–Sat · 10am – 6pm IST</p>
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">Social</div>
              <div className="mt-2 flex gap-4 text-xs uppercase tracking-[0.22em]">
                <a href="#" className="hover:text-accent">Instagram</a>
                <a href="#" className="hover:text-accent">Pinterest</a>
                <a href="#" className="hover:text-accent">YouTube</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-6 py-24">
        <div className="text-[11px] uppercase tracking-[0.28em] text-accent">FAQ</div>
        <h2 className="mt-3 font-display text-3xl md:text-4xl">Things people ask</h2>
        <div className="mt-10 border-t border-border">
          {faqs.map((f) => (
            <details key={f.q} className="group border-b border-border py-6">
              <summary className="flex cursor-pointer items-center justify-between gap-6 text-base font-semibold uppercase tracking-[0.08em]">
                {f.q}
                <span className="text-accent transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 leading-relaxed text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-[11px] uppercase tracking-[0.22em] text-muted-foreground">{label}</label>
      <input
        required={required}
        type={type}
        name={name}
        className="mt-2 w-full border border-border bg-background px-4 py-3 text-sm focus:border-accent focus:outline-none"
      />
    </div>
  );
}
