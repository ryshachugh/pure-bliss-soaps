import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { getProduct, products } from "@/lib/products";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.product;
    const title = p ? `${p.name} — Saanvi Naturals` : "Soap — Saanvi Naturals";
    const desc = p?.shortDescription ?? "Handmade natural soap.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        ...(p ? [{ property: "og:image", content: p.image } as const] : []),
      ],
    };
  },
  component: ProductDetail,
  notFoundComponent: () => (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <div className="mx-auto max-w-2xl px-6 py-32 text-center">
        <h1 className="font-display text-4xl">Soap not found</h1>
        <p className="mt-3 text-muted-foreground">That bar isn't in our collection.</p>
        <Link to="/products" className="mt-8 inline-block bg-forest px-7 py-4 text-[11px] uppercase tracking-[0.22em] text-cream hover:bg-accent">
          See all soaps
        </Link>
      </div>
      <SiteFooter />
    </div>
  ),
});

function Stars({ n }: { n: number }) {
  return (
    <span className="text-accent" aria-label={`${n} out of 5`}>
      {"★".repeat(n)}<span className="text-muted-foreground">{"★".repeat(5 - n)}</span>
    </span>
  );
}

function ProductDetail() {
  const { product: p } = Route.useLoaderData();
  const others = products.filter((x) => x.slug !== p.slug);
  const avg = (p.reviews.reduce((s, r) => s + r.rating, 0) / p.reviews.length).toFixed(1);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <div className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-5 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
          <Link to="/" className="hover:text-accent">Home</Link>
          <span className="px-2">/</span>
          <Link to="/products" className="hover:text-accent">Soaps</Link>
          <span className="px-2">/</span>
          <span className="text-foreground">{p.name}</span>
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-12 md:grid-cols-2">
          <div className="space-y-3">
            <div className="aspect-square overflow-hidden bg-muted">
              <img src={p.image} alt={p.name} width={1100} height={1100} className="h-full w-full object-cover" />
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[0, 1, 2].map((i) => (
                <div key={i} className="aspect-square overflow-hidden bg-muted">
                  <img src={p.image} alt="" loading="lazy" className="h-full w-full object-cover opacity-90" />
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="text-[11px] uppercase tracking-[0.28em] text-accent">{p.tagline}</div>
            <h1 className="mt-4 font-display text-5xl leading-[1.05]">{p.name}</h1>
            <div className="mt-4 flex items-center gap-3 text-sm">
              <Stars n={Math.round(p.reviews.reduce((s, r) => s + r.rating, 0) / p.reviews.length)} />
              <span className="text-muted-foreground">{avg} · {p.reviews.length} reviews</span>
            </div>
            <p className="mt-6 leading-relaxed text-muted-foreground">{p.description}</p>

            <div className="mt-8 flex items-end gap-6">
              <div className="font-display text-4xl">${p.price}</div>
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">110g bar</div>
            </div>
            <button className="mt-6 w-full bg-forest px-7 py-5 text-[11px] uppercase tracking-[0.22em] text-cream hover:bg-accent sm:w-auto">
              Add to cart
            </button>

            <div className="mt-10 border-t border-border pt-8">
              <div className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">Ingredients</div>
              <ul className="mt-3 grid grid-cols-2 gap-y-1 text-sm">
                {p.ingredients.map((i) => (
                  <li key={i} className="flex gap-2"><span className="text-accent">—</span>{i}</li>
                ))}
              </ul>
            </div>

            <div className="mt-8 grid gap-6 border-t border-border pt-8 sm:grid-cols-2">
              <div>
                <div className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">Suitable for</div>
                <p className="mt-2 text-sm">{p.skinType}</p>
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">Benefits</div>
                <ul className="mt-2 space-y-1 text-sm">
                  {p.benefits.map((b) => <li key={b} className="flex gap-2"><span className="text-accent">—</span>{b}</li>)}
                </ul>
              </div>
            </div>

            <div className="mt-8 border-t border-border pt-8">
              <div className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">How to use</div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.usage}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="border-t border-border bg-muted/40">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="flex items-end justify-between">
            <h2 className="font-display text-3xl md:text-4xl">Customer reviews</h2>
            <div className="text-sm text-muted-foreground">{avg} average · {p.reviews.length} reviews</div>
          </div>
          <div className="mt-10 grid gap-px bg-border md:grid-cols-3">
            {p.reviews.map((r) => (
              <figure key={r.name} className="bg-background p-8">
                <Stars n={r.rating} />
                <blockquote className="mt-4 leading-relaxed">"{r.text}"</blockquote>
                <figcaption className="mt-6 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">{r.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-sell */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="font-display text-2xl md:text-3xl">Also in the collection</h2>
        <div className="mt-8 grid gap-8 sm:grid-cols-2">
          {others.map((o) => (
            <Link key={o.slug} to="/products/$slug" params={{ slug: o.slug }} className="group grid grid-cols-[140px_1fr] gap-6 border border-border p-4">
              <div className="aspect-square overflow-hidden bg-muted">
                <img src={o.image} alt={o.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="min-w-0">
                <h3 className="font-display text-xl">{o.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground line-clamp-3">{o.shortDescription}</p>
                <div className="mt-3 text-[11px] uppercase tracking-[0.22em] text-accent">View →</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
