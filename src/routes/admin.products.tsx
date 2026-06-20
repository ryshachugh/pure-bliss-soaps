import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { products as seed, type Product } from "@/lib/products";

export const Route = createFileRoute("/admin/products")({
  component: AdminProducts,
});

type Draft = {
  slug: string;
  name: string;
  tagline: string;
  shortDescription: string;
  price: number;
  image: string;
};

const empty: Draft = { slug: "", name: "", tagline: "", shortDescription: "", price: 0, image: "" };

function AdminProducts() {
  const [items, setItems] = useState<Product[]>(seed);
  const [editing, setEditing] = useState<Draft | null>(null);
  const [showForm, setShowForm] = useState(false);

  const openNew = () => { setEditing({ ...empty }); setShowForm(true); };
  const openEdit = (p: Product) => {
    setEditing({
      slug: p.slug, name: p.name, tagline: p.tagline,
      shortDescription: p.shortDescription, price: p.price, image: p.image,
    });
    setShowForm(true);
  };

  const save = () => {
    if (!editing) return;
    setItems((prev) => {
      const exists = prev.find((x) => x.slug === editing.slug);
      if (exists) {
        return prev.map((x) => x.slug === editing.slug ? { ...x, ...editing } : x);
      }
      return [
        ...prev,
        {
          ...editing,
          description: editing.shortDescription,
          ingredients: [], benefits: [], skinType: "All", usage: "", reviews: [],
        } as Product,
      ];
    });
    setShowForm(false);
    setEditing(null);
  };

  const remove = (slug: string) => setItems((prev) => prev.filter((p) => p.slug !== slug));

  return (
    <div className="space-y-8">
      <div className="flex items-end justify-between">
        <div>
          <h1 className="font-display text-3xl">Products</h1>
          <p className="mt-1 text-sm text-muted-foreground">Add, edit, and curate the soap collection.</p>
        </div>
        <button
          onClick={openNew}
          className="bg-forest px-5 py-3 text-[11px] uppercase tracking-[0.22em] text-cream hover:bg-accent"
        >
          + Add Product
        </button>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((p) => (
          <div key={p.slug} className="border border-border bg-background">
            <div className="aspect-[4/3] overflow-hidden bg-muted">
              {p.image ? (
                <img src={p.image} alt={p.name} className="h-full w-full object-cover" />
              ) : (
                <div className="grid h-full place-items-center text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  No image
                </div>
              )}
            </div>
            <div className="p-5">
              <div className="flex items-baseline justify-between">
                <h3 className="font-display text-lg">{p.name}</h3>
                <span className="text-sm">₹ {p.price * 20}</span>
              </div>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-accent">{p.tagline}</p>
              <p className="mt-3 line-clamp-2 text-sm text-muted-foreground">{p.shortDescription}</p>
              <div className="mt-5 flex gap-2">
                <button
                  onClick={() => openEdit(p)}
                  className="flex-1 border border-border px-3 py-2 text-[11px] uppercase tracking-[0.2em] hover:bg-secondary"
                >
                  Edit
                </button>
                <button
                  onClick={() => remove(p.slug)}
                  className="flex-1 border border-destructive/40 px-3 py-2 text-[11px] uppercase tracking-[0.2em] text-destructive hover:bg-destructive hover:text-destructive-foreground"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showForm && editing && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/60 p-4">
          <div className="w-full max-w-2xl border border-border bg-background">
            <div className="flex items-center justify-between border-b border-border px-6 py-4">
              <h2 className="font-display text-xl">
                {items.some((i) => i.slug === editing.slug) ? "Edit Product" : "New Product"}
              </h2>
              <button onClick={() => setShowForm(false)} className="text-sm text-muted-foreground">✕</button>
            </div>
            <div className="grid gap-4 p-6 md:grid-cols-2">
              <Field label="Name">
                <input value={editing.name} onChange={(e) => setEditing({ ...editing, name: e.target.value })} className="input" />
              </Field>
              <Field label="Slug">
                <input value={editing.slug} onChange={(e) => setEditing({ ...editing, slug: e.target.value })} className="input" />
              </Field>
              <Field label="Tagline">
                <input value={editing.tagline} onChange={(e) => setEditing({ ...editing, tagline: e.target.value })} className="input" />
              </Field>
              <Field label="Price (USD)">
                <input type="number" value={editing.price} onChange={(e) => setEditing({ ...editing, price: Number(e.target.value) })} className="input" />
              </Field>
              <Field label="Product Image" full>
                <ImageDropzone
                  value={editing.image}
                  onChange={(v) => setEditing({ ...editing, image: v })}
                />
              </Field>
              <Field label="Description" full>
                <textarea
                  value={editing.shortDescription}
                  onChange={(e) => setEditing({ ...editing, shortDescription: e.target.value })}
                  rows={4}
                  className="input resize-none"
                />
              </Field>
              <div className="md:col-span-2 flex justify-end gap-2 pt-2">
                <button onClick={() => setShowForm(false)} className="border border-border px-5 py-3 text-[11px] uppercase tracking-[0.22em]">Cancel</button>
                <button onClick={save} className="bg-forest px-5 py-3 text-[11px] uppercase tracking-[0.22em] text-cream hover:bg-accent">Save</button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`.input{width:100%;border:1px solid var(--border);background:var(--background);padding:.65rem .85rem;font-size:14px;outline:none}.input:focus{border-color:var(--accent)}`}</style>
    </div>
  );
}

function Field({ label, children, full }: { label: string; children: React.ReactNode; full?: boolean }) {
  return (
    <label className={`block ${full ? "md:col-span-2" : ""}`}>
      <span className="mb-1 block text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{label}</span>
      {children}
    </label>
  );
}

function ImageDropzone({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragging, setDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFile = (file: File) => {
    setError(null);
    if (!file.type.startsWith("image/")) {
      setError("Please upload an image file.");
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      setError("Image must be under 5MB.");
      return;
    }
    const reader = new FileReader();
    reader.onload = () => onChange(String(reader.result));
    reader.readAsDataURL(file);
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) handleFile(file);
  };

  if (value) {
    return (
      <div className="relative border border-border bg-muted">
        <img src={value} alt="Preview" className="max-h-64 w-full object-contain" />
        <div className="flex items-center justify-between border-t border-border bg-background px-3 py-2">
          <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Image attached</span>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => inputRef.current?.click()}
              className="text-[11px] uppercase tracking-[0.2em] text-accent hover:underline"
            >
              Replace
            </button>
            <button
              type="button"
              onClick={() => onChange("")}
              className="text-[11px] uppercase tracking-[0.2em] text-destructive hover:underline"
            >
              Remove
            </button>
          </div>
        </div>
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])}
        />
      </div>
    );
  }

  return (
    <div
      onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
      onDragLeave={() => setDragging(false)}
      onDrop={onDrop}
      onClick={() => inputRef.current?.click()}
      className={`flex cursor-pointer flex-col items-center justify-center gap-2 border-2 border-dashed p-10 text-center transition-colors ${
        dragging ? "border-accent bg-accent/5" : "border-border bg-muted/30 hover:border-accent/60"
      }`}
    >
      <div className="grid h-12 w-12 place-items-center border border-border bg-background">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 16V4M12 4l-4 4M12 4l4 4" />
          <path d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2" />
        </svg>
      </div>
      <div className="text-sm">
        <span className="text-accent">Click to upload</span> or drag and drop
      </div>
      <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
        PNG · JPG · WEBP — up to 5MB
      </div>
      {error && <div className="mt-2 text-xs text-destructive">{error}</div>}
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])}
      />
    </div>
  );
}
