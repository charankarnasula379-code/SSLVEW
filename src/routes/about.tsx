import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import workshop from "@/assets/gallery-workshop.jpg";
import { site } from "@/data/site";

const title = "About SSLVEW | Palm Oil Machinery Engineering, Yanam";
const description =
  "SSLVEW manufactures palm oil machinery, spare parts and material handling equipment from Adavipolam, Yanam, with a focus on quality, efficiency and customer-specific solutions.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <div className="container-page py-10 lg:py-16">
      <p className="eyebrow">About Us</p>
      <h1 className="mt-2 max-w-3xl text-3xl font-extrabold leading-tight text-foreground sm:text-4xl">
        Palm oil machinery and fabrication, engineered in Yanam
      </h1>

      <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:items-start lg:gap-14">
        <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
          <p>
            {site.name} (SSLVEW) manufactures machinery and spare parts for the palm oil industry
            and supplies material handling equipment to processing plants. Our workshop in
            Industrial Area, Adavipolam, Yanam is equipped to fabricate, machine and assemble
            complete units as well as individual components.
          </p>
          <p>
            We work closely with mill teams to understand how each plant runs before we build. That
            means equipment sized for real throughput, parts that fit existing installations, and
            fabrication designed around the space available on site.
          </p>
          <p>
            Quality, efficiency and sustainability guide the way we work. We select durable
            materials, keep manufacturing in-house where possible, and support every unit we deliver
            with spare parts and servicing.
          </p>
          <h2 className="pt-2 font-display text-xl font-bold text-foreground">What we offer</h2>
          <ul className="space-y-3">
            {[
              "Manufacture of palm oil processing machinery",
              "Spare parts for existing mill equipment",
              "Material handling equipment — conveyors, elevators, hoppers",
              "Custom industrial and engineering fabrication",
              "Installation support and after sales service",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="pt-4">
            <Link
              to="/contact"
              className="inline-flex min-h-12 items-center rounded-md bg-primary px-6 text-base font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Talk to our team
            </Link>
          </div>
        </div>

        <div className="space-y-5">
          <img
            src={workshop}
            alt="Engineering workshop where SSLVEW manufactures palm oil machinery"
            loading="lazy"
            width={1024}
            height={768}
            className="aspect-4/3 w-full rounded-lg border border-border object-cover"
          />
          <dl className="grid gap-4 rounded-lg border border-border bg-card p-6 sm:grid-cols-2">
            <div>
              <dt className="text-sm font-semibold text-foreground">Location</dt>
              <dd className="mt-1 text-sm text-muted-foreground">
                {site.address.line1}, {site.address.line2}
              </dd>
            </div>
            <div>
              <dt className="text-sm font-semibold text-foreground">Industry</dt>
              <dd className="mt-1 text-sm text-muted-foreground">
                Palm oil processing &amp; industrial fabrication
              </dd>
            </div>
            <div>
              <dt className="text-sm font-semibold text-foreground">Working hours</dt>
              <dd className="mt-1 text-sm text-muted-foreground">{site.hours}</dd>
            </div>
            <div>
              <dt className="text-sm font-semibold text-foreground">Email</dt>
              <dd className="mt-1 text-sm text-muted-foreground">
                <a href={`mailto:${site.email}`} className="hover:text-primary">
                  {site.email}
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
