import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2, MessageCircle, Phone } from "lucide-react";
import { products, productsByCategory } from "@/data/products";
import { site, telHref, waHref } from "@/data/site";
import { EnquiryForm } from "@/components/EnquiryForm";
import { ProductCard } from "@/components/ProductCard";
import { Reveal } from "@/components/Reveal";
import { MagnetLink } from "@/components/Magnet";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = products.find((p) => p.slug === params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Product not found | SSLVEW" }, { name: "robots", content: "noindex" }],
      };
    }
    const t = `${loaderData.product.name} — ${loaderData.product.category} | SSLVEW`;
    const d = loaderData.product.description;
    return {
      meta: [
        { title: t },
        { name: "description", content: d },
        { property: "og:title", content: t },
        { property: "og:description", content: d },
        { property: "og:type", content: "product" },
        { property: "og:url", content: `/products/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/products/${params.slug}` }],
    };
  },
  component: ProductDetail,
});

function ProductDetail() {
  const { product } = Route.useLoaderData();
  const related = productsByCategory(product.categorySlug)
    .filter((p) => p.slug !== product.slug)
    .slice(0, 4);

  function tilt(e: React.MouseEvent<HTMLImageElement>) {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const r = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - (r.left + r.width / 2)) / (r.width / 2);
    const y = (e.clientY - (r.top + r.height / 2)) / (r.height / 2);
    e.currentTarget.style.transform = `perspective(900px) rotateX(${-y * 3}deg) rotateY(${x * 3}deg)`;
  }

  return (
    <div className="container-page py-8 lg:py-14">
      <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm">
        <Link
          to="/products"
          className="inline-flex min-h-11 items-center gap-2 font-semibold text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="size-4" aria-hidden="true" /> All products
        </Link>
        <span className="text-muted-foreground">/</span>
        <Link
          to="/products"
          hash={product.categorySlug}
          className="min-h-11 content-center font-semibold text-muted-foreground transition-colors hover:text-primary"
        >
          {product.category}
        </Link>
      </nav>

      <div className="mt-3 grid gap-8 lg:grid-cols-2 lg:gap-12">
        <img
          src={product.image}
          alt={product.alt}
          width={1024}
          height={768}
          onMouseMove={tilt}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "")}
          className="tilt-media aspect-4/3 w-full rounded-lg border border-border bg-muted object-cover"
        />
        <div>
          <p className="eyebrow">{product.category}</p>
          <h1 className="mt-2 text-3xl font-extrabold leading-tight text-foreground sm:text-4xl">
            {product.name}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {product.description}
          </p>
          <p className="mt-3 text-base text-muted-foreground">
            <span className="font-semibold text-foreground">Application: </span>
            {product.application}
          </p>

          <h2 className="mt-7 font-display text-lg font-bold text-foreground">Key details</h2>
          <ul className="mt-3 space-y-3">
            {product.details.map((d: string) => (
              <li key={d} className="flex gap-3 text-sm text-muted-foreground">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                <span>{d}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-muted-foreground">
            Sizes, materials and capacities are confirmed against your machine or drawing — send us
            your sample or specification for an exact match.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <MagnetLink
              href={waHref(
                `Hello SSLVEW, I would like to enquire about the ${product.name} (${product.category}).`,
              )}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-target
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-primary px-6 text-base font-semibold text-primary-foreground hover:opacity-90"
            >
              <MessageCircle className="size-5" aria-hidden="true" /> Enquire on WhatsApp
            </MagnetLink>
            <MagnetLink
              href={telHref(site.phones[0])}
              data-cursor-target
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-border px-6 text-base font-semibold text-foreground hover:border-primary hover:text-primary"
            >
              <Phone className="size-5 text-primary" aria-hidden="true" /> Call {site.phones[0]}
            </MagnetLink>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-12">
          <h2 className="text-xl font-bold text-foreground sm:text-2xl">
            More from {product.category}
          </h2>
          <div className="mt-5 grid grid-cols-1 gap-4 min-[420px]:grid-cols-2 lg:grid-cols-4">
            {related.map((p, i) => (
              <Reveal as="div" key={p.slug} delay={i * 50} className="flex">
                <div className="flex w-full">
                  <ProductCard product={p} />
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      <section className="mt-12 rounded-lg border border-border bg-card p-6 lg:p-8">
        <h2 className="text-2xl font-bold text-foreground">Enquire about the {product.name}</h2>
        <div className="mt-6">
          <EnquiryForm defaultProduct={product.name} />
        </div>
      </section>
    </div>
  );
}
