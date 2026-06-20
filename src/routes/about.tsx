import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import process from "@/assets/process.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our Story — Ayura" },
      { name: "description", content: "How a kitchen experiment became a small soap workshop — our mission, our process, and the ingredients we believe in." },
      { property: "og:title", content: "Our Story — Ayura" },
      { property: "og:description", content: "How a kitchen experiment became a small soap workshop." },
    ],
  }),
  component: About,
});

const values = [
  { title: "Honest formulation", body: "If we can't pronounce it or source it, it doesn't go in the bar. Every ingredient has a job." },
  { title: "Slow craft", body: "Cold-process, six-week cure, hand-cut. The bar gets harder, milder, and longer-lasting with patience." },
  { title: "Small footprint", body: "Recycled paper wrap, soy ink, no plastic. Shipping in compostable mailers." },
  { title: "Cruelty-free, always", body: "Tested on partners, friends, and our own faces — never on animals." },
];

function About() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="border-b border-border">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">
          <div className="text-[11px] uppercase tracking-[0.28em] text-accent">Our story</div>
          <h1 className="mt-6 font-display text-5xl leading-[1.05] md:text-6xl">
            It started in a kitchen, with one broken bar of drugstore soap.
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-20">
        <div className="space-y-6 text-base leading-relaxed text-muted-foreground">
          <p>
            In 2021, after years of reactive skin and bars that left a film, the founder
            spent a winter learning to make soap the way her grandmother had — cold-pressed,
            slow-cured, with oils and butters you could trace back to a tree.
          </p>
          <p>
            The first batch was uneven. The second was better. The fifth was given to friends
            and family, who came back asking for more — and that was the beginning of Ayura
            Naturals: a workshop kitchen built around the simple idea that soap can be both
            ordinary and exceptional.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="border-y border-border bg-muted/40">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-[1fr_2fr]">
          <h2 className="font-display text-3xl md:text-4xl">Mission &amp; values</h2>
          <div className="grid gap-px bg-border sm:grid-cols-2">
            {values.map((v) => (
              <div key={v.title} className="bg-background p-8">
                <h3 className="text-sm font-semibold uppercase tracking-[0.14em]">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <img src={process} alt="Hand pouring soap into wooden molds" loading="lazy" width={1400} height={900} className="aspect-[4/3] w-full object-cover" />
          <div>
            <div className="text-[11px] uppercase tracking-[0.28em] text-accent">The process</div>
            <h2 className="mt-3 font-display text-3xl md:text-4xl">Five steps, six weeks, one bar.</h2>
            <ol className="mt-8 space-y-5">
              {[
                ["Source", "Cold-pressed oils, raw butters, dried herbs — selected and weighed by hand."],
                ["Blend", "Oils and lye-water are combined at temperature until they reach light trace."],
                ["Pour", "Essential oils and botanicals are folded in; the batch is poured into wooden molds."],
                ["Cut", "After 24 hours we unmold and hand-cut each bar to size."],
                ["Cure", "Bars cure on cedar racks for six weeks. The longer the cure, the milder the bar."],
              ].map(([step, body], i) => (
                <li key={step} className="grid grid-cols-[auto_1fr] gap-5">
                  <span className="font-display text-2xl text-accent">0{i + 1}</span>
                  <div>
                    <div className="text-sm font-semibold uppercase tracking-[0.12em]">{step}</div>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Ingredients philosophy / Vision */}
      <section className="border-t border-border bg-forest text-cream">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 md:grid-cols-2">
          <div>
            <div className="text-[11px] uppercase tracking-[0.28em] text-cream/60">Ingredients</div>
            <h2 className="mt-3 font-display text-3xl md:text-4xl">A short list, on purpose.</h2>
            <p className="mt-6 text-cream/80 leading-relaxed">
              We use cold-pressed coconut oil for lather, raw shea and cocoa butter for
              conditioning, and organic olive oil for mildness. Color and scent come from
              clays, charcoal, and steam-distilled essential oils. Nothing synthetic.
              Nothing extracted with petrochemicals. Nothing we wouldn't put on our own skin.
            </p>
          </div>
          <div>
            <div className="text-[11px] uppercase tracking-[0.28em] text-cream/60">The vision</div>
            <h2 className="mt-3 font-display text-3xl md:text-4xl">A bar in every home that earned its place.</h2>
            <p className="mt-6 text-cream/80 leading-relaxed">
              We want to make the kind of soap that becomes a small daily ritual — the one
              you reach for without thinking, the one you finish and immediately reorder.
              Not luxury. Not commodity. Just honest, considered, made by hand.
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
