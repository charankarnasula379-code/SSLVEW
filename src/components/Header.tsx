import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { Logo } from "./Logo";
import { site, telHref, waHref } from "@/data/site";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/products", label: "Products" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact Us" },
] as const;

function WhatsAppIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.4-.42-.56-.43h-.47c-.17 0-.44.06-.67.31-.23.25-.87.85-.87 2.08s.89 2.41 1.02 2.58c.13.17 1.76 2.68 4.26 3.76.6.26 1.06.41 1.42.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.17-.48-.29" />
    </svg>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <header className="sticky top-2.5 sm:top-4 z-50 w-full px-3 sm:px-6">
      <div className="mx-auto flex h-14 sm:h-16 max-w-6xl items-center justify-between gap-2 sm:gap-4 rounded-full border border-border/80 bg-card/90 px-3.5 sm:px-5 backdrop-blur-md shadow-lg shadow-black/5 transition-all">
        {/* Left: Highlighted Logo Emblem */}
        <Logo />

        {/* Center: Floating Navigation Bar (Desktop / Laptop) */}
        <nav
          aria-label="Main"
          className="hidden items-center gap-1 rounded-full border border-border/60 bg-secondary/50 p-1 lg:flex"
        >
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-full px-4 py-1.5 text-sm font-medium text-muted-foreground transition-all duration-200 hover:text-foreground hover:bg-card/80"
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{
                className: "bg-card text-primary font-semibold shadow-xs",
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right: Actions (Phone Dial Pad, WhatsApp & Mobile Menu Toggle) */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Dial Pad Call Button */}
          <a
            href={telHref(site.phones[0])}
            aria-label={`Call SSLVEW on ${site.phones[0]}`}
            title={`Call ${site.phones[0]}`}
            className="grid size-9 sm:size-10 place-items-center rounded-full border border-border/80 bg-background/80 text-foreground transition-all duration-200 hover:border-primary hover:text-primary hover:bg-accent/40 hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <Phone className="size-4 sm:size-4.5 text-primary" aria-hidden="true" />
          </a>

          {/* WhatsApp Direct Chat Button */}
          <a
            href={waHref()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Message SSLVEW on WhatsApp"
            title="Chat on WhatsApp"
            className="grid size-9 sm:size-10 place-items-center rounded-full border border-border/80 bg-background/80 text-emerald-600 transition-all duration-200 hover:border-emerald-500 hover:bg-emerald-500/10 hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 dark:text-emerald-400"
          >
            <WhatsAppIcon className="size-4.5 sm:size-5" />
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid size-9 sm:size-10 place-items-center rounded-full border border-border/80 text-foreground transition-colors hover:bg-secondary lg:hidden"
          >
            {open ? (
              <X className="size-5" aria-hidden="true" />
            ) : (
              <Menu className="size-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Floating Mobile Dropdown Menu */}
      {open && (
        <div className="mx-auto mt-2 max-w-6xl lg:hidden">
          <nav
            id="mobile-menu"
            aria-label="Mobile"
            className="rounded-2xl border border-border/80 bg-card/95 p-3.5 backdrop-blur-md shadow-xl"
          >
            <ul className="space-y-1">
              {nav.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className="flex min-h-11 items-center rounded-lg px-3 text-base font-medium text-foreground transition-colors hover:bg-secondary"
                    activeOptions={{ exact: item.to === "/" }}
                    activeProps={{ className: "text-primary font-semibold bg-accent/60" }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-3 grid grid-cols-2 gap-2 border-t border-border/70 pt-3">
              <a
                href={telHref(site.phones[0])}
                className="flex min-h-11 items-center justify-center gap-2 rounded-lg bg-primary px-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                <Phone className="size-4" aria-hidden="true" /> Call Us
              </a>
              <a
                href={waHref()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-11 items-center justify-center gap-2 rounded-lg border border-emerald-600/40 bg-emerald-500/10 px-3 text-sm font-semibold text-emerald-700 transition-colors hover:bg-emerald-500/20 dark:text-emerald-300"
              >
                <WhatsAppIcon className="size-4 text-emerald-600 dark:text-emerald-400" /> WhatsApp
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
