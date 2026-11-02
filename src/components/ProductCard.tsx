import { Link } from "@tanstack/react-router";
import type { Product } from "@/data/products";
import { waHref } from "@/data/site";

export function ProductCard({ product, eager = false }: { product: Product; eager?: boolean }) {
  function onMove(e: React.MouseEvent<HTMLElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--glare-x", `${((e.clientX - r.left) / r.width) * 100}%`);
    e.currentTarget.style.setProperty("--glare-y", `${((e.clientY - r.top) / r.height) * 100}%`);
  }

  return (
    <article
      onMouseMove={onMove}
      data-cursor-target
      className="glare-card flex flex-col rounded-lg border border-border bg-card hover:border-primary/40"
    >
      <img
        src={product.image}
        alt={product.alt}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        width={800}
        height={600}
        className="aspect-4/3 w-full rounded-t-lg bg-muted object-cover"
      />
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <span className="text-[0.7rem] font-semibold uppercase tracking-wider text-primary">
          {product.category}
        </span>
        <h3 className="mt-1.5 text-base font-bold leading-snug text-foreground sm:text-lg">
          {product.name}
        </h3>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
          {product.description}
        </p>
        <div className="mt-auto flex flex-col gap-2.5 pt-4 sm:flex-row">
          <Link
            to="/products/$slug"
            params={{ slug: product.slug }}
            className="inline-flex min-h-11 flex-1 items-center justify-center rounded-md bg-primary px-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            View Details
          </Link>
          <a
            href={waHref(
              `Hello SSLVEW, I would like to enquire about the ${product.name} (${product.category}).`,
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 flex-1 items-center justify-center rounded-md border border-border px-3 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            Enquire Now
          </a>
        </div>
      </div>
    </article>
  );
}
