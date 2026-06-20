import { createFileRoute, Link, Outlet } from "@tanstack/react-router";
import logo from "@/assets/ayura-logo.png";

export const Route = createFileRoute("/admin")({
  component: AdminLayout,
  head: () => ({ meta: [{ title: "Admin · Ayura" }] }),
});

const links = [
  { to: "/admin", label: "Dashboard", exact: true },
  { to: "/admin/products", label: "Products", exact: false },
  { to: "/admin/submissions", label: "Submissions", exact: false },
];

function AdminLayout() {
  return (
    <div className="flex min-h-screen bg-muted/40">
      <aside className="hidden w-64 shrink-0 flex-col border-r border-border bg-background md:flex">
        <Link to="/" className="flex items-center justify-center border-b border-border px-6 py-6">
          <img src={logo} alt="Ayura" className="h-12 w-auto" />
        </Link>
        <nav className="flex flex-col p-4">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.exact }}
              activeProps={{ className: "bg-forest text-cream" }}
              className="px-4 py-3 text-[12px] uppercase tracking-[0.2em] text-foreground/75 hover:bg-secondary"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="mt-auto border-t border-border p-4">
          <Link
            to="/"
            className="block px-4 py-3 text-[11px] uppercase tracking-[0.22em] text-muted-foreground hover:text-accent"
          >
            ← Back to site
          </Link>
        </div>
      </aside>

      <div className="flex flex-1 flex-col">
        <header className="flex items-center justify-between border-b border-border bg-background px-6 py-4">
          <div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Ayura</div>
            <div className="font-display text-xl">Admin Panel</div>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden text-right md:block">
              <div className="text-sm">Saanvi</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Owner</div>
            </div>
            <div className="grid h-10 w-10 place-items-center bg-forest font-display text-cream">A</div>
          </div>
        </header>
        <main className="flex-1 p-6 md:p-10">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
