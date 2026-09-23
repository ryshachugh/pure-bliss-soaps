import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { products } from "@/lib/products";
import { processSteps } from "@/lib/process";
import hero from "@/assets/hero-soaps.jpg";
import process from "@/assets/process.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ayura — A Ritual, Reimagined" },
      { name: "description", content: "Handcrafted in small batches, inspired by Ayurveda, and made with purpose — our profits are donated to charity." },
      { property: "og:title", content: "Ayura — A Ritual, Reimagined" },
      { property: "og:description", content: "Handcrafted in small batches, inspired by Ayurveda, and made with purpose — our profits are donated to charity." },
    ],
  }),
  component: Home,
});

const reasons = [
  { title: "Handcrafted with care", body: "Every Ayura soap is handmade in small batches, thoughtfully crafted with care and attention to every detail." },
  { title: "Inspired by Ayurveda", body: "Rooted in the beauty of Ayurvedic traditions, Ayura draws inspiration from natural ingredients, timeless rituals, and the idea of keeping skincare simple and intentional." },
  { title: "Gentle everyday care", body: "Our soaps are designed to cleanse the skin while keeping your everyday bathing ritual feeling comfortable, fresh, and cared for." },
  { title: "Thoughtfully chosen ingredients", body: "From creamy goat milk to botanical-inspired ingredients and carefully selected fragrances, every element is chosen with the experience of the bar in mind." },
  { title: "Made with purpose", body: "Ayura is more than beautifully crafted soap. Every purchase helps support something beyond ourselves." },
  { title: "All donations go to charity", body: "Our commitment goes beyond skincare. Proceeds from Ayura are donated to charity, turning everyday self-care into an opportunity to give back." },
];


function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero */}
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-7xl items-stretch md:grid-cols-2">
          <div className="flex flex-col justify-center px-6 py-16 md:px-12 md:py-24">
            <div className="text-[11px] uppercase tracking-[0.28em] text-accent">Ayura</div>
            <h1 className="mt-6 font-display text-5xl leading-[1.05] md:text-7xl">
              A ritual,<br />reimagined.
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              Handcrafted with intention, inspired by Ayurveda, and created with a purpose —
              Ayura makes the everyday feel a little more meaningful.
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
            <img src={hero} alt="Stack of handmade Ayura soap bars" className="absolute inset-0 h-full w-full object-cover" width={1600} height={1100} />
          </div>
        </div>
      </section>

      {/* Made with purpose */}
      <section className="mx-auto max-w-3xl px-6 py-24 text-center">
        <div className="text-[11px] uppercase tracking-[0.28em] text-accent">Made with purpose</div>
        <p className="mt-6 font-display text-2xl leading-snug md:text-3xl">
          Every Ayura bar is carefully handmade in small batches — from selecting the soap
          base to blending its signature scent and colour. But our process doesn't end when
          the soap is finished.
        </p>
        <p className="mt-6 leading-relaxed text-muted-foreground">
          Ayura was created to make everyday self-care mean a little more. Our profits are
          donated to charity, turning every bar into a small act of giving.
        </p>
        <p className="mt-6 text-[11px] uppercase tracking-[0.22em]">Handmade with care. Made with purpose.</p>
      </section>

      {/* Why Choose Us */}
      <section className="border-y border-border bg-muted/40">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="flex items-end justify-between">
            <h2 className="font-display text-3xl md:text-4xl">Why choose Ayura?</h2>
            <Link to="/different" className="hidden text-[11px] uppercase tracking-[0.22em] text-accent md:inline">
              Compared to commercial soap →
            </Link>
          </div>
          <div className="mt-12 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
            {reasons.map((r, i) => (
              <div key={r.title} className="bg-background p-8">
                <div className="font-display text-3xl text-accent">0{i + 1}</div>
                <h3 className="mt-6 text-base font-semibold uppercase tracking-[0.12em]">{r.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{r.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <h3 className="font-display text-2xl md:text-3xl">Small batch. Big heart.</h3>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
              Handcrafted with intention, inspired by Ayurveda, and created with a purpose —
              Ayura makes the everyday feel a little more meaningful.
            </p>
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

      {/* Our Process */}
      <section className="border-t border-border bg-muted/40">
        <div className="mx-auto grid max-w-7xl items-stretch md:grid-cols-2">
          <div className="relative min-h-[420px] md:min-h-full">
            <img src={process} alt="Ayura soap being made by hand" loading="lazy" width={1400} height={1100} className="absolute inset-0 h-full w-full object-cover" />
          </div>
          <div className="flex flex-col justify-center px-6 py-16 md:px-12 md:py-24">
            <div className="text-[11px] uppercase tracking-[0.28em] text-accent">How we make it</div>
            <h2 className="mt-6 font-display text-3xl leading-[1.1] md:text-4xl">A ritual, reimagined.</h2>

            <ol className="mt-10 grid gap-x-8 gap-y-6 sm:grid-cols-2">
              {processSteps.map((s, i) => (
                <li key={s.t} className="grid grid-cols-[auto_1fr] gap-4">
                  <div className="font-display text-2xl text-accent leading-none">0{i + 1}</div>
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-[0.12em]">{s.t}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.b}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-10 border-t border-border pt-8">
              <h3 className="font-display text-xl">Handmade, from start to finish.</h3>
              <p className="mt-2 text-sm text-muted-foreground">Small batches. Thoughtful details. A little more care in every bar.</p>
            </div>
          </div>
        </div>
      </section>


      <SiteFooter />
    </div>
  );
}
