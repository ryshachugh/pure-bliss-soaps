import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-forest text-cream">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="font-display text-2xl uppercase tracking-[0.18em]">Ayura</div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream/75">
            Small-batch handmade soap, cold-processed and slow-cured in a workshop kitchen.
            Nature's care in every bar.
          </p>
        </div>
        <div>
          <div className="text-[11px] uppercase tracking-[0.22em] text-cream/60">Explore</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-accent">Our Story</Link></li>
            <li><Link to="/different" className="hover:text-accent">Why Different</Link></li>
            <li><Link to="/products" className="hover:text-accent">All Soaps</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-[11px] uppercase tracking-[0.22em] text-cream/60">Find Us</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li>hello@saanvinaturals.com</li>
            <li>+91 98765 43210</li>
            <li className="flex gap-4 pt-2 text-xs uppercase tracking-[0.2em]">
              <a href="#" className="hover:text-accent">Instagram</a>
              <a href="#" className="hover:text-accent">Pinterest</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/15">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 text-[11px] uppercase tracking-[0.2em] text-cream/60">
          <span>© {new Date().getFullYear()} Ayura</span>
          <span>Handmade · Cold-processed · Cruelty-free</span>
        </div>
      </div>
    </footer>
  );
}
