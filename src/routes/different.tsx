import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/different")({
  head: () => ({
    meta: [
      { title: "Why Our Soaps Are Different — Ayura" },
      { name: "description", content: "Handmade, cold-processed natural soap vs mass-produced commercial soap — a side-by-side look at what's in the bar and how it's made." },
      { property: "og:title", content: "Why Our Soaps Are Different — Ayura" },
      { property: "og:description", content: "Natural, handmade soap compared to commercial soap, side by side." },
    ],
  }),
  component: Different,
});

const rows: { label: string; ours: string; theirs: string }[] = [
  { label: "Ingredients", ours: "Cold-pressed plant oils, raw butters, essential oils, clays.", theirs: "Synthetic detergents (SLS / SLES), parabens, EDTA, artificial fragrance." },
  { label: "How it's made", ours: "Hand-mixed, hand-poured, hand-cut in small batches.", theirs: "Extruded and stamped at industrial scale, often hundreds of thousands per day." },
  { label: "Cure time", ours: "Six weeks on cedar curing racks for a harder, milder bar.", theirs: "Pressed and packed within hours — no cure." },
  { label: "Oils &amp; butters", ours: "Raw shea, cocoa butter, olive, coconut, castor, neem.", theirs: "Tallow, refined palm derivatives, mineral oil.", },
  { label: "Fragrance", ours: "Steam-distilled essential oils, used sparingly.", theirs: "'Parfum' / 'fragrance' — undisclosed synthetic blends." },
  { label: "Packaging", ours: "Recycled paper wrap, soy ink, compostable mailers.", theirs: "Plastic film, foil-lined cartons, polybag inserts." },
  { label: "Testing", ours: "On us, our friends, and consenting humans.", theirs: "Often supplied by chains that still allow animal testing for export." },
  { label: "Skin feel", ours: "Conditioning, creamy lather, no tightness after rinsing.", theirs: "Squeaky-clean — that 'squeak' is stripped lipid barrier." },
];

function Different() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="border-b border-border">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">
          <div className="text-[11px] uppercase tracking-[0.28em] text-accent">A side-by-side</div>
          <h1 className="mt-6 font-display text-5xl leading-[1.05] md:text-6xl">
            Most soap isn't actually soap.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
            What's sold as "soap" in most stores is a synthetic detergent bar.
            Here's how a real handmade, cold-processed bar compares — line by line.
          </p>
        </div>
      </section>

      {/* Comparison table */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="overflow-x-auto border border-border">
          <table className="w-full min-w-[720px] text-left text-sm">
            <thead className="bg-forest text-cream">
              <tr>
                <th className="px-6 py-5 text-[11px] uppercase tracking-[0.22em]">&nbsp;</th>
                <th className="px-6 py-5 text-[11px] uppercase tracking-[0.22em]">Ayura</th>
                <th className="px-6 py-5 text-[11px] uppercase tracking-[0.22em] text-cream/70">Typical commercial bar</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={r.label} className={i % 2 ? "bg-muted/30" : "bg-background"}>
                  <th scope="row" className="border-t border-border px-6 py-5 align-top text-[11px] font-semibold uppercase tracking-[0.16em]">
                    {r.label}
                  </th>
                  <td
                    className="border-t border-border px-6 py-5 align-top leading-relaxed text-foreground"
                    dangerouslySetInnerHTML={{ __html: r.ours }}
                  />
                  <td
                    className="border-t border-border px-6 py-5 align-top leading-relaxed text-muted-foreground"
                    dangerouslySetInnerHTML={{ __html: r.theirs }}
                  />
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Pillars */}
      <section className="border-y border-border bg-muted/40">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="font-display text-3xl md:text-4xl">What that adds up to</h2>
          <div className="mt-12 grid gap-px bg-border md:grid-cols-3">
            {[
              ["Skin-friendly oils &amp; butters", "Raw shea, cocoa butter, and olive oil retain natural glycerin — the part commercial soap removes and sells separately as lotion."],
              ["Eco-friendly packaging", "Paper, soy ink, compostable mailers. The wrapper goes in the compost; the bar goes in the dish."],
              ["Cruelty-free production", "We test on ourselves and willing humans. No animal testing, no animal-derived ingredients."],
            ].map(([title, body]) => (
              <div key={title} className="bg-background p-8">
                <h3 className="text-sm font-semibold uppercase tracking-[0.12em]" dangerouslySetInnerHTML={{ __html: title }} />
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h2 className="font-display text-3xl md:text-4xl">Try a bar, feel the difference.</h2>
        <p className="mt-4 text-muted-foreground">A week is usually enough.</p>
        <div className="mt-8">
          <Link to="/products" className="bg-forest px-7 py-4 text-[11px] uppercase tracking-[0.22em] text-cream hover:bg-accent">
            Shop the soaps
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
