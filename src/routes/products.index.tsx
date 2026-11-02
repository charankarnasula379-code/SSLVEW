import { useEffect, useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { categories, products, productsByCategory } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { Reveal } from "@/components/Reveal";

const title = "Product Catalogue | SSLVEW Palm Oil Machinery & Spare Parts";
const description =
  "Complete SSLVEW product catalogue: P15 screw press components, digester, ripple mill, FFB cage, kernel, sludge pump, EFB shredder machinery, hanger bearings, machines and fabrication.";

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: Products,
});

function Products() {
  const [active, setActive] = useState<string>("all");

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash) {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    };

    // Run on initial mount
    const timer = setTimeout(handleHash, 100);
    window.addEventListener("hashchange", handleHash);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("hashchange", handleHash);
    };
  }, []);

  const shown = useMemo(
    () => (active === "all" ? categories : categories.filter((c) => c.slug === active)),
    [active],
  );

  return (
    <div className="container-page py-8 lg:py-14">
      <p className="eyebrow">Products</p>
      <h1 className="mt-2 max-w-3xl text-3xl font-extrabold leading-tight text-foreground sm:text-4xl">
        Palm oil machinery, spare parts and fabrication
      </h1>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
        {products.length} products across {categories.length} categories. Every item is manufactured
        or fabricated to suit your plant — tell us your requirement and we will confirm sizing and
        delivery.
      </p>

      {/* Category filter */}
      <nav aria-label="Product categories" className="mt-6">
        <ul className="flex flex-wrap gap-2">
          {[{ slug: "all", name: "All products" }, ...categories].map((c) => {
            const on = active === c.slug;
            return (
              <li key={c.slug}>
                <button
                  type="button"
                  onClick={() => setActive(c.slug)}
                  aria-pressed={on}
                  className={`min-h-11 rounded-md border px-3.5 text-sm font-semibold transition-colors ${
                    on
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-card text-foreground hover:border-primary hover:text-primary"
                  }`}
                >
                  {c.name}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {shown.map((category, ci) => {
        const items = productsByCategory(category.slug);
        return (
          <section key={category.slug} id={category.slug} className="mt-10 scroll-mt-24">
            <Reveal>
              <div className="border-b border-border pb-4">
                <h2 className="text-xl font-bold text-foreground sm:text-2xl">{category.name}</h2>
                <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                  {category.description}
                </p>
                <p className="mt-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
                  {items.length} {items.length === 1 ? "product" : "products"}
                </p>
              </div>
            </Reveal>
            <div className="mt-5 grid grid-cols-1 gap-4 min-[420px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {items.map((p, i) => (
                <Reveal as="div" key={p.slug} delay={Math.min(i, 5) * 50} className="flex">
                  <div className="flex w-full">
                    <ProductCard product={p} eager={ci === 0 && i < 2} />
                  </div>
                </Reveal>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
