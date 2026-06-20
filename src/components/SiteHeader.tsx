import { Link } from "@tanstack/react-router";
import { useState } from "react";
import logo from "@/assets/ayura-logo.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "Our Story" },
  { to: "/different", label: "Why Different" },
  { to: "/products", label: "Soaps" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src={logo} alt="Ayura" className="h-12 w-auto md:h-14" />
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-[12px] uppercase tracking-[0.22em] text-foreground/75 transition-colors hover:text-accent"
              activeProps={{ className: "text-accent" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
          <Link
            to="/admin"
            className="border border-foreground/20 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-foreground/80 transition-colors hover:border-accent hover:text-accent"
          >
            Admin
          </Link>
        </nav>
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-[12px] uppercase tracking-[0.2em]"
          aria-label="Toggle menu"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open && (
        <nav className="border-t border-border bg-background md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-6 py-4">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-3 text-[13px] uppercase tracking-[0.18em] text-foreground/80"
                activeProps={{ className: "text-accent" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/admin"
              onClick={() => setOpen(false)}
              className="py-3 text-[13px] uppercase tracking-[0.18em] text-accent"
            >
              Admin
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
