import { createFileRoute } from "@tanstack/react-router";
import { products } from "@/lib/products";

export const Route = createFileRoute("/admin/")({
  component: AdminDashboard,
});

const stats = [
  { label: "Total Revenue", value: "₹ 1,42,580", delta: "+12.4%", note: "vs last month" },
  { label: "Orders", value: "318", delta: "+5.2%", note: "this month" },
  { label: "Bars Sold", value: "1,284", delta: "+8.1%", note: "this month" },
  { label: "Avg. Order Value", value: "₹ 448", delta: "-1.3%", note: "vs last month" },
];

const recentOrders = [
  { id: "#A-1042", name: "Priya S.", item: "Lavender · ×2", total: "₹ 480", status: "Shipped" },
  { id: "#A-1041", name: "Ishaan V.", item: "Charcoal · ×1", total: "₹ 260", status: "Packed" },
  { id: "#A-1040", name: "Mira K.", item: "Neem & Tulsi · ×3", total: "₹ 660", status: "Pending" },
  { id: "#A-1039", name: "Devansh P.", item: "Gift Trio", total: "₹ 1,140", status: "Shipped" },
  { id: "#A-1038", name: "Aarav T.", item: "Lavender · ×1", total: "₹ 240", status: "Delivered" },
];

const monthly = [40, 55, 48, 70, 62, 80, 75, 90, 84, 96, 110, 128];
const max = Math.max(...monthly);

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-display text-3xl">Dashboard</h1>
        <p className="mt-1 text-sm text-muted-foreground">A snapshot of the workshop this month.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="border border-border bg-background p-5">
            <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{s.label}</div>
            <div className="mt-3 font-display text-2xl">{s.value}</div>
            <div className="mt-2 flex items-center gap-2 text-xs">
              <span className={s.delta.startsWith("-") ? "text-destructive" : "text-forest"}>{s.delta}</span>
              <span className="text-muted-foreground">{s.note}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="border border-border bg-background p-6 lg:col-span-2">
          <div className="flex items-baseline justify-between">
            <h2 className="font-display text-xl">Sales · Last 12 months</h2>
            <span className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Bars / month</span>
          </div>
          <div className="mt-6 flex h-56 items-end gap-2">
            {monthly.map((v, i) => (
              <div key={i} className="flex flex-1 flex-col items-center gap-2">
                <div
                  className="w-full bg-forest/80 transition-all hover:bg-accent"
                  style={{ height: `${(v / max) * 100}%` }}
                />
                <span className="text-[10px] text-muted-foreground">
                  {["J","F","M","A","M","J","J","A","S","O","N","D"][i]}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="border border-border bg-background p-6">
          <h2 className="font-display text-xl">Top Products</h2>
          <ul className="mt-4 space-y-4">
            {products.map((p, i) => {
              const pct = [78, 62, 45][i] ?? 30;
              return (
                <li key={p.slug}>
                  <div className="flex items-center justify-between text-sm">
                    <span>{p.name}</span>
                    <span className="text-muted-foreground">{pct}%</span>
                  </div>
                  <div className="mt-2 h-2 w-full bg-muted">
                    <div className="h-full bg-accent" style={{ width: `${pct}%` }} />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="border border-border bg-background">
        <div className="flex items-center justify-between border-b border-border px-6 py-4">
          <h2 className="font-display text-xl">Recent Orders</h2>
          <button className="text-[11px] uppercase tracking-[0.22em] text-accent">View all</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                <th className="px-6 py-3">Order</th>
                <th className="px-6 py-3">Customer</th>
                <th className="px-6 py-3">Item</th>
                <th className="px-6 py-3">Total</th>
                <th className="px-6 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((o) => (
                <tr key={o.id} className="border-t border-border">
                  <td className="px-6 py-4 font-mono text-xs">{o.id}</td>
                  <td className="px-6 py-4">{o.name}</td>
                  <td className="px-6 py-4 text-muted-foreground">{o.item}</td>
                  <td className="px-6 py-4">{o.total}</td>
                  <td className="px-6 py-4">
                    <span className="border border-border px-2 py-1 text-[10px] uppercase tracking-[0.2em]">
                      {o.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
