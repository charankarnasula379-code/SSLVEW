import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { Logo } from "./Logo";
import { site, telHref } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card pb-24 lg:pb-0">
      <div className="container-page grid gap-10 py-12 md:grid-cols-3">
        <div>
          <Logo />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Manufacturers, suppliers and fabricators of palm oil machinery, spare parts and material
            handling equipment in Yanam, Puducherry.
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="text-sm font-semibold text-foreground">Quick Links</h2>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About Us" },
              { to: "/products", label: "Products" },
              { to: "/gallery", label: "Gallery" },
              { to: "/contact", label: "Contact Us" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition-colors hover:text-primary">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-semibold text-foreground">Contact</h2>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
              <span>
                {site.address.line1}
                <br />
                {site.address.line2}, {site.address.line3}
              </span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
              <span className="flex flex-col">
                {site.phones.map((p) => (
                  <a key={p} href={telHref(p)} className="hover:text-primary">
                    {p}
                  </a>
                ))}
              </span>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
              <a href={`mailto:${site.email}`} className="hover:text-primary">
                {site.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
              <span>{site.hours}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <p className="container-page py-5 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
