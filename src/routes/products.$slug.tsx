import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { getProduct, products, type Product } from "@/lib/products";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.product;
    const title = p ? `${p.name} — Ayura` : "Soap — Ayura";
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

function ProductDetail() {
  const { product: p } = Route.useLoaderData() as { product: Product };
  const others = products.filter((x) => x.slug !== p.slug);

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
            <div className="text-[11px] uppercase tracking-[0.28em] text-accent">{p.number} — {p.type}</div>
            <h1 className="mt-4 font-display text-5xl leading-[1.05]">{p.name}</h1>
            <p className="mt-4 font-display text-xl italic">{p.tagline}</p>
            <div className="mt-4 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">{p.mood.join(" • ")}</div>
            <p className="mt-6 leading-relaxed text-muted-foreground">{p.description}</p>

            <div className="mt-8 text-xs uppercase tracking-[0.2em] text-muted-foreground">110g bar</div>

            <div className="mt-10 grid gap-6 border-t border-border pt-8 sm:grid-cols-2">
              <div>
                <div className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">Scent</div>
                <p className="mt-2 text-sm">{p.scent}</p>
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">Scent profile</div>
                <p className="mt-2 text-sm">{p.scentProfile.join(" · ")}</p>
              </div>
            </div>

            <div className="mt-8 border-t border-border pt-8">
              <div className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">The ritual</div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.ritual}</p>
            </div>

            <div className="mt-8 border-t border-border pt-8">
              <div className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">Ingredients</div>
              <ul className="mt-3 space-y-1 text-sm">
                {p.ingredients.map((i) => (
                  <li key={i} className="flex gap-2"><span className="text-accent">—</span>{i}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-sell */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="font-display text-2xl md:text-3xl">Also in the collection</h2>
        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
