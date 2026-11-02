import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ShieldCheck,
  Cog,
  Wrench,
  Headset,
  Package,
  MessageCircle,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import heroImage from "@/assets/hero-machine.jpg";
import galleryWorkshop from "@/assets/gallery-workshop.jpg";
import galleryInstalled from "@/assets/gallery-installed.jpg";
import galleryParts from "@/assets/gallery-parts.jpg";
import fabricationImage from "@/assets/product-fabrication.jpg";
import { categories, featuredProducts, products } from "@/data/products";
import { site, waHref } from "@/data/site";
import { ProductCard } from "@/components/ProductCard";
import { ContactStrip } from "@/components/ContactStrip";
import { ScrollIndicator } from "@/components/ScrollIndicator";

const title =
  "Sri Sarva Lakshmi Vinayaka Engineering Work | Palm Oil Machinery Manufacturer in Yanam";
const description =
  "SSLVEW manufactures, supplies and fabricates palm oil machinery — EFB shredder, nut cracker, P15 screw press, spare parts and material handling equipment in Adavipolam, Yanam.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: site.name,
          email: site.email,
          telephone: site.phones,
          address: {
            "@type": "PostalAddress",
            streetAddress: site.address.line1,
            addressLocality: "Yanam",
            postalCode: "533464",
            addressRegion: "Puducherry",
            addressCountry: "IN",
          },
          openingHours: "Mo-Sa 09:00-18:00",
        }),
      },
    ],
  }),
  component: Home,
});

const features = [
  { icon: ShieldCheck, label: "High Quality Materials" },
  { icon: Cog, label: "Advanced Technology" },
  { icon: Wrench, label: "Customized Solutions" },
  { icon: Headset, label: "Reliable After Sales Support" },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative border-b border-border">
        <div className="container-page relative grid items-center gap-8 py-10 lg:grid-cols-2 lg:gap-14 lg:py-16">
          <div className="fade-up">
            <p className="eyebrow">Engineered for strength. Built for performance.</p>
            <div className="mt-3 h-0.5 w-14 bg-primary" />
            <h1 className="mt-5 text-3xl font-extrabold leading-[1.1] text-foreground sm:text-4xl lg:text-5xl">
              High Quality Palm Oil Machinery &amp; Fabrication Solutions
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              We are manufacturers, suppliers and fabricators of high quality palm oil machinery and
              fabrication works built for durability, efficiency and long lasting performance.
            </p>

            <ul className="mt-7 grid grid-cols-2 gap-x-4 gap-y-4 sm:grid-cols-4">
              {features.map((f) => (
                <li key={f.label} className="flex items-start gap-2.5">
                  <f.icon className="mt-0.5 size-6 shrink-0 text-primary" aria-hidden="true" />
                  <span className="text-sm font-semibold leading-tight text-foreground">
                    {f.label}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/products"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-primary px-6 text-base font-semibold uppercase tracking-wide text-primary-foreground transition-opacity hover:opacity-90"
              >
                <Package className="size-5" aria-hidden="true" /> View Products
              </Link>
              <a
                href={waHref()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-primary bg-card px-6 text-base font-semibold uppercase tracking-wide text-primary transition-colors hover:bg-accent"
              >
                <MessageCircle className="size-5" aria-hidden="true" /> WhatsApp Us
              </a>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg border border-border">
            <img
              src={heroImage}
              alt="Palm oil mill machinery manufactured by SSLVEW inside the workshop"
              width={1408}
              height={1008}
              className="aspect-4/3 w-full object-cover lg:aspect-5/4"
            />
          </div>

          {/* Vertical Scroll Indicator for Desktop */}
          <ScrollIndicator className="absolute bottom-4 right-8 z-10" />
        </div>
      </section>

      {/* Contact strip */}
      <section className="container-page -mt-px py-8" aria-label="Contact details">
        <ContactStrip />
      </section>

      {/* Product categories */}
      <section className="container-page py-10 lg:py-16">
        <p className="eyebrow">What we build</p>
        <h2 className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">Product Categories</h2>
        <div className="mt-6 grid grid-cols-1 gap-3 min-[420px]:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <Link
              key={c.slug}
              to="/products"
              hash={c.slug}
              className="flex min-h-14 items-center justify-between gap-3 rounded-md border border-border bg-card px-4 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              {c.name}
              <ArrowRight className="size-4 shrink-0 text-primary" aria-hidden="true" />
            </Link>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="border-y border-border bg-card">
        <div className="container-page grid gap-8 py-12 lg:grid-cols-2 lg:items-center lg:gap-14">
          <img
            src={fabricationImage}
            alt="Fabrication of a large steel vessel at the SSLVEW engineering workshop"
            loading="lazy"
            width={1024}
            height={768}
            className="aspect-4/3 w-full rounded-lg border border-border object-cover"
          />
          <div>
            <p className="eyebrow">About SSLVEW</p>
            <h2 className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">
              Engineering support for the palm oil industry
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Sri Sarva Lakshmi Vinayaka Engineering Work manufactures machinery and spare parts for
              the palm oil industry and supplies material handling equipment to processing plants.
              From our workshop in Adavipolam, Yanam, we build equipment that stands up to
              continuous mill operation.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Our focus is straightforward: quality workmanship, efficient equipment, sustainable
              operation and solutions shaped around each customer's plant.
            </p>
            <Link
              to="/about"
              className="mt-6 inline-flex min-h-12 items-center gap-2 rounded-md border border-border px-5 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              More about us <ArrowRight className="size-4 text-primary" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="container-page py-10 lg:py-16">
        <p className="eyebrow">Why Choose Us</p>
        <h2 className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">
          Built by engineers who know the mill floor
        </h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[
            ["In-house manufacturing", "Machinery and spare parts produced in our own workshop."],
            [
              "Custom fabrication",
              "Equipment and structures made to your drawings and site layout.",
            ],
            [
              "Durable construction",
              "Quality materials selected for continuous, heavy-duty running.",
            ],
            ["Fast spare parts", "Replacement parts manufactured to match existing equipment."],
            ["Local presence", "Based in Yanam, close to plants across the region."],
            ["After sales support", "Guidance, servicing and parts long after installation."],
          ].map(([heading, text]) => (
            <li key={heading} className="rounded-lg border border-border bg-card p-5">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <h3 className="text-base font-bold text-foreground">{heading}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{text}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Featured machinery */}
      <section className="border-t border-border bg-card py-10 lg:py-16">
        <div className="container-page">
          <p className="eyebrow">Machinery Showcase</p>
          <h2 className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">Featured Products</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
          <Link
            to="/products"
            className="mt-7 inline-flex min-h-12 items-center gap-2 rounded-md bg-primary px-6 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            View all {products.length} products
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* Gallery preview */}
      <section className="container-page py-10 lg:py-16">
        <p className="eyebrow">Gallery</p>
        <h2 className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">
          Our work in the workshop and on site
        </h2>
        <div className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-3">
          {[
            [galleryWorkshop, "Machining components inside the SSLVEW engineering workshop"],
            [galleryInstalled, "Installed palm oil processing plant with conveyors and pipework"],
            [galleryParts, "Precision machined gear and shaft parts for palm oil machinery"],
          ].map(([src, alt]) => (
            <img
              key={src}
              src={src}
              alt={alt}
              loading="lazy"
              width={1024}
              height={768}
              className="aspect-4/3 w-full rounded-lg border border-border object-cover last:col-span-2 lg:last:col-span-1"
            />
          ))}
        </div>
        <Link
          to="/gallery"
          className="mt-6 inline-flex min-h-12 items-center gap-2 rounded-md border border-border bg-card px-5 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
        >
          Open gallery <ArrowRight className="size-4 text-primary" aria-hidden="true" />
        </Link>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-card py-12">
        <div className="container-page text-center">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            Need machinery, spare parts or fabrication work?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-muted-foreground">
            Send us your requirement and our team will respond with the right solution for your
            plant.
          </p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex min-h-12 items-center justify-center rounded-md bg-primary px-7 text-base font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Send Enquiry
            </Link>
            <a
              href={waHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-primary px-7 text-base font-semibold text-primary transition-colors hover:bg-accent"
            >
              <MessageCircle className="size-5" aria-hidden="true" /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
