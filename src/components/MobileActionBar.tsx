import { Link } from "@tanstack/react-router";
import { MessageCircle, Phone, Send } from "lucide-react";
import { site, telHref, waHref } from "@/data/site";

export function MobileActionBar() {
  const item =
    "flex min-h-14 flex-1 flex-col items-center justify-center gap-1 text-xs font-semibold";

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-card lg:hidden">
      <div className="mx-auto flex max-w-md">
        <a href={telHref(site.phones[0])} className={`${item} text-foreground`}>
          <Phone className="size-5 text-primary" aria-hidden="true" />
          Call
        </a>
        <a
          href={waHref()}
          target="_blank"
          rel="noopener noreferrer"
          className={`${item} border-x border-border text-foreground`}
        >
          <MessageCircle className="size-5 text-primary" aria-hidden="true" />
          WhatsApp
        </a>
        <Link to="/contact" className={`${item} text-foreground`}>
          <Send className="size-5 text-primary" aria-hidden="true" />
          Enquire
        </Link>
      </div>
    </div>
  );
}
