import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { site, telHref } from "@/data/site";

export function ContactStrip() {
  return (
    <div className="grid gap-x-8 gap-y-6 rounded-lg border border-border bg-card p-6 sm:grid-cols-2 lg:grid-cols-4">
      <div className="flex gap-3">
        <MapPin className="mt-0.5 size-6 shrink-0 text-primary" aria-hidden="true" />
        <div className="min-w-0">
          <h3 className="text-sm font-bold uppercase tracking-wide text-foreground">
            Adavipolam, Yanam
          </h3>
          <p className="text-sm text-muted-foreground">
            {site.address.line2}, {site.address.line3}
          </p>
        </div>
      </div>
      <div className="flex gap-3">
        <Phone className="mt-0.5 size-6 shrink-0 text-primary" aria-hidden="true" />
        <div className="min-w-0">
          <h3 className="text-sm font-bold uppercase tracking-wide text-foreground">Call Us</h3>
          {site.phones.map((p) => (
            <a
              key={p}
              href={telHref(p)}
              className="block text-sm text-muted-foreground hover:text-primary"
            >
              {p}
            </a>
          ))}
        </div>
      </div>
      <div className="flex gap-3">
        <Mail className="mt-0.5 size-6 shrink-0 text-primary" aria-hidden="true" />
        <div className="min-w-0">
          <h3 className="text-sm font-bold uppercase tracking-wide text-foreground">Email Us</h3>
          <a
            href={`mailto:${site.email}`}
            className="block truncate text-sm text-muted-foreground hover:text-primary"
          >
            {site.email}
          </a>
        </div>
      </div>
      <div className="flex gap-3">
        <Clock className="mt-0.5 size-6 shrink-0 text-primary" aria-hidden="true" />
        <div className="min-w-0">
          <h3 className="text-sm font-bold uppercase tracking-wide text-foreground">
            Working Hours
          </h3>
          <p className="text-sm text-muted-foreground">{site.hours}</p>
        </div>
      </div>
    </div>
  );
}
