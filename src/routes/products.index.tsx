import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { products } from "@/lib/products";

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title: "The Soaps — Ayura" },
      { name: "description", content: "Our full collection of handcrafted soaps — Petal Escape, Pure Noir, Secret Skies, Secret Garden, Bare Tropics and Cozy Cloud." },
      { property: "og:title", content: "The Soaps — Ayura" },
      { property: "og:description", content: "Our full collection of handcrafted soaps." },
    ],
  }),
  component: ProductsIndex,
});

function ProductsIndex() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="border-b border-border">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <div className="text-[11px] uppercase tracking-[0.28em] text-accent">The collection</div>
          <h1 className="mt-6 font-display text-5xl leading-[1.05] md:text-6xl">All soaps</h1>
          <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
            Six handcrafted bars, each built around a single scent and mood —
            turning an everyday cleanse into a small ritual.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <ul className="grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <li key={p.slug} className="bg-background">
              <Link
                to="/products/$slug"
                params={{ slug: p.slug }}
                className="group block"
              >
                <div className="aspect-square overflow-hidden bg-muted">
                  <img src={p.image} alt={p.name} loading="lazy" width={1100} height={1100} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <div className="text-[10px] uppercase tracking-[0.22em] text-accent">{p.number} — {p.type}</div>
                  <div className="mt-2 flex items-start justify-between gap-4">
                    <h2 className="font-display text-2xl">{p.name}</h2>
                    <div className="shrink-0 text-sm font-semibold">${p.price}</div>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{p.shortDescription}</p>
                  <div className="mt-5 border-t border-border pt-5">
                    <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Scent profile</div>
                    <p className="mt-2 text-sm">{p.scentProfile.join(" · ")}</p>
                  </div>
                  <div className="mt-4">
                    <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Mood</div>
                    <p className="mt-2 text-sm">{p.mood.join(" • ")}</p>
                  </div>
                  <div className="mt-6 inline-block text-[11px] uppercase tracking-[0.22em] text-accent">
                    View bar →
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <SiteFooter />
    </div>
  );
}
