import { Link } from "@tanstack/react-router";
import { site } from "@/data/site";

export function Logo({ className = "" }: { compact?: boolean; className?: string }) {
  return (
    <Link
      to="/"
      className={`inline-flex shrink-0 items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${className}`}
      aria-label={`${site.name} home`}
    >
      <img
        src={`${import.meta.env.BASE_URL}sslvew-logo.png`}
        alt={site.name}
        className="size-9 sm:size-10 lg:size-11 shrink-0 object-contain transition-transform duration-200 hover:scale-105"
        loading="eager"
        decoding="async"
      />
    </Link>
  );
}
