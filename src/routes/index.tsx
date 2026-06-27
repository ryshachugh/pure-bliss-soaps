import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { products } from "@/lib/products";
import hero from "@/assets/hero-soaps.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ayura — Nature's Care in Every Bar" },
      { name: "description", content: "Handmade, cold-processed natural soap. Botanical oils, raw butters, and slow craft — no synthetic detergents, no shortcuts." },
      { property: "og:title", content: "Ayura — Nature's Care in Every Bar" },
      { property: "og:description", content: "Handmade, cold-processed natural soap. Botanical oils and raw butters, slowly cured." },
    ],
  }),
  component: Home,
});

const reasons = [
  { title: "Cold-processed by hand", body: "Every bar is mixed, poured, and cut in our workshop kitchen — never extruded by machine." },
  { title: "Real botanical ingredients", body: "Cold-pressed oils, raw shea and cocoa butter, herbs we can name and source." },
  { title: "Cured for six weeks", body: "Slow curing means a harder, longer-lasting bar that gets creamier with use." },
  { title: "Zero synthetic fragrance", body: "Only steam-distilled essential oils. What you smell is what's actually in the bar." },
];


function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero */}
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-7xl items-stretch md:grid-cols-2">
          <div className="flex flex-col justify-center px-6 py-16 md:px-12 md:py-24">
            <div className="text-[11px] uppercase tracking-[0.28em] text-accent">Est. small batch</div>
            <h1 className="mt-6 font-display text-5xl leading-[1.05] md:text-7xl">
              Nature's care<br />in every bar.
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              Handmade soap, cold-processed in small batches with botanical oils, raw butters,
              and herbs we grow, dry, or source from people we know.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/products" className="bg-forest px-7 py-4 text-[11px] uppercase tracking-[0.22em] text-cream hover:bg-accent">
                Shop the soaps
              </Link>
              <Link to="/about" className="border border-foreground px-7 py-4 text-[11px] uppercase tracking-[0.22em] hover:bg-foreground hover:text-background">
                Our story
              </Link>
            </div>
          </div>
          <div className="relative min-h-[420px] md:min-h-full">
            <img src={hero} alt="Stack of handmade soap bars with lavender and shea butter" className="absolute inset-0 h-full w-full object-cover" width={1600} height={1100} />
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-3xl px-6 py-24 text-center">
        <div className="text-[11px] uppercase tracking-[0.28em] text-accent">A note from the workshop</div>
        <p className="mt-6 font-display text-2xl leading-snug md:text-3xl">
          We started Ayura because the bar in our shower had a fourteen-syllable
          ingredient list and our grandmothers' recipes did not.
        </p>
      </section>

      {/* Why Choose Us */}
      <section className="border-y border-border bg-muted/40">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="flex items-end justify-between">
            <h2 className="font-display text-3xl md:text-4xl">Why choose us</h2>
            <Link to="/different" className="hidden text-[11px] uppercase tracking-[0.22em] text-accent md:inline">
              Compared to commercial soap →
            </Link>
          </div>
          <div className="mt-12 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-4">
            {reasons.map((r, i) => (
              <div key={r.title} className="bg-background p-8">
                <div className="font-display text-3xl text-accent">0{i + 1}</div>
                <h3 className="mt-6 text-base font-semibold uppercase tracking-[0.12em]">{r.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex items-end justify-between">
          <div>
            <div className="text-[11px] uppercase tracking-[0.28em] text-accent">The collection</div>
            <h2 className="mt-3 font-display text-3xl md:text-4xl">Featured soaps</h2>
          </div>
          <Link to="/products" className="text-[11px] uppercase tracking-[0.22em] text-accent">View all →</Link>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {products.map((p) => (
            <Link
              key={p.slug}
              to="/products/$slug"
              params={{ slug: p.slug }}
              className="group block"
            >
              <div className="aspect-square overflow-hidden bg-muted">
                <img src={p.image} alt={p.name} loading="lazy" width={1100} height={1100} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-xl">{p.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.tagline}</p>
                </div>
                <div className="shrink-0 text-sm font-semibold">${p.price}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>


      <SiteFooter />
    </div>
  );
}
