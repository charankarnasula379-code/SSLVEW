import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { EnquiryForm } from "@/components/EnquiryForm";
import { ContactStrip } from "@/components/ContactStrip";
import { site, waHref } from "@/data/site";

const title = "Contact SSLVEW | Palm Oil Machinery, Adavipolam, Yanam";
const description =
  "Contact SSLVEW in Industrial Area, Adavipolam, Yanam – 533464. Call +91 8977030222, email sslvew@gmail.com or send an enquiry for palm oil machinery and fabrication.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <div className="container-page py-10 lg:py-16">
      <p className="eyebrow">Contact Us</p>
      <h1 className="mt-2 max-w-3xl text-3xl font-extrabold leading-tight text-foreground sm:text-4xl">
        Tell us what you need and we will get back to you
      </h1>

      <div className="mt-8">
        <ContactStrip />
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:gap-12">
        <section className="rounded-lg border border-border bg-card p-6 lg:p-8">
          <h2 className="text-xl font-bold text-foreground">Send an enquiry</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Share a few details about your requirement — machinery, spare parts or fabrication work.
          </p>
          <div className="mt-6">
            <EnquiryForm />
          </div>
        </section>

        <section className="space-y-5">
          <div className="rounded-lg border border-border bg-card p-6">
            <h2 className="text-xl font-bold text-foreground">Visit our workshop</h2>
            <address className="mt-3 not-italic text-sm leading-relaxed text-muted-foreground">
              {site.name}
              <br />
              {site.address.line1}
              <br />
              {site.address.line2}
              <br />
              {site.address.line3}
            </address>
          </div>
          <a
            href={waHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-14 items-center justify-center gap-2 rounded-md bg-primary px-6 text-base font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            <MessageCircle className="size-5" aria-hidden="true" /> Message us on WhatsApp
          </a>
          <div className="overflow-hidden rounded-lg border border-border bg-card">
            <iframe
              title="Map showing SSLVEW location in Adavipolam, Yanam"
              src="https://www.google.com/maps?q=Adavipolam,%20Yanam,%20Puducherry%20533464&output=embed"
              loading="lazy"
              className="h-64 w-full border-0"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
