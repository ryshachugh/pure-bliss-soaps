import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/admin/submissions")({
  component: AdminSubmissions,
});

type Submission = {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  date: string;
  status: "new" | "read" | "replied";
};

const seed: Submission[] = [
  { id: "s-09", name: "Anaya Roy", email: "anaya@example.com", subject: "Wholesale enquiry", message: "Hi, I run a small boutique in Pune and would love to stock your lavender bars. Could you send a wholesale price list?", date: "Jun 18, 2026", status: "new" },
  { id: "s-08", name: "Mira Kapoor", email: "mira.k@example.com", subject: "Custom gift box", message: "Looking for 20 gift boxes for a wedding in August. Can you do custom labels?", date: "Jun 17, 2026", status: "new" },
  { id: "s-07", name: "Devansh Patel", email: "dev@example.com", subject: "Charcoal restock?", message: "When is the charcoal bar back in stock? I've been waiting two weeks.", date: "Jun 15, 2026", status: "read" },
  { id: "s-06", name: "Priya Sharma", email: "priya@example.com", subject: "Thank you", message: "Just wanted to say the neem & tulsi soap cleared up my skin completely. Sending photos!", date: "Jun 12, 2026", status: "replied" },
  { id: "s-05", name: "Ishaan Verma", email: "ishaan@example.com", subject: "Ingredient question", message: "Is the cocoa butter in the charcoal bar ethically sourced?", date: "Jun 10, 2026", status: "replied" },
];

export default function AdminSubmissions() {
  const [items, setItems] = useState(seed);
  const [open, setOpen] = useState<Submission | null>(null);

  const mark = (id: string, status: Submission["status"]) =>
    setItems((p) => p.map((s) => (s.id === id ? { ...s, status } : s)));
  const remove = (id: string) => {
    setItems((p) => p.filter((s) => s.id !== id));
    setOpen(null);
  };

  const counts = {
    all: items.length,
    new: items.filter((s) => s.status === "new").length,
    read: items.filter((s) => s.status === "read").length,
    replied: items.filter((s) => s.status === "replied").length,
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-display text-3xl">Contact Submissions</h1>
        <p className="mt-1 text-sm text-muted-foreground">Messages received through the contact form.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-4">
        {[
          { label: "Total", value: counts.all },
          { label: "New", value: counts.new },
          { label: "Read", value: counts.read },
          { label: "Replied", value: counts.replied },
        ].map((s) => (
          <div key={s.label} className="border border-border bg-background p-5">
            <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{s.label}</div>
            <div className="mt-2 font-display text-3xl">{s.value}</div>
          </div>
        ))}
      </div>

      <div className="border border-border bg-background">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3">From</th>
                <th className="px-6 py-3">Subject</th>
                <th className="px-6 py-3">Date</th>
                <th className="px-6 py-3" />
              </tr>
            </thead>
            <tbody>
              {items.map((s) => (
                <tr key={s.id} className="border-t border-border hover:bg-muted/40">
                  <td className="px-6 py-4">
                    <StatusPill status={s.status} />
                  </td>
                  <td className="px-6 py-4">
                    <div>{s.name}</div>
                    <div className="text-xs text-muted-foreground">{s.email}</div>
                  </td>
                  <td className="px-6 py-4">{s.subject}</td>
                  <td className="px-6 py-4 text-muted-foreground">{s.date}</td>
                  <td className="px-6 py-4 text-right">
                    <button
                      onClick={() => { setOpen(s); if (s.status === "new") mark(s.id, "read"); }}
                      className="text-[11px] uppercase tracking-[0.22em] text-accent hover:underline"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
              {items.length === 0 && (
                <tr><td colSpan={5} className="px-6 py-10 text-center text-muted-foreground">No submissions.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/60 p-4">
          <div className="w-full max-w-xl border border-border bg-background">
            <div className="flex items-center justify-between border-b border-border px-6 py-4">
              <div>
                <div className="font-display text-xl">{open.subject}</div>
                <div className="text-xs text-muted-foreground">{open.name} · {open.email} · {open.date}</div>
              </div>
              <button onClick={() => setOpen(null)} className="text-sm text-muted-foreground">✕</button>
            </div>
            <div className="p-6">
              <p className="text-sm leading-relaxed whitespace-pre-wrap">{open.message}</p>
              <div className="mt-6 flex flex-wrap items-center gap-2">
                <StatusPill status={open.status} />
                <div className="ml-auto flex gap-2">
                  <button onClick={() => mark(open.id, "replied")} className="bg-forest px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-cream hover:bg-accent">Mark replied</button>
                  <button onClick={() => remove(open.id)} className="border border-destructive/40 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-destructive hover:bg-destructive hover:text-destructive-foreground">Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function StatusPill({ status }: { status: Submission["status"] }) {
  const map = {
    new: "bg-accent text-accent-foreground",
    read: "bg-secondary text-secondary-foreground",
    replied: "bg-forest text-cream",
  } as const;
  return (
    <span className={`inline-block px-2 py-1 text-[10px] uppercase tracking-[0.2em] ${map[status]}`}>
      {status}
    </span>
  );
}
